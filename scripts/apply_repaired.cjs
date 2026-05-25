const fs = require('fs');
const path = require('path');

const tsPath = path.join(__dirname, '..', 'src', 'data', 'vocabulary.ts');
const repairedPath = path.join(__dirname, 'repaired_items.json');

try {
  const content = fs.readFileSync(tsPath, 'utf8');
  const match = content.match(/export const vocabulary: VocabularyItem\[\] = (\[[\s\S]*\]);/);
  if (!match) throw new Error('vocabulary配列が見つかりません');

  const items = JSON.parse(match[1]);
  const repairedItems = JSON.parse(fs.readFileSync(repairedPath, 'utf8'));

  console.log(`🔍 ${repairedItems.length} 件の修正データを適用します...`);

  // マップ作成
  const repairedMap = new Map();
  for (const item of repairedItems) {
    repairedMap.set(item.id, item);
  }

  let applyCount = 0;
  for (let i = 0; i < items.length; i++) {
    const orig = items[i];
    if (repairedMap.has(orig.id)) {
      const rep = repairedMap.get(orig.id);
      items[i] = {
        ...orig,
        ...rep
      };
      applyCount++;
    }
  }

  console.log(`📊 適用された修正項目数: ${applyCount} 件`);

  if (applyCount > 0) {
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
    console.log('✅ 文字化けの修復が完了し、ファイルに保存されました。');
  } else {
    console.log('⚠️ 適用された修正項目はありませんでした。');
  }

} catch (err) {
  console.error('修復中にエラーが発生しました:', err);
}
