import React from 'react';
import type { CharCell } from '../hooks/useThaiTyping';

interface TypingDisplayProps {
  cells: CharCell[];
  cursor: number;
  hasError: boolean;
  completed: boolean;
}

const TypingDisplay: React.FC<TypingDisplayProps> = ({ cells, cursor, hasError, completed }) => {
  return (
    <div
      className="flex flex-wrap items-end justify-center select-none"
      style={{ gap: '0.05em' }}
    >
      {cells.map((cell, idx) => {
        const isCurrent = idx === cursor && !completed;
        const isCorrect = cell.status === 'correct';
        const isSpace = cell.char === ' ';

        // ── スペースセル ──
        if (isSpace) {
          return (
            <span
              key={idx}
              className="relative inline-flex items-end justify-center"
              style={{ width: '0.6em', height: '5rem' }}
            >
              {isCurrent && (
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[3px] rounded-full ${
                    hasError ? 'bg-rose-400' : 'bg-amber-400'
                  }`}
                  style={{ animation: hasError ? 'none' : 'blink 1s step-end infinite' }}
                />
              )}
              {isCorrect && (
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400/60" />
              )}
            </span>
          );
        }

        // ── 文字の色 ──
        // 正解済み  → 鮮やかな緑（即座に反映）
        // 現在位置  → 明るい白
        // エラー時  → 赤
        // 未入力   → 暗い白（少し見える程度）
        let color: string;
        if (completed) {
          color = '#34d399';            // 全完了: 全部緑
        } else if (isCorrect) {
          color = '#34d399';            // 正解済み: 緑
        } else if (isCurrent && hasError) {
          color = '#f87171';            // エラー: 赤
        } else if (isCurrent) {
          color = '#f1f5f9';            // 現在: 明白
        } else {
          color = 'rgba(255,255,255,0.2)'; // 未入力: 薄白
        }

        return (
          <span key={idx} className="relative inline-flex flex-col items-center">
            <span
              style={{
                fontFamily: "'Trirong', serif",
                fontSize: 'clamp(5rem, 14vw, 9rem)',
                lineHeight: 0.9,
                color,
                transition: 'color 0.12s ease',
                display: 'inline-block',
                transform: 'translateY(24px)', // 文字を押し下げる
              }}
            >
              {cell.char}
            </span>

            {/* カーソルアンダーライン (文字のシフトに合わせて位置を下げる) */}
            {isCurrent && (
              <span
                className={`absolute -bottom-5 left-0 right-0 h-[3px] rounded-full ${
                  hasError ? 'bg-rose-400' : 'bg-amber-400'
                }`}
                style={{ animation: hasError ? 'none' : 'blink 1s step-end infinite' }}
              />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default TypingDisplay;
