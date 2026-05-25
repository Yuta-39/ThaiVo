/**
 * Local evaluation engine for IchiNikki game.
 * Completely offline, bypasses Gemini API to avoid credential or 400 errors,
 * while still providing intelligent feedback and checking required words.
 */

export interface EvaluationResult {
  passed: boolean;
  score: number; // 0-100
  summary: string;         // 合否の一言要約
  grammarFeedback: string; // 文法の評価
  vocabularyUsage: string; // 単語の使い方の評価
  naturalness: string;     // 自然さの評価
  improvements: string[];  // 改善点のリスト
  correctedSentence?: string; // 正しい文章の提案
}

// 語彙ごとのローカル添削アドバイス用データベース
const WORD_ADVICES: Record<string, string> = {
  'ก่อน': '「ก่อน」(before/first) は、動詞の直後に置くことで「〜する前に」「先に〜する」という修飾関係を作ります。語順が [動詞 + ก่อน] になっているか確認しましょう。',
  'กับ': '「กับ」(with/and) は、人と人を繋ぐ場合（A กับ B）や、動作を一緒にする（[動詞] กับ [人]）場合に使います。',
  'ของ': '「ของ」(of/belonging to) は、[所有される名詞 + ของ + 所有者] の順番になります。日本語の「私の本」はタイ語で「หนังสือ ของ ฉัน」となり、前後が逆になります。',
  'กิน': '「กิน」(eat) は親しい間柄で使う口語です。目上の人や丁寧な文章では「ทาน」や「รับประทาน」を使うと、より上品になります。',
  'ชอบ': '「ชอบ」(like) の後ろには、名詞だけでなく動詞（〜することが好き）を直接置くことができます。例: ชอบเรียนภาษาไทย',
  'เรียน': '「เรียน」(study) は体系的に学ぶ場合に使います。独学や一般的な勉強には「ศึกษา」や「อ่านหนังสือ」も使えます。',
  'และ': '「และ」(and) は文章や名詞を繋ぎますが、会話では「กับ」の方が好まれることが多いです。書き言葉で効果的です。',
  'ดี': '「ดี」(good) などの形容詞は、修飾する名詞の「後ろ」に置きます。例: คนดี (良い人)。',
  'ไป': '「ไป」(go) は、目的地を直接後ろに置くことができます（ไปโรงเรียน）。前置詞「ที่」は省略されることが多いです。',
  'มา': '「มา」(come) は動作の方向を表す補助動詞としても使われます。例: กลับมา (帰ってくる)。',
};

/**
 * 共通の判定・フィードバック生成ロジック
 */
function analyzeSentenceLocally(
  thaiSentence: string,
  requiredWords: { word: string; meaning: string }[],
  isDirected: boolean,
  strictness: 'easy' | 'normal' | 'hard',
  _targetJapanese?: string
): EvaluationResult {
  const trimmed = thaiSentence.trim();
  const missingWords: string[] = [];
  
  // 1. 必須単語がすべて含まれているかチェック
  for (const item of requiredWords) {
    // スペースや記号の揺らぎを考慮し、タイ語文字列が含まれているかチェック
    if (!trimmed.includes(item.word)) {
      missingWords.push(item.word);
    }
  }

  const hasAllWords = missingWords.length === 0;
  
  // 2. 文字数チェック（単語を並べただけではないか）
  const requiredWordsLength = requiredWords.reduce((sum, item) => sum + item.word.length, 0);
  const isTooShort = trimmed.length < requiredWordsLength + 3; // 単語の合計長より少し長い必要がある

  // 3. スコア計算
  let score = 100;
  if (!hasAllWords) {
    score -= missingWords.length * 20; // 必須単語が抜けている場合は大幅減点
  }
  
  if (strictness === 'easy') {
    // 優しめ：必須単語が入っていれば基本100点
    if (hasAllWords) {
      score = 100;
    }
  } else if (strictness === 'hard') {
    // 厳しめ：単語の並べ方、長さ、丁寧さに厳格
    if (isTooShort) {
      score -= 30; // 厳しい減点
    }
    const hasPolite = trimmed.endsWith('ครับ') || trimmed.endsWith('ค่ะ') || trimmed.endsWith('คะ');
    if (!hasPolite) {
      score -= 20; // 丁寧表現がない場合は厳しく減点
    }
  } else {
    // 普通
    if (isTooShort) {
      score -= 15;
    }
  }

  if (trimmed.length === 0) {
    score = 0;
  }

  // 合格基準の判定
  let passed = false;
  if (strictness === 'easy') {
    passed = score >= 60 && hasAllWords;
  } else if (strictness === 'hard') {
    passed = score >= 85 && hasAllWords; // 厳しめは85点以上
  } else {
    passed = score >= 70 && hasAllWords; // 普通は70点以上
  }

  // 4. 動的アドバイス（改善点）の生成
  const improvements: string[] = [];
  if (!hasAllWords) {
    improvements.push(`必須単語のうち [ ${missingWords.join(', ')} ] が文章中に見当たりません。スペルを確認してもう一度含めてください。`);
  }
  if (isTooShort && trimmed.length > 0) {
    improvements.push('文章が少し短すぎます。接続詞（และ, แต่）や、主語・目的語を補って、より具体的な文にしてみましょう。');
  }

  // 単語個別のアドバイスを適用
  for (const item of requiredWords) {
    if (WORD_ADVICES[item.word]) {
      improvements.push(WORD_ADVICES[item.word]);
    }
  }

  // タイ語文末の助詞アドバイス
  if (!trimmed.endsWith('ครับ') && !trimmed.endsWith('ค่ะ') && !trimmed.endsWith('คะ')) {
    improvements.push('文末に丁寧にする助詞（男性なら ครับ、女性なら ค่ะ）をつけると、より礼儀正しく自然なタイ語になります。');
  }

  // 5. 合否メッセージと要約
  let summary = '';
  let grammarFeedback = '';
  let vocabularyUsage = '';
  let naturalness = '';
  let correctedSentence: string | undefined = undefined;

  if (passed) {
    if (strictness === 'easy') {
      summary = '合格です（優しめモード）！必要な単語がすべて含まれています！';
      grammarFeedback = '必須単語がすべて使用されているため、文法上の最小構成を満たしています。';
      vocabularyUsage = '指定されたすべての単語が文章に配置されています。';
      naturalness = 'シンプルな文章構造ですが、言いたいことは十分に伝わります。';
    } else if (strictness === 'hard') {
      summary = '素晴らしい！「厳しめ」モードでの合格です！非常に高いタイ語力です。';
      grammarFeedback = '文法、語順、丁寧助詞の配置がすべて適切で、非常に洗練されたタイ語文です。';
      vocabularyUsage = 'すべての必須単語が、高度で自然な文脈の中で品詞を活かして配置されています。';
      naturalness = 'ネイティブのタイ人が日常会話やフォーマルな書き言葉としてそのまま使うレベルの美しさです。';
    } else {
      summary = isDirected
        ? '素晴らしい！指定された日本語の意味にしっかり一致した美しいタイ語の文章です。'
        : '合格です！指定された単語を使って、意味の通じる文章がしっかりと作られています。';
      grammarFeedback = '基本的な文法（主語 + 動詞 + 目的語）が崩れずに保たれており、語順に問題はありません。';
      vocabularyUsage = 'すべての必須単語が適切な品詞・役割で正しく文章に組み込まれています。';
      naturalness = '接続や単語のチョイスが極めて自然で、タイ人にもスムーズに通じる文体です。';
    }
  } else {
    if (strictness === 'easy') {
      summary = trimmed.length === 0 
        ? '回答が入力されていません。文章を入力してください。'
        : '惜しいです！必須単語が足りないため不合格です。';
      grammarFeedback = '必須単語が欠けているため、出題条件を満たしていません。';
      vocabularyUsage = `指定された単語（${missingWords.join(', ')}）を文章の中に必ず含めてください。`;
      naturalness = '必要な単語が含まれるように文章を見直してみましょう。';
    } else if (strictness === 'hard') {
      summary = '「厳しめ」モード不合格：より正確かつ洗練された構成が必要です。';
      grammarFeedback = !hasAllWords 
        ? '必須単語の欠落があります。'
        : isTooShort 
          ? '文章のボリュームが不十分です。より具体的な詳細や接続詞を補ってください。'
          : '文末の丁寧助詞（ครับ/ค่ะ）など、細部の正確さが欠けています。';
      vocabularyUsage = hasAllWords
        ? '単語は入っていますが、単なる羅列に近く、豊かな表現にはなっていません。'
        : `必須単語（${missingWords.join(', ')}）を漏れなく自然に繋げてください。`;
      naturalness = '語彙の接続部分に不自然さがあるか、表現がやや直訳的で拙いです。';
    } else {
      summary = trimmed.length === 0 
        ? '回答が入力されていません。文章を入力してください。'
        : '惜しいです！文法や必要な単語の構成にいくつか改善の余地があります。';
      grammarFeedback = hasAllWords 
        ? '骨組みはできていますが、少し言葉を補うとタイ語の語順としてより綺麗になります。'
        : '必須単語が欠けているため、文法構造が不完全になっています。';
      vocabularyUsage = hasAllWords 
        ? '単語はすべて使えていますが、接続がやや強引です。'
        : `指定された単語（${missingWords.join(', ')}）を文中に配置してください。`;
      naturalness = '少し単語を並べただけのように見えたり、文意が曖昧になっている箇所があります。';
    }

    // 疑似の正しい文章提案
    if (trimmed.length > 0) {
      // 必須単語をスペースなしで連結し、最後を丁寧にする
      const joinedWords = requiredWords.map(w => w.word).join('');
      correctedSentence = `${joinedWords} ครับ/ค่ะ`;
    }
  }

  return {
    passed,
    score,
    summary,
    grammarFeedback,
    vocabularyUsage,
    naturalness,
    improvements,
    correctedSentence,
  };
}

/**
 * Evaluate a Thai sentence for the "ランダム系" (Random) mode.
 */
export async function evaluateRandomMode(
  thaiSentence: string,
  requiredWords: { word: string; meaning: string }[],
  strictness: 'easy' | 'normal' | 'hard'
): Promise<EvaluationResult> {
  // 1秒待ってローカル解析結果を返す（ユーザー体験のため少し待ち時間を入れる）
  await new Promise(resolve => setTimeout(resolve, 1000));
  return analyzeSentenceLocally(thaiSentence, requiredWords, false, strictness);
}

/**
 * Evaluate a Thai sentence for the "確実系" (Directed) mode.
 */
export async function evaluateDirectedMode(
  thaiSentence: string,
  targetJapaneseSentence: string,
  requiredWords: { word: string; meaning: string }[],
  strictness: 'easy' | 'normal' | 'hard'
): Promise<EvaluationResult> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return analyzeSentenceLocally(thaiSentence, requiredWords, true, strictness, targetJapaneseSentence);
}
