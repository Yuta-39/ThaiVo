const fs = require('fs');
const path = require('path');

const tsPath = path.join(__dirname, '..', 'src', 'data', 'vocabulary.ts');

function readVocabulary() {
  const content = fs.readFileSync(tsPath, 'utf8');
  const match = content.match(/export const vocabulary: VocabularyItem\[\] = (\[[\s\S]*\]);/);
  if (!match) throw new Error('vocabulary配列が見つかりません');
  return eval(match[1]);
}

try {
  const items = readVocabulary();
  console.log(`🔍 全 ${items.length} 語の例文翻訳チェックを開始します...`);

  const issues = [];

  for (const item of items) {
    const th = item.exampleTh ? item.exampleTh.trim() : '';
    const ja = item.exampleJa ? item.exampleJa.trim() : '';

    const errors = [];

    // 1. 空チェック
    if (!ja) {
      errors.push('日本語訳が空です');
    }

    // 2. タイ語と完全に同じ
    if (ja && th && ja === th) {
      errors.push('日本語訳がタイ語例文と完全に同一です');
    }

    // 3. 日本語訳の中にタイ文字が含まれている（タイ語のままになっている可能性）
    // タイ文字のUnicode範囲: \u0e00 - \u0e7f
    if (ja && /[\u0e00-\u0e7f]/.test(ja)) {
      errors.push(`日本語訳にタイ文字が含まれています: "${ja}"`);
    }

    // 3.5. タイ語例文の中に日本語文字が含まれている（タイ語例文が日本語になっている可能性）
    // ひらがな: \u3040-\u309f, カタカナ: \u30a0-\u30ff, 漢字: \u4e00-\u9faf
    if (th && /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(th)) {
      errors.push(`タイ語例文に日本語文字が含まれています: "${th}"`);
    }

    // 4. 極端に短い日本語訳（例文の翻訳として不自然）
    if (ja && ja.length < 3 && th.length > 5) {
      errors.push(`日本語訳が短すぎます: "${ja}" (タイ語: "${th}")`);
    }

    // 5. プレースホルダーの検知
    if (ja && (ja.toLowerCase().includes('example') || ja.toLowerCase().includes('translate') || ja.includes('例文') || ja.includes('プレースホルダー'))) {
      errors.push(`プレースホルダーが含まれています: "${ja}"`);
    }

    if (errors.length > 0) {
      issues.push({
        id: item.id,
        word: item.word,
        meaning: item.meaning,
        exampleTh: item.exampleTh,
        exampleJa: item.exampleJa,
        errors: errors
      });
    }
  }

  console.log(`\n📊 検出された不備のある項目: ${issues.length} 件`);
  if (issues.length > 0) {
    issues.forEach((issue, idx) => {
      console.log(`\n[${idx + 1}] ID: ${issue.id} | 単語: ${issue.word} (${issue.meaning})`);
      console.log(`  タイ語例文: ${issue.exampleTh}`);
      console.log(`  日本語例文: ${issue.exampleJa}`);
      issue.errors.forEach(e => console.log(`  ⚠️  指摘: ${e}`));
    });
  } else {
    console.log('✅ すべての単語の例文翻訳が正常に設定されています！');
  }

} catch (err) {
  console.error('チェック中にエラーが発生しました:', err);
}
