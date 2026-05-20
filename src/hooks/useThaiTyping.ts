/**
 * useThaiTyping hook
 *
 * Handles Thai character-by-character typing logic.
 *
 * Thai input quirk:
 *   - Vowels, tone marks, and some diacritics are rendered on top of/below the
 *     base consonant in the Unicode string, so we must compare grapheme clusters
 *     rather than individual code-points.
 *   - We use Intl.Segmenter (or a simple grapheme-cluster splitter) to split
 *     both the target word and the user input into visual units.
 *   - A "space" between words is represented by the literal space character ' '.
 */

import { useCallback, useEffect, useReducer } from 'react';
import type { VocabularyItem } from '../data/vocabulary';

// ---------------------------------------------------------------------------
// Grapheme-cluster utilities
// ---------------------------------------------------------------------------

/** Split a Thai string into visual character clusters. */
export function splitGraphemes(str: string): string[] {
  // Modern browsers support Intl.Segmenter
  if (typeof Intl !== 'undefined' && (Intl as any).Segmenter) {
    const seg = new (Intl as any).Segmenter('th', { granularity: 'grapheme' });
    return [...seg.segment(str)].map((s: any) => s.segment as string);
  }
  // Fallback: split by code-point (works for basic ASCII, less accurate for Thai)
  return [...str];
}

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

export type CharStatus = 'pending' | 'correct' | 'incorrect';

export interface CharCell {
  char: string;      // grapheme cluster
  status: CharStatus;
}

export interface TypingState {
  cells: CharCell[];         // all target grapheme clusters with statuses
  cursor: number;            // index of current target cell
  inputBuffer: string;       // raw accumulated keystrokes since last accepted char
  completed: boolean;
  hasError: boolean;         // true if the current position has an error
  hasMissed: boolean;        // true if the user made at least one mistake in this word
  isWrongLanguage: boolean;  // true if keyboard is set to English/Japanese/etc. instead of Thai
}

// ---------------------------------------------------------------------------
// Reducer
// ---------------------------------------------------------------------------

type Action =
  | { type: 'KEY_PRESS'; key: string }
  | { type: 'RESET'; word: string }
  | { type: 'FORCE_TIMEOUT' };

function buildCells(word: string): CharCell[] {
  return splitGraphemes(word).map(c => ({ char: c, status: 'pending' as CharStatus }));
}

function reducer(state: TypingState, action: Action): TypingState {
  switch (action.type) {
    case 'RESET': {
      return {
        cells: buildCells(action.word),
        cursor: 0,
        inputBuffer: '',
        completed: false,
        hasError: false,
        hasMissed: false,
        isWrongLanguage: false,
      };
    }

    case 'FORCE_TIMEOUT': {
      if (state.completed) return state;
      // タイムアウト時はすべての未完了セルをincorrectにし、ミスあり完了とする
      const newCells = state.cells.map(cell => 
        cell.status === 'pending' ? { ...cell, status: 'incorrect' as CharStatus } : cell
      );
      return {
        ...state,
        cells: newCells,
        completed: true,
        hasError: true,
        hasMissed: true,
      };
    }

    case 'KEY_PRESS': {
      if (state.completed) return state;

      const { key } = action;

      // --- Backspace: clear error / go back one cell ---
      if (key === 'Backspace') {
        if (state.hasError) {
          // エラー状態なら、カーソルは戻さずにエラー状態だけをクリアする
          return {
            ...state,
            inputBuffer: '',
            hasError: false,
            isWrongLanguage: false,
          };
        }
        // エラーがない状態でのみ、1つ前の文字に戻る
        if (state.cursor === 0) return state;
        const prev = state.cursor - 1;
        const newCells = [...state.cells];
        newCells[prev] = { ...newCells[prev], status: 'pending' };
        return {
          ...state,
          cells: newCells,
          cursor: prev,
          inputBuffer: '',
          hasError: false,
          isWrongLanguage: false,
        };
      }

      // Ignore modifier keys etc.
      if (key.length > 1 && key !== ' ') return state;

      // タイ語以外の言語（英語・日本語等）の入力ソース検知
      const isEnglish = /[a-zA-Z]/.test(key);
      const isJapanese = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(key);
      const wrongLang = (isEnglish || isJapanese) && key.length === 1;

      if (wrongLang) {
        return {
          ...state,
          hasError: true,
          isWrongLanguage: true,
          inputBuffer: '',
          hasMissed: true,
        };
      }

      const target = state.cells[state.cursor];
      if (!target) return state;

      const targetChar = target.char;
      const isTargetSpace = targetChar === ' ';

      // If target is space, only space key advances
      if (isTargetSpace) {
        if (key === ' ') {
          const newCells = [...state.cells];
          newCells[state.cursor] = { ...target, status: 'correct' };
          const nextCursor = state.cursor + 1;
          return {
            ...state,
            cells: newCells,
            cursor: nextCursor,
            inputBuffer: '',
            hasError: false,
            isWrongLanguage: false,
            completed: nextCursor >= newCells.length,
          };
        }
        // Wrong key for space — mark error but don't advance
        return { ...state, hasError: true, hasMissed: true, isWrongLanguage: false };
      }

      // For Thai characters: accumulate key strokes and test against target cluster.
      const newBuffer = state.inputBuffer + key;

      if (newBuffer === targetChar) {
        // Correct full grapheme typed
        const newCells = [...state.cells];
        newCells[state.cursor] = { ...target, status: 'correct' };
        const nextCursor = state.cursor + 1;
        return {
          ...state,
          cells: newCells,
          cursor: nextCursor,
          inputBuffer: '',
          hasError: false,
          isWrongLanguage: false,
          completed: nextCursor >= newCells.length,
        };
      }

      // Check if buffer is a prefix of the target (still building the cluster)
      if (targetChar.startsWith(newBuffer)) {
        return { ...state, inputBuffer: newBuffer, hasError: false, isWrongLanguage: false };
      }

      // Wrong key
      return { ...state, hasError: true, inputBuffer: '', hasMissed: true, isWrongLanguage: false };
    }

    default:
      return state;
  }
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useThaiTyping(item: VocabularyItem) {
  const initialState: TypingState = {
    cells: buildCells(item.word),
    cursor: 0,
    inputBuffer: '',
    completed: false,
    hasError: false,
    hasMissed: false,
    isWrongLanguage: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET', word: item.word });
  }, [item.word]);

  const forceTimeout = useCallback(() => {
    dispatch({ type: 'FORCE_TIMEOUT' });
  }, []);

  useEffect(() => {
    reset();
  }, [reset]);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default browser behaviors for space (scrolling)
      if (e.key === ' ') e.preventDefault();
      dispatch({ type: 'KEY_PRESS', key: e.key });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { state, reset, forceTimeout };
}
