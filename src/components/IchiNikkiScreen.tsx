import React, { useState, useCallback } from 'react';
import type { VocabularyItem } from '../data/vocabulary';
import { evaluateRandomMode, evaluateDirectedMode } from '../utils/geminiApi';
import type { EvaluationResult } from '../utils/geminiApi';
import { recordFireEarned } from '../utils/fireStorage';

// ─── Types ────────────────────────────────────────────────────────────────────

type GameMode = 'random' | 'directed';
type Phase = 'setup' | 'writing' | 'evaluating' | 'result';

interface DirectedPrompt {
  id: string;
  japaneseSentence: string;
  words: VocabularyItem[];
}

interface IchiNikkiScreenProps {
  vocabulary: VocabularyItem[];
  onBack: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function pickRandom<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

// 確実系の予め用意した文章（単語IDは vocabulary から動的に解決）
const DIRECTED_PROMPTS_RAW = [
  { id: 'd1', ja: '彼は仕事を終えてから家に帰った。', wordCount: 3 },
  { id: 'd2', ja: '私は友達と一緒にタイ語を勉強している。', wordCount: 3 },
  { id: 'd3', ja: '明日、時間があれば映画を見に行きたい。', wordCount: 4 },
  { id: 'd4', ja: '彼女は毎朝、ご飯を食べてから学校へ行く。', wordCount: 4 },
  { id: 'd5', ja: '私はその仕事がとても大変だと思う。', wordCount: 3 },
  { id: 'd6', ja: '彼は運転が上手で、道もよく知っている。', wordCount: 4 },
  { id: 'd7', ja: 'この問題はとても難しくて、解決に時間がかかった。', wordCount: 5 },
  { id: 'd8', ja: '彼女は家族のために一生懸命働いている。', wordCount: 4 },
  { id: 'd9', ja: '私たちは意見が合わず、口論になってしまった。', wordCount: 5 },
  { id: 'd10', ja: '旅行中に事故に遭い、病院へ行かなければならなかった。', wordCount: 5 },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const WordChip: React.FC<{ word: VocabularyItem; index: number }> = ({ word, index }) => {
  const colors = [
    'border-amber-500/30 bg-amber-500/8 text-amber-300',
    'border-sky-500/30 bg-sky-500/8 text-sky-300',
    'border-emerald-500/30 bg-emerald-500/8 text-emerald-300',
    'border-rose-500/30 bg-rose-500/8 text-rose-300',
    'border-violet-500/30 bg-violet-500/8 text-violet-300',
    'border-orange-500/30 bg-orange-500/8 text-orange-300',
  ];
  const c = colors[index % colors.length];
  return (
    <div className={`flex flex-col items-center px-6 py-4 rounded-2xl border ${c} min-w-[130px]`}>
      <span className="text-2xl font-bold" style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>
        {word.word}
      </span>
      <span className="text-xs opacity-70 mt-1 font-mono">{word.pronunciation}</span>
      <span className="text-xs opacity-60 mt-1 text-white/60 font-semibold">{word.meaning}</span>
    </div>
  );
};

const ScoreRing: React.FC<{ score: number; passed: boolean }> = ({ score, passed }) => {
  const r = 50;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = passed ? '#10b981' : score >= 50 ? '#f59e0b' : '#ef4444';
  return (
    <div className="relative w-36 h-36 flex items-center justify-center">
      <svg className="absolute inset-0 -rotate-90" width="144" height="144" viewBox="0 0 144 144">
        <circle cx="72" cy="72" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
        <circle
          cx="72" cy="72" r={r} fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease, stroke 0.5s ease' }}
        />
      </svg>
      <span className="text-5xl font-black text-white">{score}</span>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const IchiNikkiScreen: React.FC<IchiNikkiScreenProps> = ({ vocabulary, onBack }) => {
  const [phase, setPhase] = useState<Phase>('setup');
  const [mode, setMode] = useState<GameMode>('random');
  const [wordCount, setWordCount] = useState(3);
  const [selectedWords, setSelectedWords] = useState<VocabularyItem[]>([]);
  const [directedPrompt, setDirectedPrompt] = useState<DirectedPrompt | null>(null);
  const [userSentence, setUserSentence] = useState('');
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fireEarnedResult, setFireEarnedResult] = useState<{earned: boolean; count: number} | null>(null);
  const [strictness, setStrictness] = useState<'easy' | 'normal' | 'hard'>('normal');

  // ── Setup ──────────────────────────────────────────────────────────────────

  const handleStart = useCallback(() => {
    setError(null);
    setUserSentence('');
    setResult(null);

    if (mode === 'random') {
      const words = pickRandom(vocabulary, wordCount);
      setSelectedWords(words);
      setDirectedPrompt(null);
      setPhase('writing');
    } else {
      // 確実系: ランダムにプロンプトを選び、語彙リストからランダムに単語をピック
      const raw = DIRECTED_PROMPTS_RAW[Math.floor(Math.random() * DIRECTED_PROMPTS_RAW.length)];
      const words = pickRandom(vocabulary, raw.wordCount);
      setSelectedWords(words);
      setDirectedPrompt({ id: raw.id, japaneseSentence: raw.ja, words });
      setPhase('writing');
    }
  }, [mode, wordCount, vocabulary]);

  // ── Evaluation ─────────────────────────────────────────────────────────────

  const handleEvaluate = useCallback(async () => {
    if (!userSentence.trim()) return;
    setPhase('evaluating');
    setError(null);
    setFireEarnedResult(null);
    try {
      const reqWords = selectedWords.map(w => ({ word: w.word, meaning: w.meaning }));
      let res: EvaluationResult;
      if (mode === 'random' || !directedPrompt) {
        res = await evaluateRandomMode(userSentence.trim(), reqWords, strictness);
      } else {
        res = await evaluateDirectedMode(userSentence.trim(), directedPrompt.japaneseSentence, reqWords, strictness);
      }
      
      // 合格時のみファイア記録
      if (res.passed) {
        const fireStatus = recordFireEarned();
        setFireEarnedResult({ earned: fireStatus.earned, count: fireStatus.fireCount });
      }

      setResult(res);
      setPhase('result');
    } catch (e) {
      setError(e instanceof Error ? e.message : '評価中にエラーが発生しました');
      setPhase('writing');
    }
  }, [userSentence, selectedWords, mode, directedPrompt, strictness]);

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-violet-600/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-600/8 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full max-w-5xl flex items-center gap-6 mb-12">
        <button
          onClick={onBack}
          className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <svg className="w-7 h-7 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-1">Thai Vocabulary</p>
          <h1 className="text-4xl font-black text-white tracking-tight">
            イチ<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">日記</span>
          </h1>
        </div>
      </header>

      {/* ── PHASE: setup ── */}
      {phase === 'setup' && (
        <div className="relative z-10 w-full max-w-5xl flex flex-col gap-8">

          {/* Mode selector */}
          <div className="rounded-3xl border border-white/8 bg-white/3 p-8 backdrop-blur-md">
            <p className="text-white/50 text-base font-black tracking-widest uppercase mb-5">出題モード</p>
            <div className="grid grid-cols-2 gap-5">
              {(
                [
                  {
                    key: 'random',
                    label: 'ランダム系',
                    sub: '単語は自由に使って文章を作る',
                    icon: '🎲',
                    color: 'border-amber-500/30 bg-amber-500/8',
                    active: 'border-amber-400 bg-amber-500/15',
                  },
                  {
                    key: 'directed',
                    label: '確実系',
                    sub: '指定した日本語の意味に合う文章を作る',
                    icon: '🎯',
                    color: 'border-violet-500/30 bg-violet-500/8',
                    active: 'border-violet-400 bg-violet-500/15',
                  },
                ] as const
              ).map(m => (
                <button
                  key={m.key}
                  onClick={() => setMode(m.key)}
                  className={`
                    flex flex-col items-start gap-3 p-8 rounded-3xl border text-left
                    transition-all duration-200 active:scale-95
                    ${mode === m.key ? m.active : m.color + ' hover:border-white/20'}
                  `}
                >
                  <span className="text-4xl">{m.icon}</span>
                  <span className="text-white font-black text-2xl">{m.label}</span>
                  <span className="text-white/50 text-sm leading-relaxed">{m.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Word count selector */}
          <div className="rounded-3xl border border-white/8 bg-white/3 p-8 backdrop-blur-md">
            <p className="text-white/50 text-base font-black tracking-widest uppercase mb-5">
              使用単語数 <span className="text-white/60 normal-case font-medium">（最小3・最大6）</span>
            </p>
            <div className="flex gap-4">
              {[3, 4, 5, 6].map(n => (
                <button
                  key={n}
                  onClick={() => setWordCount(n)}
                  className={`
                    flex-1 py-5 rounded-2xl border font-black text-2xl transition-all duration-150 active:scale-95
                    ${wordCount === n
                      ? 'border-violet-400 bg-violet-500/15 text-violet-300'
                      : 'border-white/8 bg-white/3 text-white/50 hover:border-white/20'
                    }
                  `}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Strictness (Grading Mode) Selector */}
          <div className="rounded-3xl border border-white/8 bg-white/3 p-8 backdrop-blur-md">
            <p className="text-white/50 text-base font-black tracking-widest uppercase mb-5">採点基準</p>
            <div className="grid grid-cols-3 gap-4">
              {(
                [
                  {
                    key: 'easy',
                    label: '優しめ',
                    sub: '必須単語があれば100点合格',
                    icon: '🟢',
                    color: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-300/80',
                    active: 'border-emerald-400 bg-emerald-500/15 text-emerald-300',
                  },
                  {
                    key: 'normal',
                    label: '普通',
                    sub: '構成や長さに応じ適宜減点',
                    icon: '🟡',
                    color: 'border-yellow-500/20 bg-yellow-500/5 text-yellow-300/80',
                    active: 'border-yellow-400 bg-yellow-500/15 text-yellow-300',
                  },
                  {
                    key: 'hard',
                    label: '厳しめ',
                    sub: '文順・丁寧表現を厳格にチェック',
                    icon: '🔴',
                    color: 'border-rose-500/20 bg-rose-500/5 text-rose-300/80',
                    active: 'border-rose-400 bg-rose-500/15 text-rose-300',
                  },
                ] as const
              ).map(s => (
                <button
                  key={s.key}
                  onClick={() => setStrictness(s.key)}
                  className={`
                    flex flex-col items-center text-center gap-2 p-6 rounded-3xl border
                    transition-all duration-200 active:scale-95
                    ${strictness === s.key ? s.active : s.color + ' hover:border-white/10'}
                  `}
                >
                  <span className="text-3xl">{s.icon}</span>
                  <span className="font-black text-lg">{s.label}</span>
                  <span className="text-[11px] opacity-60 leading-tight">{s.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Note about API key */}
          {!import.meta.env.VITE_GEMINI_API_KEY && (
            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/8 px-6 py-5 text-rose-300 text-base">
              <span className="font-black">⚠️ APIキー未設定：</span>{' '}
              プロジェクトルートの <code className="bg-white/10 px-1.5 rounded">.env</code> ファイルに{' '}
              <code className="bg-white/10 px-1.5 rounded">VITE_GEMINI_API_KEY=your_key</code> を追加してください。
            </div>
          )}

          {/* Start button */}
          <button
            onClick={handleStart}
            className="
              w-full py-6 rounded-3xl font-black text-2xl text-white tracking-wide
              bg-gradient-to-r from-violet-600 to-indigo-600
              hover:from-violet-500 hover:to-indigo-500
              shadow-[0_0_35px_rgba(139,92,246,0.3)]
              hover:shadow-[0_0_45px_rgba(139,92,246,0.5)]
              transition-all duration-300 active:scale-[0.98]
            "
          >
            スタート
          </button>
        </div>
      )}

      {/* ── PHASE: writing ── */}
      {phase === 'writing' && (
        <div className="relative z-10 w-full max-w-5xl flex flex-col gap-8">

          {/* Mode badge */}
          <div className="flex items-center gap-3">
            <span className={`
              text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full border
              ${mode === 'random'
                ? 'text-amber-300 bg-amber-500/10 border-amber-500/20'
                : 'text-violet-300 bg-violet-500/10 border-violet-500/20'
              }
            `}>
              {mode === 'random' ? '🎲 ランダム系' : '🎯 確実系'}
            </span>
            <span className="text-white/40 text-sm">{selectedWords.length}単語</span>
          </div>

          {/* Directed: target sentence */}
          {mode === 'directed' && directedPrompt && (
            <div className="rounded-3xl border border-violet-500/20 bg-violet-500/5 px-8 py-6 backdrop-blur-md">
              <p className="text-violet-300/60 text-xs font-black tracking-widest uppercase mb-3">目標文章（日本語）</p>
              <p className="text-white text-2xl font-bold leading-relaxed">{directedPrompt.japaneseSentence}</p>
              <p className="text-violet-300/50 text-sm mt-3">↑ この意味のタイ語文章を、下の単語を使って書いてください</p>
            </div>
          )}

          {/* Required words */}
          <div className="rounded-3xl border border-white/8 bg-white/3 p-8 backdrop-blur-md">
            <p className="text-white/40 text-xs font-black tracking-widest uppercase mb-5">使用する単語（全て使うこと）</p>
            <div className="flex flex-wrap gap-4">
              {selectedWords.map((w, i) => <WordChip key={w.id} word={w} index={i} />)}
            </div>
          </div>

          {/* Text input */}
          <div className="rounded-3xl border border-white/8 bg-white/3 p-8 backdrop-blur-md">
            <p className="text-white/40 text-xs font-black tracking-widest uppercase mb-4">タイ語文章を入力</p>
            <textarea
              value={userSentence}
              onChange={e => setUserSentence(e.target.value)}
              placeholder="ここにタイ語の文章を入力してください..."
              className="
                w-full min-h-[220px] bg-white/5 border border-white/8 rounded-2xl
                px-6 py-5 text-white text-2xl placeholder-white/20
                focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30
                resize-none transition-all duration-200
              "
              style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/8 px-6 py-5 text-rose-300 text-base">
              ❌ {error}
            </div>
          )}

          {/* Actions */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setPhase('setup')}
              className="py-5 rounded-2xl border border-white/10 bg-white/5 text-white/70 font-bold text-xl hover:bg-white/8 transition-all active:scale-95"
            >
              やり直す
            </button>
            <button
              onClick={handleEvaluate}
              disabled={!userSentence.trim()}
              className={`
                py-5 rounded-2xl font-black text-white text-xl transition-all duration-200 active:scale-[0.98]
                ${userSentence.trim()
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(139,92,246,0.3)]'
                  : 'bg-white/5 text-white/20 cursor-not-allowed'
                }
              `}
            >
              AIに評価してもらう →
            </button>
          </div>
        </div>
      )}

      {/* ── PHASE: evaluating ── */}
      {phase === 'evaluating' && (
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center gap-6 py-32">
          <div className="w-20 h-20 rounded-full border-4 border-violet-500/30 border-t-violet-400 animate-spin mb-4" />
          <p className="text-white/80 text-xl font-bold">AIが文章を評価中...</p>
          <p className="text-white/30 text-base">Gemini が文法・語彙・意味を分析しています</p>
        </div>
      )}

      {/* ── PHASE: result ── */}
      {phase === 'result' && result && (
        <div className="relative z-10 w-full max-w-5xl flex flex-col gap-8">

          {/* Result hero */}
          <div className={`
            rounded-3xl border p-12 backdrop-blur-md text-center relative overflow-hidden
            ${result.passed
              ? 'border-emerald-500/30 bg-emerald-500/5'
              : 'border-rose-500/30 bg-rose-500/5'
            }
          `}>
            {/* Background sparkle for passed status */}
            {result.passed && (
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-amber-500/5 to-transparent animate-pulse" />
            )}
            <div className="relative z-10 flex flex-col items-center gap-6">
              <ScoreRing score={result.score} passed={result.passed} />
              <div>
                <p className={`text-6xl font-black tracking-tight ${result.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {result.passed ? '合格 ✓' : '不合格'}
                </p>
                <p className="text-white/80 text-xl mt-3 leading-relaxed max-w-2xl mx-auto">{result.summary}</p>
              </div>

              {/* Fire earned notification */}
              {result.passed && fireEarnedResult && (
                <div className="mt-4 flex flex-col items-center justify-center gap-2 p-6 rounded-3xl border border-amber-500/20 bg-amber-500/10 max-w-xl w-full mx-auto shadow-[0_0_25px_rgba(245,158,11,0.15)]">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl animate-bounce">🔥</span>
                    <span className="text-amber-200 font-extrabold text-lg">
                      {fireEarnedResult.earned 
                        ? '今日の 1ファイア を獲得しました！'
                        : '今日のファイアは獲得済みです！'}
                    </span>
                  </div>
                  <div className="text-sm text-white/50">
                    現在の合計: <span className="text-amber-400 font-black text-lg">{fireEarnedResult.count}</span> 🔥
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Directed: target sentence */}
          {mode === 'directed' && directedPrompt && (
            <div className="rounded-3xl border border-violet-500/20 bg-violet-500/5 px-8 py-6 backdrop-blur-md">
              <p className="text-violet-300/60 text-sm font-black tracking-widest uppercase mb-3">出題された日本語（目標の表現）</p>
              <p className="text-white text-2xl font-bold leading-relaxed">{directedPrompt.japaneseSentence}</p>
            </div>
          )}

          {/* Required words */}
          <div className="rounded-3xl border border-white/8 bg-white/3 p-8 backdrop-blur-md">
            <p className="text-white/40 text-sm font-black tracking-widest uppercase mb-5">出題された指定単語</p>
            <div className="flex flex-wrap gap-4">
              {selectedWords.map((w, i) => <WordChip key={w.id} word={w} index={i} />)}
            </div>
          </div>

          {/* Your sentence */}
          <div className="rounded-3xl border border-white/8 bg-white/3 px-8 py-6 backdrop-blur-md">
            <p className="text-white/40 text-sm font-black tracking-widest uppercase mb-3">あなたの回答</p>
            <p className="text-white text-3xl leading-relaxed font-bold" style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>
              {userSentence}
            </p>
          </div>

          {/* Corrected sentence */}
          {result.correctedSentence && (
            <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 px-8 py-6 backdrop-blur-md">
              <p className="text-amber-300/60 text-sm font-black tracking-widest uppercase mb-3">より自然な表現</p>
              <p className="text-amber-200 text-3xl leading-relaxed font-bold" style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>
                {result.correctedSentence}
              </p>
            </div>
          )}

          {/* Detail feedback */}
          <div className="rounded-3xl border border-white/8 bg-white/3 p-8 backdrop-blur-md flex flex-col gap-6">
            <p className="text-white/40 text-sm font-black tracking-widest uppercase">詳細フィードバック</p>

            {[
              { label: '文法', value: result.grammarFeedback, icon: '📝' },
              { label: '単語の使い方', value: result.vocabularyUsage, icon: '🔤' },
              { label: '自然さ・意味', value: result.naturalness, icon: '💬' },
            ].map(f => (
              <div key={f.label} className="flex gap-4 items-start">
                <span className="text-3xl flex-shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <p className="text-white/60 text-sm font-extrabold uppercase tracking-wider mb-1">{f.label}</p>
                  <p className="text-white/85 text-lg leading-relaxed">{f.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Improvements */}
          {result.improvements.length > 0 && (
            <div className="rounded-3xl border border-sky-500/20 bg-sky-500/5 px-8 py-6 backdrop-blur-md">
              <p className="text-sky-300/60 text-sm font-black tracking-widest uppercase mb-4">💡 改善点・注意点</p>
              <ul className="flex flex-col gap-3">
                {result.improvements.map((imp, i) => (
                  <li key={i} className="flex gap-3 text-lg text-white/70 leading-relaxed">
                    <span className="text-sky-400 flex-shrink-0 mt-1">•</span>
                    {imp}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-4 pb-12">
            <button
              onClick={onBack}
              className="py-5 rounded-2xl border border-white/10 bg-white/5 text-white/75 font-bold text-xl hover:bg-white/8 transition-all active:scale-95"
            >
              単語一覧へ戻る
            </button>
            <button
              onClick={() => setPhase('setup')}
              className="
                py-5 rounded-2xl font-black text-white text-xl
                bg-gradient-to-r from-violet-600 to-indigo-600
                hover:from-violet-500 hover:to-indigo-500
                transition-all duration-200 active:scale-[0.98]
              "
            >
              もう一度 →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IchiNikkiScreen;
