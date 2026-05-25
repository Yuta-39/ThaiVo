const fs = require('fs');
const path = require('path');

const tsPath = path.join(__dirname, '..', 'src', 'data', 'vocabulary.ts');

function fixPronunciation(str) {
  if (!str) return str;
  return str
    .replace(/dt/g, 't')
    .replace(/bp/g, 'p')
    .replace(/j/g, 'c');
}

try {
  const content = fs.readFileSync(tsPath, 'utf8');
  const match = content.match(/export const vocabulary: VocabularyItem\[\] = (\[[\s\S]*\]);/);
  if (!match) throw new Error('vocabulary配列が見つかりません');

  // JSONとしてパース
  const items = JSON.parse(match[1]);
  console.log(`🔍 全 ${items.length} 語の発音表記の修正を開始します...`);

  let count = 0;
  for (const item of items) {
    const orig = item.pronunciation;
    const fixed = fixPronunciation(orig);
    if (orig !== fixed) {
      item.pronunciation = fixed;
      count++;
    }
  }

  console.log(`📊 修正対象項目: ${count} 件`);

  if (count > 0) {
    const header = `export type VocabularyItem = {
  id: number;
  word: string;          // タイ語の単語
  meaning: string;       // 日本語の意味
  pronunciation: string; // 日本語式または国際式の発音記号 (例: sèetthàkìt)
  frequency: string;     // 頻出度 (例: "7回中7回" | "7回中6回" | "7回中5回" など)
  exampleTh: string;     // タイ語の実用的な例文
  exampleJa: string;     // 例文の日本語訳
}

export const vocabulary: VocabularyItem[] = `;

    const jsonStr = JSON.stringify(items, null, 2);
    fs.writeFileSync(tsPath, header + jsonStr + ';\n', 'utf8');
    console.log('✅ 発音表記の修正が完了し、ファイルに保存されました。');
  } else {
    console.log('✅ 修正が必要な発音表記はありませんでした。');
  }

} catch (err) {
  console.error('修正中にエラーが発生しました:', err);
}
