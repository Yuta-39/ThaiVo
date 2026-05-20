import React, { useEffect, useState } from 'react';
import type { VocabularyItem } from '../data/vocabulary';
import { useThaiTyping } from '../hooks/useThaiTyping';
import TypingDisplay from './TypingDisplay';
import { getFrequencyBadgeStyle } from './WordListScreen';

interface TypingScreenProps {
  item: VocabularyItem;
  wordId: number;
  currentIndex: number;
  totalCount: number;
  isRandom: boolean;
  onToggleRandom: (val: boolean) => void;
  isTimeLimit: boolean;
  combo: number;
  onCompleteWord: (isPerfect: boolean) => void;
  onBack: () => void;
  onNext: () => void;
  hideMeanings: boolean;
}

// 連続正解数(combo/ストライク)に応じた中央の超豪華装飾スタイル
const getStreakDecoration = (combo: number) => {
  if (combo <= 0) {
    return null;
  }

  let colorClass = '';
  let borderClass = '';
  let bgClass = '';
  let shadowClass = '';
  let dotColor = '';
  let categoryLabel = '';
  let scaleClass = 'scale-110';

  if (combo >= 1 && combo <= 19) {
    // 1〜19: 緑
    colorClass = 'text-emerald-400';
    borderClass = 'border-emerald-500/40';
    bgClass = 'bg-emerald-950/25';
    shadowClass = 'shadow-[0_0_20px_rgba(16,185,129,0.2)]';
    dotColor = 'bg-emerald-400 shadow-[0_0_12px_#10b981]';
    categoryLabel = 'GREEN STREAK';
    scaleClass = 'scale-105';
  } else if (combo >= 20 && combo <= 49) {
    // 20〜49: オレンジ
    colorClass = 'text-orange-400';
    borderClass = 'border-orange-500/40';
    bgClass = 'bg-orange-950/25';
    shadowClass = 'shadow-[0_0_30px_rgba(249,115,22,0.35)]';
    dotColor = 'bg-orange-400 shadow-[0_0_16px_#f97316] animate-[pulse_1.5s_infinite]';
    categoryLabel = 'ORANGE STREAK 🔥';
    scaleClass = 'scale-110';
  } else if (combo >= 50 && combo <= 99) {
    // 50〜99: 赤 (緩やかなバウンス)
    colorClass = 'text-red-400';
    borderClass = 'border-red-500/50';
    bgClass = 'bg-red-950/25';
    shadowClass = 'shadow-[0_0_40px_rgba(239,68,68,0.5)]';
    dotColor = 'bg-red-500 shadow-[0_0_20px_#ef4444] animate-[pulse_1s_infinite]';
    categoryLabel = 'RED STREAK ⚡';
    scaleClass = 'scale-115 animate-[bounce_2.5s_infinite]';
  } else {
    // 100以上: 紫 (レジェンド)
    colorClass = 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400';
    borderClass = 'border-purple-500/50';
    bgClass = 'bg-gradient-to-r from-purple-950/30 via-fuchsia-950/30 to-indigo-950/30';
    shadowClass = 'shadow-[0_0_55px_rgba(168,85,247,0.6)]';
    dotColor = 'bg-purple-400 shadow-[0_0_25px_#a855f7] animate-[pulse_0.8s_infinite]';
    categoryLabel = 'LEGENDARY PURPLE STREAK 👑';
    scaleClass = 'scale-120 animate-[bounce_2s_infinite]';
  }

  return (
    <div className={`flex flex-col items-center justify-center animate-[fadeIn_0.5s_ease-out] select-none my-6 ${scaleClass} transition-all duration-300`}>
      <div className={`
        relative flex items-center gap-6 px-14 py-7 rounded-[2.5rem] border-2 transition-all duration-500
        ${borderClass} ${bgClass} ${shadowClass}
      `}>
        {/* 左側ネオンドットインジケーター */}
        <div className={`w-5 h-5 rounded-full ${dotColor} transition-all duration-500`} />
        
        <div className="flex flex-col items-center justify-center text-center leading-none">
          <span className="text-white/40 text-[10px] font-black tracking-widest uppercase mb-2">
            {categoryLabel}
          </span>
          <span className={`font-black tracking-widest text-4xl sm:text-5xl font-mono ${colorClass}`}>
            {combo}
          </span>
          <span className="text-lg font-black mt-2 text-white/90 tracking-wide">
            ストライク
          </span>
        </div>

        {/* 右側ネオンドットインジケーター */}
        <div className={`w-5 h-5 rounded-full ${dotColor} transition-all duration-500`} />
      </div>
    </div>
  );
};

const TypingScreen: React.FC<TypingScreenProps> = ({
  item,
  wordId,
  currentIndex,
  totalCount,
  isRandom,
  onToggleRandom,
  isTimeLimit,
  combo,
  onCompleteWord,
  onBack,
  onNext,
  hideMeanings,
}) => {
  const { state, reset, forceTimeout } = useThaiTyping(item);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isTimeout, setIsTimeout] = useState(false);

  const reportedRef = React.useRef(false);

  const handleBackClick = () => {
    if (combo > 0) {
      setShowConfirmModal(true);
    } else {
      onBack();
    }
  };

  // 新しい単語に変わったら報告フラグをリセットし、タイマーもリセット
  useEffect(() => {
    setTimeLeft(10);
    setIsTimeout(false);
    reportedRef.current = false;
  }, [item]);

  // 10秒制限のカウントダウンタイマー
  useEffect(() => {
    if (!isTimeLimit || state.completed || isTimeout) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0.1) {
          clearInterval(interval);
          setIsTimeout(true);
          forceTimeout(); // タイムアウト発生
          return 0;
        }
        return Math.round((prev - 0.1) * 10) / 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isTimeLimit, state.completed, isTimeout, forceTimeout]);

  // 単語完了を監視し、親の combo 状態を一度だけ更新する
  useEffect(() => {
    if (state.completed && !reportedRef.current) {
      reportedRef.current = true;
      onCompleteWord(!state.hasMissed);
    }
  }, [state.completed, state.hasMissed, onCompleteWord]);

  // Cmd + Enter → 次の単語
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === 'Enter') {
        e.preventDefault();
        if (state.completed) onNext();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [state.completed, onNext]);

  const badgeStyle = getFrequencyBadgeStyle(item.frequency);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">

      {/* Background glow (タイ伝統の金/琥珀色/コンボカラー連携) */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className={`absolute inset-0 transition-all duration-700 ${
          state.completed
            ? state.hasMissed
              ? 'bg-amber-950/15'
              : 'bg-emerald-950/20'
            : state.hasError
              ? 'bg-rose-950/15'
              : ''
        }`} />
        
        {/* コンボ数に応じた背景発光エフェクトの強化 */}
        <div className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-all duration-500
          ${combo >= 100
            ? 'w-[950px] h-[950px] bg-purple-500/10'
            : combo >= 50
              ? 'w-[900px] h-[900px] bg-red-500/10'
              : combo >= 20
                ? 'w-[850px] h-[850px] bg-orange-500/10'
                : combo >= 1
                  ? 'w-[800px] h-[800px] bg-emerald-500/8'
                  : 'w-[750px] h-[750px] bg-amber-500/5'
          }
        `} />
      </div>

      {/* ── Top bar ── */}
      <header className="relative z-10 flex items-center justify-between px-10 pt-10 pb-4">
        {/* 左: 戻る */}
        <button
          id="btn-back"
          onClick={handleBackClick}
          className="
            flex items-center gap-3 px-8 py-5 rounded-2xl
            border border-white/10 bg-white/5 text-white/80 text-xl font-bold
            hover:bg-white/10 hover:text-white/90 hover:border-white/20
            active:scale-95 transition-all duration-150
          "
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          一覧に戻る
        </button>

        {/* 中央: ランダム切り替えスイッチ */}
        <button
          onClick={() => onToggleRandom(!isRandom)}
          className="
            flex items-center gap-4 px-8 py-5 rounded-2xl cursor-pointer select-none
            bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20
            transition-all duration-150 active:scale-95
          "
        >
          <span className="text-white/80 text-xl font-bold">ランダム出題</span>
          <div className="relative w-16 h-9 flex-shrink-0">
            <div
              className="w-16 h-9 rounded-full border border-white/10 transition-colors duration-200"
              style={{ background: isRandom ? '#f59e0b' : 'rgba(255,255,255,0.1)' }}
            />
            <div
              className="absolute top-1 w-7 h-7 bg-white rounded-full shadow-md transition-all duration-200"
              style={{ left: isRandom ? 'calc(100% - 2rem)' : '0.25rem' }}
            />
          </div>
        </button>
        
        {/* 右: No.表示 + カウント */}
        <div className="flex flex-col items-end gap-1">
          <div className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white/70 text-xl font-extrabold tabular-nums">
            {currentIndex + 1} <span className="text-white/30 font-medium">/</span> {totalCount}
          </div>
          <span className="text-white/25 text-xs font-mono tracking-widest pr-1">No. {wordId}</span>
        </div>
      </header>

      {/* ── CENTER: main content ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-10 gap-6">

        {/* 頻出度バッジ */}
        <span className={`
          px-5 py-2 rounded-2xl text-sm md:text-base font-extrabold tracking-widest uppercase border shadow-lg
          ${badgeStyle}
        `}>
          {item.frequency}
        </span>

        {/* ── ゲーム要素: ストライク表示 ── */}
        {getStreakDecoration(combo)}

        {/* 意味 & 発音記号 */}
        <div className="text-center space-y-2">
          <p className={`text-white/70 text-3xl font-extrabold tracking-wide transition-all duration-300 ${
            hideMeanings && !state.completed
              ? 'blur-md opacity-5 select-none hover:blur-none hover:opacity-100 hover:select-text cursor-help'
              : ''
          }`}>
            {item.meaning}
          </p>
          <p className="text-amber-200/55 text-xl font-mono tracking-wider">
            {item.pronunciation}
          </p>
        </div>

        {/* ── Time Limit Attack タイマーバー ── */}
        {isTimeLimit && (
          <div className="w-full max-w-xl flex flex-col items-center gap-2 select-none animate-[fadeIn_0.3s_ease] mb-2">
            <div className="w-full flex justify-between items-center text-xs font-black tracking-widest text-white/40">
              <span className={timeLeft <= 3 ? 'text-rose-400 animate-pulse font-black' : ''}>
                TIME LIMIT ATTACK
              </span>
              <span className={`font-mono text-sm ${timeLeft <= 3 ? 'text-rose-400 font-black animate-pulse' : 'text-amber-400 font-extrabold'}`}>
                {timeLeft.toFixed(1)}s
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden p-[1px]">
              <div
                className={`h-full rounded-full transition-all duration-100 ${
                  timeLeft <= 3
                    ? 'bg-gradient-to-r from-red-500 to-rose-500 shadow-[0_0_12px_#f43f5e]'
                    : 'bg-gradient-to-r from-amber-500 to-yellow-400 shadow-[0_0_8px_#f59e0b]'
                }`}
                style={{ width: `${(timeLeft / 10) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* 単語カード (縦幅を引き伸ばし、中身を中央配置) */}
        <div
          className={`
            w-full rounded-3xl px-10 py-16 flex flex-col items-center justify-center relative
            border transition-all duration-300 min-h-[240px]
            ${state.completed
              ? isTimeout
                ? 'bg-red-950/10 border-red-500/20' // タイムアウト時
                : state.hasMissed
                  ? 'bg-amber-500/5 border-amber-500/20' // 完了したがミスがあった場合
                  : 'bg-emerald-500/8 border-emerald-500/25' // パーフェクト完了
              : state.hasError
                ? 'bg-rose-500/8 border-rose-500/25'
                : 'bg-white/5 border-white/10'
            }
          `}
        >
          <div className="flex-1 flex items-center justify-center">
            <TypingDisplay
              cells={state.cells}
              cursor={state.cursor}
              hasError={state.hasError}
              completed={state.completed}
            />
          </div>
        </div>

        {/* 例文ブロック */}
        <div className="w-full rounded-2xl border border-white/10 bg-white/4 px-10 py-6 text-center space-y-3">
          <p
            className="text-white/80 text-2xl leading-relaxed"
            style={{ fontFamily: "'Trirong', serif" }}
          >
            {item.exampleTh}
          </p>
          <p className={`text-white/50 text-lg leading-relaxed transition-all duration-300 ${
            hideMeanings && !state.completed
              ? 'blur-md opacity-5 select-none hover:blur-none hover:opacity-100 hover:select-text cursor-help'
              : ''
          }`}>{item.exampleJa}</p>
        </div>

        {/* ── ボタン ── */}
        <div className="w-full grid grid-cols-2 gap-4">
          <button
            id="btn-retry"
            onClick={() => {
              setTimeLeft(10);
              setIsTimeout(false);
              reset();
            }}
            className="
              flex items-center justify-center gap-2
              rounded-2xl border border-white/12 bg-white/5
              py-5 text-white/60 text-lg font-medium
              hover:bg-white/10 hover:text-white/90 hover:border-white/25
              active:scale-95 transition-all duration-150
            "
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            もう一度
          </button>

          <button
            id="btn-next"
            onClick={onNext}
            disabled={!state.completed}
            className={`
              flex items-center justify-center gap-2
              rounded-2xl py-5 text-lg font-semibold
              active:scale-95 transition-all duration-150
              ${state.completed
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:opacity-90 shadow-lg shadow-amber-500/20'
                : 'bg-white/4 border border-white/8 text-white/25 cursor-not-allowed'
              }
            `}
          >
            次の単語へ
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── ガイダンス＆操作ヒント ── */}
        <div className="flex flex-col items-center gap-1.5 h-14 justify-center select-none">
          {/* 判定ステータス (正解、ミスあり、言語エラー、エラー戻り) */}
          {(state.completed || state.hasError) && (
            <p className={`text-base font-extrabold tracking-widest animate-[fadeIn_0.2s_ease] ${
              state.isWrongLanguage ? 'text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.3)]' : 'text-amber-200/80'
            }`}>
              {state.completed
                ? isTimeout
                  ? '⏰ タイムオーバー！'
                  : state.hasMissed
                    ? '正解 (ミスあり)'
                    : 'パーフェクト正解 🎉'
                : state.isWrongLanguage
                  ? '⚠️ キーボード入力をタイ語に切り替えてください'
                  : '← Backspace で戻る'}
            </p>
          )}

          {/* ⌘ + Enter ショートカットヒント */}
          {state.completed && (
            <p
              className="text-white/25 text-sm tracking-wider"
              style={{ animation: 'fadeInUp 0.3s ease both' }}
            >
              {state.hasMissed ? '⌘ + Enter で次へ' : '🔥 ⌘ + Enter でストライクを繋ぐ'}
            </p>
          )}
        </div>
      </main>

      <div className="h-8" />

      {/* ── ストライク消滅確認モーダル ── */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-all duration-300 animate-[fadeIn_0.2s_ease]">
          <div className="w-full max-w-xl p-12 rounded-[3rem] bg-zinc-950/95 border border-white/10 shadow-2xl text-center space-y-8 animate-[scaleUp_0.25s_ease-out_both] mx-6">
            {/* 警告アイコン */}
            <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-black text-white tracking-wide">ストライクがリセットされます</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                一覧に戻ると、現在積み上げた <span className="text-amber-400 font-extrabold">{combo} ストライク</span> が消えてしまいますが、よろしいですか？
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-6 py-5 rounded-2xl border border-white/10 bg-white/5 text-white/80 text-lg font-bold hover:bg-white/10 active:scale-95 transition-all duration-150 cursor-pointer"
              >
                キャンセル
              </button>
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  onBack();
                }}
                className="px-6 py-5 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 text-white text-lg font-bold hover:opacity-90 active:scale-95 shadow-lg shadow-rose-500/20 transition-all duration-150 cursor-pointer"
              >
                一覧に戻る
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TypingScreen;
