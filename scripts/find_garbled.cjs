const fs = require('fs');
const path = require('path');

const tsPath = path.join(__dirname, '..', 'src', 'data', 'vocabulary.ts');

try {
  const content = fs.readFileSync(tsPath, 'utf8');
  const lines = content.split('\n');

  console.log('🔍 文字化け (U+FFFD) の検索を開始します...');
  let count = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('\uFFFD')) {
      console.log(`Line ${i + 1}: ${line.trim()}`);
      count++;
    }
  }

  console.log(`📊 見つかった行数: ${count} 件`);

} catch (err) {
  console.error(err);
}
