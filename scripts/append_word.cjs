const fs = require('fs');
const path = require('path');

const jsonPath = '/Users/admin/Downloads/vocab_list.json';
const tsPath = path.join(__dirname, '..', 'src', 'data', 'vocabulary.ts');

// コマンドライン引数の取得
// 実行方法: node scripts/append_word.cjs "単語" "意味" "発音記号(ハイフン等入りでも可)" "頻出度" "タイ語例文" "日本語例文"
const [,, word, meaning, pronunciation, frequency, exampleTh, exampleJa] = process.argv;

if (!word || !meaning || !pronunciation || !frequency || !exampleTh || !exampleJa) {
  console.error('Error: Missing arguments.');
  console.log('Usage: node append_word.cjs "<word>" "<meaning>" "<pronunciation>" "<frequency>" "<exampleTh>" "<exampleJa>"');
  process.exit(1);
}

// 1. JSON ファイルの読み込みと更新
let items = [];
try {
  if (fs.existsSync(jsonPath)) {
    const raw = fs.readFileSync(jsonPath, 'utf8');
    items = JSON.parse(raw);
  }
} catch (e) {
  console.error('Error reading JSON:', e);
}

const nextId = items.length > 0 ? Math.max(...items.map(i => i.id || 0)) + 1 : 1;

// クレンジング処理 (ハイフンとスペースの除去)
const cleanPronunciation = pronunciation.replace(/-/g, '').replace(/\s+/g, '');

const newJsonItem = {
  id: nextId,
  word: word,
  meaning: meaning,
  phonetic: pronunciation, // オリジナルの発音記号をJSONには残す
  exampleTh: exampleTh,
  exampleJa: exampleJa
};

items.push(newJsonItem);

try {
  fs.writeFileSync(jsonPath, JSON.stringify(items, null, 2), 'utf8');
  console.log(`Successfully added to ${jsonPath} (ID: ${nextId})`);
} catch (e) {
  console.error('Error writing JSON:', e);
  process.exit(1);
}

// 2. vocabulary.ts の読み込みと更新
// 現在のTSファイルを読み込み、リスト部分だけを置き換えるか、JSON全体から再構成する
const cleanedItems = items.map(item => {
  // 過去のデータも含めて再度クレンジング
  const p = (item.phonetic || item.pronunciation || '')
    .replace(/-/g, '')
    .replace(/\s+/g, '');
  
  // 頻出度の割り当て (追加されたものは引数から、既存のものはそのまま維持するか決定)
  let freq = item.frequency || 'その他';
  if (item.word === word) {
    freq = frequency;
  } else {
    // 既存の frequency マッピングルール (もし指定がなければ)
    const freq7 = [
      "ก่อน", "กับ", "ของ", "ขึ้น", "เขา", "คน", "ครั้ง", "คิด", "งาน", "เงิน", "จึง",
      "ซื้อ", "ญี่ปุ่น", "ด้วย", "ดี", "โดย", "แต่", "ถึง", "ถูก", "ทำ", "ที่", "ที่สุด", "เท่า",
      "ไทย", "น้อย", "นั้น", "นี้", "บ้าน", "ไป", "ผม", "พูด", "มา", "มาก", "มี", "ไม่",
      "รถ", "เรียน", "ลง", "วัน", "เวลา", "ส่วน", "สำหรับ", "หรือ", "ใหม่", "ออก", "อะไร", "อาหาร"
    ];
    const freq6 = [
      "ก็", "กำลัง", "เกิด", "ขอ", "ค่า", "จริง", "จาก", "เจอ", "ใจ", "ฉัน", "ช่วย",
      "ใช้", "ดังนั้น", "ตก", "ตาม", "ถ้า", "ทำงาน", "ที่ไหน", "ประเทศ", "ปี",
      "เป็น", "ผิด", "พนักงาน", "พรุ่งนี้", "พอ", "เพราะ", "เพื่อน", "รับ",
      "เรื่อง", "ลด", "ลูก", "แล้ว", "และ", "สบาย", "สามารถ", "หนัก", "หนังสือ",
      "หาย", "เหมือน", "ให้", "อยาก", "อยู่", "อาการ", "อีก"
    ];
    if (freq7.includes(item.word)) {
      freq = '7回中7回';
    } else if (freq6.includes(item.word)) {
      freq = '7回中6回';
    }
  }

  return {
    id: item.id,
    word: item.word,
    meaning: item.meaning,
    pronunciation: p,
    frequency: freq,
    exampleTh: item.exampleTh,
    exampleJa: item.exampleJa
  };
});

const tsContent = `export type VocabularyItem = {
  id: number;
  word: string;          // タイ語の単語
  meaning: string;       // 日本語の意味
  pronunciation: string; // 日本語式または国際式の発音記号 (例: sèetthàkìt)
  frequency: string;     // 頻出度 (例: "7回中7回" | "7回中6回")
  exampleTh: string;     // タイ語の実用的な例文
  exampleJa: string;     // 例文の日本語訳
}

export const vocabulary: VocabularyItem[] = ${JSON.stringify(cleanedItems, null, 2)};
`;

try {
  fs.writeFileSync(tsPath, tsContent, 'utf8');
  console.log(`Successfully updated TS vocabulary at ${tsPath}`);
} catch (e) {
  console.error('Error writing TS file:', e);
  process.exit(1);
}
