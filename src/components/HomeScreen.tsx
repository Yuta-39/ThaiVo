import React, { useState, useEffect } from 'react';
import { getFireData, canEarnFireToday } from '../utils/fireStorage';

interface Level {
  id: string;
  label: string;
  sublabel: string;
  description: string;
  active: boolean;
  color: string;
  glow: string;
}

const LEVELS: Level[] = [
  {
    id: 'level3',
    label: '３級',
    sublabel: 'タイ語検定',
    description: '日常会話・基礎語彙 約 1,500 語',
    active: true,
    color: 'from-amber-500 to-yellow-600', // タイ伝統のゴールド（Thong）カラー
    glow: 'shadow-amber-500/20',
  },
  {
    id: 'level_pre2',
    label: '準２級',
    sublabel: 'タイ語検定',
    description: '準中級・ビジネス基礎',
    active: false,
    color: 'from-sky-600 to-cyan-600',
    glow: 'shadow-sky-500/20',
  },
  {
    id: 'level2',
    label: '２級',
    sublabel: 'タイ語検定',
    description: '中級・実務会話',
    active: false,
    color: 'from-emerald-600 to-teal-600',
    glow: 'shadow-emerald-500/20',
  },
  {
    id: 'level1',
    label: '１級',
    sublabel: 'タイ語検定',
    description: '上級・高度な読み書き',
    active: false,
    color: 'from-rose-700 to-red-800',
    glow: 'shadow-rose-500/20',
  },
];

interface HomeScreenProps {
  onStart: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onStart }) => {
  const [fireCount, setFireCount] = useState(0);
  const [canEarn, setCanEarn] = useState(true);

  useEffect(() => {
    const data = getFireData();
    setFireCount(data.fireCount);
    setCanEarn(canEarnFireToday());
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Fire Streak Badge (Top Right) */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-2xl border border-amber-500/20 bg-amber-500/5 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.05)]">
        <span className={`text-xl ${canEarn ? 'animate-pulse' : ''}`}>🔥</span>
        <span className="text-white font-black text-sm tracking-wide">{fireCount}</span>
        {canEarn && (
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping absolute -top-0.5 -right-0.5" />
        )}
      </div>

      {/* Background Glows (タイ伝統 of Gold/Amber) */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-yellow-600/10 blur-3xl" />
      </div>

      {/* Logo / Title */}
      <header className="relative z-10 text-center mb-12">
        <p className="text-white/40 text-sm font-medium tracking-[0.2em] uppercase mb-3">
          Thai Vocabulary
        </p>
        <h1 className="text-6xl font-bold tracking-tight">
          Thai<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Vo</span>
        </h1>
        <p className="mt-3 text-white/40 text-sm">
          レベルを選んでタイピング練習を始めましょう
        </p>
      </header>

      {/* Level cards */}
      <main className="relative z-10 w-full max-w-lg flex flex-col gap-4">
        {LEVELS.map((lv) => (
          <button
            key={lv.id}
            id={`level-btn-${lv.id}`}
            disabled={!lv.active}
            onClick={lv.active ? onStart : undefined}
            className={`
              group relative w-full rounded-2xl p-5 text-left overflow-hidden
              border transition-all duration-200
              ${lv.active
                ? `border-white/15 bg-white/5 hover:border-white/25 hover:bg-white/8 hover:scale-[1.02] active:scale-[0.99] cursor-pointer shadow-lg ${lv.glow}`
                : 'border-white/6 bg-white/3 cursor-not-allowed opacity-50'
              }
            `}
          >
            {/* Gradient accent bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b ${lv.color}`} />

            <div className="flex items-center justify-between pl-3">
              <div>
                <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-0.5">
                  {lv.sublabel}
                </p>
                <p className="text-white text-3xl font-bold leading-none">{lv.label}</p>
                <p className="text-white/40 text-sm mt-1.5">{lv.description}</p>
              </div>

              <div className="shrink-0 ml-4">
                {lv.active ? (
                  <div className={`
                    w-11 h-11 rounded-full bg-gradient-to-br ${lv.color}
                    flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-200
                    shadow-lg ${lv.glow}
                  `}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </main>

      <footer className="relative z-10 mt-10 text-white/20 text-xs text-center">
        準２級・２級・１級は近日公開予定
      </footer>
    </div>
  );
};

export default HomeScreen;
