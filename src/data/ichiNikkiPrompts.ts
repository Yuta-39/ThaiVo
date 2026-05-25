/**
 * Pre-prepared prompts for the "確実系" (Directed) mode of IchiNikki game.
 * Each prompt has a Japanese target sentence and the Thai words that should be used.
 */

export interface DirectedPrompt {
  id: string;
  japaneseSentence: string;   // 目標日本語文章
  requiredWordIds: number[];  // vocabulary.ts の id
  hint?: string;              // 構文ヒント（省略可）
}

export const DIRECTED_PROMPTS: DirectedPrompt[] = [
  // --- 日常会話レベル ---
  {
    id: 'dp_001',
    japaneseSentence: '彼は毎日家族と一緒に食事をする。',
    requiredWordIds: [1, 3, 5], // ก่อน、ของ、กิน系 ← 実際のIDは vocabulary を確認して調整
    hint: '「每天（毎日）」はภาษาไทยでどう言う？',
  },
  {
    id: 'dp_002',
    japaneseSentence: '私はタイ語の単語を勉強するのが好きだ。',
    requiredWordIds: [2, 4, 6],
    hint: 'ชอb（好き）を使おう',
  },
  {
    id: 'dp_003',
    japaneseSentence: '彼女は友達と映画を見に行った。',
    requiredWordIds: [3, 7, 8],
  },
  {
    id: 'dp_004',
    japaneseSentence: '明日、天気が良ければ公園に行きます。',
    requiredWordIds: [1, 5, 9],
    hint: 'ถ้า（もし）を使う条件文',
  },
  {
    id: 'dp_005',
    japaneseSentence: '彼は仕事を終えてから家に帰った。',
    requiredWordIds: [1, 2, 4],
    hint: 'ก่อน（〜してから）を使おう',
  },
];
