const fs = require('fs');
const path = require('path');

const tsPath = path.join(__dirname, '..', 'src', 'data', 'vocabulary.ts');

try {
  const content = fs.readFileSync(tsPath, 'utf8');
  const match = content.match(/export const vocabulary: VocabularyItem\[\] = (\[[\s\S]*\]);/);
  if (!match) throw new Error('vocabulary配列が見つかりません');

  const items = JSON.parse(match[1]);
  const found = [];

  for (const item of items) {
    // ae, àe, áe, âe, ǎe など、aeを含むか (大文字小文字無視、アクセント記号付きのaやeも考慮)
    // 通常は a, e に声調記号が載る（例: phǎen では a に ǎ が載り ǎen または ǎe になる、あるいは ae のいずれかに載る）
    // 従って、正規表現で [aàáâãǎā][eèéêẽěē] またはその逆などを探す
    // シンプルに、発音記号内の 'ae' (声調記号が載る可能性も考慮したパターン) を探す
    // 実際に `waang-phǎen` では `ǎ` (aの上にv) と `e` です。つまり `ǎe` または `a` + `e` に声調記号。
    // [ae]にアクセント記号が載る文字パターン:
    // a: a, à, á, â, ǎ, ā, ǎ
    // e: e, è, é, ê, ě, ē
    const pron = item.pronunciation || '';
    
    // aまたは声調記号付きのa + eまたは声調記号付きのe
    const aeRegex = /[aàáâǎā][eèéêěē]/i;
    
    if (aeRegex.test(pron)) {
      found.push(item);
    }
  }

  console.log(`📊 'ae' 系の表記を含む項目: ${found.length} 件`);
  for (const item of found) {
    console.log(`ID: ${item.id} | Word: ${item.word} | Pron: ${item.pronunciation}`);
  }

} catch (err) {
  console.error(err);
}
