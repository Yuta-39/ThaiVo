export type VocabularyItem = {
  id: number;
  word: string;          // タイ語の単語
  meaning: string;       // 日本語の意味
  pronunciation: string; // 日本語式または国際式の発音記号 (例: sèetthàkìt)
  frequency: string;     // 頻出度 (例: "7回中7回" | "7回中6回" | "7回中5回" など)
  exampleTh: string;     // タイ語の実用的な例文
  exampleJa: string;     // 例文の日本語訳
}

export const vocabulary: VocabularyItem[] = [
  {
    "id": 1,
    "word": "ก่อน",
    "meaning": "前に、先に",
    "pronunciation": "kɔ̀ɔn",
    "frequency": "7回中7回",
    "exampleTh": "ควรคิดให้ดีก่อนตัดสินใจลงทุน",
    "exampleJa": "投資を決断する前に、よく考えるべきだ"
  },
  {
    "id": 2,
    "word": "กับ",
    "meaning": "〜と、〜と一緒に",
    "pronunciation": "kàp",
    "frequency": "7回中7回",
    "exampleTh": "เขาร่วมมือกับบริษัทพันธมิตรเพื่อพัฒนาโครงการ",
    "exampleJa": "彼はプロジェクト開発のために提携企業と協力した"
  },
  {
    "id": 3,
    "word": "ของ",
    "meaning": "〜の、物・所有物",
    "pronunciation": "khɔ̌ɔŋ",
    "frequency": "7回中7回",
    "exampleTh": "ทรัพย์สินทั้งหมดนี้เป็นของบริษัท",
    "exampleJa": "これらの資産はすべて会社の所有物です"
  },
  {
    "id": 4,
    "word": "ขึ้น",
    "meaning": "上がる、登る、増える",
    "pronunciation": "khʉ̂n",
    "frequency": "7回中7回",
    "exampleTh": "อัตราดอกเบี้ยนโยบายปรับตัวสูงขึ้นในปีนี้",
    "exampleJa": "政策金利は今年上昇した"
  },
  {
    "id": 5,
    "word": "เขา",
    "meaning": "彼、彼女、山",
    "pronunciation": "khǎw",
    "frequency": "7回中7回",
    "exampleTh": "เขาได้รับแต่งตั้งเป็นผู้อำนวยการฝ่ายการตลาดคนใหม่",
    "exampleJa": "彼は新しいマーケティング部門のディレクターに任命された"
  },
  {
    "id": 6,
    "word": "คน",
    "meaning": "人、〜名（分類詞）",
    "pronunciation": "khon",
    "frequency": "7回中7回",
    "exampleTh": "บริษัทกำลังเปิดรับสมัครพนักงานใหม่หลายคน",
    "exampleJa": "会社は現在、複数の新入社員を募集している"
  },
  {
    "id": 7,
    "word": "ครั้ง",
    "meaning": "〜回、〜度",
    "pronunciation": "khráŋ",
    "frequency": "7回中7回",
    "exampleTh": "นี่เป็นครั้งแรกที่เราได้ขยายตลาดไปต่างประเทศ",
    "exampleJa": "弊社が海外市場に進出するのは今回が初めてです"
  },
  {
    "id": 8,
    "word": "คิด",
    "meaning": "考える、思う、計算する",
    "pronunciation": "khít",
    "frequency": "7回中7回",
    "exampleTh": "เราต้องคิดกลยุทธ์เพื่อเพิ่มยอดขายในไตรมาสนี้",
    "exampleJa": "今四半期の売上を伸ばすための戦略を考えなければならない"
  },
  {
    "id": 9,
    "word": "งาน",
    "meaning": "仕事、業務、イベント",
    "pronunciation": "ŋaan",
    "frequency": "7回中7回",
    "exampleTh": "เขามีความรับผิดชอบสูงในการส่งมอบงานตามกำหนด",
    "exampleJa": "彼は納期通りに仕事を納品することに強い責任感を持っている"
  },
  {
    "id": 10,
    "word": "เงิน",
    "meaning": "お金、資金",
    "pronunciation": "ŋʉn",
    "frequency": "7回中7回",
    "exampleTh": "บริษัทจัดสรรเงินทุนเพื่อการวิจัยและพัฒนา",
    "exampleJa": "会社は研究開発のためにお金を割り当てた"
  },
  {
    "id": 11,
    "word": "จึง",
    "meaning": "したがって、それゆえに",
    "pronunciation": "cʉŋ",
    "frequency": "7回中7回",
    "exampleTh": "เนื่องจากเศรษฐกิจชะลอตัว บริษัทจึงต้องลดค่าใช้จ่าย",
    "exampleJa": "経済が減速しているため、会社は支出を削減しなければならなかった"
  },
  {
    "id": 12,
    "word": "ซื้อ",
    "meaning": "買う、購入する",
    "pronunciation": "sʉ́ʉ",
    "frequency": "7回中7回",
    "exampleTh": "ผู้บริโภคตัดสินใจซื้อสินค้าผ่านช่องทางออนไลน์มากขึ้น",
    "exampleJa": "消費者はオンラインチャネルを通じて商品を購入することをより多く決定している"
  },
  {
    "id": 13,
    "word": "ญี่ปุ่น",
    "meaning": "日本",
    "pronunciation": "yîipùn",
    "frequency": "7回中7回",
    "exampleTh": "เรามีแผนที่จะส่งออกสินค้าเกษตรไปยังประเทศญี่ปุ่น",
    "exampleJa": "私たちは日本へ農産物を輸出する計画を持っています"
  },
  {
    "id": 14,
    "word": "ด้วย",
    "meaning": "〜もまた、〜で（手段）",
    "pronunciation": "dûay",
    "frequency": "7回中7回",
    "exampleTh": "กรุณาส่งรายงานความคืบหน้าด้วยอีเมลภายในวันนี้",
    "exampleJa": "本日中に進捗報告書をメールで送付してください"
  },
  {
    "id": 15,
    "word": "ดี",
    "meaning": "良い、優れた",
    "pronunciation": "dii",
    "frequency": "7回中7回",
    "exampleTh": "การวางแผนทางการเงินที่ดีจะช่วยลดความเสี่ยงในอนาคต",
    "exampleJa": "優れた財務計画は将来のリスクを軽減するのに役立つ"
  },
  {
    "id": 16,
    "word": "โดย",
    "meaning": "〜によって、〜経由で",
    "pronunciation": "doy",
    "frequency": "7回中7回",
    "exampleTh": "โครงการนี้บริหารจัดการโดยทีมงานผู้เชี่ยวชาญ",
    "exampleJa": "このプロジェクトは専門家チームによって管理されています"
  },
  {
    "id": 17,
    "word": "แต่",
    "meaning": "しかし、〜だけ",
    "pronunciation": "tɛ̀ɛ",
    "frequency": "7回中7回",
    "exampleTh": "แผนงานนี้ดีมากแต่ต้องใช้เวลาในการอนุมัติ",
    "exampleJa": "この計画は非常に良いが、承認には時間が必要だ"
  },
  {
    "id": 18,
    "word": "ถึง",
    "meaning": "〜に到着する、〜まで",
    "pronunciation": "thʉ̌ŋ",
    "frequency": "7回中7回",
    "exampleTh": "เรามุ่งมั่นที่จะบรรลุเป้าหมายยอดขายที่ตั้งไว้ให้ถึง",
    "exampleJa": "私たちは設定された売上目標を達成することを目指しています"
  },
  {
    "id": 19,
    "word": "ถูก",
    "meaning": "正しい、安い、〜される（受動）",
    "pronunciation": "thuùk",
    "frequency": "7回中7回",
    "exampleTh": "ข้อมูลในระบบได้รับการตรวจสอบแล้วว่าถูกต้อง",
    "exampleJa": "システム内のデータは正しいことが確認されています"
  },
  {
    "id": 20,
    "word": "ทำ",
    "meaning": "する、作る、行う",
    "pronunciation": "tham",
    "frequency": "7回中7回",
    "exampleTh": "เราต้องทำวิจัยตลาดก่อนที่จะเปิดตัวผลิตภัณฑ์ใหม่",
    "exampleJa": "新製品を発売する前に市場調査を行う必要がある"
  },
  {
    "id": 21,
    "word": "ที่",
    "meaning": "〜の場所、〜番目、関係代名詞",
    "pronunciation": "thîi",
    "frequency": "7回中7回",
    "exampleTh": "นี่คือสถานที่ที่จะใช้จัดงานประชุมสัมมนาประจำปี",
    "exampleJa": "ここが年次セミナーを開催するために使用される場所です"
  },
  {
    "id": 22,
    "word": "ที่สุด",
    "meaning": "最も、最高に",
    "pronunciation": "thîisùt",
    "frequency": "7回中7回",
    "exampleTh": "ความพึงพอใจของลูกค้าคือสิ่งสำคัญที่สุดขององค์กร",
    "exampleJa": "顧客満足は組織の最も重要な事項です"
  },
  {
    "id": 23,
    "word": "เท่า",
    "meaning": "〜と同等、〜倍",
    "pronunciation": "thâw",
    "frequency": "7回中7回",
    "exampleTh": "ยอดขายในเดือนนี้เพิ่มขึ้นเป็นสองเท่าเมื่อเทียบกับปีก่อน",
    "exampleJa": "今月の売上は前年同期比で2倍に増加した"
  },
  {
    "id": 24,
    "word": "ไทย",
    "meaning": "タイ、タイの",
    "pronunciation": "thai",
    "frequency": "7回中7回",
    "exampleTh": "รัฐบาลไทยมุ่งส่งเสริมการลงทุนในเขตเศรษฐกิจพิเศษ",
    "exampleJa": "タイ政府は経済特区への投資促進に注力している"
  },
  {
    "id": 25,
    "word": "น้อย",
    "meaning": "少ない、わずかな",
    "pronunciation": "nɔ́ɔy",
    "frequency": "7回中7回",
    "exampleTh": "โอกาสที่จะเกิดความผิดพลาดในระบบนี้มีน้อยมาก",
    "exampleJa": "このシステムでエラーが発生する可能性は非常に少ない"
  },
  {
    "id": 26,
    "word": "นั้น",
    "meaning": "その、あれ、それ",
    "pronunciation": "nán",
    "frequency": "7回中7回",
    "exampleTh": "ข้อเสนอราคานั้นได้รับการยอมรับจากที่ประชุมแล้ว",
    "exampleJa": "その見積提案はすでに会議で承認されました"
  },
  {
    "id": 27,
    "word": "นี้",
    "meaning": "この、これ",
    "pronunciation": "níi",
    "frequency": "7回中7回",
    "exampleTh": "เราจะเริ่มดำเนินการตามแผนกลยุทธ์ใหม่ในเดือนนี้",
    "exampleJa": "私たちは今月から新しい戦略計画の実行を開始します"
  },
  {
    "id": 28,
    "word": "บ้าน",
    "meaning": "家、自宅、故郷",
    "pronunciation": "bâan",
    "frequency": "7回中7回",
    "exampleTh": "ธุรกิจอสังหาริมทรัพย์ประเภทบ้านเดี่ยวกำลังเติบโต",
    "exampleJa": "一戸建てタイプの不動産ビジネスが成長している"
  },
  {
    "id": 29,
    "word": "ไป",
    "meaning": "行く、〜し去る",
    "pronunciation": "pai",
    "frequency": "7回中7回",
    "exampleTh": "ผู้จัดการเดินทางไปเจรจาธุรกิจที่ต่างประเทศ",
    "exampleJa": "マネージャーはビジネス交渉のために海外へ出張した"
  },
  {
    "id": 30,
    "word": "ผม",
    "meaning": "僕、私（男性）、髪の毛",
    "pronunciation": "phǒm",
    "frequency": "7回中7回",
    "exampleTh": "ผมขอเสนอรายงานสรุปผลการดำเนินงานประจำไตรมาส",
    "exampleJa": "私は四半期の業績要約報告を提案いたします"
  },
  {
    "id": 31,
    "word": "พูด",
    "meaning": "話す、言う",
    "pronunciation": "phûut",
    "frequency": "7回中7回",
    "exampleTh": "เขาสามารถพูดภาษาอังกฤษและภาษาญี่ปุ่นได้อย่างคล่องแคล่ว",
    "exampleJa": "彼は英語と日本語を流暢に話すことができる"
  },
  {
    "id": 32,
    "word": "มา",
    "meaning": "来る、〜してきた",
    "pronunciation": "maa",
    "frequency": "7回中7回",
    "exampleTh": "บริษัทได้ดำเนินกิจการอย่างมั่นคงมาเป็นเวลาสิบปีแล้ว",
    "exampleJa": "会社は10年間にわたり安定して事業を運営してきました"
  },
  {
    "id": 33,
    "word": "มาก",
    "meaning": "とても、多い、たくさん",
    "pronunciation": "mâak",
    "frequency": "7回中7回",
    "exampleTh": "นวัตกรรมใหม่นี้ช่วยประหยัดพลังงานได้มาก",
    "exampleJa": "この新しいイノベーションはエネルギーを大幅に節約するのに役立つ"
  },
  {
    "id": 34,
    "word": "มี",
    "meaning": "ある、持つ、所有する",
    "pronunciation": "mii",
    "frequency": "7回中7回",
    "exampleTh": "บริษัทมีนโยบายสนับสนุนการทำงานที่ยืดหยุ่น",
    "exampleJa": "会社は柔軟な働き方を支援する方針を持っています"
  },
  {
    "id": 35,
    "word": "ไม่",
    "meaning": "〜ない（否定）",
    "pronunciation": "mâi",
    "frequency": "7回中7回",
    "exampleTh": "โครงการนี้จะไม่สามารถสำเร็จได้หากขาดความร่วมมือ",
    "exampleJa": "このプロジェクトは協力がなければ成功しないでしょう"
  },
  {
    "id": 36,
    "word": "รถ",
    "meaning": "車、自動車、列車",
    "pronunciation": "rót",
    "frequency": "7回中7回",
    "exampleTh": "ความต้องการรถยนต์ไฟฟ้าย่อมเพิ่มขึ้นตามเทรนด์โลก",
    "exampleJa": "電気自動車の需要は世界のトレンドに従って当然増加する"
  },
  {
    "id": 37,
    "word": "เรียน",
    "meaning": "学ぶ、勉強する、〜に伝える（公式）",
    "pronunciation": "rian",
    "frequency": "7回中7回",
    "exampleTh": "พนักงานควรเรียนรู้เทคโนโลยีใหม่เพื่อพัฒนาทักษะ",
    "exampleJa": "社員はスキル向上のために新しいテクノロジーを学ぶべきだ"
  },
  {
    "id": 38,
    "word": "ลง",
    "meaning": "下がる、降りる、登録する",
    "pronunciation": "loŋ",
    "frequency": "7回中7回",
    "exampleTh": "ราคาน้ำมันดิบในตลาดโลกปรับตัวลดลงอย่างต่อเนื่อง",
    "exampleJa": "世界市場の原油価格は継続的に下落している"
  },
  {
    "id": 39,
    "word": "วัน",
    "meaning": "日、日付、曜日",
    "pronunciation": "wan",
    "frequency": "7回中7回",
    "exampleTh": "เราต้องกำหนดวันส่งมอบงานขั้นสุดท้ายให้ชัดเจน",
    "exampleJa": "私たちは最終の成果物納品日を明確に定めなければならない"
  },
  {
    "id": 40,
    "word": "เวลา",
    "meaning": "時間、期間",
    "pronunciation": "weelaa",
    "frequency": "7回中7回",
    "exampleTh": "การบริหารเวลาอย่างมีประสิทธิภาพเป็นสิ่งสำคัญในการทำงาน",
    "exampleJa": "時間を効率的に管理することは仕事において重要なことだ"
  },
  {
    "id": 41,
    "word": "ส่วน",
    "meaning": "〜の部分、〜に関しては、分量",
    "pronunciation": "sùan",
    "frequency": "7回中7回",
    "exampleTh": "ส่วนแบ่งการตลาดของบริษัทเราเพิ่มขึ้นเป็นอันดับหนึ่ง",
    "exampleJa": "我が社の市場シェアはトップに上昇しました"
  },
  {
    "id": 42,
    "word": "สำหรับ",
    "meaning": "〜のための、〜にとって",
    "pronunciation": "sǎmràp",
    "frequency": "7回中7回",
    "exampleTh": "งบประมาณนี้จัดเตรียมไว้สำหรับแคมเปญการตลาดโดยเฉพาะ",
    "exampleJa": "この予算は特にマーケティングキャンペーンのために用意されたものです"
  },
  {
    "id": 43,
    "word": "หรือ",
    "meaning": "または、あるいは、〜ですか？",
    "pronunciation": "rʉ̌ʉ",
    "frequency": "7回中7回",
    "exampleTh": "คุณจะเลือกใช้วิธีการโอนเงินหรือชำระผ่านบัตรเครดิต",
    "exampleJa": "銀行振込の利用か、クレジットカード決済のどちらを選択しますか"
  },
  {
    "id": 44,
    "word": "ใหม่",
    "meaning": "新しい、再度",
    "pronunciation": "mài",
    "frequency": "7回中7回",
    "exampleTh": "เราเปิดตัวแอปพลิเคชันเวอร์ชันใหม่เพื่อเพิ่มความสะดวก",
    "exampleJa": "利便性を高めるために新しいバージョンのアプリケーションをローンチしました"
  },
  {
    "id": 45,
    "word": "ออก",
    "meaning": "出る、発行する、辞める",
    "pronunciation": "ɔ̀ɔk",
    "frequency": "7回中7回",
    "exampleTh": "ธนาคารกลางออกฟรอนต์นโยบายการเงินชุดใหม่",
    "exampleJa": "中央銀行は新しい金融政策方針を発行した"
  },
  {
    "id": 46,
    "word": "อะไร",
    "meaning": "何、何かの物",
    "pronunciation": "àrai",
    "frequency": "7回中7回",
    "exampleTh": "คุณมีความคิดเห็นอย่างไรเกี่ยวกับโครงการนี้",
    "exampleJa": "このプロジェクトについて、あなたは何の意見を持っていますか"
  },
  {
    "id": 47,
    "word": "อาหาร",
    "meaning": "食べ物、食事、料理",
    "pronunciation": "aahǎan",
    "frequency": "7回中7回",
    "exampleTh": "ธุรกิจส่งออกอาหารของไทยมีมูลค่าเติบโตขึ้นทุกปี",
    "exampleJa": "タイの食品輸出ビジネスは毎年価値が成長している"
  },
  {
    "id": 48,
    "word": "ก็",
    "meaning": "〜もまた、〜なら（接続詞）",
    "pronunciation": "kɔ̂",
    "frequency": "7回中6回",
    "exampleTh": "หากเงื่อนไขสัญญานี้พร้อมแล้ว เราก็สามารถลงนามได้เลย",
    "exampleJa": "この契約条件が整っていれば、私たちはすぐに署名できます"
  },
  {
    "id": 49,
    "word": "กำลัง",
    "meaning": "〜している（進行形）、力・能力",
    "pronunciation": "kamlaŋ",
    "frequency": "7回中6回",
    "exampleTh": "บริษัทกำลังพิจารณาแผนการขยายสาขาในแถบเอเชีย",
    "exampleJa": "会社はアジア圏での支店拡大計画を検討しているところです"
  },
  {
    "id": 50,
    "word": "เกิด",
    "meaning": "生まれる、発生する、起きる",
    "pronunciation": "kə̀ət",
    "frequency": "7回中6回",
    "exampleTh": "อุบัติเหตุและการทำงานผิดพลาดเกิดจากความประมาท",
    "exampleJa": "事故や業務エラーは不注意から発生する"
  },
  {
    "id": 51,
    "word": "ขอ",
    "meaning": "〜を求める、依頼する、〜させてください",
    "pronunciation": "khɔ̌ɔ",
    "frequency": "7回中6回",
    "exampleTh": "ผมขออนุมัติงบประมาณเพิ่มเติมสำหรับค่าโฆษณา",
    "exampleJa": "広告費のための追加予算の承認をお願いいたします"
  },
  {
    "id": 52,
    "word": "ค่า",
    "meaning": "費用、価値、料金",
    "pronunciation": "khâa",
    "frequency": "7回中6回",
    "exampleTh": "ค่าใช้จ่ายในการดำเนินงานของไตรมาสนี้ลดลงอย่างมีนัยสำคัญ",
    "exampleJa": "今四半期の営業費用は大幅に減少した"
  },
  {
    "id": 53,
    "word": "จริง",
    "meaning": "本当の、真実の、実際に",
    "pronunciation": "ciŋ",
    "frequency": "7回中6回",
    "exampleTh": "สถานการณ์ทางการเงินที่แท้จริงจะถูกเปิดเผยในงบดุล",
    "exampleJa": "実際の財務状況は貸借対照表で公開されます"
  },
  {
    "id": 54,
    "word": "จาก",
    "meaning": "〜から、離れる",
    "pronunciation": "càak",
    "frequency": "7回中6回",
    "exampleTh": "เราได้รับข้อมูลป้อนกลับที่มีประโยชน์จากผู้ใช้งานจริง",
    "exampleJa": "私たちは実際のユーザーから有益なフィードバックを受け取りました"
  },
  {
    "id": 55,
    "word": "เจอ",
    "meaning": "会う、見つける、遭遇する",
    "pronunciation": "cəə",
    "frequency": "7回中6回",
    "exampleTh": "ทีมวิจัยของเราเจอช่องว่างในตลาดที่สามารถทำกำไรได้",
    "exampleJa": "我が先の研究チームは、利益を上げられる市場のギャップを見つけた"
  },
  {
    "id": 56,
    "word": "ใจ",
    "meaning": "心、気持ち、精神",
    "pronunciation": "cai",
    "frequency": "7回中6回",
    "exampleTh": "การตัดสินใจในครั้งนี้ต้องอาศัยความรอบคอบเป็นพิเศษ",
    "exampleJa": "今回の決断は特に慎重さを必要とします"
  },
  {
    "id": 57,
    "word": "ฉัน",
    "meaning": "私（主に女性・親しい間柄）",
    "pronunciation": "chǎn",
    "frequency": "7回中6回",
    "exampleTh": "ฉันได้รับมอบหมายให้ดูแลลูกค้าวีไอพีจากต่างประเทศ",
    "exampleJa": "私は海外からのVIP顧客の担当を任されました"
  },
  {
    "id": 58,
    "word": "ช่วย",
    "meaning": "助ける、手伝う、〜してくれる（依頼）",
    "pronunciation": "chûay",
    "frequency": "7回中6回",
    "exampleTh": "ระบบอัตโนมัตินี้ช่วยลดขั้นตอนในการทำงานได้มาก",
    "exampleJa": "この自動化システムは業務プロセスを大幅に削減するのに役立つ"
  },
  {
    "id": 59,
    "word": "ใช้",
    "meaning": "使う、消費する、支払う",
    "pronunciation": "chái",
    "frequency": "7回中6回",
    "exampleTh": "เราควรใช้ทรัพยากรที่มีอยู่ให้เกิดประโยชน์สูงสุด",
    "exampleJa": "私たちは既存の資源を最大限に活用すべきだ"
  },
  {
    "id": 60,
    "word": "ดังนั้น",
    "meaning": "したがって、それゆえに",
    "pronunciation": "daŋnán",
    "frequency": "7回中6回",
    "exampleTh": "ดังนั้น เราจึงต้องปรับเปลี่ยนแผนการตลาดให้ทันเหตุการณ์",
    "exampleJa": "したがって、私たちは状況に合わせてマーケティング計画を変更しなければならない"
  },
  {
    "id": 61,
    "word": "ตก",
    "meaning": "落ちる、下落する、不合格になる",
    "pronunciation": "tòk",
    "frequency": "7回中6回",
    "exampleTh": "ดัชนีตลาดหลักทรัพย์ตกต่ำลงเนื่องจากปัจจัยภายนอก",
    "exampleJa": "外部要因により株価指数が下落した"
  },
  {
    "id": 62,
    "word": "ตาม",
    "meaning": "〜に従って、追う、〜に沿って",
    "pronunciation": "taam",
    "frequency": "7回中6回",
    "exampleTh": "โปรดดำเนินการตามข้อกำหนดในสัญญาอย่างเคร่งครัด",
    "exampleJa": "契約書の規定に従って厳格に実行してください"
  },
  {
    "id": 63,
    "word": "ถ้า",
    "meaning": "もし〜ならば",
    "pronunciation": "thâa",
    "frequency": "7回中6回",
    "exampleTh": "ถ้าเศรษฐกิจมั่นคง การลงทุนก็จะขยายตัวตามไปด้วย",
    "exampleJa": "もし経済が安定していれば、投資もそれに伴って拡大するだろう"
  },
  {
    "id": 64,
    "word": "ทำงาน",
    "meaning": "働く、仕事をする",
    "pronunciation": "thamŋaan",
    "frequency": "7回中6回",
    "exampleTh": "พวกเขามุ่งมั่นทำงานร่วมกันเพื่อให้บรรลุวัตถุภารกิจ",
    "exampleJa": "彼らはミッションを達成するために共同で働くことに注力している"
  },
  {
    "id": 65,
    "word": "ที่ไหน",
    "meaning": "どこ、どこに",
    "pronunciation": "thîinǎi",
    "frequency": "7回中6回",
    "exampleTh": "คุณต้องการจัดตั้งสำนักงานสาขาแห่งใหม่ที่ไหน",
    "exampleJa": "新しい支社オフィスをどこに設立したいですか"
  },
  {
    "id": 66,
    "word": "ประเทศ",
    "meaning": "国、国家",
    "pronunciation": "pràthêet",
    "frequency": "7回中6回",
    "exampleTh": "ประเทศเรามีศักยภาพในการเป็นศูนย์กลางโลจิสติกส์",
    "exampleJa": "我が国は物流ハブとなるポテンシャルを持っています"
  },
  {
    "id": 67,
    "word": "ปี",
    "meaning": "年、歳",
    "pronunciation": "pii",
    "frequency": "7回中6回",
    "exampleTh": "บริษัทมีผลกำไรเติบโตอย่างต่อเนื่องทุกปี",
    "exampleJa": "会社の利益は毎年継続的に成長している"
  },
  {
    "id": 68,
    "word": "เป็น",
    "meaning": "〜である、〜ができる、生きている",
    "pronunciation": "pen",
    "frequency": "7回中6回",
    "exampleTh": "ความซื่อสัตย์เป็นรากฐานสำคัญในการดำเนินธุรกิจ",
    "exampleJa": "誠実さはビジネス運営における重要な基盤である"
  },
  {
    "id": 69,
    "word": "ผิด",
    "meaning": "間違っている、違反する、異なる",
    "pronunciation": "phìt",
    "frequency": "7回中6回",
    "exampleTh": "หากระบบทำงานผิดพลาด ระบบจะแจ้งเตือนผู้ดูแลทันที",
    "exampleJa": "万が一システムが誤作動した場合、すぐに管理者に通知されます"
  },
  {
    "id": 70,
    "word": "พนักงาน",
    "meaning": "社員、従業員、スタッフ",
    "pronunciation": "phánákŋaan",
    "frequency": "7回中6回",
    "exampleTh": "พนักงานทุกคนต้องเข้ารับการอบรมเรื่องความปลอดภัย",
    "exampleJa": "全従業員が安全に関する研修を受けなければならない"
  },
  {
    "id": 71,
    "word": "พรุ่งนี้",
    "meaning": "明日",
    "pronunciation": "phrûŋníi",
    "frequency": "7回中6回",
    "exampleTh": "เราจะจัดประชุมคณะกรรมการบริหารในวันพรุ่งนี้",
    "exampleJa": "明日、取締役会を開催いたします"
  },
  {
    "id": 72,
    "word": "พอ",
    "meaning": "十分な、十分、〜するとすぐに",
    "pronunciation": "phɔɔ",
    "frequency": "7回中6回",
    "exampleTh": "เงินสำรองของบริษัทมีเพียงพอสำหรับการดำเนินงานหนึ่งปี",
    "exampleJa": "会社の内部留保金は1年間の操業に十分な量がある"
  },
  {
    "id": 73,
    "word": "เพราะ",
    "meaning": "なぜなら、〜なので、美しい（音）",
    "pronunciation": "phrɔ́",
    "frequency": "7回中6回",
    "exampleTh": "เพราะการแข่งขันสูง เราจึงต้องพัฒนาผลิตภัณฑ์อยู่เสมอ",
    "exampleJa": "競争が激しいため、私たちは常に製品を開発しなければならない"
  },
  {
    "id": 74,
    "word": "เพื่อน",
    "meaning": "友達、仲間、同僚",
    "pronunciation": "phʉ̂an",
    "frequency": "7回中6回",
    "exampleTh": "เรายินดีต้อนรับเพื่อนร่วมงานใหม่ที่ย้ายมาจากสาขาอื่น",
    "exampleJa": "他支店から異動してきた新しい同僚を歓迎します"
  },
  {
    "id": 75,
    "word": "รับ",
    "meaning": "受け取る、引き受ける、受ける",
    "pronunciation": "ráp",
    "frequency": "7回中6回",
    "exampleTh": "บริษัทได้รับรางวัลผู้ส่งออกยอดเยี่ยมประจำปี",
    "exampleJa": "会社は年間最優秀輸出業者賞を受賞した"
  },
  {
    "id": 76,
    "word": "เรื่อง",
    "meaning": "話、事柄、テーマ、件名",
    "pronunciation": "rʉ̂aŋ",
    "frequency": "7回中6回",
    "exampleTh": "เราต้องปรึกษาหารือกันในเรื่องแนวโน้มการตลาด",
    "exampleJa": "私たちは市場動向の件について話し合わなければならない"
  },
  {
    "id": 77,
    "word": "ลด",
    "meaning": "下げる、減らす、割引する",
    "pronunciation": "lót",
    "frequency": "7回中6回",
    "exampleTh": "มาตรการนี้ช่วยลดต้นทุนการผลิตลงได้สิบเปอร์เซ็นต์",
    "exampleJa": "この対策により生産コストを10%削減できた"
  },
  {
    "id": 78,
    "word": "ลูก",
    "meaning": "子供、果実、〜個（分類詞）",
    "pronunciation": "lûuk",
    "frequency": "7回中6回",
    "exampleTh": "ลูกค้ารายใหญ่เสนอเงื่อนไขการค้าที่น่าสนใจ",
    "exampleJa": "大口顧客が魅力的な取引条件を提案してきた"
  },
  {
    "id": 79,
    "word": "แล้ว",
    "meaning": "もう〜した、すでに、そして",
    "pronunciation": "lɛ́ɛw",
    "frequency": "7回中6回",
    "exampleTh": "โครงการนี้ได้ดำเนินการเสร็จสิ้นเรียบร้อยแล้ว",
    "exampleJa": "このプロジェクトはすでに正常に完了しています"
  },
  {
    "id": 80,
    "word": "และ",
    "meaning": "〜と（接続詞）、および",
    "pronunciation": "lɛ́",
    "frequency": "7回中6回",
    "exampleTh": "วิสัยทัศน์และพันธกิจขององค์กรต้องมีความชัดเจน",
    "exampleJa": "組織のビジョンとミッションは明確でなければならない"
  },
  {
    "id": 81,
    "word": "สบาย",
    "meaning": "快適な、元気な、楽な",
    "pronunciation": "sàbaai",
    "frequency": "7回中6回",
    "exampleTh": "การทำงานในออฟฟิศที่จัดสภาพแวดล้อมดีทำให้รู้สึกสบาย",
    "exampleJa": "環境が整ったオフィスでの勤務は快適に感じられる"
  },
  {
    "id": 82,
    "word": "สามารถ",
    "meaning": "〜できる、能力がある",
    "pronunciation": "sǎamâat",
    "frequency": "7回中6回",
    "exampleTh": "แอปพลิเคชันนี้สามารถประมวลผลข้อมูลขนาดใหญ่ได้อย่างรวดเร็ว",
    "exampleJa": "このアプリケーションはビッグデータを迅速に処理することができる"
  },
  {
    "id": 83,
    "word": "หนัก",
    "meaning": "重い、深刻な、厳しい",
    "pronunciation": "nàk",
    "frequency": "7回中6回",
    "exampleTh": "ทีมงานต้องเผชิญกับภาระงานที่หนักในช่วงปิดงบประมาณ",
    "exampleJa": "決算期にチームは重い業務負荷に直面しなければならない"
  },
  {
    "id": 84,
    "word": "หนังสือ",
    "meaning": "本、書類、書簡",
    "pronunciation": "nǎŋsʉ̌ʉ",
    "frequency": "7回中6回",
    "exampleTh": "ฝ่ายกฎหมายกำลังตรวจสอบหนังสือสัญญาอย่างละเอียด",
    "exampleJa": "法務部門が契約書類を詳細に確認している"
  },
  {
    "id": 85,
    "word": "หาย",
    "meaning": "なくなる、消える、治る",
    "pronunciation": "hǎai",
    "frequency": "7回中6回",
    "exampleTh": "ความกังวลใจเรื่องเงินทุนหายไปหลังจากได้พันธมิตรใหม่",
    "exampleJa": "新しいパートナーを得たことで、資金面の不安は消え去った"
  },
  {
    "id": 86,
    "word": "เหมือน",
    "meaning": "似ている、同じような",
    "pronunciation": "mʉ̌an",
    "frequency": "7回中6回",
    "exampleTh": "พฤติกรรมของผู้บริโภคในกลุ่มนี้เหมือนกันทั่วโลก",
    "exampleJa": "このグループの消費者行動は世界中で同様である"
  },
  {
    "id": 87,
    "word": "ให้",
    "meaning": "与える、〜させる、〜のために",
    "pronunciation": "hâi",
    "frequency": "7回中6回",
    "exampleTh": "ผู้บริหารมอบหมายนโยบายให้พนักงานยึดถือปฏิบัติ",
    "exampleJa": "経営陣は社員が遵守すべき方針を割り当てた"
  },
  {
    "id": 88,
    "word": "อยาก",
    "meaning": "〜したい、望む",
    "pronunciation": "yàak",
    "frequency": "7回中6回",
    "exampleTh": "เราอยากร่วมลงทุนในโครงการที่มีอนาคตไกล",
    "exampleJa": "私たちは将来性のあるプロジェクトに共同投資したいと考えています"
  },
  {
    "id": 89,
    "word": "อยู่",
    "meaning": "いる、ある、暮らす、〜している",
    "pronunciation": "yùu",
    "frequency": "7回中6回",
    "exampleTh": "ปัจจุบัน บริษัทยังคงเป็นผู้นำตลาดที่ครองตำแหน่งอยู่",
    "exampleJa": "現在、会社は依然として市場リーダーの地位にとどまっています"
  },
  {
    "id": 90,
    "word": "อาการ",
    "meaning": "症状、様子、状態",
    "pronunciation": "aakaan",
    "frequency": "7回中6回",
    "exampleTh": "อาการชะลอตัวของเศรษฐกิจส่งผลกระทบเป็นวงกว้าง",
    "exampleJa": "経済の減速状態は広範囲に影響を及ぼしている"
  },
  {
    "id": 91,
    "word": "อีก",
    "meaning": "また、さらに、もう一度",
    "pronunciation": "ìik",
    "frequency": "7回中6回",
    "exampleTh": "เราจำเป็นต้องตรวจสอบระบบอีกครั้งเพื่อความแม่นยำ",
    "exampleJa": "正確性を期すために、私たちはもう一度システムを検査する必要がある"
  },
  {
    "id": 92,
    "word": "กลับ",
    "meaning": "帰る、戻る",
    "pronunciation": "klàp",
    "frequency": "7回中5回",
    "exampleTh": "หลังเลิกงานฉันจะกลับบ้านทันที",
    "exampleJa": "仕事が終わったら私はすぐに家に帰る"
  },
  {
    "id": 93,
    "word": "ก็เลย",
    "meaning": "だから、それで",
    "pronunciation": "kɔ̂ɔləəy",
    "frequency": "7回中5回",
    "exampleTh": "วันนี้ฝนตกก็เลยไม่ได้ไปสวนสาธารณะ",
    "exampleJa": "今日は雨が降ったので公園に行かなかった"
  },
  {
    "id": 94,
    "word": "กิน",
    "meaning": "食べる、飲む",
    "pronunciation": "kin",
    "frequency": "7回中5回",
    "exampleTh": "เราไปกินอาหารไทยที่ร้านโปรดกันเถอะ",
    "exampleJa": "お気に入りの店にタイ料理を食べに行こう"
  },
  {
    "id": 95,
    "word": "ใกล้",
    "meaning": "近い、近くに",
    "pronunciation": "klâi",
    "frequency": "7回中5回",
    "exampleTh": "บ้านของเขาอยู่ใกล้กับสถานีรถไฟ",
    "exampleJa": "彼の家は駅の近くにある"
  },
  {
    "id": 96,
    "word": "ข้อ",
    "meaning": "項目、箇条、問題",
    "pronunciation": "khɔ̂ɔ",
    "frequency": "7回中5回",
    "exampleTh": "โปรดอ่านข้อตกลงและเงื่อนไขอย่างละเอียด",
    "exampleJa": "利用規約と条件を詳細にお読みください"
  },
  {
    "id": 97,
    "word": "ขาย",
    "meaning": "売る",
    "pronunciation": "khǎai",
    "frequency": "7回中5回",
    "exampleTh": "บริษัทนี้ผลิตและขายอุปกรณ์อิเล็กทรอนิกส์",
    "exampleJa": "この会社は電子機器を製造・販売している"
  },
  {
    "id": 98,
    "word": "คือ",
    "meaning": "〜である、すなわち",
    "pronunciation": "khʉʉ",
    "frequency": "7回中5回",
    "exampleTh": "เป้าหมายหลักของเราคือการเพิ่มยอดขาย",
    "exampleJa": "私たちの主な目標は売上を伸ばすることだ"
  },
  {
    "id": 99,
    "word": "ใคร",
    "meaning": "誰",
    "pronunciation": "khrai",
    "frequency": "7回中5回",
    "exampleTh": "มีใครรู้บ้างว่าห้องประชุมนี้อยู่ที่ไหน",
    "exampleJa": "この会議室がどこにあるか知っている人はいますか"
  },
  {
    "id": 100,
    "word": "จะ",
    "meaning": "〜するつもりだ、〜だろう",
    "pronunciation": "cà",
    "frequency": "7回中5回",
    "exampleTh": "พรุ่งนี้ฉันจะไปพบลูกค้าที่ต่างจังหวัด",
    "exampleJa": "明日私は地方へ顧客に会いに行くつもりだ"
  },
  {
    "id": 101,
    "word": "จำ",
    "meaning": "覚える、記憶する",
    "pronunciation": "cam",
    "frequency": "7回中5回",
    "exampleTh": "ฉันจำชื่อของเขาไม่ได้เพราะเจอกันแค่ครั้งเดียว",
    "exampleJa": "一度しか会っていないので、彼の名前を思い出せない"
  },
  {
    "id": 102,
    "word": "จำนวน",
    "meaning": "数量、金額",
    "pronunciation": "camnuan",
    "frequency": "7回中5回",
    "exampleTh": "จำนวนพนักงานในบริษัทเพิ่มขึ้นทุกปี",
    "exampleJa": "会社の従業員数は毎年増加している"
  },
  {
    "id": 103,
    "word": "ชอบ",
    "meaning": "好きだ、好む",
    "pronunciation": "chɔ̂ɔp",
    "frequency": "7回中5回",
    "exampleTh": "ลูกค้าส่วนใหญ่ชอบผลิตภัณฑ์ที่มีคุณภาพดีและราคาถูก",
    "exampleJa": "ほとんどの顧客は品質が良く価格が安い製品を好む"
  },
  {
    "id": 104,
    "word": "ชื่อ",
    "meaning": "名前、〜という名である",
    "pronunciation": "chʉ̂ʉ",
    "frequency": "7回中5回",
    "exampleTh": "กรุณากรอกชื่อและนามสกุลในใบสมัครนี้",
    "exampleJa": "この申込書にお名前と苗字をご記入ください"
  },
  {
    "id": 105,
    "word": "เช้า",
    "meaning": "朝、午前中",
    "pronunciation": "cháaw",
    "frequency": "7回中5回",
    "exampleTh": "ฉันมักจะดื่มกาแฟร้อนในตอนเช้าก่อนทำงาน",
    "exampleJa": "私はいつも仕事前の朝に温かいコーヒーを飲む"
  },
  {
    "id": 106,
    "word": "ซึ่ง",
    "meaning": "〜するところの（関係代名詞）",
    "pronunciation": "sʉ̂ŋ",
    "frequency": "7回中5回",
    "exampleTh": "นี่เป็นโครงการสำคัญซึ่งจะส่งผลต่ออนาคตบริษัท",
    "exampleJa": "これは会社の将来に影響を与える重要プロジェクトだ"
  },
  {
    "id": 107,
    "word": "ดู",
    "meaning": "見る、観る",
    "pronunciation": "duu",
    "frequency": "7回中5回",
    "exampleTh": "เราต้องดูแนวโน้มตลาดก่อนปรับเปลี่ยนแผนงาน",
    "exampleJa": "計画を変更する前に市場動向を見る必要がある"
  },
  {
    "id": 108,
    "word": "เดิน",
    "meaning": "歩く",
    "pronunciation": "dəən",
    "frequency": "7回中5回",
    "exampleTh": "เขาเดินไปทำงานทุกวันเพื่อออกกำลังกาย",
    "exampleJa": "彼は運動のために毎日歩いて仕事に行く"
  },
  {
    "id": 109,
    "word": "โดยเฉพาะ",
    "meaning": "特に、とりわけ",
    "pronunciation": "doychàphɔ́",
    "frequency": "7回中5回",
    "exampleTh": "ปีนี้ท่องเที่ยวไทยเติบโตดี โดยเฉพาะนักท่องเที่ยวญี่ปุ่น",
    "exampleJa": "今年タイの観光は好調で、特に日本人観光客が増えている"
  },
  {
    "id": 110,
    "word": "ตลาด",
    "meaning": "市場、マーケット",
    "pronunciation": "tàlàat",
    "frequency": "7回中5回",
    "exampleTh": "บริษัทกำลังวางแผนขยายช่องทางการขายในตลาดเอเชีย",
    "exampleJa": "会社はアジア市場での販売チャネル拡大を計画している"
  },
  {
    "id": 111,
    "word": "ต่อ",
    "meaning": "〜に対して、続ける、交渉する",
    "pronunciation": "tɔ̀ɔ",
    "frequency": "7回中5回",
    "exampleTh": "เราต้องบริการลูกค้าด้วยความจริงใจต่อทุกคน",
    "exampleJa": "私たちはすべての人に対して誠意を持って顧客対応しなければならない"
  },
  {
    "id": 112,
    "word": "เต็ม",
    "meaning": "満ちた、いっぱいの",
    "pronunciation": "tem",
    "frequency": "7回中5回",
    "exampleTh": "ห้องประชุมในวันนี้มีคนเข้าฟังเต็มทุกที่นั่ง",
    "exampleJa": "今日の会議室は全席満員で聴衆が入っている"
  },
  {
    "id": 113,
    "word": "แตกต่าง",
    "meaning": "異なる、違っている",
    "pronunciation": "tɛ̀ektàaŋ",
    "frequency": "7回中5回",
    "exampleTh": "สองบริษัทนี้มีวัฒนธรรมองค์กรที่แตกต่างกันมาก",
    "exampleJa": "これら二つの会社は組織文化が大きく異なっている"
  },
  {
    "id": 114,
    "word": "ทันที",
    "meaning": "すぐに、ただちに",
    "pronunciation": "thanthii",
    "frequency": "7回中5回",
    "exampleTh": "หากระบบมีปัญหา โปรดแจ้งผู้จัดการทันที",
    "exampleJa": "システムに問題がある場合は、すぐにマネージャーに通知してください"
  },
  {
    "id": 115,
    "word": "ทาง",
    "meaning": "道、方向、方法",
    "pronunciation": "thaaŋ",
    "frequency": "7回中5回",
    "exampleTh": "เราต้องหาทางแก้ไขข้อผิดพลาดในระบบโดยเร็ว",
    "exampleJa": "システムの不具合を解消する方法を早急に見つけなければならない"
  },
  {
    "id": 116,
    "word": "ทำไม",
    "meaning": "なぜ、どうして",
    "pronunciation": "thammai",
    "frequency": "7回中5回",
    "exampleTh": "คุณช่วยอธิบายว่าทำไมโครงการนี้จึงล่าช้ากว่ากำหนด",
    "exampleJa": "なぜこのプロジェクトが予定より遅れているのか説明していただけますか"
  },
  {
    "id": 117,
    "word": "เท่านั้น",
    "meaning": "〜だけ、〜のみ",
    "pronunciation": "thâonán",
    "frequency": "7回中5回",
    "exampleTh": "บัตรนี้ใช้ผ่านเข้าออกได้เฉพาะพนักงานเท่านั้น",
    "exampleJa": "このカードは従業員のみが入退室に使用できる"
  },
  {
    "id": 118,
    "word": "เที่ยว",
    "meaning": "遊びに行く、旅行する",
    "pronunciation": "thîaw",
    "frequency": "7回中5回",
    "exampleTh": "วันหยุดสุดสัปดาห์นี้ฉันอยากไปเที่ยวต่างจังหวัดกับเพื่อน",
    "exampleJa": "この週末、友達と地方へ遊びに行きたい"
  },
  {
    "id": 119,
    "word": "โทรศัพท์",
    "meaning": "電話、携帯電話",
    "pronunciation": "thoorásàp",
    "frequency": "7回中5回",
    "exampleTh": "ลูกค้าโทรศัพท์เข้ามาติดต่อเรื่องสัญญากับฝ่ายกฎหมาย",
    "exampleJa": "顧客が法務部との契約の件で電話をかけてきた"
  },
  {
    "id": 120,
    "word": "นัด",
    "meaning": "約束する、会う約束をする",
    "pronunciation": "nát",
    "frequency": "7回中5回",
    "exampleTh": "ฝ่ายขายขอนัดพบลูกค้าเพื่อหารือในวันพรุ่งนี้",
    "exampleJa": "営業部は明日協議のために顧客と会う約束を取り付けた"
  },
  {
    "id": 121,
    "word": "นาน",
    "meaning": "長い（時間）、長く",
    "pronunciation": "naan",
    "frequency": "7回中5回",
    "exampleTh": "เราเจรจาธุรกิจนานสองชั่วโมงก่อนบรรลุข้อตกลง",
    "exampleJa": "私たちは合意に達する前に2時間長くビジネス交渉をした"
  },
  {
    "id": 122,
    "word": "นำ",
    "meaning": "導く、リードする、持ってくる",
    "pronunciation": "nam",
    "frequency": "7回中5回",
    "exampleTh": "นวัตกรรมใหม่นี้จะนำบริษัทไปสู่การเติบโตอย่างก้าวกระโดด",
    "exampleJa": "この新しい革新は会社を飛躍的な成長へと導くだろう"
  },
  {
    "id": 123,
    "word": "ใน",
    "meaning": "〜の中に、〜において",
    "pronunciation": "nai",
    "frequency": "7回中5回",
    "exampleTh": "การลงนามในสัญญาจะจัดขึ้นที่สำนักงานใหญ่",
    "exampleJa": "契約への署名は本社で行われる"
  },
  {
    "id": 124,
    "word": "บริษัท",
    "meaning": "会社、企業",
    "pronunciation": "bɔɔrísàt",
    "frequency": "7回中5回",
    "exampleTh": "บริษัทของเรายึดมั่นในความซื่อสัตย์และความโปร่งใส",
    "exampleJa": "私たちの会社は誠実さと透明性を堅持している"
  },
  {
    "id": 125,
    "word": "พบ",
    "meaning": "会う、見つける、遭遇する",
    "pronunciation": "phóp",
    "frequency": "7回中5回",
    "exampleTh": "เราพบอุปสรรคสำคัญในการบริหารโครงการในช่วงแรก",
    "exampleJa": "初期段階でプロジェクト管理における重要な障害に遭遇した"
  },
  {
    "id": 126,
    "word": "เพราะฉะนั้น",
    "meaning": "だから、したがって",
    "pronunciation": "phrɔ́chànán",
    "frequency": "7回中5回",
    "exampleTh": "เพราะฉะนั้นเราจึงจำเป็นต้องร่วมมือกับบริษัทพันธมิตร",
    "exampleJa": "したがって、私たちは提携企業と協力する必要がある"
  },
  {
    "id": 127,
    "word": "เพราะว่า",
    "meaning": "なぜなら〜だから",
    "pronunciation": "phrɔ́wâa",
    "frequency": "7回中5回",
    "exampleTh": "การทำงานช้าลงเพราะว่ามีขั้นตอนการอนุมัติหลายอย่าง",
    "exampleJa": "承認プロセスが多数あるため、業務が遅れている"
  },
  {
    "id": 128,
    "word": "มือ",
    "meaning": "手",
    "pronunciation": "mʉʉ",
    "frequency": "7回中5回",
    "exampleTh": "พนักงานล้างมือด้วยสบู่ก่อนเข้าปฏิบัติงานในโรงงาน",
    "exampleJa": "従業員は工場での作業に入る前に石鹸で手を洗う"
  },
  {
    "id": 129,
    "word": "เมื่อ",
    "meaning": "〜のとき",
    "pronunciation": "mʉ̂a",
    "frequency": "7回中5回",
    "exampleTh": "เมื่อเกิดความผิดพลาดในระบบ โปรดตรวจสอบทันที",
    "exampleJa": "システムに障害が発生したときは、すぐに確認してください"
  },
  {
    "id": 130,
    "word": "เมือง",
    "meaning": "都市、町、国",
    "pronunciation": "mʉaŋ",
    "frequency": "7回中5回",
    "exampleTh": "กรุงเทพฯ เป็นเมืองที่มีกิจกรรมทางเศรษฐกิจสูงที่สุดของไทย",
    "exampleJa": "バンコクはタイで最も経済活動が盛んな都市だ"
  },
  {
    "id": 131,
    "word": "แม่",
    "meaning": "母親",
    "pronunciation": "mɛ̂ɛ",
    "frequency": "7回中5回",
    "exampleTh": "แม่ของเขาทำงานเป็นหัวหน้าฝ่ายบัญชีที่บริษัทต่างชาติ",
    "exampleJa": "彼の母親は外資系企業で会計部門の責任者として働いている"
  },
  {
    "id": 132,
    "word": "โมง",
    "meaning": "〜時（時間）",
    "pronunciation": "mooŋ",
    "frequency": "7回中5回",
    "exampleTh": "เราจะจัดประชุมใหญ่ในเวลาสิบโมงเช้าวันจันทร์",
    "exampleJa": "月曜日の朝10時に全体会議を開催します"
  },
  {
    "id": 133,
    "word": "ยอม",
    "meaning": "同意する、承諾する、進んで〜する",
    "pronunciation": "yɔɔm",
    "frequency": "7回中5回",
    "exampleTh": "ทั้งสองฝ่ายยอมประนีประนอมเพื่อประโยชน์ทางธุรกิจระยะยาว",
    "exampleJa": "双方は長期的なビジネス利益のために進んで妥協した"
  },
  {
    "id": 134,
    "word": "ยัง",
    "meaning": "まだ、依然として、〜へ（方向）",
    "pronunciation": "yaŋ",
    "frequency": "7回中5回",
    "exampleTh": "โครงการนี้ยังอยู่ระหว่างการพิจารณาของคณะกรรมการ",
    "exampleJa": "このプロジェクトは依然として委員会の検討段階にある"
  },
  {
    "id": 135,
    "word": "เย็น",
    "meaning": "冷たい、夕方",
    "pronunciation": "yen",
    "frequency": "7回中5回",
    "exampleTh": "เราตกลงนัดทานอาหารค่ำร่วมกันในตอนเย็นวันพรุ่งนี้",
    "exampleJa": "私たちは明日の夕方に一緒に夕食をとる約束をした"
  },
  {
    "id": 136,
    "word": "รัก",
    "meaning": "愛する、好む",
    "pronunciation": "rák",
    "frequency": "7回中5回",
    "exampleTh": "พนักงานทุกคนที่นี่รักงานบริการและมีความซื่อสัตย์",
    "exampleJa": "ここのすべての従業員はサービス業を愛し、誠実さを持っている"
  },
  {
    "id": 137,
    "word": "ราคา",
    "meaning": "価格、値段",
    "pronunciation": "raakhaa",
    "frequency": "7回中5回",
    "exampleTh": "การปรับตัวลดลงของราคาน้ำมันส่งผลดีต่อภาคอุตสาหกรรม",
    "exampleJa": "原油価格の下落は産業界に良い影響を与えている"
  },
  {
    "id": 138,
    "word": "รีบ",
    "meaning": "急ぐ",
    "pronunciation": "rîip",
    "frequency": "7回中5回",
    "exampleTh": "เราต้องรีบทำงานนี้ให้เสร็จก่อนครบกำหนด",
    "exampleJa": "期限が切れる前に、急いでこの仕事を終わらせなければならない"
  },
  {
    "id": 139,
    "word": "รู้",
    "meaning": "知る、わかる",
    "pronunciation": "rúu",
    "frequency": "7回中5回",
    "exampleTh": "ไม่มีใครรู้ว่าสถานการณ์ทางเศรษฐกิจจะเป็นอย่างไรในอนาคต",
    "exampleJa": "将来の経済状況がどうなるかは誰もわからない"
  },
  {
    "id": 140,
    "word": "รู้สึก",
    "meaning": "感じる、〜と思う",
    "pronunciation": "rúusʉ̀k",
    "frequency": "7回中5回",
    "exampleTh": "พนักงานรู้สึกพอใจกับระบบสวัสดิการใหม่ของบริษัท",
    "exampleJa": "従業員は会社の新しい福利厚生制度に満足を感じている"
  },
  {
    "id": 141,
    "word": "โรงเรียน",
    "meaning": "学校",
    "pronunciation": "rooŋrian",
    "frequency": "7回中5回",
    "exampleTh": "โรงเรียนนี้เน้นสอนด้านเทคโนโลยีและภาษาต่างประเทศ",
    "exampleJa": "この学校はテクノロジーと外国語の教育に力を入れている"
  },
  {
    "id": 142,
    "word": "เลี้ยง",
    "meaning": "育てる、養う、もてなす",
    "pronunciation": "líaŋ",
    "frequency": "7回中5回",
    "exampleTh": "บริษัทจัดงานเลี้ยงอาหารค่ำเพื่อต้อนรับผู้จัดการคนใหม่",
    "exampleJa": "会社は新しいマネージャーを歓迎するために夕食会を催した"
  },
  {
    "id": 143,
    "word": "วิ่ง",
    "meaning": "走る",
    "pronunciation": "wîŋ",
    "frequency": "7回中5回",
    "exampleTh": "ธุรกิจส่งออกเริ่มวิ่งตามความต้องการของตลาดโลก",
    "exampleJa": "輸出ビジネスが世界市場の需要を追いかけ始めた"
  },
  {
    "id": 144,
    "word": "สวน",
    "meaning": "庭、公園、反対の",
    "pronunciation": "sǔan",
    "frequency": "7回中5回",
    "exampleTh": "บริษัทของเราสวนกระแสเศรษฐกิจโดยเปิดตัวสินค้าใหม่ในช่วงนี้",
    "exampleJa": "当社は現在、新製品を発売することで経済の逆風に立ち向かっている"
  },
  {
    "id": 145,
    "word": "ส่วนใหญ่",
    "meaning": "大部分、大部分は",
    "pronunciation": "sùanyài",
    "frequency": "7回中5回",
    "exampleTh": "ลูกค้าส่วนใหญ่ตัดสินใจซื้อสินค้าผ่านทางอินเทอร์เน็ต",
    "exampleJa": "ほとんどの顧客はインターネットを通じて商品を購入することを決定する"
  },
  {
    "id": 146,
    "word": "สวย",
    "meaning": "美しい、きれいな",
    "pronunciation": "sǔay",
    "frequency": "7回中5回",
    "exampleTh": "อาคารสำนักงานใหญ่แห่งใหม่มีสถาปัตยกรรมที่สวยและทันสมัย",
    "exampleJa": "新しい本社ビルは美しくモダンな建築様式をしている"
  },
  {
    "id": 147,
    "word": "สอบ",
    "meaning": "試験を受ける、調べる",
    "pronunciation": "sɔ̀ɔp",
    "frequency": "7回中5回",
    "exampleTh": "บริษัทจัดสอบข้อเขียนเพื่อคัดเลือกคนเข้าทำงานตำแหน่งนี้",
    "exampleJa": "会社はこのポジションの採用者の選考のために筆記試験を実施した"
  },
  {
    "id": 148,
    "word": "เสียง",
    "meaning": "声、音、意見",
    "pronunciation": "sǐaŋ",
    "frequency": "7回中5回",
    "exampleTh": "เราต้องยอมรับฟังเสียงจากผู้บริโภคจริงในตลาด",
    "exampleJa": "私たちは市場の実際の消費者からの声に耳を傾けなければならない"
  },
  {
    "id": 149,
    "word": "หลัง",
    "meaning": "後ろ、背中、〜の後に",
    "pronunciation": "lǎŋ",
    "frequency": "7回中5回",
    "exampleTh": "หลังเลิกงานพนักงานมักจะออกกำลังกายเพื่อสุขภาพ",
    "exampleJa": "仕事の後に、従業員は健康のために運動することが多い"
  },
  {
    "id": 150,
    "word": "หลาย",
    "meaning": "たくさんの、いくつかの",
    "pronunciation": "lǎai",
    "frequency": "7回中5回",
    "exampleTh": "เรามีผลิตภัณฑ์หลายประเภทเพื่อตอบสนองกลุ่มลูกค้า",
    "exampleJa": "私たちは顧客層に応えるためにたくさんの種類の製品を持っている"
  },
  {
    "id": 151,
    "word": "ห้อง",
    "meaning": "部屋",
    "pronunciation": "hɔ̂ɔŋ",
    "frequency": "7回中5回",
    "exampleTh": "ห้องปฏิบัติการใหม่ของบริษัทได้รับการรับรองมาตรฐานสากล",
    "exampleJa": "会社の新しいラボラトリーは国際標準規格の認定を受けている"
  },
  {
    "id": 152,
    "word": "หา",
    "meaning": "探す、会う",
    "pronunciation": "hǎa",
    "frequency": "7回中5回",
    "exampleTh": "เราจำเป็นต้องหาพันธมิตรทางการค้าใหม่เพื่อเพิ่มทุน",
    "exampleJa": "私たちは増資のために新しい貿易パートナーを探す必要がある"
  },
  {
    "id": 153,
    "word": "เห็น",
    "meaning": "見える、〜と思う",
    "pronunciation": "hěn",
    "frequency": "7回中5回",
    "exampleTh": "ผู้บริหารเห็นความสำคัญของการพัฒนาระบบนี้โดยเร็ว",
    "exampleJa": "経営陣はこのシステムを早急に開発することの重要性を認めている"
  },
  {
    "id": 154,
    "word": "ใหญ่",
    "meaning": "大きい、巨大な",
    "pronunciation": "yài",
    "frequency": "7回中5回",
    "exampleTh": "โครงการขนาดใหญ่นี้ต้องใช้เงินลงทุนสูงมาก",
    "exampleJa": "この大規模プロジェクトは非常に高額な投資を必要とする"
  },
  {
    "id": 155,
    "word": "อุบัติเหตุ",
    "meaning": "事故",
    "pronunciation": "ùbàttìhèet",
    "frequency": "7回中5回",
    "exampleTh": "การทำงานตามข้อตกลงอย่างปลอดภัยช่วยป้องกันอุบัติเหตุได้ดี",
    "exampleJa": "安全基準に従って作業することは、事故を防ぐのに非常に役立つ"
  },
  {
    "id": 156,
    "word": "กรุณา",
    "meaning": "〜してください（丁寧な依頼）",
    "pronunciation": "kàrúnaa",
    "frequency": "7回中4回",
    "exampleTh": "กรุณากรอกแบบฟอร์มนี้เพื่อลงทะเบียนเข้างาน",
    "exampleJa": "受付のためにこのフォームにご記入ください。"
  },
  {
    "id": 157,
    "word": "กว่า",
    "meaning": "〜よりも（比較級）",
    "pronunciation": "kwàa",
    "frequency": "7回中4回",
    "exampleTh": "ยอดขายในเดือนนี้สูงกว่าเดือนที่แล้วมาก",
    "exampleJa": "今月の売上は先月よりもかなり高い。"
  },
  {
    "id": 158,
    "word": "แก่",
    "meaning": "〜に対して、〜に、老いた",
    "pronunciation": "kɛ̀ɛ",
    "frequency": "7回中4回",
    "exampleTh": "พนักงานมอบของขวัญแก่ผู้จัดการในวันเกิด",
    "exampleJa": "従業員たちはマネージャーの誕生日にプレゼントを贈った。"
  },
  {
    "id": 159,
    "word": "ขอบคุณ",
    "meaning": "ありがとう、感謝する",
    "pronunciation": "khɔ̀ɔpkhun",
    "frequency": "7回中4回",
    "exampleTh": "ขอบคุณทุกท่านที่ให้ความร่วมมือในโครงการนี้",
    "exampleJa": "このプロジェクトにご協力いただき、皆様に感謝いたします。"
  },
  {
    "id": 160,
    "word": "ข้าง",
    "meaning": "側、隣に、方向",
    "pronunciation": "khâaŋ",
    "frequency": "7回中4回",
    "exampleTh": "ร้านอาหารไทยตั้งอยู่ข้างธนาคารกรุงเทพ",
    "exampleJa": "タイ料理店はバンコク銀行の隣にあります。"
  },
  {
    "id": 161,
    "word": "ข้าว",
    "meaning": "米、ご飯",
    "pronunciation": "khâaw",
    "frequency": "7回中4回",
    "exampleTh": "คนไทยส่วนใหญ่นิยมทานข้าวหอมมะลิเป็นหลัก",
    "exampleJa": "タイ人の多くは主にジャスミン米を食べることを好む。"
  },
  {
    "id": 162,
    "word": "เข้า",
    "meaning": "入る",
    "pronunciation": "khâo",
    "frequency": "7回中4回",
    "exampleTh": "โปรดแสดงบัตรพนักงานก่อนเข้าอาคารสำนักงาน",
    "exampleJa": "オフィスビルに入る前に従業員証をご提示ください。"
  },
  {
    "id": 163,
    "word": "เข้าใจ",
    "meaning": "理解する、わかる",
    "pronunciation": "khâocai",
    "frequency": "7回中4回",
    "exampleTh": "ทุกคนในที่ประชุมเข้าใจแผนงานใหม่เป็นอย่างดี",
    "exampleJa": "会議に参加した全員が新しい計画案をとてもよく理解した。"
  },
  {
    "id": 164,
    "word": "เขียน",
    "meaning": "書く",
    "pronunciation": "khǐan",
    "frequency": "7回中4回",
    "exampleTh": "กรุณาเขียนชื่อผู้ติดต่อลงในเอกสารนี้ด้วย",
    "exampleJa": "この書類に担当者の名前も書いてください。"
  },
  {
    "id": 165,
    "word": "คนอื่น",
    "meaning": "他人、他の人",
    "pronunciation": "khonʉ̀ʉn",
    "frequency": "7回中4回",
    "exampleTh": "เราต้องรับฟังความเห็นของคนอื่นในการทำงานร่วมกัน",
    "exampleJa": "共同で作業をする際には他人の意見に耳を傾けなければならない。"
  },
  {
    "id": 166,
    "word": "ครับ",
    "meaning": "はい（男性の丁寧な語尾）",
    "pronunciation": "khráp",
    "frequency": "7回中4回",
    "exampleTh": "ได้ครับ ผมจะรีบดำเนินการให้ทันทีครับ",
    "exampleJa": "はい、分かりました。すぐに進めます。"
  },
  {
    "id": 167,
    "word": "ความสุข",
    "meaning": "幸せ、幸福",
    "pronunciation": "khwaamsùk",
    "frequency": "7回中4回",
    "exampleTh": "การทำงานในบรรยากาศที่ดีช่วยสร้างความสุขให้พนักงาน",
    "exampleJa": "良い雰囲気の中で働くことは従業員に幸福をもたらす。"
  },
  {
    "id": 168,
    "word": "ความหมาย",
    "meaning": "意味",
    "pronunciation": "khwaammǎay",
    "frequency": "7回中4回",
    "exampleTh": "คุณช่วยอธิบายความหมายของคำศัพท์ธุรกิจคำนี้หน่อย",
    "exampleJa": "このビジネス用語の意味を説明していただけますか。"
  },
  {
    "id": 169,
    "word": "ค่อย",
    "meaning": "徐々に、あまり〜ない（否定文で）",
    "pronunciation": "khɔ̀y",
    "frequency": "7回中4回",
    "exampleTh": "ช่วงนี้ฉันไม่ค่อยมีเวลาไปออกกำลังกายที่สวนสาธารณะ",
    "exampleJa": "最近、私は公園に運動に行く時間があまりない。"
  },
  {
    "id": 170,
    "word": "คำ",
    "meaning": "言葉、単語、〜語（分類詞）",
    "pronunciation": "kham",
    "frequency": "7回中4回",
    "exampleTh": "สัญญาฉบับนี้มีหลายคำที่แปลยากมาก",
    "exampleJa": "この契約書には翻訳が非常に難しい言葉がたくさんある。"
  },
  {
    "id": 171,
    "word": "คุณ",
    "meaning": "あなた、〜さん、恩恵",
    "pronunciation": "khun",
    "frequency": "7回中4回",
    "exampleTh": "คุณสมบัติของคุณตรงกับความต้องการของบริษัทเราพอดี",
    "exampleJa": "あなたの資格はちょうど我が社の求めている要件に一致しています。"
  },
  {
    "id": 172,
    "word": "ใช่",
    "meaning": "はい、そうです",
    "pronunciation": "châi",
    "frequency": "7回中4回",
    "exampleTh": "โครงการนี้คือแผนงานที่เราต้องเริ่มทำทันที ใช่ไหม",
    "exampleJa": "このプロジェクトがすぐに始めなければならない計画ですね。"
  },
  {
    "id": 173,
    "word": "เดือน",
    "meaning": "月、〜ヶ月",
    "pronunciation": "dʉan",
    "frequency": "7回中4回",
    "exampleTh": "ยอดสั่งซื้อเพิ่มขึ้นอย่างรวดเร็วในเดือนที่ผ่านมา",
    "exampleJa": "先月、受注数が急速に増加した。"
  },
  {
    "id": 174,
    "word": "ได้",
    "meaning": "できる、得る、〜してもよい",
    "pronunciation": "dâai",
    "frequency": "7回中4回",
    "exampleTh": "เราได้รับใบอนุมัติโครงการจากทางราชการแล้ว",
    "exampleJa": "私たちは政府からプロジェクトの承認書を手に入れた。"
  },
  {
    "id": 175,
    "word": "ตกลง",
    "meaning": "同意する、決定する",
    "pronunciation": "tòkloŋ",
    "frequency": "7回中4回",
    "exampleTh": "ทั้งสองบริษัทตกลงเซ็นสัญญาพันธมิตรทางการค้า",
    "exampleJa": "両社は商業提携契約を締結することに合意した。"
  },
  {
    "id": 176,
    "word": "ต้อง",
    "meaning": "〜しなければならない、必要とする",
    "pronunciation": "tɔ̂ŋ",
    "frequency": "7回中4回",
    "exampleTh": "พนักงานทุกคนต้องเข้ารับการอบรมความปลอดภัย",
    "exampleJa": "全従業員が安全研修を受けなければならない。"
  },
  {
    "id": 177,
    "word": "ตอนนี้",
    "meaning": "今、現在",
    "pronunciation": "tɔɔnníi",
    "frequency": "7回中4回",
    "exampleTh": "ตอนนี้สถานการณ์เศรษฐกิจกำลังปรับตัวดีขึ้นเรื่อยๆ",
    "exampleJa": "現在、経済状況は徐々に回復しつつある。"
  },
  {
    "id": 178,
    "word": "ต่อไป",
    "meaning": "次に、今後、これからも",
    "pronunciation": "tɔ̀ɔpai",
    "frequency": "7回中4回",
    "exampleTh": "ขั้นตอนต่อไปคือการทดสอบระบบก่อนเปิดใช้งานจริง",
    "exampleJa": "次のステップは、本番運用の前にシステムをテストすることだ。"
  },
  {
    "id": 179,
    "word": "ตั้งใจ",
    "meaning": "熱心にする、意図する",
    "pronunciation": "tâŋcai",
    "frequency": "7回中4回",
    "exampleTh": "เขาตั้งใจทำงานนี้ให้สำเร็จลุล่วงด้วยดี",
    "exampleJa": "彼はこの仕事をうまく成功させようと熱心に取り組んでいる。"
  },
  {
    "id": 180,
    "word": "ตัว",
    "meaning": "体、自分、〜匹・〜着（分類詞）",
    "pronunciation": "tua",
    "frequency": "7回中4回",
    "exampleTh": "ลูกค้าชอบเสื้อผ้าตัวนี้เพราะเนื้อผ้าดีและใส่สบาย",
    "exampleJa": "顧客は生地が良く着心地が良いため、この服を気に入っている。"
  },
  {
    "id": 181,
    "word": "ตัวเอง",
    "meaning": "自分自身",
    "pronunciation": "tuaeeŋ",
    "frequency": "7回中4回",
    "exampleTh": "เราต้องพัฒนาทักษะของตัวเองอยู่เสมอเพื่อความก้าวหน้า",
    "exampleJa": "進歩するために、私たちは常に自分自身のスキルを向上させなければならない。"
  },
  {
    "id": 182,
    "word": "ต่าง",
    "meaning": "異なる、様々な",
    "pronunciation": "tàaŋ",
    "frequency": "7回中4回",
    "exampleTh": "ลูกค้าต่างมีความเห็นที่หลากหลายเกี่ยวกับบริการใหม่",
    "exampleJa": "顧客は新サービスについてそれぞれ様々な意見を持っている。"
  },
  {
    "id": 183,
    "word": "ต่างประเทศ",
    "meaning": "外国、海外",
    "pronunciation": "tàaŋpràthêet",
    "frequency": "7回中4回",
    "exampleTh": "บริษัทมีแผนส่งออกสินค้าไปจำหน่ายยังต่างประเทศในปีนี้",
    "exampleJa": "会社は今年、商品を海外に輸出して販売する計画がある。"
  },
  {
    "id": 184,
    "word": "ติด",
    "meaning": "付く、渋滞する、連絡が取れる",
    "pronunciation": "tìt",
    "frequency": "7回中4回",
    "exampleTh": "วันนี้ฝนตกหนักทำให้การจราจรติดขัดมากบนถนนสายหลัก",
    "exampleJa": "今日は大雨が降り、主要道路で交通が激しく渋滞した。"
  },
  {
    "id": 185,
    "word": "ตื่น",
    "meaning": "起きる、覚醒する",
    "pronunciation": "tʉ̀ʉn",
    "frequency": "7回中4回",
    "exampleTh": "ฉันมักจะตื่นเช้าเพื่อมาเตรียมตัวประชุมในทุกวันจันทร์",
    "exampleJa": "私は毎週月曜日、会議の準備をするためにいつも朝早く起きる。"
  },
  {
    "id": 186,
    "word": "ถนน",
    "meaning": "道路、通り",
    "pronunciation": "thànǒn",
    "frequency": "7回中4回",
    "exampleTh": "ออฟฟิศของเราตั้งอยู่บนถนนสุขุมวิทใกล้สถานีอโศก",
    "exampleJa": "私たちのオフィスはアソーク駅近くのスクンビット通りにあります。"
  },
  {
    "id": 187,
    "word": "ทะเล",
    "meaning": "海",
    "pronunciation": "thálee",
    "frequency": "7回中4回",
    "exampleTh": "in วันหยุดฤดูร้อน นักท่องเที่ยวต่างนิยมไปเที่ยวทะเลกันมาก",
    "exampleJa": "夏休みの間、多くの観光客が好んで海へ旅行に出かける。"
  },
  {
    "id": 188,
    "word": "ทั้ง",
    "meaning": "全て、〜も〜も両方",
    "pronunciation": "tháŋ",
    "frequency": "7回中4回",
    "exampleTh": "เราต้องให้ความสำคัญทั้งเรื่องคุณภาพและราคาของสินค้า",
    "exampleJa": "私たちは商品の品質と価格の両方を重視しなければならない。"
  },
  {
    "id": 189,
    "word": "ทั้งๆที่",
    "meaning": "〜であるにもかかわらず",
    "pronunciation": "tháŋtháŋthîi",
    "frequency": "7回中4回",
    "exampleTh": "เขามาทำงานแต่เช้าทั้งๆ ที่เมื่อคืนต้องทำงานล่วงเวลาจนดึก",
    "exampleJa": "昨夜は遅くまで残業したにもかかわらず、彼は朝早く出勤した。"
  },
  {
    "id": 190,
    "word": "ทัน",
    "meaning": "間に合う",
    "pronunciation": "than",
    "frequency": "7回中4回",
    "exampleTh": "เราต้องส่งสินค้าให้ทันกำหนดเวลาของลูกค้าในสัปดาห์นี้",
    "exampleJa": "今週、顧客の指定期限に間に合うように商品を配送しなければならない。"
  },
  {
    "id": 191,
    "word": "ทาน",
    "meaning": "食べる（丁寧語）",
    "pronunciation": "thaan",
    "frequency": "7回中4回",
    "exampleTh": "วันนี้เราไปทานอาหารเที่ยงที่ร้านอาหารเปิดใหม่แถวนี้กันดีกว่า",
    "exampleJa": "今日はこの近くに新しくオープンしたお店で昼食を食べましょう。"
  },
  {
    "id": 192,
    "word": "ทุกคน",
    "meaning": "全員、すべての人",
    "pronunciation": "thúkkhon",
    "frequency": "7回中4回",
    "exampleTh": "ทุกคนในฝ่ายขายต่างมีความยินดีกับยอดขายที่ได้ตามเป้า",
    "exampleJa": "営業部の全員が目標を達成した売上高に喜んでいる。"
  },
  {
    "id": 193,
    "word": "เทอม",
    "meaning": "学期、期間",
    "pronunciation": "thəəm",
    "frequency": "7回中4回",
    "exampleTh": "ผลการเรียนในเทอมนี้ดีขึ้นกว่าภาคเรียนที่ผ่านมามาก",
    "exampleJa": "今学期の成績は前学期に比べて大幅に向上した。"
  },
  {
    "id": 194,
    "word": "โทร",
    "meaning": "電話する（口語）",
    "pronunciation": "thoo",
    "frequency": "7回中4回",
    "exampleTh": "ช่วยโทรแจ้งลูกค้าว่าเอกสารที่ขอได้รับการอนุมัติแล้ว",
    "exampleJa": "依頼された書類が承認された旨を顧客に電話で知らせてください。"
  },
  {
    "id": 195,
    "word": "นอก",
    "meaning": "外、〜以外",
    "pronunciation": "nɔ̂ɔk",
    "frequency": "7回中4回",
    "exampleTh": "นอกเวลาทำงานปกติ พนักงานสามารถเข้าร่วมกิจกรรมชมรมได้",
    "exampleJa": "通常の勤務時間外に、従業員はサークル活動に参加することができる。"
  },
  {
    "id": 196,
    "word": "นอน",
    "meaning": "横たわる、眠る",
    "pronunciation": "nɔɔn",
    "frequency": "7回中4回",
    "exampleTh": "คุณควรพักผ่อนและนอนหลับให้เพียงพอก่อนวันสอบจริง",
    "exampleJa": "試験当日の前には、ゆっくり休み十分な睡眠をとるべきだ。"
  },
  {
    "id": 197,
    "word": "น้ำ",
    "meaning": "水",
    "pronunciation": "nám",
    "frequency": "7回中4回",
    "exampleTh": "น้ำเป็นทรัพยากรสำคัญที่ใช้ในกระบวนการผลิตของโรงงาน",
    "exampleJa": "水は工場の生産プロセスで使用される重要な資源である。"
  },
  {
    "id": 198,
    "word": "นิยม",
    "meaning": "人気がある、好む",
    "pronunciation": "níyom",
    "frequency": "7回中4回",
    "exampleTh": "รถยนต์ไฟฟ้ากำลังเป็นที่นิยมอย่างแพร่หลายในปัจจุบัน",
    "exampleJa": "現在、電気自動車は広く普及し人気を集めている。"
  },
  {
    "id": 199,
    "word": "แนะนำ",
    "meaning": "紹介する、勧める",
    "pronunciation": "nɛ́nam",
    "frequency": "7回中4回",
    "exampleTh": "ผู้จัดการแนะนำสมาชิกใหม่ให้เข้ามาร่วมทีมในเช้านี้",
    "exampleJa": "マネージャーは今朝、新しいメンバーをチームに紹介した。"
  },
  {
    "id": 200,
    "word": "ปฏิเสธ",
    "meaning": "拒否する、断る",
    "pronunciation": "pàtìsèet",
    "frequency": "7回中4回",
    "exampleTh": "ทางลูกค้าจำเป็นต้องปฏิเสธข้อเสนอใหม่เนื่องจากราคาแพงเกินไป",
    "exampleJa": "顧客は価格が高すぎるため、新しい提案を拒否せざるを得なかった。"
  },
  {
    "id": 201,
    "word": "ประชุม",
    "meaning": "会議をする",
    "pronunciation": "pràchum",
    "frequency": "7回中4回",
    "exampleTh": "เราจะจัดประชุมเพื่อรายงานผลงานไตรมาสแรกในวันพรุ่งนี้",
    "exampleJa": "私たちは明日、第1四半期の成果を報告するための会議を開催します。"
  },
  {
    "id": 202,
    "word": "ประโยชน์",
    "meaning": "利益、役に立つ",
    "pronunciation": "pràyòot",
    "frequency": "7回中4回",
    "exampleTh": "การวิเคราะห์ข้อมูลตลาดอย่างละเอียดมีประโยชน์ต่อการวางแผนมาก",
    "exampleJa": "市場データの詳細な分析は計画立案に非常に役立つ。"
  },
  {
    "id": 203,
    "word": "ปัญหา",
    "meaning": "問題、課題",
    "pronunciation": "panhǎa",
    "frequency": "7回中4回",
    "exampleTh": "เราต้องหาสาเหตุที่แท้จริงของปัญหาเพื่อแก้ให้ตรงจุด",
    "exampleJa": "根本的な解決を図るために、問題の真の原因を探さねばならない。"
  },
  {
    "id": 204,
    "word": "ปีที่แล้ว",
    "meaning": "昨年",
    "pronunciation": "piithîilɛ́ɛw",
    "frequency": "7回中4回",
    "exampleTh": "ยอดขายปีที่แล้วเติบโตสิบเปอร์เซ็นต์ตามที่เราคาดการณ์ไว้",
    "exampleJa": "昨年の売上高は私たちの予測通り10%成長した。"
  },
  {
    "id": 205,
    "word": "ปีนี้",
    "meaning": "今年",
    "pronunciation": "piiníi",
    "frequency": "7回中4回",
    "exampleTh": "ปีนี้บริษัทมีนโยบายเน้นการพัฒนาทักษะด้านภาษาของพนักงาน",
    "exampleJa": "今年、会社は従業員の語学スキル向上に重点を置く方針である。"
  },
  {
    "id": 206,
    "word": "เปลี่ยน",
    "meaning": "変える、交換する",
    "pronunciation": "plìan",
    "frequency": "7回中4回",
    "exampleTh": "เราต้องเปลี่ยนขั้นตอนการทำงานให้รวดเร็วและมีประสิทธิภาพมากขึ้น",
    "exampleJa": "私たちは業務手順をより迅速で効率的なものに変更しなければならない。"
  },
  {
    "id": 207,
    "word": "ผล",
    "meaning": "結果、成果",
    "pronunciation": "phǒn",
    "frequency": "7回中4回",
    "exampleTh": "ผลการทดสอบระบบแสดงให้เห็นว่าไม่มีข้อผิดพลาดรุนแรง",
    "exampleJa": "システムテストの結果は、重大な不具合がないことを示している。"
  },
  {
    "id": 208,
    "word": "ผลไม้",
    "meaning": "果物",
    "pronunciation": "phǒnlámái",
    "frequency": "7回中4回",
    "exampleTh": "ประเทศไทยมีผลไม้เมืองร้อนหลากหลายชนิดที่ส่งออกไปทั่วโลก",
    "exampleJa": "タイには世界中に輸出される様々な熱帯果物がある。"
  },
  {
    "id": 209,
    "word": "ผ่าน",
    "meaning": "通過する、合格する",
    "pronunciation": "phàan",
    "frequency": "7回中4回",
    "exampleTh": "สินค้าทุกชิ้นต้องผ่านการตรวจสอบคุณภาพก่อนบรรจุลงกล่อง",
    "exampleJa": "すべての製品は箱詰めされる前に品質検査を通過しなければならない。"
  },
  {
    "id": 210,
    "word": "พอใจ",
    "meaning": "満足する、納得する",
    "pronunciation": "phɔɔcai",
    "frequency": "7回中4回",
    "exampleTh": "ลูกค้าส่วนใหญ่รู้สึกพอใจกับบริการหลังการขายที่เป็นกันเอง",
    "exampleJa": "ほとんどの顧客は親切なアフターサービスに満足している。"
  },
  {
    "id": 211,
    "word": "พิเศษ",
    "meaning": "特別な、特別の",
    "pronunciation": "phísèet",
    "frequency": "7回中4回",
    "exampleTh": "บริษัทมอบโบนัสพิเศษให้แก่พนักงานที่ทำงานครบสิบปี",
    "exampleJa": "会社は勤続10年に達した従業員に特別ボーナスを支給する。"
  },
  {
    "id": 212,
    "word": "เพื่อ",
    "meaning": "〜のために",
    "pronunciation": "phʉ̂a",
    "frequency": "7回中4回",
    "exampleTh": "เราทำเช่นนี้เพื่อตอบสนองความต้องการของกลุ่มเป้าหมายหลัก",
    "exampleJa": "私たちは主要なターゲット層のニーズに応えるためにこれを行っている。"
  },
  {
    "id": 213,
    "word": "แพง",
    "meaning": "高価な、値段が高い",
    "pronunciation": "phɛɛng",
    "frequency": "7回中4回",
    "exampleTh": "อุปกรณ์ชิ้นนี้ราคาแพงมากแต่ทนทานและใช้งานได้ยาวนาน",
    "exampleJa": "この器具は非常に高価だが、耐久性があり長く使用できる。"
  },
  {
    "id": 214,
    "word": "แพทย์",
    "meaning": "医師、ドクター",
    "pronunciation": "phɛ̂ɛt",
    "frequency": "7回中4回",
    "exampleTh": "บริษัทมีสวัสดิการตรวจสุขภาพประจำปีโดยแพทย์ผู้เชี่ยวชาญ",
    "exampleJa": "会社には専門医による年一回の健康診断の福利厚生がある。"
  },
  {
    "id": 215,
    "word": "ภาษา",
    "meaning": "言語、言葉",
    "pronunciation": "phaasǎa",
    "frequency": "7回中4回",
    "exampleTh": "ความสามารถด้านภาษามีความสำคัญอย่างยิ่งสำหรับการทำธุรกิจระดับโลก",
    "exampleJa": "語学力はグローバルビジネスを行う上で非常に重要である。"
  },
  {
    "id": 216,
    "word": "มัน",
    "meaning": "それ",
    "pronunciation": "man",
    "frequency": "7回中4回",
    "exampleTh": "โครงการนี้ยากมากแต่มันก็ท้าทายความสามารถของทีมเราดี",
    "exampleJa": "このプロジェクトは難しいが、私たちのチームの実力を試す良い挑戦だ。"
  },
  {
    "id": 217,
    "word": "มากมาย",
    "meaning": "たくさんの、多くの",
    "pronunciation": "mâakmaai",
    "frequency": "7回中4回",
    "exampleTh": "เราได้รับใบสั่งซื้อจำนวนมากมายในช่วงเทศกาลท้ายปี",
    "exampleJa": "年末のフェスティバル期間中、私たちは数多くの注文を受けた。"
  },
  {
    "id": 218,
    "word": "แม้แต่",
    "meaning": "〜でさえ、〜ですら",
    "pronunciation": "mɛ́ɛtɛ̀ɛ",
    "frequency": "7回中4回",
    "exampleTh": "งานนี้นิยมมาก แม้แต่บริษัทยักษ์ใหญ่ก็หันมาใช้ระบบนี้",
    "exampleJa": "このシステムは非常に人気があり、大企業でさえも導入し始めている。"
  },
  {
    "id": 219,
    "word": "ไม่มี",
    "meaning": "ない、持っていない",
    "pronunciation": "mâimii",
    "frequency": "7回中4回",
    "exampleTh": "ตอนนี้เรายังไม่มีข้อมูลเพียงพอที่จะตัดสินใจเกี่ยวกับตลาดใหม่",
    "exampleJa": "現在、私たちは新しい市場に関して決定を下すのに十分な情報を持っていない。"
  },
  {
    "id": 220,
    "word": "ยอมรับ",
    "meaning": "認める、受け入れる",
    "pronunciation": "yɔɔmráp",
    "frequency": "7回中4回",
    "exampleTh": "ผู้บริหารยอมรับว่าจำเป็นต้องลดต้นทุนในการผลิตสินค้าลง",
    "exampleJa": "経営陣は製品の製造コストを削減する必要性を認めた。"
  },
  {
    "id": 221,
    "word": "ยา",
    "meaning": "薬",
    "pronunciation": "yaa",
    "frequency": "7回中4回",
    "exampleTh": "ทางโรงงานผลิตยาได้รับการรับรองมาตรฐานความปลอดภัยในระดับสากล",
    "exampleJa": "その製薬工場は国際的な安全基準の認定を受けている。"
  },
  {
    "id": 222,
    "word": "ยาก",
    "meaning": "難しい",
    "pronunciation": "yâak",
    "frequency": "7回中4回",
    "exampleTh": "ปัญหานี้แก้ไขยากและต้องการความร่วมมือจากช่างเทคนิคผู้เชี่ยวชาญ",
    "exampleJa": "この問題は解決が難しく、専門の技術者の協力が必要だ。"
  },
  {
    "id": 223,
    "word": "ยินดี",
    "meaning": "喜ぶ、歓迎する",
    "pronunciation": "yindii",
    "frequency": "7回中4回",
    "exampleTh": "ยินดีต้อนรับคณะผู้แทนการค้าเข้าเยี่ยมชมโรงงานของเรา",
    "exampleJa": "当社の工場を訪問された貿易代表団を喜んで歓迎いたします。"
  },
  {
    "id": 224,
    "word": "รถเมล์",
    "meaning": "バス、路線バス",
    "pronunciation": "rótmee",
    "frequency": "7回中4回",
    "exampleTh": "พนักงานส่วนใหญ่นิยมเดินทางด้วยรถเมล์เนื่องจากประหยัดค่าใช้จ่าย",
    "exampleJa": "出費を抑えるために、従業員の多くは路線バスで通勤することを好む。"
  },
  {
    "id": 225,
    "word": "รวม",
    "meaning": "合計する、合わせる、含む",
    "pronunciation": "ruam",
    "frequency": "7回中4回",
    "exampleTh": "ราคาของสินค้าที่แสดงในเอกสารนี้ได้รวมภาษีมูลค่าเพิ่มแล้ว",
    "exampleJa": "この書類に記載されている商品の価格には、既に付加価値税が含まれています。"
  },
  {
    "id": 226,
    "word": "ร้อน",
    "meaning": "暑い、熱い",
    "pronunciation": "rɔ́ɔn",
    "frequency": "7回中4回",
    "exampleTh": "สภาพอากาศร้อนส่งผลให้ความต้องการใช้ไฟฟ้าในสำนักงานสูงขึ้น",
    "exampleJa": "暑い天候により、オフィスでの電力需要が高まっている。"
  },
  {
    "id": 227,
    "word": "ระหว่าง",
    "meaning": "〜の間、〜の最中に",
    "pronunciation": "ráwàaŋ",
    "frequency": "7回中4回",
    "exampleTh": "โปรดงดใช้เสียงระหว่างการนำเสนอแผนงานของฝ่ายจัดซื้อ",
    "exampleJa": "調達部の企画発表中は私語を控えてください。"
  },
  {
    "id": 228,
    "word": "ร้าน",
    "meaning": "店、店舗",
    "pronunciation": "ráan",
    "frequency": "7回中4回",
    "exampleTh": "เรากำลังเปิดร้านใหม่เพื่อขยายฐานลูกค้าในพื้นที่นี้",
    "exampleJa": "このエリアでの顧客ベース拡大のため、新しい店舗をオープンする予定だ。"
  },
  {
    "id": 229,
    "word": "รู้จัก",
    "meaning": "知っている、面識がある",
    "pronunciation": "rúucàk",
    "frequency": "7回中4回",
    "exampleTh": "ฝ่ายการตลาดรู้จักพฤติกรรมของลูกค้ากลุ่มเป้าหมายเป็นอย่างดี",
    "exampleJa": "マーケティング部はターゲット顧客の行動を非常によく知っている。"
  },
  {
    "id": 230,
    "word": "เริ่ม",
    "meaning": "始める、開始する",
    "pronunciation": "rə̂əm",
    "frequency": "7回中4回",
    "exampleTh": "เราจะเริ่มโครงการทดสอบตลาดในไตรมาสหน้าตามกำหนดเดิม",
    "exampleJa": "当初の予定通り、来期に市場テストプロジェクトを開始する。"
  },
  {
    "id": 231,
    "word": "เลย",
    "meaning": "全く〜（ない）、〜を越えて、直ちに",
    "pronunciation": "ləəy",
    "frequency": "7回中4回",
    "exampleTh": "เขาเพิ่งย้ายมาทำงานที่นี่เลยยังไม่รู้จักคุ้นเคยกับคนอื่นมากนัก",
    "exampleJa": "彼はここへ転勤してきたばかりなので、まだ他の人とあまり知り合いではない。"
  },
  {
    "id": 232,
    "word": "วันนี้",
    "meaning": "今日",
    "pronunciation": "wanníi",
    "frequency": "7回中4回",
    "exampleTh": "วันนี้ผู้จัดการฝ่ายผลิตจะเข้ามาตรวจสอบการดำเนินงานในโรงงาน",
    "exampleJa": "今日、生産マネージャーが工場の稼働状況を確認しに来る。"
  },
  {
    "id": 233,
    "word": "วันหยุด",
    "meaning": "休日、祝日",
    "pronunciation": "wanyùt",
    "frequency": "7回中4回",
    "exampleTh": "ในวันหยุดประจำปี พนักงานจะได้รับสิทธิ์พักผ่อนโดยได้รับค่าจ้าง",
    "exampleJa": "年次の祝休日には、従業員は有給で休む権利が与えられる。"
  },
  {
    "id": 234,
    "word": "ว่า",
    "meaning": "接続詞（〜ということ）、言う、叱る",
    "pronunciation": "wâa",
    "frequency": "7回中4回",
    "exampleTh": "ฝ่ายกฎหมายเตือนว่าควรตรวจสอบความถูกต้องของสัญญาให้รอบคอบ",
    "exampleJa": "法務部は、契約書の正確性を慎重に確認するべきだと警告した。"
  },
  {
    "id": 235,
    "word": "ว่าง",
    "meaning": "空いている、暇である",
    "pronunciation": "wâaŋ",
    "frequency": "7回中4回",
    "exampleTh": "หากคุณมีเวลาว่าง โปรดเข้ามาร่วมประชุมปรึกษาหารือเรื่องแผนใหม่",
    "exampleJa": "もし空き時間があれば、新しい計画案について話し合う会議に参加してください。"
  },
  {
    "id": 236,
    "word": "สนใจ",
    "meaning": "興味がある、関心を持つ",
    "pronunciation": "sǒncai",
    "frequency": "7回中4回",
    "exampleTh": "บริษัทคู่ค้าหลายรายแสดงความสนใจที่จะร่วมลงทุนในโครงการนี้",
    "exampleJa": "บริษัทคู่ค้าหลายรายแสดงความสนใจที่จะร่วมลงทุนในโครงการนี้"
  },
  {
    "id": 237,
    "word": "สนุก",
    "meaning": "楽しい、面白い",
    "pronunciation": "sànùk",
    "frequency": "7回中4回",
    "exampleTh": "การจัดกิจกรรมกีฬาสีของบริษัทช่วยสร้างความสนุกและสามัคคีในองค์กร",
    "exampleJa": "社内運動会の開催は、組織内の楽しさと団結力を高めるのに役立つ。"
  },
  {
    "id": 238,
    "word": "สมุด",
    "meaning": "ノート、帳簿",
    "pronunciation": "sàmùt",
    "frequency": "7回中4回",
    "exampleTh": "เจ้าหน้าที่บันทึกรายการบัญชีรายวันลงในสมุดทะเบียนคุมของบริษัท",
    "exampleJa": "担当者は日々の会計取引を会社の管理台帳（帳簿）に記録した。"
  },
  {
    "id": 239,
    "word": "สร้าง",
    "meaning": "建てる、創り出す、作成する",
    "pronunciation": "sâaŋ",
    "frequency": "7回中4回",
    "exampleTh": "นโยบายใหม่นี้ออกแบบมาเพื่อสร้างความมั่นใจให้แก่นักลงทุน",
    "exampleJa": "この新方針は、投資家に安心感（信頼）を築くために設計された。"
  },
  {
    "id": 240,
    "word": "สวัสดี",
    "meaning": "こんにちは、さようなら（挨拶）",
    "pronunciation": "sàwàtdii",
    "frequency": "7回中4回",
    "exampleTh": "พนักงานทุกคนกล่าวคำสวัสดีเมื่อพบปะกับลูกค้าที่มาเยือนสำนักงาน",
    "exampleJa": "全従業員は、オフィスを訪問された顧客に会う際に挨拶を交わす。"
  },
  {
    "id": 241,
    "word": "สะดวก",
    "meaning": "便利な、都合が良い",
    "pronunciation": "sàduak",
    "frequency": "7回中4回",
    "exampleTh": "กรุณาแจ้งเวลาที่คุณสะดวกเพื่อเราจะได้นัดหมายประชุมอีกครั้ง",
    "exampleJa": "再度会議を予約するため、ご都合の良い時間をお知らせください。"
  },
  {
    "id": 242,
    "word": "สั่ง",
    "meaning": "注文する、命令する",
    "pronunciation": "sàŋ",
    "frequency": "7回中4回",
    "exampleTh": "ลูกค้าสั่งซื้อวัตถุดิบเพิ่มขึ้นสองเท่าเนื่องจากความต้องการตลาดสูง",
    "exampleJa": "市場 demand が高いため、顧客は原材料の注文数を2倍に増やした。"
  },
  {
    "id": 243,
    "word": "สำคัญ",
    "meaning": "重要な",
    "pronunciation": "sǎmkhan",
    "frequency": "7回中4回",
    "exampleTh": "การรักษาความลับของลูกค้าเป็นสิ่งสำคัญที่สุดในธุรกิจของเรา",
    "exampleJa": "顧客情報の秘匿維持は、私たちのビジネスにおいて最も重要なことだ。"
  },
  {
    "id": 244,
    "word": "สินค้า",
    "meaning": "商品、製品",
    "pronunciation": "sǐnkháa",
    "frequency": "7回中4回",
    "exampleTh": "สินค้ารุ่นใหม่จะถูกส่งไปยังศูนย์กระจายสินค้าในสัปดาห์หน้า",
    "exampleJa": "新モデルの商品は、来週配送センターへと送られます。"
  },
  {
    "id": 245,
    "word": "สูง",
    "meaning": "高い",
    "pronunciation": "sǔuŋ",
    "frequency": "7回中4回",
    "exampleTh": "ผลการดำเนินงานในปีนี้บรรลุเป้าหมายที่ตั้งไว้สูงมาก",
    "exampleJa": "今年の業績は、非常に高く設定されていた目標を達成した。"
  },
  {
    "id": 246,
    "word": "เสีย",
    "meaning": "壊れる、失う、〜してしまう（副詞）",
    "pronunciation": "sǐa",
    "frequency": "7回中4回",
    "exampleTh": "เครื่องจักรในสายการผลิตเสียทำให้เราต้องหยุดงานชั่วคราว",
    "exampleJa": "生産ラインの機械が壊れたため、私たちは一時的に作業を停止せねばならなかった。"
  },
  {
    "id": 247,
    "word": "เสื้อ",
    "meaning": "シャツ、上着、服",
    "pronunciation": "sʉ̂a",
    "frequency": "7回中4回",
    "exampleTh": "พนักงานต้อนรับทุกคนต้องแต่งกายด้วยเสื้อเชิ้ตสีสุภาพของบริษัท",
    "exampleJa": "すべての受付スタッフは会社の指定するフォーマルなシャツを着用しなければならない。"
  },
  {
    "id": 248,
    "word": "แสดง",
    "meaning": "示す、表す、演じる",
    "pronunciation": "sàdɛɛŋ",
    "frequency": "7回中4回",
    "exampleTh": "การวิเคราะห์นี้แสดงให้เห็นข้อดีและข้อเสียของการลงทุนอย่างชัดเจน",
    "exampleJa": "この分析は、投資のメリットとデメリットを明確に示している。"
  },
  {
    "id": 249,
    "word": "หนัง",
    "meaning": "皮、映画",
    "pronunciation": "nǎŋ",
    "frequency": "7回中4回",
    "exampleTh": "ธุรกิจโรงภาพยนตร์กำลังฟื้นตัวดีขึ้นหลังภาพยนตร์หลายเรื่องทำรายได้สูง",
    "exampleJa": "多くの映画が高収益を上げたことで、映画館ビジネスは回復しつつある。"
  },
  {
    "id": 250,
    "word": "หยุด",
    "meaning": "止まる、休む、停止する",
    "pronunciation": "yùt",
    "frequency": "7回中4回",
    "exampleTh": "บริษัทกำหนดให้หยุดงานทุกวันอาทิตย์เพื่อให้พนักงานได้พักผ่อน",
    "exampleJa": "company は従業員が休めるよう、毎週日曜日を休業と定めている。"
  },
  {
    "id": 251,
    "word": "เหตุ",
    "meaning": "原因、理由、事象",
    "pronunciation": "hèet",
    "frequency": "7回中4回",
    "exampleTh": "ความผิดพลาดของมนุษย์เป็นเหตุหลักที่ทำให้ระบบขัดข้องในครั้งนี้",
    "exampleJa": "ヒューマンエラーが、今回のシステム障害を引き起こした主な原因である。"
  },
  {
    "id": 252,
    "word": "เหมาะ",
    "meaning": "適している、ふさわしい",
    "pronunciation": "mɔ̀",
    "frequency": "7回中4回",
    "exampleTh": "สินค้านี้เหมาะสำหรับผู้ใช้งานระดับเริ่มต้นที่ต้องการประหยัดงบ",
    "exampleJa": "この商品は、予算を抑えたいエントリーレベル（初心者）のユーザーに適している。"
  },
  {
    "id": 253,
    "word": "เหมือนกัน",
    "meaning": "同様である、同じである",
    "pronunciation": "mʉ̌ankan",
    "frequency": "7回中4回",
    "exampleTh": "ลูกค้าสองรายนี้เสนอข้อกำหนดสัญญาที่คล้ายคลึงเหมือนกันมาก",
    "exampleJa": "これら2件の顧客は非常によく似た同じ契約条件を提案している。"
  },
  {
    "id": 254,
    "word": "อย่าง",
    "meaning": "種類、〜のように（副詞化）、〜個",
    "pronunciation": "yàaŋ",
    "frequency": "7回中4回",
    "exampleTh": "เราต้องเตรียมรายงานหลายอย่างก่อนนำเสนอต่อคณะกรรมการในสัปดาห์หน้า",
    "exampleJa": "来週の役員会へのプレゼンテーションの前に、私たちはたくさんのレポートを用意せねばならない。"
  },
  {
    "id": 255,
    "word": "อ่าน",
    "meaning": "読む",
    "pronunciation": "àan",
    "frequency": "7回中4回",
    "exampleTh": "โปรดอ่านเอกสารฉบับนี้โดยละเอียดก่อนลงลายมือชื่อในสัญญา",
    "exampleJa": "契約書に署名する前に、この書類を詳細にお読みください。"
  },
  {
    "id": 256,
    "word": "อื่น",
    "meaning": "他の",
    "pronunciation": "ʉ̀ʉn",
    "frequency": "7回中4回",
    "exampleTh": "หากคุณต้องการข้อมูลอื่นเพิ่มเติม สามารถสอบถามฝ่ายประชาสัมพันธ์ได้",
    "exampleJa": "追加の他の情報が必要な場合は、広報部にお尋ねください。"
  },
  {
    "id": 257,
    "word": "เอา",
    "meaning": "取る、持っていく、〜が欲しい",
    "pronunciation": "ao",
    "frequency": "7回中4回",
    "exampleTh": "เราควรเอาข้อคิดเห็นของลูกค้ามาปรับปรุงกระบวนการพัฒนาสินค้าใหม่",
    "exampleJa": "私たちは新商品開発プロセスを改善するために、顧客の意見を取り入れるべきだ。"
  },
  {
    "id": 258,
    "word": "กระเป๋า",
    "meaning": "かばん、財布、ポケット",
    "pronunciation": "kràpǎw",
    "frequency": "7回中3回",
    "exampleTh": "เขาลืมกระเป๋าเงินไว้ที่ร้านอาหาร",
    "exampleJa": "彼はレストランに財布を置き忘れた"
  },
  {
    "id": 259,
    "word": "กระเพรา",
    "meaning": "ガパオ（ホーリーバジル）",
    "pronunciation": "kràphraw",
    "frequency": "7回中3回",
    "exampleTh": "ฉันชอบสั่งผัดกระเพราไก่ไข่ดาวเวลากินข้าวเที่ยง",
    "exampleJa": "昼食時に目玉焼き付きの鶏肉のガパオ炒めを注文するのが好きです"
  },
  {
    "id": 260,
    "word": "กรุงเทพฯ",
    "meaning": "バンコク",
    "pronunciation": "kruŋthêep",
    "frequency": "7回中3回",
    "exampleTh": "กรุงเทพฯ เป็นเมืองหลวงและศูนย์กลางเศรษฐกิจของประเทศไทย",
    "exampleJa": "バンコクはタイの首都であり経済の中心地です"
  },
  {
    "id": 261,
    "word": "กลาง",
    "meaning": "中央、真ん中、中間の",
    "pronunciation": "klaaŋ",
    "frequency": "7回中3回",
    "exampleTh": "เราควรนัดเจอกันที่จุดกึ่งกลางเพื่อความสะดวก",
    "exampleJa": "お互いの便利のために中間地点で待ち合わせましょう"
  },
  {
    "id": 262,
    "word": "การเรียน",
    "meaning": "学習、勉強",
    "pronunciation": "kaanriaan",
    "frequency": "7回中3回",
    "exampleTh": "การเรียนภาษาไทยต้องอาศัยการฝึกฝนทุกวัน",
    "exampleJa": "タイ語の学習は毎日練習する必要があります"
  },
  {
    "id": 263,
    "word": "กิจกรรม",
    "meaning": "活動、アクティビティ",
    "pronunciation": "kìtcàkam",
    "frequency": "7回中3回",
    "exampleTh": "บริษัทจัดกิจกรรมนันทนาการเพื่อกระชับความสัมพันธ์",
    "exampleJa": "会社は関係を深めるためにレクリエーション活動を企画した"
  },
  {
    "id": 264,
    "word": "เก่ง",
    "meaning": "上手な、得意な、賢い",
    "pronunciation": "kèŋ",
    "frequency": "7回中3回",
    "exampleTh": "น้องสาวของเขาเรียนเก่งจนได้รับทุนการศึกษา",
    "exampleJa": "彼の妹は勉強が得意で、奨学金をもらった"
  },
  {
    "id": 265,
    "word": "เกิน",
    "meaning": "超える、〜すぎる",
    "pronunciation": "kəən",
    "frequency": "7回中3回",
    "exampleTh": "ค่าใช้จ่ายในเดือนนี้สูงเกินงบประมาณที่ตั้งไว้",
    "exampleJa": "今月の支出は設定した予算を上回りすぎている"
  },
  {
    "id": 266,
    "word": "เกี่ยวกับ",
    "meaning": "〜について、〜に関する",
    "pronunciation": "kìawkàp",
    "frequency": "7回中3回",
    "exampleTh": "การประชุมในวันนี้เกี่ยวกับแผนการตลาดปีหน้า",
    "exampleJa": "本日の会議は来年のマーケティング計画についてです"
  },
  {
    "id": 267,
    "word": "ข้อความ",
    "meaning": "メッセージ、テキスト、文章",
    "pronunciation": "khɔ̂ɔkhwaam",
    "frequency": "7回中3回",
    "exampleTh": "กรุณาส่งข้อความมาบอกเมื่อคุณถึงบ้านแล้ว",
    "exampleJa": "家に着いたらメッセージを送って教えてください"
  },
  {
    "id": 268,
    "word": "ขอโทษ",
    "meaning": "ごめんなさい、すみません",
    "pronunciation": "khɔ̌ɔthôot",
    "frequency": "7回中3回",
    "exampleTh": "ฉันต้องขอโทษที่ส่งรายงานล่าช้ากว่ากำหนด",
    "exampleJa": "予定より報告書の提出が遅れてしまい申し訳ありません"
  },
  {
    "id": 269,
    "word": "ขับ",
    "meaning": "運転する、追い払う",
    "pronunciation": "khàp",
    "frequency": "7回中3回",
    "exampleTh": "ห้ามขับรถเร็วเกินกฎหมายกำหนดเพื่อความปลอดภัย",
    "exampleJa": "安全のため、法律で定められた速度を超えて運転してはならない"
  },
  {
    "id": 270,
    "word": "คง",
    "meaning": "おそらく、たぶん、〜だろう",
    "pronunciation": "khoŋ",
    "frequency": "7回中3回",
    "exampleTh": "โครงการนี้คงเสร็จไม่ทันภายในสิ้นเดือนนี้",
    "exampleJa": "このプロジェクトはおそらく今月末までには終わらないだろう"
  },
  {
    "id": 271,
    "word": "ควร",
    "meaning": "〜すべきである、〜するのが適当だ",
    "pronunciation": "khuan",
    "frequency": "7回中3回",
    "exampleTh": "เราควรตรวจสอบข้อมูลให้ถูกต้องก่อนส่งต่อ",
    "exampleJa": "私たちは情報を転送する前に正しく確認するべきです"
  },
  {
    "id": 272,
    "word": "ความคิด",
    "meaning": "考え、意見、思想",
    "pronunciation": "khwaamkhít",
    "frequency": "7回中3回",
    "exampleTh": "ทุกคนมีสิทธิ์แสดงความคิดเห็นในการประชุม",
    "exampleJa": "会議では全員が意見を述べる権利があります"
  },
  {
    "id": 273,
    "word": "ค่อน",
    "meaning": "寄る、傾く、大半の",
    "pronunciation": "khɔ̂n",
    "frequency": "7回中3回",
    "exampleTh": "เวลาล่วงเลยไปค่อนคืนแล้วแต่เขายังทำงานอยู่",
    "exampleJa": "夜も大分更けているが、彼はまだ働いている"
  },
  {
    "id": 274,
    "word": "ค่อนข้าง",
    "meaning": "かなり、比較的",
    "pronunciation": "khɔ̂nkhâaŋ",
    "frequency": "7回中3回",
    "exampleTh": "เศรษฐกิจในช่วงนี้ค่อนข้างซบเซาและน่าเป็นห่วง",
    "exampleJa": "最近の経済はかなり低迷しており心配です"
  },
  {
    "id": 275,
    "word": "คัน",
    "meaning": "痒い、台（車の分類詞）",
    "pronunciation": "khan",
    "frequency": "7回中3回",
    "exampleTh": "ฉันเพิ่งซื้อรถยนต์คันใหม่มาเมื่อวานนี้",
    "exampleJa": "私は昨日、新しい車を買ったばかりです"
  },
  {
    "id": 276,
    "word": "ค้า",
    "meaning": "商売する、取引する、貿易する",
    "pronunciation": "khaa",
    "frequency": "7回中3回",
    "exampleTh": "บริษัทนี้ทำการค้าขายส่งออกผลไม้ไทย",
    "exampleJa": "この会社はタイの果物の輸出取引を行っています"
  },
  {
    "id": 277,
    "word": "แค่",
    "meaning": "ただ〜だけ、〜にすぎない",
    "pronunciation": "khɛ̂ɛ",
    "frequency": "7回中3回",
    "exampleTh": "ขอเวลาแค่ห้านาทีในการอธิบายแผนงานนี้",
    "exampleJa": "この計画を説明するのに5分だけ時間をください"
  },
  {
    "id": 278,
    "word": "ง่าย",
    "meaning": "簡単な、容易な",
    "pronunciation": "ŋâay",
    "frequency": "7回中3回",
    "exampleTh": "การใช้งานระบบใหม่นี้ง่ายและไม่ซับซ้อนเลย",
    "exampleJa": "この新しいシステムの使用法は簡単で全く複雑ではありません"
  },
  {
    "id": 279,
    "word": "จน",
    "meaning": "貧しい、〜するまで",
    "pronunciation": "con",
    "frequency": "7回中3回",
    "exampleTh": "เขาพยายามทำงานหนักจนประสบความสำเร็จ",
    "exampleJa": "彼は成功するまで一生懸命働き続けた"
  },
  {
    "id": 280,
    "word": "จังเลย",
    "meaning": "とても、本当に〜だなあ",
    "pronunciation": "caŋləəy",
    "frequency": "7回中3回",
    "exampleTh": "วันนี้อากาศดีจังเลย เหมาะแก่การออกไปเที่ยว",
    "exampleJa": "今日は本当に良い天気ですね。出かけるのにぴったりです"
  },
  {
    "id": 281,
    "word": "จ่าย",
    "meaning": "支払う、支出する",
    "pronunciation": "càay",
    "frequency": "7回中3回",
    "exampleTh": "คุณสามารถจ่ายเงินผ่านแอพพลิเคชันมือถือได้",
    "exampleJa": "モバイルアプリを通じてお支払いいただけます"
  },
  {
    "id": 282,
    "word": "จำเป็น",
    "meaning": "必要な、不可欠な、やむを得ない",
    "pronunciation": "campen",
    "frequency": "7回中3回",
    "exampleTh": "อินเทอร์เน็ตกลายเป็นสิ่งจำเป็นในชีวิตประจำวัน",
    "exampleJa": "インターネットは日常生活に不可欠なものになった"
  },
  {
    "id": 283,
    "word": "แจ้ง",
    "meaning": "知らせる、通知する、告げる",
    "pronunciation": "cɛ̂ɛŋ",
    "frequency": "7回中3回",
    "exampleTh": "ฝ่ายบุคคลจะแจ้งผลการสัมภาษณ์งานสัปดาห์หน้า",
    "exampleJa": "人事部は来週、面接結果を通知します"
  },
  {
    "id": 284,
    "word": "แจ้งความ",
    "meaning": "警察に通報する、被害届を出す",
    "pronunciation": "cɛ̂ɛŋkhwaam",
    "frequency": "7回中3回",
    "exampleTh": "เขาไปสถานีตำรวจเพื่อแจ้งความเรื่องกระเป๋าหาย",
    "exampleJa": "彼は財布を紛失した件で被害届を出すために警察署へ行った"
  },
  {
    "id": 285,
    "word": "เฉพาะ",
    "meaning": "特定の、特に、〜だけ",
    "pronunciation": "chàphɔ́",
    "frequency": "7回中3回",
    "exampleTh": "บัตรส่วนลดนี้ใช้ได้เฉพาะสมาชิกเท่านั้น",
    "exampleJa": "この割引カードは会員の方のみご利用いただけます"
  },
  {
    "id": 286,
    "word": "ช่วง",
    "meaning": "期間、時期、区間",
    "pronunciation": "chûaŋ",
    "frequency": "7回中3回",
    "exampleTh": "ยอดขายสินค้าจะสูงขึ้นในช่วงเทศกาลปีใหม่",
    "exampleJa": "年末年始のフェスティバル期間は商品の売上が上昇します"
  },
  {
    "id": 287,
    "word": "ช่าง",
    "meaning": "職人、技術者、なんと〜だろう",
    "pronunciation": "châaŋ",
    "frequency": "7回中3回",
    "exampleTh": "เราต้องโทรเรียกช่างมาซ่อมเครื่องปรับอากาศ",
    "exampleJa": "エアコンを修理するために業者（職人）を呼ばなければならない"
  },
  {
    "id": 288,
    "word": "ชีวิต",
    "meaning": "人生、生活、生命",
    "pronunciation": "chiiwít",
    "frequency": "7回中3回",
    "exampleTh": "การทำงานหนักไม่ควรทำลายชีวิตส่วนตัว",
    "exampleJa": "懸命に働くことがプライベートな生活を壊すべきではない"
  },
  {
    "id": 289,
    "word": "ชื่อเสียง",
    "meaning": "有名、名声、評判",
    "pronunciation": "chʉ̂asǐaŋ",
    "frequency": "7回中3回",
    "exampleTh": "มหาวิทยาลัยแห่งนี้มีชื่อเสียงในด้านการวิจัย",
    "exampleJa": "この大学は研究の分野で有名です"
  },
  {
    "id": 290,
    "word": "เช่น",
    "meaning": "例えば、〜のような",
    "pronunciation": "chên",
    "frequency": "7回中3回",
    "exampleTh": "เขานำเข้าผลไม้จากต่างประเทศ เช่น แอปเปิ้ลและองุ่น",
    "exampleJa": "彼はリンゴやブドウなどの果物を海外から輸入しています"
  },
  {
    "id": 291,
    "word": "เชียงใหม่",
    "meaning": "チェンマイ",
    "pronunciation": "chiaŋmày",
    "frequency": "7回中3回",
    "exampleTh": "เชียงใหม่เป็นสถานที่ท่องเที่ยวยอดนิยมในภาคเหนือ",
    "exampleJa": "チェンマイは北部で人気の観光地です"
  },
  {
    "id": 292,
    "word": "โชคดี",
    "meaning": "幸運な、運が良い、グッドラック",
    "pronunciation": "chôokdii",
    "frequency": "7回中3回",
    "exampleTh": "ขอให้คุณโชคดีในการสัมภาษณ์งานวันพรุ่งนี้",
    "exampleJa": "明日の面接の幸運を祈っています"
  },
  {
    "id": 293,
    "word": "ซื้อของ",
    "meaning": "買い物をする",
    "pronunciation": "sʉ́ʉkhɔ̌ɔŋ",
    "frequency": "7回中3回",
    "exampleTh": "แม่ไปซื้อของที่ซูเปอร์มาร์เก็ตทุกวันเสาร์",
    "exampleJa": "母は毎週土曜日にスーパーへ買い物に行きます"
  },
  {
    "id": 294,
    "word": "ด้วยกัน",
    "meaning": "一緒に",
    "pronunciation": "dûaykan",
    "frequency": "7回中3回",
    "exampleTh": "พวกเราไปรับประทานอาหารเย็นด้วยกันหลังเลิกงาน",
    "exampleJa": "私たちは仕事の後に一緒に夕食を食べに行きました"
  },
  {
    "id": 295,
    "word": "ดัง",
    "meaning": "音が大きい、有名な、〜のように",
    "pronunciation": "daŋ",
    "frequency": "7回中3回",
    "exampleTh": "นักร้องคนนี้ดังมากและมีแฟนคลับจำนวนมาก",
    "exampleJa": "この歌手は非常に有名で、多くのファンがいます"
  },
  {
    "id": 296,
    "word": "ดิฉัน",
    "meaning": "私（女性の丁寧な一人称）",
    "pronunciation": "dìchǎn",
    "frequency": "7回中3回",
    "exampleTh": "ดิฉันขอนำเสนอรายงานการประชุมของเดือนที่แล้ว",
    "exampleJa": "先月の会議報告をプレゼンテーションさせていただきます"
  },
  {
    "id": 297,
    "word": "ดึก",
    "meaning": "夜遅い、深夜",
    "pronunciation": "dʉ̀k",
    "frequency": "7回中3回",
    "exampleTh": "เขาทำงานจนดึกดื่นเกือบทุกวันเพื่อส่งงานให้ทัน",
    "exampleJa": "彼は間に合わせるためにほぼ毎日夜遅くまで働いている"
  },
  {
    "id": 298,
    "word": "ใด",
    "meaning": "どの、任意の、何らかの",
    "pronunciation": "day",
    "frequency": "7回中3回",
    "exampleTh": "หากมีข้อสงสัยใดๆ สามารถติดต่อสอบถามได้ทันที",
    "exampleJa": "何か質問があれば、すぐに問い合わせることができます"
  },
  {
    "id": 299,
    "word": "ได้รับ",
    "meaning": "受け取る、得る、〜される（受動）",
    "pronunciation": "dâyráp",
    "frequency": "7回中3回",
    "exampleTh": "บริษัทได้รับรางวัลผู้ประกอบการยอดเยี่ยมในปีนี้",
    "exampleJa": "会社は今年、優秀企業賞を受賞した"
  },
  {
    "id": 300,
    "word": "ต้องการ",
    "meaning": "必要とする、〜したい",
    "pronunciation": "tɔ̂ŋkaan",
    "frequency": "7回中3回",
    "exampleTh": "ลูกค้าต้องการใบเสร็จรับเงินเพื่อนำไปเบิกค่าใช้จ่าย",
    "exampleJa": "顧客は経費精算のために領収書を必要としています"
  },
  {
    "id": 301,
    "word": "ตอน",
    "meaning": "〜のとき、部分、章",
    "pronunciation": "tɔɔn",
    "frequency": "7回中3回",
    "exampleTh": "ตอนที่ฉันอยู่ญี่ปุ่น ฉันได้เรียนรู้เรื่องวินัยอย่างมาก",
    "exampleJa": "日本にいたとき、私は規律について多くを学びました"
  },
  {
    "id": 302,
    "word": "ตอบ",
    "meaning": "返事をする、回答する、答える",
    "pronunciation": "tɔ̀ɔp",
    "frequency": "7回中3回",
    "exampleTh": "กรุณาตอบกลับอีเมลนี้ภายในสิ้นวันทำงานวันนี้",
    "exampleJa": "本日の就業時間内にこのメールにご返信ください"
  },
  {
    "id": 303,
    "word": "ตั้ง",
    "meaning": "建てる、設置する、〜から",
    "pronunciation": "tâŋ",
    "frequency": "7回中3回",
    "exampleTh": "เขาตั้งเป้าหมายว่าจะขยายสาขาเพิ่มขึ้นปีหน้า",
    "exampleJa": "彼は来年店舗をさらに拡大するという目標を設定した"
  },
  {
    "id": 304,
    "word": "ตัดสินใจ",
    "meaning": "決断する、決める",
    "pronunciation": "tàtsǐncay",
    "frequency": "7回中3回",
    "exampleTh": "การตัดสินใจในครั้งนี้ส่งผลต่ออนาคตของบริษัท",
    "exampleJa": "今回の決断は会社の将来に影響を与えます"
  },
  {
    "id": 305,
    "word": "ตำรวจ",
    "meaning": "警察、警官",
    "pronunciation": "tamrùat",
    "frequency": "7回中3回",
    "exampleTh": "ตำรวจกำลังตรวจสอบกล้องวงจรปิดเพื่อหาหลักฐาน",
    "exampleJa": "警察は証拠を見つけるために防犯カメラを調査しています"
  },
  {
    "id": 306,
    "word": "ตำแหน่ง",
    "meaning": "役職、ポジション、位置",
    "pronunciation": "tamnɛ̀ŋ",
    "frequency": "7回中3回",
    "exampleTh": "เขาได้รับการเลื่อนตำแหน่งเป็นผู้จัดการทั่วไป",
    "exampleJa": "彼はゼネラルマネージャーに昇進した"
  },
  {
    "id": 307,
    "word": "ติดต่อ",
    "meaning": "連絡する、つながる、感染する",
    "pronunciation": "tìttɔ̀ɔ",
    "frequency": "7回中3回",
    "exampleTh": "คุณสามารถติดต่อเราผ่านช่องทางโทรศัพท์หรืออีเมล",
    "exampleJa": "電話またはメールで弊社にご連絡いただけます"
  },
  {
    "id": 308,
    "word": "แตก",
    "meaning": "割れる、壊れる、破裂する",
    "pronunciation": "tɛ̀ɛk",
    "frequency": "7回中3回",
    "exampleTh": "แก้วน้ำใบนี้ร้าวและพร้อมจะแตกได้ง่าย",
    "exampleJa": "このコップはひびが入っており、簡単に割れやすくなっている"
  },
  {
    "id": 309,
    "word": "แต่ง",
    "meaning": "飾る、文章を書く、結婚する（แต่งงาน）",
    "pronunciation": "tɛ̀ŋ",
    "frequency": "7回中3回",
    "exampleTh": "นักประชาสัมพันธ์แต่งบทความเพื่อเผยแพร่ข่าวสาร",
    "exampleJa": "広報担当者は情報を発信するために記事を執筆した"
  },
  {
    "id": 310,
    "word": "ถ้าหาก",
    "meaning": "もし〜ならば",
    "pronunciation": "thâahaak",
    "frequency": "7回中3回",
    "exampleTh": "ถ้าหากมีปัญหาเกิดขึ้น เราต้องแก้ไขโดยด่วน",
    "exampleJa": "もし問題が発生した場合は、速やかに解決しなければならない"
  },
  {
    "id": 311,
    "word": "ถึงแม้",
    "meaning": "たとえ〜だとしても、〜にもかかわらず",
    "pronunciation": "thʉ̌ŋmɛ́ɛ",
    "frequency": "7回中3回",
    "exampleTh": "ถึงแม้ฝนจะตกหนัก แต่เขาก็ยังมาทำงานตรงเวลา",
    "exampleJa": "雨が激しく降っているにもかかわらず、彼は時間通りに出勤した"
  },
  {
    "id": 312,
    "word": "ถือ",
    "meaning": "持つ、握る、見なす",
    "pronunciation": "thʉ̌ʉ",
    "frequency": "7回中3回",
    "exampleTh": "กรุณาถือเอกสารนี้ไว้ในมือระหว่างเดินไปประชุม",
    "exampleJa": "会議室へ歩く間、この書類を手元に持っておいてください"
  },
  {
    "id": 313,
    "word": "ถูกต้อง",
    "meaning": "正しい、間違いがない",
    "pronunciation": "thùuktɔ̂ŋ",
    "frequency": "7回中3回",
    "exampleTh": "ข้อมูลการโอนเงินนี้ถูกต้องและตรงตามยอดจริง",
    "exampleJa": "この送金情報は正しく、実際の金額と一致しています"
  },
  {
    "id": 314,
    "word": "ท้อง",
    "meaning": "お腹、胃、妊娠する",
    "pronunciation": "thɔ́ɔŋ",
    "frequency": "7回中3回",
    "exampleTh": "เขาบ่นว่ารู้สึกปวดท้องหลังจากกินอาหารรสจัด",
    "exampleJa": "彼は辛い食べ物を食べた後でお腹が痛いと訴えた"
  },
  {
    "id": 315,
    "word": "ท่องเที่ยว",
    "meaning": "旅行する、観光する",
    "pronunciation": "thɔ̂ŋthîaw",
    "frequency": "7回中3回",
    "exampleTh": "ภาคการท่องเที่ยวช่วยสร้างรายได้มหาศาลให้ประเทศไทย",
    "exampleJa": "観光部門はタイに莫大な収入をもたらすのに貢献している"
  },
  {
    "id": 316,
    "word": "ทั้งนั้น",
    "meaning": "すべて、それらすべて",
    "pronunciation": "tháŋnán",
    "frequency": "7回中3回",
    "exampleTh": "ข่าวลือที่แพร่ออกไปล้วนแต่เป็นเรื่องโกหกทั้งนั้น",
    "exampleJa": "広まっている噂はすべて嘘ばかりです"
  },
  {
    "id": 317,
    "word": "ทั้งหมด",
    "meaning": "すべて、全体、全部",
    "pronunciation": "tháŋmòt",
    "frequency": "7回中3回",
    "exampleTh": "ทรัพย์สินทั้งหมดของบริษัทได้รับการประกันภัยแล้ว",
    "exampleJa": "会社のすべての資産はすでに保険に加入しています"
  },
  {
    "id": 318,
    "word": "ทั่วไป",
    "meaning": "一般的な、普通の、普遍的な",
    "pronunciation": "thûapay",
    "frequency": "7回中3回",
    "exampleTh": "โดยทั่วไปแล้ว พนักงานใหม่จะต้องผ่านการทดลองงานก่อน",
    "exampleJa": "一般的に、新入社員はまず試用期間を経る必要があります"
  },
  {
    "id": 319,
    "word": "ทำให้",
    "meaning": "〜させる、もたらす、引き起こす",
    "pronunciation": "thamhây",
    "frequency": "7回中3回",
    "exampleTh": "พายุหมุนทำให้เกิดความเสียหายต่อบ้านเรือนจำนวนมาก",
    "exampleJa": "旋風は多くの家屋に被害をもたらした"
  },
  {
    "id": 320,
    "word": "ทุก",
    "meaning": "すべての、毎〜",
    "pronunciation": "thúk",
    "frequency": "7回中3回",
    "exampleTh": "เราต้องจัดส่งรายงานสรุปยอดขายทุกสิ้นเดือน",
    "exampleJa": "私たちは毎月末に売上集計報告書を送付しなければならない"
  },
  {
    "id": 321,
    "word": "ทุกอย่าง",
    "meaning": "あらゆること、すべて、万事",
    "pronunciation": "thúkyàaŋ",
    "frequency": "7回中3回",
    "exampleTh": "เราเตรียมความพร้อมไว้ทุกอย่างก่อนเปิดบริการลูกค้า",
    "exampleJa": "顧客サービスを開始する前に、すべての準備を整えました"
  },
  {
    "id": 322,
    "word": "เท่ากับ",
    "meaning": "〜に等しい、同じである",
    "pronunciation": "thâakàp",
    "frequency": "7回中3回",
    "exampleTh": "การลงทุนครั้งนี้มีผลกำไรเท่ากับปีที่แล้ว",
    "exampleJa": "今回の投資の利益は昨年と同じです"
  },
  {
    "id": 323,
    "word": "เท่าไหร่",
    "meaning": "いくら、どれくらい",
    "pronunciation": "thâwrày",
    "frequency": "7回中3回",
    "exampleTh": "สินค้าชิ้นนี้ราคาเท่าไหร่และมีส่วนลดไหม",
    "exampleJa": "この商品の価格はいくらですか、また割引はありますか"
  },
  {
    "id": 324,
    "word": "แทน",
    "meaning": "代理で、代わりに、身代わりに",
    "pronunciation": "thɛɛn",
    "frequency": "7回中3回",
    "exampleTh": "คุณสามารถเซ็นชื่อรับเอกสารแทนเขาได้ในกรณีเร่งด่วน",
    "exampleJa": "緊急の場合、彼の代わりに書類の受取サインをすることができます"
  },
  {
    "id": 325,
    "word": "เธอ",
    "meaning": "彼女、あなた",
    "pronunciation": "thəə",
    "frequency": "7回中3回",
    "exampleTh": "เธอตัดสินใจย้ายไปทำงานที่สำนักงานต่างประเทศ",
    "exampleJa": "彼女は海外の事務所へ異動することを決めた"
  },
  {
    "id": 326,
    "word": "นอกจาก",
    "meaning": "〜の他に、〜を除いて",
    "pronunciation": "nɔ̂ɔkcàak",
    "frequency": "7回中3回",
    "exampleTh": "นอกจากภาษาอังกฤษแล้ว เขายังพูดภาษาญี่ปุ่นได้ด้วย",
    "exampleJa": "英語の他に、彼は日本語を話すこともできます"
  },
  {
    "id": 327,
    "word": "นั่ง",
    "meaning": "座る、乗る（乗り物に）",
    "pronunciation": "nâŋ",
    "frequency": "7回中3回",
    "exampleTh": "เราควรนั่งรถไฟฟ้าเพื่อเลี่ยงปัญหารถติด",
    "exampleJa": "渋滞を避けるために電車に乗るべきです"
  },
  {
    "id": 328,
    "word": "น่า",
    "meaning": "〜しそうな、〜に値する、ふさわしい",
    "pronunciation": "nâa",
    "frequency": "7回中3回",
    "exampleTh": "ข้อเสนอนี้น่าสนใจและมีความเป็นไปได้สูง",
    "exampleJa": "この提案は興味深く、実現可能性が高いです"
  },
  {
    "id": 329,
    "word": "น่าสนใจ",
    "meaning": "興味深い、面白い、魅力的な",
    "pronunciation": "nâasǒncay",
    "frequency": "7回中3回",
    "exampleTh": "โครงการศึกษาความเป็นไปได้ของตลาดนี้น่าสนใจมาก",
    "exampleJa": "この市場の実現可能性調査プロジェクトは非常に興味深い"
  },
  {
    "id": 330,
    "word": "นาฬิกา",
    "meaning": "時計、〜時（時間）",
    "pronunciation": "naalíkaa",
    "frequency": "7回中3回",
    "exampleTh": "ตอนนี้เวลาสิบนาฬิกาตรงตามเวลาราชการ",
    "exampleJa": "現在は公式な時間でちょうど10時です"
  },
  {
    "id": 331,
    "word": "นิดหน่อย",
    "meaning": "少し、ちょっと",
    "pronunciation": "nítnɔ̀y",
    "frequency": "7回中3回",
    "exampleTh": "แผนงานนี้มีการเปลี่ยนแปลงนิดหน่อยจากสัปดาห์ที่แล้ว",
    "exampleJa": "この計画は先週から少し変更点があります"
  },
  {
    "id": 332,
    "word": "เนื่องจาก",
    "meaning": "〜のために、〜ゆえに、〜が原因で",
    "pronunciation": "nʉ̂aŋcàak",
    "frequency": "7回中3回",
    "exampleTh": "เนื่องจากพายุเข้า การบินเที่ยวนี้จึงต้องล่าช้าออกไป",
    "exampleJa": "台風の影響により、このフライトは遅延せざるを得ません"
  },
  {
    "id": 333,
    "word": "แนะ",
    "meaning": "勧める、指し示す、アドバイスする",
    "pronunciation": "nɛ́",
    "frequency": "7回中3回",
    "exampleTh": "ผู้เชี่ยวชาญแนะให้เราลงทุนในหุ้นที่มีความมั่นคงสูง",
    "exampleJa": "専門家は安定性の高い株に投資するよう勧めています"
  },
  {
    "id": 334,
    "word": "บน",
    "meaning": "〜の上に、〜の上で",
    "pronunciation": "bon",
    "frequency": "7回中3回",
    "exampleTh": "กรุณาวางเอกสารเสนออนุมัติไว้บนโต๊ะทำงานของฉัน",
    "exampleJa": "承認申請書類は私の机の上に置いておいてください"
  },
  {
    "id": 335,
    "word": "บริเวณ",
    "meaning": "周辺、エリア、敷地",
    "pronunciation": "bɔɔríween",
    "frequency": "7回中3回",
    "exampleTh": "ห้ามจอดรถในบริเวณนี้เนื่องจากเป็นพื้นที่ส่วนบุคคล",
    "exampleJa": "個人スペースのため、このエリア内での駐車は禁止されています"
  },
  {
    "id": 336,
    "word": "บอก",
    "meaning": "言う、知らせる、話す",
    "pronunciation": "bɔ̀ɔk",
    "frequency": "7回中3回",
    "exampleTh": "เขาลืมบอกข้อมูลสำคัญในการประชุมเมื่อวานนี้",
    "exampleJa": "彼は昨日の会議で重要な情報を伝えるのを忘れてしまった"
  },
  {
    "id": 337,
    "word": "บ่อย",
    "meaning": "しばしば、よく、頻繁に",
    "pronunciation": "bɔ̀y",
    "frequency": "7回中3回",
    "exampleTh": "เราต้องเข้าพบคู่ค้าเพื่อเจรจาธุรกิจบ่อยครั้ง",
    "exampleJa": "私たちはビジネス交渉のために頻繁に取引先を訪問する必要があります"
  },
  {
    "id": 338,
    "word": "บัตร",
    "meaning": "カード、チケット、券",
    "pronunciation": "bàt",
    "frequency": "7回中3回",
    "exampleTh": "กรุณาแสดงบัตรประจำตัวพนักงานก่อนเข้าอาคาร",
    "exampleJa": "入館前に社員証（身分証カード）を提示してください"
  },
  {
    "id": 339,
    "word": "บิน",
    "meaning": "飛ぶ、飛行する",
    "pronunciation": "bin",
    "frequency": "7回中3回",
    "exampleTh": "เครื่องบินจะบินออกจากสนามบินตรงเวลาตามตาราง",
    "exampleJa": "飛行機はスケジュール通り時間内に空港を離陸します"
  },
  {
    "id": 340,
    "word": "ประจำ",
    "meaning": "定期的な、常勤の、常駐の",
    "pronunciation": "pràcam",
    "frequency": "7回中3回",
    "exampleTh": "เราจัดการประชุมคณะกรรมการประจำปีในเดือนนี้",
    "exampleJa": "今月、年次取締役会（定期委員会）を開催します"
  },
  {
    "id": 341,
    "word": "ป่วย",
    "meaning": "病気の、体調が悪い",
    "pronunciation": "pùay",
    "frequency": "7回中3回",
    "exampleTh": "เขาต้องลาหยุดงานวันนี้เนื่องจากป่วยเป็นไข้หวัดใหญ่",
    "exampleJa": "彼はインフルエンザに罹患した（病気になった）ため、本日仕事を休む必要があります"
  },
  {
    "id": 342,
    "word": "ปัจจุบัน",
    "meaning": "現在、今、現代",
    "pronunciation": "pàccùban",
    "frequency": "7回中3回",
    "exampleTh": "ปัจจุบัน เทคโนโลยีเข้ามาเปลี่ยนพฤติกรรมผู้บริโภคอย่างมาก",
    "exampleJa": "現在、テクノロジーは消費者の行動を大きく変えています"
  },
  {
    "id": 343,
    "word": "เปิด",
    "meaning": "開ける、開始する、電源を入れる",
    "pronunciation": "pə̀ət",
    "frequency": "7回中3回",
    "exampleTh": "เราจะเปิดตัวผลิตภัณฑ์ใหม่ในงานแถลงข่าวพรุ่งนี้",
    "exampleJa": "私たちは明日の記者会見で新製品を発表（公開）します"
  },
  {
    "id": 344,
    "word": "แปลก",
    "meaning": "奇妙な、変わった、珍しい",
    "pronunciation": "plɛ̀ɛk",
    "frequency": "7回中3回",
    "exampleTh": "การทดลองทางวิทยาศาสตร์นี้ให้ผลลัพธ์ที่แปลกใหม่",
    "exampleJa": "この科学実験は斬新で（珍しく新しい）結果をもたらした"
  },
  {
    "id": 345,
    "word": "ผัก",
    "meaning": "野菜",
    "pronunciation": "phàk",
    "frequency": "7回中3回",
    "exampleTh": "การกินผักใบเขียวมีประโยชน์ต่อระบบการย่อยอาหาร",
    "exampleJa": "緑黄色野菜を食べることは消化器官に良いです"
  },
  {
    "id": 346,
    "word": "ผ้า",
    "meaning": "布、衣類、生地",
    "pronunciation": "phâa",
    "frequency": "7回中3回",
    "exampleTh": "ร้านนี้ขายส่งผ้าไหมไทยแท้คุณภาพส่งออก",
    "exampleJa": "この店は輸出品質の本物のタイシルク（タイ絹織物）を卸売しています"
  },
  {
    "id": 347,
    "word": "ผู้",
    "meaning": "人、〜する者（接頭辞）",
    "pronunciation": "phûu",
    "frequency": "7回中3回",
    "exampleTh": "ผู้จัดการทั่วไปฝ่ายบุคคลกำลังตรวจสอบใบสมัครงาน",
    "exampleJa": "人事を担当するゼネラルマネージャーが応募書類を確認しています"
  },
  {
    "id": 348,
    "word": "ฝน",
    "meaning": "雨",
    "pronunciation": "fǒn",
    "frequency": "7回中3回",
    "exampleTh": "ปีนี้ฝนมาเร็วกว่าปกติซึ่งส่งผลดีต่อผลผลิตทางการเกษตร",
    "exampleJa": "今年は通常より早く雨が降り、農作物の収穫に好影響を与えている"
  },
  {
    "id": 349,
    "word": "ฝนตก",
    "meaning": "雨が降る",
    "pronunciation": "fǒntòk",
    "frequency": "7回中3回",
    "exampleTh": "กรุณาเตรียมร่มไว้ล่วงหน้าเนื่องจากบ่ายนี้ฝนตกแน่",
    "exampleJa": "今日の午後は確実に雨が降るので、事前に行傘を用意してください"
  },
  {
    "id": 350,
    "word": "ฝาก",
    "meaning": "預ける、託す、頼む",
    "pronunciation": "fàak",
    "frequency": "7回中3回",
    "exampleTh": "เขาฝากเอกสารสัญญาไว้ที่โต๊ะเลขาฯ หน้าห้อง",
    "exampleJa": "彼は部屋の前の秘書のデスクに契約書（書類）を預けた"
  },
  {
    "id": 351,
    "word": "พยายาม",
    "meaning": "努力する、試みる、企てる",
    "pronunciation": "pháyaayaam",
    "frequency": "7回中3回",
    "exampleTh": "บริษัทพยายามลดต้นทุนการผลิตเพื่อเพิ่มความสามารถในการแข่งขัน",
    "exampleJa": "会社は競争力を高めるために生産コストを削減しようと努力している"
  },
  {
    "id": 352,
    "word": "พร้อมกัน",
    "meaning": "同時に、一斉に、一緒に",
    "pronunciation": "phrɔ́ɔmkan",
    "frequency": "7回中3回",
    "exampleTh": "ระบบนี้อนุญาตให้ผู้ใช้เข้าสู่ระบบพร้อมกันได้หลายคน",
    "exampleJa": "このシステムは複数のユーザーが同時にログインすることを許可しています"
  },
  {
    "id": 353,
    "word": "พอๆกัน",
    "meaning": "同じくらい、同等だ、同レベルだ",
    "pronunciation": "phɔɔphɔɔkan",
    "frequency": "7回中3回",
    "exampleTh": "ความรู้ทางเทคนิคของเขาสองคนอยู่ในระดับพอๆ กัน",
    "exampleJa": "彼ら二人の技術的な知識はほぼ同レベルです"
  },
  {
    "id": 354,
    "word": "พัก",
    "meaning": "休憩する、宿泊する、一時停止する",
    "pronunciation": "phák",
    "frequency": "7回中3回",
    "exampleTh": "พนักงานควรได้พักสายตาหลังจากจ้องหน้าจอนานๆ",
    "exampleJa": "社員は画面を長時間凝視した後は目を休ませる（休憩させる）べきである"
  },
  {
    "id": 355,
    "word": "เพิ่ม",
    "meaning": "増やす、追加する、高める",
    "pronunciation": "phə̂əm",
    "frequency": "7回中3回",
    "exampleTh": "เราต้องการเพิ่มกำลังการผลิตในโรงงานแห่งใหม่",
    "exampleJa": "私たちは新しい工場で生産能力を高める必要があります"
  },
  {
    "id": 356,
    "word": "เพียง",
    "meaning": "〜だけ、〜のみ、〜にすぎない",
    "pronunciation": "phiaŋ",
    "frequency": "7回中3回",
    "exampleTh": "การเริ่มต้นใช้บริการไม่มีค่าธรรมเนียมใดๆ เพียงลงทะเบียน",
    "exampleJa": "サービスの利用開始には手数料はかからず、登録するだけで大丈夫です"
  },
  {
    "id": 357,
    "word": "ไฟฟ้า",
    "meaning": "電気、電力",
    "pronunciation": "fayfáa",
    "frequency": "7回中3回",
    "exampleTh": "รัฐบาลมีนโยบายสนับสนุนการใช้ยานยนต์ไฟฟ้าในประเทศ",
    "exampleJa": "政府は国内での電気自動車の使用を支援する政策をとっています"
  },
  {
    "id": 358,
    "word": "ภายใน",
    "meaning": "〜以内に、内部の",
    "pronunciation": "phaaynay",
    "frequency": "7回中3回",
    "exampleTh": "กรุณาส่งความเห็นกลับคืนมาภายในสัปดาห์นี้ด้วย",
    "exampleJa": "今週中に意見を返送してください"
  },
  {
    "id": 359,
    "word": "ภาษาไทย",
    "meaning": "タイ語",
    "pronunciation": "phaasǎathay",
    "frequency": "7回中3回",
    "exampleTh": "การเขียนภาษาไทยให้ถูกต้องมีความสำคัญมากในการทำงาน",
    "exampleJa": "仕事においてタイ語を正しく書くことは非常に重要です"
  },
  {
    "id": 360,
    "word": "มักจะ",
    "meaning": "〜しがちである、通常〜する",
    "pronunciation": "mákcà",
    "frequency": "7回中3回",
    "exampleTh": "ปัญหาระบบเซิร์ฟเวอร์มักจะเกิดขึ้นในช่วงเวลาที่มีผู้ใช้หนาแน่น",
    "exampleJa": "サーバーシステムの問題は通常、ユーザーが多い時間帯に発生しがちです"
  },
  {
    "id": 361,
    "word": "เมื่อไร",
    "meaning": "いつ（疑問詞）",
    "pronunciation": "mʉ̂aray",
    "frequency": "7回中3回",
    "exampleTh": "คุณจะกลับจากเดินทางไปต่างประเทศเมื่อไรช่วยแจ้งด้วย",
    "exampleJa": "海外旅行からいつ帰国するのか教えてください"
  },
  {
    "id": 362,
    "word": "แม้ว่า",
    "meaning": "たとえ〜だとしても、〜であるが",
    "pronunciation": "mɛ́ɛwâa",
    "frequency": "7回中3回",
    "exampleTh": "แม้ว่าการเจรจาจะยากลำบาก แต่เราก็ไม่ล้มเลิกข้อตกลง",
    "exampleJa": "交渉は困難であるが、私たちは合意を諦めません"
  },
  {
    "id": 363,
    "word": "ไม่ค่อย",
    "meaning": "あまり〜ない",
    "pronunciation": "mâykhɔ̂y",
    "frequency": "7回中3回",
    "exampleTh": "ช่วงนี้เขาไม่ค่อยเข้าสำนักงานเนื่องจากต้องออกไปพบคู่ค้า",
    "exampleJa": "最近、彼は取引先を訪問する必要があるため、あまりオフィスに来ません"
  },
  {
    "id": 364,
    "word": "ไม่ได้",
    "meaning": "〜できない、〜しなかった",
    "pronunciation": "mâydây",
    "frequency": "7回中3回",
    "exampleTh": "ฉันไม่ได้ส่งรายงานสรุปให้ผู้บริหารตามกำหนดเวลา",
    "exampleJa": "私は役員への要約報告書を期限通りに送付しませんでした"
  },
  {
    "id": 365,
    "word": "ไม่เป็นไร",
    "meaning": "どういたしまして、大丈夫だ、問題ない",
    "pronunciation": "mâypenray",
    "frequency": "7回中3回",
    "exampleTh": "ถ้าหากคุณลืมเอกสารไว้ ไม่เป็นไร พรุ่งนี้ค่อยเอามาก็ได้",
    "exampleJa": "書類を忘れても大丈夫です、明日持ってきても構いません"
  },
  {
    "id": 366,
    "word": "รถติด",
    "meaning": "交通渋滞、渋滞する",
    "pronunciation": "róttìt",
    "frequency": "7回中3回",
    "exampleTh": "วันศุกร์ตอนเย็นแถวนี้รถติดหนักมากเป็นประจำ",
    "exampleJa": "金曜日の夕方はこの辺りはいつも激しい交通渋滞になります"
  },
  {
    "id": 367,
    "word": "รถไฟฟ้า",
    "meaning": "電車、BTS、地下鉄",
    "pronunciation": "rótfayfáa",
    "frequency": "7回中3回",
    "exampleTh": "การเดินทางด้วยรถไฟฟ้าช่วยประหยัดเวลาการทำงานอย่างมาก",
    "exampleJa": "電車で移動することは仕事の時間を大幅に節約するのに役立ちます"
  },
  {
    "id": 368,
    "word": "รวย",
    "meaning": "金持ちの、豊かな、富裕な",
    "pronunciation": "ruay",
    "frequency": "7回中3回",
    "exampleTh": "เขาฝันอยากเป็นนักธุรกิจที่ประสบความสำเร็จและร่ำรวย",
    "exampleJa": "彼は成功して裕福な実業家になることを夢見ている"
  },
  {
    "id": 369,
    "word": "รักษา",
    "meaning": "治療する、維持する、守る",
    "pronunciation": "ráksǎa",
    "frequency": "7回中3回",
    "exampleTh": "บริษัทต้องรักษาความลับของลูกค้าอย่างเคร่งครัดตามข้อตกลง",
    "exampleJa": "会社は合意に基づき、顧客の秘密を厳格に保持しなければならない"
  },
  {
    "id": 370,
    "word": "รับประทาน",
    "meaning": "食べる（丁寧な表現）",
    "pronunciation": "ráppràthaan",
    "frequency": "7回中3回",
    "exampleTh": "ผู้อำนวยการกำลังรับประทานอาหารกลางวันกับคู่ค้ารายใหญ่",
    "exampleJa": "ディレクターは大口の取引先と昼食を召し上がっています"
  },
  {
    "id": 371,
    "word": "รับผิดชอบ",
    "meaning": "責任を負う、担当する",
    "pronunciation": "rápphìtchɔ̂ɔp",
    "frequency": "7回中3回",
    "exampleTh": "หัวหน้าโครงการต้องรับผิดชอบต่อความสำเร็จของงานทั้งหมด",
    "exampleJa": "プロジェクトリーダーはすべての仕事の成功に責任を負う必要がある"
  },
  {
    "id": 372,
    "word": "ร่างกาย",
    "meaning": "身体、体",
    "pronunciation": "râaŋkaay",
    "frequency": "7回中3回",
    "exampleTh": "การออกกำลังกายสม่ำเสมอช่วยให้ร่างกายแข็งแรงกระปรี้กระเปร่า",
    "exampleJa": "定期的な運動は体を健康で活発にするのに役立ちます"
  },
  {
    "id": 373,
    "word": "ร้าย",
    "meaning": "悪い、悪質な、深刻な",
    "pronunciation": "ráay",
    "frequency": "7回中3回",
    "exampleTh": "โชคดีที่อุบัติเหตุเมื่อคืนนี้ไม่มีผลลัพธ์ที่ร้ายแรง",
    "exampleJa": "幸運なことに昨夜の事故は深刻な結果にはならなかった"
  },
  {
    "id": 374,
    "word": "เร็ว",
    "meaning": "速い、早い",
    "pronunciation": "rew",
    "frequency": "7回中3回",
    "exampleTh": "กรุณาจัดส่งข้อมูลนี้ให้เสร็จเร็วที่สุดเท่าที่จะทำได้",
    "exampleJa": "できるだけ早くこの情報を整理して送ってください"
  },
  {
    "id": 375,
    "word": "เรา",
    "meaning": "私たち、私（カジュアル）",
    "pronunciation": "raw",
    "frequency": "7回中3回",
    "exampleTh": "เราต้องรีบเจรจาเพื่อยุติข้อขัดแย้งก่อนเรื่องจะบานปลาย",
    "exampleJa": "事態が悪化する前に、私たちは交渉を急いで争いを終わらせなければならない"
  },
  {
    "id": 376,
    "word": "เรียก",
    "meaning": "呼ぶ、称する、請求する",
    "pronunciation": "rîak",
    "frequency": "7回中3回",
    "exampleTh": "เขาเรียกประชุมผู้จัดการฝ่ายขายด่วนเพื่อหารือแผนงานใหม่",
    "exampleJa": "彼は新しい計画を議論するために営業担当マネージャーの緊急会議を招集した"
  },
  {
    "id": 377,
    "word": "เรียกว่า",
    "meaning": "〜と呼ばれる、〜という",
    "pronunciation": "rîakwâa",
    "frequency": "7回中3回",
    "exampleTh": "เครื่องมือชิ้นนี้ทางเทคนิคเรียกว่าเครื่องวิเคราะห์ระดับแสง",
    "exampleJa": "この器具は技術的には光レベルアナライザーと呼ばれています"
  },
  {
    "id": 378,
    "word": "โรง",
    "meaning": "建物、小屋、施設（映画館や工場など）",
    "pronunciation": "rooŋ",
    "frequency": "7回中3回",
    "exampleTh": "บริษัทมีแผนจะย้ายโรงงานไปตั้งในเขตนิคมอุตสาหกรรมแห่งใหม่",
    "exampleJa": "会社は工場を新しい工業団地地区へ移転する計画を持っています"
  },
  {
    "id": 379,
    "word": "ฤดู",
    "meaning": "季節",
    "pronunciation": "rʉ́duu",
    "frequency": "7回中3回",
    "exampleTh": "การเดินทางไปต่างจังหวัดในฤดูหนาวของไทยจะงดงามมาก",
    "exampleJa": "タイの冬の季節に地方へ旅行するのはとても美しいです"
  },
  {
    "id": 380,
    "word": "ละเอียด",
    "meaning": "詳細な、細かい、丁寧な",
    "pronunciation": "laìat",
    "frequency": "7回中3回",
    "exampleTh": "กรุณาอ่านข้อมูลสัญญานี้อย่างละเอียดรอบคอบก่อนลงนาม",
    "exampleJa": "署名する前にこの契約書の情報を詳しく注意深く読んでください"
  },
  {
    "id": 381,
    "word": "ลาออก",
    "meaning": "辞職する、退職する、やめる",
    "pronunciation": "laaɔ̀ɔk",
    "frequency": "7回中3回",
    "exampleTh": "เขาตัดสินใจยื่นใบลาออกเนื่องจากความเครียดสะสม",
    "exampleJa": "彼はストレスの蓄積により退職届を提出することを決めた"
  },
  {
    "id": 382,
    "word": "ลำบาก",
    "meaning": "困難な、苦労する、不便な",
    "pronunciation": "lambàak",
    "frequency": "7回中3回",
    "exampleTh": "การไม่มีไฟฟ้าใช้ทำให้การดำเนินชีวิตในชนบทลำบากยิ่งขึ้น",
    "exampleJa": "電気が通っていないことは田舎での生活をさらに困難にします"
  },
  {
    "id": 383,
    "word": "ลำไส้",
    "meaning": "腸、消化管",
    "pronunciation": "lamsây",
    "frequency": "7回中3回",
    "exampleTh": "แพทย์ตรวจพบว่าคนไข้อาการอักเสบที่บริเวณลำไส้ใหญ่",
    "exampleJa": "医師は患者の大腸部分に炎症を発見した"
  },
  {
    "id": 384,
    "word": "ลูกค้า",
    "meaning": "顧客、客、クライアント",
    "pronunciation": "lûukkhaa",
    "frequency": "7回中3回",
    "exampleTh": "ลูกค้าไม่พอใจที่การจัดส่งของล่าช้ากว่าที่กำหนดมาก",
    "exampleJa": "顧客は商品の発送が予定より大幅に遅れたことに不満を抱いています"
  },
  {
    "id": 385,
    "word": "เล่น",
    "meaning": "遊ぶ、演奏する、〜するふりをする",
    "pronunciation": "lên",
    "frequency": "7回中3回",
    "exampleTh": "เด็กๆ กำลังเล่นฟุตบอลอย่างสนุกสนานในสนามหญ้าหน้าบ้าน",
    "exampleJa": "子供たちは家の前の芝生広場で楽しそうにサッカーで遊んでいます"
  },
  {
    "id": 386,
    "word": "เล่า",
    "meaning": "話す、語る、物語る",
    "pronunciation": "lâw",
    "frequency": "7回中3回",
    "exampleTh": "เขาเล่าประสบการณ์การทำธุรกิจในต่างประเทศให้พวกเราฟัง",
    "exampleJa": "彼は私たちに海外でのビジネス経験を語ってくれました"
  },
  {
    "id": 387,
    "word": "เลื่อน",
    "meaning": "延期する、スライドする、移動する",
    "pronunciation": "lʉ̂an",
    "frequency": "7回中3回",
    "exampleTh": "ผู้จัดการขอเลื่อนเวลาการประชุมไปเป็นบ่ายสามโมงแทน",
    "exampleJa": "マネージャーは会議時間を代わりに午後3時に延期することを求めた"
  },
  {
    "id": 388,
    "word": "วัฒนธรรม",
    "meaning": "文化",
    "pronunciation": "wátthánátham",
    "frequency": "7回中3回",
    "exampleTh": "ประเทศไทยมีวัฒนธรรมการไหว้ที่เป็นเอกลักษณ์และงดงาม",
    "exampleJa": "タイには独特で美しいワイ（合掌）の文化があります"
  },
  {
    "id": 389,
    "word": "วิธี",
    "meaning": "方法、やり方、手段",
    "pronunciation": "wíthii",
    "frequency": "7回中3回",
    "exampleTh": "การศึกษาวิธีการควบคุมคุณภาพผลิตภัณฑ์ช่วยลดการสูญเสีย",
    "exampleJa": "製品の品質管理方法を学ぶことは無駄を減らすのに役立ちます"
  },
  {
    "id": 390,
    "word": "ไว้",
    "meaning": "保つ、保管する、〜しておく（補助動詞）",
    "pronunciation": "wáy",
    "frequency": "7回中3回",
    "exampleTh": "เลขาฯ เก็บข้อมูลคู่ค้าไว้ในระบบความปลอดภัยสูงอย่างดี",
    "exampleJa": "秘書は取引先の情報を安全性の高いシステムにしっかりと保管しておいた"
  },
  {
    "id": 391,
    "word": "เศรษฐกิจ",
    "meaning": "経済",
    "pronunciation": "sèetthàkìt",
    "frequency": "7回中3回",
    "exampleTh": "อัตราการขยายตัวทางเศรษฐกิจในไตรมาสแรกปรับตัวดีขึ้น",
    "exampleJa": "第一四半期の経済成長率は改善した"
  },
  {
    "id": 392,
    "word": "ส่ง",
    "meaning": "送る、送信する、配達する",
    "pronunciation": "sòŋ",
    "frequency": "7回中3回",
    "exampleTh": "ฝ่ายคลังสินค้าจะจัดส่งสินค้าให้ลูกค้าในวันพรุ่งนี้",
    "exampleJa": "倉庫部門は明日、顧客へ商品を発送します"
  },
  {
    "id": 393,
    "word": "สนับสนุน",
    "meaning": "支援する、サポートする、推奨する",
    "pronunciation": "sànàpsànǔn",
    "frequency": "7回中3回",
    "exampleTh": "โครงการนี้ได้รับการสนับสนุนทุนวิจัยจากรัฐบาลอย่างเต็มที่",
    "exampleJa": "このプロジェクトは政府から研究開発資金の全面的な支援を受けています"
  },
  {
    "id": 394,
    "word": "สนาม",
    "meaning": "広場、競技場、グラウンド",
    "pronunciation": "sànǎam",
    "frequency": "7回中3回",
    "exampleTh": "เครื่องบินเริ่มบินมาถึงบริเวณเหนือน่านฟ้าสนามบินสุวรรณภูมิ",
    "exampleJa": "飛行機はスワンナプーム空港の上空付近に到着し始めた"
  },
  {
    "id": 395,
    "word": "สมัคร",
    "meaning": "応募する、申し込む、入会する",
    "pronunciation": "sàmàk",
    "frequency": "7回中3回",
    "exampleTh": "คุณสนใจที่จะสมัครงานในตำแหน่งพนักงานขายนี้ไหม",
    "exampleJa": "この営業職のポジションの求人に応募することに関心はありますか"
  },
  {
    "id": 396,
    "word": "ส่วนตัว",
    "meaning": "個人的な、プライベートな",
    "pronunciation": "sùantua",
    "frequency": "7回中3回",
    "exampleTh": "เขาต้องเดินทางไปทำธุระส่วนตัวต่างประเทศสองสัปดาห์",
    "exampleJa": "彼は私用（個人の用事）で2週間海外へ行く必要があります"
  },
  {
    "id": 397,
    "word": "สาย",
    "meaning": "遅れる、遅い（朝）、線、コード",
    "pronunciation": "sǎay",
    "frequency": "7回中3回",
    "exampleTh": "กรุณาอย่ามาร่วมประชุมสายในวันพรุ่งนี้เนื่องจากเป็นงานใหญ่",
    "exampleJa": "明日は大きなイベントですので、会議に遅刻しないでください"
  },
  {
    "id": 398,
    "word": "สาเหตุ",
    "meaning": "原因、理由",
    "pronunciation": "sǎahèet",
    "frequency": "7回中3回",
    "exampleTh": "เจ้าหน้าที่กำลังเร่งหาสาเหตุของการเกิดอัคคีภัยในโรงงาน",
    "exampleJa": "担当者は工場で発生した火災の原因究明を急いでいます"
  },
  {
    "id": 399,
    "word": "สุข",
    "meaning": "幸せな、熟した",
    "pronunciation": "sùk",
    "frequency": "7回中3回",
    "exampleTh": "ขอให้พนักงานทุกคนมีความสุขความเจริญในการทำงาน",
    "exampleJa": "すべての社員が仕事において幸福と発展を享受できますように"
  },
  {
    "id": 400,
    "word": "สุขภาพ",
    "meaning": "健康、ヘルス",
    "pronunciation": "sùkkhàphâap",
    "frequency": "7回中3回",
    "exampleTh": "การตรวจสุขภาพประจำปีมีผลต่อการประกันสุขภาพกลุ่ม",
    "exampleJa": "年次健康診断はグループ健康保険に影響を与えます"
  },
  {
    "id": 401,
    "word": "เสร็จ",
    "meaning": "終わる、完了する、出来上がる",
    "pronunciation": "sèt",
    "frequency": "7回中3回",
    "exampleTh": "เขารีบส่งรายงานหลังจากทำข้อมูลสรุปผลเสร็จสิ้นเรียบร้อย",
    "exampleJa": "彼は結果の要約データをまとめ終えた（完了した）後に急いで報告書を送った"
  },
  {
    "id": 402,
    "word": "เสื้อผ้า",
    "meaning": "服、衣類、アパレル",
    "pronunciation": "sʉ̂aphâa",
    "frequency": "7回中3回",
    "exampleTh": "ธุรกิจค้าขายเสื้อผ้าแฟชั่นออนไลน์สร้างกำไรได้รวดเร็วมาก",
    "exampleJa": "ファッション衣類のオンライン販売ビジネスは非常に迅速に利益を生み出します"
  },
  {
    "id": 403,
    "word": "ใส่",
    "meaning": "着る、身につける、入れる、注ぐ",
    "pronunciation": "sày",
    "frequency": "7回中3回",
    "exampleTh": "ห้ามลืมใส่หน้ากากอนามัยระหว่างเข้าห้องแล็บเคมี",
    "exampleJa": "化学実験室に入る際は、マスクを着用することを忘れないでください"
  },
  {
    "id": 404,
    "word": "หน้า",
    "meaning": "顔、ページ、〜の前に、来〜",
    "pronunciation": "nâa",
    "frequency": "7回中3回",
    "exampleTh": "ผู้ช่วยวางรายงานไว้บนโต๊ะเพื่อรออนุมัติหน้าห้องผู้จัดการ",
    "exampleJa": "アシスタントはマネージャーの部屋の前で承認を待つため、デスクに報告書を置いた"
  },
  {
    "id": 405,
    "word": "หมด",
    "meaning": "使い果たす、尽きる、すべて",
    "pronunciation": "mòt",
    "frequency": "7回中3回",
    "exampleTh": "สินค้าล็อตเก่าขายหมดสิ้นแล้วและพร้อมส่งล็อตใหม่ทันที",
    "exampleJa": "古いロットの商品はすべて完売しており、すぐに新しいロットを出荷できます"
  },
  {
    "id": 406,
    "word": "หลังจาก",
    "meaning": "〜の後に、〜ののち",
    "pronunciation": "lǎŋcàak",
    "frequency": "7回中3回",
    "exampleTh": "หลังจากลงนามสัญญาแล้ว เราจะเริ่มดำเนินโครงการทันที",
    "exampleJa": "契約署名の後、私たちはすぐにプロジェクトを開始します"
  },
  {
    "id": 407,
    "word": "หัว",
    "meaning": "頭、中心、トップ",
    "pronunciation": "hǔa",
    "frequency": "7回中3回",
    "exampleTh": "หัวหน้างานคนใหม่มีความคิดสร้างสรรค์และใจดีมาก",
    "exampleJa": "新しいチームリーダー（頭）は創造的でとても優しい人です"
  },
  {
    "id": 408,
    "word": "ห้าม",
    "meaning": "禁止する、〜してはならない",
    "pronunciation": "hâam",
    "frequency": "7回中3回",
    "exampleTh": "ห้ามบันทึกภาพในระหว่างการสัมมนารายการพิเศษนี้",
    "exampleJa": "この特別セミナーの配信中は録画・撮影を禁止します"
  },
  {
    "id": 409,
    "word": "เหตุผล",
    "meaning": "理由、論理、動機",
    "pronunciation": "hèetphǒn",
    "frequency": "7回中3回",
    "exampleTh": "ผู้บริหารอธิบายเหตุผลของการลดงบประมาณการตลาดครั้งนี้",
    "exampleJa": "経営陣は今回のマーケティング予算削減の理由を説明した"
  },
  {
    "id": 410,
    "word": "เห็นด้วย",
    "meaning": "賛成する、同意する、同感である",
    "pronunciation": "hěndûay",
    "frequency": "7回中3回",
    "exampleTh": "เสียงส่วนใหญ่ในที่ประชุมเห็นด้วยกับข้อเสนอดังกล่าว",
    "exampleJa": "会議の過半数（大部分の声）が当該提案に賛成した"
  },
  {
    "id": 411,
    "word": "อย่างน้อย",
    "meaning": "少なくとも",
    "pronunciation": "yàaŋnɔ́y",
    "frequency": "7回中3回",
    "exampleTh": "โครงการนี้ต้องการระยะเวลาดำเนินการอย่างน้อยสามเดือน",
    "exampleJa": "このプロジェクトの実施には少なくとも3か月の期間が必要です"
  },
  {
    "id": 412,
    "word": "อย่างไร",
    "meaning": "どのように、どうやって、どうして",
    "pronunciation": "yàaŋray",
    "frequency": "7回中3回",
    "exampleTh": "กรุณาชี้แจงว่าจะแก้ปัญหาระบบล่าช้านี้อย่างไรโดยด่วน",
    "exampleJa": "このシステム遅延の問題をどのように解決するのか至急説明してください"
  },
  {
    "id": 413,
    "word": "อร่อย",
    "meaning": "美味しい",
    "pronunciation": "arɔ̀y",
    "frequency": "7回中3回",
    "exampleTh": "อาหารในงานเลี้ยงปีใหม่รสชาติดีและอร่อยมากทุกเมนู",
    "exampleJa": "新年パーティーの食事は美味しく、すべてのメニューの味が良かったです"
  },
  {
    "id": 414,
    "word": "อ้วน",
    "meaning": "太った",
    "pronunciation": "ûan",
    "frequency": "7回中3回",
    "exampleTh": "การบริโภคน้ำตาลมากเกินไปอาจทำให้ร่างกายอ้วนได้ง่าย",
    "exampleJa": "砂糖を過剰に摂取することは、体を太りやすくさせる可能性があります"
  },
  {
    "id": 415,
    "word": "อังกฤษ",
    "meaning": "イギリス、英語",
    "pronunciation": "aŋkrìt",
    "frequency": "7回中3回",
    "exampleTh": "การเจรจาระหว่างประเทศดำเนินงานด้วยภาษาอังกฤษเป็นหลัก",
    "exampleJa": "国際的な交渉は主に英語で進行されます"
  },
  {
    "id": 416,
    "word": "อากาศ",
    "meaning": "天気、気候、空気",
    "pronunciation": "aakàat",
    "frequency": "7回中3回",
    "exampleTh": "ระบบกรองอากาศช่วยลดฝุ่นละอองขนาดเล็กในโรงงานผลิต",
    "exampleJa": "空気清浄システムは製造工場内の微小粒子ダストを軽減するのに役立ちます"
  },
  {
    "id": 417,
    "word": "อาจารย์",
    "meaning": "先生、教師、教授",
    "pronunciation": "aacaan",
    "frequency": "7回中3回",
    "exampleTh": "อาจารย์ที่ปรึกษาให้คำแนะที่ดีเกี่ยวกับการวิจัยตลาด",
    "exampleJa": "指導教官（先生）は市場調査に関して良いアドバイスをしてくれた"
  },
  {
    "id": 418,
    "word": "อาชีพ",
    "meaning": "職業、仕事、専門",
    "pronunciation": "aachîip",
    "frequency": "7回中3回",
    "exampleTh": "เขารักในอาชีพวิศวกรและทำงานนี้มาสิบปีแล้ว",
    "exampleJa": "彼はエンジニアという職業を愛しており、この仕事を10年間続けている"
  },
  {
    "id": 419,
    "word": "อาทิตย์",
    "meaning": "週、日曜日、太陽",
    "pronunciation": "aathít",
    "frequency": "7回中3回",
    "exampleTh": "เรามีกำหนดส่งมอบรายงานผลงานภายในสัปดาห์หน้าอาทิตย์หน้า",
    "exampleJa": "私たちは来週中に成果報告書を提出する予定になっています"
  },
  {
    "id": 420,
    "word": "อาศัย",
    "meaning": "住む、居住する、頼る",
    "pronunciation": "aasǎy",
    "frequency": "7回中3回",
    "exampleTh": "เขาตัดสินใจไปอาศัยอยู่ต่างประเทศหลังจากเกษียณงาน",
    "exampleJa": "彼は退職した後に海外に住むことを決めた"
  },
  {
    "id": 421,
    "word": "โอกาส",
    "meaning": "機会、チャンス、可能性",
    "pronunciation": "ookàat",
    "frequency": "7回中3回",
    "exampleTh": "การจัดนิทรรศการครั้งนี้เป็นโอกาสอันดีในการหาพันธมิตรใหม่",
    "exampleJa": "今回の展示会開催は、新しい提携パートナーを探す絶好の機会です"
  },
  {
    "id": 422,
    "word": "กรด",
    "meaning": "酸",
    "pronunciation": "kròt",
    "frequency": "7回中2回",
    "exampleTh": "มะนาวมีฤทธิ์เป็นกรด",
    "exampleJa": "レモンは酸性の性質を持っています。"
  },
  {
    "id": 423,
    "word": "กรรม",
    "meaning": "業、カルマ、行為",
    "pronunciation": "kam",
    "frequency": "7回中2回",
    "exampleTh": "คนเราต้องรับผลแห่งกรรมของตน",
    "exampleJa": "人は自分のカルマの結果を受け入れなければならない。"
  },
  {
    "id": 424,
    "word": "กระเพาะอาหาร",
    "meaning": "胃",
    "pronunciation": "krapɔ́ʔaahǎan",
    "frequency": "7回中2回",
    "exampleTh": "เขาปวดกระเพาะอาหารเพราะกินไม่ตรงเวลา",
    "exampleJa": "彼は不規則な食事のせいで胃が痛い。"
  },
  {
    "id": 425,
    "word": "กลับมา",
    "meaning": "戻ってくる",
    "pronunciation": "klàpmaa",
    "frequency": "7回中2回",
    "exampleTh": "พ่อจะกลับมาจากทำงานตอนค่ำ",
    "exampleJa": "父は夜に仕事から戻ってきます。"
  },
  {
    "id": 426,
    "word": "กลัว",
    "meaning": "怖がる、恐れる",
    "pronunciation": "klua",
    "frequency": "7回中2回",
    "exampleTh": "เด็กคนนี้กลัวความมืด",
    "exampleJa": "この子は暗闇を怖がっている。"
  },
  {
    "id": 427,
    "word": "กลายเป็น",
    "meaning": "〜になる、化す",
    "pronunciation": "klaaypen",
    "frequency": "7回中2回",
    "exampleTh": "น้ำกลายเป็นน้ำแข็งในตู้เย็น",
    "exampleJa": "水は冷蔵庫で氷になる。"
  },
  {
    "id": 428,
    "word": "กัน",
    "meaning": "互いに、防ぐ",
    "pronunciation": "kan",
    "frequency": "7回中2回",
    "exampleTh": "เราช่วยกันทำงานจนเสร็จ",
    "exampleJa": "私たちは協力して仕事を終わらせた。"
  },
  {
    "id": 429,
    "word": "การบ้าน",
    "meaning": "宿題",
    "pronunciation": "kaambaan",
    "frequency": "7回中2回",
    "exampleTh": "ครูสั่งการบ้านวิชาคณิตศาสตร์",
    "exampleJa": "先生は数学の宿題を出した。"
  },
  {
    "id": 430,
    "word": "กำหนด",
    "meaning": "規定する、指定する",
    "pronunciation": "kamnòt",
    "frequency": "7回中2回",
    "exampleTh": "บริษัทกำหนดวันส่งงานสัปดาห์หน้า",
    "exampleJa": "会社は来週の納期を指定した。"
  },
  {
    "id": 431,
    "word": "กุ้ง",
    "meaning": "エビ",
    "pronunciation": "kûŋ",
    "frequency": "7回中2回",
    "exampleTh": "แม่ทำต้มยำกุ้งให้กินตอนเย็น",
    "exampleJa": "母は夕方にトムヤムクンを作ってくれた。"
  },
  {
    "id": 432,
    "word": "เก็บ",
    "meaning": "集める、拾う、保管する",
    "pronunciation": "kèp",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาเก็บขยะไปทิ้งด้วยครับ",
    "exampleJa": "ゴミを拾って捨ててください。"
  },
  {
    "id": 433,
    "word": "เกรงใจ",
    "meaning": "遠慮する、気を使う",
    "pronunciation": "kreŋcay",
    "frequency": "7回中2回",
    "exampleTh": "ฉันเกรงใจที่จะรบกวนเวลาพักผ่อนของเขา",
    "exampleJa": "彼の休息時間を邪魔するのは気が引ける。"
  },
  {
    "id": 434,
    "word": "เกิดขึ้น",
    "meaning": "起こる、発生する",
    "pronunciation": "kə̀etkhʉ̂n",
    "frequency": "7回中2回",
    "exampleTh": "อุบัติเหตุเกิดขึ้นที่หน้าปากซอย",
    "exampleJa": "交差点の角で事故が発生した。"
  },
  {
    "id": 435,
    "word": "เกินไป",
    "meaning": "〜すぎる",
    "pronunciation": "kəanpay",
    "frequency": "7回中2回",
    "exampleTh": "กาแฟแก้วนี้หวานเกินไปสำหรับฉัน",
    "exampleJa": "このコーヒーは私には甘すぎる。"
  },
  {
    "id": 436,
    "word": "เกือบ",
    "meaning": "ほとんど、〜しかける",
    "pronunciation": "kʉ̀ap",
    "frequency": "7回中2回",
    "exampleTh": "รถคันนั้นเกือบชนเสาไฟ",
    "exampleJa": "あの車は電柱に衝突しかけた。"
  },
  {
    "id": 437,
    "word": "แก้",
    "meaning": "直す、解決する",
    "pronunciation": "kɛ̂ɛ",
    "frequency": "7回中2回",
    "exampleTh": "เราต้องช่วยกันแก้ปัญหานี้",
    "exampleJa": "私たちはこの問題を解決するために協力しなければならない。"
  },
  {
    "id": 438,
    "word": "ใกล้เคียง",
    "meaning": "近い、類似した",
    "pronunciation": "klâykhiiaŋ",
    "frequency": "7回中2回",
    "exampleTh": "ราคาของสองร้านนี้ใกล้เคียงกันมาก",
    "exampleJa": "この2つの店の価格は非常に近い。"
  },
  {
    "id": 439,
    "word": "ไกล",
    "meaning": "遠い",
    "pronunciation": "klay",
    "frequency": "7回中2回",
    "exampleTh": "บ้านของฉันอยู่ไกลจากโรงเรียนมาก",
    "exampleJa": "私の家は学校からとても遠い。"
  },
  {
    "id": 440,
    "word": "ขณะ",
    "meaning": "〜のとき、瞬間",
    "pronunciation": "khanàʔ",
    "frequency": "7回中2回",
    "exampleTh": "ไฟดับขณะที่ฉันกำลังอาบน้ำ",
    "exampleJa": "シャワーを浴びている時に停電した。"
  },
  {
    "id": 441,
    "word": "ขณะนี้",
    "meaning": "現在、ただいま",
    "pronunciation": "khanàʔnîi",
    "frequency": "7回中2回",
    "exampleTh": "ขณะนี้เครื่องบินกำลังเตรียมลงจอด",
    "exampleJa": "ただいま飛行機は着陸の準備をしています。"
  },
  {
    "id": 442,
    "word": "ขนาด",
    "meaning": "サイズ、大きさ",
    "pronunciation": "khnàat",
    "frequency": "7回中2回",
    "exampleTh": "เสื้อตัวนี้มีขนาดใหญ่เกินไป",
    "exampleJa": "この服はサイズが大きすぎる。"
  },
  {
    "id": 443,
    "word": "ขยัน",
    "meaning": "勤勉な、熱心な",
    "pronunciation": "khayǎn",
    "frequency": "7回中2回",
    "exampleTh": "เขาเป็นคนขยันทำงานมาก",
    "exampleJa": "彼はとても熱心に働く人だ。"
  },
  {
    "id": 444,
    "word": "ของขวัญ",
    "meaning": "プレゼント、贈り物",
    "pronunciation": "khɔ̌ɔŋkhwǎn",
    "frequency": "7回中2回",
    "exampleTh": "เพื่อนส่งของขวัญวันเกิดมาให้ฉัน",
    "exampleJa": "友達が誕生日のプレゼントを送ってくれた。"
  },
  {
    "id": 445,
    "word": "ขัด",
    "meaning": "磨く、逆らう",
    "pronunciation": "khàt",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาช่วยขัดพื้นห้องน้ำให้สะอาดด้วย",
    "exampleJa": "浴室の床をきれいに磨いてください。"
  },
  {
    "id": 446,
    "word": "ขัดแย้ง",
    "meaning": "矛盾する、対立する",
    "pronunciation": "khàtyɛ́ɛŋ",
    "frequency": "7回中2回",
    "exampleTh": "ความคิดเห็นของสองฝ่ายขัดแย้งกันอย่างสิ้นเชิง",
    "exampleJa": "両者の意見は完全に矛盾している。"
  },
  {
    "id": 447,
    "word": "ขับรถ",
    "meaning": "車を運転する",
    "pronunciation": "khàprót",
    "frequency": "7回中2回",
    "exampleTh": "เขาขับรถไปทำงานทุกวัน",
    "exampleJa": "彼は毎日車を運転して通勤している。"
  },
  {
    "id": 448,
    "word": "ขา",
    "meaning": "脚",
    "pronunciation": "khǎa",
    "frequency": "7回中2回",
    "exampleTh": "เขาวิ่งจนเจ็บขาไปหมด",
    "exampleJa": "彼は走りすぎて足が痛くなった。"
  },
  {
    "id": 449,
    "word": "ขาด",
    "meaning": "不足する、破れる",
    "pronunciation": "khàat",
    "frequency": "7回中2回",
    "exampleTh": "กระดาษแผ่นนี้ขาดครึ่ง",
    "exampleJa": "この紙は半分に破れている。"
  },
  {
    "id": 450,
    "word": "ขาว",
    "meaning": "白い",
    "pronunciation": "khǎaw",
    "frequency": "7回中2回",
    "exampleTh": "สุนัขตัวนั้นมีขนสีขาวสะอาด",
    "exampleJa": "あの犬は清潔な白い毛をしている。"
  },
  {
    "id": 451,
    "word": "ข่าว",
    "meaning": "ニュース",
    "pronunciation": "khàaw",
    "frequency": "7回中2回",
    "exampleTh": "ฉันชอบดูข่าวต่างประเทศตอนเช้า",
    "exampleJa": "私は朝に海外のニュースを見るのが好きだ。"
  },
  {
    "id": 452,
    "word": "ขี้เกียจ",
    "meaning": "怠惰な、面倒く사がる",
    "pronunciation": "khîikiat",
    "frequency": "7回中2回",
    "exampleTh": "วันนี้อากาศร้อนจนฉันรู้สึกขี้เกียจ",
    "exampleJa": "今日は暑くて怠けたい気分だ。"
  },
  {
    "id": 453,
    "word": "เข้ามา",
    "meaning": "入ってくる",
    "pronunciation": "khâomaa",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาเข้ามาข้างในก่อนครับ",
    "exampleJa": "どうぞ中に入ってください。"
  },
  {
    "id": 454,
    "word": "แข่ง",
    "meaning": "競争する",
    "pronunciation": "khɛ̀ŋ",
    "frequency": "7回中2回",
    "exampleTh": "พวกเขากำลังแข่งฟุตบอลอย่างสนุกสนาน",
    "exampleJa": "彼らは楽しそうにサッカーの試合をしている。"
  },
  {
    "id": 455,
    "word": "แข็งแรง",
    "meaning": "丈夫な、健康な",
    "pronunciation": "khɛ̌ŋrɛɛŋ",
    "frequency": "7回中2回",
    "exampleTh": "ออกกำลังกายช่วยให้ร่างกายแข็งแรง",
    "exampleJa": "運動は体を健康にするのに役立つ。"
  },
  {
    "id": 456,
    "word": "คงจะ",
    "meaning": "おそらく〜だろう",
    "pronunciation": "khoŋcàʔ",
    "frequency": "7回中2回",
    "exampleTh": "พรุ่งนี้ฝนคงจะตกหนักอีกวัน",
    "exampleJa": "明日はおそらくまた大雨が降るだろう。"
  },
  {
    "id": 457,
    "word": "คนเดียว",
    "meaning": "一人、単独で",
    "pronunciation": "khondiaw",
    "frequency": "7回中2回",
    "exampleTh": "เขาชอบเดินทางไปเที่ยวคนเดียว",
    "exampleJa": "彼は一人で旅行するのが好きだ。"
  },
  {
    "id": 458,
    "word": "คนไทย",
    "meaning": "タイ人",
    "pronunciation": "khonthay",
    "frequency": "7回中2回",
    "exampleTh": "คนไทยส่วนใหญ่มีอัธยาศัยดีและยิ้มแย้ม",
    "exampleJa": "タイ人の多くは親切でよく微笑む。"
  },
  {
    "id": 459,
    "word": "คนร้าย",
    "meaning": "犯人、悪人",
    "pronunciation": "khonráay",
    "frequency": "7回中2回",
    "exampleTh": "ตำตรวจจับคนร้ายที่ขโมยเงินได้แล้ว",
    "exampleJa": "警察は金を盗んだ犯人をすでに逮捕した。"
  },
  {
    "id": 460,
    "word": "ครอบครัว",
    "meaning": "家族",
    "pronunciation": "khrɔ̂ɔpkhrua",
    "frequency": "7回中2回",
    "exampleTh": "ครอบครัวของฉันจะไปเที่ยวทะเลสุดสัปดาห์นี้",
    "exampleJa": "私の家族は今週末に海へ旅行に行きます。"
  },
  {
    "id": 461,
    "word": "ความ",
    "meaning": "事、〜性",
    "pronunciation": "khwaam",
    "frequency": "7回中2回",
    "exampleTh": "ความรักทำให้ชีวิตมีความสุข",
    "exampleJa": "愛は人生を幸せにする。"
  },
  {
    "id": 462,
    "word": "ความสำคัญ",
    "meaning": "重要性",
    "pronunciation": "khwaamsǎmkhanti",
    "frequency": "7回中2回",
    "exampleTh": "การศึกษามีความสำคัญต่ออนาคตของเด็ก",
    "exampleJa": "教育は子供たちの将来にとって重要だ。"
  },
  {
    "id": 463,
    "word": "ความสำเร็จ",
    "meaning": "成功",
    "pronunciation": "khwaamsǎmret",
    "frequency": "7回中2回",
    "exampleTh": "ความพยายามเป็นกุญแจสู่ความสำเร็จ",
    "exampleJa": "努力は成功への鍵である。"
  },
  {
    "id": 464,
    "word": "คะ",
    "meaning": "〜ですか（女性用）",
    "pronunciation": "kháʔ",
    "frequency": "7回中2回",
    "exampleTh": "สวัสดีค่ะ วันนี้รับอะไรดีคะ",
    "exampleJa": "こんにちは。本日は何にいたしますか？"
  },
  {
    "id": 465,
    "word": "ค่ารถ",
    "meaning": "乗車運賃、交通費",
    "pronunciation": "khâarót",
    "frequency": "7回中2回",
    "exampleTh": "ค่ารถไฟฟ้าในกรุงเทพฯ แพงขึ้นเรื่อยๆ",
    "exampleJa": "バンコクの電車の運賃はどんどん高くなっている。"
  },
  {
    "id": 466,
    "word": "คำศัพท์",
    "meaning": "単語、語彙",
    "pronunciation": "khamsàp",
    "frequency": "7回中2回",
    "exampleTh": "การฝึกพิมพ์ช่วยให้จำคำศัพท์ได้เร็วขึ้น",
    "exampleJa": "タイピングの練習は単語を早く覚えるのに役立つ。"
  },
  {
    "id": 467,
    "word": "คิดถึง",
    "meaning": "恋しい、思う",
    "pronunciation": "khítthʉ̌ŋ",
    "frequency": "7回中2回",
    "exampleTh": "ฉันคิดถึงครอบครัวที่อยู่ญี่ปุ่นมาก",
    "exampleJa": "私は日本にいる家族がとても恋しい。"
  },
  {
    "id": 468,
    "word": "คิดว่า",
    "meaning": "〜と思う、考える",
    "pronunciation": "khítwâa",
    "frequency": "7回中2回",
    "exampleTh": "ฉันคิดว่าแผนการนี้จะผ่านการอนุมัติ",
    "exampleJa": "私はこの計画が承認されると思う。"
  },
  {
    "id": 469,
    "word": "คืน",
    "meaning": "夜、返す",
    "pronunciation": "khʉʉn",
    "frequency": "7回中2回",
    "exampleTh": "กรุณานำหนังสือมาคืนห้องสมุดตามกำหนด",
    "exampleJa": "指定された日までに本を図書館に返却してください。"
  },
  {
    "id": 470,
    "word": "คุย",
    "meaning": "話す、おしゃべりする",
    "pronunciation": "khuy",
    "frequency": "7回中2回",
    "exampleTh": "พวกเรานั่งคุยเรื่องงานกันในร้านกาแฟ",
    "exampleJa": "私たちはカフェで仕事について話し合っていた。"
  },
  {
    "id": 471,
    "word": "เคย",
    "meaning": "〜したことがある",
    "pronunciation": "khəəy",
    "frequency": "7回中2回",
    "exampleTh": "เขาเคยไปเรียนต่อที่ประเทศญี่ปุ่นสองปี",
    "exampleJa": "彼は日本に2年間留学したことがある。"
  },
  {
    "id": 472,
    "word": "เครื่อง",
    "meaning": "機械、〜台",
    "pronunciation": "khrʉ̂aŋ",
    "frequency": "7回中2回",
    "exampleTh": "เครื่องซักผ้าเครื่องนี้ทำงานเงียบมาก",
    "exampleJa": "この洗濯機はとても静かに作動する。"
  },
  {
    "id": 473,
    "word": "เครื่องบิน",
    "meaning": "飛行機",
    "pronunciation": "khrʉ̂aŋbin",
    "frequency": "7回中2回",
    "exampleTh": "การเดินทางด้วยเครื่องบินสะดวกและรวดเร็ว",
    "exampleJa": "飛行機での旅行は便利で速い。"
  },
  {
    "id": 474,
    "word": "งั้น",
    "meaning": "それなら、そのように",
    "pronunciation": "ŋán",
    "frequency": "7回中2回",
    "exampleTh": "งั้นเราไปกินข้าวกันเถอะ",
    "exampleJa": "それじゃあ、ご飯を食べに行きましょう。"
  },
  {
    "id": 475,
    "word": "งาม",
    "meaning": "美しい、見事な",
    "pronunciation": "ngaam",
    "frequency": "7回中2回",
    "exampleTh": "ดอกไม้ในสวนบานสะพรั่งอย่างงดงาม",
    "exampleJa": "庭の花々が見事に咲き誇っています。"
  },
  {
    "id": 476,
    "word": "เงินทอน",
    "meaning": "お釣り",
    "pronunciation": "ŋənthɔɔn",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาตรวจสอบเงินทอนก่อนออกจากร้าน",
    "exampleJa": "店を出る前にお釣りを確認してください。"
  },
  {
    "id": 477,
    "word": "จดหมาย",
    "meaning": "手紙",
    "pronunciation": "còtmǎay",
    "frequency": "7回中2回",
    "exampleTh": "ฉันเขียนจดหมายส่งถึงเพื่อนเก่า",
    "exampleJa": "私は古い友人に手紙を書いた。"
  },
  {
    "id": 478,
    "word": "จนกว่า",
    "meaning": "〜するまで",
    "pronunciation": "conkwâa",
    "frequency": "7回中2回",
    "exampleTh": "เราจะรอที่นี่จนกว่าเขาจะกลับมา",
    "exampleJa": "私たちは彼が戻るまでここで待ちます。"
  },
  {
    "id": 479,
    "word": "จบ",
    "meaning": "終わる、卒業する",
    "pronunciation": "cop",
    "frequency": "7回中2回",
    "exampleTh": "เขาเรียนจบวิศวกรรมศาสตร์ปีนี้",
    "exampleJa": "彼は今年工学部を卒業した。"
  },
  {
    "id": 480,
    "word": "จราจร",
    "meaning": "交通",
    "pronunciation": "caracɔɔn",
    "frequency": "7回中2回",
    "exampleTh": "ช่วงเช้าการจราจรในกรุงเทพฯ ติดขัดมาก",
    "exampleJa": "朝の時間帯、バンコクの交通は非常に混雑している。"
  },
  {
    "id": 481,
    "word": "จอง",
    "meaning": "予約する",
    "pronunciation": "cɔɔŋ",
    "frequency": "7回中2回",
    "exampleTh": "ฉันจองโต๊ะร้านอาหารสำหรับคืนนี้แล้ว",
    "exampleJa": "私は今夜のレストランの席をすでに予約した。"
  },
  {
    "id": 482,
    "word": "จังหวัด",
    "meaning": "県",
    "pronunciation": "caŋwàt",
    "frequency": "7回中2回",
    "exampleTh": "จังหวัดเชียงใหม่มีสถานที่ท่องเที่ยวสวยงามมากมาย",
    "exampleJa": "チェンマイ県には美しい観光地がたくさんあります。"
  },
  {
    "id": 483,
    "word": "จำนวนมาก",
    "meaning": "多数、大量の",
    "pronunciation": "camnuanmâak",
    "frequency": "7回中2回",
    "exampleTh": "มีคนจำนวนมากมาร่วมงานเทศกาลปีนี้",
    "exampleJa": "今年のフェスティバルには非常に多くの人が集まった。"
  },
  {
    "id": 484,
    "word": "จุด",
    "meaning": "点、スポット、火をつける",
    "pronunciation": "cùt",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาช่วยจุดไฟให้หน่อยครับ",
    "exampleJa": "火をつけていただけますか。"
  },
  {
    "id": 485,
    "word": "จุดประสงค์",
    "meaning": "目的、意図",
    "pronunciation": "cùtprasǒŋ",
    "frequency": "7回中2回",
    "exampleTh": "จุดประสงค์ของโครงการนี้คือการลดขยะ",
    "exampleJa": "このプロジェクトの目的はゴミの削減です。"
  },
  {
    "id": 486,
    "word": "เจ็บ",
    "meaning": "痛い、痛む",
    "pronunciation": "cèp",
    "frequency": "7回中2回",
    "exampleTh": "เขารู้สึกเจ็บคอเนื่องจากเป็นหวัด",
    "exampleJa": "彼は風邪のせいで喉が痛い。"
  },
  {
    "id": 487,
    "word": "เจอกัน",
    "meaning": "会う、また会いましょう",
    "pronunciation": "cəəkan",
    "frequency": "7回中2回",
    "exampleTh": "พรุ่งนี้เจอกันตอนเก้าโมงเช้านะครับ",
    "exampleJa": "明日、朝の9時に会いましょう。"
  },
  {
    "id": 488,
    "word": "เจ้าหน้าที่",
    "meaning": "職員、担当者",
    "pronunciation": "câonâathîi",
    "frequency": "7回中2回",
    "exampleTh": "เจ้าหน้าที่กำลังอธิบายขั้นตอนการลงทะเบียน",
    "exampleJa": "職員が登録の手続きを説明している。"
  },
  {
    "id": 489,
    "word": "ใจดี",
    "meaning": "親切な、心優しい",
    "pronunciation": "caydii",
    "frequency": "7回中2回",
    "exampleTh": "คุณครูคนนั้นใจดีและใส่ใจนักเรียนทุกคน",
    "exampleJa": "あの先生は親切で、すべての生徒に気を配っている。"
  },
  {
    "id": 490,
    "word": "ฉะนั้น",
    "meaning": "それゆえに、したがって",
    "pronunciation": "chanán",
    "frequency": "7回中2回",
    "exampleTh": "วันนี้มีประชุมสำคัญ ฉะนั้นห้ามมาสาย",
    "exampleJa": "今日は重要な会議があるので、遅刻してはいけません。"
  },
  {
    "id": 491,
    "word": "เฉลย",
    "meaning": "解答する、明らかにする",
    "pronunciation": "chalə̌əy",
    "frequency": "7回中2回",
    "exampleTh": "ครูจะเฉลยข้อสอบหลังคาบเรียนนี้",
    "exampleJa": "先生はこの授業の後にテストの解答を発表します。"
  },
  {
    "id": 492,
    "word": "ชน",
    "meaning": "ぶつかる、衝突する",
    "pronunciation": "chon",
    "frequency": "7回中2回",
    "exampleTh": "รถยนต์สองคันชนกันที่สี่แยก",
    "exampleJa": "2台の車が交差点で衝突した。"
  },
  {
    "id": 493,
    "word": "ชนิด",
    "meaning": "種類",
    "pronunciation": "chanít",
    "frequency": "7回中2回",
    "exampleTh": "ร้านนี้มีไอศกรีมให้เลือกหลายชนิด",
    "exampleJa": "この店にはたくさんの種類のアイスクリームがある。"
  },
  {
    "id": 494,
    "word": "ช่วงนี้",
    "meaning": "最近、この頃",
    "pronunciation": "chûaŋnîi",
    "frequency": "7回中2回",
    "exampleTh": "ช่วงนี้ฉันงานยุ่งจนไม่มีเวลาพักผ่อน",
    "exampleJa": "最近は仕事が忙しくて休む暇がない。"
  },
  {
    "id": 495,
    "word": "ชัดเจน",
    "meaning": "明確な、はっきりした",
    "pronunciation": "chátceen",
    "frequency": "7回中2回",
    "exampleTh": "เขาอธิบายแผนการทำงานได้อย่างชัดเจน",
    "exampleJa": "彼は仕事の計画を明確に説明した。"
  },
  {
    "id": 496,
    "word": "ชั้น",
    "meaning": "階、学年、クラス",
    "pronunciation": "chán",
    "frequency": "7回中2回",
    "exampleTh": "ออฟฟิศของเราอยู่บนชั้นห้าของตึกนี้",
    "exampleJa": "私たちのオフィスはこのビルの5階にあります。"
  },
  {
    "id": 497,
    "word": "ชาติ",
    "meaning": "国家、生まれ",
    "pronunciation": "châat",
    "frequency": "7回中2回",
    "exampleTh": "การรักษาวัฒนธรรมเป็นหน้าที่ของคนในชาติ",
    "exampleJa": "文化を守ることは国民の義務である。"
  },
  {
    "id": 498,
    "word": "ชาย",
    "meaning": "男性",
    "pronunciation": "chaay",
    "frequency": "7回中2回",
    "exampleTh": "เด็กชายคนนั้นกำลังเล่นของเล่น",
    "exampleJa": "あの男の子はおもちゃで遊んでいる。"
  },
  {
    "id": 499,
    "word": "เชิญ",
    "meaning": "招待する、どうぞ",
    "pronunciation": "chəən",
    "frequency": "7回中2回",
    "exampleTh": "เชิญนั่งพักผ่อนตามสบายเลยครับ",
    "exampleJa": "どうぞご自由にお座りになって休んでください。"
  },
  {
    "id": 500,
    "word": "โชค",
    "meaning": "運、幸運",
    "pronunciation": "chôok",
    "frequency": "7回中2回",
    "exampleTh": "ขอให้คุณโชคดีในการสอบวันพรุ่งนี้",
    "exampleJa": "明日の試験の幸運を祈ります。"
  },
  {
    "id": 501,
    "word": "ใช้เวลา",
    "meaning": "時間を費やす",
    "pronunciation": "cháiwelaa",
    "frequency": "7回中2回",
    "exampleTh": "การเดินทางไปพัทยาใช้เวลาประมาณสองชั่วโมง",
    "exampleJa": "パタヤへの移動には約2時間かかります。"
  },
  {
    "id": 502,
    "word": "ซ่อม",
    "meaning": "修理する",
    "pronunciation": "sɔ̂ɔm",
    "frequency": "7回中2回",
    "exampleTh": "ช่างกำลังซ่อมเครื่องปรับอากาศที่บ้าน",
    "exampleJa": "技術者が家でエアコンを修理している。"
  },
  {
    "id": 503,
    "word": "ด่วน",
    "meaning": "急ぎの、至急の",
    "pronunciation": "dùan",
    "frequency": "7回中2回",
    "exampleTh": "เอกสารด่วนชิ้นนี้ต้องส่งให้หัวหน้าทันที",
    "exampleJa": "この急ぎの書類はすぐに上司に送らなければならない。"
  },
  {
    "id": 504,
    "word": "ดังนี้",
    "meaning": "次の通り",
    "pronunciation": "daŋnîi",
    "frequency": "7回中2回",
    "exampleTh": "วิธีการลงทะเบียนมีรายละเอียดดังนี้",
    "exampleJa": "登録手順の詳細は次の通りです。"
  },
  {
    "id": 505,
    "word": "ดับ",
    "meaning": "消える、消す",
    "pronunciation": "dàp",
    "frequency": "7回中2回",
    "exampleTh": "อย่าลืมดับไฟทุกครั้งก่อนออกจากบ้าน",
    "exampleJa": "家を出る前には必ず電気を消してください。"
  },
  {
    "id": 506,
    "word": "ด้าน",
    "meaning": "側面、分野、〜に関して",
    "pronunciation": "dâan",
    "frequency": "7回中2回",
    "exampleTh": "เขาเชี่ยวชาญด้านการพัฒนาซอฟต์แวร์",
    "exampleJa": "彼はソフトウェア開発の分野に長けている。"
  },
  {
    "id": 507,
    "word": "ดิน",
    "meaning": "土、土地",
    "pronunciation": "din",
    "frequency": "7回中2回",
    "exampleTh": "เด็กๆ ชอบเล่นทรายและดินในสวน",
    "exampleJa": "子供たちは庭で砂や土で遊ぶのが好きだ。"
  },
  {
    "id": 508,
    "word": "ดีกว่า",
    "meaning": "〜の方が良い",
    "pronunciation": "diikwàa",
    "frequency": "7回中2回",
    "exampleTh": "ฉันคิดว่าไปรถไฟจะดีกว่าขับรถไปเอง",
    "exampleJa": "自分で車を運転するより電車で行く方が良いと思う。"
  },
  {
    "id": 509,
    "word": "ดีใจ",
    "meaning": "嬉しく思う",
    "pronunciation": "diicay",
    "frequency": "7回中2回",
    "exampleTh": "ฉันดีใจมากที่ได้รับเลือกให้ทำงานนี้",
    "exampleJa": "この仕事に選ばれてとても嬉しい。"
  },
  {
    "id": 510,
    "word": "ดื่ม",
    "meaning": "飲む",
    "pronunciation": "dʉ̀ʉm",
    "frequency": "7回中2回",
    "exampleTh": "การดื่มน้ำมากๆ ดีต่อสุขภาพร่างกาย",
    "exampleJa": "水をたくさん飲むことは体に良い。"
  },
  {
    "id": 511,
    "word": "ดูแล",
    "meaning": "世話をする、管理する",
    "pronunciation": "duulɛɛ",
    "frequency": "7回中2回",
    "exampleTh": "เธอต้องดูแลแมวของเธอให้ดี",
    "exampleJa": "彼女は自分の猫をよく世話しなければならない。"
  },
  {
    "id": 512,
    "word": "เดิม",
    "meaning": "元の、以前の",
    "pronunciation": "dəəm",
    "frequency": "7回中2回",
    "exampleTh": "พนักงานทุกคนยังคงทำงานที่ตำแหน่งเดิม",
    "exampleJa": "すべての従業員は依然として元のポジションで働いている。"
  },
  {
    "id": 513,
    "word": "เดียวกัน",
    "meaning": "同じ",
    "pronunciation": "diawkan",
    "frequency": "7回中2回",
    "exampleTh": "พวกเราเรียนอยู่ห้องเรียนเดียวกัน",
    "exampleJa": "私たちは同じ教室で勉強している。"
  },
  {
    "id": 514,
    "word": "เดี๋ยวนี้",
    "meaning": "今すぐ、ただちに",
    "pronunciation": "diawnîi",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาส่งรายงานชิ้นนี้ให้ฉันเดี๋ยวนี้",
    "exampleJa": "今すぐこのレポートを私に提出してください。"
  },
  {
    "id": 515,
    "word": "ต้น",
    "meaning": "始まり、木、〜の元",
    "pronunciation": "tôn",
    "frequency": "7回中2回",
    "exampleTh": "ต้นไม้ในสวนเริ่มออกดอกสวยงาม",
    "exampleJa": "庭の木々が美しい花を咲かせ始めた。"
  },
  {
    "id": 516,
    "word": "ต้ม",
    "meaning": "煮る、茹でる",
    "pronunciation": "tôm",
    "frequency": "7回中2回",
    "exampleTh": "แม่ต้มไข่สำหรับมื้อเช้าให้ฉัน",
    "exampleJa": "母は私の朝食用に卵を茹でてくれた。"
  },
  {
    "id": 517,
    "word": "ต้มยำ",
    "meaning": "トムヤム",
    "pronunciation": "tômyam",
    "frequency": "7回中2回",
    "exampleTh": "ต้มยำกุ้งเป็นอาหารไทยที่มีชื่อเสียงทั่วโลก",
    "exampleJa": "トムヤムกุ้งは世界的に有名なタイ料理です。"
  },
  {
    "id": 518,
    "word": "ตรง",
    "meaning": "まっすぐな、正確な",
    "pronunciation": "troŋ",
    "frequency": "7回中2回",
    "exampleTh": "รถคันนี้วิ่งตรงไปตามถนนใหญ่",
    "exampleJa": "この車は大通りをまっすぐ走っている。"
  },
  {
    "id": 519,
    "word": "ตรงกับ",
    "meaning": "〜に一致する、〜に当たる",
    "pronunciation": "troŋkàp",
    "frequency": "7回中2回",
    "exampleTh": "วันหยุดยาวตรงกับช่วงวันเกิดของฉันพอดี",
    "exampleJa": "連休がちょうど私の誕生日の時期と重なっている。"
  },
  {
    "id": 520,
    "word": "ตรวจ",
    "meaning": "検査する",
    "pronunciation": "trùat",
    "frequency": "7回中2回",
    "exampleTh": "หมอกำลังตรวจร่างกายของคนไข้อย่างละเอียด",
    "exampleJa": "医師は患者の体を詳細に検査している。"
  },
  {
    "id": 521,
    "word": "ตลก",
    "meaning": "面白い、滑稽な",
    "pronunciation": "talòk",
    "frequency": "7回中2回",
    "exampleTh": "ภาพยนตร์เรื่องนี้ตลกมากจนฉันหัวเราะไม่หยุด",
    "exampleJa": "この映画は面白すぎて笑いが止まらなかった。"
  },
  {
    "id": 522,
    "word": "ตลอดไป",
    "meaning": "永遠に",
    "pronunciation": "talɔ̀ɔtpay",
    "frequency": "7回中2回",
    "exampleTh": "ฉันจะจดจำความทรงจำดีๆ นี้ตลอดไป",
    "exampleJa": "私はこの素晴らしい思い出を永遠に覚えているだろう。"
  },
  {
    "id": 523,
    "word": "ตลอดเวลา",
    "meaning": "常に、四六時中",
    "pronunciation": "talɔ̀ɔtwelaa",
    "frequency": "7回中2回",
    "exampleTh": "เขาตั้งใจทำงานตลอดเวลาที่อยู่ในออฟฟิศ",
    "exampleJa": "彼はオフィスにいる間、常に熱心に働いている。"
  },
  {
    "id": 524,
    "word": "ต้อนรับ",
    "meaning": "歓迎する",
    "pronunciation": "tɔ̂nráp",
    "frequency": "7回中2回",
    "exampleTh": "โรงแรมนี้ต้อนรับลูกค้าด้วยความอบอุ่นเสมอ",
    "exampleJa": "このホテルは常に温かく顧客を歓迎します。"
  },
  {
    "id": 525,
    "word": "ตั้งแต่",
    "meaning": "〜から、〜以来",
    "pronunciation": "taŋtɛ̀ɛ",
    "frequency": "7回中2回",
    "exampleTh": "เขาทำงานที่บริษัทนี้ตั้งแต่เรียนจบ",
    "exampleJa": "เขาทำงานที่บริษัทนี้ตั้งแต่เรียนจบ"
  },
  {
    "id": 526,
    "word": "ตัด",
    "meaning": "切る",
    "pronunciation": "tàt",
    "frequency": "7回中2回",
    "exampleTh": "ช่างตัดผมกำลังตัดผมให้ลูกค้าอย่างตั้งใจ",
    "exampleJa": "美容師は客の髪を丁寧にカットしている。"
  },
  {
    "id": 527,
    "word": "ตั๋ว",
    "meaning": "チケット、切符",
    "pronunciation": "tǔa",
    "frequency": "7回中2回",
    "exampleTh": "ฉันจองตั๋วเครื่องบินไปเที่ยวภูเก็ตแล้ว",
    "exampleJa": "ฉันจองตั๋วเครื่องบินไปเที่ยวภูเก็ตแล้ว"
  },
  {
    "id": 528,
    "word": "ตัวอย่าง",
    "meaning": "サンプル、模範",
    "pronunciation": "tuayàaŋ",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาดูตัวอย่างการเขียนรายงานในหนังสือ",
    "exampleJa": "本の中のレポート執筆サンプルを参照してください。"
  },
  {
    "id": 529,
    "word": "ต่างจังหวัด",
    "meaning": "地方、他県",
    "pronunciation": "tàaŋcaŋwàt",
    "frequency": "7回中2回",
    "exampleTh": "คนจำนวนมากเดินทางกลับต่างจังหวัดช่วงปีใหม่",
    "exampleJa": "多くの人が年末年始に地方へ帰省する。"
  },
  {
    "id": 530,
    "word": "ตามใจ",
    "meaning": "気に任せる、わがままにさせる",
    "pronunciation": "taamcay",
    "frequency": "7回中2回",
    "exampleTh": "แล้วแต่คุณเลย ฉันตามใจคุณอยู่แล้ว",
    "exampleJa": "แล้วแต่คุณเลย ฉันตามใจคุณอยู่แล้ว"
  },
  {
    "id": 531,
    "word": "ตึก",
    "meaning": "ビル、建物",
    "pronunciation": "tʉ̀k",
    "frequency": "7回中2回",
    "exampleTh": "ตึกสูงระฟ้าตั้งอยู่ใจกลางกรุงเทพมหานคร",
    "exampleJa": "ตึกสูงระฟ้าตั้งอยู่ใจกลางกรุงเทพมหานคร"
  },
  {
    "id": 532,
    "word": "เตรียม",
    "meaning": "準備する",
    "pronunciation": "triiam",
    "frequency": "7回中2回",
    "exampleTh": "พวกเรากำลังเตรียมจัดงานปาร์ตี้คืนนี้",
    "exampleJa": "พวกเรากำลังเตรียมจัดงานปาร์ตี้คืนนี้"
  },
  {
    "id": 533,
    "word": "เติม",
    "meaning": "満たす、追加する",
    "pronunciation": "təəm",
    "frequency": "7回中2回",
    "exampleTh": "เขาแวะปั๊มเพื่อเติมน้ำมันก่อนเดินทางไกล",
    "exampleJa": "彼は長距離運転の前に給油するためにガソリンスタンドに寄った。"
  },
  {
    "id": 534,
    "word": "แต่งงาน",
    "meaning": "結婚する",
    "pronunciation": "tɛ̀ŋŋaan",
    "frequency": "7回中2回",
    "exampleTh": "ทั้งสองคนตกลงจะแต่งงานกันปีหน้า",
    "exampleJa": "2人は来年結婚することに同意した。"
  },
  {
    "id": 535,
    "word": "แต่ละ",
    "meaning": "それぞれの",
    "pronunciation": "tɛ̀làʔ",
    "frequency": "7回中2回",
    "exampleTh": "พนักงานแต่ละคนมีหน้าที่รับผิดชอบต่างกัน",
    "exampleJa": "従業員はそれぞれ異なる責任を持っている。"
  },
  {
    "id": 536,
    "word": "แต่ว่า",
    "meaning": "しかし、けれども",
    "pronunciation": "tɛ̀ɛwâa",
    "frequency": "7回中2回",
    "exampleTh": "อยากไปเที่ยวแต่ว่าช่วงนี้ไม่มีเวลาเลย",
    "exampleJa": "旅行に行きたいけれど、最近は全然時間がない。"
  },
  {
    "id": 537,
    "word": "ใต้",
    "meaning": "下、南",
    "pronunciation": "tâay",
    "frequency": "7回中2回",
    "exampleTh": "แมวนอนหลับอยู่ใต้โต๊ะในห้องนั่งเล่น",
    "exampleJa": "猫がリビングのテーブルの下で眠っている。"
  },
  {
    "id": 538,
    "word": "แถม",
    "meaning": "おまけする",
    "pronunciation": "thɛ̌ɛm",
    "frequency": "7回中2回",
    "exampleTh": "ซื้อสองชิ้นแถมฟรีอีกหนึ่งชิ้นทันที",
    "exampleJa": "2個買うと、もう1個無料でおまけします。"
  },
  {
    "id": 539,
    "word": "แถว",
    "meaning": "列、辺り、近所",
    "pronunciation": "thɛ̌ew",
    "frequency": "7回中2回",
    "exampleTh": "แถวนี้มีร้านอาหารญี่ปุ่นอร่อยหลายร้าน",
    "exampleJa": "この辺りには美味しい日本食レストランが何軒かある。"
  },
  {
    "id": 540,
    "word": "ทน",
    "meaning": "耐える、辛抱する",
    "pronunciation": "thon",
    "frequency": "7回中2回",
    "exampleTh": "เขาต้องทนทำงานหนักเพื่อครอบครัวของเขา",
    "exampleJa": "彼は家族のために重労働に耐えなければならない。"
  },
  {
    "id": 541,
    "word": "ทราบ",
    "meaning": "知る、了解する",
    "pronunciation": "sâap",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาแจ้งให้ทราบเมื่อได้ผลการทดสอบ",
    "exampleJa": "テスト結果が分かったらお知らせください。"
  },
  {
    "id": 542,
    "word": "ท้องอืด",
    "meaning": "胃もたれ、お腹が張る",
    "pronunciation": "thɔ́ɔŋʔʉ̀at",
    "frequency": "7回中2回",
    "exampleTh": "กินอาหารเร็วเกินไปทำให้ท้องอืดได้ง่าย",
    "exampleJa": "食べるのが早すぎると胃が張りやすくなる。"
  },
  {
    "id": 543,
    "word": "ทะเลาะ",
    "meaning": "喧嘩する",
    "pronunciation": "thalɔ́ʔ",
    "frequency": "7回中2回",
    "exampleTh": "เด็กสองคนทะเลาะกันเรื่องของเล่นในบ้าน",
    "exampleJa": "2人の子供が家でおもちゃを巡って喧嘩している。"
  },
  {
    "id": 544,
    "word": "ทั้งที่",
    "meaning": "〜であるにもかかわらず",
    "pronunciation": "thaŋthîi",
    "frequency": "7回中2回",
    "exampleTh": "เขามาทำงานทั้งที่ร่างกายยังไม่แข็งแรง",
    "exampleJa": "彼は体調がまだ万全ではないにもかかわらず出勤した。"
  },
  {
    "id": 545,
    "word": "ทำตาม",
    "meaning": "従う、真似る",
    "pronunciation": "thamtam",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาทำตามคำแนะนำของแพทย์อย่างเคร่งครัด",
    "exampleJa": "医師の指示に厳密に従ってください。"
  },
  {
    "id": 546,
    "word": "ที่นั่น",
    "meaning": "あそこ、そこ",
    "pronunciation": "thîinân",
    "frequency": "7回中2回",
    "exampleTh": "ที่นั่นอากาศดีและเงียบสงบมากเหมาะกับการพักผ่อน",
    "exampleJa": "あそこは空気が良くてとても静かで、リラックスするのに適している。"
  },
  {
    "id": 547,
    "word": "ที่นี่",
    "meaning": "ここ",
    "pronunciation": "thîinîi",
    "frequency": "7回中2回",
    "exampleTh": "กรุณารอที่นี่จนกว่าเจ้าหน้าที่จะเรียกชื่อ",
    "exampleJa": "職員が名前を呼ぶまでここで待ってください。"
  },
  {
    "id": 548,
    "word": "ที่พัก",
    "meaning": "宿泊施設、宿",
    "pronunciation": "thîiphák",
    "frequency": "7回中2回",
    "exampleTh": "พวกเราจองที่พักริมทะเลไว้ล่วงหน้าสามเดือน",
    "exampleJa": "私たちは3ヶ月前に海辺の宿を予約した。"
  },
  {
    "id": 549,
    "word": "ทุกครั้ง",
    "meaning": "毎回、いつも",
    "pronunciation": "thúkkhráŋ",
    "frequency": "7回中2回",
    "exampleTh": "เขาตรวจสอบความถูกต้องทุกครั้งก่อนส่งงาน",
    "exampleJa": "彼は提出前に毎回必ず正確性を確認する。"
  },
  {
    "id": 550,
    "word": "ทุกวัน",
    "meaning": "毎日",
    "pronunciation": "thúkwan",
    "frequency": "7回中2回",
    "exampleTh": "ฉันวิ่งออกกำลังกายในสวนสาธารณะทุกวัน",
    "exampleJa": "私は毎日公園でランニングをして運動している。"
  },
  {
    "id": 551,
    "word": "เทศกาล",
    "meaning": "祭り、フェスティバル",
    "pronunciation": "thêetsakaan",
    "frequency": "7回中2回",
    "exampleTh": "เทศกาลสงกรานต์เป็นวันปีใหม่ของประเทศไทย",
    "exampleJa": "ソンクラーンフェスティバルはタイの旧正月です。"
  },
  {
    "id": 552,
    "word": "เท่าที่",
    "meaning": "〜の限りでは",
    "pronunciation": "thâothîi",
    "frequency": "7回中2回",
    "exampleTh": "เท่าที่ฉันรู้ แผนงานนี้ยังไม่มีการเปลี่ยนแปลง",
    "exampleJa": "私が知る限り、この計画はまだ変更されていない。"
  },
  {
    "id": 553,
    "word": "โทรทัศน์",
    "meaning": "テレビ",
    "pronunciation": "thoorathát",
    "frequency": "7回中2回",
    "exampleTh": "พ่อชอบนั่งดูข่าวทางโทรทัศน์ตอนหัวค่ำ",
    "exampleJa": "父は夜の初めにテレビでニュースを見るのが好きだ。"
  },
  {
    "id": 554,
    "word": "ธนาคาร",
    "meaning": "銀行",
    "pronunciation": "thanaakhaan",
    "frequency": "7回中2回",
    "exampleTh": "ฉันต้องไปเปิดบัญชีใหม่ที่ธนาคารบ่ายนี้",
    "exampleJa": "私は今日の午後、銀行で新しい口座を開設しなければならない。"
  },
  {
    "id": 555,
    "word": "ธุระ",
    "meaning": "用事、事務",
    "pronunciation": "thúráʔ",
    "frequency": "7回中2回",
    "exampleTh": "พรุ่งนี้ฉันขอลาหยุดเนื่องจากมีธุระส่วนตัว",
    "exampleJa": "明日は私用があるため休暇をいただきます。"
  },
  {
    "id": 556,
    "word": "น้อง",
    "meaning": "弟、妹、年下の人",
    "pronunciation": "nɔ́ɔŋ",
    "frequency": "7回中2回",
    "exampleTh": "น้องสาวของฉันเรียนอยู่ระดับมหาวิทยาลัย",
    "exampleJa": "私の妹は大学で勉強している。"
  },
  {
    "id": 557,
    "word": "น่าจะ",
    "meaning": "〜のはずだ、〜だろう",
    "pronunciation": "nâacàʔ",
    "frequency": "7回中2回",
    "exampleTh": "แผนงานนี้น่าจะเสร็จทันก่อนสัปดาห์หน้า",
    "exampleJa": "この計画は来週までに終わるはずだ。"
  },
  {
    "id": 558,
    "word": "น้ำใจ",
    "meaning": "思いやり、親切心",
    "pronunciation": "námcay",
    "frequency": "7回中2回",
    "exampleTh": "คนไทยมีน้ำใจช่วยเหลือผู้ประสบภัยเสมอ",
    "exampleJa": "タイ人は常に被災者を助ける思いやりを持っている。"
  },
  {
    "id": 559,
    "word": "น้ำท่วม",
    "meaning": "洪水",
    "pronunciation": "námtûam",
    "frequency": "7回中2回",
    "exampleTh": "ฝนตกหนักทำให้เกิดน้ำท่วมขังบนถนนหลายสาย",
    "exampleJa": "大雨により多くの道路で洪水が発生した。"
  },
  {
    "id": 560,
    "word": "น้ำมัน",
    "meaning": "油、ガソリン",
    "pronunciation": "námman",
    "frequency": "7回中2回",
    "exampleTh": "ราคาน้ำมันโลกปรับตัวสูงขึ้นอย่างต่อเนื่อง",
    "exampleJa": "世界のガソリン価格は継続的に上昇している。"
  },
  {
    "id": 561,
    "word": "นิตยสาร",
    "meaning": "雑誌",
    "pronunciation": "nittayaasǎan",
    "frequency": "7回中2回",
    "exampleTh": "แม่ชอบอ่านนิตยสารแฟชั่นและการทำอาหาร",
    "exampleJa": "母はファッションや料理の雑誌を読むのが好きだ。"
  },
  {
    "id": 562,
    "word": "นิสัย",
    "meaning": "性格、癖",
    "pronunciation": "nisǎy",
    "frequency": "7回中2回",
    "exampleTh": "เขาเป็นคนมีนิสัยร่าเริงและเข้ากับคนง่าย",
    "exampleJa": "彼は明るく親しみやすい性格の人だ。"
  },
  {
    "id": 563,
    "word": "บริการ",
    "meaning": "サービスする",
    "pronunciation": "bɔɔrikaan",
    "frequency": "7回中2回",
    "exampleTh": "ร้านอาหารนี้มีบริการส่งอาหารฟรีถึงบ้าน",
    "exampleJa": "このレストランには自宅までの無料配送サービスがある。"
  },
  {
    "id": 564,
    "word": "บัญชี",
    "meaning": "アカウント、口座",
    "pronunciation": "banchii",
    "frequency": "7回中2回",
    "exampleTh": "พนักงานบัญชีกำลังตรวจสอบเอกสารการเงิน",
    "exampleJa": "会計担当者が財務書類を確認している。"
  },
  {
    "id": 565,
    "word": "บ้าง",
    "meaning": "いくつか、〜など",
    "pronunciation": "bâaŋ",
    "frequency": "7回中2回",
    "exampleTh": "วันหยุดนี้คุณมีแผนจะไปเที่ยวที่ไหนบ้าง",
    "exampleJa": "この休日にどこに行く予定がありますか。"
  },
  {
    "id": 566,
    "word": "บ่าย",
    "meaning": "午後",
    "pronunciation": "bàay",
    "frequency": "7回中2回",
    "exampleTh": "การประชุมสำคัญจะเริ่มตอนบ่ายสองโมงตรง",
    "exampleJa": "重要な会議は午後2時ちょうどに始まります。"
  },
  {
    "id": 567,
    "word": "เบรก",
    "meaning": "ブレーキ、休憩",
    "pronunciation": "brèek",
    "frequency": "7回中2回",
    "exampleTh": "รถคันนั้นเบรกกะทันหันเพื่อหลีกเลี่ยงอุบัติเหตุ",
    "exampleJa": "あの車は事故を避けるために急ブレーキをかけた。"
  },
  {
    "id": 568,
    "word": "เบี้ย",
    "meaning": "手当、保険料",
    "pronunciation": "bîa",
    "frequency": "7回中2回",
    "exampleTh": "定額支給の手当",
    "exampleJa": "定額支給の手当"
  },
  {
    "id": 569,
    "word": "แบบนี้",
    "meaning": "このような、こうして",
    "pronunciation": "bɛ̀ɛpnîi",
    "frequency": "7回中2回",
    "exampleTh": "ฉันชอบจัดห้องทำงานให้เป็นระเบียบแบบนี้",
    "exampleJa": "私は仕事部屋をこのように整理整頓するのが好きだ。"
  },
  {
    "id": 570,
    "word": "ปฏิบัติ",
    "meaning": "実行する、実施する",
    "pronunciation": "patibàt",
    "frequency": "7回中2回",
    "exampleTh": "ทุกคนต้องปฏิบัติตามกฎระเบียบขององค์กร",
    "exampleJa": "全員が組織の規則に従わなければならない。"
  },
  {
    "id": 571,
    "word": "ประกัน",
    "meaning": "保証する、保険",
    "pronunciation": "prakan",
    "frequency": "7回中2回",
    "exampleTh": "พ่อทำประกันสุขภาพเพื่อรองรับค่ารักษาพยาบาล",
    "exampleJa": "父は医療費をカバーするために医療保険に加入した。"
  },
  {
    "id": 572,
    "word": "ประกาศ",
    "meaning": "発表する、告知する",
    "pronunciation": "prakàat",
    "frequency": "7回中2回",
    "exampleTh": "โรงเรียนประกาศวันหยุดราชการประจำปีการศึกษา",
    "exampleJa": "学校は当該学年度の祝日を発表した。"
  },
  {
    "id": 573,
    "word": "ประทับใจ",
    "meaning": "印象に残る、感動する",
    "pronunciation": "prathápcay",
    "frequency": "7回中2回",
    "exampleTh": "ฉันประทับใจการต้อนรับที่อบอุ่นของชาวเหนือ",
    "exampleJa": "私は北部の人々の温かいもてなしに感動した。"
  },
  {
    "id": 574,
    "word": "ประเทศไทย",
    "meaning": "タイ王国",
    "pronunciation": "prathêetthay",
    "frequency": "7回中2回",
    "exampleTh": "ประเทศไทยเป็นจุดหมายปลายทางยอดนิยมของนักท่องเที่ยว",
    "exampleJa": "タイは観光客に人気の目的地です。"
  },
  {
    "id": 575,
    "word": "ประมาณ",
    "meaning": "約、およそ",
    "pronunciation": "pramaan",
    "frequency": "7回中2回",
    "exampleTh": "การประชุมใช้เวลาประมาณหนึ่งชั่วโมงครึ่ง",
    "exampleJa": "会議は約1時間半かかりました。"
  },
  {
    "id": 576,
    "word": "ประมาท",
    "meaning": "不注意な、油断する",
    "pronunciation": "pramàat",
    "frequency": "7回中2回",
    "exampleTh": "การขับรถด้วยความประมาทนำไปสู่อันตรายได้",
    "exampleJa": "不注意な運転は事故につながる可能性がある。"
  },
  {
    "id": 577,
    "word": "ประสงค์",
    "meaning": "望む、意図する",
    "pronunciation": "prasǒŋ",
    "frequency": "7回中2回",
    "exampleTh": "หากประสงค์จะเข้าร่วมงาน กรุณาลงทะเบียนล่วงหน้า",
    "exampleJa": "イベントに参加をご希望の場合は、事前に登録してください。"
  },
  {
    "id": 578,
    "word": "ประสบการณ์",
    "meaning": "経験",
    "pronunciation": "prasòpkaan",
    "frequency": "7回中2回",
    "exampleTh": "การฝึกงานช่วยเพิ่มประสบการณ์ทำงานจริงให้นักศึกษา",
    "exampleJa": "インターンシップは学生に実務経験を積ませるのに役立つ。"
  },
  {
    "id": 579,
    "word": "ประหยัด",
    "meaning": "節約する",
    "pronunciation": "prayàt",
    "frequency": "7回中2回",
    "exampleTh": "เราควรประหยัดน้ำและไฟฟ้าเพื่อรักษาสิ่งแวดล้อม",
    "exampleJa": "環境を守るために水と電気を節約すべきだ。"
  },
  {
    "id": 580,
    "word": "ปรับ",
    "meaning": "調整する、罰金を科す",
    "pronunciation": "pràp",
    "frequency": "7回中2回",
    "exampleTh": "ตำรวจปรับคนขับรถที่ทำผิดกฎจราจร",
    "exampleJa": "警察は交通規則に違反した運転手に罰金を科した。"
  },
  {
    "id": 581,
    "word": "ปรับปรุง",
    "meaning": "改善する、改良する",
    "pronunciation": "pràpruŋ",
    "frequency": "7回中2回",
    "exampleTh": "บริษัทกำลังปรับปรุงระบบซอฟต์แวร์ให้ทันสมัย",
    "exampleJa": "会社はソフトウェアシステムを最新のものに改善している。"
  },
  {
    "id": 582,
    "word": "ปรึกษา",
    "meaning": "相談する",
    "pronunciation": "prʉ̀ksǎa",
    "frequency": "7回中2回",
    "exampleTh": "ฉันต้องการปรึกษาเรื่องปัญหาสุขภาพกับแพทย์",
    "exampleJa": "私は医師に健康上の問題について相談したい。"
  },
  {
    "id": 583,
    "word": "ปลอดภัย",
    "meaning": "安全な",
    "pronunciation": "plɔ̀ɔtphan",
    "frequency": "7回中2回",
    "exampleTh": "การสวมหมวกกันน็อกทำให้การขับขี่ปลอดภัยขึ้น",
    "exampleJa": "ヘルメットをかぶることで運転がより安全になります。"
  },
  {
    "id": 584,
    "word": "ปลา",
    "meaning": "魚",
    "pronunciation": "plaa",
    "frequency": "7回中2回",
    "exampleTh": "พ่อซื้อปลาสดจากตลาดมาทำอาหารเย็น",
    "exampleJa": "父は夕食を作るために市場で新鮮な魚を買ってきた。"
  },
  {
    "id": 585,
    "word": "ปลูก",
    "meaning": "植える、建てる",
    "pronunciation": "plùuk",
    "frequency": "7回中2回",
    "exampleTh": "พวกเราช่วยกันปลูกต้นไม้ในสวนหลังบ้าน",
    "exampleJa": "私たちは裏庭に木を植えるのを手伝った。"
  },
  {
    "id": 586,
    "word": "ปิด",
    "meaning": "閉める、閉じる",
    "pronunciation": "pìt",
    "frequency": "7回中2回",
    "exampleTh": "อย่าลืมปิดหน้าต่างก่อนออกจากห้องทำงาน",
    "exampleJa": "オフィスを出る前に窓を閉めるのを忘れないでください。"
  },
  {
    "id": 587,
    "word": "ปีใหม่",
    "meaning": "新年、お正月",
    "pronunciation": "piimày",
    "frequency": "7回中2回",
    "exampleTh": "ขอให้ทุกคนมีความสุขทางกายและใจในวันปีใหม่",
    "exampleJa": "新年に皆さんが心身ともに幸せでありますように。"
  },
  {
    "id": 588,
    "word": "ปุ่ม",
    "meaning": "ボタン、キー",
    "pronunciation": "pùm",
    "frequency": "7回中2回",
    "exampleTh": "กรุณากดปุ่มสีเขียวเพื่อเริ่มการทำงานของเครื่อง",
    "exampleJa": "機械を始動するには緑色のボタンを押してください。"
  },
  {
    "id": 589,
    "word": "เป็นต้น",
    "meaning": "など、〜を始めとする",
    "pronunciation": "pentôn",
    "frequency": "7回中2回",
    "exampleTh": "ร้านนี้ขายเครื่องเขียน สมุด และปากกา เป็นต้น",
    "exampleJa": "この店は文房具やノート、ペンなどを販売している。"
  },
  {
    "id": 590,
    "word": "เปลี่ยนแปลง",
    "meaning": "変化する、変更する",
    "pronunciation": "plìanplɛɛŋ",
    "frequency": "7回中2回",
    "exampleTh": "เทคโนโลยีมีการเปลี่ยนแปลงอย่างรวดเร็วทุกปี",
    "exampleJa": "テクノロジーは毎年急速に変化している。"
  },
  {
    "id": 591,
    "word": "ผลิต",
    "meaning": "生産する、製造する",
    "pronunciation": "phalìt",
    "frequency": "7回中2回",
    "exampleTh": "โรงงานนี้ผลิตชิ้นส่วนอิเล็กทรอนิกส์ส่งออก",
    "exampleJa": "この工場は輸出用電子部品を製造している。"
  },
  {
    "id": 592,
    "word": "ผ่อน",
    "meaning": "分割払いする、緩める",
    "pronunciation": "phɔ̀ɔn",
    "frequency": "7回中2回",
    "exampleTh": "เขาผ่อนชำระค่ารถยนต์เป็นรายเดือนห้าปี",
    "exampleJa": "彼は車の料金を5年間の月払いで返済している。"
  },
  {
    "id": 593,
    "word": "ผู้คน",
    "meaning": "人々",
    "pronunciation": "phûukhon",
    "frequency": "7回中2回",
    "exampleTh": "ผู้คนจำนวนมากมารวมตัวกันที่ลานหน้าห้างสรรพสินค้า",
    "exampleJa": "多くの人々がデパート前の広場に集まった。"
  },
  {
    "id": 594,
    "word": "ผู้หญิง",
    "meaning": "女性",
    "pronunciation": "phûuyiŋ",
    "frequency": "7回中2回",
    "exampleTh": "ผู้หญิงคนนั้นเป็นผู้จัดการแผนกการตลาดคนใหม่",
    "exampleJa": "あの女性は新しいマーケティング部門のマネージャーです。"
  },
  {
    "id": 595,
    "word": "แผนก",
    "meaning": "部門、部署",
    "pronunciation": "phànɛ̀ek",
    "frequency": "7回中2回",
    "exampleTh": "พี่ชายของฉันทำงานอยู่ในแผนกบัญชีของบริษัท",
    "exampleJa": "私の兄は会社の会計部門で働いている。"
  },
  {
    "id": 596,
    "word": "ฝัน",
    "meaning": "夢を見る",
    "pronunciation": "fǎn",
    "frequency": "7回中2回",
    "exampleTh": "เด็กทุกคนมีความฝันที่อยากจะเป็นจริงในอนาคต",
    "exampleJa": "すべての子供には将来叶えたい夢がある。"
  },
  {
    "id": 597,
    "word": "ฝีมือ",
    "meaning": "腕前、技術",
    "pronunciation": "fiimʉʉ",
    "frequency": "7回中2回",
    "exampleTh": "แม่มีฝีมือในการทำอาหารไทยอร่อยมาก",
    "exampleJa": "母はタイ料理を作る腕前がとても素晴らしい。"
  },
  {
    "id": 598,
    "word": "พจนานุกรม",
    "meaning": "辞書",
    "pronunciation": "phótcanaamúkrom",
    "frequency": "7回中2回",
    "exampleTh": "ฉันใช้พจนานุกรมเพื่อค้นหาความหมายของคำศัพท์",
    "exampleJa": "私は単語の意味を調べるために辞書を使う。"
  },
  {
    "id": 599,
    "word": "พลเมือง",
    "meaning": "市民、国民",
    "pronunciation": "phonlamʉaŋ",
    "frequency": "7回中2回",
    "exampleTh": "การเสียภาษีตามกฎหมายเป็นหน้าที่ของพลเมืองดี",
    "exampleJa": "法律に従って納税することは良き市民の義務である。"
  },
  {
    "id": 600,
    "word": "พ่อ",
    "meaning": "父親",
    "pronunciation": "phɔ̂ɔ",
    "frequency": "7回中2回",
    "exampleTh": "พ่อกำลังทำความสะอาดรถยนต์ในโรงจอดรถ",
    "exampleJa": "父はガレージで車を掃除している。"
  },
  {
    "id": 601,
    "word": "พอดี",
    "meaning": "ちょうど、ぴったり",
    "pronunciation": "phɔɔdii",
    "frequency": "7回中2回",
    "exampleTh": "กางเกงตัวนี้ขนาดพอดีตัวและใส่สบายมาก",
    "exampleJa": "このズボンはサイズがぴったりで、とても履き心地が良い。"
  },
  {
    "id": 602,
    "word": "พ่อแม่",
    "meaning": "両親",
    "pronunciation": "phɔ̂ɔmɛ̂ɛ",
    "frequency": "7回中2回",
    "exampleTh": "พ่อแม่รักและสนับสนุนลูกในทุกการตัดสินใจ",
    "exampleJa": "両親は子供のあらゆる決断を愛し、支持している。"
  },
  {
    "id": 603,
    "word": "พอสมควร",
    "meaning": "適度に、かなりの",
    "pronunciation": "phɔɔsomkhuan",
    "frequency": "7回中2回",
    "exampleTh": "แผนการทำงานนี้มีความคืบหน้าไปมากพอสมควร",
    "exampleJa": "このワークプランはかなり進捗している。"
  },
  {
    "id": 604,
    "word": "พักผ่อน",
    "meaning": "休息する、休む",
    "pronunciation": "phákphɔ̀ɔn",
    "frequency": "7回中2回",
    "exampleTh": "หลังงานเสร็จ พวกเราวางแผนจะไปพักผ่อนที่ทะเล",
    "exampleJa": "仕事が終わったら、私たちは海に休みにいく計画だ。"
  },
  {
    "id": 605,
    "word": "พัฒนา",
    "meaning": "開発する、発展させる",
    "pronunciation": "phátthanaa",
    "frequency": "7回中2回",
    "exampleTh": "เราต้องพัฒนาทักษะภาษาอังกฤษเพื่อการทำงาน",
    "exampleJa": "私たちは仕事のために英語スキルを発展させなければならない。"
  },
  {
    "id": 606,
    "word": "พา",
    "meaning": "連れて行く",
    "pronunciation": "phaa",
    "frequency": "7回中2回",
    "exampleTh": "พรุ่งนี้ฉันจะพาสุนัขไปตรวจร่างกายที่คลินิก",
    "exampleJa": "明日、犬をクリニックに連れて行って検査してもらう予定だ。"
  },
  {
    "id": 607,
    "word": "เพลิง",
    "meaning": "炎、火災",
    "pronunciation": "phləəŋ",
    "frequency": "7回中2回",
    "exampleTh": "เจ้าหน้าที่ดับเพลิงควบคุมไฟไหม้ได้อย่างรวดเร็ว",
    "exampleJa": "消防士は火災を迅速に制圧した。"
  },
  {
    "id": 608,
    "word": "เพิ่ง",
    "meaning": "〜したばかり",
    "pronunciation": "phə̂ŋ",
    "frequency": "7回中2回",
    "exampleTh": "ฉันเพิ่งเรียนจบและกำลังหางานทำในกรุงเทพฯ",
    "exampleJa": "私は卒業したばかりで、バンコクで仕事を探している。"
  },
  {
    "id": 609,
    "word": "แฟน",
    "meaning": "恋人、ファン",
    "pronunciation": "fɛɛn",
    "frequency": "7回中2回",
    "exampleTh": "แฟนของฉันทำงานอยู่ที่บริษัทซอฟต์แวร์แห่งเดียวกัน",
    "exampleJa": "私の恋人は同じソフトウェア会社で働いている。"
  },
  {
    "id": 610,
    "word": "ไฟ",
    "meaning": "火、電気、ライト",
    "pronunciation": "fai",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาเปิดไฟในห้องนั่งเล่นให้หน่อยครับ",
    "exampleJa": "リビングの電気をつけていただけますか。"
  },
  {
    "id": 611,
    "word": "ไฟแดง",
    "meaning": "赤信号",
    "pronunciation": "faidɛɛŋ",
    "frequency": "7回中2回",
    "exampleTh": "รถทุกคันต้องหยุดเมื่อสัญญาณไฟเปลี่ยนเป็นไฟแดง",
    "exampleJa": "信号が赤に変わったら、すべての車が停止しなければならない。"
  },
  {
    "id": 612,
    "word": "ภรรยา",
    "meaning": "妻",
    "pronunciation": "phanrayaa",
    "frequency": "7回中2回",
    "exampleTh": "เขาแต่งงานกับภรรยามานานกว่าสิบปีแล้ว",
    "exampleJa": "เขาแต่งงานกับภรรยามานานกว่าสิบปีแล้ว"
  },
  {
    "id": 613,
    "word": "ภาพ",
    "meaning": "絵、写真",
    "pronunciation": "phâap",
    "frequency": "7回中2回",
    "exampleTh": "ช่างภาพกำลังถ่ายภาพทิวทัศน์ที่สวยงามช่วงพระอาทิตย์ตก",
    "exampleJa": "写真家は夕暮れ時の美しい風景を撮影している。"
  },
  {
    "id": 614,
    "word": "ภาษาญี่ปุ่น",
    "meaning": "日本語",
    "pronunciation": "phaasǎayîipùn",
    "frequency": "7回中2回",
    "exampleTh": "นักเรียนหลายคนสนใจเรียนภาษาญี่ปุ่นเพิ่มเติม",
    "exampleJa": "多くの学生が日本語の追加学習に興味を持っています。"
  },
  {
    "id": 615,
    "word": "ภูมิใจ",
    "meaning": "誇りに思う",
    "pronunciation": "phuumcay",
    "frequency": "7回中2回",
    "exampleTh": "พ่อแม่ภูมิใจในความสำเร็จด้านการศึกษาของลูก",
    "exampleJa": "両親は子供の教育的成功を誇りに思っている。"
  },
  {
    "id": 616,
    "word": "มหาวิทยาลัย",
    "meaning": "大学",
    "pronunciation": "mahǎawítthayaalay",
    "frequency": "7回中2回",
    "exampleTh": "มหาวิทยาลัยตั้งอยู่ใจกลางเมืองและเดินทางสะดวก",
    "exampleJa": "大学は街の中心部にあり、アクセスが便利だ。"
  },
  {
    "id": 617,
    "word": "มะเร็ง",
    "meaning": "がん",
    "pronunciation": "marəŋ",
    "frequency": "7回中2回",
    "exampleTh": "การสูบบุหรี่เพิ่มความเสี่ยงต่อการเกิดโรคมะเร็งปอด",
    "exampleJa": "喫煙は肺がんの発症リスクを高める。"
  },
  {
    "id": 618,
    "word": "มากที่สุด",
    "meaning": "最も、最大級に",
    "pronunciation": "mâakthiisùt",
    "frequency": "7回中2回",
    "exampleTh": "อาหารจานนี้อร่อยมากที่สุดในร้านนี้แล้ว",
    "exampleJa": "この料理はこの店で最も美味しい料理です。"
  },
  {
    "id": 619,
    "word": "มาถึง",
    "meaning": "到着する",
    "pronunciation": "maathʉ̌ŋ",
    "frequency": "7回中2回",
    "exampleTh": "รถไฟมาถึงสถานีปลายทางตรงเวลาพอดี",
    "exampleJa": "列車は定刻通りに終着駅に到着した。"
  },
  {
    "id": 620,
    "word": "เมื่อก่อน",
    "meaning": "以前、昔",
    "pronunciation": "mʉ̂akɔ̀ɔn",
    "frequency": "7回中2回",
    "exampleTh": "เมื่อก่อนที่นี่เคยเป็นสวนผลไม้ขนาดใหญ่",
    "exampleJa": "以前、ここは広大な果樹園でした。"
  },
  {
    "id": 621,
    "word": "เมืองไทย",
    "meaning": "タイ、タイ国",
    "pronunciation": "mʉaŋthay",
    "frequency": "7回中2回",
    "exampleTh": "เมืองไทยมีสถานที่ท่องเที่ยวทางธรรมชาติสวยงามหลายแห่ง",
    "exampleJa": "タイには美しい自然の観光地がいくつもあります。"
  },
  {
    "id": 622,
    "word": "เมื่อวานนี้",
    "meaning": "昨日",
    "pronunciation": "mʉ̂awaannîi",
    "frequency": "7回中2回",
    "exampleTh": "เมื่อวานนี้ฝนตกหนักจนทำให้น้ำท่วมถนน",
    "exampleJa": "昨日、大雨が降って道路が冠水した。"
  },
  {
    "id": 623,
    "word": "ไม้",
    "meaning": "木、材木",
    "pronunciation": "máy",
    "frequency": "7回中2回",
    "exampleTh": "โต๊ะทำงานตัวนี้ทำจากไม้สักแท้คุณภาพดี",
    "exampleJa": "この仕事机は良質な本物のチーク材で作られている。"
  },
  {
    "id": 624,
    "word": "ยกเว้น",
    "meaning": "〜を除いて、免除する",
    "pronunciation": "yokwén",
    "frequency": "7回中2回",
    "exampleTh": "ทุกคนต้องเข้าร่วมประชุม ยกเว้นพนักงานที่ลาพักร้อน",
    "exampleJa": "休暇中の従業員を除き、全員が会議に参加しなければならない。"
  },
  {
    "id": 625,
    "word": "ยาว",
    "meaning": "長い",
    "pronunciation": "yaaw",
    "frequency": "7回中2回",
    "exampleTh": "การเดินทางครั้งนี้ใช้เวลายาวนานกว่าที่คิดไว้",
    "exampleJa": "今回の旅は思ったより長い時間がかかった。"
  },
  {
    "id": 626,
    "word": "ยำ",
    "meaning": "和える、タイ風サラダ",
    "pronunciation": "yam",
    "frequency": "7回中2回",
    "exampleTh": "แม่ทำยำวุ้นเส้นรสชาติเผ็ดเปรี้ยวให้กินตอนเย็น",
    "exampleJa": "母は夕食にスパイシーなヤムウンセンを作ってくれた。"
  },
  {
    "id": 627,
    "word": "ยิน",
    "meaning": "聞く、耳にする",
    "pronunciation": "yin",
    "frequency": "7回中2回",
    "exampleTh": "ฉันได้ยินเสียงนกร้องในสวนแต่เช้าตรู่",
    "exampleJa": "ฉันได้ยินเสียงนกร้องในสวนแต่เช้าตรู่"
  },
  {
    "id": 628,
    "word": "ยืม",
    "meaning": "借りる",
    "pronunciation": "yʉʉm",
    "frequency": "7回中2回",
    "exampleTh": "เพื่อนขอยืมปากกาของฉันไปเขียนรายงาน",
    "exampleJa": "友人がレポートを書くために私のペンを借りたいと言った。"
  },
  {
    "id": 629,
    "word": "ยุ่ง",
    "meaning": "忙しい、乱雑な",
    "pronunciation": "yûŋ",
    "frequency": "7回中2回",
    "exampleTh": "ช่วงสัปดาห์นี้ฉันยุ่งมากจนไม่มีเวลาดูโทรทัศน์",
    "exampleJa": "ช่วงสัปดาห์นี้ฉันยุ่งมากจนไม่มีเวลาดูโทรทัศน์"
  },
  {
    "id": 630,
    "word": "ยุโรป",
    "meaning": "ヨーロッパ",
    "pronunciation": "yùrôop",
    "frequency": "7回中2回",
    "exampleTh": "ครอบครัววางแผนจะไปเที่ยวทวีปยุโรปปีหน้า",
    "exampleJa": "家族は来年ヨーロッパ旅行に行く計画をしている。"
  },
  {
    "id": 631,
    "word": "เย็นสบาย",
    "meaning": "涼しくて快適な",
    "pronunciation": "yensabaay",
    "frequency": "7回中2回",
    "exampleTh": "ลมพัดโชยทำให้รู้สึกเย็นสบายดีจังเลย",
    "exampleJa": "風がそよいでとても涼しくて気持ちがいい。"
  },
  {
    "id": 632,
    "word": "เยอะ",
    "meaning": "たくさんの、多い",
    "pronunciation": "yə́ʔ",
    "frequency": "7回中2回",
    "exampleTh": "ร้านนี้มีของหวานให้เลือกทานเยอะมาก",
    "exampleJa": "この店にはたくさんのスイーツの選択肢がある。"
  },
  {
    "id": 633,
    "word": "แย่",
    "meaning": "悪い、ひどい",
    "pronunciation": "yɛ̂ɛ",
    "frequency": "7回中2回",
    "exampleTh": "สุขภาพของเขาแย่ลงเนื่องจากทำงานหนักเกินไป",
    "exampleJa": "働きすぎのせいで彼の体調が悪化した。"
  },
  {
    "id": 634,
    "word": "แย้ง",
    "meaning": "反論する",
    "pronunciation": "yɛ́ɛŋ",
    "frequency": "7回中2回",
    "exampleTh": "ไม่มีใครกล้าแสดงความคิดเห็นคัดแย้งในที่ประชุม",
    "exampleJa": "会議で誰もあえて反論を唱えようとしなかった。"
  },
  {
    "id": 635,
    "word": "รถไฟใต้ดิน",
    "meaning": "地下鉄",
    "pronunciation": "rótfaitâydin",
    "frequency": "7回中2回",
    "exampleTh": "การเดินทางด้วยรถไฟใต้ดินช่วยประหยัดเวลาได้มาก",
    "exampleJa": "地下鉄を利用することで多くの時間を節約できます。"
  },
  {
    "id": 636,
    "word": "รวมมิตร",
    "meaning": "ルアムミット",
    "pronunciation": "ruammit",
    "frequency": "7回中2回",
    "exampleTh": "ขนมหวานรวมมิตรใส่น้ำกะทิและน้ำแข็งใสอร่อยชื่นใจ",
    "exampleJa": "ココナッツミルクと氷を入れたデザートは美味しい。"
  },
  {
    "id": 637,
    "word": "รอ",
    "meaning": "待つ",
    "pronunciation": "rɔɔ",
    "frequency": "7回中2回",
    "exampleTh": "กรุณารอสักครู่ เจ้าหน้าที่กำลังดำเนินเรื่องให้",
    "exampleJa": "少々お待ちください。職員が手続きを進めています。"
  },
  {
    "id": 638,
    "word": "ระยะ",
    "meaning": "距離、期間",
    "pronunciation": "rayáʔ",
    "frequency": "7回中2回",
    "exampleTh": "โรงแรมอยู่ห่างจากสถานีรถไฟในระยะที่เดินถึง",
    "exampleJa": "ホテルは駅から歩いて行ける距離にあります。"
  },
  {
    "id": 639,
    "word": "รายละเอียด",
    "meaning": "詳細、ディテール",
    "pronunciation": "raaylahìat",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาอ่านรายละเอียดของสัญญาก่อนลงลายมือชื่อ",
    "exampleJa": "署名する前に契約書の詳細を読んでください。"
  },
  {
    "id": 640,
    "word": "เร่งรีบ",
    "meaning": "急ぐ、慌ただしい",
    "pronunciation": "rêŋrîip",
    "frequency": "7回中2回",
    "exampleTh": "ชีวิตในเมืองใหญ่มักจะมีความเร่งรีบตลอดเวลา",
    "exampleJa": "大都市での生活は常に慌ただしいことが多い。"
  },
  {
    "id": 641,
    "word": "เร็วๆนี้",
    "meaning": "近いうちに、まもなく",
    "pronunciation": "rewrewnîi",
    "frequency": "7回中2回",
    "exampleTh": "ภาพยนตร์เรื่องใหม่จะเข้าฉายในโรงภาพยนตร์เร็วๆ นี้",
    "exampleJa": "新しい映画がまもなく映画館で公開されます。"
  },
  {
    "id": 642,
    "word": "เรือ",
    "meaning": "船",
    "pronunciation": "rʉa",
    "frequency": "7回中2回",
    "exampleTh": "นักท่องเที่ยวชอบนั่งเรือชมวิวแม่น้ำเจ้าพระยา",
    "exampleJa": "観光客はチャオプラヤー川の景色を眺める船に乗るのが好きだ。"
  },
  {
    "id": 643,
    "word": "แรก",
    "meaning": "初めの、最初の",
    "pronunciation": "rɛ̂ek",
    "frequency": "7回中2回",
    "exampleTh": "วันแรกของการทำงานในออฟฟิศใหม่น่าตื่นเต้นมาก",
    "exampleJa": "新しいオフィスでの初出勤日はとてもエキサイティングだった。"
  },
  {
    "id": 644,
    "word": "โรค",
    "meaning": "病気",
    "pronunciation": "rôok",
    "frequency": "7回中2回",
    "exampleTh": "การทานอาหารที่มีประโยชน์ช่วยป้องกันโรคต่างๆ ได้",
    "exampleJa": "栄養のある食事を摂ることは様々な病気を防ぐのに役立つ。"
  },
  {
    "id": 645,
    "word": "โรคมะเร็ง",
    "meaning": "がんという病気",
    "pronunciation": "rôokmarəŋ",
    "frequency": "7回中2回",
    "exampleTh": "การตรวจร่างกายประจำปีช่วยค้นพบโรคมะเร็งระยะแรกได้",
    "exampleJa": "年一回の健康診断は初期のがんを発見するのに役立つ。"
  },
  {
    "id": 646,
    "word": "โรงแรม",
    "meaning": "ホテル",
    "pronunciation": "rooŋrɛɛm",
    "frequency": "7回中2回",
    "exampleTh": "พวกเราจองห้องพักของโรงแรมนี้ไว้สามคืน",
    "exampleJa": "私たちはこのホテルの部屋を3泊予約した。"
  },
  {
    "id": 647,
    "word": "ฤดูร้อน",
    "meaning": "夏、暑期",
    "pronunciation": "rʉduurɔ́ɔn",
    "frequency": "7回中2回",
    "exampleTh": "ในฤดูร้อนคนไทยนิยมไปเที่ยวทะเลเพื่อคลายร้อน",
    "exampleJa": "夏には、タイ人は暑さをしのぐために海へ旅行に行くのを好む。"
  },
  {
    "id": 648,
    "word": "ล้ม",
    "meaning": "転ぶ、倒れる",
    "pronunciation": "lóm",
    "frequency": "7回中2回",
    "exampleTh": "เขาวิ่งเร็วเกินไปจนสะดุดล้มบนถนน",
    "exampleJa": "彼は走りすぎて道でつまずいて転んだ。"
  },
  {
    "id": 649,
    "word": "ล้มเลิก",
    "meaning": "諦める、中止する",
    "pronunciation": "lómlə̂ək",
    "frequency": "7回中2回",
    "exampleTh": "บริษัทตัดสินใจล้มเลิกโครงการที่ไม่ได้กำไร",
    "exampleJa": "会社は利益の出ないプロジェクトの中止を決定した。"
  },
  {
    "id": 650,
    "word": "ลอง",
    "meaning": "試す、〜してみる",
    "pronunciation": "lɔɔŋ",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาลองใส่เสื้อตัวนี้ดูก่อนว่าพอดีไหม",
    "exampleJa": "この服のサイズが合うかどうか、まず試着してみてください。"
  },
  {
    "id": 651,
    "word": "ละ",
    "meaning": "〜につき、〜ずつ",
    "pronunciation": "láʔ",
    "frequency": "7回中2回",
    "exampleTh": "ยาขวดนี้ต้องทานวันละสองครั้งหลังอาหาร",
    "exampleJa": "この薬は食後に1日2回服用しなければならない。"
  },
  {
    "id": 652,
    "word": "ลักษณะ",
    "meaning": "特徴、形、外見",
    "pronunciation": "láksanàʔ",
    "frequency": "7回中2回",
    "exampleTh": "แมวสองตัวนี้มีลักษณะที่แตกต่างกันอย่างชัดเจน",
    "exampleJa": "この2匹の猫は明確に異なる特徴を持っている。"
  },
  {
    "id": 653,
    "word": "ลา",
    "meaning": "別れる、休暇を取る、ロバ",
    "pronunciation": "laa",
    "frequency": "7回中2回",
    "exampleTh": "เขาขอลาหยุดสองวันเพื่อไปทำธุระส่วนตัว",
    "exampleJa": "彼は私用のために2日間の休暇を申請した。"
  },
  {
    "id": 654,
    "word": "เล่ม",
    "meaning": "（本の）〜冊、〜本（刃物）",
    "pronunciation": "lêm",
    "frequency": "7回中2回",
    "exampleTh": "ฉันอ่านหนังสือเล่มนี้จบในวันเดียว",
    "exampleJa": "私はこの本を1日で読み終えた。"
  },
  {
    "id": 655,
    "word": "เลิก",
    "meaning": "やめる、別れる、終了する",
    "pronunciation": "lə̂ək",
    "frequency": "7回中2回",
    "exampleTh": "เขาตัดสินใจเลิกสูบบุหรี่เพื่อสุขภาพที่ดีขึ้น",
    "exampleJa": "彼は健康状態の改善のために禁煙を決意した。"
  },
  {
    "id": 656,
    "word": "แลก",
    "meaning": "交換する、両替する",
    "pronunciation": "lɛ̂ek",
    "frequency": "7回中2回",
    "exampleTh": "ฉันต้องไปธนาคารเพื่อแลกเงินญี่ปุ่นเป็นเงินไทย",
    "exampleJa": "日本円をタイバーツに両替するために銀行に行かなければならない。"
  },
  {
    "id": 657,
    "word": "โลก",
    "meaning": "世界、地球",
    "pronunciation": "lôok",
    "frequency": "7回中2回",
    "exampleTh": "เทคโนโลยีสมัยนี้ทำให้โลกแคบลงกว่าแต่ก่อน",
    "exampleJa": "現代のテクノロジーは以前よりも世界を狭くした。"
  },
  {
    "id": 658,
    "word": "วันเสาร์",
    "meaning": "土曜日",
    "pronunciation": "wansǎw",
    "frequency": "7回中2回",
    "exampleTh": "วันเสาร์นี้พวกเราจะไปกินข้าวเย็นด้วยกัน",
    "exampleJa": "今週の土曜日、私たちは一緒に夕食を食べに行きます。"
  },
  {
    "id": 659,
    "word": "วัย",
    "meaning": "年齢、世代、時期",
    "pronunciation": "wai",
    "frequency": "7回中2回",
    "exampleTh": "เด็กในวัยนี้เรียนรู้สิ่งใหม่ๆ ได้อย่างรวดเร็ว",
    "exampleJa": "この年齢の子供は新しいことを素早く学ぶ。"
  },
  {
    "id": 660,
    "word": "วิศวกร",
    "meaning": "エンジニア、技師",
    "pronunciation": "wítsawakɔɔn",
    "frequency": "7回中2回",
    "exampleTh": "วิศวกรกำลังตรวจสอบโครงสร้างของสะพานแห่งใหม่",
    "exampleJa": "エンジニアが新しい橋の構造を検査している。"
  },
  {
    "id": 661,
    "word": "ศีรษะ",
    "meaning": "頭",
    "pronunciation": "sǐisàʔ",
    "frequency": "7回中2回",
    "exampleTh": "เขารู้สึกปวดศีรษะเนื่องจากนอนหลับไม่เพียงพอ",
    "exampleJa": "彼は睡眠不足のせいで頭痛がする。"
  },
  {
    "id": 662,
    "word": "เศร้า",
    "meaning": "悲しい、憂鬱な",
    "pronunciation": "sâw",
    "frequency": "7回中2回",
    "exampleTh": "ภาพยนตร์เรื่องนี้มีตอนจบที่เศร้ามากจนร้องไห้",
    "exampleJa": "この映画は結末がとても悲しくて泣いてしまった。"
  },
  {
    "id": 663,
    "word": "สถานการณ์",
    "meaning": "状況、情勢",
    "pronunciation": "sathǎanakaan",
    "frequency": "7回中2回",
    "exampleTh": "เราต้องประเมินสถานการณ์ทางเศรษฐกิจอย่างรอบคอบ",
    "exampleJa": "私たちは経済状況を慎重に評価しなければならない。"
  },
  {
    "id": 664,
    "word": "สถานที่",
    "meaning": "場所、スポット",
    "pronunciation": "sathǎanthîi",
    "frequency": "7回中2回",
    "exampleTh": "วัดพระแก้วเป็นสถานที่ท่องเที่ยวที่มีชื่อเสียงมาก",
    "exampleJa": "ワットプラแก้ว（エメラルド寺院）は非常に有名な観光地です。"
  },
  {
    "id": 665,
    "word": "สถานี",
    "meaning": "駅、放送局",
    "pronunciation": "sathǎanii",
    "frequency": "7回中2回",
    "exampleTh": "รถไฟจะจอดที่สถานีต่อไปเป็นเวลาห้านาที",
    "exampleJa": "列車は次の駅で5分間停車します。"
  },
  {
    "id": 666,
    "word": "สนามบิน",
    "meaning": "空港",
    "pronunciation": "sanaambin",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาเดินทางถึงสนามบินก่อนเวลาเครื่องออกสองชั่วโมง",
    "exampleJa": "飛行機の出発時刻の2時間前までに空港に到着してください。"
  },
  {
    "id": 667,
    "word": "สบายดี",
    "meaning": "元気である",
    "pronunciation": "sàbaaidii",
    "frequency": "7回中2回",
    "exampleTh": "ช่วงนี้ฉันสบายดีและงานไม่ได้ยุ่งมากนัก",
    "exampleJa": "最近私は元気で、仕事もそれほど忙しくありません。"
  },
  {
    "id": 668,
    "word": "สมัครงาน",
    "meaning": "求募に申し込む、就職活動をする",
    "pronunciation": "samàkŋaan",
    "frequency": "7回中2回",
    "exampleTh": "เขายื่นเอกสารสมัครงานกับบริษัทหลายแห่งสัปดาห์นี้",
    "exampleJa": "彼は今週、複数の会社に求人書類を提出した。"
  },
  {
    "id": 669,
    "word": "สมัย",
    "meaning": "時代、期間",
    "pronunciation": "samǎy",
    "frequency": "7回中2回",
    "exampleTh": "สมัยก่อนวิถีชีวิตของผู้คนมีความเรียบง่ายมาก",
    "exampleJa": "昔、人々のライフスタイルは非常にシンプルだった。"
  },
  {
    "id": 670,
    "word": "สวยงาม",
    "meaning": "美しい、見事な",
    "pronunciation": "sǔayŋaam",
    "frequency": "7回中2回",
    "exampleTh": "วิวทิวทัศน์บนยอดเขานั้นสวยงามน่าประทับใจมาก",
    "exampleJa": "山頂からの景色は非常に美しく感動的だった。"
  },
  {
    "id": 671,
    "word": "สะอาด",
    "meaning": "清潔な、きれいな",
    "pronunciation": "sàʔàat",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาช่วยรักษาความสะอาดของห้องครัวด้วย",
    "exampleJa": "キッチンの清潔さを保つよう協力してください。"
  },
  {
    "id": 672,
    "word": "สัตว์",
    "meaning": "動物、ペット",
    "pronunciation": "sàt",
    "frequency": "7回中2回",
    "exampleTh": "สวนสัตว์แห่งใหม่มีสัตว์จากแอฟริกาหลายชนิด",
    "exampleJa": "新しい動物園にはアフリカから来た多くの種類の動物がいます。"
  },
  {
    "id": 673,
    "word": "สำเร็จ",
    "meaning": "成功する、完了する",
    "pronunciation": "sǎmret",
    "frequency": "7回中2回",
    "exampleTh": "โครงการนี้สำเร็จได้ด้วยความร่วมมือของทุกคน",
    "exampleJa": "このプロジェクトは全員の協力のおかげで成功した。"
  },
  {
    "id": 674,
    "word": "สี",
    "meaning": "色",
    "pronunciation": "sǐi",
    "frequency": "7回中2回",
    "exampleTh": "เสื้อตัวโปรดของฉันเป็นเสื้อสีฟ้าอ่อนใส่สบาย",
    "exampleJa": "私のお気に入りの服は着心地の良い薄青色の服です。"
  },
  {
    "id": 675,
    "word": "สี่แยก",
    "meaning": "交差点",
    "pronunciation": "sǐiyɛ̂ek",
    "frequency": "7回中2回",
    "exampleTh": "รถยนต์ชนกันที่สี่แยกหน้าตลาดเมื่อเช้านี้",
    "exampleJa": "今朝、市場の前の交差点で車同士が衝突した。"
  },
  {
    "id": 676,
    "word": "สื่อสาร",
    "meaning": "通信する、伝える",
    "pronunciation": "sʉ̀ʉsǎan",
    "frequency": "7回中2回",
    "exampleTh": "การสื่อสารที่มีประสิทธิภาพช่วยลดความเข้าใจผิด",
    "exampleJa": "効果的なコミュニケーションは誤解を減らすのに役立つ。"
  },
  {
    "id": 677,
    "word": "สุดท้าย",
    "meaning": "最後の、最終的な",
    "pronunciation": "sùttháay",
    "frequency": "7回中2回",
    "exampleTh": "นี่เป็นโอกาสสุดท้ายของพวกเราที่จะชนะการแข่งขัน",
    "exampleJa": "これが私たちが試合に勝つ最後のチャンスだ。"
  },
  {
    "id": 678,
    "word": "เส้น",
    "meaning": "線、麺、ルート",
    "pronunciation": "sên",
    "frequency": "7回中2回",
    "exampleTh": "ร้านนี้มีเมนูเส้นให้เลือกทานหลากหลายแบบ",
    "exampleJa": "この店には様々な麺類のメニューがあります。"
  },
  {
    "id": 679,
    "word": "เสมือน",
    "meaning": "あたかも、仮想の",
    "pronunciation": "samʉ̌an",
    "frequency": "7回中2回",
    "exampleTh": "เพื่อนคนนี้คอยช่วยเหลือฉันเสมือนเป็นคนในครอบครัว",
    "exampleJa": "この友人はあたかも家族のように私をいつも助けてくれる。"
  },
  {
    "id": 680,
    "word": "เสื้อกันหนาว",
    "meaning": "セーター、防寒着",
    "pronunciation": "sʉ̂akannǎaw",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาเตรียมเสื้อกันหนาวไปด้วยเพราะยอดเขาหนาวมาก",
    "exampleJa": "山頂はとても寒いので、セーターを用意してください。"
  },
  {
    "id": 681,
    "word": "หน้าที่",
    "meaning": "義務、役割、任務",
    "pronunciation": "nâathîi",
    "frequency": "7回中2回",
    "exampleTh": "การดูแลลูกค้าเป็นหน้าที่สำคัญของฝ่ายบริการ",
    "exampleJa": "顧客のケアはサービス部門の重要な役割である。"
  },
  {
    "id": 682,
    "word": "หนาว",
    "meaning": "寒い",
    "pronunciation": "nǎaw",
    "frequency": "7回中2回",
    "exampleTh": "ปีนี้อากาศหนาวเร็วและนานกว่าปีที่ผ่านมา",
    "exampleJa": "今年は例年より早く寒くなり、寒さが長く続いている。"
  },
  {
    "id": 683,
    "word": "หมอ",
    "meaning": "医者、ドクター",
    "pronunciation": "mɔ̌ɔ",
    "frequency": "7回中2回",
    "exampleTh": "หมอแนะนำให้เขานอนพักผ่อนและดื่มน้ำมากๆ",
    "exampleJa": "医師は彼に休んで水分を多く摂るよう勧めた。"
  },
  {
    "id": 684,
    "word": "หมาย",
    "meaning": "印、ターゲット、意図する",
    "pronunciation": "mǎay",
    "frequency": "7回中2回",
    "exampleTh": "ตำรวจมีหมายเรียกพยานมาให้ปากคำเพิ่ม",
    "exampleJa": "警察は証人を呼んで追加の証言を得る令状を持っている。"
  },
  {
    "id": 685,
    "word": "หมายถึง",
    "meaning": "〜を意味する",
    "pronunciation": "mǎaythʉ̌ŋ",
    "frequency": "7回中2回",
    "exampleTh": "สัญลักษณ์นี้หมายถึงห้ามนำสัตว์เลี้ยงเข้ามาในร้าน",
    "exampleJa": "このマークはペットの入店禁止を意味している。"
  },
  {
    "id": 686,
    "word": "หยอด",
    "meaning": "点眼する、投入する",
    "pronunciation": "yɔ̀ɔt",
    "frequency": "7回中2回",
    "exampleTh": "เขาหยอดเหรียญลงในเครื่องซักผ้าหยอดเหรียญ",
    "exampleJa": "彼はコインランドリーの機械にコインを投入した。"
  },
  {
    "id": 687,
    "word": "หย่า",
    "meaning": "離婚する",
    "pronunciation": "yàa",
    "frequency": "7回中2回",
    "exampleTh": "ทั้งสองคนตัดสินใจหย่ากันหลังจากแยกกันอยู่หนึ่งปี",
    "exampleJa": "2人は1年間の別居の末、離婚することを決定した。"
  },
  {
    "id": 688,
    "word": "หรือไม่ก็",
    "meaning": "さもなければ、あるいは",
    "pronunciation": "rʉ̌ʉmâykɔ̂",
    "frequency": "7回中2回",
    "exampleTh": "คุณจะกินข้าวที่นี่หรือไม่ก็สั่งกลับบ้าน",
    "exampleJa": "ここで食事をするか、あるいは持ち帰り用に注文するかしてください。"
  },
  {
    "id": 689,
    "word": "หลีก",
    "meaning": "避ける、譲る",
    "pronunciation": "lìik",
    "frequency": "7回中2回",
    "exampleTh": "รถคันหลังบีบแตรเพื่อขอให้รถคันหน้าหลีกทาง",
    "exampleJa": "後続車が前方の車に道を譲るようクラクションを鳴らした。"
  },
  {
    "id": 690,
    "word": "หลีกเลี่ยง",
    "meaning": "避ける、回避する",
    "pronunciation": "lìiklîiaŋ",
    "frequency": "7回中2回",
    "exampleTh": "เราควรหลีกเลี่ยงการเจรจาในช่วงที่เขากำลังโกรธ",
    "exampleJa": "彼が怒っている間の話し合いは避けるべきだ。"
  },
  {
    "id": 691,
    "word": "หวัง",
    "meaning": "望む、期待する",
    "pronunciation": "wǎŋ",
    "frequency": "7回中2回",
    "exampleTh": "พวกเราหวังว่าจะได้รับความร่วมมือจากทีมงานใหม่",
    "exampleJa": "私たちは新しいチームからの協力を期待している。"
  },
  {
    "id": 692,
    "word": "หวาน",
    "meaning": "甘い",
    "pronunciation": "wǎan",
    "frequency": "7回中2回",
    "exampleTh": "ขนมไทยชนิดนี้มีรสหวานกลมกล่อมอร่อยมาก",
    "exampleJa": "このタイの菓子はまろやかな甘さでとても美味しい。"
  },
  {
    "id": 693,
    "word": "ห้องสมุด",
    "meaning": "図書館",
    "pronunciation": "hɔ̂ŋsamùt",
    "frequency": "7回中2回",
    "exampleTh": "นักเรียนชอบมาอ่านหนังสือที่ห้องสมุดช่วงสอบ",
    "exampleJa": "学生たちは試験期間中に図書館へ本を読みに行くのが好きだ。"
  },
  {
    "id": 694,
    "word": "หัวหน้า",
    "meaning": "上司、ボス、リーダー",
    "pronunciation": "hǔanâa",
    "frequency": "7回中2回",
    "exampleTh": "หัวหน้าอนุมัติแผนงานโครงการส่งเสริมการลงทุนแล้ว",
    "exampleJa": "上司は投資促進プロジェクトの作業計画を承認した。"
  },
  {
    "id": 695,
    "word": "หาก",
    "meaning": "もし〜なら",
    "pronunciation": "hàak",
    "frequency": "7回中2回",
    "exampleTh": "หากมีข้อสงสัยเพิ่มเติมกรุณาติดต่อเจ้าหน้าที่",
    "exampleJa": "ご不明な点がございましたら、担当者までお問い合わせください。"
  },
  {
    "id": 696,
    "word": "เหนียว",
    "meaning": "粘り気のある、硬い",
    "pronunciation": "nǐaw",
    "frequency": "7回中2回",
    "exampleTh": "คนไทยชอบกินมะม่วงสุกกับข้าวเหนียวราดน้ำกะทิ",
    "exampleJa": "タイ人はココナッツミルクをかけたもち米と完熟マンゴーを食べるのが好きだ。"
  },
  {
    "id": 697,
    "word": "เหมาะสม",
    "meaning": "適切な、ふさわしい",
    "pronunciation": "mɔ̀som",
    "frequency": "7回中2回",
    "exampleTh": "เราต้องเลือกใช้วิธีการที่เหมาะสมกับปัญหานั้น",
    "exampleJa": "私たちはその問題に適した方法を選択しなければならない。"
  },
  {
    "id": 698,
    "word": "เหมือนกับ",
    "meaning": "〜と同様である、〜に似ている",
    "pronunciation": "mʉ̌ankàp",
    "frequency": "7回中2回",
    "exampleTh": "กระเป๋าใบนี้มีสีและขนาดเหมือนกับใบเดิมของฉัน",
    "exampleJa": "このバッグは私の元のバッグと同じ色とサイズです。"
  },
  {
    "id": 699,
    "word": "เหมือนเดิม",
    "meaning": "相変わらず、元の通り",
    "pronunciation": "mʉ̌andəəm",
    "frequency": "7回中2回",
    "exampleTh": "เขายังคงตั้งใจทำงานเหมือนเดิมไม่เคยเปลี่ยน",
    "exampleJa": "彼は相変わらず熱心に働いており、決して変わらない。"
  },
  {
    "id": 700,
    "word": "ไหน",
    "meaning": "どれ、どこ",
    "pronunciation": "nǎi",
    "frequency": "7回中2回",
    "exampleTh": "คุณอยากได้เสื้อตัวไหนเป็นของขวัญวันเกิด",
    "exampleJa": "誕生日のプレゼントにどの服が欲しいですか。"
  },
  {
    "id": 701,
    "word": "อม",
    "meaning": "口に含む、含み笑いする",
    "pronunciation": "om",
    "frequency": "7回中2回",
    "exampleTh": "เด็กน้อยอมลูกกวาดสีแดงไว้ในปากจนแก้มตุ่ย",
    "exampleJa": "幼い子供が口の中に赤いキャンディーを含んで頬を膨らませている。"
  },
  {
    "id": 702,
    "word": "อเมริกา",
    "meaning": "アメリカ",
    "pronunciation": "ameerikaa",
    "frequency": "7回中2回",
    "exampleTh": "พี่ชายกำลังเตรียมตัวไปศึกษาต่อที่ประเทศอเมริกาปีหน้า",
    "exampleJa": "兄は来年アメリカに留学する準備をしている。"
  },
  {
    "id": 703,
    "word": "อย่า",
    "meaning": "〜するな（禁止）",
    "pronunciation": "yàa",
    "frequency": "7回中2回",
    "exampleTh": "อย่าลืมปิดเครื่องปรับอากาศก่อนออกจากห้อง",
    "exampleJa": "部屋を出る前にエアコンを切るのを忘れないでください。"
  },
  {
    "id": 704,
    "word": "ออกกำลังกาย",
    "meaning": "運動する",
    "pronunciation": "ɔ̀ɔkkamlaŋkaay",
    "frequency": "7回中2回",
    "exampleTh": "การออกกำลังกายอย่างสม่ำเสมอทำให้ร่างกายแข็งแรง",
    "exampleJa": "定期的に運動することは体を健康にします。"
  },
  {
    "id": 705,
    "word": "อันตราย",
    "meaning": "危険な",
    "pronunciation": "antaraay",
    "frequency": "7回中2回",
    "exampleTh": "การยืนใกล้ขอบชานชาลาเป็นอันตรายอย่างยิ่ง",
    "exampleJa": "プラットホームの端の近くに立つことは非常に危険です。"
  },
  {
    "id": 706,
    "word": "อารมณ์",
    "meaning": "感情、機嫌、気分",
    "pronunciation": "aarom",
    "frequency": "7回中2回",
    "exampleTh": "เขาเป็นคนอารมณ์ดีและมีอารมณ์ขันอยู่เสมอ",
    "exampleJa": "彼はいつも機嫌が良く、ユーモアのセンスがある人だ。"
  },
  {
    "id": 707,
    "word": "อินเทอร์เน็ต",
    "meaning": "インターネット",
    "pronunciation": "inthəənét",
    "frequency": "7回中2回",
    "exampleTh": "เราสามารถค้นคว้าข้อมูลได้ง่ายดายผ่านทางอินเทอร์เน็ต",
    "exampleJa": "私たちはインターネットを通じて簡単に情報を検索することができます。"
  },
  {
    "id": 708,
    "word": "อีกที",
    "meaning": "もう一度",
    "pronunciation": "iiktii",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาอธิบายขั้นตอนนั้นให้ฉันฟังอีกทีได้ไหมครับ",
    "exampleJa": "その手順をもう一度私に説明していただけますか。"
  },
  {
    "id": 709,
    "word": "อีเมล์",
    "meaning": "Eメール",
    "pronunciation": "iimeel",
    "frequency": "7回中2回",
    "exampleTh": "กรุณาส่งสรุปรายงานการประชุมผ่านทางอีเมล์",
    "exampleJa": "会議の概要報告書をEメールで送信してください。"
  },
  {
    "id": 710,
    "word": "อืด",
    "meaning": "膨らんだ、のびた（麺など）、遅い",
    "pronunciation": "ʉ̀at",
    "frequency": "7回中2回",
    "exampleTh": "ปล่อยบะหมี่ไว้นานจนอืดทานไม่อร่อยแล้ว",
    "exampleJa": "ラーメンを長く放置しすぎてのびてしまい、もう美味しくない。"
  }
];
