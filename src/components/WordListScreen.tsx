import React, { useState, useEffect } from 'react';
import type { VocabularyItem } from '../data/vocabulary';
import { getFireData, canEarnFireToday } from '../utils/fireStorage';

interface WordListScreenProps {
  items: VocabularyItem[];
  levelLabel: string;
  selectedFilters: string[];
  onToggleFilter: (filters: string[]) => void;
  onSelectWord: (index: number) => void;
  onBackToHome: () => void;
  isRandom: boolean;
  onToggleRandom: (val: boolean) => void;
  isTimeLimit: boolean;
  onToggleTimeLimit: (val: boolean) => void;
  onStart: () => void;
  filteredCount: number;
  practiceLimit: number | 'all';
  onChangePracticeLimit: (limit: number | 'all') => void;
  hideMeanings: boolean;
  onToggleHideMeanings: (val: boolean) => void;
  onStartIchiNikki: () => void;
}

const FILTER_LEVELS = [
  '7回中7回',
  '7回中6回',
  '7回中5回',
  '7回中4回',
  '7回中3回',
  '7回中2回',
  '7回中1回',
];

// 頻出度（7回中7回〜7回中1回）に応じたカラー取得関数（緑から赤へ段階変化）
export const getFrequencyBadgeStyle = (frequency: string) => {
  switch (frequency) {
    case '7回中7回':
      return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    case '7回中6回':
      return 'bg-lime-500/20 text-lime-300 border-lime-500/30';
    case '7回中5回':
      return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    case '7回中4回':
      return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    case '7回中3回':
      return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
    case '7回中2回':
      return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
    case '7回中1回':
    default:
      return 'bg-red-500/20 text-red-300 border-red-500/30';
  }
};

// フィルタ選択時のアクティブカラー定義 (ボタン全体の塗りつぶし用)
const getFilterActiveStyle = (frequency: string) => {
  switch (frequency) {
    case '7回中7回':
      return 'bg-emerald-500 text-slate-950 border-emerald-400';
    case '7回中6回':
      return 'bg-lime-500 text-slate-950 border-lime-400';
    case '7回中5回':
      return 'bg-yellow-500 text-slate-950 border-yellow-400';
    case '7回中4回':
      return 'bg-amber-500 text-slate-950 border-amber-400';
    case '7回中3回':
      return 'bg-orange-500 text-slate-950 border-orange-400';
    case '7回中2回':
      return 'bg-rose-500 text-slate-950 border-rose-400';
    case '7回中1回':
    default:
      return 'bg-red-500 text-slate-950 border-red-400';
  }
};

const WordListScreen: React.FC<WordListScreenProps> = ({
  items,
  levelLabel,
  selectedFilters,
  onToggleFilter,
  onSelectWord,
  onBackToHome,
  isRandom,
  onToggleRandom,
  isTimeLimit,
  onToggleTimeLimit,
  onStart,
  filteredCount,
  practiceLimit,
  onChangePracticeLimit,
  hideMeanings,
  onToggleHideMeanings,
  onStartIchiNikki,
}) => {
  const [fireCount, setFireCount] = useState(0);
  const [canEarn, setCanEarn] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 500;

  useEffect(() => {
    const data = getFireData();
    setFireCount(data.fireCount);
    setCanEarn(canEarnFireToday());
  }, []);

  // フィルター変更時にページを1にリセット
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilters]);

  // フィルタのトグル処理
  const handleToggleFilter = (level: string) => {
    if (selectedFilters.includes(level)) {
      // 最後の1個の選択は解除できないようにする（空になると何も表示されないため）
      if (selectedFilters.length === 1) return;
      onToggleFilter(selectedFilters.filter((f) => f !== level));
    } else {
      onToggleFilter([...selectedFilters, level]);
    }
  };

  // すべて選択するショートカット
  const handleSelectAll = () => {
    onToggleFilter(FILTER_LEVELS);
  };

  // 元のインデックス情報を付与しつつ、選択中の頻度のみにフィルタリング
  const filteredItems = items
    .map((item, originalIndex) => ({ ...item, originalIndex }))
    .filter((item) => selectedFilters.includes(item.frequency));

  const totalPages = Math.ceil(filteredItems.length / PAGE_SIZE);
  const activePage = Math.min(Math.max(1, currentPage), totalPages || 1);
  const startIndex = (activePage - 1) * PAGE_SIZE;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-hidden px-8 py-10">
      {/* Background glow (タイ伝統 of 金/琥珀色) */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      {/* ── 全体の最大幅コンテナ (max-w-[1600px] w-full) で囲む ── */}
      <div className="w-full max-w-[1600px] relative z-10 flex flex-col items-center">
        
        {/* Header (巨大なブロック化) */}
        <header className="w-full flex items-center justify-between mb-8 mt-2">
          <button
            onClick={onBackToHome}
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
            ホームへ戻る
          </button>

          <div className="flex items-center gap-4">
            {/* Fire Streak Badge */}
            <div 
              className={`
                flex items-center gap-2 px-4 py-3.5 rounded-2xl border backdrop-blur-md transition-all duration-300
                ${canEarn 
                  ? 'border-amber-400/50 animate-fire-container shadow-[0_0_20px_rgba(245,158,11,0.15)] bg-amber-500/10' 
                  : 'border-white/10 bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.01)]'
                }
              `}
            >
              <span className={`text-xl select-none ${canEarn ? 'animate-flame' : 'opacity-70'}`}>🔥</span>
              <span className="text-white/40 text-[9px] font-black tracking-widest uppercase hidden sm:inline">STREAK</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400 font-black text-base tracking-wide">
                {fireCount} <span className="text-xs text-white/50 font-medium">Days</span>
              </span>
            </div>

            <div className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white/80 font-extrabold text-xl">
              {levelLabel} 単語一覧
            </div>
          </div>
        </header>

        {/* ── 頻出度ソート/フィルタエリア (マージンを mb-12 に縮小してスタートボタン側に余裕を確保) ── */}
        <section
          className="w-full bg-white/3 border border-white/8 rounded-3xl p-8 flex flex-col items-center mb-8"
        >
          {/* タイトルと「すべて選択」 */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
            <div className="text-center sm:text-left space-y-1">
              <h2 className="text-2xl font-bold text-white/90">頻出度フィルター</h2>
              <p className="text-sm text-white/40">チェックした頻出度の単語のみ表示します</p>
            </div>
            <button
              onClick={handleSelectAll}
              className="text-amber-400 hover:text-amber-300 text-base font-semibold px-5 py-2.5 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            >
              すべて選択
            </button>
          </div>

          {/* 7段階のボタン群を中央寄せ (justify-center) */}
          <div className="w-full flex flex-wrap justify-center gap-3">
            {FILTER_LEVELS.map((level) => {
              const isActive = selectedFilters.includes(level);
              const activeStyle = getFilterActiveStyle(level);

              return (
                <button
                  key={level}
                  onClick={() => handleToggleFilter(level)}
                  className={`
                    flex items-center gap-3 px-6 py-4 rounded-2xl border text-center transition-all duration-150 cursor-pointer select-none active:scale-95 min-w-[140px] justify-center
                    ${isActive
                      ? `${activeStyle} font-extrabold shadow-lg`
                      : 'bg-white/2 border-white/10 text-white/30 hover:bg-white/5 hover:border-white/15'
                    }
                  `}
                >
                  {/* チェックアイコン */}
                  <div className={`
                    w-5 h-5 rounded-full flex items-center justify-center border transition-all shrink-0
                    ${isActive
                      ? 'bg-white/20 border-white/30'
                      : 'border-white/10'
                    }
                  `}>
                    {isActive && (
                      <svg className="w-3 h-3 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-base tracking-wide whitespace-nowrap">{level}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── スタートボタン用の独立したコンテナ枠 (設定スイッチをこちらに集約) ── */}
        <div className="w-full rounded-3xl bg-white/[0.03] border border-white/5 py-16 px-12 mb-12 flex flex-col items-center justify-center gap-8 transition-all duration-300">
          
          {/* 選択件数バッジ */}
          {filteredCount > 0 ? (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-black tracking-wider animate-[fadeIn_0.3s_ease]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping animate-duration-1000" />
              <span>選択中の対象単語: {filteredCount} 件</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-black tracking-wider">
              <span>対象単語が選択されていません</span>
            </div>
          )}

          {/* ── 設定オプションエリア (ランダム & 制限時間 & フラッシュカード) ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            {/* ランダム出題 */}
            <button
              onClick={() => onToggleRandom(!isRandom)}
              className="
                flex items-center justify-between gap-6 px-6 py-4 rounded-xl cursor-pointer select-none
                bg-white/5 border border-white/8 hover:bg-white/8 hover:border-white/15
                transition-all duration-150 active:scale-95 w-full
              "
            >
              <span className="text-white/80 text-lg font-bold">ランダム出題</span>
              <div className="relative w-14 h-8 flex-shrink-0">
                <div
                  className="w-14 h-8 rounded-full border border-white/10 transition-colors duration-200"
                  style={{ background: isRandom ? '#f59e0b' : 'rgba(255,255,255,0.1)' }}
                />
                <div
                  className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-200"
                  style={{ left: isRandom ? 'calc(100% - 1.75rem)' : '0.25rem' }}
                />
              </div>
            </button>

            {/* Time Limit Attack */}
            <button
              onClick={() => onToggleTimeLimit(!isTimeLimit)}
              className="
                flex items-center justify-between gap-6 px-6 py-4 rounded-xl cursor-pointer select-none
                bg-white/5 border border-white/8 hover:bg-white/8 hover:border-white/15
                transition-all duration-150 active:scale-95 w-full
              "
            >
              <div className="flex flex-col text-left">
                <span className="text-white/80 text-lg font-bold">Time Limit</span>
                <span className="text-white/30 text-[10px] mt-0.5">10秒制限モード</span>
              </div>
              <div className="relative w-14 h-8 flex-shrink-0">
                <div
                  className="w-14 h-8 rounded-full border border-white/10 transition-colors duration-200"
                  style={{ background: isTimeLimit ? '#ef4444' : 'rgba(255,255,255,0.1)' }}
                />
                <div
                  className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-200"
                  style={{ left: isTimeLimit ? 'calc(100% - 1.75rem)' : '0.25rem' }}
                />
              </div>
            </button>

            {/* フラッシュカード (日本語意味・例文を隠す) */}
            <button
              onClick={() => onToggleHideMeanings(!hideMeanings)}
              className="
                flex items-center justify-between gap-6 px-6 py-4 rounded-xl cursor-pointer select-none
                bg-white/5 border border-white/8 hover:bg-white/8 hover:border-white/15
                transition-all duration-150 active:scale-95 w-full
              "
            >
              <div className="flex flex-col text-left">
                <span className="text-white/80 text-lg font-bold">フラッシュカード</span>
                <span className="text-white/30 text-[10px] mt-0.5">意味・例文を隠す</span>
              </div>
              <div className="relative w-14 h-8 flex-shrink-0">
                <div
                  className="w-14 h-8 rounded-full border border-white/10 transition-colors duration-200"
                  style={{ background: hideMeanings ? '#a855f7' : 'rgba(255,255,255,0.1)' }}
                />
                <div
                  className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-200"
                  style={{ left: hideMeanings ? 'calc(100% - 1.75rem)' : '0.25rem' }}
                />
              </div>
            </button>
          </div>

          {/* ── 練習する単語数 ── */}
          <div className="w-full max-w-2xl flex flex-col items-center gap-4">
            <span className="text-white/60 text-lg font-bold">練習する単語数</span>
            <div className="flex flex-wrap justify-center gap-2.5 w-full">
              {([20, 30, 40, 50, 75, 100, 150, 200, 'all'] as const).map((limit) => {
                const isActive = practiceLimit === limit;
                const displayLabel = limit === 'all' ? 'すべて' : `${limit}問`;
                return (
                  <button
                    key={limit}
                    onClick={() => onChangePracticeLimit(limit)}
                    className={`
                      px-5 py-3 rounded-xl border text-base font-bold transition-all duration-150 cursor-pointer select-none active:scale-95 min-w-[70px] text-center
                      ${isActive
                        ? 'bg-amber-500 border-amber-400 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                        : 'bg-white/5 border-white/8 text-white/50 hover:bg-white/10 hover:border-white/15 hover:text-white/80'
                      }
                    `}
                  >
                    {displayLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* スタートボタン */}
          <button
            id="btn-start"
            onClick={onStart}
            disabled={filteredCount === 0}
            className={`
              group flex items-center justify-center gap-4 px-24 py-7 rounded-2xl
              text-3xl font-black tracking-widest transition-all duration-200 active:scale-95
              ${filteredCount === 0
                ? 'bg-white/5 border border-white/10 text-white/20 cursor-not-allowed'
                : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_35px_rgba(16,185,129,0.3)] hover:shadow-[0_0_55px_rgba(16,185,129,0.5)] hover:opacity-95 cursor-pointer'
              }
            `}
          >
            <svg className="w-8 h-8 transition-transform group-hover:scale-110 duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            スタート
          </button>

          {/* イチ日記ボタン */}
          <button
            id="btn-ichi-nikki"
            onClick={onStartIchiNikki}
            className="
              group flex items-center justify-center gap-3 px-10 py-4 rounded-2xl
              border border-violet-500/30 bg-violet-500/8
              text-violet-300 font-black text-lg tracking-wide
              hover:border-violet-400/50 hover:bg-violet-500/15
              shadow-[0_0_20px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
              transition-all duration-200 active:scale-95
            "
          >
            <span className="text-2xl">📝</span>
            イチ日記で練習
          </button>

          {/* ガイドテキスト */}
          {filteredCount > 0 ? (
            <p className="text-white/40 text-base font-semibold tracking-wide">
              クリックすると選択した単語でタイピング練習を開始します
            </p>
          ) : (
            <p className="text-rose-400/60 text-base font-semibold tracking-wide">
              上のフィルターで練習したい頻出度にチェックを入れてください
            </p>
          )}
        </div>

        {/* List */}
        <main id="word-list-main" className="w-full flex flex-col items-center justify-center">
          {totalPages > 1 && (
            <div className="flex flex-wrap justify-center items-center gap-2 mb-8 w-full max-w-4xl animate-[fadeIn_0.2s_ease]">
              {Array.from({ length: totalPages }, (_, i) => {
                const pageNum = i + 1;
                const isActive = activePage === pageNum;
                const pageStart = i * PAGE_SIZE + 1;
                const pageEnd = Math.min((i + 1) * PAGE_SIZE, filteredItems.length);
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => {
                      setCurrentPage(pageNum);
                    }}
                    className={`
                      flex flex-col items-center justify-center px-6 py-2.5 rounded-xl border transition-all duration-150 cursor-pointer select-none active:scale-95 min-w-[120px]
                      ${isActive
                        ? 'bg-amber-500 border-amber-400 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                        : 'bg-white/5 border-white/8 text-white/60 hover:bg-white/10 hover:border-white/15 hover:text-white/90'
                      }
                    `}
                  >
                    <span className="text-base font-bold">{pageNum} ページ</span>
                    <span className={`text-[10px] ${isActive ? 'text-slate-950/60 font-semibold' : 'text-white/30'}`}>
                      {pageStart} - {pageEnd} 件
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/40 text-xl font-bold">表示する単語がありません</p>
            </div>
          ) : (
            <>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {paginatedItems.map((item, index) => {
                  const badgeStyle = getFrequencyBadgeStyle(item.frequency);

                  return (
                    <button
                      key={item.id}
                      onClick={() => onSelectWord(item.originalIndex)}
                      className="
                        group w-full rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm
                        p-5 flex items-center gap-4 text-left
                        hover:border-amber-500/30 hover:bg-amber-500/5 hover:scale-[1.01]
                        active:scale-[0.99]
                        transition-all duration-200
                      "
                    >
                      {/* Number Index */}
                      <span className="shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 text-lg font-mono group-hover:bg-amber-500/10 group-hover:text-amber-300 transition-all duration-200">
                        {startIndex + index + 1}
                      </span>

                      {/* Word Details */}
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                          <p
                            className="text-white text-2.5xl sm:text-3xl font-bold leading-tight whitespace-nowrap"
                            style={{ fontFamily: "'Trirong', serif" }}
                          >
                            {item.word}
                          </p>
                          <p className="text-amber-200/50 text-sm sm:text-base font-mono whitespace-nowrap">
                            {item.pronunciation}
                          </p>
                        </div>
                        
                        {/* 日本語の意味と頻出度バッジ */}
                        <div className="flex items-center gap-3 mt-1">
                          <p className="text-white/50 text-base truncate flex-1">{item.meaning}</p>
                          
                          {/* 大きくて見やすい頻出度バッジ */}
                          <span className={`
                            shrink-0 px-3 py-1 rounded-lg text-xs font-bold tracking-wider uppercase border
                            ${badgeStyle}
                          `}>
                            {item.frequency}
                          </span>
                        </div>
                      </div>

                      {/* Play Icon */}
                      <div className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-transparent transition-all duration-200">
                        <svg className="w-4 h-4 text-white/50 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* 下部のページネーションコントロール */}
              {totalPages > 1 && (
                <div className="flex flex-wrap justify-center items-center gap-2 mt-8 w-full max-w-4xl animate-[fadeIn_0.2s_ease]">
                  {Array.from({ length: totalPages }, (_, i) => {
                    const pageNum = i + 1;
                    const isActive = activePage === pageNum;
                    const pageStart = i * PAGE_SIZE + 1;
                    const pageEnd = Math.min((i + 1) * PAGE_SIZE, filteredItems.length);
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => {
                          setCurrentPage(pageNum);
                        }}
                        className={`
                          flex flex-col items-center justify-center px-6 py-2.5 rounded-xl border transition-all duration-150 cursor-pointer select-none active:scale-95 min-w-[120px]
                          ${isActive
                            ? 'bg-amber-500 border-amber-400 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                            : 'bg-white/5 border-white/8 text-white/60 hover:bg-white/10 hover:border-white/15 hover:text-white/90'
                          }
                        `}
                      >
                        <span className="text-base font-bold">{pageNum} ページ</span>
                        <span className={`text-[10px] ${isActive ? 'text-slate-950/60 font-semibold' : 'text-white/30'}`}>
                          {pageStart} - {pageEnd} 件
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </main>

        <footer className="w-full mt-10 text-white/20 text-base text-center">
          表示中: {startIndex + 1} - {Math.min(startIndex + PAGE_SIZE, filteredItems.length)} 件 / 該当 {filteredItems.length} 件 (全 {items.length} 単語)
        </footer>
      </div>
    </div>
  );
};

export default WordListScreen;
