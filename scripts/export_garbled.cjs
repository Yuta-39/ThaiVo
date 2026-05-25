const fs = require('fs');
const path = require('path');

const tsPath = path.join(__dirname, '..', 'src', 'data', 'vocabulary.ts');
const outPath = path.join(__dirname, 'garbled_items.json');

try {
  const content = fs.readFileSync(tsPath, 'utf8');
  const match = content.match(/export const vocabulary: VocabularyItem\[\] = (\[[\s\S]*\]);/);
  if (!match) throw new Error('vocabulary配列が見つかりません');

  const items = JSON.parse(match[1]);
  const garbled = [];

  for (const item of items) {
    const hasGarbled = 
      (item.word && item.word.includes('\uFFFD')) ||
      (item.meaning && item.meaning.includes('\uFFFD')) ||
      (item.pronunciation && item.pronunciation.includes('\uFFFD')) ||
      (item.exampleTh && item.exampleTh.includes('\uFFFD')) ||
      (item.exampleJa && item.exampleJa.includes('\uFFFD'));

    if (hasGarbled) {
      garbled.push(item);
    }
  }

  fs.writeFileSync(outPath, JSON.stringify(garbled, null, 2), 'utf8');
  console.log(`✅ ${garbled.length} 件の文字化け項目を ${outPath} に書き出しました。`);

} catch (err) {
  console.error(err);
}
