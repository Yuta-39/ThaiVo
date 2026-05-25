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
    "exampleJa": "多くの取引先がこのプロジェクトへの共同投資に関心を示している。"
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
    "exampleJa": "トムヤムクンは世界的に有名なタイ料理です。"
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
    "exampleJa": "彼は卒業以来、この会社で働いている。"
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
    "exampleJa": "私はすでにプーケット旅行の航空券を予約しました。"
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
    "exampleJa": "あなた次第です。もちろん私はあなたに合わせますよ。"
  },
  {
    "id": 531,
    "word": "ตึก",
    "meaning": "ビル、建物",
    "pronunciation": "tʉ̀k",
    "frequency": "7回中2回",
    "exampleTh": "ตึกสูงระฟ้าตั้งอยู่ใจกลางกรุงเทพมหานคร",
    "exampleJa": "超高層ビルがバンコクの中心部に建っている。"
  },
  {
    "id": 532,
    "word": "เตรียม",
    "meaning": "準備する",
    "pronunciation": "triiam",
    "frequency": "7回中2回",
    "exampleTh": "พวกเรากำลังเตรียมจัดงานปาร์ตี้คืนนี้",
    "exampleJa": "私たちは今夜のパーティー開催の準備をしています。"
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
    "pronunciation": "thɔ́ɔŋ ʉ̀ʉt",
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
    "exampleTh": "การทำงานล่วงเวลาจะได้รับเบี้ยขยัน",
    "exampleJa": "残業すると勤勉手当が支給されます。"
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
    "exampleJa": "彼は妻と結婚してもう10年以上になる。"
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
    "exampleJa": "朝早くに庭で鳥の鳴き声が聞こえた。"
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
    "exampleJa": "今週はとても忙しくてテレビを見る時間すらない。"
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
    "exampleJa": "ワット・プラケーオ（エメラルド寺院）は非常に有名な観光地です。"
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
  },
  {
    "id": 711,
    "word": "กฎหมาย",
    "meaning": "法律",
    "pronunciation": "kot-mǎai",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องปฏิบัติตามกฎหมายของประเทศ",
    "exampleJa": "私たちは国の法律に従わなければならない。"
  },
  {
    "id": 712,
    "word": "กด",
    "meaning": "押す",
    "pronunciation": "kot",
    "frequency": "7回中1回",
    "exampleTh": "กรุณากดปุ่มนี้เพื่อเปิดประตู",
    "exampleJa": "ドアを開けるためにこのボタンを押してください。"
  },
  {
    "id": 713,
    "word": "กดราคา",
    "meaning": "買い叩く、値切る",
    "pronunciation": "kot-raa-khaa",
    "frequency": "7回中1回",
    "exampleTh": "พ่อค้าพยา��ามกดราคาสินค้าจากชาวสวน",
    "exampleJa": "商人は農家からの商品の価格を買い叩こうとした。"
  },
  {
    "id": 714,
    "word": "ก็ดี",
    "meaning": "〜も良い、〜でも良い",
    "pronunciation": "kɔ̂ɔ-dii",
    "frequency": "7回中1回",
    "exampleTh": "ไปเที่ยวทะเลตอนหน้าร้อนก็ดีนะ",
    "exampleJa": "夏に海へ旅行に行くのも良いですね。"
  },
  {
    "id": 715,
    "word": "ก็ต่อเมื่อ",
    "meaning": "〜の時だけ、〜して初めて",
    "pronunciation": "kɔ̂ɔ-tɔ̀ɔ-mʉ̂ang",
    "frequency": "7回中1回",
    "exampleTh": "เขาจะพูดก็ต่อเมื่อมีคนถามเท่านั้น",
    "exampleJa": "彼は人に聞かれた時にだけ話す。"
  },
  {
    "id": 716,
    "word": "ก็ตาม",
    "meaning": "〜であっても、〜でも",
    "pronunciation": "kɔ̂ɔ-taam",
    "frequency": "7回中1回",
    "exampleTh": "ไม่ว่าจะเกิดอะไรขึ้นก็ตาม ฉันจะช่วยคุณ",
    "exampleJa": "何が起ころうとも、私はあなたを助けます。"
  },
  {
    "id": 717,
    "word": "กติกา",
    "meaning": "ルール、規則",
    "pronunciation": "kà-tì-kaa",
    "frequency": "7回中1回",
    "exampleTh": "ทุกคนต้องเล่นเกมตามกติกาที่กำหนด",
    "exampleJa": "全員が定められたルールに従ってゲームをしなければならない。"
  },
  {
    "id": 718,
    "word": "ก็เพราะ",
    "meaning": "なぜなら〜だから",
    "pronunciation": "kɔ̂ɔ-phrɔ́",
    "frequency": "7回中1回",
    "exampleTh": "ที่เขาไม่มาก็เพราะว่าเขาไม่สบาย",
    "exampleJa": "彼が来ないのは、体調が悪いからだ。"
  },
  {
    "id": 719,
    "word": "ก็ยิ่ง",
    "meaning": "ますます〜、さらに〜",
    "pronunciation": "kɔ̂ɔ-yîng",
    "frequency": "7回中1回",
    "exampleTh": "ยิ่งฝึกฝนมากเท่าไหร่ ก็ยิ่งเก่งขึ้นเท่านั้น",
    "exampleJa": "練習すればするほど、ますます上手になります。"
  },
  {
    "id": 720,
    "word": "กรกฎาคม",
    "meaning": "7月",
    "pronunciation": "kà-rá-kà-daa-khom",
    "frequency": "7回中1回",
    "exampleTh": "ฉันจะไปเที่ยวญี่ปุ่นในเดือนกรกฎาคม",
    "exampleJa": "私は7月に日本へ旅行に行きます。"
  },
  {
    "id": 721,
    "word": "กรรไกร",
    "meaning": "ハサミ",
    "pronunciation": "kan-krai",
    "frequency": "7回中1回",
    "exampleTh": "ช่วยส่งกรรไกรตัดกระดาษให้หน่อยได้ไหม",
    "exampleJa": "紙を切るハサミを渡してくれませんか？"
  },
  {
    "id": 722,
    "word": "กรอก",
    "meaning": "記入する、注ぐ",
    "pronunciation": "krɔ̀ɔk",
    "frequency": "7回中1回",
    "exampleTh": "กรุณากรอกข้อมูลในใบสมัครนี้ให้ครบถ้วน",
    "exampleJa": "この申込書に必要事項をすべて記入してください。"
  },
  {
    "id": 723,
    "word": "กระทง",
    "meaning": "灯籠、クラトン",
    "pronunciation": "krà-thong",
    "frequency": "7回中1回",
    "exampleTh": "คนไทยนิยมลอยกระทงในคืนวันเพ็ญ",
    "exampleJa": "タイ人は満月の夜に灯籠を流すのが好きです。"
  },
  {
    "id": 724,
    "word": "กระทั่ง",
    "meaning": "〜に至るまで、〜さえも",
    "pronunciation": "krà-thâng",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำงานหนักจนกระทั่งล้มป่วยลง",
    "exampleJa": "彼は病気になるまで一生懸命働いた。"
  },
  {
    "id": 725,
    "word": "กระปุก",
    "meaning": "貯金箱、小さな瓶",
    "pronunciation": "krà-pùk",
    "frequency": "7回中1回",
    "exampleTh": "ฉันหยอดเหรียญใส่กระปุกออมสินทุกวัน",
    "exampleJa": "私は毎日貯金箱にコインを入れています。"
  },
  {
    "id": 726,
    "word": "กระเป๋าเงิน",
    "meaning": "財布",
    "pronunciation": "krà-pǎo-ngoen",
    "frequency": "7回中1回",
    "exampleTh": "ฉันลืมกระเป๋าเงินไว้บนโต๊ะอาหาร",
    "exampleJa": "私は食卓の上に財布を忘れてしまいました。"
  },
  {
    "id": 727,
    "word": "กระเป๋าสตางค์",
    "meaning": "財布",
    "pronunciation": "krà-pǎo-sa-taang",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำกระเป๋าสตางค์หายระหว่างทางไปทำงาน",
    "exampleJa": "彼は仕事に行く途中で財布を失くした。"
  },
  {
    "id": 728,
    "word": "กลับรถ",
    "meaning": "Uターンする",
    "pronunciation": "klàp-rót",
    "frequency": "7回中1回",
    "exampleTh": "กรุณากลับรถที่จุดกลับรถข้างหน้า",
    "exampleJa": "前方のUターン場所でUターンしてください。"
  },
  {
    "id": 729,
    "word": "กลางคืน",
    "meaning": "夜、夜間",
    "pronunciation": "klaang-khʉʉn",
    "frequency": "7回中1回",
    "exampleTh": "ท้องฟ้าในเวลากลางคืนมีดาวสวยงามมาก",
    "exampleJa": "夜の空には美しい星がたくさんあります。"
  },
  {
    "id": 730,
    "word": "กลางวัน",
    "meaning": "昼、昼間",
    "pronunciation": "klaang-wan",
    "frequency": "7回中1回",
    "exampleTh": "ตอนกลางวันอากาศร้อนมากจนไม่อยากออกไปไหน",
    "exampleJa": "昼間はとても暑いので、どこにも出かけたくありません。"
  },
  {
    "id": 731,
    "word": "กลาย",
    "meaning": "変わる、〜になる",
    "pronunciation": "glaai",
    "frequency": "7回中1回",
    "exampleTh": "น้ำแข็งกลายเป็นน้ำเมื่อโดนความร้อน",
    "exampleJa": "氷は熱に当たると水に変わる。"
  },
  {
    "id": 732,
    "word": "กล่าว",
    "meaning": "述べる、言う",
    "pronunciation": "glàao",
    "frequency": "7回中1回",
    "exampleTh": "เขาได้รับเชิญให้กล่าวคำปราศรัยในงาน",
    "exampleJa": "彼はイベントでスピーチをするよう招かれた。"
  },
  {
    "id": 733,
    "word": "กลิ่น",
    "meaning": "匂い、香り",
    "pronunciation": "glìn",
    "frequency": "7回中1回",
    "exampleTh": "ดอกไ���้ชนิดนี้มีกลิ่นหอมมากในตอนกลางคืน",
    "exampleJa": "この花は夜になるととても良い香りがします。"
  },
  {
    "id": 734,
    "word": "กลิ่นอับ",
    "meaning": "生乾き臭、カビ臭い",
    "pronunciation": "glìn àp",
    "frequency": "7回中1回",
    "exampleTh": "เสื้อผ้าที่ตากในร่มมักจะมีกลิ่นอับ",
    "exampleJa": "部屋干しした服はよく生乾き臭がする。"
  },
  {
    "id": 735,
    "word": "กลุ่ม",
    "meaning": "グループ、集団",
    "pronunciation": "glùm",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราทำงานกันเป็นกลุ่มเล็กๆ เพื่อความรวดเร็ว",
    "exampleJa": "私たちは迅速に進めるために小さなグループで仕事をしています。"
  },
  {
    "id": 736,
    "word": "กลุ้ม",
    "meaning": "悩む、憂鬱になる",
    "pronunciation": "glûm",
    "frequency": "7回中1回",
    "exampleTh": "อย่ามัวแต่กลุ้มเลย ทุกอย่างจะดีขึ้นเอง",
    "exampleJa": "悩んでばかりいないで、すべて上手くいきますよ。"
  },
  {
    "id": 737,
    "word": "กลุ้มใจ",
    "meaning": "悩む、心配する",
    "pronunciation": "glûm cai",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำงานหนักจนกลุ้มใจเรื่องสุขภาพของตัวเอง",
    "exampleJa": "彼は働きすぎて自分の健康のことで悩んでいる。"
  },
  {
    "id": 738,
    "word": "ก็แล้วกัน",
    "meaning": "〜にしよう、〜ということで",
    "pronunciation": "gɔ̂ɔ lɛ́ɛo gan",
    "frequency": "7回中1回",
    "exampleTh": "งั้นเย็นนี้เราไปกินข้าวร้านนี้ก็แล้วกัน",
    "exampleJa": "じゃあ、今日の夕食はこの店で食べることにしよう。"
  },
  {
    "id": 739,
    "word": "กว้าง",
    "meaning": "広い",
    "pronunciation": "gwâang",
    "frequency": "7回中1回",
    "exampleTh": "ห้องนั่งเล่นของบ้านหลังนี้กว้างขวางมาก",
    "exampleJa": "この家のリビングはとても広々としています。"
  },
  {
    "id": 740,
    "word": "ก่อสร้าง",
    "meaning": "建設する、工事する",
    "pronunciation": "gɔ̀ɔ-sâang",
    "frequency": "7回中1回",
    "exampleTh": "ถนนสายนี้กำลังอยู่ระหว่างการก่อสร้าง",
    "exampleJa": "この道路は現在建設工事中です。"
  },
  {
    "id": 741,
    "word": "กังวล",
    "meaning": "心配する、不安になる",
    "pronunciation": "gang-won",
    "frequency": "7回中1回",
    "exampleTh": "ฉันกังวลเกี่ยวกับผลการสอบในวันพรุ่งนี้",
    "exampleJa": "私は明日の試験の結果が心配です。"
  },
  {
    "id": 742,
    "word": "กันยายน",
    "meaning": "9月",
    "pronunciation": "gan-yaa-yon",
    "frequency": "7回中1回",
    "exampleTh": "โรงเรียนจะเปิดเทอมใหม่ในเดือนกันยายนนี้",
    "exampleJa": "学校はこの9月に新学期が始まります。"
  },
  {
    "id": 743,
    "word": "กับข้าว",
    "meaning": "おかず",
    "pronunciation": "gàp-khâao",
    "frequency": "7回中1回",
    "exampleTh": "แม่ทำกับข้าวอร่อยๆ ไว้รอพวกเราที่บ้าน",
    "exampleJa": "母は家で私たちを待つために美味しいおかずを作ってくれた。"
  },
  {
    "id": 744,
    "word": "กาง",
    "meaning": "広げる、張る",
    "pronunciation": "gaang",
    "frequency": "7回中1回",
    "exampleTh": "กรุณากางร่มด้วยเพราะฝนเริ่มตกแล้ว",
    "exampleJa": "雨が降り始めたので傘を広げてください。"
  },
  {
    "id": 745,
    "word": "กางเกง",
    "meaning": "ズボン",
    "pronunciation": "gaang-geeng",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ฉันซื้อกางเกงตัวใหม่สีดำมาหนึ่งตัว",
    "exampleJa": "今日、私は新しい黒いズボンを1着買いました。"
  },
  {
    "id": 746,
    "word": "การ",
    "meaning": "こと、業務、事柄",
    "pronunciation": "gaan",
    "frequency": "7回中1回",
    "exampleTh": "การทำงานร่วมกันต้องอาศัยความเข้าใจกัน",
    "exampleJa": "共同で仕事をすることには相互理解が必要です。"
  },
  {
    "id": 747,
    "word": "การกิน",
    "meaning": "食べること、食事",
    "pronunciation": "gaan-gin",
    "frequency": "7回中1回",
    "exampleTh": "การกินอาหารที่มีประโยชน์ช่วยให้ร่างกายแข็งแรง",
    "exampleJa": "体に良い食事をすることは体を健康にします。"
  },
  {
    "id": 748,
    "word": "การจราจร",
    "meaning": "交通",
    "pronunciation": "gaan-ca-raa-cɔɔn",
    "frequency": "7回中1回",
    "exampleTh": "การจราจรในกรุงเทพฯ ติดขัดมากในช่วงเย็น",
    "exampleJa": "バンコクの交通は夕方の時間帯にとても渋滞します。"
  },
  {
    "id": 749,
    "word": "การ์ด",
    "meaning": "カード",
    "pronunciation": "gáat",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเขียนการ์ดอวยพรวันเกิดส่งไปให้เพื่อน",
    "exampleJa": "私は友達に誕生日の祝いカードを書いて送りました。"
  },
  {
    "id": 750,
    "word": "การเดินทาง",
    "meaning": "旅行、移動",
    "pronunciation": "gaan-deon-thaang",
    "frequency": "7回中1回",
    "exampleTh": "การเดินทางไปต่างประเทศต้องใช้พาสปอร์ต",
    "exampleJa": "海外への旅行にはパスポートが必要です。"
  },
  {
    "id": 751,
    "word": "การ์ตูน",
    "meaning": "漫画、アニメ",
    "pronunciation": "gaar-tuun",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบอ่านการ์ตูนญี่ปุ่นมาก",
    "exampleJa": "私は日本の漫画を読むのが大好きです。"
  },
  {
    "id": 752,
    "word": "การเต้น",
    "meaning": "ダンス、踊り",
    "pronunciation": "gaar-tên",
    "frequency": "7回中1回",
    "exampleTh": "การเต้นช่วยให้ร่างกายแข็งแรง",
    "exampleJa": "ダンスは体を健康にするのに役立ちます。"
  },
  {
    "id": 753,
    "word": "การนอนหลับ",
    "meaning": "睡眠",
    "pronunciation": "gaar-nawn-làp",
    "frequency": "7回中1回",
    "exampleTh": "การนอนหลับที่ดีสำคัญต่อสุขภาพ",
    "exampleJa": "質の良い睡眠は健康にとって重要です。"
  },
  {
    "id": 754,
    "word": "การประชุม",
    "meaning": "会議",
    "pronunciation": "gaar-pra-chum",
    "frequency": "7回中1回",
    "exampleTh": "พรุ่งนี้ฉันมีการประชุมตอนเช้า",
    "exampleJa": "明日の朝、私は会議があります。"
  },
  {
    "id": 755,
    "word": "การผ่าตัด",
    "meaning": "手術",
    "pronunciation": "gaar-phàa-tàt",
    "frequency": "7回中1回",
    "exampleTh": "การผ่าตัดผ่านไปด้วยดีและปลอดภัย",
    "exampleJa": "手術は無事に安全に終わりました。"
  },
  {
    "id": 756,
    "word": "การพักผ่อน",
    "meaning": "休息、リラックス",
    "pronunciation": "gaar-phák-phòn",
    "frequency": "7回中1回",
    "exampleTh": "วันหยุดนี้ฉันต้องการการพักผ่อน",
    "exampleJa": "この週末、私は休息が必要です。"
  },
  {
    "id": 757,
    "word": "การศึกษา",
    "meaning": "教育、学習",
    "pronunciation": "gaar-sʉ̀k-sǎa",
    "frequency": "7回中1回",
    "exampleTh": "การศึกษาเป็นสิ่งสำคัญสำหรั��เด็ก",
    "exampleJa": "教育は子供たちにとって重要です。"
  },
  {
    "id": 758,
    "word": "การแสดง",
    "meaning": "演技、ショー、公演",
    "pronunciation": "gaar-sa-daeng",
    "frequency": "7回中1回",
    "exampleTh": "ผู้ชมชอบการแสดงของเขามาก",
    "exampleJa": "観客は彼の演技がとても気に入りました。"
  },
  {
    "id": 759,
    "word": "การแสดงพื้นเมือง",
    "meaning": "伝統芸能、郷土芸能",
    "pronunciation": "gaar-sa-daeng-phʉ́ʉn-mʉang",
    "frequency": "7回中1回",
    "exampleTh": "นักท่องเที่ยวชอบดูการแสดงพื้นเมือง",
    "exampleJa": "観光客は伝統芸能を見るのが好きです。"
  },
  {
    "id": 760,
    "word": "กำกับ",
    "meaning": "監督する、指揮する",
    "pronunciation": "gam-gàp",
    "frequency": "7回中1回",
    "exampleTh": "เขาเป็นคนกำกับภาพยนตร์เรื่องนี้",
    "exampleJa": "彼がこの映画を監督しました。"
  },
  {
    "id": 761,
    "word": "กำไร",
    "meaning": "利益",
    "pronunciation": "gam-rai",
    "frequency": "7回中1回",
    "exampleTh": "บริษัทได้กำไรมากในปีนี้",
    "exampleJa": "会社は今���、多くの利益を上げました。"
  },
  {
    "id": 762,
    "word": "กำลังใจ",
    "meaning": "励まし、元気、やる気",
    "pronunciation": "gam-lang-cai",
    "frequency": "7回中1回",
    "exampleTh": "ขอบคุณสำหรับกำลังใจที่มอบให้",
    "exampleJa": "励ましをいただきありがとうございます。"
  },
  {
    "id": 763,
    "word": "กิจ",
    "meaning": "用事、活動、仕事",
    "pronunciation": "gìt",
    "frequency": "7回中1回",
    "exampleTh": "เขามีกิจธุระต้องจัดการในเมือง",
    "exampleJa": "彼は街で済ませるべき用事があります。"
  },
  {
    "id": 764,
    "word": "กินข้าว",
    "meaning": "ご飯を食べる、食事する",
    "pronunciation": "gin-khâaw",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราไปกินข้าวเย็นด้วยกันไหม",
    "exampleJa": "私たちと一緒に夕食を食べに行きませんか？"
  },
  {
    "id": 765,
    "word": "กินยา",
    "meaning": "薬を飲む",
    "pronunciation": "gin-yaa",
    "frequency": "7回中1回",
    "exampleTh": "อย่าลืมกินยาก่อนนอนนะ",
    "exampleJa": "寝る前に薬を飲むのを忘れないでね。"
  },
  {
    "id": 766,
    "word": "กิโลก��ัม",
    "meaning": "キログラム",
    "pronunciation": "gi-loo-gram",
    "frequency": "7回中1回",
    "exampleTh": "แตงโมผลนี้หนักประมาณสามกิโลกรัม",
    "exampleJa": "このスイカの重さは約3キログラムです。"
  },
  {
    "id": 767,
    "word": "กี่",
    "meaning": "いくつ、何〜",
    "pronunciation": "gìi",
    "frequency": "7回中1回",
    "exampleTh": "คุณมีพี่น้องทั้งหมดกี่คน",
    "exampleJa": "あなたはきょうだいが全部で何人いますか？"
  },
  {
    "id": 768,
    "word": "กี่โมง",
    "meaning": "何時",
    "pronunciation": "gìi-moong",
    "frequency": "7回中1回",
    "exampleTh": "ตอนนี้เวลาประมาณกี่โมงแล้ว",
    "exampleJa": "今、だいたい何時ですか？"
  },
  {
    "id": 769,
    "word": "กีฬา",
    "meaning": "スポーツ",
    "pronunciation": "gii-laa",
    "frequency": "7回中1回",
    "exampleTh": "เขาชอบเล่นกีฬาหลายประเภท",
    "exampleJa": "彼は多くの種類のスポーツをするのが好きです。"
  },
  {
    "id": 770,
    "word": "กุ้งอบวุ้เส้น",
    "meaning": "エビと春雨の蒸し焼き",
    "pronunciation": "gûng-òp-wún-sên",
    "frequency": "7回中1回",
    "exampleTh": "���้านนี้ทำกุ้งอบวุ้นเส้นอร่อยมาก",
    "exampleJa": "この店のエビと春雨の蒸し焼きはとても美味しいです。"
  },
  {
    "id": 771,
    "word": "เก่งขึ้น",
    "meaning": "上達する",
    "pronunciation": "gèng-khûen",
    "frequency": "7回中1回",
    "exampleTh": "เขาพูดภาษาไทยเก่งขึ้นมาก",
    "exampleJa": "彼はタイ語がとても上達した。"
  },
  {
    "id": 772,
    "word": "เก็บเงิน",
    "meaning": "貯金する",
    "pronunciation": "gèp-nguen",
    "frequency": "7回中1回",
    "exampleTh": "ฉันกำลังเก็บเงินเพื่อซื้อบ้าน",
    "exampleJa": "私は家を買うためにお金を貯めている。"
  },
  {
    "id": 773,
    "word": "เกรง",
    "meaning": "気兼ねする",
    "pronunciation": "greng",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเกรงว่าจะทำให้เข��ไม่พอใจ",
    "exampleJa": "彼を不快にさせてしまうのではないかと心配だ。"
  },
  {
    "id": 774,
    "word": "เกลียด",
    "meaning": "嫌う",
    "pronunciation": "glìat",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเกลียดการตื่นนอนตอนเช้า",
    "exampleJa": "私は朝起きるのが嫌いだ。"
  },
  {
    "id": 775,
    "word": "เกษียณ",
    "meaning": "定年退職する",
    "pronunciation": "gà-sǐan",
    "frequency": "7回中1回",
    "exampleTh": "พ่อของฉันจะเกษียณอายุปีนี้",
    "exampleJa": "私の父は今年定年退職します。"
  },
  {
    "id": 776,
    "word": "เก้าอี้",
    "meaning": "椅子",
    "pronunciation": "gâo-îi",
    "frequency": "7回中1回",
    "exampleTh": "กรุณานั่งลงบนเก้าอี้ตัวนี้",
    "exampleJa": "この椅子にお掛けください。"
  },
  {
    "id": 777,
    "word": "เกียวโต",
    "meaning": "京都",
    "pronunciation": "giao-too",
    "frequency": "7回中1回",
    "exampleTh": "ฉันอยากไปเที่ยวเกียวโตในฤดูใบไม้ร่วง",
    "exampleJa": "秋に京都へ旅行に行きたいです。"
  },
  {
    "id": 778,
    "word": "แก้ไข",
    "meaning": "解決する",
    "pronunciation": "gâe-khǎi",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องแก้ไขปัญหานี้โดยเร็ว",
    "exampleJa": "私たちはこの問題を早く解決しなければならない。"
  },
  {
    "id": 779,
    "word": "แกง",
    "meaning": "カレー",
    "pronunciation": "gaeng",
    "frequency": "7回中1回",
    "exampleTh": "แม่ทำแกงเผ็ดไก่รสชาติอร่อยมาก",
    "exampleJa": "母が作った鶏肉のレッドカレーはとても美味しい。"
  },
  {
    "id": 780,
    "word": "แกงจืด",
    "meaning": "すましスープ",
    "pronunciation": "gaeng-cùet",
    "frequency": "7回中1回",
    "exampleTh": "แกงจืดเต้าหู้หมูสับดีต่อสุขภาพ",
    "exampleJa": "豆腐と豚ひき肉のすましスープは健康に良い。"
  },
  {
    "id": 781,
    "word": "แก่งเฒ่า",
    "meaning": "年老いた",
    "pronunciation": "gàeng-thâo",
    "frequency": "7回中1回",
    "exampleTh": "เมื่อคนเราแก่งเฒ่าลงก็ต้องการการดูแล",
    "exampleJa": "人は年老いるとケアが必要になる。"
  },
  {
    "id": 782,
    "word": "ใกล้ชิด",
    "meaning": "親密な",
    "pronunciation": "glâi-chít",
    "frequency": "7回中1回",
    "exampleTh": "สองคนนี้มีความสัมพันธ์ที่ใกล้ชิดกันมาก",
    "exampleJa": "この二人はとても親密な関係にある。"
  },
  {
    "id": 783,
    "word": "ขณะนั้น",
    "meaning": "その時",
    "pronunciation": "khà-nà-nán",
    "frequency": "7回中1回",
    "exampleTh": "ขณะนั้นฉันกำลังเรียนอยู่ที่มหาวิทยาลัย",
    "exampleJa": "その時、私は大学で勉強していた。"
  },
  {
    "id": 784,
    "word": "ขบวน",
    "meaning": "列",
    "pronunciation": "khà-buan",
    "frequency": "7回中1回",
    "exampleTh": "รถไฟขบวนนี้จะไปถึงกรุงเทพฯ ตอนเย็น",
    "exampleJa": "この列車は夕方にバンコクに到着します。"
  },
  {
    "id": 785,
    "word": "ขยะ",
    "meaning": "ゴミ",
    "pronunciation": "khà-yà",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาทิ้งขยะลงในถังขยะด้วยครับ",
    "exampleJa": "ゴミはゴミ箱に捨ててください。"
  },
  {
    "id": 786,
    "word": "ขยันขันแข็ง",
    "meaning": "勤勉な",
    "pronunciation": "khà-yǎn-khǎn-khǎeng",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำงานอย���างขยันขันแข็งทุกวัน",
    "exampleJa": "彼は毎日とても勤勉に働いている。"
  },
  {
    "id": 787,
    "word": "ขวด",
    "meaning": "瓶",
    "pronunciation": "khùat",
    "frequency": "7回中1回",
    "exampleTh": "ช่วยเปิดขวดน้ำปลาให้หน่อยได้ไหม",
    "exampleJa": "ナンプラーの瓶を開けてくれませんか？"
  },
  {
    "id": 788,
    "word": "ขวบ",
    "meaning": "〜歳",
    "pronunciation": "khùap",
    "frequency": "7回中1回",
    "exampleTh": "ลูกสาวของฉันอายุสามขวบแล้ว",
    "exampleJa": "私の娘はもう3歳になりました。"
  },
  {
    "id": 789,
    "word": "ขวัญ",
    "meaning": "士気",
    "pronunciation": "khwǎn",
    "frequency": "7回中1回",
    "exampleTh": "ทหารทุกคนมีขวัญและกำลังใจดีเยี่ยม",
    "exampleJa": "兵士たちはみな士気が非常に高かった。"
  },
  {
    "id": 790,
    "word": "ข้อกำหนด",
    "meaning": "規定",
    "pronunciation": "khâo-gàm-nòt",
    "frequency": "7回中1回",
    "exampleTh": "ทุกคนต้องปฏิบัติตามข้อกำหนดของบริษัท",
    "exampleJa": "全員が会社の規定に従わなければならない。"
  },
  {
    "id": 791,
    "word": "ของกิน",
    "meaning": "食べ物",
    "pronunciation": "khɔ̌ɔŋ-kin",
    "frequency": "7回中1回",
    "exampleTh": "ที่ตลาดนี้มีของกินอร่อยๆ เยอะมาก",
    "exampleJa": "この市場には美味しい食べ物がたくさんあります。"
  },
  {
    "id": 792,
    "word": "ของหวาน",
    "meaning": "デザート",
    "pronunciation": "khɔ̌ɔŋ-wǎan",
    "frequency": "7回中1回",
    "exampleTh": "หลังกินข้าวเสร็จฉันชอบกินของหวาน",
    "exampleJa": "ご飯を食べた後、私はデザートを食べるのが好きです。"
  },
  {
    "id": 793,
    "word": "ข้อเท็จจริง",
    "meaning": "事実",
    "pronunciation": "kh��̂ɔ-thét-ciŋ",
    "frequency": "7回中1回",
    "exampleTh": "ตำรวจกำลังสืบหาข้อเท็จจริงของคดีนี้",
    "exampleJa": "警察はこの事件の事実を調査しています。"
  },
  {
    "id": 794,
    "word": "ข้อมูล",
    "meaning": "情報",
    "pronunciation": "khɔ̂ɔ-muun",
    "frequency": "7回中1回",
    "exampleTh": "กรุณากรอกข้อมูลส่วนตัวในแบบฟอร์มนี้",
    "exampleJa": "この用紙に個人情報を記入してください。"
  },
  {
    "id": 795,
    "word": "ขอสาย",
    "meaning": "電話をつなぐ",
    "pronunciation": "khɔ̌ɔ-sǎai",
    "frequency": "7回中1回",
    "exampleTh": "ขอสายคุณสมชายหน่อยครับ",
    "exampleJa": "ソムチャイさんをお願いします。"
  },
  {
    "id": 796,
    "word": "ขอแสดงความนับถือ",
    "meaning": "敬具",
    "pronunciation": "khɔ̌ɔ-sà-dɛɛŋ-khwaam-náp-thʉ̌ʉ",
    "frequency": "7回中1回",
    "exampleTh": "ขอแสดงความนับถืออย่างสูง",
    "exampleJa": "敬具（手紙の結び言葉）"
  },
  {
    "id": 797,
    "word": "ขอแสดงความยินดี",
    "meaning": "おめでとうございます",
    "pronunciation": "khɔ̌ɔ-sà-dɛɛŋ-khwaam-yin-dii",
    "frequency": "7回中1回",
    "exampleTh": "ขอแสดงความยินดีกับงานแต่งงานของคุณด้วย",
    "exampleJa": "ご結婚おめでとうございます。"
  },
  {
    "id": 798,
    "word": "ขอให้",
    "meaning": "〜を願う",
    "pronunciation": "khɔ̌ɔ-hâi",
    "frequency": "7回中1回",
    "exampleTh": "ขอให้คุณมีความสุขในวันเกิดนะ",
    "exampleJa": "誕生日にお幸せでありますように。"
  },
  {
    "id": 799,
    "word": "ขันแข็ง",
    "meaning": "熱心な",
    "pronunciation": "khǎn-khɛ̌ŋ",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำงานอย่างขันแข็งเพื่อครอบครัว",
    "exampleJa": "彼は家族のために熱心に働いています。"
  },
  {
    "id": 800,
    "word": "ขับลม",
    "meaning": "ガスを排出する",
    "pronunciation": "khàp-lom",
    "frequency": "7回中1回",
    "exampleTh": "สมุนไพรชนิดนี้มีสรรพคุณช่วยขับลม",
    "exampleJa": "このハーブにはお腹のガスを排出する効果があります。"
  },
  {
    "id": 801,
    "word": "ข้างต้น",
    "meaning": "上記の",
    "pronunciation": "khâaŋ-tôn",
    "frequency": "7回中1回",
    "exampleTh": "โปรดอ่านรายละเอียดตามที่ระบุไว้ข้างต้น",
    "exampleJa": "上記に記載された詳細をお読みください。"
  },
  {
    "id": 802,
    "word": "ข้างใน",
    "meaning": "中",
    "pronunciation": "khâaŋ-nai",
    "frequency": "7回中1回",
    "exampleTh": "ข้างในกล่องนี้มีอะไรอยู่เหรอ",
    "exampleJa": "この箱の中には何が入っていますか？"
  },
  {
    "id": 803,
    "word": "ข้างหน้า",
    "meaning": "前",
    "pronunciation": "khâaŋ-nâa",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาจอดรถที่ข้างหน้าตึกนี้ครับ",
    "exampleJa": "このビルの前で車を止めてください。"
  },
  {
    "id": 804,
    "word": "ขาดทุน",
    "meaning": "赤字になる",
    "pronunciation": "khàat-thun",
    "frequency": "7回中1回",
    "exampleTh": "ปีนี้ธุรกิจของเขาขาดทุนอย่างหนัก",
    "exampleJa": "今年、彼のビジネスは深刻な赤字になりました。"
  },
  {
    "id": 805,
    "word": "ขายยา",
    "meaning": "薬を売る",
    "pronunciation": "khǎai-yaa",
    "frequency": "7回中1回",
    "exampleTh": "ร้านนี้ขายยาทั้งแผนปัจจุบันและแผนโบราณ",
    "exampleJa": "この店は現代薬と伝統薬の両方を販売しています。"
  },
  {
    "id": 806,
    "word": "ข้าราชการ",
    "meaning": "公務員",
    "pronunciation": "khâa-râat-chá-kaan",
    "frequency": "7回中1回",
    "exampleTh": "พ่อของฉันทำงานเป็นข้าราชการครู",
    "exampleJa": "私の父は教員公務員として働いています。"
  },
  {
    "id": 807,
    "word": "ขี้",
    "meaning": "糞",
    "pronunciation": "khîi",
    "frequency": "7回中1回",
    "exampleTh": "อย่าทำตัวเป็นคนขี้บ่นไปหน่อยเลย",
    "exampleJa": "あまり愚痴っぽい人にならないでください。"
  },
  {
    "id": 808,
    "word": "ขี้กลัว",
    "meaning": "臆病な",
    "pronunciation": "khîi-klua",
    "frequency": "7回中1回",
    "exampleTh": "น้องสาวของฉันเป็นคนขี้กลัวความมืด",
    "exampleJa": "私の妹は暗闇を怖がる怖がりな人です。"
  },
  {
    "id": 809,
    "word": "ขี้เมา",
    "meaning": "酔っ払い",
    "pronunciation": "khîi-mao",
    "frequency": "7回中1回",
    "exampleTh": "เขาเป็นคนขี้เมาที่ชอบดื่มเหล้าทุกวัน",
    "exampleJa": "彼は毎日お酒を飲むのが好きな酔っ払いです。"
  },
  {
    "id": 810,
    "word": "ขี้เหงา",
    "meaning": "寂しがり屋の",
    "pronunciation": "khîi-ŋǎo",
    "frequency": "7回中1回",
    "exampleTh": "สุนัขตัวนี้ขี้เหงาและชอบอยู่ใกล้คน",
    "exampleJa": "この犬は寂しがり屋で、人の近くにいるのが好きです。"
  },
  {
    "id": 811,
    "word": "ขี้เหนียว",
    "meaning": "ケチな",
    "pronunciation": "kîi-nǐao",
    "frequency": "7回中1回",
    "exampleTh": "เขาเป็นคนขี้เหนียวไม่ยอมเลี้ยงเพื่อน",
    "exampleJa": "彼はケチで友達に奢ろうとしない。"
  },
  {
    "id": 812,
    "word": "ขีอิจฉา",
    "meaning": "嫉妬深い",
    "pronunciation": "kîi-ìt-chǎa",
    "frequency": "7回中1回",
    "exampleTh": "อย่าเป็นคนขีอิจฉาคนอื่นเลย",
    "exampleJa": "他人を羨む嫉妬深い人になってはいけない。"
  },
  {
    "id": 813,
    "word": "ขึ้นไป",
    "meaning": "上がる、以上",
    "pronunciation": "khʉ̂n-pai",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาเดินขึ้นไปบนชั้นสองครับ",
    "exampleJa": "2階へ上がってください。"
  },
  {
    "id": 814,
    "word": "เข้ม",
    "meaning": "濃い",
    "pronunciation": "kêm",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบดื่มกาแฟรสเข้มข้น",
    "exampleJa": "私は濃い味のコーヒーを飲むのが好きです。"
  },
  {
    "id": 815,
    "word": "เข้มแข็ง",
    "meaning": "強い、たくましい",
    "pronunciation": "kêm-khɛ̌ng",
    "frequency": "7回中1回",
    "exampleTh": "เธอเป็นผู้หญิงที่เข้มแข็งมาก",
    "exampleJa": "彼女はとても強い女性です。"
  },
  {
    "id": 816,
    "word": "เขย่า",
    "meaning": "振る、揺らす",
    "pronunciation": "kha-yào",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาเขย่าขวดก่อนดื่มยานี้",
    "exampleJa": "この薬を飲む前にボトルを振ってください。"
  },
  {
    "id": 817,
    "word": "เข้าใจผิด",
    "meaning": "誤解する",
    "pronunciation": "khâo-cai-phìt",
    "frequency": "7回中1回",
    "exampleTh": "ขอโทษที ฉันเข้าใจผิดไปเอง",
    "exampleJa": "ごめんなさい、私が誤解していました。"
  },
  {
    "id": 818,
    "word": "เข้านอน",
    "meaning": "寝る、就寝する",
    "pronunciation": "khâo-nɔon",
    "frequency": "7回中1回",
    "exampleTh": "เด็กๆ ควรเข้านอนก่อนสี่ทุ่ม",
    "exampleJa": "子供たちは夜10時前に寝るべきです。"
  },
  {
    "id": 819,
    "word": "แข้ง",
    "meaning": "すね",
    "pronunciation": "khɛ̂ng",
    "frequency": "7回中1回",
    "exampleTh": "เขาวิ่งชนโต๊ะจนเจ็บหน้าแข้ง",
    "exampleJa": "彼はテーブルにぶつかってすねを痛めた。"
  },
  {
    "id": 820,
    "word": "แข่งขัน",
    "meaning": "競争する、競う",
    "pronunciation": "khɛ̀ŋ-khǎn",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราจะเข้าร่วมการแข่งขันฟุตบอล",
    "exampleJa": "私たちはサッカーの大会に参加します。"
  },
  {
    "id": 821,
    "word": "ไข",
    "meaning": "鍵を開ける、解き明かす",
    "pronunciation": "khǎi",
    "frequency": "7回中1回",
    "exampleTh": "เขาใช้กุญแจไขประตูบ้าน",
    "exampleJa": "彼は鍵を使って家のドアを開けた。"
  },
  {
    "id": 822,
    "word": "ไขมัน",
    "meaning": "脂肪",
    "pronunciation": "khǎi-man",
    "frequency": "7回中1回",
    "exampleTh": "อาหารจานนี้มีไขมันสูงมาก",
    "exampleJa": "この料理はとても脂肪分が多い。"
  },
  {
    "id": 823,
    "word": "คงต้อง",
    "meaning": "おそらく〜しなければならない",
    "pronunciation": "khong-tɔ̂ng",
    "frequency": "7回中1回",
    "exampleTh": "พรุ่งนี้ฉันคงต้องไปทำงานแต่เช้า",
    "exampleJa": "明日はおそらく朝早く仕事に行かなければならない。"
  },
  {
    "id": 824,
    "word": "คดี",
    "meaning": "事件、訴訟",
    "pronunciation": "kha-dii",
    "frequency": "7回中1回",
    "exampleTh": "ตำรวจกำลังสืบสวนคดีนี้อยู่",
    "exampleJa": "警察がこの事件を捜査している。"
  },
  {
    "id": 825,
    "word": "คนแก่",
    "meaning": "老人、お年寄り",
    "pronunciation": "khon-gɛ̀ɛ",
    "frequency": "7回中1回",
    "exampleTh": "เราควรช่วยเหลือคนแก่ข้ามถนน",
    "exampleJa": "私たちはお年寄りの道路横断を助けるべきだ。"
  },
  {
    "id": 826,
    "word": "คนขาย",
    "meaning": "売り手、店員",
    "pronunciation": "khon-khǎai",
    "frequency": "7回中1回",
    "exampleTh": "คนขายลดราคาเสื้อตัวน���้ให้ฉัน",
    "exampleJa": "店員がこの服を値引きしてくれた。"
  },
  {
    "id": 827,
    "word": "ครอง",
    "meaning": "支配する、維持する",
    "pronunciation": "khrɔɔng",
    "frequency": "7回中1回",
    "exampleTh": "ทีมนี้ครองแชมป์มาสามปีซ้อนแล้ว",
    "exampleJa": "このチームは3年連続で王座を維持している。"
  },
  {
    "id": 828,
    "word": "ครองชีพ",
    "meaning": "生計を立てる、暮らし",
    "pronunciation": "khrɔɔng-chîip",
    "frequency": "7回中1回",
    "exampleTh": "ค่าครองชีพในเมืองหลวงสูงมาก",
    "exampleJa": "首都の生活費は非常に高い。"
  },
  {
    "id": 829,
    "word": "ครอบ",
    "meaning": "被せる、覆う",
    "pronunciation": "khrɔ̂ɔp",
    "frequency": "7回中1回",
    "exampleTh": "แม่ใช้ฝาชีครอบอาหารไว้บนโต๊ะ",
    "exampleJa": "母はテーブルの上の料理にフードカバーを被せた。"
  },
  {
    "id": 830,
    "word": "ครั้งเดียว",
    "meaning": "一回だけ、一度だけ",
    "pronunciation": "khráng-diao",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเคยไปเที่ยวญี่ปุ่นแค่ครั้งเดียว",
    "exampleJa": "私は日本へ一度だけ旅行に行ったことがある。"
  },
  {
    "id": 831,
    "word": "ครั้งแรก",
    "meaning": "初めて",
    "pronunciation": "khráng-râek",
    "frequency": "7回中1回",
    "exampleTh": "นี่เป็นครั้งแรกที่ฉันมาเที่ยวญี่ปุ่น",
    "exampleJa": "これは私が日本に旅行に来た初めての機会です。"
  },
  {
    "id": 832,
    "word": "ครัว",
    "meaning": "台所",
    "pronunciation": "khrua",
    "frequency": "7回中1回",
    "exampleTh": "แม่กำลังทำอาหารอยู่ในครัว",
    "exampleJa": "母は台所で料理をしています。"
  },
  {
    "id": 833,
    "word": "คล้าย",
    "meaning": "似ている",
    "pronunciation": "khláai",
    "frequency": "7回中1回",
    "exampleTh": "ลูกสาวหน้าตาคล้���ยแม่มาก",
    "exampleJa": "娘の顔立ちは母親にとてもよく似ています。"
  },
  {
    "id": 834,
    "word": "คล้ายกัน",
    "meaning": "似ている",
    "pronunciation": "khláai-kan",
    "frequency": "7回中1回",
    "exampleTh": "สองคนนี้มีนิสัยคล้ายกันมาก",
    "exampleJa": "この二人は性格がとてもよく似ています。"
  },
  {
    "id": 835,
    "word": "คล้ายกับ",
    "meaning": "〜に似ている",
    "pronunciation": "khláai-kàp",
    "frequency": "7回中1回",
    "exampleTh": "รสชาตินี้คล้ายกับอาหารไทย",
    "exampleJa": "この味はタイ料理に似ています。"
  },
  {
    "id": 836,
    "word": "ควบคุม",
    "meaning": "管理する",
    "pronunciation": "khuap-khum",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องควบคุมค่าใช้จ่ายในเดือนนี้",
    "exampleJa": "私たちは今月の支出を管理しなければなりません。"
  },
  {
    "id": 837,
    "word": "ความเครียด",
    "meaning": "ストレス",
    "pronunciation": "khwaam-khrîat",
    "frequency": "7回中1回",
    "exampleTh": "การออกกำลังกายช่วยลดความเครียดได้",
    "exampleJa": "��動はストレスを軽減するのに役立ちます。"
  },
  {
    "id": 838,
    "word": "ความจริง",
    "meaning": "真実",
    "pronunciation": "khwaam-cing",
    "frequency": "7回中1回",
    "exampleTh": "ในที่สุดความจริงก็เปิดเผยออกมา",
    "exampleJa": "ついに真実が明らかになりました。"
  },
  {
    "id": 839,
    "word": "ความเชื่อ",
    "meaning": "信念",
    "pronunciation": "khwaam-chûea",
    "frequency": "7回中1回",
    "exampleTh": "เรื่องนี้เป็นความเชื่อส่วนบุคคล",
    "exampleJa": "この件は個人の信念によるものです。"
  },
  {
    "id": 840,
    "word": "ความนับถือ",
    "meaning": "尊敬",
    "pronunciation": "khwaam-náp-thǔe",
    "frequency": "7回中1回",
    "exampleTh": "ฉันมีความนับถือในตัวอาจารย์ท่านนี้",
    "exampleJa": "私はこの先生に尊敬の念を抱いています。"
  },
  {
    "id": 841,
    "word": "ความประมาท",
    "meaning": "不注意",
    "pronunciation": "khwaam-pra-màat",
    "frequency": "7回中1回",
    "exampleTh": "อุบัติเหตุเกิดขึ้นจากความประมาท",
    "exampleJa": "事故は不注意から起こりました���"
  },
  {
    "id": 842,
    "word": "ความปลอดภัย",
    "meaning": "安全",
    "pronunciation": "khwaam-plòot-phai",
    "frequency": "7回中1回",
    "exampleTh": "บริษัทให้ความสำคัญกับความปลอดภัย",
    "exampleJa": "会社は安全を重視しています。"
  },
  {
    "id": 843,
    "word": "ความยาก",
    "meaning": "難しさ",
    "pronunciation": "khwaam-yâak",
    "frequency": "7回中1回",
    "exampleTh": "ข้อสอบนี้มีความยากมากเกินไป",
    "exampleJa": "この試験は難しすぎます。"
  },
  {
    "id": 844,
    "word": "ความยินดี",
    "meaning": "喜び",
    "pronunciation": "khwaam-yin-dii",
    "frequency": "7回中1回",
    "exampleTh": "ฉันขอแสดงความยินดีกับความสำเร็จของคุณ",
    "exampleJa": "あなたの成功にお祝いを申し上げます。"
  },
  {
    "id": 845,
    "word": "ความรอบคอบ",
    "meaning": "慎重さ",
    "pronunciation": "khwaam-rôop-khôop",
    "frequency": "7回中1回",
    "exampleTh": "การทำงานนี้ต้องใช้ความรอบคอบสูง",
    "exampleJa": "この仕事をするには高い慎重さが必要です。"
  },
  {
    "id": 846,
    "word": "ความระ��ัดระวัง",
    "meaning": "注意",
    "pronunciation": "khwaam-ra-mát-ra-wang",
    "frequency": "7回中1回",
    "exampleTh": "โปรดขับรถด้วยความระมัดระวัง",
    "exampleJa": "注意して運転してください。"
  },
  {
    "id": 847,
    "word": "ความรู้",
    "meaning": "知識",
    "pronunciation": "khwaam-rúu",
    "frequency": "7回中1回",
    "exampleTh": "การอ่านหนังสือช่วยเพิ่มพูนความรู้",
    "exampleJa": "本を読むことは知識を増やすのに役立ちます。"
  },
  {
    "id": 848,
    "word": "ความเร็ว",
    "meaning": "速度",
    "pronunciation": "khwaam-reo",
    "frequency": "7回中1回",
    "exampleTh": "รถไฟวิ่งด้วยความเร็วสูงมาก",
    "exampleJa": "電車は非常に高速で走っています。"
  },
  {
    "id": 849,
    "word": "ความสะดวก",
    "meaning": "便利さ",
    "pronunciation": "khwaam-sa-dùak",
    "frequency": "7回中1回",
    "exampleTh": "ร้านนี้เปิดบริการเพื่อความสะดวกของลูกค้า",
    "exampleJa": "この店は顧客の利便性のために営業しています。"
  },
  {
    "id": 850,
    "word": "ความสับสน",
    "meaning": "混乱",
    "pronunciation": "khwaam-sàp-sǒn",
    "frequency": "7回中1回",
    "exampleTh": "คำอธิบายนี้ทำให้เกิดความสับสน",
    "exampleJa": "この説明は混乱を招きます。"
  },
  {
    "id": 851,
    "word": "ความอ้วน",
    "meaning": "肥満、太ること",
    "pronunciation": "khwaam-ûan",
    "frequency": "7回中1回",
    "exampleTh": "การกินของหวานมากเกินไปทำให้เกิดความอ้วน",
    "exampleJa": "甘いものを食べすぎると肥満の原因になります。"
  },
  {
    "id": 852,
    "word": "คอมพิวเตอร์",
    "meaning": "コンピュータ",
    "pronunciation": "khom-phiu-tôo",
    "frequency": "7回中1回",
    "exampleTh": "ฉันซื้อคอมพิวเตอร์เครื่องใหม่เมื่อวานนี้",
    "exampleJa": "私は昨日、新しいコンピュータを買いました。"
  },
  {
    "id": 853,
    "word": "คอย",
    "meaning": "待つ",
    "pronunciation": "khooy",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาคอยตรงนี้สักครู่นะคะ",
    "exampleJa": "ここで少しの間待ってください。"
  },
  {
    "id": 854,
    "word": "คะน้า",
    "meaning": "カイラン菜",
    "pronunciation": "kha-náa",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบกินผัดคะน้าหมูกรอบมาก",
    "exampleJa": "私はカリカリ豚とカイラン菜の炒め物が大好きです。"
  },
  {
    "id": 855,
    "word": "คะแนน",
    "meaning": "点数、得点",
    "pronunciation": "kha-naen",
    "frequency": "7回中1回",
    "exampleTh": "เขาได้คะแนนเต็มในการสอบวิชาคณิตศาสตร์",
    "exampleJa": "彼は数学の試験で満点を取りました。"
  },
  {
    "id": 856,
    "word": "คับ",
    "meaning": "きつい、窮屈な",
    "pronunciation": "kháp",
    "frequency": "7回中1回",
    "exampleTh": "รองเท้าคู่นี้คับเกินไป ใส่ไม่สบายเลย",
    "exampleJa": "この靴はきつすぎて、履き心地がよくありません。"
  },
  {
    "id": 857,
    "word": "ค่าครองชีพ",
    "meaning": "生活費",
    "pronunciation": "khâa-khrooŋ-chîip",
    "frequency": "7回中1回",
    "exampleTh": "ค่าครองชีพในกรุงเทพฯ สูงขึ้นทุกปี",
    "exampleJa": "バンコクの生活費は毎年上がっています。"
  },
  {
    "id": 858,
    "word": "ค้าง",
    "meaning": "泊まる、残る",
    "pronunciation": "kháaŋ",
    "frequency": "7回中1回",
    "exampleTh": "คืนนี้ฉันจะค้างที่บ้านเพื่อน",
    "exampleJa": "今夜は友達の家に泊まります。"
  },
  {
    "id": 859,
    "word": "ค้างคืน",
    "meaning": "一泊する、泊まる",
    "pronunciation": "kháaŋ-khuun",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราไปเที่ยวทะเลและค้างคืนที่นั่น",
    "exampleJa": "私たちは海へ旅行に行き、そこに一泊しました。"
  },
  {
    "id": 860,
    "word": "ค่าชดเชย",
    "meaning": "補償金、手当",
    "pronunciation": "khâa-chót-chooei",
    "frequency": "7回中1回",
    "exampleTh": "พนักงานที่ถูกเลิกจ้างจะได้รับค่าชดเชย",
    "exampleJa": "解雇された従業員は補償金を受け取ります。"
  },
  {
    "id": 861,
    "word": "ค่าใช้จ่าย",
    "meaning": "費用、支出",
    "pronunciation": "khâa-chái-càai",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องประหยัดค่าใช้จ่ายในเดือนนี้",
    "exampleJa": "今月は支出を節約しなければなりません。"
  },
  {
    "id": 862,
    "word": "ค่าเบี้ยเลี้ยง",
    "meaning": "日当、手当",
    "pronunciation": "khâa-bîa-líaŋ",
    "frequency": "7回中1回",
    "exampleTh": "บริษัทจ่ายค่าเบี้ยเลี้ยงสำหรับการเดินทางไปทำงาน",
    "exampleJa": "会社は出張に対して日当を支払います。"
  },
  {
    "id": 863,
    "word": "ค่ามัดจำ",
    "meaning": "保証金、手付金",
    "pronunciation": "khâa-mát-cam",
    "frequency": "7回中1回",
    "exampleTh": "คุณต้องจ่ายค่ามัดจำก่อนย้ายเข้าห้องพัก",
    "exampleJa": "入居する前に保証金を支払う必要があります。"
  },
  {
    "id": 864,
    "word": "คำถาม",
    "meaning": "質問",
    "pronunciation": "kham-thǎam",
    "frequency": "7回中1回",
    "exampleTh": "ถ้าคุณมีคำถาม กรุณายกมือขึ้น",
    "exampleJa": "質問があれば、手を挙げてください。"
  },
  {
    "id": 865,
    "word": "คำแนะนำ",
    "meaning": "アドバ���ス、お勧め",
    "pronunciation": "kham-náe-nam",
    "frequency": "7回中1回",
    "exampleTh": "ขอบคุณสำหรับคำแนะนำที่ดีของคุณ",
    "exampleJa": "あなたの良いアドバイスをありがとうございます。"
  },
  {
    "id": 866,
    "word": "คำปรึกษา",
    "meaning": "相談、アドバイス",
    "pronunciation": "kham-prʉ̀k-sǎa",
    "frequency": "7回中1回",
    "exampleTh": "ฉันต้องการคำปรึกษาเรื่องการเรียนต่อ",
    "exampleJa": "私は進学についての相談をしたいです。"
  },
  {
    "id": 867,
    "word": "คำพูด",
    "meaning": "言葉、発言",
    "pronunciation": "kham-phûut",
    "frequency": "7回中1回",
    "exampleTh": "คำพูดของเขาน่าเชื่อถือเสมอ",
    "exampleJa": "彼の言葉はいつも信頼できます。"
  },
  {
    "id": 868,
    "word": "คำสั่ง",
    "meaning": "命令、注文",
    "pronunciation": "kham-sàŋ",
    "frequency": "7回中1回",
    "exampleTh": "พนักงานทำตามคำสั่งของหัวหน้าอย่างเคร่งครัด",
    "exampleJa": "社員は上司の命令に厳格に従いました。"
  },
  {
    "id": 869,
    "word": "คือว่า",
    "meaning": "つまり、というのは",
    "pronunciation": "khʉʉ-wâa",
    "frequency": "7回中1回",
    "exampleTh": "คือว่า วันนี้ฉันไปร่วมงานเลี้ยงไม่ได้แล้ว",
    "exampleJa": "というのは、今日はパーティーに参加できなくなりました。"
  },
  {
    "id": 870,
    "word": "คุณภาพ",
    "meaning": "品質",
    "pronunciation": "khun-na-phâap",
    "frequency": "7回中1回",
    "exampleTh": "สินค้าร้านนี้มีคุณภาพดีและราคาถูก",
    "exampleJa": "この店の店商品は品質が良く、価格も安いです。"
  },
  {
    "id": 871,
    "word": "คุม",
    "meaning": "管理する",
    "pronunciation": "khum",
    "frequency": "7回中1回",
    "exampleTh": "เขาต้องคุมอาหารเพื่อสุขภาพ",
    "exampleJa": "彼は健康のために食事を制限しなければならない。"
  },
  {
    "id": 872,
    "word": "คุ้มค่า",
    "meaning": "価値がある",
    "pronunciation": "khúm-khâa",
    "frequency": "7回中1回",
    "exampleTh": "ซื้อเสื้อตัวนี้คุ้มค่ามาก",
    "exampleJa": "この服を買うのはとても価値がある。"
  },
  {
    "id": 873,
    "word": "คุยกัน",
    "meaning": "話し合う",
    "pronunciation": "khui-kan",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราคุยกันเรื่องงานใหม่",
    "exampleJa": "私たちは新しい仕事について話し合っている。"
  },
  {
    "id": 874,
    "word": "คู่",
    "meaning": "ペア",
    "pronunciation": "khûu",
    "frequency": "7回中1回",
    "exampleTh": "เขามีรองเท้าใหม่หนึ่งคู่",
    "exampleJa": "彼は新しい靴を1足持っている。"
  },
  {
    "id": 875,
    "word": "คูปอง",
    "meaning": "クーポン",
    "pronunciation": "khuu-pɔɔŋ",
    "frequency": "7回中1回",
    "exampleTh": "ฉันใช้คูปองนี้ลดราคาได้",
    "exampleJa": "このクーポンを使って割引ができます。"
  },
  {
    "id": 876,
    "word": "คู่มือ",
    "meaning": "マニュアル",
    "pronunciation": "khûu-mʉʉ",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาอ่านคู่มือก่อนใช้งาน",
    "exampleJa": "使用する前にマニュアルを読んでください。"
  },
  {
    "id": 877,
    "word": "เคมี",
    "meaning": "化学",
    "pronunciation": "khee-mii",
    "frequency": "7回中1回",
    "exampleTh": "เขากำลังเรียนวิชาเคมี",
    "exampleJa": "彼は化学の授業を勉強している。"
  },
  {
    "id": 878,
    "word": "เคยชิน",
    "meaning": "慣れる",
    "pronunciation": "khoei-chin",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเคยชินกับอากาศร้อนแล้ว",
    "exampleJa": "私はもう暑い気候に慣れました。"
  },
  {
    "id": 879,
    "word": "เครื่องเขียน",
    "meaning": "文房具",
    "pronunciation": "khrʉ̂aŋ-khǐan",
    "frequency": "7回中1回",
    "exampleTh": "ร้านนี้ขายเครื่องเขียนราคาถูก",
    "exampleJa": "この店は安い文房具を販売している。"
  },
  {
    "id": 880,
    "word": "เครื้องดื่ม",
    "meaning": "飲み物",
    "pronunciation": "khrʉ̂aŋ-dʉ̀ʉm",
    "frequency": "7回中1回",
    "exampleTh": "คุณต้องการเครื่องดื่มอะไรครับ",
    "exampleJa": "お飲み物は何になさいますか？"
  },
  {
    "id": 881,
    "word": "เครื่องสำอาง",
    "meaning": "化粧品",
    "pronunciation": "khrʉ̂aŋ-sǎm-aaŋ",
    "frequency": "7回中1回",
    "exampleTh": "เธอชอบซื้อเครื่องสำอางญี่ปุ่น",
    "exampleJa": "彼女は日本の化粧品を買うのが好きだ。"
  },
  {
    "id": 882,
    "word": "เครื่องหนัง",
    "meaning": "革製品",
    "pronunciation": "khrʉ̂aŋ-nǎŋ",
    "frequency": "7回中1回",
    "exampleTh": "ร้านนี้มีเครื่องหนังคุณภาพดี",
    "exampleJa": "この店には品質の良い革製品がある。"
  },
  {
    "id": 883,
    "word": "เครื่องอำนวยความสะดวก",
    "meaning": "アメニティ",
    "pronunciation": "khrʉ̂aŋ-am-nuai-khwaam-sa-dùak",
    "frequency": "7回中1回",
    "exampleTh": "โรงแรมนี้มีเครื่องอำนวยความสะดวกครบครัน",
    "exampleJa": "このホテルはアメニティが充実している。"
  },
  {
    "id": 884,
    "word": "เคียง",
    "meaning": "寄り添う",
    "pronunciation": "khiiaŋ",
    "frequency": "7回中1回",
    "exampleTh": "เธอยืนเคียงข้างเขาเสมอ",
    "exampleJa": "彼女はいつも彼のそばに寄り添って立っている。"
  },
  {
    "id": 885,
    "word": "แค่ไหน",
    "meaning": "どのくらい",
    "pronunciation": "khɛ̂ɛ-nǎi",
    "frequency": "7回中1回",
    "exampleTh": "บ้านของคุณอยู่ไกลแค่ไหน",
    "exampleJa": "あなたの家はどのくらい遠いですか？"
  },
  {
    "id": 886,
    "word": "โคม",
    "meaning": "ランプ",
    "pronunciation": "khoom",
    "frequency": "7回中1回",
    "exampleTh": "เขาแขวนโคมไว้หน้าบ้าน",
    "exampleJa": "彼は家の前にランタンを掛けた。"
  },
  {
    "id": 887,
    "word": "โคมไฟ",
    "meaning": "照明器具",
    "pronunciation": "khoom-fai",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเปิดโคมไฟเพื่ออ่านหนังสือ",
    "exampleJa": "私は本を読むためにランプをつけた。"
  },
  {
    "id": 888,
    "word": "ใคร่",
    "meaning": "〜したい",
    "pronunciation": "khrâi",
    "frequency": "7回中1回",
    "exampleTh": "ข้าพเจ้าใคร่ขอขอบคุณทุกท่าน",
    "exampleJa": "皆様に心より感謝申し上げたく存じます。"
  },
  {
    "id": 889,
    "word": "ฆ่า",
    "meaning": "殺す",
    "pronunciation": "khâa",
    "frequency": "7回中1回",
    "exampleTh": "ตำรวจจับคนร้ายที่ฆ่าคนได้แล้ว",
    "exampleJa": "警察は人を殺した犯人をすでに逮捕した。"
  },
  {
    "id": 890,
    "word": "โฆษณา",
    "meaning": "広告",
    "pronunciation": "khôot-sa-naa",
    "frequency": "7回中1回",
    "exampleTh": "โฆษณาชิ้นนี้ดูน่าสนใจมาก",
    "exampleJa": "この広告はとても面白そうだ。"
  },
  {
    "id": 891,
    "word": "งด",
    "meaning": "中止する",
    "pronunciation": "ngót",
    "frequency": "7回中1回",
    "exampleTh": "หมอสั่งให้งดอาหารก่อนผ่าตัด",
    "exampleJa": "医師は手術前に食事を控えるよう指示した。"
  },
  {
    "id": 892,
    "word": "งดเว้น",
    "meaning": "控える",
    "pronunciation": "ngót-wén",
    "frequency": "7回中1回",
    "exampleTh": "โปรดงดเว้นการสูบบุหรี่ในบริเวณนี้",
    "exampleJa": "この区域での喫煙はご遠慮ください。"
  },
  {
    "id": 893,
    "word": "ง่วง",
    "meaning": "眠い",
    "pronunciation": "ngûang",
    "frequency": "7回中1回",
    "exampleTh": "ฉันรู้สึกง่วงนอนมากหล���งจากกินข้าว",
    "exampleJa": "ご飯を食べた後、とても眠くなりました。"
  },
  {
    "id": 894,
    "word": "งานเลี้ยง",
    "meaning": "パーティー",
    "pronunciation": "ngaan-líang",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราจะจัดงานเลี้ยงฉลองปีใหม่",
    "exampleJa": "私たちは新年を祝うパーティーを開きます。"
  },
  {
    "id": 895,
    "word": "เงาะ",
    "meaning": "ランブータン",
    "pronunciation": "ngór",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบกินเงาะเพราะมันหวานและอร่อย",
    "exampleJa": "ランブータンは甘くて美味しいので好きです。"
  },
  {
    "id": 896,
    "word": "เงินเก็บ",
    "meaning": "貯金",
    "pronunciation": "ngoen-kèp",
    "frequency": "7回中1回",
    "exampleTh": "เขาใช้เงินเก็บทั้งหมดเพื่อซื้อบ้าน",
    "exampleJa": "彼は貯金のすべてを使って家を買った。"
  },
  {
    "id": 897,
    "word": "เงินบ",
    "meaning": "バーツ（通貨）",
    "pronunciation": "ngoen-bàat",
    "frequency": "7回中1回",
    "exampleTh": "ฉันต้องการแลกเงินเยนเป็นเงินบาท",
    "exampleJa": "日本円をタイバーツに両替したいです。"
  },
  {
    "id": 898,
    "word": "เงียบสงบ",
    "meaning": "静かな",
    "pronunciation": "ngîap-sa-ngòp",
    "frequency": "7回中1回",
    "exampleTh": "หมู่บ้านในชนบทนี้เงียบสงบมาก",
    "exampleJa": "この田舎の村はとても静かです。"
  },
  {
    "id": 899,
    "word": "จด",
    "meaning": "メモする",
    "pronunciation": "chòt",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาจดที่อยู่และเบอร์โทรศัพท์ไว้",
    "exampleJa": "住所と電話番号を書き留めてください。"
  },
  {
    "id": 900,
    "word": "จนถืง",
    "meaning": "〜まで",
    "pronunciation": "chon-thǔeng",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำงานตั้งแต่เช้าจนถึงเย็น",
    "exampleJa": "彼は朝から夕方まで働いています。"
  },
  {
    "id": 901,
    "word": "จอด",
    "meaning": "駐車する",
    "pronunciation": "chòot",
    "frequency": "7回中1回",
    "exampleTh": "คุณสามารถจอดรถไว้ที่นี่ได้",
    "exampleJa": "ここに車を駐車することができます。"
  },
  {
    "id": 902,
    "word": "จักร",
    "meaning": "ミシ���",
    "pronunciation": "chàk",
    "frequency": "7回中1回",
    "exampleTh": "แม่ใช้จักรเย็บผ้าเพื่อซ่อมเสื้อผ้า",
    "exampleJa": "母は服を直すためにミシンを使います。"
  },
  {
    "id": 903,
    "word": "จักรยาน",
    "meaning": "自転車",
    "pronunciation": "chàk-kra-yaan",
    "frequency": "7回中1回",
    "exampleTh": "เขาขี่จักรยานไปโรงเรียนทุกวัน",
    "exampleJa": "彼は毎日自転車で学校に通っています。"
  },
  {
    "id": 904,
    "word": "จังหวะ",
    "meaning": "リズム",
    "pronunciation": "chang-wà",
    "frequency": "7回中1回",
    "exampleTh": "เพลงนี้มีจังหวะที่สนุกสนานมาก",
    "exampleJa": "この曲はとても楽しいリズムをしています。"
  },
  {
    "id": 905,
    "word": "จัด",
    "meaning": "整理する",
    "pronunciation": "chàt",
    "frequency": "7回中1回",
    "exampleTh": "เธอช่วยจัดหนังสือบนโต๊ะให้เรียบร้อย",
    "exampleJa": "彼女は机の上の本をきれいに整理してくれた。"
  },
  {
    "id": 906,
    "word": "จัดการ",
    "meaning": "処理する",
    "pronunciation": "chàt-kaan",
    "frequency": "7回中1回",
    "exampleTh": "ผู้จัดการจะจัดการปัญหานี้เอง",
    "exampleJa": "マネージャーがこの問題を処理します。"
  },
  {
    "id": 907,
    "word": "จัดเตรียม",
    "meaning": "準備する",
    "pronunciation": "chàt-triam",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราต้องจัดเตรียมอาหารสำหรับแขก",
    "exampleJa": "私たちはゲストのための食事を準備しなければならない。"
  },
  {
    "id": 908,
    "word": "จากนั้น",
    "meaning": "その後",
    "pronunciation": "chàak-nán",
    "frequency": "7回中1回",
    "exampleTh": "ล้างผักให้สะอาด จากนั้นหั่นเป็นชิ้นๆ",
    "exampleJa": "野菜をきれいに洗い、その後細かく切ります。"
  },
  {
    "id": 909,
    "word": "จากไป",
    "meaning": "亡くなる",
    "pronunciation": "chàak-pai",
    "frequency": "7回中1回",
    "exampleTh": "เขาจากไปอย่างสงบเมื่อคืนนี้",
    "exampleJa": "彼は昨夜、静かに息を引き取った。"
  },
  {
    "id": 910,
    "word": "จ้าง",
    "meaning": "雇う",
    "pronunciation": "châang",
    "frequency": "7回中1回",
    "exampleTh": "บริษัทกำลังจ้างพนักงานให���่เพิ่ม",
    "exampleJa": "会社は新入社員を新しく雇おうとしている。"
  },
  {
    "id": 911,
    "word": "จำนำ",
    "meaning": "質に入れる",
    "pronunciation": "cam-nam",
    "frequency": "7回中1回",
    "exampleTh": "เขาเอาทองไปจำนำเพื่อหาเงิน",
    "exampleJa": "彼はお金を得るために金を質に入れた。"
  },
  {
    "id": 912,
    "word": "จิต",
    "meaning": "心、精神",
    "pronunciation": "cit",
    "frequency": "7回中1回",
    "exampleTh": "การนั่งสมาธิช่วยให้จิตสงบขึ้น",
    "exampleJa": "瞑想は心を落ち着かせるのに役立ちます。"
  },
  {
    "id": 913,
    "word": "จิตใจ",
    "meaning": "心、気持ち",
    "pronunciation": "cit-cai",
    "frequency": "7回中1回",
    "exampleTh": "เขามีจิตใจที่งดงามและโอบอ้อมอารี",
    "exampleJa": "彼は美しく優しい心を持っています。"
  },
  {
    "id": 914,
    "word": "จู่ๆ",
    "meaning": "突然、不意に",
    "pronunciation": "cùu-cùu",
    "frequency": "7回中1回",
    "exampleTh": "จู่ๆ ฝนก็ตกหนักลงมาโดยไม่ตั้งตัว",
    "exampleJa": "突然、予期せず大雨が降ってきた。"
  },
  {
    "id": 915,
    "word": "เจริญ",
    "meaning": "発展する、繁栄する",
    "pronunciation": "ca-rəen",
    "frequency": "7回中1回",
    "exampleTh": "เมืองนี้เจริญรุ่งเรืองอย่างรวดเร็ว",
    "exampleJa": "この街は急速に発展しています。"
  },
  {
    "id": 916,
    "word": "เจริญอาหาร",
    "meaning": "食欲がある",
    "pronunciation": "ca-rəen aa-hǎan",
    "frequency": "7回中1回",
    "exampleTh": "ช่วงนี้อากาศดีทำให้ฉันเจริญอาหารมาก",
    "exampleJa": "最近は天気が良くて、とても食欲があります。"
  },
  {
    "id": 917,
    "word": "แจ่มใส",
    "meaning": "明るい、朗らかな",
    "pronunciation": "càm-sǎi",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ท้องฟ้าแจ่มใสไม่มีเมฆเลย",
    "exampleJa": "今日は空が澄み渡っていて、雲が全くありません。"
  },
  {
    "id": 918,
    "word": "ใจกว้าง",
    "meaning": "心が広い、寛大な",
    "pronunciation": "cai-gûang",
    "frequency": "7回中1回",
    "exampleTh": "หัวหน้าเป็นคนใจกว้างและรับฟังทุกคน",
    "exampleJa": "上司は心が広く、みんなの意見を聞いてくれます。"
  },
  {
    "id": 919,
    "word": "ใจน้อย",
    "meaning": "傷つきやすい",
    "pronunciation": "cai-nɔ́ɔi",
    "frequency": "7回中1回",
    "exampleTh": "อย่าพูดแรงกับเขาเพราะเขาเป็นคนใจน้อย",
    "exampleJa": "彼は傷つきやすい人なので、きつく言わないでください。"
  },
  {
    "id": 920,
    "word": "ใจร้อน",
    "meaning": "気が短い、せっかちな",
    "pronunciation": "cai-rɔ́ɔn",
    "frequency": "7回中1回",
    "exampleTh": "อย่าใจร้อนเวลาขับรถเพราะอาจเกิดอุบัติเหตุ",
    "exampleJa": "事故が起きるかもしれないので、運転中は焦らないでください。"
  },
  {
    "id": 921,
    "word": "ใจเสาะ",
    "meaning": "臆病な、気が弱い",
    "pronunciation": "cai-sɔ̀",
    "frequency": "7回中1回",
    "exampleTh": "เขาใจเสาะเกินกว่าจะดูหนังผีคนเดียว",
    "exampleJa": "彼は臆病すぎて、一人でホラー映画を見ることができません。"
  },
  {
    "id": 922,
    "word": "ใจหาย",
    "meaning": "がっかりする、寂しく思う",
    "pronunciation": "cai-hǎai",
    "frequency": "7回中1回",
    "exampleTh": "รู้ข่าวว่าเขาจะย้ายบ้านก็รู้สึกใจหาย",
    "exampleJa": "彼が引っ越すと聞いて、寂しく（がっかり）思いました。"
  },
  {
    "id": 923,
    "word": "ใจอ่อน",
    "meaning": "情に脆い、心が優しい",
    "pronunciation": "cai-ɔ̀ɔn",
    "frequency": "7回中1回",
    "exampleTh": "แม่ใจอ่อนยอมซื้อของเล่นชิ้นใหม่ให้ลูก",
    "exampleJa": "お母さんは情に脆くなり、子供に新しいおもちゃを買ってあげました。"
  },
  {
    "id": 924,
    "word": "ฉลาด",
    "meaning": "賢い、頭が良い",
    "pronunciation": "chà-làat",
    "frequency": "7回中1回",
    "exampleTh": "สุนัขตัวนี้ฉลาดและแสนรู้มาก",
    "exampleJa": "この犬はとても賢くてお利口です。"
  },
  {
    "id": 925,
    "word": "เฉย",
    "meaning": "じっとしている、無関心な",
    "pronunciation": "chə̌ei",
    "frequency": "7回中1回",
    "exampleTh": "เขานั่งเฉยๆ ไม่ยอมพูดอะไรเลย",
    "exampleJa": "彼は何も話さず、ただじっと座っていました。"
  },
  {
    "id": 926,
    "word": "ชดเชย",
    "meaning": "補償する、埋め合わせる",
    "pronunciation": "chót-chəei",
    "frequency": "7回中1回",
    "exampleTh": "บริษัทจ่ายเงินชดเชยให้พนักงานที่ลาออก",
    "exampleJa": "会社は退職する従業員に補償金を支払いました。"
  },
  {
    "id": 927,
    "word": "ชม",
    "meaning": "褒める、観賞する",
    "pronunciation": "chom",
    "frequency": "7回中1回",
    "exampleTh": "ครูชมเขาที่ตั้งใจเรียนและสอบได้คะแนนดี",
    "exampleJa": "先生は彼が熱心に勉強して良い点数を取ったことを褒めました。"
  },
  {
    "id": 928,
    "word": "ชมเชย",
    "meaning": "称賛する、褒める",
    "pronunciation": "chom-chəei",
    "frequency": "7回中1回",
    "exampleTh": "รัฐบาลประกาศชมเชยฮีโร่ที่ช่วยชีวิตคน",
    "exampleJa": "政府は人命を救ったヒーローを称賛する��発表しました。"
  },
  {
    "id": 929,
    "word": "ช่วงเวลา",
    "meaning": "期間、時間帯",
    "pronunciation": "chûang-wee-laa",
    "frequency": "7回中1回",
    "exampleTh": "ช่วงเวลานี้รถติดมากควรหลีกเลี่ยงเส้นทาง",
    "exampleJa": "この時間帯は渋滞が激しいので、ルートを避けるべきです。"
  },
  {
    "id": 930,
    "word": "ชวน",
    "meaning": "誘う",
    "pronunciation": "chuan",
    "frequency": "7回中1回",
    "exampleTh": "เพื่อนชวนฉันไปกินข้าวเย็นที่ร้านเปิดใหม่",
    "exampleJa": "友達が新しくオープンした店に晩ご飯を食べに行こうと誘ってくれました。"
  },
  {
    "id": 931,
    "word": "ช่วยกัน",
    "meaning": "協力する、助け合う",
    "pronunciation": "chûay-kan",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราต้องช่วยกันทำความสะอาดห้อง",
    "exampleJa": "私たちは協力して部屋を掃除しなければなりません。"
  },
  {
    "id": 932,
    "word": "ช่วยเหลือ",
    "meaning": "援助する、助ける",
    "pronunciation": "chûay-lǔea",
    "frequency": "7回中1回",
    "exampleTh": "เขาชอบช่วยเหลือคนอื่นเสมอ",
    "exampleJa": "彼はいつも他人を助けるのが好きです。"
  },
  {
    "id": 933,
    "word": "ช่อง",
    "meaning": "チャンネル、窓口、隙間",
    "pronunciation": "ch��ng",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาติดต่อที่ช่องหมายเลขห้า",
    "exampleJa": "5番窓口にお問い合わせください。"
  },
  {
    "id": 934,
    "word": "ชั่วโมง",
    "meaning": "時間（〜時間）",
    "pronunciation": "chûa-mōong",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเรียนภาษาไทยวันละสองชั่วโมง",
    "exampleJa": "私は毎日2時間タイ語を勉強します。"
  },
  {
    "id": 935,
    "word": "ช้า",
    "meaning": "遅い、ゆっくり",
    "pronunciation": "cháa",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาพูดช้าๆ หน่อยได้ไหมครับ",
    "exampleJa": "もう少しゆっくり話していただけますか。"
  },
  {
    "id": 936,
    "word": "ช่างก่อสร้าง",
    "meaning": "建設作業員、大工",
    "pronunciation": "châng-gɔ̀ɔ-sâang",
    "frequency": "7回中1回",
    "exampleTh": "ช่างก่อสร้างกำลังสร้างบ้านหลังใหม่",
    "exampleJa": "建設作業員が新しい家を建てています。"
  },
  {
    "id": 937,
    "word": "ช่างไฟฟ้า",
    "meaning": "電気技師、電気工",
    "pronunciation": "châng-fai-fáa",
    "frequency": "7回中1回",
    "exampleTh": "���ราต้องโทรเรียกช่างไฟฟ้ามาซ่อมไฟ",
    "exampleJa": "電気を修理するために電気技師を呼ぶ必要があります。"
  },
  {
    "id": 938,
    "word": "ชายทะเล",
    "meaning": "海岸、海辺",
    "pronunciation": "chaai-thá-lee",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราไปเดินเล่นที่ชายทะเลตอนเย็น",
    "exampleJa": "私たちは夕方に海辺を散歩します。"
  },
  {
    "id": 939,
    "word": "ชาว",
    "meaning": "〜の人、〜市民",
    "pronunciation": "chaao",
    "frequency": "7回中1回",
    "exampleTh": "ชาวบ้านในหมู่บ้านนี้ใจดีทุกคน",
    "exampleJa": "この村の住民はみんな親切です。"
  },
  {
    "id": 940,
    "word": "ชาวต่างชาติ",
    "meaning": "外国人",
    "pronunciation": "chaao-tàang-châat",
    "frequency": "7回中1回",
    "exampleTh": "มีชาวต่างชาติมาเที่ยวที่นี่เยอะมาก",
    "exampleJa": "ここにはたくさんの外国人が観光に来ます。"
  },
  {
    "id": 941,
    "word": "ชาวประมง",
    "meaning": "漁師",
    "pronunciation": "chaao-pra-mong",
    "frequency": "7回中1回",
    "exampleTh": "ชาวประมงอ��กเรือไปหาปลาแต่เช้า",
    "exampleJa": "漁師は朝早くから魚を捕りに船を出します。"
  },
  {
    "id": 942,
    "word": "ชิด",
    "meaning": "近づく、密着する",
    "pronunciation": "chít",
    "frequency": "7回中1回",
    "exampleTh": "กรุณายืนชิดในหน่อยครับ",
    "exampleJa": "奥に詰めて立ってください。"
  },
  {
    "id": 943,
    "word": "ชิน",
    "meaning": "慣れる",
    "pronunciation": "chin",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเริ่มชินกับอาหารเผ็ดแล้ว",
    "exampleJa": "私は辛い食べ物に慣れてきました。"
  },
  {
    "id": 944,
    "word": "ชิบะ",
    "meaning": "千葉、柴犬",
    "pronunciation": "chí-bà",
    "frequency": "7回中1回",
    "exampleTh": "ฉันอยากไปเที่ยวที่จังหวัดชิบะ",
    "exampleJa": "私は千葉県に旅行に行きたいです。"
  },
  {
    "id": 945,
    "word": "ชีพ",
    "meaning": "命、生命",
    "pronunciation": "chîip",
    "frequency": "7回中1回",
    "exampleTh": "เขาสู้เพื่อรักษาชีพของตนเอง",
    "exampleJa": "彼は自分の命を守るために戦いました。"
  },
  {
    "id": 946,
    "word": "ชื่นชม",
    "meaning": "称賛する、褒める",
    "pronunciation": "chʉ̂ʉn-chom",
    "frequency": "7回中1回",
    "exampleTh": "ทุกคนชื่นชมในความสามารถของเธอ",
    "exampleJa": "誰もが彼女の能力を称賛しています。"
  },
  {
    "id": 947,
    "word": "ชุด",
    "meaning": "セット、スーツ、服",
    "pronunciation": "chút",
    "frequency": "7回中1回",
    "exampleTh": "เธอซื้อชุดใหม่สำหรับงานปาร์ตี้",
    "exampleJa": "彼女はパーティーのために新しいドレスを買いました。"
  },
  {
    "id": 948,
    "word": "เช่นกัน",
    "meaning": "同様に、私も",
    "pronunciation": "chên-kan",
    "frequency": "7回中1回",
    "exampleTh": "ยินดีที่ได้รู้จักและเช่นกันครับ",
    "exampleJa": "はじめまして、私も同様です（こちらこそ）。"
  },
  {
    "id": 949,
    "word": "เช่นเดียวกัน",
    "meaning": "同様に、同じく",
    "pronunciation": "chên-diao-kan",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ฉันก็เหนื่อยมากเช่นเดียวกัน",
    "exampleJa": "今日は私も同様にとても疲れました。"
  },
  {
    "id": 950,
    "word": "เช่า",
    "meaning": "借りる、レンタルする",
    "pronunciation": "châo",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราเช่ารถขับเที่ยวในเชียงใหม่",
    "exampleJa": "私たちはチェンマイで車を借りてドライブ旅行をしました。"
  },
  {
    "id": 951,
    "word": "เชื่อ",
    "meaning": "信じる",
    "pronunciation": "chʉ̂a",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเชื่อว่าเขาพูดความจริง",
    "exampleJa": "私は彼が真実を言っていると信じています。"
  },
  {
    "id": 952,
    "word": "เชื่องช้า",
    "meaning": "のろい、遅い",
    "pronunciation": "chʉ̂ang-cháa",
    "frequency": "7回中1回",
    "exampleTh": "เต่าเดินเชื่องช้าบนพื้นทราย",
    "exampleJa": "カメは砂の上をのろのろと歩きます。"
  },
  {
    "id": 953,
    "word": "โชคร้าย",
    "meaning": "運が悪い",
    "pronunciation": "chôok-ráai",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้โชคร้า���ที่ฝนตกหนัก",
    "exampleJa": "今日は雨が激しく降って運が悪いです。"
  },
  {
    "id": 954,
    "word": "ใช้จ่าย",
    "meaning": "支出する、使う",
    "pronunciation": "chái-càai",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องประหยัดเงินใช้จ่าย",
    "exampleJa": "私たちはお金を使うのを節約しなければなりません。"
  },
  {
    "id": 955,
    "word": "ใช้ชีวิต",
    "meaning": "暮らす、生活する",
    "pronunciation": "chái-chii-wít",
    "frequency": "7回中1回",
    "exampleTh": "เขาชอบใช้ชีวิตในต่างประเทศ",
    "exampleJa": "彼は海外で生活するのが好きです。"
  },
  {
    "id": 956,
    "word": "ช้อม",
    "meaning": "練習する",
    "pronunciation": "sɔ́ɔm",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราต้องช้อมดนตรีทุกวัน",
    "exampleJa": "私たちは毎日音楽を練習しなければなりません。"
  },
  {
    "id": 957,
    "word": "ช่อมแซม",
    "meaning": "修理する",
    "pronunciation": "sɔ̂m-sæm",
    "frequency": "7回中1回",
    "exampleTh": "พ่อกำลังช่อมแซมหลังคาบ้าน",
    "exampleJa": "父は家の屋根を修理して���ます。"
  },
  {
    "id": 958,
    "word": "ซ่อย",
    "meaning": "路地、小道",
    "pronunciation": "sɔɔi",
    "frequency": "7回中1回",
    "exampleTh": "บ้านของฉันอยู่ในซอยนี้",
    "exampleJa": "私の家はこの路地の中にあります。"
  },
  {
    "id": 959,
    "word": "ซัก",
    "meaning": "洗濯する",
    "pronunciation": "sák",
    "frequency": "7回中1回",
    "exampleTh": "แม่กำลังซักเสื้อผ้าในห้องน้ำ",
    "exampleJa": "母は浴室で服を洗っています。"
  },
  {
    "id": 960,
    "word": "ซักผ้า",
    "meaning": "服を洗濯する",
    "pronunciation": "sák-phâa",
    "frequency": "7回中1回",
    "exampleTh": "ฉันซักผ้าทุกวันเสาร์ตอนเช้า",
    "exampleJa": "私は毎週土曜日の朝に洗濯をします。"
  },
  {
    "id": 961,
    "word": "เซ็น",
    "meaning": "サインする",
    "pronunciation": "sen",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาเซ็นชื่อตรงนี้ด้วยครับ",
    "exampleJa": "こちらにサインをお願いします。"
  },
  {
    "id": 962,
    "word": "แซ็นชื่อ",
    "meaning": "署名する",
    "pronunciation": "sen-chʉ̂ʉ",
    "frequency": "7回中1回",
    "exampleTh": "เขาแซ็นชื���อในเอกสารสัญญาแล้ว",
    "exampleJa": "彼はすでに契約書に署名しました。"
  },
  {
    "id": 963,
    "word": "แซง",
    "meaning": "追い越す",
    "pronunciation": "sææng",
    "frequency": "7回中1回",
    "exampleTh": "รถคันนั้นขับแซงขึ้นมาอย่างเร็ว",
    "exampleJa": "あの車はとても速く追い越していきました。"
  },
  {
    "id": 964,
    "word": "ฐานะ",
    "meaning": "地位、境遇",
    "pronunciation": "thǎa-ná",
    "frequency": "7回中1回",
    "exampleTh": "ครอบครัวของเขามีฐานะดีมาก",
    "exampleJa": "彼の家族はとても裕福な境遇にあります。"
  },
  {
    "id": 965,
    "word": "เฒ่า",
    "meaning": "老いた、老人",
    "pronunciation": "thâo",
    "frequency": "7回中1回",
    "exampleTh": "ชายเฒ่านั่งพักผ่อนใต้ต้นไม้",
    "exampleJa": "老人が木の下で休んでいます。"
  },
  {
    "id": 966,
    "word": "ดนตรี",
    "meaning": "音楽",
    "pronunciation": "don-trii",
    "frequency": "7回中1回",
    "exampleTh": "เด็กๆ ชอบเรียนวิชาดนตรีมาก",
    "exampleJa": "子どもたちは音楽の授業が大好きです。"
  },
  {
    "id": 967,
    "word": "ดวงอาทิตย์",
    "meaning": "太陽",
    "pronunciation": "duang-aa-thít",
    "frequency": "7回中1回",
    "exampleTh": "ดวงอาทิตย์ขึ้นทางทิศตะวันออก",
    "exampleJa": "太陽は東から昇ります。"
  },
  {
    "id": 968,
    "word": "ดอก",
    "meaning": "花",
    "pronunciation": "dɔ̀ɔk",
    "frequency": "7回中1回",
    "exampleTh": "ดอกไม้ดอกนี้มีกลิ่นหอมมาก",
    "exampleJa": "この花はとても良い香りがします。"
  },
  {
    "id": 969,
    "word": "ดอกซากุระ",
    "meaning": "桜の花",
    "pronunciation": "dɔ̀ɔk-saa-gù-rá",
    "frequency": "7回中1回",
    "exampleTh": "ดอกซากุระจะบานในฤดูใบไม้ผลิ",
    "exampleJa": "桜の花は春に咲きます。"
  },
  {
    "id": 970,
    "word": "ดอกเบี้ย",
    "meaning": "利子、利息",
    "pronunciation": "dɔ̀ɔk-bîa",
    "frequency": "7回中1回",
    "exampleTh": "ธนาคารให้ดอกเบี้ยเงินฝากสูง",
    "exampleJa": "銀行は預金に対して高い利息をくれます。"
  },
  {
    "id": 971,
    "word": "ดังกล่าว",
    "meaning": "前述の",
    "pronunciation": "dang-glàao",
    "frequency": "7回中1回",
    "exampleTh": "ปัญหาดังกล่าวได้รับการแก้ไขแล้ว",
    "exampleJa": "前述の問題はすでに解決されました。"
  },
  {
    "id": 972,
    "word": "ดั้งเดิม",
    "meaning": "伝統的な",
    "pronunciation": "dâng-doem",
    "frequency": "7回中1回",
    "exampleTh": "นี่คือรสชาติดั้งเดิมของไทย",
    "exampleJa": "これがタイの伝統的な味です。"
  },
  {
    "id": 973,
    "word": "ด้านหลัง",
    "meaning": "後ろ",
    "pronunciation": "dâan-lǎng",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาจอดรถไว้ที่ด้านหลังตึก",
    "exampleJa": "車はビルの後ろに停めてください。"
  },
  {
    "id": 974,
    "word": "ดำเนิน",
    "meaning": "行う",
    "pronunciation": "dam-noen",
    "frequency": "7回中1回",
    "exampleTh": "เราจะดำเนินโครงการนี้ต่อไป",
    "exampleJa": "私達はこのプロジェクトを続けていきます。"
  },
  {
    "id": 975,
    "word": "ดำเนินชีวิต",
    "meaning": "生活を送る",
    "pronunciation": "dam-noen-chii-wít",
    "frequency": "7回中1回",
    "exampleTh": "เขาดำเนินชีวิตอย่างเรียบง่าย",
    "exampleJa": "彼はシンプルな生活を送っています。"
  },
  {
    "id": 976,
    "word": "ดุ",
    "meaning": "厳しい",
    "pronunciation": "dù",
    "frequency": "7回中1回",
    "exampleTh": "คุณครูคนนี้ดุแต่ใจดีมาก",
    "exampleJa": "この先生は厳しいですが、とても優しいです。"
  },
  {
    "id": 977,
    "word": "ดุร้าย",
    "meaning": "凶暴な",
    "pronunciation": "dù-ráai",
    "frequency": "7回中1回",
    "exampleTh": "สุนัขตัวนั้นดุร้ายมาก อย่าเข้าใกล้",
    "exampleJa": "あの犬はとても凶暴なので、近づかないで。"
  },
  {
    "id": 978,
    "word": "เด็ด",
    "meaning": "摘む",
    "pronunciation": "dèt",
    "frequency": "7回中1回",
    "exampleTh": "เขาเด็ดดอกไม้ในสวนไปให้แม่",
    "exampleJa": "彼は庭の花を摘んで母に贈った。"
  },
  {
    "id": 979,
    "word": "เด็ดขาด",
    "meaning": "絶対に",
    "pronunciation": "dèt-khàat",
    "frequency": "7回中1回",
    "exampleTh": "ห้ามสูบบุหรี่ที่นี่โดยเด็ดขาด",
    "exampleJa": "ここでの喫煙は絶対に禁止です。"
  },
  {
    "id": 980,
    "word": "เดินเล่น",
    "meaning": "散歩する",
    "pronunciation": "doen-lên",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบเดินเล่นที่สวนสาธารณะตอนเย็น",
    "exampleJa": "私は夕方に公園を散歩するのが好きです。"
  },
  {
    "id": 981,
    "word": "เดือนแรก",
    "meaning": "最初の月",
    "pronunciation": "duan-râek",
    "frequency": "7回中1回",
    "exampleTh": "เดือนแรกของการทำงานเหนื่อยมาก",
    "exampleJa": "仕事の最初の1ヶ月はとても疲れました。"
  },
  {
    "id": 982,
    "word": "แด่",
    "meaning": "〜に",
    "pronunciation": "dàe",
    "frequency": "7回中1回",
    "exampleTh": "มอบของขวัญชิ้นนี้แด่คุณครู",
    "exampleJa": "この贈り物を先生に捧げます。"
  },
  {
    "id": 983,
    "word": "แดง",
    "meaning": "赤い",
    "pronunciation": "daeng",
    "frequency": "7回中1回",
    "exampleTh": "เธอใส่เสื้อสีแดงสวยงามมาก",
    "exampleJa": "彼女は赤い服を着ていてとても美しい。"
  },
  {
    "id": 984,
    "word": "โดยเร็ว",
    "meaning": "速やかに",
    "pronunciation": "dooi-reo",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาส่งเอกสารนี้กลับมาโดยเร็ว",
    "exampleJa": "この書類を至急返送してください。"
  },
  {
    "id": 985,
    "word": "ได้แก่",
    "meaning": "すなわち",
    "pronunciation": "dâai-gàe",
    "frequency": "7回中1回",
    "exampleTh": "ผลไม้ไทยได้แก่ทุเรียนและมังคุด",
    "exampleJa": "タイの果物にはドリアンやマンゴスチンなどがあります。"
  },
  {
    "id": 986,
    "word": "ได้ข่าวว่า",
    "meaning": "〜だそうだ",
    "pronunciation": "dâai-khàao-wâa",
    "frequency": "7回中1回",
    "exampleTh": "ได้ข่าวว่าเขาจะย้ายไปต่างประเทศ",
    "exampleJa": "彼は海外に移住するそうだ。"
  },
  {
    "id": 987,
    "word": "ได้บ้าง",
    "meaning": "少しはできる",
    "pronunciation": "dâai-bâang",
    "frequency": "7回中1回",
    "exampleTh": "ฉันพูดภาษาไทยได้บ้างนิดหน่อย",
    "exampleJa": "私はタイ語が少し話せます。"
  },
  {
    "id": 988,
    "word": "ได้ยิน",
    "meaning": "聞こえる",
    "pronunciation": "dâai-yin",
    "frequency": "7回中1回",
    "exampleTh": "คุณได้ยินเสียงอะไรไหม",
    "exampleJa": "何か音が聞こえますか？"
  },
  {
    "id": 989,
    "word": "ได้เลย",
    "meaning": "もちろん",
    "pronunciation": "dâai-loei",
    "frequency": "7回中1回",
    "exampleTh": "เรื่องนั้นฉันช่วยคุณได้เลยครับ",
    "exampleJa": "その件なら、もちろんお手伝いできますよ。"
  },
  {
    "id": 990,
    "word": "ตกปลา",
    "meaning": "魚釣りをする",
    "pronunciation": "tòk-plaa",
    "frequency": "7回中1回",
    "exampleTh": "พ่อชอบไปตกปลาที่แม่น้ำในวันหยุด",
    "exampleJa": "父は休日に川へ釣りに行くのが好きです。"
  },
  {
    "id": 991,
    "word": "ตนเอง",
    "meaning": "自分自身",
    "pronunciation": "ton-eeng",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องดูแลตนเองให้ดี",
    "exampleJa": "私たちは自分自身の面倒をよく見なければならない。"
  },
  {
    "id": 992,
    "word": "ต้มยำกุ้ง",
    "meaning": "トムヤムクン",
    "pronunciation": "tôm-yam-gûng",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบกินต้มยำกุ้งมาก",
    "exampleJa": "私はトムヤムクンを食べるのが大好きです。"
  },
  {
    "id": 993,
    "word": "ตรงกัน",
    "meaning": "一致する",
    "pronunciation": "trong-gan",
    "frequency": "7回中1回",
    "exampleTh": "ความคิดของเราตรง���ันพอดี",
    "exampleJa": "私たちの考えがちょうど一致しました。"
  },
  {
    "id": 994,
    "word": "ตรงต่อเวลา",
    "meaning": "時間を守る",
    "pronunciation": "trong-tòo-wee-laa",
    "frequency": "7回中1回",
    "exampleTh": "เขาเป็นคนตรงต่อเวลาเสมอ",
    "exampleJa": "彼はいつも時間を守る人です。"
  },
  {
    "id": 995,
    "word": "ตรวจสอบ",
    "meaning": "確認する",
    "pronunciation": "truat-sòop",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาตรวจสอบเอกสารนี้ด้วย",
    "exampleJa": "この書類を確認してください。"
  },
  {
    "id": 996,
    "word": "ตลอดทั้ง",
    "meaning": "〜中ずっと",
    "pronunciation": "tà-lòot-tháng",
    "frequency": "7回中1回",
    "exampleTh": "ฝนตกตลอดทั้งวันเลยวันนี้",
    "exampleJa": "今日は一日中ずっと雨が降っていました。"
  },
  {
    "id": 997,
    "word": "ตลอดทุกวัน",
    "meaning": "毎日ずっと",
    "pronunciation": "tà-lòot-thúk-wan",
    "frequency": "7回中1回",
    "exampleTh": "ร้านนี้เปิดบริการตลอดทุกวัน",
    "exampleJa": "この店は毎日ずっと営業しています。"
  },
  {
    "id": 998,
    "word": "ตลอดมา",
    "meaning": "これまでずっと",
    "pronunciation": "tà-lòot-maa",
    "frequency": "7回中1回",
    "exampleTh": "เขาช่วยเหลือฉันตลอดมา",
    "exampleJa": "彼はこれまでずっと私を助けてくれました。"
  },
  {
    "id": 999,
    "word": "ตลอดอายุ",
    "meaning": "生涯",
    "pronunciation": "tà-lòot-aa-yú",
    "frequency": "7回中1回",
    "exampleTh": "สินค้านี้รับประกันตลอดอายุการใช้งาน",
    "exampleJa": "この商品は生涯保証付きです。"
  },
  {
    "id": 1000,
    "word": "ต่อต้าน",
    "meaning": "反対する",
    "pronunciation": "tòo-tâan",
    "frequency": "7回中1回",
    "exampleTh": "ประชาชนร่วมกันต่อต้านคอร์รัปชัน",
    "exampleJa": "国民は共に汚職に反対している。"
  },
  {
    "id": 1001,
    "word": "ต้อน",
    "meaning": "追い込む",
    "pronunciation": "tôon",
    "frequency": "7回中1回",
    "exampleTh": "ชาวนาต้อนวัวกลับเข้าคอก",
    "exampleJa": "農夫は牛を牛舎へと追い込んだ。"
  },
  {
    "id": 1002,
    "word": "ตอนกลางคืน",
    "meaning": "夜間",
    "pronunciation": "tɔɔn-glaang-khuun",
    "frequency": "7回中1回",
    "exampleTh": "ถนนสายนี้เงียบมากตอนกลางคืน",
    "exampleJa": "この通りは夜間とても静かです。"
  },
  {
    "id": 1003,
    "word": "ตอนกลางวัน",
    "meaning": "昼間",
    "pronunciation": "tɔɔn-glaang-wan",
    "frequency": "7回中1回",
    "exampleTh": "ตอนกลางวันอากาศร้อนมาก",
    "exampleJa": "昼間は気温がとても高いです。"
  },
  {
    "id": 1004,
    "word": "ตอนเช้า",
    "meaning": "朝",
    "pronunciation": "tɔɔn-cháo",
    "frequency": "7回中1回",
    "exampleTh": "ฉันดื่มกาแฟทุกตอนเช้า",
    "exampleJa": "私は毎朝コーヒーを飲みます。"
  },
  {
    "id": 1005,
    "word": "ตอนที่",
    "meaning": "〜の時",
    "pronunciation": "tɔɔn-thîi",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบดูละครตอนที่ห้ามาก",
    "exampleJa": "私はドラマの第5話がとても好きです。"
  },
  {
    "id": 1006,
    "word": "ตอนเย็น",
    "meaning": "夕方",
    "pronunciation": "tɔɔn-yen",
    "frequency": "7回中1回",
    "exampleTh": "เราจะไปวิ่งสวนสาธารณะตอนเย็น",
    "exampleJa": "私たちは夕方に公園へ走りに行きます。"
  },
  {
    "id": 1007,
    "word": "ตอบแทน",
    "meaning": "恩返しする",
    "pronunciation": "tɔ̀ɔp-thaen",
    "frequency": "7回中1回",
    "exampleTh": "ฉันอยากตอบแทนบุญคุณพ่อแม่",
    "exampleJa": "私は両親の恩に報いたい。"
  },
  {
    "id": 1008,
    "word": "ต่อเมื่อ",
    "meaning": "〜して初めて",
    "pronunciation": "tòo-mʉ̂a",
    "frequency": "7回中1回",
    "exampleTh": "เขาจะพูดต่อเมื่อจำเป็นเท่านั้น",
    "exampleJa": "彼は必要な時に初めて話します。"
  },
  {
    "id": 1009,
    "word": "ต่อราคา",
    "meaning": "値切る",
    "pronunciation": "tòo-raa-khaa",
    "frequency": "7回中1回",
    "exampleTh": "แม่ค้าไม่ยอมให้ฉันต่อราคา",
    "exampleJa": "店主は私に値切ることを許さなかった。"
  },
  {
    "id": 1010,
    "word": "ตะเกียง",
    "meaning": "ランプ",
    "pronunciation": "tà-giang",
    "frequency": "7回中1回",
    "exampleTh": "เขาจุดตะเกียงเพื่อให้แสงสว่าง",
    "exampleJa": "彼は明かりを灯すためにランプに火をつけた。"
  },
  {
    "id": 1011,
    "word": "ตะวัน",
    "meaning": "太陽",
    "pronunciation": "ta-wan",
    "frequency": "7回中1回",
    "exampleTh": "ตะวันกำลังจะตกดินแล้ว",
    "exampleJa": "太陽が沈みかけている。"
  },
  {
    "id": 1012,
    "word": "ตะวันออก",
    "meaning": "東",
    "pronunciation": "ta-wan-òok",
    "frequency": "7回中1回",
    "exampleTh": "ประเทศญี่ปุ่นอยู่ทางทิศตะวันออก",
    "exampleJa": "日本は東の方角にあります。"
  },
  {
    "id": 1013,
    "word": "ตะวันออกกลาง",
    "meaning": "中東",
    "pronunciation": "ta-wan-òok-glaang",
    "frequency": "7回中1回",
    "exampleTh": "เขาเดินทางไปทำงานที่ตะวันออกกลาง",
    "exampleJa": "彼は中東へ仕事に行きました。"
  },
  {
    "id": 1014,
    "word": "ตักเตือน",
    "meaning": "注意する、警告する",
    "pronunciation": "tàk-tʉan",
    "frequency": "7回中1回",
    "exampleTh": "แม่ตักเตือนลูกไม่ให้เล่นมือถือนาน",
    "exampleJa": "母は子供にスマホを長時間使わないよう注意した。"
  },
  {
    "id": 1015,
    "word": "ตั้งนาฬิกา",
    "meaning": "時計を合わせる",
    "pronunciation": "tâng-naa-lí-gaa",
    "frequency": "7回中1回",
    "exampleTh": "ฉันตั้งนาฬิกาปลุกไว้ตอนหกโมงเช้า",
    "exampleJa": "私は朝6時に目覚まし時計をセットした。"
  },
  {
    "id": 1016,
    "word": "ตัดสิน",
    "meaning": "決める、判断する",
    "pronunciation": "tàt-sǐn",
    "frequency": "7回中1回",
    "exampleTh": "คุณต้องตัดสินใจด้วยตัวเองนะ",
    "exampleJa": "あなたは自分で決めなければなりません。"
  },
  {
    "id": 1017,
    "word": "ตัวแทน",
    "meaning": "代表、代理人",
    "pronunciation": "tua-thaen",
    "frequency": "7回中1回",
    "exampleTh": "เขาได้รับเลือกเป็นตัวแทนของห้��ง",
    "exampleJa": "彼はクラスの代表に選ばれました。"
  },
  {
    "id": 1018,
    "word": "ตัวเมือง",
    "meaning": "市街地、市内",
    "pronunciation": "tua-mʉang",
    "frequency": "7回中1回",
    "exampleTh": "บ้านของฉันอยู่ห่างจากตัวเมืองมาก",
    "exampleJa": "私の家は市街地からとても遠いです。"
  },
  {
    "id": 1019,
    "word": "ตัวอักษร",
    "meaning": "文字",
    "pronunciation": "tua-àk-sɔ̌ɔn",
    "frequency": "7回中1回",
    "exampleTh": "ตัวอักษรไทยมีทั้งหมด 44 ตัว",
    "exampleJa": "タイ文字は全部で44文字あります。"
  },
  {
    "id": 1020,
    "word": "ตาก",
    "meaning": "干す、晒す",
    "pronunciation": "tàak",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้แดดดี ฉันเลยตากผ้าห่ม",
    "exampleJa": "今日は天気が良いので、布団を干しました。"
  },
  {
    "id": 1021,
    "word": "ต่างชาติ",
    "meaning": "外国人、外国",
    "pronunciation": "tàang-châat",
    "frequency": "7回中1回",
    "exampleTh": "มีนักท่องเที่ยวต่างชาติมากมายที่นี่",
    "exampleJa": "ここには多くの外国人観光客がいます。"
  },
  {
    "id": 1022,
    "word": "ต้าน",
    "meaning": "抵抗する、防ぐ",
    "pronunciation": "tâan",
    "frequency": "7回中1回",
    "exampleTh": "ยานี้ช่วยต้านไวรัสได้ดีมาก",
    "exampleJa": "この薬はウイルスを防ぐのにとても効果的です。"
  },
  {
    "id": 1023,
    "word": "ตามลำดับ",
    "meaning": "順番に、順を追って",
    "pronunciation": "taam-lam-dàp",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาเข้าแถวตามลำดับก่อนหลัง",
    "exampleJa": "先着順に並んでください。"
  },
  {
    "id": 1024,
    "word": "ตามสบาย",
    "meaning": "ご自由に、気楽に",
    "pronunciation": "taam-sa-baai",
    "frequency": "7回中1回",
    "exampleTh": "เชิญนั่งพักผ่อนตามสบายเลยครับ",
    "exampleJa": "どうぞご自由におくつろぎください。"
  },
  {
    "id": 1025,
    "word": "ตำ",
    "meaning": "つく、叩き潰す",
    "pronunciation": "tam",
    "frequency": "7回中1回",
    "exampleTh": "แม่กำลังตำน้ำพริกอยู่ในครัว",
    "exampleJa": "母は台所でナムプリックをついています。"
  },
  {
    "id": 1026,
    "word": "ต่ำ",
    "meaning": "低い",
    "pronunciation": "tàm",
    "frequency": "7回中1回",
    "exampleTh": "อุณหภูมิวันนี้ต่ำกว่าเมื่อวานมาก",
    "exampleJa": "今日の気温は昨日よりずっと低いです。"
  },
  {
    "id": 1027,
    "word": "ต่ำกว่า",
    "meaning": "〜未満、〜より低い",
    "pronunciation": "tàm-gùaa",
    "frequency": "7回中1回",
    "exampleTh": "เด็กอายุต่ำกว่าสิบปีเข้าฟรี",
    "exampleJa": "10歳未満の子供は入場無料です。"
  },
  {
    "id": 1028,
    "word": "ตี",
    "meaning": "叩く、打つ",
    "pronunciation": "tii",
    "frequency": "7回中1回",
    "exampleTh": "เขาชอบตีกลองเสียงดังในห้อง",
    "exampleJa": "彼は部屋でドラムを大音量で叩くのが好きだ。"
  },
  {
    "id": 1029,
    "word": "ตีราคา",
    "meaning": "見積もる、評価する",
    "pronunciation": "tii-raa-khaa",
    "frequency": "7回中1回",
    "exampleTh": "ช่างกำลังตีราคาค่าซ่อมรถยนต์",
    "exampleJa": "整備士が車の修理代を見積もっています。"
  },
  {
    "id": 1030,
    "word": "ตื่นเต้น",
    "meaning": "興奮する、ワクワクする",
    "pronunciation": "tʉ̀ʉn-tên",
    "frequency": "7回中1回",
    "exampleTh": "ฉันรู้สึ��ตื่นเต้นที่จะได้ไปเที่ยว",
    "exampleJa": "旅行に行くのが楽しみでワクワクしています。"
  },
  {
    "id": 1031,
    "word": "ตื่นสาย",
    "meaning": "朝寝坊する",
    "pronunciation": "tʉ̀ʉn-sǎai",
    "frequency": "7回中1回",
    "exampleTh": "วันอาทิตย์ฉันมักจะตื่นสาย",
    "exampleJa": "日曜日はたいてい朝寝坊します。"
  },
  {
    "id": 1032,
    "word": "ตุลาคม",
    "meaning": "10月",
    "pronunciation": "tu-laa-khom",
    "frequency": "7回中1回",
    "exampleTh": "ฉันจะไปเที่ยวญี่ปุ่นเดือนตุลาคม",
    "exampleJa": "私は10月に日本へ旅行に行きます。"
  },
  {
    "id": 1033,
    "word": "ตู้",
    "meaning": "戸棚",
    "pronunciation": "tûu",
    "frequency": "7回中1回",
    "exampleTh": "หนังสืออยู่ในตู้ไม้ใบนั้��",
    "exampleJa": "本はその木製の戸棚の中にあります。"
  },
  {
    "id": 1034,
    "word": "ตู้เย็น",
    "meaning": "冷蔵庫",
    "pronunciation": "tûu-yen",
    "frequency": "7回中1回",
    "exampleTh": "มีน้ำดื่มเย็นๆ อยู่ในตู้เย็น",
    "exampleJa": "冷蔵庫に冷たい飲み水があります。"
  },
  {
    "id": 1035,
    "word": "เต้นที่",
    "meaning": "〜で踊る",
    "pronunciation": "tên-thîi",
    "frequency": "7回中1回",
    "exampleTh": "พวกเขาชอบเต้นที่เวทีนี้",
    "exampleJa": "彼らはこのステージで踊るのが好きです。"
  },
  {
    "id": 1036,
    "word": "เต็มที่",
    "meaning": "全力で",
    "pronunciation": "tem-thîi",
    "frequency": "7回中1回",
    "exampleTh": "ขอให้ทุกคนพยายามอย่างเต็มที่",
    "exampleJa": "皆さん、全力で頑張ってください。"
  },
  {
    "id": 1037,
    "word": "เต็มไปด้วย",
    "meaning": "〜で満ちている",
    "pronunciation": "tem-pai-dûay",
    "frequency": "7回中1回",
    "exampleTh": "ห้องนี้เต็มไปด้วยฝุ่น",
    "exampleJa": "この部屋は埃で満ちている。"
  },
  {
    "id": 1038,
    "word": "เตรียมตัว",
    "meaning": "準備する",
    "pronunciation": "triam-tua",
    "frequency": "7回中1回",
    "exampleTh": "ฉันต้องเตรียมตัวไปสอบพรุ่งนี้",
    "exampleJa": "私は明日の試験の準備をしなければならない。"
  },
  {
    "id": 1039,
    "word": "เติบ",
    "meaning": "育つ",
    "pronunciation": "tə̀əp",
    "frequency": "7回中1回",
    "exampleTh": "ต้นไม้กำลังเติบโตอย่างรวดเร็ว",
    "exampleJa": "木が急速に育っています。"
  },
  {
    "id": 1040,
    "word": "เตือน",
    "meaning": "警告する",
    "pronunciation": "tʉan",
    "frequency": "7回中1回",
    "exampleTh": "หมอเตือนให้เขาลดน้ำหนัก",
    "exampleJa": "医師は彼に減量するよう警告した。"
  },
  {
    "id": 1041,
    "word": "แตงกวา",
    "meaning": "きゅうり",
    "pronunciation": "tæng-gwaa",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบกินแตงกวาสดๆ",
    "exampleJa": "私は新鮮なきゅうりを食べるのが好きです。"
  },
  {
    "id": 1042,
    "word": "แต่งตัว",
    "meaning": "身支度する",
    "pronunciation": "tɛ̀ŋ-tua",
    "frequency": "7回中1回",
    "exampleTh": "เธอใช้เวลาแต่งตัวนานมาก",
    "exampleJa": "彼女は身支度をするのにとても時間がかかる。"
  },
  {
    "id": 1043,
    "word": "โตเกียว",
    "meaning": "東京",
    "pronunciation": "too-giao",
    "frequency": "7回中1回",
    "exampleTh": "โตเกียวเป็นเมืองหลวงของญี่ปุ่น",
    "exampleJa": "東京は日本の首都です。"
  },
  {
    "id": 1044,
    "word": "ใต้ดิน",
    "meaning": "地下",
    "pronunciation": "tâi-din",
    "frequency": "7回中1回",
    "exampleTh": "เราขึ้นรถไฟใต้ดินไปทำงาน",
    "exampleJa": "私たちは地下鉄に乗って仕事に行きます。"
  },
  {
    "id": 1045,
    "word": "ถอน",
    "meaning": "抜く",
    "pronunciation": "thɔ̌ɔn",
    "frequency": "7回中1回",
    "exampleTh": "เขาช่วยฉันถอนหญ้าในสวน",
    "exampleJa": "彼は私が庭の草を抜くのを手伝ってくれた。"
  },
  {
    "id": 1046,
    "word": "ถอนเงิน",
    "meaning": "お金をおろす",
    "pronunciation": "thɔ̌ɔn-ŋən",
    "frequency": "7回中1回",
    "exampleTh": "ฉันต้องการถอนเงินจากตู้เอทีเอ็ม",
    "exampleJa": "私はATMからお金をおろしたい。"
  },
  {
    "id": 1047,
    "word": "ถ้างั้น",
    "meaning": "それなら",
    "pronunciation": "thâa-ŋán",
    "frequency": "7回中1回",
    "exampleTh": "ถ้างั้นเราไปกินข้าวกันเลยไหม",
    "exampleJa": "それなら、もうご飯を食べに行きましょうか。"
  },
  {
    "id": 1048,
    "word": "ถาม",
    "meaning": "質問する",
    "pronunciation": "thǎam",
    "frequency": "7回中1回",
    "exampleTh": "ถ้าไม่เข้าใจก็ถามครูได้นะ",
    "exampleJa": "理解できなければ先生に質問していいですよ。"
  },
  {
    "id": 1049,
    "word": "ถึงแม้ว่า",
    "meaning": "〜にもかかわらず",
    "pronunciation": "thʉ̌ŋ-mɛ́ɛ-wâa",
    "frequency": "7回中1回",
    "exampleTh": "ถึงแม้ว่าฝนจะตก เขาก็ยังออกไปวิ่ง",
    "exampleJa": "雨が降っているにもかかわらず、彼は走りに出かけた。"
  },
  {
    "id": 1050,
    "word": "ถือว่า",
    "meaning": "〜とみなす",
    "pronunciation": "thʉ̌ʉ-wâa",
    "frequency": "7回中1回",
    "exampleTh": "การสอบครั้งนี้ถือว่าผ่านแล้ว",
    "exampleJa": "今回の試験は合格とみなされます。"
  },
  {
    "id": 1051,
    "word": "ถือสาย",
    "meaning": "電話を切らずに待つ",
    "pronunciation": "thʉ̌ʉ-sǎai",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาถือสายรอสักครู่นะคะ",
    "exampleJa": "少々お電話を切らずにお待ちください。"
  },
  {
    "id": 1052,
    "word": "ถือโอกาส",
    "meaning": "機会を利用する",
    "pronunciation": "thʉ̌ʉ-oo-gàat",
    "frequency": "7回中1回",
    "exampleTh": "ฉันถือโอกาสนี้ขอขอบคุณทุกคน",
    "exampleJa": "この機会を利用して皆さんに感謝します。"
  },
  {
    "id": 1053,
    "word": "ถูกล้วง",
    "meaning": "スリに遭う",
    "pronunciation": "thùuk-lûang",
    "frequency": "7回中1回",
    "exampleTh": "เขาถูกล้วงกระเป๋าบนรถเมล์",
    "exampleJa": "彼はバスの中でスリに遭った。"
  },
  {
    "id": 1054,
    "word": "แกวนี้",
    "meaning": "この手口",
    "pronunciation": "kɛɛo-níi",
    "frequency": "7回中1回",
    "exampleTh": "เขามาแกวนี้อีกแล้วนะ",
    "exampleJa": "彼はまたこの手口で来たね。"
  },
  {
    "id": 1055,
    "word": "ทดสอบ",
    "meaning": "テストする",
    "pronunciation": "thót-sɔ̀ɔp",
    "frequency": "7回中1回",
    "exampleTh": "พรุ่งนี้จะมีการทดสอบภาษาไทย",
    "exampleJa": "明日、タイ語のテストがあります。"
  },
  {
    "id": 1056,
    "word": "ทนาย",
    "meaning": "弁護士",
    "pronunciation": "tha-naai",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำงานเป็นทนายความที่นี่",
    "exampleJa": "彼はここで弁護士として働いています。"
  },
  {
    "id": 1057,
    "word": "ทราย",
    "meaning": "砂",
    "pronunciation": "saai",
    "frequency": "7回中1回",
    "exampleTh": "เด็กๆ ชอบเล่นทรายที่ชายหาด",
    "exampleJa": "子供たちはビーチで砂遊びをするのが好きです。"
  },
  {
    "id": 1058,
    "word": "ทรุดลง",
    "meaning": "崩れ落ちる",
    "pronunciation": "sút-long",
    "frequency": "7回中1回",
    "exampleTh": "คนไข้มีอาการทรุดลงอย่างรวดเร็ว",
    "exampleJa": "患者の容体は急速に悪化した。"
  },
  {
    "id": 1059,
    "word": "ท่วม",
    "meaning": "浸水する",
    "pronunciation": "thûam",
    "frequency": "7回中1回",
    "exampleTh": "น้ำท่วมถนนทำให้รถติดมาก",
    "exampleJa": "道路が冠水して渋滞がひどい。"
  },
  {
    "id": 1060,
    "word": "ทอง",
    "meaning": "金",
    "pronunciation": "thɔɔng",
    "frequency": "7回中1回",
    "exampleTh": "เธอซื้อสร้อยคอทองคำเส้นใหม่",
    "exampleJa": "彼女は新しい金のネックレスを買った。"
  },
  {
    "id": 1061,
    "word": "ท่อง",
    "meaning": "暗記する",
    "pronunciation": "thɔ̂ng",
    "frequency": "7回中1回",
    "exampleTh": "นักเรียนกำลังท่องจำคำศัพท์",
    "exampleJa": "生徒たちは単語を暗記している。"
  },
  {
    "id": 1062,
    "word": "ท้องผูก",
    "meaning": "便秘する",
    "pronunciation": "thɔ́ɔng-phùuk",
    "frequency": "7回中1回",
    "exampleTh": "ช่วงนี้ฉันท้องผูกบ่อยมาก",
    "exampleJa": "最���、私はよく便秘になります。"
  },
  {
    "id": 1063,
    "word": "ทอด",
    "meaning": "揚げる",
    "pronunciation": "thɔ̂ɔt",
    "frequency": "7回中1回",
    "exampleTh": "แม่กำลังทอดไก่ในครัว",
    "exampleJa": "母は台所で鶏肉を揚げている。"
  },
  {
    "id": 1064,
    "word": "ทอดมัน",
    "meaning": "すり身揚げ",
    "pronunciation": "thɔ̂ɔt-man",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบกินทอดมันกุ้งร้านนี้",
    "exampleJa": "私はこの店のトートマンクン（エビのすり身揚げ）を食べるのが好きです。"
  },
  {
    "id": 1065,
    "word": "ทอน",
    "meaning": "おつりを渡す",
    "pronunciation": "thɔɔn",
    "frequency": "7回中1回",
    "exampleTh": "แม่ค้าทอนเงินให้ฉันไม่ครบ",
    "exampleJa": "店員は私におつりを足りないように渡した。"
  },
  {
    "id": 1066,
    "word": "ทอนเงิน",
    "meaning": "おつりを渡す",
    "pronunciation": "thɔɔn-ngən",
    "frequency": "7回中1回",
    "exampleTh": "กรุณารอทอนเงินสักครู่นะคะ",
    "exampleJa": "おつりをお渡ししますので、少々お待ちください。"
  },
  {
    "id": 1067,
    "word": "ทักษะ",
    "meaning": "スキル",
    "pronunciation": "thák-sà",
    "frequency": "7回中1回",
    "exampleTh": "การทำงานนี้ต้องใช้ทักษะสูง",
    "exampleJa": "この仕事は高いスキルが必要です。"
  },
  {
    "id": 1068,
    "word": "ทันใจ",
    "meaning": "すぐに",
    "pronunciation": "than-chai",
    "frequency": "7回中1回",
    "exampleTh": "บริการส่งของที่นี่รวดเร็วทันใจ",
    "exampleJa": "ここの配送サービスは迅速で思い通りだ。"
  },
  {
    "id": 1069,
    "word": "ทันใด",
    "meaning": "たちまち",
    "pronunciation": "than-dai",
    "frequency": "7回中1回",
    "exampleTh": "ทันใดนั้นฝนก็ตกลงมาอย่างหนัก",
    "exampleJa": "たちまち雨が激しく降り出した。"
  },
  {
    "id": 1070,
    "word": "ทางเลือก",
    "meaning": "選択肢",
    "pronunciation": "thaang-lʉ̂ak",
    "frequency": "7回中1回",
    "exampleTh": "เราไม่มีทางเลือกอื่นแล้ว",
    "exampleJa": "私たちには他に選択肢がありません。"
  },
  {
    "id": 1071,
    "word": "ทานข้าว",
    "meaning": "ご飯を食べる",
    "pronunciation": "thaan-khâaw",
    "frequency": "7回中1回",
    "exampleTh": "ฉันกำลังทานข้าวกับครอบครัว",
    "exampleJa": "私は家族とご飯を食べています。"
  },
  {
    "id": 1072,
    "word": "ทานยา",
    "meaning": "薬を飲む",
    "pronunciation": "thaan-yaa",
    "frequency": "7回中1回",
    "exampleTh": "อย่าลืมทานยาก่อนนอนนะครับ",
    "exampleJa": "寝る前に薬を飲むのを忘れないでね。"
  },
  {
    "id": 1073,
    "word": "ท้าย",
    "meaning": "最後、末尾",
    "pronunciation": "tháay",
    "frequency": "7回中1回",
    "exampleTh": "เขานั่งอยู่แถวหลังสุดท้��ย",
    "exampleJa": "彼は一番最後の列に座っています。"
  },
  {
    "id": 1074,
    "word": "ทายาท",
    "meaning": "後継者、相続人",
    "pronunciation": "thaa-yâat",
    "frequency": "7回中1回",
    "exampleTh": "เขาเป็นทายาทคนเดียวของธุรกิจนี้",
    "exampleJa": "彼はこのビジネスの唯一の後継者です。"
  },
  {
    "id": 1075,
    "word": "ทำได้",
    "meaning": "できる、達成する",
    "pronunciation": "tham-dâay",
    "frequency": "7回中1回",
    "exampleTh": "ถ้าคุณพยายาม คุณก็ทำได้แน่นอน",
    "exampleJa": "努力すれば、あなたなら絶対にできます。"
  },
  {
    "id": 1076,
    "word": "ทำนา",
    "meaning": "稲作をする",
    "pronunciation": "tham-naa",
    "frequency": "7回中1回",
    "exampleTh": "ชาวนาเริ่มทำนาในฤดูฝน",
    "exampleJa": "農民たちは雨季に稲作を始めます。"
  },
  {
    "id": 1077,
    "word": "ทิ้ง",
    "meaning": "捨てる",
    "pronunciation": "thíŋ",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาอย่าทิ้งขยะลงบนพื้น",
    "exampleJa": "床にゴミを捨てないでください。"
  },
  {
    "id": 1078,
    "word": "ที่เกิด",
    "meaning": "��生地、発生地",
    "pronunciation": "thîi-gə̀ət",
    "frequency": "7回中1回",
    "exampleTh": "กรุงเทพฯ เป็นที่เกิดของฉัน",
    "exampleJa": "バンコクは私の生まれた場所です。"
  },
  {
    "id": 1079,
    "word": "ที่เกิดเหตุ",
    "meaning": "事件現場、現場",
    "pronunciation": "thîi-gə̀ət-hèet",
    "frequency": "7回中1回",
    "exampleTh": "ตำตรวจรีบเดินทางไปที่เกิดเหตุ",
    "exampleJa": "警察は急いで事件現場へ向かいました。"
  },
  {
    "id": 1080,
    "word": "ที่นั่ง",
    "meaning": "座席、席",
    "pronunciation": "thîi-nâŋ",
    "frequency": "7回中1回",
    "exampleTh": "ที่นั่งนี้มีคนจองหรือยังครับ",
    "exampleJa": "この座席はもう予約されていますか？"
  },
  {
    "id": 1081,
    "word": "ทีวี",
    "meaning": "テレビ",
    "pronunciation": "thii-wii",
    "frequency": "7回中1回",
    "exampleTh": "พ่อชอบดูข่าวทางทีวีทุกวัน",
    "exampleJa": "父は毎日テレビでニュースを見るのが好きです。"
  },
  {
    "id": 1082,
    "word": "ทุกเช้า",
    "meaning": "毎朝",
    "pronunciation": "thúk-cháaw",
    "frequency": "7回中1回",
    "exampleTh": "ฉันด��่มกาแฟร้อนทุกเช้า",
    "exampleJa": "私は毎朝温かいコーヒーを飲みます。"
  },
  {
    "id": 1083,
    "word": "ทุกปี",
    "meaning": "毎年",
    "pronunciation": "thúk-pii",
    "frequency": "7回中1回",
    "exampleTh": "ครอบครัวเราจะไปเที่ยวทะเลทุกปี",
    "exampleJa": "私たちの家族は毎年海へ旅行に行きます。"
  },
  {
    "id": 1084,
    "word": "ทุกภาค",
    "meaning": "全地方、すべての地域",
    "pronunciation": "thúk-phâak",
    "frequency": "7回中1回",
    "exampleTh": "อาหารไทยมีชื่อเสียงในทุกภาค",
    "exampleJa": "タイ料理はすべての地方で有名です。"
  },
  {
    "id": 1085,
    "word": "ทุน",
    "meaning": "資金、資本",
    "pronunciation": "thun",
    "frequency": "7回中1回",
    "exampleTh": "บริษัทต้องการทุนเพิ่มเพื่อขยายงาน",
    "exampleJa": "会社は事業拡大のためにさらなる資金を必要としています。"
  },
  {
    "id": 1086,
    "word": "ทุนการศึกษา",
    "meaning": "奨学金",
    "pronunciation": "thun-kaan-sʉ̀k-sǎa",
    "frequency": "7回中1回",
    "exampleTh": "เขาได้รับทุนการศึกษาไปเรียนต่อต่างประเทศ",
    "exampleJa": "彼は留学するための奨学金を受け取りました。"
  },
  {
    "id": 1087,
    "word": "ทุเรียน",
    "meaning": "ドリアン",
    "pronunciation": "thu-rian",
    "frequency": "7回中1回",
    "exampleTh": "ทุเรียนเป็นราชาแห่งผลไม้ไทย",
    "exampleJa": "ドリアンはタイの果物の王様です。"
  },
  {
    "id": 1088,
    "word": "ทูต",
    "meaning": "大使、外交官",
    "pronunciation": "thûut",
    "frequency": "7回中1回",
    "exampleTh": "ท่านทูตเข้าร่วมงานเลี้ยงต้อนรับ",
    "exampleJa": "大使は歓迎レセプションに出席しました。"
  },
  {
    "id": 1089,
    "word": "เท็จจริง",
    "meaning": "事実、真偽",
    "pronunciation": "thét-ciŋ",
    "frequency": "7回中1回",
    "exampleTh": "ตำรวจกำลังตรวจสอบข้อเท็จจริงของเรื่องนี้",
    "exampleJa": "警察はこの件の事実関係を調査しています。"
  },
  {
    "id": 1090,
    "word": "เท่ากัน",
    "meaning": "等しい、同じ",
    "pronunciation": "thâw-kan",
    "frequency": "7回中1回",
    "exampleTh": "เราควรแบ่งขนมให้ทุกคนเท่ากัน",
    "exampleJa": "お菓子は全員に等しく分けるべきです。"
  },
  {
    "id": 1091,
    "word": "เท่าไร",
    "meaning": "いくら",
    "pronunciation": "thâo-rai",
    "frequency": "7回中1回",
    "exampleTh": "เสื้อตัวนี้ราคาเท่าไรครับ",
    "exampleJa": "この服はいくらですか？"
  },
  {
    "id": 1092,
    "word": "เทียน",
    "meaning": "ろうそく",
    "pronunciation": "thian",
    "frequency": "7回中1回",
    "exampleTh": "เขาจุดเทียนเมื่อไฟดับ",
    "exampleJa": "停電のとき、彼はろうそくに火を灯した。"
  },
  {
    "id": 1093,
    "word": "เที่ยวรอบ",
    "meaning": "周遊する",
    "pronunciation": "thîao-rôop",
    "frequency": "7回中1回",
    "exampleTh": "เราไปนั่งเรือเที่ยวรอบเกาะกันดีกว่า",
    "exampleJa": "船に乗って島を一周観光しに行きましょう。"
  },
  {
    "id": 1094,
    "word": "แท้",
    "meaning": "本物の",
    "pronunciation": "tháe",
    "frequency": "7回中1回",
    "exampleTh": "กระเป๋าใบนี้ทำจากหนังแท้",
    "exampleJa": "このバッグは本革で作られています。"
  },
  {
    "id": 1095,
    "word": "แท็กซี่",
    "meaning": "タクシー",
    "pronunciation": "tháek-sîi",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเรียกแท็กซี่เพื่อไปสนามบิน",
    "exampleJa": "私は空港へ行くためにタクシーを呼んだ。"
  },
  {
    "id": 1096,
    "word": "โทรมา",
    "meaning": "電話をかけてくる",
    "pronunciation": "thoo-maa",
    "frequency": "7回中1回",
    "exampleTh": "แม่โทรมาหาฉันเมื่อเช้านี้",
    "exampleJa": "今朝、母が私に電話をかけてきた。"
  },
  {
    "id": 1097,
    "word": "โทรศัพท์มือถือ",
    "meaning": "携帯電話",
    "pronunciation": "thoo-ra-sàp-mʉʉ-thʉ̌ʉ",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำโทรศัพท์มือถือตกพื้น",
    "exampleJa": "彼は携帯電話を床に落とした。"
  },
  {
    "id": 1098,
    "word": "ธรรมชาติ",
    "meaning": "自然",
    "pronunciation": "tham-ma-châat",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบไปเที่ยวชมธรรมชาติที่ภูเขา",
    "exampleJa": "私は山へ自然を観に行くのが好きです。"
  },
  {
    "id": 1099,
    "word": "ธรรมเมียม",
    "meaning": "慣習（※正しくはธรรมเนียม）",
    "pronunciation": "tham-niam",
    "frequency": "7回中1回",
    "exampleTh": "การไหว้เป็นธรรมเนียมไทยที่งดงาม",
    "exampleJa": "ワイ（合掌）は美しいタイの慣習です。"
  },
  {
    "id": 1100,
    "word": "ธุรกิจ",
    "meaning": "ビジネス",
    "pronunciation": "thú-ra-gìt",
    "frequency": "7回中1回",
    "exampleTh": "เขาเปิดธุรกิจใหม่ในกรุงเทพฯ",
    "exampleJa": "彼はバンコクで新しいビジネスを始めた。"
  },
  {
    "id": 1101,
    "word": "นก",
    "meaning": "鳥",
    "pronunciation": "nók",
    "frequency": "7回中1回",
    "exampleTh": "มีนกหลายตัวเกาะอยู่บนต้นไม้",
    "exampleJa": "木の上にたくさんの鳥が止まっている。"
  },
  {
    "id": 1102,
    "word": "นครปฐม",
    "meaning": "ナコーンパトム",
    "pronunciation": "na-khoon-pa-thǒm",
    "frequency": "7回中1回",
    "exampleTh": "นครปฐมมีเจดีย์ที่ใหญ่ที่สุด",
    "exampleJa": "ナコーンパトムには最も大きな仏塔があります。"
  },
  {
    "id": 1103,
    "word": "นวนิยาย",
    "meaning": "小説",
    "pronunciation": "na-wa-ní-yaai",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบอ่านนวนิยายรักเรื่องนี้มาก",
    "exampleJa": "私はこの恋愛小説を読むのがとても好きです。"
  },
  {
    "id": 1104,
    "word": "น้องชาย",
    "meaning": "弟",
    "pronunciation": "nɔ́ɔng-chaai",
    "frequency": "7回中1回",
    "exampleTh": "น้องชายของฉันเรียนอยู่มหาวิทยาลัย",
    "exampleJa": "私の弟は大学で勉強しています。"
  },
  {
    "id": 1105,
    "word": "น้องสาว",
    "meaning": "妹",
    "pronunciation": "nɔ́ɔng-sǎao",
    "frequency": "7回中1回",
    "exampleTh": "น้องสาวของเขาชอบกินไอศกรีม",
    "exampleJa": "彼の妹はアイスクリームを食べるのが好きです。"
  },
  {
    "id": 1106,
    "word": "นอนดึก",
    "meaning": "夜更かしする",
    "pronunciation": "nɔɔn-dʉ̀k",
    "frequency": "7回中1回",
    "exampleTh": "��ย่านอนดึกนะ เดี๋ยวพรุ่งนี้ตื่นสาย",
    "exampleJa": "夜更かししないでね、明日寝坊するよ。"
  },
  {
    "id": 1107,
    "word": "นอบ",
    "meaning": "敬う、礼拝する",
    "pronunciation": "nɔ̂ɔp",
    "frequency": "7回中1回",
    "exampleTh": "เขานอบน้อมต่อผู้ใหญ่อยู่เสมอ",
    "exampleJa": "彼はいつも目上の人に対して謙虚で礼儀正しいです。"
  },
  {
    "id": 1108,
    "word": "น้อยที่สุด",
    "meaning": "最も少ない",
    "pronunciation": "nɔ́ɔi-thîi-sùt",
    "frequency": "7回中1回",
    "exampleTh": "งานนี้ใช้เวลาน้อยที่สุดในการทำ",
    "exampleJa": "この仕事は行うのに最も時間がかからない。"
  },
  {
    "id": 1109,
    "word": "น้อยลง",
    "meaning": "減少する",
    "pronunciation": "nɔ́ɔi-long",
    "frequency": "7回中1回",
    "exampleTh": "จำนวนนักท่องเที่ยวปีนี้น้อยลงมาก",
    "exampleJa": "今年の観光客の数は大幅に減少した。"
  },
  {
    "id": 1110,
    "word": "นะ",
    "meaning": "〜ね、〜よ",
    "pronunciation": "ná",
    "frequency": "7回中1回",
    "exampleTh": "พรุ่งนี้เจอกันที่ส��านีรถไฟนะ",
    "exampleJa": "明日、駅で会いましょうね。"
  },
  {
    "id": 1111,
    "word": "นักกีฬา",
    "meaning": "アスリート、スポーツ選手",
    "pronunciation": "nak-gii-laa",
    "frequency": "7回中1回",
    "exampleTh": "เขาเป็นนักกีฬาวิ่งแข่งทีมชาติ",
    "exampleJa": "彼は国家代表の陸上選手です。"
  },
  {
    "id": 1112,
    "word": "นักธุรกิจ",
    "meaning": "実業家、ビジネスマン",
    "pronunciation": "nak-thú-rá-gìt",
    "frequency": "7回中1回",
    "exampleTh": "พ่อของฉันเป็นนักธุรกิจที่ประสบความสำเร็จ",
    "exampleJa": "私の父は成功した実業家です。"
  },
  {
    "id": 1113,
    "word": "นักศึกษา",
    "meaning": "大学生、学生",
    "pronunciation": "nak-sʉ̀k-sǎa",
    "frequency": "7回中1回",
    "exampleTh": "นักศึกษาคนนี้เรียนเก่งมาก",
    "exampleJa": "この大学生はとても勉強ができます。"
  },
  {
    "id": 1114,
    "word": "นักออกแบบ",
    "meaning": "デザイナー",
    "pronunciation": "nak-ɔ̀ɔk-bɛ̀ɛp",
    "frequency": "7回中1回",
    "exampleTh": "เธอทำงานเป็นนักออกแบบแฟชั่น",
    "exampleJa": "彼女はファッションデザイナーとして働いています。"
  },
  {
    "id": 1115,
    "word": "นา",
    "meaning": "田んぼ、田",
    "pronunciation": "naa",
    "frequency": "7回中1回",
    "exampleTh": "ชาวนาทำงานหนักในนาข้าว",
    "exampleJa": "農家は田んぼで一生懸命働きます。"
  },
  {
    "id": 1116,
    "word": "นาที่",
    "meaning": "分（時間）",
    "pronunciation": "naa-thii",
    "frequency": "7回中1回",
    "exampleTh": "ขอเวลาอีกห้านาทีเพื่อเตรียมตัว",
    "exampleJa": "準備するためにもう5分時間をください。"
  },
  {
    "id": 1117,
    "word": "นามบัตร",
    "meaning": "名刺",
    "pronunciation": "naam-bàt",
    "frequency": "7回中1回",
    "exampleTh": "นี่คือนามบัตรของฉันครับ",
    "exampleJa": "これが私の名刺です。"
  },
  {
    "id": 1118,
    "word": "น่ารัก",
    "meaning": "可愛い",
    "pronunciation": "nâa-rák",
    "frequency": "7回中1回",
    "exampleTh": "ลูกแมวตัวนี้น่ารักมากจริงๆ",
    "exampleJa": "この子猫は本当にとても可愛いです。"
  },
  {
    "id": 1119,
    "word": "นาฬิกาปลุก",
    "meaning": "目覚まし時計",
    "pronunciation": "naa-lí-gaa-plùk",
    "frequency": "7回中1回",
    "exampleTh": "นาฬิกาปลุกดังตอนหกโมงเช้าทุกวัน",
    "exampleJa": "目覚まし時計が毎日朝6時に鳴ります。"
  },
  {
    "id": 1120,
    "word": "นำเข้า",
    "meaning": "輸入する",
    "pronunciation": "nam-khâo",
    "frequency": "7回中1回",
    "exampleTh": "ประเทศไทยนำเข้ารถยนต์จากญี่ปุ่น",
    "exampleJa": "タイは日本から車を輸入しています。"
  },
  {
    "id": 1121,
    "word": "น้ำตก",
    "meaning": "滝",
    "pronunciation": "nám-tòk",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราไปเที่ยวที่น้ำตกในวันหยุด",
    "exampleJa": "私たちは休日に滝へ遊びに行きました。"
  },
  {
    "id": 1122,
    "word": "น้ำตาล",
    "meaning": "砂糖、茶色",
    "pronunciation": "nám-taan",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาอย่าใส่น้ำตาลในกาแฟของฉัน",
    "exampleJa": "私のコーヒーに砂糖を入れないでください。"
  },
  {
    "id": 1123,
    "word": "น้ำผึ้ง",
    "meaning": "ハチミツ",
    "pronunciation": "nám-phʉ̂ng",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบดื่มน้ำอุ่นผสมน้ำผึ้งตอนเช้า",
    "exampleJa": "私は朝、ハチミツを混ぜた温かいお湯を飲むのが好きです。"
  },
  {
    "id": 1124,
    "word": "น้ำพริก",
    "meaning": "チリペースト、ナムプリック",
    "pronunciation": "nám-phrík",
    "frequency": "7回中1回",
    "exampleTh": "แม่ทำน้ำพริกกะปิอร่อยมาก",
    "exampleJa": "母が作るガピ（エビペースト）のナムプリックはとても美味しいです。"
  },
  {
    "id": 1125,
    "word": "นำมา",
    "meaning": "持ってくる、もたらす",
    "pronunciation": "nam-maa",
    "frequency": "7回中1回",
    "exampleTh": "กรุณานำเอกสารนี้มาให้ฉันพรุ่งนี้",
    "exampleJa": "明日、この書類を私に持ってきてください。"
  },
  {
    "id": 1126,
    "word": "น้ำหนัก",
    "meaning": "体重、重さ",
    "pronunciation": "nám-nàk",
    "frequency": "7回中1回",
    "exampleTh": "ช่วงนี้ฉันต้องลดน้ำหนักแล้ว",
    "exampleJa": "最近、私は体重を減らさなければなりません。"
  },
  {
    "id": 1127,
    "word": "นิยาย",
    "meaning": "小説",
    "pronunciation": "ní-yaai",
    "frequency": "7回中1回",
    "exampleTh": "เขาชอบอ่านนิยายรักก่อนนอน",
    "exampleJa": "彼は寝る前に恋愛小説を読むのが好きです。"
  },
  {
    "id": 1128,
    "word": "นี่",
    "meaning": "これ、ここ",
    "pronunciation": "nîi",
    "frequency": "7回中1回",
    "exampleTh": "นี่คือหนังสือที่ฉันอยากแนะนำให้คุณอ่าน",
    "exampleJa": "これはあなたに読むことを勧めたい本です。"
  },
  {
    "id": 1129,
    "word": "นึก",
    "meaning": "思う、考える、思い出す",
    "pronunciation": "nʉ́k",
    "frequency": "7回中1回",
    "exampleTh": "ฉันนึกไม่ออกว่าเขามีชื่อว่าอะไร",
    "exampleJa": "彼の名前が何だったか思い出せません。"
  },
  {
    "id": 1130,
    "word": "เน่า",
    "meaning": "腐った、腐る",
    "pronunciation": "nâo",
    "frequency": "7回中1回",
    "exampleTh": "แอปเปิ้ลผลนี้เน่าแล้ว กินไม่ได้",
    "exampleJa": "このリンゴは腐っているので食べられません。"
  },
  {
    "id": 1131,
    "word": "แน่",
    "meaning": "確かな",
    "pronunciation": "nâe",
    "frequency": "7回中1回",
    "exampleTh": "ฉันคิดว่าเขาต้องมาที่นี่แน่",
    "exampleJa": "彼はきっとここに来ると思います。"
  },
  {
    "id": 1132,
    "word": "แน่ใจ",
    "meaning": "確信する",
    "pronunciation": "nâe-chai",
    "frequency": "7回中1回",
    "exampleTh": "คุณแน่ใจไหมว่าเขาจะมาวันนี้",
    "exampleJa": "彼が今日来るというのは確かですか？"
  },
  {
    "id": 1133,
    "word": "แน่นอน",
    "meaning": "もちろん",
    "pronunciation": "nâe-nɔɔn",
    "frequency": "7回中1回",
    "exampleTh": "ฉันจะไปร่วมงานแต่งงานของคุ��แน่นอน",
    "exampleJa": "私はもちろんあなたの結婚式に行きます。"
  },
  {
    "id": 1134,
    "word": "ในช่วง",
    "meaning": "〜の間に",
    "pronunciation": "nai-chûang",
    "frequency": "7回中1回",
    "exampleTh": "ในช่วงฤดูร้อนอากาศจะร้อนมาก",
    "exampleJa": "夏の間は気温がとても高くなります。"
  },
  {
    "id": 1135,
    "word": "ในเมื่อ",
    "meaning": "〜である以上",
    "pronunciation": "nai-mʉ̂a",
    "frequency": "7回中1回",
    "exampleTh": "ในเมื่อคุณไม่ชอบก็ไม่ต้องกิน",
    "exampleJa": "あなたが嫌いなら、食べる必要はありません。"
  },
  {
    "id": 1136,
    "word": "ในไม่ช้า",
    "meaning": "間もなく",
    "pronunciation": "nai-mâi-cháa",
    "frequency": "7回中1回",
    "exampleTh": "รถไฟกำลังจะมาถึงในไม่ช้านี้",
    "exampleJa": "電車は間もなく到着します。"
  },
  {
    "id": 1137,
    "word": "ในระหว่าง",
    "meaning": "〜の最中に",
    "pronunciation": "nai-rá-wàang",
    "frequency": "7回中1回",
    "exampleTh": "ห้ามใช้โทรศัพท์ในระหว่างเรียน",
    "exampleJa": "授業中は携帯電話を使用しないで���ださい。"
  },
  {
    "id": 1138,
    "word": "บท",
    "meaning": "章",
    "pronunciation": "bòt",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้เราจะเรียนบทที่ห้ากัน",
    "exampleJa": "今日は第5課を勉強します。"
  },
  {
    "id": 1139,
    "word": "บรรจบ",
    "meaning": "合流する",
    "pronunciation": "ban-chòp",
    "frequency": "7回中1回",
    "exampleTh": "แม่น้ำสองสายนี้ไหลมาบรรจบกัน",
    "exampleJa": "これら2つの川はここで合流します。"
  },
  {
    "id": 1140,
    "word": "บรรจุ",
    "meaning": "詰める",
    "pronunciation": "ban-cù",
    "frequency": "7回中1回",
    "exampleTh": "สินค้าชนิดนี้บรรจุในกล่องกระดาษ",
    "exampleJa": "この商品は紙箱に梱包されています。"
  },
  {
    "id": 1141,
    "word": "บรรเทา",
    "meaning": "和らげる",
    "pronunciation": "ban-thao",
    "frequency": "7回中1回",
    "exampleTh": "ยาเม็ดนี้ช่วยบรรเทาอาการปวดหัว",
    "exampleJa": "この錠剤は頭痛を和らげるのに役立ちます。"
  },
  {
    "id": 1142,
    "word": "บ่อยครั้ง",
    "meaning": "しばしば",
    "pronunciation": "bɔ̀i-khráng",
    "frequency": "7回中1回",
    "exampleTh": "ฉันไปกินอาหารญี่ปุ่นบ่อยครั้ง",
    "exampleJa": "私はしばしば日本食を食べに行きます。"
  },
  {
    "id": 1143,
    "word": "บอล",
    "meaning": "サッカー",
    "pronunciation": "bɔɔn",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราชอบเล่นฟุตบอลด้วยกัน",
    "exampleJa": "私たちは一緒にサッカーをするのが好きです。"
  },
  {
    "id": 1144,
    "word": "บัตรพนักงาน",
    "meaning": "社員証",
    "pronunciation": "bàt-phá-nák-ngaan",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาแสดงบัตรพนักงานก่อนเข้าตึก",
    "exampleJa": "ビルに入る前に社員証を提示してください。"
  },
  {
    "id": 1145,
    "word": "บันได",
    "meaning": "階段",
    "pronunciation": "ban-dai",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาเดินขึ้นบันไดอย่างระมัดระวัง",
    "exampleJa": "階段は気をつけて上ってください。"
  },
  {
    "id": 1146,
    "word": "บันทึก",
    "meaning": "記録する",
    "pronunciation": "ban-thʉ́k",
    "frequency": "7回中1回",
    "exampleTh": "เขาบันทึกการประชุมไว้ในสมุ���",
    "exampleJa": "彼は会議の内容をノートに記録しました。"
  },
  {
    "id": 1147,
    "word": "บาง",
    "meaning": "薄い",
    "pronunciation": "baang",
    "frequency": "7回中1回",
    "exampleTh": "หนังสือเล่มนี้มีกระดาษที่บางมาก",
    "exampleJa": "この本は紙がとても薄いです。"
  },
  {
    "id": 1148,
    "word": "บางที",
    "meaning": "もしかしたら",
    "pronunciation": "baang-thii",
    "frequency": "7回中1回",
    "exampleTh": "บางทีพรุ่งนี้ฝนอาจจะตกก็ได้",
    "exampleJa": "もしかしたら明日は雨が降るかもしれません。"
  },
  {
    "id": 1149,
    "word": "บาด",
    "meaning": "切る",
    "pronunciation": "bàat",
    "frequency": "7回中1回",
    "exampleTh": "มีดคมเล่มนี้บาดนิ้วของฉัน",
    "exampleJa": "この鋭いナイフで指を切ってしまいました。"
  },
  {
    "id": 1150,
    "word": "บาดเจ็บ",
    "meaning": "怪我をする",
    "pronunciation": "bàat-cèp",
    "frequency": "7回中1回",
    "exampleTh": "เขาได้รับบาดเจ็บจากอุบัติเหตุรถชน",
    "exampleJa": "彼は自動車事故で怪我をしました。"
  },
  {
    "id": 1151,
    "word": "ปริญญาตรี",
    "meaning": "学士号",
    "pronunciation": "pri-ny-yaa-trii",
    "frequency": "7回中1回",
    "exampleTh": "เขาเรียนจบปริญญาตรีแล้ว",
    "exampleJa": "彼はすでに学士号を取得して卒業しました。"
  },
  {
    "id": 1152,
    "word": "ปรุง",
    "meaning": "調理する",
    "pronunciation": "prung",
    "frequency": "7回中1回",
    "exampleTh": "แม่ปรุงอาหารรสชาติอร่อยมาก",
    "exampleJa": "母はとても美味しい味付けで料理を作ります。"
  },
  {
    "id": 1153,
    "word": "ปลอด",
    "meaning": "〜がない",
    "pronunciation": "plòot",
    "frequency": "7回中1回",
    "exampleTh": "โซนนี้เป็นเขตปลอดบ��หรี่",
    "exampleJa": "このゾーンは禁煙エリアです。"
  },
  {
    "id": 1154,
    "word": "ปลาทู",
    "meaning": "プラートゥー（魚）",
    "pronunciation": "plaa-thuu",
    "frequency": "7回中1回",
    "exampleTh": "คนไทยชอบกินปลาทูทอด",
    "exampleJa": "タイ人はプラートゥーの唐揚げを食べるのが好きです。"
  },
  {
    "id": 1155,
    "word": "ปวด",
    "meaning": "痛む",
    "pronunciation": "puuat",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ฉันปวดหัวมาก",
    "exampleJa": "今日は頭がとても痛いです。"
  },
  {
    "id": 1156,
    "word": "ปอด",
    "meaning": "肺",
    "pronunciation": "pòot",
    "frequency": "7回中1回",
    "exampleTh": "การสูบบุหรี่ทำลายปอด",
    "exampleJa": "喫煙は肺を破壊します。"
  },
  {
    "id": 1157,
    "word": "ปานกลาง",
    "meaning": "中間の",
    "pronunciation": "paan-glaang",
    "frequency": "7回中1回",
    "exampleTh": "ข้อสอบนี้ยากระดับปานกลาง",
    "exampleJa": "この試験は中程度の難しさです。"
  },
  {
    "id": 1158,
    "word": "ป้าย",
    "meaning": "看板",
    "pronunciation": "paai",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาดูป้ายบอกท��งตรงนั้น",
    "exampleJa": "あそこの案内標識を見てください。"
  },
  {
    "id": 1159,
    "word": "ป้ายรถเมล์",
    "meaning": "バス停",
    "pronunciation": "paai-rót-mee",
    "frequency": "7回中1回",
    "exampleTh": "ฉันยืนรอรถเมล์ที่ป้ายรถเมล์",
    "exampleJa": "私はバス停でバスを待っています。"
  },
  {
    "id": 1160,
    "word": "ปีหนัา",
    "meaning": "来年",
    "pronunciation": "pii-nâa",
    "frequency": "7回中1回",
    "exampleTh": "ปีหน้าฉันจะไปเที่ยวญี่ปุ่น",
    "exampleJa": "来年、私は日本へ旅行に行きます。"
  },
  {
    "id": 1161,
    "word": "ปู",
    "meaning": "カニ",
    "pronunciation": "puu",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราไปกินปูที่ทะเลกัน",
    "exampleJa": "私たちは海にカニを食べに行きました。"
  },
  {
    "id": 1162,
    "word": "ปูผัดผงกระหรี่",
    "meaning": "カニのカレー粉炒め",
    "pronunciation": "puu-phàt-phǒng-gà-rìi",
    "frequency": "7回中1回",
    "exampleTh": "ปูผัดผงกระหรี่จานนี้อร่อยมาก",
    "exampleJa": "このカニのカレー粉炒めはとても美味しいです。"
  },
  {
    "id": 1163,
    "word": "เป็นไข้",
    "meaning": "熱がある",
    "pronunciation": "pen-khâi",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ฉันไปทำงานไม่ได้เพราะเป็นไข้",
    "exampleJa": "今日は熱があるので仕事に行けません。"
  },
  {
    "id": 1164,
    "word": "เป็นประต้นไป",
    "meaning": "〜以降",
    "pronunciation": "pen-tôn-pai",
    "frequency": "7回中1回",
    "exampleTh": "ตั้งแต่วันนี้เป็นต้นไปจะตั้งใจเรียน",
    "exampleJa": "今日から先は一生懸命勉強します。"
  },
  {
    "id": 1165,
    "word": "เป็นประจำ",
    "meaning": "定期的に",
    "pronunciation": "pen-prà-cam",
    "frequency": "7回中1回",
    "exampleTh": "เขาออกกำลังกายเป็นประจำทุกวัน",
    "exampleJa": "彼は毎日定期的に運動しています。"
  },
  {
    "id": 1166,
    "word": "เป็นไปได้",
    "meaning": "可能である",
    "pronunciation": "pen-pai-dâai",
    "frequency": "7回中1回",
    "exampleTh": "แผนการนี้เป็นไปได้อย่างแน่นอน",
    "exampleJa": "この計画は確実に実現可能です。"
  },
  {
    "id": 1167,
    "word": "เป็นห่���ง",
    "meaning": "心配する",
    "pronunciation": "pen-hùuang",
    "frequency": "7回中1回",
    "exampleTh": "แม่เป็นห่วงลูกที่เดินทางคนเดียว",
    "exampleJa": "母は一人で旅をする子供を心配しています。"
  },
  {
    "id": 1168,
    "word": "เปรียบ",
    "meaning": "比較する",
    "pronunciation": "priiap",
    "frequency": "7回中1回",
    "exampleTh": "อย่าเอาฉันไปเปรียบกับคนอื่นเลย",
    "exampleJa": "私を他の人と比較しないでください。"
  },
  {
    "id": 1169,
    "word": "เปรียบเสมือน",
    "meaning": "〜のようである",
    "pronunciation": "priiap-sà-mǔuan",
    "frequency": "7回中1回",
    "exampleTh": "ครูเปรียบเสมือนพ่อแม่คนที่สอง",
    "exampleJa": "先生は第二の親のようなものです。"
  },
  {
    "id": 1170,
    "word": "เปรี้ยว",
    "meaning": "酸っぱい",
    "pronunciation": "priiaw",
    "frequency": "7回中1回",
    "exampleTh": "มะนาวลูกนี้มีรสชาติเปรี้ยวมาก",
    "exampleJa": "このレモンはとても酸っぱい味がします。"
  },
  {
    "id": 1171,
    "word": "เปลี่ยนงาน",
    "meaning": "転職する",
    "pronunciation": "plìan-ngaan",
    "frequency": "7回中1回",
    "exampleTh": "เขาตัดสินใจเปลี่ยนงานใหม่เดือนหน้า",
    "exampleJa": "彼は来月、転職することを決めました。"
  },
  {
    "id": 1172,
    "word": "เป้า",
    "meaning": "的、ターゲット",
    "pronunciation": "pâo",
    "frequency": "7回中1回",
    "exampleTh": "ยิงปืนให้ตรงเป้าที่กำหนดไว้",
    "exampleJa": "決められた的に向けて銃を撃ちます。"
  },
  {
    "id": 1173,
    "word": "เป้าหมาย",
    "meaning": "目標、目的",
    "pronunciation": "pâo-mǎai",
    "frequency": "7回中1回",
    "exampleTh": "เป้���หมายของฉันคือการเรียนภาษาไทย",
    "exampleJa": "私の目標はタイ語を学ぶことです。"
  },
  {
    "id": 1174,
    "word": "แปลกใจ",
    "meaning": "驚く、不思議に思う",
    "pronunciation": "plɛ̀ɛk-cai",
    "frequency": "7回中1回",
    "exampleTh": "ฉันแปลกใจที่เขาไม่มาทำงานวันนี้",
    "exampleJa": "今日彼が仕事に来なかったので驚きました。"
  },
  {
    "id": 1175,
    "word": "โปรด",
    "meaning": "〜してください",
    "pronunciation": "pròot",
    "frequency": "7回中1回",
    "exampleTh": "โปรดกรอกข้อมูลในเอกสารนี้ด้วยค่ะ",
    "exampleJa": "この書類に情報を記入してください。"
  },
  {
    "id": 1176,
    "word": "ไปเที่ยว",
    "meaning": "旅行に行く",
    "pronunciation": "pai-thîao",
    "frequency": "7回中1回",
    "exampleTh": "วันหยุดนี้เราจะไปเที่ยวทะเลกัน",
    "exampleJa": "この休みに私たちは海へ遊びに行きます。"
  },
  {
    "id": 1177,
    "word": "ไปรษณีย์",
    "meaning": "郵便局",
    "pronunciation": "prai-sà-nii",
    "frequency": "7回中1回",
    "exampleTh": "ฉันต้องไปส่งจดหมายที่ไปรษณีย์",
    "exampleJa": "郵便局へ手紙を送りに行かなければなりません。"
  },
  {
    "id": 1178,
    "word": "ไปรอบ",
    "meaning": "一周する",
    "pronunciation": "pai-rôop",
    "frequency": "7回中1回",
    "exampleTh": "เราปั่นจักรยานไปรอบสวนสาธารณะ",
    "exampleJa": "私たちは公園の周りを自転車で一周しました。"
  },
  {
    "id": 1179,
    "word": "ไปเรียนต่อ",
    "meaning": "留学する",
    "pronunciation": "pai-rian-tɔ̀ɔ",
    "frequency": "7回中1回",
    "exampleTh": "เขาอยากไปเรียนต่อที่ประเทศญี่ปุ่น",
    "exampleJa": "彼は日本へ留学したいと思っています。"
  },
  {
    "id": 1180,
    "word": "ผงกระหรี่",
    "meaning": "カレー粉",
    "pronunciation": "phǒng-gà-rìi",
    "frequency": "7回中1回",
    "exampleTh": "แม่ใช้ผงกระหรี่ทำข้าวผัดจานนี้",
    "exampleJa": "母はこのチャーハンを作るのにカレー粉を使いました。"
  },
  {
    "id": 1181,
    "word": "ผสม",
    "meaning": "混ぜる",
    "pronunciation": "phà-sǒm",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาผสมน้ำร้อนกับน้ำเย็นให้���ข้ากัน",
    "exampleJa": "お湯と冷水を混ぜ合わせてください。"
  },
  {
    "id": 1182,
    "word": "ผักกาดขาว",
    "meaning": "白菜",
    "pronunciation": "phàk-gàat-khǎao",
    "frequency": "7回中1回",
    "exampleTh": "แกงจืดใส่ผักกาดขาวและหมูสับ",
    "exampleJa": "白菜と豚ひき肉の入ったすましスープ。"
  },
  {
    "id": 1183,
    "word": "ผักบุ้ง",
    "meaning": "空心菜",
    "pronunciation": "phàk-bûng",
    "frequency": "7回中1回",
    "exampleTh": "ผัดผักบุ้งไฟแดงเป็นอาหารที่อร่อยมาก",
    "exampleJa": "空心菜炒めはとても美味しい料理です。"
  },
  {
    "id": 1184,
    "word": "ผัด",
    "meaning": "炒める",
    "pronunciation": "phàt",
    "frequency": "7回中1回",
    "exampleTh": "พ่อกำลังผัดข้าวผัดในห้องครัว",
    "exampleJa": "父は台所でチャーハンを炒めています。"
  },
  {
    "id": 1185,
    "word": "ผิดหวัง",
    "meaning": "がっかりする",
    "pronunciation": "phìt-wǎng",
    "frequency": "7回中1回",
    "exampleTh": "ฉันรู้สึกผิดหวังที่สอบไม่ผ่าน",
    "exampleJa": "試験に合格できなくてがっかりしま���た。"
  },
  {
    "id": 1186,
    "word": "ผู้จัดการ",
    "meaning": "マネージャー",
    "pronunciation": "phûu-càt-gaan",
    "frequency": "7回中1回",
    "exampleTh": "ผู้จัดการกำลังประชุมกับลูกค้าอยู่",
    "exampleJa": "マネージャーは今、顧客と会議をしています。"
  },
  {
    "id": 1187,
    "word": "ผู้ชาย",
    "meaning": "男性",
    "pronunciation": "phûu-chaai",
    "frequency": "7回中1回",
    "exampleTh": "ผู้ชายคนนั้นเป็นเพื่อนร่วมงานของฉัน",
    "exampleJa": "あの男性は私の同僚です。"
  },
  {
    "id": 1188,
    "word": "ผู้เช่า",
    "meaning": "借り手",
    "pronunciation": "phûu-châo",
    "frequency": "7回中1回",
    "exampleTh": "ผู้เช่าต้องจ่ายค่าเช่าบ้านทุกสิ้นเดือน",
    "exampleJa": "借り手は毎月末に家賃を支払わなければなりません。"
  },
  {
    "id": 1189,
    "word": "ผู้โดยสาร",
    "meaning": "乗客",
    "pronunciation": "phûu-dooi-sǎan",
    "frequency": "7回中1回",
    "exampleTh": "ผู้โดยสารทุกคนต้องรัดเข็มขัดนิรภัย",
    "exampleJa": "すべての乗客はシートベルトを着���しなければなりません。"
  },
  {
    "id": 1190,
    "word": "ผู้พิพากษา",
    "meaning": "裁判官",
    "pronunciation": "phûu-phí-phâak-sǎa",
    "frequency": "7回中1回",
    "exampleTh": "ผู้พิพากษาตัดสินคดีด้วยความยุติธรรม",
    "exampleJa": "裁判官は公正に事件を判決します。"
  },
  {
    "id": 1191,
    "word": "ผู้ใหญ่",
    "meaning": "大人、目上の人",
    "pronunciation": "phûu-yài",
    "frequency": "7回中1回",
    "exampleTh": "เด็กควรเคารพผู้ใหญ่",
    "exampleJa": "子供は大人を敬うべきです。"
  },
  {
    "id": 1192,
    "word": "เผ็ด",
    "meaning": "辛い",
    "pronunciation": "phèt",
    "frequency": "7回中1回",
    "exampleTh": "ส้มตำจานนี้เผ็ดมาก",
    "exampleJa": "このソムタムはとても辛いです。"
  },
  {
    "id": 1193,
    "word": "แผน",
    "meaning": "計画、予定",
    "pronunciation": "phǎen",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องทำตามแผนที่วางไว้",
    "exampleJa": "私たちは立てた計画に従わなければならない。"
  },
  {
    "id": 1194,
    "word": "แผล",
    "meaning": "傷、怪我",
    "pronunciation": "phlae",
    "frequency": "7回中1回",
    "exampleTh": "เขามีแผลที่หัวเข่าจากการล้ม",
    "exampleJa": "彼は転んで膝に傷ができた。"
  },
  {
    "id": 1195,
    "word": "ฝากเงิน",
    "meaning": "預金する、お金を預ける",
    "pronunciation": "fàak-ngoen",
    "frequency": "7回中1回",
    "exampleTh": "ฉันไปฝากเงินที่ธนาคารทุกเดือน",
    "exampleJa": "私は毎月銀行にお金を預けに行きます。"
  },
  {
    "id": 1196,
    "word": "ฝ่าย",
    "meaning": "側、部門、部署",
    "pronunciation": "fàai",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำงานอยู่ฝ่ายการตลาด",
    "exampleJa": "彼はマーケティング部門で働いています。"
  },
  {
    "id": 1197,
    "word": "ฝี",
    "meaning": "おでき、腫れ物",
    "pronunciation": "fǐi",
    "frequency": "7回中1回",
    "exampleTh": "หมอช่วยรักษาฝีที่หลังให้เขา",
    "exampleJa": "医者は彼の背中のおできを治療してくれた。"
  },
  {
    "id": 1198,
    "word": "ฝึกหัด",
    "meaning": "練習する、訓練する",
    "pronunciation": "fʉ̀k-hàt",
    "frequency": "7回中1回",
    "exampleTh": "นักเรียนกำลังฝึกหัดพูดภาษาไทย",
    "exampleJa": "生徒たちはタイ語を話す練習をしています。"
  },
  {
    "id": 1199,
    "word": "พนักงานดับเพลิง",
    "meaning": "消防士",
    "pronunciation": "pha-nák-ngaan dàp-phloeng",
    "frequency": "7回中1回",
    "exampleTh": "พนักงานดับเพลิงช่วยดับไฟอย่างรวดเร็ว",
    "exampleJa": "消防士が素早く消火活動を行いました。"
  },
  {
    "id": 1200,
    "word": "พนักงานบริษัท",
    "meaning": "会社員",
    "pronunciation": "pha-nák-ngaan bɔɔ-ri-sàt",
    "frequency": "7回中1回",
    "exampleTh": "พ่อของฉันเป็นพนักงานบริษัทญี่ปุ่น",
    "exampleJa": "私の父は日系企業の会社員です。"
  },
  {
    "id": 1201,
    "word": "พนักงานรักษาความปลอดภัย",
    "meaning": "警備員",
    "pronunciation": "pha-nák-ngaan rák-sǎa khwaam-plɔ̀ɔt-fai",
    "frequency": "7回中1回",
    "exampleTh": "พนักงานรักษาความปลอดภัยยืนอยู่หน้าประตู",
    "exampleJa": "警備員が門の前に立っています。"
  },
  {
    "id": 1202,
    "word": "พบกัน",
    "meaning": "会う、出会う",
    "pronunciation": "phóp-kan",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราจะพบกันที่สถานีรถไฟตอนเย็น",
    "exampleJa": "私たちは夕方、駅で会いましょう。"
  },
  {
    "id": 1203,
    "word": "พยาน",
    "meaning": "証人、目撃者",
    "pronunciation": "pha-yaan",
    "frequency": "7回中1回",
    "exampleTh": "ตำรวจกำลังหาพยานในที่เกิดเหตุ",
    "exampleJa": "警察は現場の目撃者を探しています。"
  },
  {
    "id": 1204,
    "word": "พยาบาล",
    "meaning": "看護師",
    "pronunciation": "pha-yaa-baan",
    "frequency": "7回中1回",
    "exampleTh": "พี่สาวของฉันทำงานเป็นพยาบาลที่นี่",
    "exampleJa": "私の姉はここで看護師として働いています。"
  },
  {
    "id": 1205,
    "word": "พร้อม",
    "meaning": "準備ができている、同時に",
    "pronunciation": "phrɔ́ɔm",
    "frequency": "7回中1回",
    "exampleTh": "ทุกคนพร้อมสำหรับการเดินทางหรือยัง",
    "exampleJa": "皆さん、旅行の準備はできましたか？"
  },
  {
    "id": 1206,
    "word": "พระ",
    "meaning": "僧侶、仏像",
    "pronunciation": "phrá",
    "frequency": "7回中1回",
    "exampleTh": "คนไทยชอบไปไหว้พระที่วัดในวันหยุด",
    "exampleJa": "タイ人は休日に寺院へお参りに行くのが好きです。"
  },
  {
    "id": 1207,
    "word": "พระสงฆ์",
    "meaning": "僧侶、お坊さん",
    "pronunciation": "phrá-sǒng",
    "frequency": "7回中1回",
    "exampleTh": "ชาวพุทธตักบาตรแด่พระสงฆ์ในตอนเช้า",
    "exampleJa": "仏教徒は朝、僧侶に托鉢をします。"
  },
  {
    "id": 1208,
    "word": "พริก",
    "meaning": "唐辛子",
    "pronunciation": "phrík",
    "frequency": "7回中1回",
    "exampleTh": "อาหารไทยมักจะใส่พริกเพื่อเพิ่มรสชาติ",
    "exampleJa": "タイ料理には味を引き立てるために、よく唐辛子が入れられます。"
  },
  {
    "id": 1209,
    "word": "พฤศจิกายน",
    "meaning": "11月",
    "pronunciation": "phrʉ́t-sa-cì-kaa-yon",
    "frequency": "7回中1回",
    "exampleTh": "เทศกาลลอยกระทงมักจะจัดในเดือนพฤศจิกายน",
    "exampleJa": "ロイクラトン祭りは通常11月に開催されます。"
  },
  {
    "id": 1210,
    "word": "พล",
    "meaning": "兵士、人員",
    "pronunciation": "phon",
    "frequency": "7回中1回",
    "exampleTh": "นายพลสั่งให้กำลังพลเตรียมพร้อม",
    "exampleJa": "将軍は兵士たちに準備を整えるよう命じた。"
  },
  {
    "id": 1211,
    "word": "พวกเขา",
    "meaning": "彼ら",
    "pronunciation": "phûak-khǎo",
    "frequency": "7回中1回",
    "exampleTh": "พวกเขาชอบเล่นฟุตบอลด้วยกัน",
    "exampleJa": "彼らは一緒にサッカーをするのが好きです。"
  },
  {
    "id": 1212,
    "word": "พอเหมาะ",
    "meaning": "ちょうどよい",
    "pronunciation": "phɔɔ-mɔ̀",
    "frequency": "7回中1回",
    "exampleTh": "เสื้อตัวนี้ขนาดพอเหมาะกับฉัน",
    "exampleJa": "この服は私にちょうどよいサイズです。"
  },
  {
    "id": 1213,
    "word": "พัทยา",
    "meaning": "パタヤ",
    "pronunciation": "phát-thá-yaa",
    "frequency": "7回中1回",
    "exampleTh": "วันหยุดนี้ฉันจะไปเที่ยวพัทยา",
    "exampleJa": "この休みに私はパタヤへ旅行に行きます。"
  },
  {
    "id": 1214,
    "word": "พันธุ์",
    "meaning": "品種、種",
    "pronunciation": "phan",
    "frequency": "7回中1回",
    "exampleTh": "สุนัขพันธุ์นี้เลี้ยงง่ายมาก",
    "exampleJa": "この品種の犬はとても飼いやすい。"
  },
  {
    "id": 1215,
    "word": "พันธุ์ข้าวหอม",
    "meaning": "香り米の品種",
    "pronunciation": "phan-khâaw-hɔ̌ɔm",
    "frequency": "7回中1回",
    "exampleTh": "ประเทศไทยมีพันธุ์ข้าวหอมที่ดี",
    "exampleJa": "タイには優れた香り米の品種があります。"
  },
  {
    "id": 1216,
    "word": "พันธุ์ทาง",
    "meaning": "雑種、ミックス",
    "pronunciation": "phan-thaaŋ",
    "frequency": "7回中1回",
    "exampleTh": "สุนัขตัวนี้เป็นสุนัขพันธุ์ทาง",
    "exampleJa": "この犬は雑種犬です。"
  },
  {
    "id": 1217,
    "word": "พันธุ์แท้",
    "meaning": "純血、純粋種",
    "pronunciation": "phan-tháe",
    "frequency": "7回中1回",
    "exampleTh": "แมวตัวนี้เป็นแมวพันธุ์แท้",
    "exampleJa": "この猫は純血種の猫です。"
  },
  {
    "id": 1218,
    "word": "พาไป",
    "meaning": "連れて行く",
    "pronunciation": "phaa-pai",
    "frequency": "7回中1回",
    "exampleTh": "พ่อจะพาไปเที่ยวสวนสัตว์วันอาทิตย์",
    "exampleJa": "父は日曜日に動物園に連れて行ってくれます。"
  },
  {
    "id": 1219,
    "word": "พามา",
    "meaning": "連れて来る",
    "pronunciation": "phaa-maa",
    "frequency": "7回中1回",
    "exampleTh": "เพื่อนพาหมามาเล่นที่บ้านของฉัน",
    "exampleJa": "友達が犬を私の家に連れて来ました。"
  },
  {
    "id": 1220,
    "word": "พิพากษา",
    "meaning": "判決を下す",
    "pronunciation": "phi-phâak-sǎa",
    "frequency": "7回中1回",
    "exampleTh": "ศาลจะพิพากษาคดีนี้ในวันพรุ่งนี้",
    "exampleJa": "裁判所は明日、この事件の判決を下します。"
  },
  {
    "id": 1221,
    "word": "พิสูจน์",
    "meaning": "証明する",
    "pronunciation": "phi-sùut",
    "frequency": "7回中1回",
    "exampleTh": "เขาพยายามพิสูจน์ความจริงให้ทุกคนเห็น",
    "exampleJa": "彼は皆に真実を証明しようとしています。"
  },
  {
    "id": 1222,
    "word": "พี่",
    "meaning": "兄、姉、年上",
    "pronunciation": "phîi",
    "frequency": "7回中1回",
    "exampleTh": "พี่ของฉันทำงานที่ธนาคาร",
    "exampleJa": "私の兄（姉）は銀行で働いています。"
  },
  {
    "id": 1223,
    "word": "พี่สาว",
    "meaning": "姉",
    "pronunciation": "phîi-sǎaw",
    "frequency": "7回中1回",
    "exampleTh": "พี่สาวของฉันเรียนอยู่ที่ญี่ปุ่น",
    "exampleJa": "私の姉は日本で留学しています。"
  },
  {
    "id": 1224,
    "word": "พึ่ง",
    "meaning": "頼る",
    "pronunciation": "phʉ̂ŋ",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องพึ่งพาอาศัยกันและกัน",
    "exampleJa": "私たちはお互いに頼り合う必要があります。"
  },
  {
    "id": 1225,
    "word": "พื้น",
    "meaning": "床、地面",
    "pronunciation": "phʉ́ʉn",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาอย่าทิ้งขยะลงบนพื้น",
    "exampleJa": "床にゴミを捨てないでください。"
  },
  {
    "id": 1226,
    "word": "พูดเล่น",
    "meaning": "冗談を言う",
    "pronunciation": "phûut-lên",
    "frequency": "7回中1回",
    "exampleTh": "อย่าโกรธเลยนะ ฉันแค่พูดเล่นเท่านั้น",
    "exampleJa": "怒らないで、ただ冗談を言っただけだから。"
  },
  {
    "id": 1227,
    "word": "เพชร",
    "meaning": "ダイヤモンド",
    "pronunciation": "phet",
    "frequency": "7回中1回",
    "exampleTh": "แหวนเพชรวงนี้สวยและแพงมาก",
    "exampleJa": "このダイヤモンドの指輪は美しくてとても高い。"
  },
  {
    "id": 1228,
    "word": "เพชรบุรี",
    "meaning": "ペッチャブリー",
    "pronunciation": "phet-chá-bù-rii",
    "frequency": "7回中1回",
    "exampleTh": "จังหวัดเพชรบุรีมีขนมหวานอร่อย",
    "exampleJa": "ペッチャブリー県には美味しいスイーツがあります。"
  },
  {
    "id": 1229,
    "word": "เพลง",
    "meaning": "歌、曲",
    "pronunciation": "phleeŋ",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบฟังเพลงไทยตอนทำงาน",
    "exampleJa": "私は仕事中にタイの歌を聴くのが好きです。"
  },
  {
    "id": 1230,
    "word": "เพ้อ",
    "meaning": "うわごとを言う",
    "pronunciation": "phə́ə",
    "frequency": "7回中1回",
    "exampleTh": "เขาไข้ขึ้นสูงจนพูดเพ้อออกมา",
    "exampleJa": "彼は高熱を出してうわごとを言った。"
  },
  {
    "id": 1231,
    "word": "เพิ่งจะ",
    "meaning": "〜したばかり",
    "pronunciation": "phôeng cà",
    "frequency": "7回中1回",
    "exampleTh": "เขาเพิ่งจะมาถึงบ้านเมื่อกี้เอง",
    "exampleJa": "彼はたった今家に着いたばかりです。"
  },
  {
    "id": 1232,
    "word": "เพิ่มเติม",
    "meaning": "追加する、さらに",
    "pronunciation": "phêem tem",
    "frequency": "7回中1回",
    "exampleTh": "หากมีคำถามเพิ่มเติมกรุณาติดต่อเรา",
    "exampleJa": "追加の質問がある場合は、ご連絡ください。"
  },
  {
    "id": 1233,
    "word": "เพียงแค่",
    "meaning": "ただ〜だけ",
    "pronunciation": "phiang khâe",
    "frequency": "7回中1回",
    "exampleTh": "ฉันต้องการเพียงแค่เวลาพักผ่อนเท่านั้น",
    "exampleJa": "私はただ休む時間だけが欲しい。"
  },
  {
    "id": 1234,
    "word": "เพื่อนสนิท",
    "meaning": "親友",
    "pronunciation": "phêuuan sà-nìt",
    "frequency": "7回中1回",
    "exampleTh": "เขาเป็นเพื่อนสนิทของฉันตั้งแต่เด็ก",
    "exampleJa": "彼は子供の頃からの私の親友です。"
  },
  {
    "id": 1235,
    "word": "แพ้",
    "meaning": "負ける、アレルギーがある",
    "pronunciation": "pháe",
    "frequency": "7回中1回",
    "exampleTh": "ทีมของเราแพ้ในการแข่งขันเมื่อวานนี้",
    "exampleJa": "私たちのチームは昨日の試合で負けました。"
  },
  {
    "id": 1236,
    "word": "แพ้ยา",
    "meaning": "薬物アレルギー",
    "pronunciation": "pháe yaa",
    "frequency": "7回中1回",
    "exampleTh": "คุณมีอาการแพ้ยาอะไรบ้างไหมครับ",
    "exampleJa": "何か薬のアレルギーはありますか？"
  },
  {
    "id": 1237,
    "word": "ฟรี",
    "meaning": "無料の",
    "pronunciation": "frii",
    "frequency": "7回中1回",
    "exampleTh": "เด็กอายุต���ำกว่าห้าขวบเข้าชมฟรี",
    "exampleJa": "5歳未満の子供は入場無料です。"
  },
  {
    "id": 1238,
    "word": "ฟัน",
    "meaning": "歯",
    "pronunciation": "fan",
    "frequency": "7回中1回",
    "exampleTh": "เราควรแปรงฟันอย่างน้อยวันละสองครั้ง",
    "exampleJa": "私たちは少なくとも1日に2回は歯を磨くべきです。"
  },
  {
    "id": 1239,
    "word": "ฟันผุ",
    "meaning": "虫歯",
    "pronunciation": "fan phù",
    "frequency": "7回中1回",
    "exampleTh": "ลูกสาวของฉันมีฟันผุหลายซี่แล้ว",
    "exampleJa": "私の娘はすでに虫歯が何本かあります。"
  },
  {
    "id": 1240,
    "word": "ฟ้า",
    "meaning": "空、青色",
    "pronunciation": "fáa",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ท้องฟ้าแจ่มใสไม่มีเมฆเลย",
    "exampleJa": "今日は空が澄み渡っていて、雲が全くありません。"
  },
  {
    "id": 1241,
    "word": "ฟิตเนส",
    "meaning": "フィットネス、ジム",
    "pronunciation": "fít-nét",
    "frequency": "7回中1回",
    "exampleTh": "ฉันไปออกกำลังกายที่ฟิตเนสทุกเย็น",
    "exampleJa": "私���毎晩フィットネスジムに運動しに行きます。"
  },
  {
    "id": 1242,
    "word": "ฟิตเนสเซ็นเตอร์",
    "meaning": "フィットネスセンター",
    "pronunciation": "fít-nét sen-tôoe",
    "frequency": "7回中1回",
    "exampleTh": "โรงแรมนี้มีฟิตเนสเซ็นเตอร์ที่ทันสมัย",
    "exampleJa": "このホテルには最新のフィットネスセンターがあります。"
  },
  {
    "id": 1243,
    "word": "ฟุตบอล",
    "meaning": "サッカー",
    "pronunciation": "fút-baawn",
    "frequency": "7回中1回",
    "exampleTh": "พวกเขาชอบเล่นฟุตบอลในเวลาว่าง",
    "exampleJa": "彼らは暇な時にサッカーをするのが好きです。"
  },
  {
    "id": 1244,
    "word": "ฟุ่มเฟือย",
    "meaning": "贅沢な、浪費する",
    "pronunciation": "fûm-fêuuay",
    "frequency": "7回中1回",
    "exampleTh": "การซื้อของฟุ่มเฟือยทำให้ไม่มีเงินเก็บ",
    "exampleJa": "贅沢品を買うと貯金ができなくなります。"
  },
  {
    "id": 1245,
    "word": "ไฟไหม้",
    "meaning": "火事、火災",
    "pronunciation": "fai mâi",
    "frequency": "7回中1回",
    "exampleTh": "เกิดเหตุไฟไหม้ที่อาคารเก่ากลางเมือง",
    "exampleJa": "街の中心部にある古いビルで火災が発生しました。"
  },
  {
    "id": 1246,
    "word": "ภัย",
    "meaning": "災害、危険",
    "pronunciation": "phai",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องเตรียมพร้อมรับมือกับภัยธรรมชาติ",
    "exampleJa": "私たちは自然災害に備える必要があります。"
  },
  {
    "id": 1247,
    "word": "ภาค",
    "meaning": "地方、地域、部",
    "pronunciation": "phâak",
    "frequency": "7回中1回",
    "exampleTh": "ประเทศไทยแบ่งออกเป็นหลายภาค",
    "exampleJa": "タイはいくつかの地方に分かれています。"
  },
  {
    "id": 1248,
    "word": "ภาคเหนือ",
    "meaning": "北部、北地方",
    "pronunciation": "phâak něuua",
    "frequency": "7回中1回",
    "exampleTh": "เชียงใหม่อยู่ทางภาคเหนือของประเทศไทย",
    "exampleJa": "チェンマイはタイの北部にあります。"
  },
  {
    "id": 1249,
    "word": "ภาพยนตร์",
    "meaning": "映画",
    "pronunciation": "phâap-phá-yon",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบดูภาพยนตร์แนววิทยาศาสตร์มาก",
    "exampleJa": "私はSF映画を見るのがとても好きです。"
  },
  {
    "id": 1250,
    "word": "ภาย",
    "meaning": "〜内、〜側",
    "pronunciation": "phaai",
    "frequency": "7回中1回",
    "exampleTh": "สินค้าจะส่งถึงมือท่านภายในสามวัน",
    "exampleJa": "商品は3日以内にお手元に届きます。"
  },
  {
    "id": 1251,
    "word": "ภาษาอังกฤษ",
    "meaning": "英語",
    "pronunciation": "phaa-sǎa-aŋ-grìt",
    "frequency": "7回中1回",
    "exampleTh": "ฉันกำลังเรียนภาษาอังกฤษอยู่",
    "exampleJa": "私は今英語を勉強しています。"
  },
  {
    "id": 1252,
    "word": "ภาษี",
    "meaning": "税金",
    "pronunciation": "phaa-sǐi",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องจ่ายภาษีทุกปี",
    "exampleJa": "私たちは毎年税金を払わなければなりません。"
  },
  {
    "id": 1253,
    "word": "ภู",
    "meaning": "山",
    "pronunciation": "phuu",
    "frequency": "7回中1回",
    "exampleTh": "ภูทับเบิกเป็นสถานที่ท่องเที่ยวที่สวยงาม",
    "exampleJa": "プータップブアックは美しい観光地です。"
  },
  {
    "id": 1254,
    "word": "ภูเก็ต",
    "meaning": "プーケット",
    "pronunciation": "phuu-gèt",
    "frequency": "7回中1回",
    "exampleTh": "ฉันอยากไปเที่ยวทะเลที่ภูเก็ต",
    "exampleJa": "私はプーケットの海に旅行に行きたいです。"
  },
  {
    "id": 1255,
    "word": "ภูเขา",
    "meaning": "山",
    "pronunciation": "phuu-khǎo",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราชอบไปปีนเขาในวันหยุด",
    "exampleJa": "私たちは休日に登山に行くのが好きです。"
  },
  {
    "id": 1256,
    "word": "เภสัชกร",
    "meaning": "薬剤師",
    "pronunciation": "phee-sàt-chá-gɔɔn",
    "frequency": "7回中1回",
    "exampleTh": "เภสัชกรแนะนำวิธีทานยาให้ฉัน",
    "exampleJa": "薬剤師が私に薬の飲み方を説明してくれました。"
  },
  {
    "id": 1257,
    "word": "มอเตอร์ไซค์",
    "meaning": "バイク",
    "pronunciation": "mɔɔ-tee-sai",
    "frequency": "7回中1回",
    "exampleTh": "เขาขี่มอเตอร์ไซค์ไปทำงานทุกวัน",
    "exampleJa": "彼は毎日バイクで仕事に行���ます。"
  },
  {
    "id": 1258,
    "word": "มอบ",
    "meaning": "授与する",
    "pronunciation": "mɔ̂ɔp",
    "frequency": "7回中1回",
    "exampleTh": "ผู้อำนวยการมอบรางวัลให้แก่นักเรียน",
    "exampleJa": "校長先生が生徒に賞を授与しました。"
  },
  {
    "id": 1259,
    "word": "มอบหมาย",
    "meaning": "任せる",
    "pronunciation": "mɔ̂ɔp-mǎai",
    "frequency": "7回中1回",
    "exampleTh": "หัวหน้ามอบหมายงานใหม่ให้ฉันทำ",
    "exampleJa": "上司が私に新しい仕事を任せました。"
  },
  {
    "id": 1260,
    "word": "มะรืน",
    "meaning": "明後日",
    "pronunciation": "má-ruen",
    "frequency": "7回中1回",
    "exampleTh": "เราจะเจอกันวันมะรืนนี้",
    "exampleJa": "私たちは明後日会いましょう。"
  },
  {
    "id": 1261,
    "word": "มะรืนนี้",
    "meaning": "明後日",
    "pronunciation": "má-ruen-níi",
    "frequency": "7回中1回",
    "exampleTh": "โรงเรียนจะเปิดเทอมวันมะรืนนี้",
    "exampleJa": "学校は明後日から新学期が始まります。"
  },
  {
    "id": 1262,
    "word": "มัก",
    "meaning": "〜しがちである",
    "pronunciation": "mák",
    "frequency": "7回中1回",
    "exampleTh": "เขามักจะมาสายเสมอในตอนเช้า",
    "exampleJa": "彼は朝いつも遅刻しがちです。"
  },
  {
    "id": 1263,
    "word": "มัคคุเทศก์",
    "meaning": "ガイド",
    "pronunciation": "mák-khù-thêet",
    "frequency": "7回中1回",
    "exampleTh": "มัคคุเทศก์อธิบายประวัติศาสตร์ของวัด",
    "exampleJa": "ガイドが寺院の歴史を説明してくれました。"
  },
  {
    "id": 1264,
    "word": "มังคุด",
    "meaning": "マンゴスチン",
    "pronunciation": "maŋ-khút",
    "frequency": "7回中1回",
    "exampleTh": "มังคุดเป็นราชินีแห่งผลไม้ไทย",
    "exampleJa": "マンゴスチンはタイの果物の女王です。"
  },
  {
    "id": 1265,
    "word": "มัดจำ",
    "meaning": "手付金",
    "pronunciation": "mát-cam",
    "frequency": "7回中1回",
    "exampleTh": "คุณต้องจ่ายค่ามัดจำห้องพักก่อน",
    "exampleJa": "最初に部屋のデポジットを支払う必要があります。"
  },
  {
    "id": 1266,
    "word": "มัธยม",
    "meaning": "中等教育",
    "pronunciation": "mát-thá-yom",
    "frequency": "7回中1回",
    "exampleTh": "น้องชายของฉันเรียนอ���ู่ชั้นมัธยม",
    "exampleJa": "私の弟は中等学校に通っています。"
  },
  {
    "id": 1267,
    "word": "มัธยมศึกษา",
    "meaning": "中等教育",
    "pronunciation": "mát-thá-yom-sʉ̀k-sǎa",
    "frequency": "7回中1回",
    "exampleTh": "โรงเรียนมัธยมศึกษาแห่งนี้มีชื่อเสียงมาก",
    "exampleJa": "この中等教育学校はとても有名です。"
  },
  {
    "id": 1268,
    "word": "มากเกินไป",
    "meaning": "多すぎる",
    "pronunciation": "mâak-gəən-pai",
    "frequency": "7回中1回",
    "exampleTh": "อาหารจานนี้เผ็ดมากเกินไปสำหรับฉัน",
    "exampleJa": "この料理は私には辛すぎます。"
  },
  {
    "id": 1269,
    "word": "มากเท่าไร",
    "meaning": "どのくらい",
    "pronunciation": "mâak-thâo-rai",
    "frequency": "7回中1回",
    "exampleTh": "คุณรักฉันมากเท่าไรกันแน่",
    "exampleJa": "あなたは一体どれくらい私を愛していますか？"
  },
  {
    "id": 1270,
    "word": "มาเลเซีย",
    "meaning": "マレーシア",
    "pronunciation": "maa-lee-sia",
    "frequency": "7回中1回",
    "exampleTh": "ประเทศมาเลเซียอยู่ทางใต้��องไทย",
    "exampleJa": "マレーシアはタイの南にあります。"
  },
  {
    "id": 1271,
    "word": "มาหา",
    "meaning": "会いに来る",
    "pronunciation": "maa-hǎa",
    "frequency": "7回中1回",
    "exampleTh": "เพื่อนมาหาฉันที่บ้านเมื่อวานนี้",
    "exampleJa": "昨日、友達が家に私を訪ねてきました。"
  },
  {
    "id": 1272,
    "word": "มิตร",
    "meaning": "友、友人",
    "pronunciation": "mit",
    "frequency": "7回中1回",
    "exampleTh": "เราควรผูกมิตรกับเพื่อนบ้านใหม่",
    "exampleJa": "私たちは新しい隣人と友好関係を築くべきです。"
  },
  {
    "id": 1273,
    "word": "มีธุระ",
    "meaning": "用事がある",
    "pronunciation": "mii-thú-rá",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ฉันมีธุระด่วนต้องไปทำ",
    "exampleJa": "今日は急な用事があって行かなければなりません。"
  },
  {
    "id": 1274,
    "word": "มีนาคม",
    "meaning": "3月",
    "pronunciation": "mii-naa-khom",
    "frequency": "7回中1回",
    "exampleTh": "ฉันจะไปเที่ยวญี่ปุ่นในเดือนมีนาคม",
    "exampleJa": "私は3月に日本へ旅行に行きます。"
  },
  {
    "id": 1275,
    "word": "มีประโยชน์",
    "meaning": "役に立つ",
    "pronunciation": "mii-pra-yòot",
    "frequency": "7回中1回",
    "exampleTh": "ผักและผลไม้มีประโยชน์ต่อร่างกาย",
    "exampleJa": "野菜と果物は体に良い（有益）です。"
  },
  {
    "id": 1276,
    "word": "มีส่วน",
    "meaning": "関与する",
    "pronunciation": "mii-sùan",
    "frequency": "7回中1回",
    "exampleTh": "ทุกคนมีส่วนร่วมในการทำงานนี้",
    "exampleJa": "全員がこの仕事に関与しています。"
  },
  {
    "id": 1277,
    "word": "มืด",
    "meaning": "暗い",
    "pronunciation": "mʉ̂ut",
    "frequency": "7回中1回",
    "exampleTh": "ตอนนี้ฟ้าเริ่มมืดแล้ว รีบกลับบ้านกันเถอะ",
    "exampleJa": "もう空が暗くなってきたので、早く家に帰りましょう。"
  },
  {
    "id": 1278,
    "word": "มือถือ",
    "meaning": "携帯電話",
    "pronunciation": "mʉʉ-thʉ̌ʉ",
    "frequency": "7回中1回",
    "exampleTh": "ฉันลืมโทรศัพท์มือถือไว้ที่ทำงาน",
    "exampleJa": "私は職場に携帯電話を忘れてしまいました。"
  },
  {
    "id": 1279,
    "word": "มือสอง",
    "meaning": "中古の",
    "pronunciation": "mʉʉ-sɔ̌ɔng",
    "frequency": "7回中1回",
    "exampleTh": "เขาซื้อรถยนต์มือสองสภาพดีมาคันหนึ่ง",
    "exampleJa": "彼は状態の良い中古車を1台買いました。"
  },
  {
    "id": 1280,
    "word": "เม็ด",
    "meaning": "粒、錠剤",
    "pronunciation": "mét",
    "frequency": "7回中1回",
    "exampleTh": "คุณต้องกินยานี้ครั้งละสองเม็ด",
    "exampleJa": "この薬を1回に2錠飲む必要があります。"
  },
  {
    "id": 1281,
    "word": "เมเปิ้ล",
    "meaning": "メープル",
    "pronunciation": "mee-pə̂n",
    "frequency": "7回中1回",
    "exampleTh": "ใบเมเปิ้ลเปลี่ยนเป็นสีแดงในฤดูใบไม้ร่วง",
    "exampleJa": "秋になるとメー��ルの葉が赤く変わります。"
  },
  {
    "id": 1282,
    "word": "เมล์",
    "meaning": "バス",
    "pronunciation": "mee",
    "frequency": "7回中1回",
    "exampleTh": "ฉันนั่งรถเมล์ไปโรงเรียนทุกวัน",
    "exampleJa": "私は毎日バスに乗って学校に行きます。"
  },
  {
    "id": 1283,
    "word": "เมา",
    "meaning": "酔う",
    "pronunciation": "mao",
    "frequency": "7回中1回",
    "exampleTh": "เขาเมาเหล้าจนเดินไม่ไหว",
    "exampleJa": "彼は酒に酔って歩けなくなりました。"
  },
  {
    "id": 1284,
    "word": "เมื่อคราวที่แล้ว",
    "meaning": "前回",
    "pronunciation": "mʉ̂a-khraao-thîi-lɛ́ɛw",
    "frequency": "7回中1回",
    "exampleTh": "เมื่อคราวที่แล้วเราไปกินอาหารญี่ปุ่นกัน",
    "exampleJa": "前回、私たちは日本料理を食べに行きました。"
  },
  {
    "id": 1285,
    "word": "เมื่อคืนนี้",
    "meaning": "昨夜",
    "pronunciation": "mʉ̂a-khʉʉn-níi",
    "frequency": "7回中1回",
    "exampleTh": "เมื่อคืนนี้นอนหลับสบายดีไหม",
    "exampleJa": "昨夜はよく眠れましたか？"
  },
  {
    "id": 1286,
    "word": "เมืองหลว���",
    "meaning": "首都",
    "pronunciation": "mʉʉang-lǔang",
    "frequency": "7回中1回",
    "exampleTh": "กรุงเทพฯ เป็นเมืองหลวงของประเทศไทย",
    "exampleJa": "バンコクはタイの首都です。"
  },
  {
    "id": 1287,
    "word": "เมื่อวาน",
    "meaning": "昨日",
    "pronunciation": "mʉ̂a-waan",
    "frequency": "7回中1回",
    "exampleTh": "เมื่อวานนี้ฝนตกหนักมากทั้งวัน",
    "exampleJa": "昨日は一日中大雨が降りました。"
  },
  {
    "id": 1288,
    "word": "เมื่อวานซืน",
    "meaning": "一昨日",
    "pronunciation": "mʉ̂a-waan-sʉʉn",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเจอเขาที่ห้างสรรพสินค้าเมื่อวานซืน",
    "exampleJa": "一昨日、デパートで彼に会いました。"
  },
  {
    "id": 1289,
    "word": "แม้",
    "meaning": "たとえ〜でも",
    "pronunciation": "mɛ́ɛ",
    "frequency": "7回中1回",
    "exampleTh": "แม้จะเหนื่อยแต่เขาก็ยังยิ้มได้",
    "exampleJa": "たとえ疲れていても、彼はまだ笑顔でいられます。"
  },
  {
    "id": 1290,
    "word": "แม้กระทั่ง",
    "meaning": "〜でさえ",
    "pronunciation": "mɛ́ɛ-krà-thâŋ",
    "frequency": "7回中1回",
    "exampleTh": "แม้กระทั่งเด็กก็เข้าใจเรื่องนี้ได้ง่าย",
    "exampleJa": "子供でさえこのことを簡単に理解できます。"
  },
  {
    "id": 1291,
    "word": "แม่ค้า",
    "meaning": "女商人、売り子",
    "pronunciation": "mâe-kháa",
    "frequency": "7回中1回",
    "exampleTh": "แม่ค้าคนนี้ขายผลไม้สดและอร่อยมาก",
    "exampleJa": "この女性の商人は新鮮でとても美味しい果物を売っています。"
  },
  {
    "id": 1292,
    "word": "แม่น้ำ",
    "meaning": "川",
    "pronunciation": "mâe-náam",
    "frequency": "7回中1回",
    "exampleTh": "แม่น้ำเจ้าพระยาไหลผ่านกรุงเทพมหานคร",
    "exampleJa": "チャオプラヤー川はバンコクを流れています。"
  },
  {
    "id": 1293,
    "word": "แมลง",
    "meaning": "虫、昆虫",
    "pronunciation": "ma-laeng",
    "frequency": "7回中1回",
    "exampleTh": "มีแมลงหลายชนิดบินอยู่ในสวนหลังบ้าน",
    "exampleJa": "裏庭にはたくさんの種類の虫が飛んでいます。"
  },
  {
    "id": 1294,
    "word": "แมว",
    "meaning": "猫",
    "pronunciation": "maeo",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเลี้ยงแมวสีขาวตัวหนึ่งที่บ้าน",
    "exampleJa": "私は家で白い猫を一匹飼っています。"
  },
  {
    "id": 1295,
    "word": "ไม่เคย",
    "meaning": "〜したことがない",
    "pronunciation": "mâi-khoei",
    "frequency": "7回中1回",
    "exampleTh": "ฉันไม่เคยไปเที่ยวประเทศญี่ปุ่นเลย",
    "exampleJa": "私は一度も日本へ旅行に行ったことがありません。"
  },
  {
    "id": 1296,
    "word": "ไม่ใช่หรือ",
    "meaning": "〜ではないですか",
    "pronunciation": "mâi-châi-rǔe",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้เป็นวันหยุดของคุณไม่ใช่หรือ",
    "exampleJa": "今日はあなたの休みではないのですか？"
  },
  {
    "id": 1297,
    "word": "ไม่ว่าจะเป็น",
    "meaning": "〜であろうと",
    "pronunciation": "mâi-wâa-c��-pen",
    "frequency": "7回中1回",
    "exampleTh": "ไม่ว่าจะเป็นใครก็ต้องปฏิบัติตามกฎ",
    "exampleJa": "誰であろうと規則に従わなければなりません。"
  },
  {
    "id": 1298,
    "word": "ไม่สบาย",
    "meaning": "体調が悪い",
    "pronunciation": "mâi-sa-bāai",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ฉันไม่สบายจึงขอหยุดงานหนึ่งวัน",
    "exampleJa": "今日は体調が悪いので、仕事を一日休みます。"
  },
  {
    "id": 1299,
    "word": "ยก",
    "meaning": "持ち上げる、挙げる",
    "pronunciation": "yók",
    "frequency": "7回中1回",
    "exampleTh": "กรุณายกมือขึ้นถ้าคุณมีคำถาม",
    "exampleJa": "質問がある場合は手を挙げてください。"
  },
  {
    "id": 1300,
    "word": "ยกตัวอย่าง",
    "meaning": "例を挙げる",
    "pronunciation": "yók-tua-yàang",
    "frequency": "7回中1回",
    "exampleTh": "ครูยกตัวอย่างเพื่อให้เข้าใจง่ายขึ้น",
    "exampleJa": "先生は分かりやすくするために例を挙げました。"
  },
  {
    "id": 1301,
    "word": "ย้อน",
    "meaning": "遡る、逆行する",
    "pronunciation": "yón",
    "frequency": "7回中1回",
    "exampleTh": "เขาขับรถย้อนศรซึ่งอันตรายมาก",
    "exampleJa": "彼は逆走して運転しており、とても危険です。"
  },
  {
    "id": 1302,
    "word": "ย้อนกลับ",
    "meaning": "引き返す、戻る",
    "pronunciation": "yón-klàp",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องย้อนกลับไปทางเดิมที่ผ่านมา",
    "exampleJa": "私たちはさっき通った元の道を引き返さなければなりません。"
  },
  {
    "id": 1303,
    "word": "ยังคง",
    "meaning": "相変わらず、依然として",
    "pronunciation": "yang-khong",
    "frequency": "7回中1回",
    "exampleTh": "แม้จะดึกแล้วแต่เขาก็ยังคงทำงานอยู่",
    "exampleJa": "夜遅いですが、彼は相変わらず仕事をしています。"
  },
  {
    "id": 1304,
    "word": "ยังไง",
    "meaning": "どのように、どうやって",
    "pronunciation": "yang-ngai",
    "frequency": "7回中1回",
    "exampleTh": "คุณเดินทางไปทำงานยังไงทุกวัน",
    "exampleJa": "毎日どのようにして通勤していますか？"
  },
  {
    "id": 1305,
    "word": "ยังไม่",
    "meaning": "まだ〜ない",
    "pronunciation": "yang-mâi",
    "frequency": "7回中1回",
    "exampleTh": "ฉันยังไม่ได้กินข้าวเช้าเลยจนถึงตอนนี้",
    "exampleJa": "今になっても私はまだ朝食を食べていません。"
  },
  {
    "id": 1306,
    "word": "ยากจน",
    "meaning": "貧しい、貧困な",
    "pronunciation": "yâak-con",
    "frequency": "7回中1回",
    "exampleTh": "ครอบครัวของเขาเคยยากจนมาก่อน",
    "exampleJa": "彼の家族は以前、とても貧しかったです。"
  },
  {
    "id": 1307,
    "word": "ยาฆ่าแมลง",
    "meaning": "殺虫剤、農薬",
    "pronunciation": "yaa-khâa-ma-laeng",
    "frequency": "7回中1回",
    "exampleTh": "เกษตรกรใช้ยาฆ่าแมลงเพื่อปกป้องพืชผัก",
    "exampleJa": "農家は野菜を守るために農薬を使用します。"
  },
  {
    "id": 1308,
    "word": "ยาน",
    "meaning": "乗り物、宇宙船",
    "pronunciation": "yaan",
    "frequency": "7回中1回",
    "exampleTh": "ยานอวกาศกำลังเดินทางไปดวงจันทร์",
    "exampleJa": "宇宙船が月に向かって進んでいます。"
  },
  {
    "id": 1309,
    "word": "ยาน้ำ",
    "meaning": "水薬、シロップ薬",
    "pronunciation": "yaa-náam",
    "frequency": "7回中1回",
    "exampleTh": "เด็กๆ มักจะกินยาน้ำได้ง่ายกว่ายาเม็ด",
    "exampleJa": "子供たちは大抵、錠剤よりも水薬の方が飲みやすいです。"
  },
  {
    "id": 1310,
    "word": "ยาม",
    "meaning": "警備員、時間",
    "pronunciation": "yaam",
    "frequency": "7回中1回",
    "exampleTh": "ยามกำลังตรวจความปลอดภัยรอบตึก",
    "exampleJa": "警備員がビルの周りの安全を確認しています。"
  },
  {
    "id": 1311,
    "word": "ยารักษาแผล",
    "meaning": "傷薬",
    "pronunciation": "yaa-rák-sǎa-phǎe",
    "frequency": "7回中1回",
    "exampleTh": "ทายารักษาแผลที่แขน",
    "exampleJa": "腕に傷薬を塗る。"
  },
  {
    "id": 1312,
    "word": "ยิ่ง",
    "meaning": "ますます、〜すればするほど",
    "pronunciation": "yîng",
    "frequency": "7回中1回",
    "exampleTh": "ยิ่งเรียนยิ่งสนุก",
    "exampleJa": "学べば学ぶほど楽しい。"
  },
  {
    "id": 1313,
    "word": "ยิ่งกว่า",
    "meaning": "〜以上に、さらに",
    "pronunciation": "yîng-kwàa",
    "frequency": "7回中1回",
    "exampleTh": "เขารักเธอยิ่งกว่าสิ่งใด",
    "exampleJa": "彼は何よ���も彼女を愛している。"
  },
  {
    "id": 1314,
    "word": "ยินยอม",
    "meaning": "同意する、承諾する",
    "pronunciation": "yin-yom",
    "frequency": "7回中1回",
    "exampleTh": "พ่อแม่ยินยอมให้เขาแต่งงาน",
    "exampleJa": "両親は彼の結婚を承諾した。"
  },
  {
    "id": 1315,
    "word": "ยิ้ม",
    "meaning": "微笑む、笑う",
    "pronunciation": "yím",
    "frequency": "7回中1回",
    "exampleTh": "เธอยิ้มให้ฉันอย่างเป็นกันเอง",
    "exampleJa": "彼女は私に親しげに微笑んだ。"
  },
  {
    "id": 1316,
    "word": "ยิ้มแย้ม",
    "meaning": "にこにこする、笑顔の",
    "pronunciation": "yím-yáem",
    "frequency": "7回中1回",
    "exampleTh": "เธอเป็นคนยิ้มแย้มแจ่มใสเสมอ",
    "exampleJa": "彼女はいつもにこにこして明るい。"
  },
  {
    "id": 1317,
    "word": "ยืน",
    "meaning": "立つ",
    "pronunciation": "yeun",
    "frequency": "7回中1回",
    "exampleTh": "เขายืนรอรถเมล์อยู่ริมถนน",
    "exampleJa": "彼は道端でバスを立って待っている。"
  },
  {
    "id": 1318,
    "word": "ยืนยัน",
    "meaning": "確認する、断言する",
    "pronunciation": "yeun-yan",
    "frequency": "7回中1回",
    "exampleTh": "กรุณายืนยันการจองโรงแรมด้วย",
    "exampleJa": "ホテルの予約を確認してください。"
  },
  {
    "id": 1319,
    "word": "ยุค",
    "meaning": "時代",
    "pronunciation": "yúk",
    "frequency": "7回中1回",
    "exampleTh": "นี่คือเทคโนโลยีในยุคปัจจุบัน",
    "exampleJa": "これが現代のテクノロジーです。"
  },
  {
    "id": 1320,
    "word": "ยุ่งยาก",
    "meaning": "面倒な、複雑な",
    "pronunciation": "yûng-yâak",
    "frequency": "7回中1回",
    "exampleTh": "ขั้นตอนการขอวีซ่านี้ยุ่งยากมาก",
    "exampleJa": "このビザ申請の手続きはとても面倒だ。"
  },
  {
    "id": 1321,
    "word": "เย็นนี้",
    "meaning": "今晩、今日の夕方",
    "pronunciation": "yen-níi",
    "frequency": "7回中1回",
    "exampleTh": "เย็นนี้เราจะไปกินอาหารไทยกัน",
    "exampleJa": "今日の夕方、私たちはタイ料理を食べに行きます。"
  },
  {
    "id": 1322,
    "word": "เยี่ยม",
    "meaning": "訪れる、見舞う",
    "pronunciation": "yîam",
    "frequency": "7回中1回",
    "exampleTh": "ฉันไปเยี่ยมคุณยายที่โรงพยา���าล",
    "exampleJa": "私は病院におばあちゃんを見舞いに行った。"
  },
  {
    "id": 1323,
    "word": "แยก",
    "meaning": "分ける、交差点",
    "pronunciation": "yâek",
    "frequency": "7回中1回",
    "exampleTh": "เลี้ยวซ้ายที่แยกข้างหน้า",
    "exampleJa": "前方の交差点を左に曲がってください。"
  },
  {
    "id": 1324,
    "word": "แย่ง",
    "meaning": "奪う、争う",
    "pronunciation": "yâeng",
    "frequency": "7回中1回",
    "exampleTh": "สุนัขสองตัวแย่งกระดูกกัน",
    "exampleJa": "2匹の犬が骨を奪い合っている。"
  },
  {
    "id": 1325,
    "word": "แย่งกัน",
    "meaning": "奪い合う、競い合う",
    "pronunciation": "yâeng-kan",
    "frequency": "7回中1回",
    "exampleTh": "เด็กๆ แย่งกันซื้อของเล่นใหม่",
    "exampleJa": "子供たちが新しいおもちゃを競って買っている。"
  },
  {
    "id": 1326,
    "word": "แยะ",
    "meaning": "たくさんの、多くの",
    "pronunciation": "yáe",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้มีงานต้องทำเยอะแยะเลย",
    "exampleJa": "今日はやるべき仕事がたくさんある。"
  },
  {
    "id": 1327,
    "word": "โยคะ",
    "meaning": "ヨガ",
    "pronunciation": "yoo-khá",
    "frequency": "7回中1回",
    "exampleTh": "เธอเล่นโยคะทุกเช้าเพื่อสุขภาพ",
    "exampleJa": "彼女は健康のために毎朝ヨガをしている。"
  },
  {
    "id": 1328,
    "word": "รณรงค์",
    "meaning": "キャンペーンを行う、運動する",
    "pronunciation": "ron-na-rong",
    "frequency": "7回中1回",
    "exampleTh": "รัฐบาลรณรงค์ให้ประหยัดน้ำ",
    "exampleJa": "政府は節水を呼びかけるキャンペーンを行っている。"
  },
  {
    "id": 1329,
    "word": "รถแท็กซี่",
    "meaning": "タクシー",
    "pronunciation": "rót-tháek-sîi",
    "frequency": "7回中1回",
    "exampleTh": "เราเรียกรถแท็กซี่ไปสนามบิน",
    "exampleJa": "私たちは空港へ行くためにタクシーを呼んだ。"
  },
  {
    "id": 1330,
    "word": "รถไฟ",
    "meaning": "電車、列車",
    "pronunciation": "rót-fai",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบเดินทางด้วยรถไฟ",
    "exampleJa": "私は電車で旅行するのが好きだ。"
  },
  {
    "id": 1331,
    "word": "รถไฟฟ้าใต้ดิน",
    "meaning": "地下鉄",
    "pronunciation": "rót-fai-fáa-tâai-din",
    "frequency": "7回中1回",
    "exampleTh": "ฉันขึ้นรถไฟฟ้าใต้ดินไปทำงานทุกวัน",
    "exampleJa": "私は毎日地下鉄に乗って仕事に行きます。"
  },
  {
    "id": 1332,
    "word": "รถยนต์",
    "meaning": "自動車",
    "pronunciation": "rót-yon",
    "frequency": "7回中1回",
    "exampleTh": "พ่อซื้อรถยนต์คันใหม่เมื่อเดือนที่แล้ว",
    "exampleJa": "父は先月、新しい車を買いました。"
  },
  {
    "id": 1333,
    "word": "รบกวน",
    "meaning": "邪魔する",
    "pronunciation": "róp-kuan",
    "frequency": "7回中1回",
    "exampleTh": "ขอรบกวนเวลาของคุณสักครู่ได้ไหมครับ",
    "exampleJa": "少しお時間を取らせてもよろしいでしょうか。"
  },
  {
    "id": 1334,
    "word": "ร่ม",
    "meaning": "傘",
    "pronunciation": "rôm",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ฝนตก อย่าลืมพกร่มไปด้วยนะ",
    "exampleJa": "今日は雨が降るので、傘を持っていくのを忘れないでね。"
  },
  {
    "id": 1335,
    "word": "ร่วง",
    "meaning": "落ちる",
    "pronunciation": "rûang",
    "frequency": "7回中1回",
    "exampleTh": "ใบไม้ร่วงจากต้นไม้ลงบนพื้นดิน",
    "exampleJa": "木の葉が木から地面に落ちます。"
  },
  {
    "id": 1336,
    "word": "รวดเร็ว",
    "meaning": "迅速な",
    "pronunciation": "rûat-reo",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำงานได้อย่างรวดเร็วและมีประสิทธิภาพ",
    "exampleJa": "彼は仕事を迅速かつ効率的に行います。"
  },
  {
    "id": 1337,
    "word": "รวมตัว",
    "meaning": "集まる",
    "pronunciation": "ruam-tua",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราจะรวมตัวกันที��หน้าสถานีรถไฟ",
    "exampleJa": "私たちは駅の前に集まります。"
  },
  {
    "id": 1338,
    "word": "รวมทั้ง",
    "meaning": "〜を含めて",
    "pronunciation": "ruam-tháng",
    "frequency": "7回中1回",
    "exampleTh": "ค่าห้องนี้รวมทั้งอาหารเช้าและเย็นแล้ว",
    "exampleJa": "この部屋の料金には朝食と夕食が含まれています。"
  },
  {
    "id": 1339,
    "word": "ร่วมมือ",
    "meaning": "協力する",
    "pronunciation": "rûam-mue",
    "frequency": "7回中1回",
    "exampleTh": "ทุกคนต้องร่วมมือกันเพื่อทำงานนี้ให้สำเร็จ",
    "exampleJa": "この仕事を成功させるために、全員が協力しなければなりません。"
  },
  {
    "id": 1340,
    "word": "รส",
    "meaning": "味",
    "pronunciation": "rót",
    "frequency": "7回中1回",
    "exampleTh": "ส้มตำจานนี้มีรสเผ็ดและเปรี้ยวมาก",
    "exampleJa": "このソムタムはとても辛くて酸っぱい味がします。"
  },
  {
    "id": 1341,
    "word": "รสชาติ",
    "meaning": "味",
    "pronunciation": "rót-châat",
    "frequency": "7回中1回",
    "exampleTh": "อาหารไทยร้านนี้มีร��ชาติอร่อยมาก",
    "exampleJa": "この店のタイ料理はとても美味しい味がします。"
  },
  {
    "id": 1342,
    "word": "ร้อง",
    "meaning": "叫ぶ",
    "pronunciation": "róong",
    "frequency": "7回中1回",
    "exampleTh": "เขาร้องเสียงดังด้วยความตกใจ",
    "exampleJa": "彼は驚いて大声を上げました。"
  },
  {
    "id": 1343,
    "word": "ร้องเพลง",
    "meaning": "歌う",
    "pronunciation": "róong-pheeng",
    "frequency": "7回中1回",
    "exampleTh": "น้องสาวของฉันชอบร้องเพลงในห้องน้ำ",
    "exampleJa": "私の妹はお風呂で歌を歌うのが好きです。"
  },
  {
    "id": 1344,
    "word": "รอบ",
    "meaning": "周囲",
    "pronunciation": "rôop",
    "frequency": "7回中1回",
    "exampleTh": "เขาวิ่งรอบสวนสาธารณะทุกเช้าวันอาทิตย์",
    "exampleJa": "彼は毎週日曜日の朝、公園の周りを走ります。"
  },
  {
    "id": 1345,
    "word": "รอบคอบ",
    "meaning": "慎重な",
    "pronunciation": "rôop-khôop",
    "frequency": "7回中1回",
    "exampleTh": "คุณต้องคิดให้รอบคอบก่อนตัดสินใจ",
    "exampleJa": "決断する前に慎重に��えなければなりません。"
  },
  {
    "id": 1346,
    "word": "รอสักครู่",
    "meaning": "少々お待ちください",
    "pronunciation": "raaw-sàk-khrûu",
    "frequency": "7回中1回",
    "exampleTh": "กรุณารอสักครู่ เครื่องกำลังทำงานอยู่",
    "exampleJa": "少々お待ちください、機械が作動中です。"
  },
  {
    "id": 1347,
    "word": "ระดับ",
    "meaning": "レベル",
    "pronunciation": "ra-dàp",
    "frequency": "7回中1回",
    "exampleTh": "ระดับน้ำในแม่น้ำเพิ่มสูงขึ้นเรื่อยๆ",
    "exampleJa": "川の水位がどんどん上昇しています。"
  },
  {
    "id": 1348,
    "word": "ระเบียบ",
    "meaning": "規則",
    "pronunciation": "ra-bìap",
    "frequency": "7回中1回",
    "exampleTh": "นักเรียนต้องปฏิบัติตามระเบียบโรงเรียน",
    "exampleJa": "生徒は学校の規則に従わなければなりません。"
  },
  {
    "id": 1349,
    "word": "ระมัดระวัง",
    "meaning": "注意する",
    "pronunciation": "ra-mát-ra-wang",
    "frequency": "7回中1回",
    "exampleTh": "โปรดระมัดระวังขณะข้ามถนนที่มีรถพลุกพล่าน",
    "exampleJa": "車の通りが激しい道路を渡る時は注意してください。"
  },
  {
    "id": 1350,
    "word": "ระยะทาง",
    "meaning": "距離",
    "pronunciation": "ra-yá-thaang",
    "frequency": "7回中1回",
    "exampleTh": "ระยะทางจากบ้านไปโรงเรียนประมาณห้ากิโลเมตร",
    "exampleJa": "家から学校までの距離は約5キロメートルです。"
  },
  {
    "id": 1351,
    "word": "รับจ้าง",
    "meaning": "雇われる、請け負う",
    "pronunciation": "ráp-câang",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำงานรับจ้างทั่วไปในหมู่บ้าน",
    "exampleJa": "彼は村で何でも屋として雇われて働いている。"
  },
  {
    "id": 1352,
    "word": "รับทราบ",
    "meaning": "了解する、承知する",
    "pronunciation": "ráp-sâap",
    "frequency": "7回中1回",
    "exampleTh": "ผมรับทราบข้อตกลงนี้แล้วครับ",
    "exampleJa": "私はこの合意事項を了解しました。"
  },
  {
    "id": 1353,
    "word": "รับประกัน",
    "meaning": "保証する",
    "pronunciation": "ráp-pra-kan",
    "frequency": "7回中1回",
    "exampleTh": "สินค้านี้รับประกันคุณภาพหนึ่งปี",
    "exampleJa": "この商品は品質を1年間保証します。"
  },
  {
    "id": 1354,
    "word": "รับผิด",
    "meaning": "非を認める、責任を負う",
    "pronunciation": "ráp-phìt",
    "frequency": "7回中1回",
    "exampleTh": "เขาไม่ยอมรับผิดในสิ่งที่ทำลงไป",
    "exampleJa": "彼は自分のしたことの非を認めようとしない。"
  },
  {
    "id": 1355,
    "word": "รับรอง",
    "meaning": "保証する、証明する",
    "pronunciation": "ráp-raawng",
    "frequency": "7回中1回",
    "exampleTh": "ฉันรับรองว่าเขาเป็นคนดีจริงๆ",
    "exampleJa": "私は彼が本当に良い人だと保証します。"
  },
  {
    "id": 1356,
    "word": "รับสาย",
    "meaning": "電話に出る",
    "pronunciation": "ráp-sǎai",
    "frequency": "7回中1回",
    "exampleTh": "กรุณารอสักครู่ เขากำลังรับสายอยู่",
    "exampleJa": "少々お待ちください、彼は今電話に出ています。"
  },
  {
    "id": 1357,
    "word": "รางวัล",
    "meaning": "賞、賞品",
    "pronunciation": "raang-wan",
    "frequency": "7回中1回",
    "exampleTh": "เขาได้ร���บรางวัลชนะเลิศในการประกวด",
    "exampleJa": "彼はコンテストで最優秀賞を受賞した。"
  },
  {
    "id": 1358,
    "word": "ราชการ",
    "meaning": "公務、官庁",
    "pronunciation": "râat-cha-kaan",
    "frequency": "7回中1回",
    "exampleTh": "พ่อของฉันทำงานเป็นข้าราชการ",
    "exampleJa": "私の父は公務員として働いています。"
  },
  {
    "id": 1359,
    "word": "ร้านขายยา",
    "meaning": "薬局",
    "pronunciation": "ráan-khǎai-yaa",
    "frequency": "7回中1回",
    "exampleTh": "ฉันไปซื้อยาแก้ปวดที่ร้านขายยา",
    "exampleJa": "私は薬局に痛み止めを買いに行きました。"
  },
  {
    "id": 1360,
    "word": "ร้านค้า",
    "meaning": "店、商店",
    "pronunciation": "ráan-kháa",
    "frequency": "7回中1回",
    "exampleTh": "ร้านค้าแถวนี้ปิดบริการตอนค่ำ",
    "exampleJa": "この辺りの店は夜に閉まります。"
  },
  {
    "id": 1361,
    "word": "ร้านอาหาร",
    "meaning": "レストラン、飲食店",
    "pronunciation": "ráan-aa-hǎan",
    "frequency": "7回中1回",
    "exampleTh": "ร้านอาหารนี้ขายอาหารไทยอร่อย��าก",
    "exampleJa": "このレストランはタイ料理がとても美味しいです。"
  },
  {
    "id": 1362,
    "word": "รายงาน",
    "meaning": "報告、レポート",
    "pronunciation": "raai-ngaan",
    "frequency": "7回中1回",
    "exampleTh": "นักเรียนต้องส่งรายงานในวันพรุ่งนี้",
    "exampleJa": "生徒たちは明日レポートを提出しなければならない。"
  },
  {
    "id": 1363,
    "word": "รายได้",
    "meaning": "収入、所得",
    "pronunciation": "raai-dâai",
    "frequency": "7回中1回",
    "exampleTh": "ครอบครัวของเรามีรายได้ที่มั่นคง",
    "exampleJa": "私たちの家族は安定した収入があります。"
  },
  {
    "id": 1364,
    "word": "ร่าเริง",
    "meaning": "陽気な、朗らかな",
    "pronunciation": "râa-roeng",
    "frequency": "7回中1回",
    "exampleTh": "เด็กคนนั้นเป็นคนร่าเริงและยิ้มเก่ง",
    "exampleJa": "あの子は陽気でよく笑う子だ。"
  },
  {
    "id": 1365,
    "word": "ราวกับ",
    "meaning": "まるで〜のようだ",
    "pronunciation": "raao-kàp",
    "frequency": "7回中1回",
    "exampleTh": "เธอสวยงามราวกับนางฟ้าในนิยาย",
    "exampleJa": "彼女はまるで童話の妖精のように美しい。"
  },
  {
    "id": 1366,
    "word": "ร่ำรวย",
    "meaning": "裕福な、富んだ",
    "pronunciation": "râm-ruai",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำงานหนักจนกลายเป็นคนร่ำรวย",
    "exampleJa": "彼は一生懸命働いて裕福な人になった。"
  },
  {
    "id": 1367,
    "word": "ริม",
    "meaning": "縁、端、〜のそば",
    "pronunciation": "rim",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราไปเดินเล่นที่ริมชายหาดกัน",
    "exampleJa": "私たちはビーチのそばを散歩しに行きました。"
  },
  {
    "id": 1368,
    "word": "รุ่น",
    "meaning": "世代、モデル、型",
    "pronunciation": "rûn",
    "frequency": "7回中1回",
    "exampleTh": "โทรศัพท์มือถือรุ่นนี้ขายดีมาก",
    "exampleJa": "このモデルの携帯電話はとてもよく売れている。"
  },
  {
    "id": 1369,
    "word": "รุนแรง",
    "meaning": "激しい、暴力的な",
    "pronunciation": "run-raeng",
    "frequency": "7回中1回",
    "exampleTh": "พายุพัดถล่มเมืองอย่างรุนแรงเมื่อคืน",
    "exampleJa": "昨夜、嵐が街を激しく襲った。"
  },
  {
    "id": 1370,
    "word": "รู้สึกว่า",
    "meaning": "〜と感じる、〜と思う",
    "pronunciation": "rúu-sùk-wâa",
    "frequency": "7回中1回",
    "exampleTh": "ฉันรู้สึกว่าวันนี้อากาศร้อนกว่าเมื่อวาน",
    "exampleJa": "今日は昨日より暑い気がします。"
  },
  {
    "id": 1371,
    "word": "รู้เห็น",
    "meaning": "目撃する、知る",
    "pronunciation": "rûu-hěn",
    "frequency": "7回中1回",
    "exampleTh": "เขาปฏิเสธว่าไม่มีส่วนรู้เห็นในเรื่องนี้",
    "exampleJa": "彼はこの件について何も関与していないと否定した。"
  },
  {
    "id": 1372,
    "word": "เรียง",
    "meaning": "並べる",
    "pronunciation": "riaŋ",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาเรียงหนังสือตามตัวอักษร",
    "exampleJa": "本をアルファベット順に並べてください。"
  },
  {
    "id": 1373,
    "word": "เรียงลำดับ",
    "meaning": "順序よく並べる",
    "pronunciation": "riaŋ-lam-dàp",
    "frequency": "7回中1回",
    "exampleTh": "โปรดเรียงลำดับความสำคัญของงาน",
    "exampleJa": "仕事の優先順位を並べ替えてください。"
  },
  {
    "id": 1374,
    "word": "เรียนจบ",
    "meaning": "卒業する",
    "pronunciation": "rian-còp",
    "frequency": "7回中1回",
    "exampleTh": "เขาเพิ่งเรียนจบจากมหาวิทยาลัยปีนี้",
    "exampleJa": "彼は今年大学を卒業したばかりです。"
  },
  {
    "id": 1375,
    "word": "เรียนต่อ",
    "meaning": "進学する",
    "pronunciation": "rian-tɔ̀ɔ",
    "frequency": "7回中1回",
    "exampleTh": "ฉันอยากเรียนต่อปริญญาโทที่ต่างประเทศ",
    "exampleJa": "私は海外で修士課程に進学したいです。"
  },
  {
    "id": 1376,
    "word": "เรียนหนังสือ",
    "meaning": "勉強する",
    "pronunciation": "rian-nǎŋ-sʉ̌ʉ",
    "frequency": "7回中1回",
    "exampleTh": "เด็กๆ กำลังเรียนหนังสืออย่างตั้งใจ",
    "exampleJa": "子供たちは熱心に勉強しています。"
  },
  {
    "id": 1377,
    "word": "เรือประมง",
    "meaning": "漁船",
    "pronunciation": "rʉa-pra-moŋ",
    "frequency": "7回中1回",
    "exampleTh": "เรือประมงแล่นออกจากท่าเรือตอนเช้าตรู่",
    "exampleJa": "漁船は早朝に港を出発した。"
  },
  {
    "id": 1378,
    "word": "แรง",
    "meaning": "強い、力",
    "pronunciation": "rɛɛŋ",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ลมพัดแรงมากจนร่มปลิว",
    "exampleJa": "今日は風がとても強く吹いて傘が飛ばされた。"
  },
  {
    "id": 1379,
    "word": "โรคกระเพาะ",
    "meaning": "胃炎、胃病",
    "pronunciation": "rôok-kra-phɔ́",
    "frequency": "7回中1回",
    "exampleTh": "เขาปวดท้องเพราะเป็นโรคกระเพาะ",
    "exampleJa": "彼は胃炎のために胃が痛い。"
  },
  {
    "id": 1380,
    "word": "โรคท้องร่วง",
    "meaning": "下痢",
    "pronunciation": "rôok-thɔ́ɔŋ-rûaŋ",
    "frequency": "7回中1回",
    "exampleTh": "การกินอาหารไม่สะอาดทำให้เกิดโรคท้องร่วง",
    "exampleJa": "不衛生な食べ物を食べると下痢を引き起こす。"
  },
  {
    "id": 1381,
    "word": "โรคไส้ติ่งอักเสบ",
    "meaning": "虫垂炎、盲腸炎",
    "pronunciation": "rôok-sâi-tìŋ-àk-sèep",
    "frequency": "7回中1回",
    "exampleTh": "เขาต้องผ่าตัดด่วนเนื่องจากโรคไส้ติ่งอักเสบ",
    "exampleJa": "彼は虫垂炎のため緊急手術を受けなければならない。"
  },
  {
    "id": 1382,
    "word": "โรงพยาบาล",
    "meaning": "病院",
    "pronunciation": "rooŋ-pha-yaa-baan",
    "frequency": "7回中1回",
    "exampleTh": "พ่อไปตรวจร่างกายที่โรงพยาบาลทุกปี",
    "exampleJa": "父は毎年病院で健康診断を受けている。"
  },
  {
    "id": 1383,
    "word": "โรงพัก",
    "meaning": "警察署",
    "pronunciation": "rooŋ-phák",
    "frequency": "7回中1回",
    "exampleTh": "เขาไปแจ้งความเรื่องกระเป๋าหายที่โรงพัก",
    "exampleJa": "彼はバッグの紛失届を出すために警察署へ行った。"
  },
  {
    "id": 1384,
    "word": "โรงหนัง",
    "meaning": "映画館",
    "pronunciation": "rooŋ-nǎŋ",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราไปดูหนังเรื่องใหม่ที่โรงหนังใกล้บ้าน",
    "exampleJa": "私たちは家から近い映画館に新作映画を見に行った。"
  },
  {
    "id": 1385,
    "word": "ไร่",
    "meaning": "畑、ライ（面積単位）",
    "pronunciation": "râi",
    "frequency": "7回中1回",
    "exampleTh": "ครอบครัวของเขาทำไร่สับปะรดที่ต่างจังหวัด",
    "exampleJa": "彼の家族は地方でパイナップル畑を営んでいる。"
  },
  {
    "id": 1386,
    "word": "ไร้",
    "meaning": "ない、欠いている",
    "pronunciation": "rái",
    "frequency": "7回中1回",
    "exampleTh": "เด็กคนนี้เป็นเด็กกำพร้าที่ไร้ที่พึ่ง",
    "exampleJa": "この子は頼るもののない孤児だ。"
  },
  {
    "id": 1387,
    "word": "ฤดูหนาว",
    "meaning": "冬",
    "pronunciation": "rʉ́-duu-nǎaw",
    "frequency": "7回中1回",
    "exampleTh": "นักท่องเที่ยวชอบไปเที่ยวภาคเหนือในฤดูหนาว",
    "exampleJa": "観光客は冬に北部へ旅行するのが好きだ。"
  },
  {
    "id": 1388,
    "word": "ลงข่าว",
    "meaning": "報道する、掲載する",
    "pronunciation": "loŋ-khàaw",
    "frequency": "7回中1回",
    "exampleTh": "หนังสือพิมพ์ลงข่าวเกี่ยวกับอุบัติเหตุเมื่อวานนี้",
    "exampleJa": "新聞は昨日の事故についてのニ��ースを掲載した。"
  },
  {
    "id": 1389,
    "word": "ลงทะเบียน",
    "meaning": "登録する、書留にする",
    "pronunciation": "loŋ-tha-biian",
    "frequency": "7回中1回",
    "exampleTh": "นักศึกษาต้องลงทะเบียนเรียนผ่านทางเว็บไซต์",
    "exampleJa": "学生はウェブサイトを通じて履修登録をしなければならない。"
  },
  {
    "id": 1390,
    "word": "ลดความอ้วน",
    "meaning": "ダイエットする",
    "pronunciation": "lót-khwaam-ûan",
    "frequency": "7回中1回",
    "exampleTh": "เธอออกกำลังกายทุกวันเพื่อลดความอ้วน",
    "exampleJa": "彼女はダイエットのために毎日運動している。"
  },
  {
    "id": 1391,
    "word": "ลดลง",
    "meaning": "減少する",
    "pronunciation": "lót-long",
    "frequency": "7回中1回",
    "exampleTh": "ราคาน้ำมันลดลงอย่างต่อเนื่อง",
    "exampleJa": "ガソリン価格が下がり続けている。"
  },
  {
    "id": 1392,
    "word": "ลม",
    "meaning": "風",
    "pronunciation": "lom",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ลมพัดแรงมากจนร่มปลิว",
    "exampleJa": "今日は風がとても強く吹いて傘が飛ばされた。"
  },
  {
    "id": 1393,
    "word": "ล่ม",
    "meaning": "転覆する",
    "pronunciation": "lôm",
    "frequency": "7回中1回",
    "exampleTh": "เรือใบของเขาเกิดล่มกลางทะเล",
    "exampleJa": "彼のヨットが海の真ん中で転覆した。"
  },
  {
    "id": 1394,
    "word": "ส้วง",
    "meaning": "トイレ",
    "pronunciation": "sûang",
    "frequency": "7回中1回",
    "exampleTh": "ขอทางไปห้องส้วงหน่อยครับ",
    "exampleJa": "トイレへの行き方を教えてください。"
  },
  {
    "id": 1395,
    "word": "ลอย",
    "meaning": "浮かぶ",
    "pronunciation": "looy",
    "frequency": "7回中1回",
    "exampleTh": "กระทงลอยอยู่บนผิวน้ำในคืนวันเพ็ญ",
    "exampleJa": "満月の夜、クラトンが水面に浮かんでいる。"
  },
  {
    "id": 1396,
    "word": "ลักษณะนิสัย",
    "meaning": "性格",
    "pronunciation": "lák-sa-nà-ní-sǎi",
    "frequency": "7回中1回",
    "exampleTh": "เขามีลักษณะนิสัยที่ร่าเริงและเป็นมิตร",
    "exampleJa": "彼は明るくフレンドリーな性格をしている。"
  },
  {
    "id": 1397,
    "word": "ลาย",
    "meaning": "模様",
    "pronunciation": "laai",
    "frequency": "7回中1回",
    "exampleTh": "เสื้อตัวนี้มีลายดอกไม้สวยงามมาก",
    "exampleJa": "この服はとてもきれいな花柄がある。"
  },
  {
    "id": 1398,
    "word": "ลายเซ��น",
    "meaning": "サイン",
    "pronunciation": "laai-sen",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาเขียนลายเซ็นของคุณตรงนี้",
    "exampleJa": "ここにあなたのサインを書いてください。"
  },
  {
    "id": 1399,
    "word": "ลายมือ",
    "meaning": "筆跡",
    "pronunciation": "laai-mue",
    "frequency": "7回中1回",
    "exampleTh": "ลายมือของเขาอ่านยากมากจริงๆ",
    "exampleJa": "彼の字は本当に読みづらい。"
  },
  {
    "id": 1400,
    "word": "ลาหยุด",
    "meaning": "休暇をとる",
    "pronunciation": "laa-yùt",
    "frequency": "7回中1回",
    "exampleTh": "พรุ่งนี้ฉันจะลาหยุดเพื่อไปหาหมอ",
    "exampleJa": "明日は医者に行くために休みを取ります。"
  },
  {
    "id": 1401,
    "word": "ลำ",
    "meaning": "〜機（助数詞）",
    "pronunciation": "lam",
    "frequency": "7回中1回",
    "exampleTh": "เครื่องบินลำใหญ่กำลังจะลงจอด",
    "exampleJa": "大きな飛行機が着陸しようとしている。"
  },
  {
    "id": 1402,
    "word": "ลิฟต์",
    "meaning": "エレベーター",
    "pronunciation": "líp",
    "frequency": "7回中1回",
    "exampleTh": "เราควรขึ้นลิ���ต์ไปที่ชั้นห้าสิบ",
    "exampleJa": "私たちはエレベーターで50階に上がるべきだ。"
  },
  {
    "id": 1403,
    "word": "ลึก",
    "meaning": "深い",
    "pronunciation": "lúek",
    "frequency": "7回中1回",
    "exampleTh": "แม่น้ำสายนี้ลึกและอันตรายมาก",
    "exampleJa": "この川は深くてとても危険だ。"
  },
  {
    "id": 1404,
    "word": "ลึกลับ",
    "meaning": "神秘的な",
    "pronunciation": "lúek-láp",
    "frequency": "7回中1回",
    "exampleTh": "มีเรื่องราวลึกลับเกิดขึ้นในปราสาทเก่า",
    "exampleJa": "古い城で神秘的な出来事が起こった。"
  },
  {
    "id": 1405,
    "word": "ลืม",
    "meaning": "忘れる",
    "pronunciation": "luem",
    "frequency": "7回中1回",
    "exampleTh": "ฉันลืมกุญแจไว้ในห้องทำงาน",
    "exampleJa": "私はオフィスに鍵を忘れてしまった。"
  },
  {
    "id": 1406,
    "word": "ลุง",
    "meaning": "おじ",
    "pronunciation": "lung",
    "frequency": "7回中1回",
    "exampleTh": "ลุงของฉันชอบทำอาหารไทยอร่อยๆ",
    "exampleJa": "私のおじは美味しいタイ料理を作るのが好きだ。"
  },
  {
    "id": 1407,
    "word": "ลูกอม",
    "meaning": "飴",
    "pronunciation": "lûuk-om",
    "frequency": "7回中1回",
    "exampleTh": "เด็กๆ ชอบกินลูกอมรสผลไม้หวานๆ",
    "exampleJa": "子供たちは甘いフルーツ味の飴を食べるのが好きだ。"
  },
  {
    "id": 1408,
    "word": "เลี่ยง",
    "meaning": "避ける",
    "pronunciation": "lîang",
    "frequency": "7回中1回",
    "exampleTh": "เราควรเลี่ยงการเดินทางในเวลาเร่งด่วน",
    "exampleJa": "ラッシュアワーの移動は避けるべきだ。"
  },
  {
    "id": 1409,
    "word": "เลี้ยงดู",
    "meaning": "養う",
    "pronunciation": "líang-duu",
    "frequency": "7回中1回",
    "exampleTh": "พ่อแม่ทำงานหนักเพื่อเลี้ยงดูครอบครัว",
    "exampleJa": "両親は家族を養うために一生懸命働いている。"
  },
  {
    "id": 1410,
    "word": "เลียน",
    "meaning": "真ねる",
    "pronunciation": "lian",
    "frequency": "7回中1回",
    "exampleTh": "นกแก้วสามารถเลียนเสียงคนพูดได้ดี",
    "exampleJa": "オウムは人の話し声を上手に真似ることができる。"
  },
  {
    "id": 1411,
    "word": "เลียนแบบ",
    "meaning": "真似する",
    "pronunciation": "lian-bàep",
    "frequency": "7回中1回",
    "exampleTh": "เด็กชอบเลียนแบบพฤติกรรมของผู้ใหญ่",
    "exampleJa": "子供は大人の行動を真似するのが好きだ。"
  },
  {
    "id": 1412,
    "word": "เลี้ยว",
    "meaning": "曲がる",
    "pronunciation": "líao",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาเลี้ยวซ้ายที่ไฟแดงข้างหน้า",
    "exampleJa": "次の信号を左に曲がってください。"
  },
  {
    "id": 1413,
    "word": "เลือก",
    "meaning": "選ぶ",
    "pronunciation": "lûak",
    "frequency": "7回中1回",
    "exampleTh": "คุณเลือกเมนูอาหารที่อยากกินได้เลย",
    "exampleJa": "食べたいメニューを選んでいいですよ。"
  },
  {
    "id": 1414,
    "word": "แล",
    "meaning": "眺める",
    "pronunciation": "lae",
    "frequency": "7回中1回",
    "exampleTh": "เขานั่งแลดูวิวทะเลอย่างเพลิดเพลิน",
    "exampleJa": "彼は楽しそうに座って海の景色を眺めている。"
  },
  {
    "id": 1415,
    "word": "แลกเงิน",
    "meaning": "両替する",
    "pronunciation": "lâek-ngoen",
    "frequency": "7回中1回",
    "exampleTh": "ฉันต้องการแลกเงินเยนเป็นเงินบาท",
    "exampleJa": "円をバーツに両替したいです。"
  },
  {
    "id": 1416,
    "word": "แล้วก็",
    "meaning": "それから",
    "pronunciation": "láeo-gôr",
    "frequency": "7回中1回",
    "exampleTh": "กินข้าวเสร็จแล้วก็ไปดูหนังกัน",
    "exampleJa": "ご飯を食べたら、それから映画を見に行こう。"
  },
  {
    "id": 1417,
    "word": "แล้วเจอกัน",
    "meaning": "また会いましょう",
    "pronunciation": "láeo-coe-gan",
    "frequency": "7回中1回",
    "exampleTh": "วันเสาร์นี้เจอกันนะ แล้วเจอกันครับ",
    "exampleJa": "今週の土曜日に会いましょう、またね。"
  },
  {
    "id": 1418,
    "word": "แล้วยัง",
    "meaning": "もう〜したか",
    "pronunciation": "láeo-yang",
    "frequency": "7回中1回",
    "exampleTh": "คุณกินข้าวกลางวันแล้วหรือยัง",
    "exampleJa": "もう昼ご飯は食べましたか？"
  },
  {
    "id": 1419,
    "word": "วันเกิด",
    "meaning": "誕生日",
    "pronunciation": "wan-goet",
    "frequency": "7回中1回",
    "exampleTh": "สุขสันต์วันเกิด ขอให้มีความสุขมากๆ",
    "exampleJa": "お誕生日おめでとう、たくさんの幸せがありますように。"
  },
  {
    "id": 1420,
    "word": "วันประชุม",
    "meaning": "会議の日",
    "pronunciation": "wan-prà-chum",
    "frequency": "7回中1回",
    "exampleTh": "วันประชุมคือวันพุธหน้าตอนบ่ายโมง",
    "exampleJa": "会議の日は来週の水曜日の午後1時です。"
  },
  {
    "id": 1421,
    "word": "วันลอยกระทง",
    "meaning": "ロイクラトンの日",
    "pronunciation": "wan-loi-grà-thong",
    "frequency": "7回中1回",
    "exampleTh": "วันลอยกระทงปีนี้ตรงกับวันเพ็ญเดือนสิ���สอง",
    "exampleJa": "今年のロイクラトンの日は12月の満月の日に当たります。"
  },
  {
    "id": 1422,
    "word": "วันศุกร์",
    "meaning": "金曜日",
    "pronunciation": "wan-sùk",
    "frequency": "7回中1回",
    "exampleTh": "วันศุกร์นี้เราไปกินเลี้ยงกันไหม",
    "exampleJa": "今週の金曜日に飲み会に行きませんか？"
  },
  {
    "id": 1423,
    "word": "วันหนึ่ง",
    "meaning": "ある日",
    "pronunciation": "wan-nùeng",
    "frequency": "7回中1回",
    "exampleTh": "วันหนึ่งฉันเดินไปเจอแมวจรจัดในสวน",
    "exampleJa": "ある日、私は公園で野良猫に出会った。"
  },
  {
    "id": 1424,
    "word": "วันอาทิตย์",
    "meaning": "日曜日",
    "pronunciation": "wan-aa-thít",
    "frequency": "7回中1回",
    "exampleTh": "วันอาทิตย์นี้ฉันจะนอนพักผ่อนอยู่บ้าน",
    "exampleJa": "この日曜日は家で寝て過ごします。"
  },
  {
    "id": 1425,
    "word": "วัยรุ่น",
    "meaning": "若者",
    "pronunciation": "wai-rûn",
    "frequency": "7回中1回",
    "exampleTh": "เพลงนี้เป็นที่นิยมในกลุ่มวัยรุ่นไทย",
    "exampleJa": "この歌はタイの若者の間で人気があります。"
  },
  {
    "id": 1426,
    "word": "วัสดุ",
    "meaning": "材料",
    "pronunciation": "wát-sà-dù",
    "frequency": "7回中1回",
    "exampleTh": "เก้าอี้ตัวนี้ทำจากวัสดุธรรมชาติ",
    "exampleJa": "この椅子は天然素材で作られています。"
  },
  {
    "id": 1427,
    "word": "วาง",
    "meaning": "置く",
    "pronunciation": "waang",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาวางกระเป๋าไว้บนโต๊ะนี้ครับ",
    "exampleJa": "カバンをこのテーブルの上に置いてください。"
  },
  {
    "id": 1428,
    "word": "วางแผน",
    "meaning": "計画する",
    "pronunciation": "waang-phǎen",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราต้องวางแผนการเดินทางล่วงหน้า",
    "exampleJa": "私たちは事前に旅行の計画を立てる必要があります。"
  },
  {
    "id": 1429,
    "word": "ว่าไง",
    "meaning": "どう？",
    "pronunciation": "wâa-ngai",
    "frequency": "7回中1回",
    "exampleTh": "ว่าไงนะ พูดอีกทีได้ไหม ไม่ค่อยได้ยิน",
    "exampleJa": "何だって？もう一度言ってくれる���よく聞こえなかった。"
  },
  {
    "id": 1430,
    "word": "วิ่งรอบ",
    "meaning": "周回する",
    "pronunciation": "wîng-rôp",
    "frequency": "7回中1回",
    "exampleTh": "เขาชอบวิ่งรอบสนามฟุตบอลทุกเช้า",
    "exampleJa": "彼は毎朝サッカースタジアムの周りを走るのが好きだ。"
  },
  {
    "id": 1431,
    "word": "วิ่งหนี",
    "meaning": "逃げ出す",
    "pronunciation": "wîng-nǐi",
    "frequency": "7回中1回",
    "exampleTh": "ขโมยวิ่งหนีตำรวจไปอย่างรวดเร็ว",
    "exampleJa": "泥棒は警察から素早く逃げ出した。"
  },
  {
    "id": 1432,
    "word": "วิชา",
    "meaning": "科目",
    "pronunciation": "wí-chaa",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบเรียนวิชาภาษาไทยมากที่สุด",
    "exampleJa": "私はタイ語の授業を学ぶのが一番好きです。"
  },
  {
    "id": 1433,
    "word": "วิตามิน",
    "meaning": "ビタミン",
    "pronunciation": "wí-taa-min",
    "frequency": "7回中1回",
    "exampleTh": "ผักและผลไม้มีวิตามินหลายชนิด",
    "exampleJa": "野菜や果物には多くのビタミンが含まれています。"
  },
  {
    "id": 1434,
    "word": "วิตามินซี",
    "meaning": "ビタミンC",
    "pronunciation": "wí-taa-min-sii",
    "frequency": "7回中1回",
    "exampleTh": "ส้มเป็นผลไม้ที่มีวิตามินซีสูงมาก",
    "exampleJa": "オレンジはビタミンCがとても豊富な果物です。"
  },
  {
    "id": 1435,
    "word": "วิตามินเอ",
    "meaning": "ビタミンA",
    "pronunciation": "wí-taa-min-ee",
    "frequency": "7回中1回",
    "exampleTh": "มะละกอสุกมีวิตามินเอช่วยบำรุงสายตา",
    "exampleJa": "完熟パパイヤには視力を維持するビタミンAが含まれています。"
  },
  {
    "id": 1436,
    "word": "วิถี",
    "meaning": "方法",
    "pronunciation": "wí-thǐi",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องหาวิถีทางแก้ไขปัญหานี้",
    "exampleJa": "私たちはこの問題を解決する方法を見つけなければならない。"
  },
  {
    "id": 1437,
    "word": "วิถีชีวิต",
    "meaning": "ライフスタイル",
    "pronunciation": "wí-thǐi-chii-wít",
    "frequency": "7回中1回",
    "exampleTh": "คนเมืองมีวิถีชีวิตที่เร่งรีบมาก",
    "exampleJa": "都会の人々はとても忙しいライフスタイルを送っています。"
  },
  {
    "id": 1438,
    "word": "วิทยากร",
    "meaning": "講師",
    "pronunciation": "wít-tha-yaa-koon",
    "frequency": "7回中1回",
    "exampleTh": "เขาได้รับเชิญเป็นวิทยากรในงานสัมมนา",
    "exampleJa": "彼はセミナーの講師として招待されました。"
  },
  {
    "id": 1439,
    "word": "วิศว",
    "meaning": "工学",
    "pronunciation": "wít-sa-wá",
    "frequency": "7回中1回",
    "exampleTh": "น้องชายของฉันอยากเรียนต่อด้านวิศวะ",
    "exampleJa": "私の弟は工学分野に進学したいと思っています。"
  },
  {
    "id": 1440,
    "word": "วุ่นวาย",
    "meaning": "騒がしい",
    "pronunciation": "wûn-waai",
    "frequency": "7回中1回",
    "exampleTh": "ถนนในกรุงเทพฯ มักจะวุ่นวายเสมอ",
    "exampleJa": "バンコクの道路はいつも混雑して騒がしい。"
  },
  {
    "id": 1441,
    "word": "วุ้นเส้น",
    "meaning": "春雨",
    "pronunciation": "wún-sên",
    "frequency": "7回中1回",
    "exampleTh": "แม่ท���แกงจืดวุ้นเส้นใส่หมูสับ",
    "exampleJa": "母は豚ひき肉入りの春雨スープを作った。"
  },
  {
    "id": 1442,
    "word": "เว้น",
    "meaning": "空ける",
    "pronunciation": "wén",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาเขียนเว้นวรรคให้ถูกต้องด้วย",
    "exampleJa": "正しくスペースを空けて書いてください。"
  },
  {
    "id": 1443,
    "word": "แวะ",
    "meaning": "立ち寄る",
    "pronunciation": "wáe",
    "frequency": "7回中1回",
    "exampleTh": "ฉันแวะซื้อกาแฟก่อนไปทำงานทุกวัน",
    "exampleJa": "私は毎日仕事に行く前にコーヒーを買うために立ち寄ります。"
  },
  {
    "id": 1444,
    "word": "ไว",
    "meaning": "早い",
    "pronunciation": "wai",
    "frequency": "7回中1回",
    "exampleTh": "เด็กคนนี้เรียนรู้ได้ไวมากจริงๆ",
    "exampleJa": "この子は本当に物覚えが早い。"
  },
  {
    "id": 1445,
    "word": "ไว้ใจ",
    "meaning": "信頼する",
    "pronunciation": "wái-cai",
    "frequency": "7回中1回",
    "exampleTh": "ฉันไว้ใจเพื่อนสนิทคนนี้มากที่สุด",
    "exampleJa": "私はこの親友を一番信頼しています。"
  },
  {
    "id": 1446,
    "word": "ไวยากรณ์",
    "meaning": "文法",
    "pronunciation": "wai-yaa-koon",
    "frequency": "7回中1回",
    "exampleTh": "การเรียนไวยากรณ์ภาษาไทยไม่ยากเกินไป",
    "exampleJa": "タイ語の文法を学ぶことはそれほど難しくありません。"
  },
  {
    "id": 1447,
    "word": "ศรีลังกา",
    "meaning": "スリランカ",
    "pronunciation": "sǐi-lang-kaa",
    "frequency": "7回中1回",
    "exampleTh": "ประเทศศรีลังกามีวัดวาอารามที่สวยงาม",
    "exampleJa": "スリランカには美しい寺院があります。"
  },
  {
    "id": 1448,
    "word": "ศึกษา",
    "meaning": "勉強する",
    "pronunciation": "sʉ̀k-sǎa",
    "frequency": "7回中1回",
    "exampleTh": "เขาจะไปศึกษาต่อที่ประเทศญี่ปุ่นปีหน้า",
    "exampleJa": "彼は来年日本へ留学します。"
  },
  {
    "id": 1449,
    "word": "สกปรก",
    "meaning": "汚い",
    "pronunciation": "sòk-ka-pròk",
    "frequency": "7回中1回",
    "exampleTh": "อย่าเอามือที่สกปรกไปจับอาหารกิน",
    "exampleJa": "汚い手で食べ物を掴んで食べないで���ださい。"
  },
  {
    "id": 1450,
    "word": "สงกรานต์",
    "meaning": "ソンクラーン",
    "pronunciation": "sǒng-kraan",
    "frequency": "7回中1回",
    "exampleTh": "คนไทยเล่นสาดน้ำในวันสงกรานต์",
    "exampleJa": "タイ人はソンクラーンの日に水を掛け合います。"
  },
  {
    "id": 1451,
    "word": "สงคราม",
    "meaning": "戦争",
    "pronunciation": "song-khraam",
    "frequency": "7回中1回",
    "exampleTh": "สงครามทำให้ผู้คนจำนวนมากต้องสูญเสียบ้าน",
    "exampleJa": "戦争は多くの人々に家を失わせる。"
  },
  {
    "id": 1452,
    "word": "สงบ",
    "meaning": "静かな、穏やかな",
    "pronunciation": "sa-ngòp",
    "frequency": "7回中1回",
    "exampleTh": "หมู่บ้านในชนบทแห่งนี้เงียบสงบมาก",
    "exampleJa": "この田舎の村はとても静かだ。"
  },
  {
    "id": 1453,
    "word": "ส่งมา",
    "meaning": "送ってくる",
    "pronunciation": "sòng maa",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาส่���เอกสารมาให้ฉันทางอีเมล",
    "exampleJa": "メールで書類を送ってください。"
  },
  {
    "id": 1454,
    "word": "ส่งเสียง",
    "meaning": "声を出す",
    "pronunciation": "sòng sǐang",
    "frequency": "7回中1回",
    "exampleTh": "เด็กๆ ส่งเสียงดังในห้องเรียน",
    "exampleJa": "子供たちが教室で大声を出している。"
  },
  {
    "id": 1455,
    "word": "ส่งออก",
    "meaning": "輸出する",
    "pronunciation": "sòng-òok",
    "frequency": "7回中1回",
    "exampleTh": "ประเทศไทยส่งออกข้าวไปทั่วโลก",
    "exampleJa": "タイは世界中に米を輸出している。"
  },
  {
    "id": 1456,
    "word": "สด",
    "meaning": "新鮮な、生の",
    "pronunciation": "sòt",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบกินผลไม้สดทุกเช้า",
    "exampleJa": "私は毎朝新鮮な果物を食べるのが好きだ。"
  },
  {
    "id": 1457,
    "word": "สดใส",
    "meaning": "明るい、生き生きした",
    "pronunciation": "sòt-sǎi",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ท้องฟ้าแจ่มใสและสดใสมาก",
    "exampleJa": "今日は空が晴れ渡り、とても明る���。"
  },
  {
    "id": 1458,
    "word": "สตางค์",
    "meaning": "お金",
    "pronunciation": "sa-taang",
    "frequency": "7回中1回",
    "exampleTh": "ตอนนี้ฉันไม่มีสตางค์ติดตัวเลย",
    "exampleJa": "今、私はお金を全く持ち合わせていない。"
  },
  {
    "id": 1459,
    "word": "สถานภาพ",
    "meaning": "地位、身分",
    "pronunciation": "sa-thǎa-na-phâap",
    "frequency": "7回中1回",
    "exampleTh": "คุณต้องระบุสถานภาพสมรสในใบสมัคร",
    "exampleJa": "申請書に婚姻状況を記入する必要があります。"
  },
  {
    "id": 1460,
    "word": "สถานีตำรวจ",
    "meaning": "警察署",
    "pronunciation": "sa-thǎa-nii tam-rùat",
    "frequency": "7回中1回",
    "exampleTh": "ฉันไปแจ้งความที่สถานีตำรวจใกล้บ้าน",
    "exampleJa": "私は家近くの警察署に被害届を出しに行った。"
  },
  {
    "id": 1461,
    "word": "สถาปนิก",
    "meaning": "建築家",
    "pronunciation": "sa-thǎa-pa-ník",
    "frequency": "7回中1回",
    "exampleTh": "สถาปนิกกำลังออกแบบบ้านหลังใหม่",
    "exampleJa": "建築家が新しい家を設計している。"
  },
  {
    "id": 1462,
    "word": "สนามหลวง",
    "meaning": "王宮前広場",
    "pronunciation": "sa-nǎam lǔang",
    "frequency": "7回中1回",
    "exampleTh": "ผู้คนชอบไปเดินเล่นที่สนามหลวงตอนเย็น",
    "exampleJa": "人々は夕方にサナムルアンへ散歩に行くのが好きだ。"
  },
  {
    "id": 1463,
    "word": "สนิท",
    "meaning": "親しい、親密な",
    "pronunciation": "sa-nìt",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราเป็นเพื่อนสนิทกันมาตั้งแต่เด็ก",
    "exampleJa": "私たちは子供の頃からの親友です。"
  },
  {
    "id": 1464,
    "word": "สนุกสนาน",
    "meaning": "楽しい、愉快な",
    "pronunciation": "sa-nùk sa-nǎan",
    "frequency": "7回中1回",
    "exampleTh": "งานเลี้ยงเมื่อคืนนี้สนุกสนานมาก",
    "exampleJa": "昨夜のパーティーはとても楽しかった。"
  },
  {
    "id": 1465,
    "word": "สภาพอากาศ",
    "meaning": "天気、気候",
    "pronunciation": "sa-phâap aa-gàat",
    "frequency": "7回中1回",
    "exampleTh": "สภาพอากาศวันนี้ร้อนกว่าเมื่อวาน",
    "exampleJa": "今日の天気は昨日より暑い。"
  },
  {
    "id": 1466,
    "word": "สม",
    "meaning": "ふさわしい、適した",
    "pronunciation": "sǒm",
    "frequency": "7回中1回",
    "exampleTh": "เขาสมกับตำแหน่งหัวหน้าคนใหม่จริงๆ",
    "exampleJa": "彼は本当に新しいリーダーの地位にふさわしい。"
  },
  {
    "id": 1467,
    "word": "ส้ม",
    "meaning": "みかん、オレンジ",
    "pronunciation": "sôm",
    "frequency": "7回中1回",
    "exampleTh": "ฉันซื้อส้มหวานๆ มาจากตลาด",
    "exampleJa": "私は市場で甘いみかんを買ってきた。"
  },
  {
    "id": 1468,
    "word": "สมควร",
    "meaning": "〜すべきである",
    "pronunciation": "sǒm-khuan",
    "frequency": "7回中1回",
    "exampleTh": "เราสมควรได้รับการพักผ่อนหลังจากทำงานหนัก",
    "exampleJa": "私たちは一生懸命働いた後、休息をとるべきだ。"
  },
  {
    "id": 1469,
    "word": "สมหวัง",
    "meaning": "願いが叶う",
    "pronunciation": "sǒm-wǎng",
    "frequency": "7回中1回",
    "exampleTh": "ขอให้คุณสมหวังในสิ่งที่ปรารถนาทุกประการ",
    "exampleJa": "あなたの望むことすべてが叶いますように。"
  },
  {
    "id": 1470,
    "word": "ส้มโ���",
    "meaning": "ポメロ、ザボン",
    "pronunciation": "sôm-oo",
    "frequency": "7回中1回",
    "exampleTh": "ส้มโอของไทยมีรสชาติหวานอมเปรี้ยวอร่อย",
    "exampleJa": "タイのポメロは甘酸っぱくて美味しい。"
  },
  {
    "id": 1471,
    "word": "สมาชิก",
    "meaning": "会員、メンバー",
    "pronunciation": "sa-maa-chík",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเป็นสมาชิกของฟิตเนสนี้",
    "exampleJa": "私はこのフィットネスの会員です。"
  },
  {
    "id": 1472,
    "word": "สม่ำเสมอ",
    "meaning": "常に、規則正しく",
    "pronunciation": "sa-màm-sa-mǒe",
    "frequency": "7回中1回",
    "exampleTh": "เขาออกกำลังกายอย่างสม่ำเสมอ",
    "exampleJa": "彼は規則正しく運動しています。"
  },
  {
    "id": 1473,
    "word": "สมุทรปราการ",
    "meaning": "サムットプラーカーン",
    "pronunciation": "sa-mùt-praa-kaan",
    "frequency": "7回中1回",
    "exampleTh": "สนามบินสุวรรณภูมิอยู่ที่สมุทรปราการ",
    "exampleJa": "スワンナプーム空港はサムットプラーカーンにあります。"
  },
  {
    "id": 1474,
    "word": "สยามพารากอน",
    "meaning": "サイアム・パラゴン",
    "pronunciation": "sa-yǎam-phaa-raa-gɔɔn",
    "frequency": "7回中1回",
    "exampleTh": "ฉันไปซื้อของที่สยามพารากอนบ่อยๆ",
    "exampleJa": "私はよくサイアム・パラゴンに買い物に行きます。"
  },
  {
    "id": 1475,
    "word": "สรุป",
    "meaning": "要約する、まとめる",
    "pronunciation": "sa-rùp",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาสรุปเนื้อหาการประชุมนี้ให้หน่อย",
    "exampleJa": "この会議の内容を要約してください。"
  },
  {
    "id": 1476,
    "word": "สวนลุม",
    "meaning": "ルンピニー公園",
    "pronunciation": "sǔan-lum",
    "frequency": "7回中1回",
    "exampleTh": "ตอนเย็นฉันชอบไปวิ่งที่สวนลุม",
    "exampleJa": "夕方、私はルンピニー公園に走りに行くのが好きです。"
  },
  {
    "id": 1477,
    "word": "สวนสัตว์",
    "meaning": "動物園",
    "pronunciation": "sǔan-sàt",
    "frequency": "7回中1回",
    "exampleTh": "วันอาทิตย์นี้จะพาลูกไปเที่ยวสวนสัตว์",
    "exampleJa": "今週の日曜日に子供を動物園に連れて行きます。"
  },
  {
    "id": 1478,
    "word": "สวนสาธารณะ",
    "meaning": "公園",
    "pronunciation": "sǔan-sǎa-thaa-ra-ná",
    "frequency": "7回中1回",
    "exampleTh": "แถวบ้านฉันมีสวนสาธารณะขนาดใหญ่",
    "exampleJa": "私の家の近くに大きな公園があります。"
  },
  {
    "id": 1479,
    "word": "สว่าง",
    "meaning": "明るい",
    "pronunciation": "sa-wàang",
    "frequency": "7回中1回",
    "exampleTh": "ห้องนี้สว่างเพราะมีหน้าต่างบานใหญ่",
    "exampleJa": "この部屋は大きな窓があるので明るいです。"
  },
  {
    "id": 1480,
    "word": "สอบตก",
    "meaning": "試験に落ちる",
    "pronunciation": "sɔ̀ɔp-tòk",
    "frequency": "7回中1回",
    "exampleTh": "ถ้าไม่อ่านหนังสือสอบจะสอบตกนะ",
    "exampleJa": "勉強しないと試験に落ちるよ。"
  },
  {
    "id": 1481,
    "word": "สอบถาม",
    "meaning": "問い合わせる",
    "pronunciation": "sɔ̀ɔp-thǎam",
    "frequency": "7回中1回",
    "exampleTh": "คุณสามารถสอบถามข้อมูลเพิ่มเติมได้ที่นี่",
    "exampleJa": "こちらで詳細情報を問い合わせることができます。"
  },
  {
    "id": 1482,
    "word": "สอบผ่าน",
    "meaning": "試験に合格する",
    "pronunciation": "sɔ̀ɔp-phàan",
    "frequency": "7回中1回",
    "exampleTh": "ดีใจด้วยนะที่คุณสอบผ่านวิชาคณิตศาสตร์",
    "exampleJa": "数学の試験に合格しておめでとう。"
  },
  {
    "id": 1483,
    "word": "สัก",
    "meaning": "タトゥーを入れる、〜くらい",
    "pronunciation": "sàk",
    "frequency": "7回中1回",
    "exampleTh": "เขาไปสักลายที่แขนขวามาใหม่",
    "exampleJa": "彼は右腕に新しいタトゥーを入れました。"
  },
  {
    "id": 1484,
    "word": "สักมื้อ",
    "meaning": "一食、いつか一食",
    "pronunciation": "sàk-múu",
    "frequency": "7回中1回",
    "exampleTh": "วันหลังเราไปกินข้าวด้วยกันสักมื้อนะ",
    "exampleJa": "今度、一緒に一食ご飯を食べに行きましょうね。"
  },
  {
    "id": 1485,
    "word": "สังคม",
    "meaning": "社会",
    "pronunciation": "sǎng-khom",
    "frequency": "7回中1回",
    "exampleTh": "อินเทอร์เน็ตเปลี่ยนวิถีชีวิตของสังคมไทย",
    "exampleJa": "インターネットはタイ社会のライフスタイルを変えました。"
  },
  {
    "id": 1486,
    "word": "สัญญา",
    "meaning": "約束、契約",
    "pronunciation": "sǎn-yaa",
    "frequency": "7回中1回",
    "exampleTh": "อย่าลืมสัญญาที่ให้ไว้กับฉันนะ",
    "exampleJa": "私とした約束を忘れないでね。"
  },
  {
    "id": 1487,
    "word": "สั้น",
    "meaning": "短い",
    "pronunciation": "sân",
    "frequency": "7回中1回",
    "exampleTh": "เธอตัดผมสั้นแล้วดูน่ารักมาก",
    "exampleJa": "彼女は髪を短く切って、とても可愛く見えます。"
  },
  {
    "id": 1488,
    "word": "สัมภาษณ์",
    "meaning": "面接する、インタビュー",
    "pronunciation": "sǎm-phâat",
    "frequency": "7回中1回",
    "exampleTh": "พรุ่งนี้ฉันมีสัมภาษณ์งานตอนเช้า",
    "exampleJa": "明日の朝、私は仕事の面接があります。"
  },
  {
    "id": 1489,
    "word": "สาธารณะ",
    "meaning": "公共の、公の",
    "pronunciation": "sǎa-thaa-ra-ná",
    "frequency": "7回中1回",
    "exampleTh": "ห้ามสูบบุหรี่ในที่สาธารณะ",
    "exampleJa": "公共の場所での喫煙は禁止されています。"
  },
  {
    "id": 1490,
    "word": "สามี",
    "meaning": "夫",
    "pronunciation": "sǎa-mii",
    "frequency": "7回中1回",
    "exampleTh": "สามีของเธอทำงานเป็นวิศวกร",
    "exampleJa": "彼女の夫はエンジニアとして働いています。"
  },
  {
    "id": 1491,
    "word": "สาร",
    "meaning": "物質、メッセージ",
    "pronunciation": "sǎan",
    "frequency": "7回中1回",
    "exampleTh": "ร่างกายต้องการสารอาหารครบห้าหมู่",
    "exampleJa": "体は5大栄養素を必要としています。"
  },
  {
    "id": 1492,
    "word": "สารเคมี",
    "meaning": "化学物質",
    "pronunciation": "sǎan-khee-mii",
    "frequency": "7回中1回",
    "exampleTh": "ผักชนิดนี้ไม่มีสารเคมีตกค้าง",
    "exampleJa": "この野菜には残留化学物質が含まれていません。"
  },
  {
    "id": 1493,
    "word": "สาว",
    "meaning": "若い女性",
    "pronunciation": "sǎao",
    "frequency": "7回中1回",
    "exampleTh": "เธอเป็นสาวส���ยที่ทำงานเก่งมาก",
    "exampleJa": "彼女は仕事がとてもできる美しい女性です。"
  },
  {
    "id": 1494,
    "word": "สิ่ง",
    "meaning": "物、事",
    "pronunciation": "sìng",
    "frequency": "7回中1回",
    "exampleTh": "นี่คือสิ่งสำคัญที่สุดในการเรียน",
    "exampleJa": "これが勉強において最も重要なことです。"
  },
  {
    "id": 1495,
    "word": "สิน",
    "meaning": "財産、富",
    "pronunciation": "sǐn",
    "frequency": "7回中1回",
    "exampleTh": "มรดกนี้เป็นสินส่วนตัวของเขา",
    "exampleJa": "この遺産は彼の個人財産です。"
  },
  {
    "id": 1496,
    "word": "สีแดง",
    "meaning": "赤色",
    "pronunciation": "sǐi-daeng",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบใส่เสื้อสีแดงในวันตรุษจีน",
    "exampleJa": "私は旧正月に赤い服を着るのが好きです。"
  },
  {
    "id": 1497,
    "word": "สื่อ",
    "meaning": "メディア、媒体",
    "pronunciation": "sùu",
    "frequency": "7回中1回",
    "exampleTh": "สื่อสังคมออนไลน์มีอิทธิพลมากในปัจจุบัน",
    "exampleJa": "現在、ソーシャルメディア��非常に大きな影響力を持っています。"
  },
  {
    "id": 1498,
    "word": "สุขภาพดี",
    "meaning": "健康な",
    "pronunciation": "sùk-kha-phâap-dii",
    "frequency": "7回中1回",
    "exampleTh": "การออกกำลังกายทำให้ร่างกายสุขภาพดี",
    "exampleJa": "運動をすると体が健康になります。"
  },
  {
    "id": 1499,
    "word": "สุนัข",
    "meaning": "犬",
    "pronunciation": "sù-nák",
    "frequency": "7回中1回",
    "exampleTh": "สุนัขตัวนี้เชื่องและแสนรู้มาก",
    "exampleJa": "この犬はとても人懐っこくて賢いです。"
  },
  {
    "id": 1500,
    "word": "สุภาพ",
    "meaning": "丁寧な、礼儀正しい",
    "pronunciation": "sù-phâap",
    "frequency": "7回中1回",
    "exampleTh": "เขาเป็นคนสุภาพและพูดจาไพเราะ",
    "exampleJa": "彼は礼儀正しく、言葉遣いが丁寧な人です。"
  },
  {
    "id": 1501,
    "word": "สุรา",
    "meaning": "お酒",
    "pronunciation": "sù-raa",
    "frequency": "7回中1回",
    "exampleTh": "การดื่มสุรามากเกินไปไม่ดีต่อสุขภาพ",
    "exampleJa": "お酒の飲みすぎは健康に良くありません。"
  },
  {
    "id": 1502,
    "word": "สวรรณภูมิ",
    "meaning": "スワンナプーム",
    "pronunciation": "su-wan-na-phuum",
    "frequency": "7回中1回",
    "exampleTh": "สนามบินสุวรรณภูมิเป็นสนามบินนานาชาติ",
    "exampleJa": "スワンナプーム空港は国際空港です。"
  },
  {
    "id": 1503,
    "word": "สูญเสีย",
    "meaning": "失う、喪失する",
    "pronunciation": "sǔun-sǐia",
    "frequency": "7回中1回",
    "exampleTh": "เขาเสียใจที่ต้องสูญเสียสัตว์เลี้ยงไป",
    "exampleJa": "彼はペットを失って悲しんでいます。"
  },
  {
    "id": 1504,
    "word": "สูบ",
    "meaning": "吸う、ポンプで汲む",
    "pronunciation": "sùup",
    "frequency": "7回中1回",
    "exampleTh": "เขาเลิกสูบบุหรี่เพื่อสุขภาพของครอบครัว",
    "exampleJa": "彼は家族の健康のために禁煙しました。"
  },
  {
    "id": 1505,
    "word": "เสมอ",
    "meaning": "いつも、常に",
    "pronunciation": "sa-mǒe",
    "frequency": "7回中1回",
    "exampleTh": "แม่คอยเป็นห่วงและดูแลฉันอยู่เสมอ",
    "exampleJa": "母はいつも私を気遣い、見守ってくれます。"
  },
  {
    "id": 1506,
    "word": "เสริม",
    "meaning": "補う、強化する",
    "pronunciation": "sǒem",
    "frequency": "7回中1回",
    "exampleTh": "เราควรทานวิตามินเพื่อเสริมภูมิคุ้มกัน",
    "exampleJa": "免疫力を高めるためにビタミンを摂取すべきです。"
  },
  {
    "id": 1507,
    "word": "เสียดาย",
    "meaning": "残念に思う、惜しむ",
    "pronunciation": "sǐia-daai",
    "frequency": "7回中1回",
    "exampleTh": "ฉันรู้สึกเสียดายที่ไม่ได้ไปร่วมงานเลี้ยง",
    "exampleJa": "パーティーに参加できなくて残念に思います。"
  },
  {
    "id": 1508,
    "word": "โสด",
    "meaning": "独身の",
    "pronunciation": "sòot",
    "frequency": "7回中1回",
    "exampleTh": "ตอนนี้เขายังโสดและตั้งใจทำงานมาก",
    "exampleJa": "彼は現在まだ独身で、仕事にとても熱心に取り組んでいます。"
  },
  {
    "id": 1509,
    "word": "ไส้",
    "meaning": "腸、中身、芯",
    "pronunciation": "sâi",
    "frequency": "7回中1回",
    "exampleTh": "ขนมปังนี้มีไส้ครีมหวานอร่อย",
    "exampleJa": "このパンには甘くて美味しいクリームが入っています。"
  },
  {
    "id": 1510,
    "word": "ไส้ติ่ง",
    "meaning": "盲腸、虫垂",
    "pronunciation": "sâi-tìng",
    "frequency": "7回中1回",
    "exampleTh": "เขาต้องผ่าตัดด่วนเพราะไส้ติ่งอักเสบ",
    "exampleJa": "彼は虫垂炎のため緊急手術を受けなければなりませんでした。"
  },
  {
    "id": 1511,
    "word": "หงุดหงิด",
    "meaning": "イライラする",
    "pronunciation": "ngùt-ngìt",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้เขารู้สึกหงุดหงิดเพราะอากาศร้อน",
    "exampleJa": "今日は暑いので彼はイライラしている。"
  },
  {
    "id": 1512,
    "word": "หญิง",
    "meaning": "女性",
    "pronunciation": "yǐng",
    "frequency": "7回中1回",
    "exampleTh": "ผู้หญิงคนนั้นเป็นครูสอนภาษาไทย",
    "exampleJa": "あの女性はタイ語の先生です。"
  },
  {
    "id": 1513,
    "word": "หน่อย",
    "meaning": "少し、〜してください",
    "pronunciation": "nòi",
    "frequency": "7回中1回",
    "exampleTh": "ช่วยเปิดประตูให้หน่อยได้ไหมครับ",
    "exampleJa": "ドアを開けてくれませんか。"
  },
  {
    "id": 1514,
    "word": "หนังสือพิมพ์",
    "meaning": "新聞",
    "pronunciation": "nǎng-sǔu-phim",
    "frequency": "7回中1回",
    "exampleTh": "พ่อชอบอ่านหนังสือพิมพ์ตอนเช้า",
    "exampleJa": "父は朝に新聞を読むのが好きです。"
  },
  {
    "id": 1515,
    "word": "หนังสือเรียน",
    "meaning": "教科書",
    "pronunciation": "nǎng-sǔu-rian",
    "frequency": "7回中1回",
    "exampleTh": "อย่าลืมเอาหนังสือเรียนมาโรงเรียนนะ",
    "exampleJa": "学校に教科書を持ってくるのを忘れないでね。"
  },
  {
    "id": 1516,
    "word": "หนา",
    "meaning": "厚い",
    "pronunciation": "nǎa",
    "frequency": "7回中1回",
    "exampleTh": "หนังสือเล่มนี้หนาและหนักมาก",
    "exampleJa": "この本はとても厚くて重いです。"
  },
  {
    "id": 1517,
    "word": "หนี",
    "meaning": "逃げる",
    "pronunciation": "nǐi",
    "frequency": "7回中1回",
    "exampleTh": "ขโมยวิ่งหนีตำรวจไปอย่างรวดเร็ว",
    "exampleJa": "泥棒は警察���ら素早く逃げ去った。"
  },
  {
    "id": 1518,
    "word": "หม้อ",
    "meaning": "鍋",
    "pronunciation": "mɔ̂ɔ",
    "frequency": "7回中1回",
    "exampleTh": "แม่กำลังต้มซุปในหม้อใบใหญ่",
    "exampleJa": "母は大きな鍋でスープを煮ています。"
  },
  {
    "id": 1519,
    "word": "หมอดู",
    "meaning": "占い師",
    "pronunciation": "mɔ̌ɔ-duu",
    "frequency": "7回中1回",
    "exampleTh": "หมอดูบอกว่าฉันจะเจอเนื้อคู่ปีนี้",
    "exampleJa": "占い師は私が今年運命の人に出会うと言った。"
  },
  {
    "id": 1520,
    "word": "หม้อหุงข้าว",
    "meaning": "炊飯器",
    "pronunciation": "mɔ̂ɔ-hǔng-khâaw",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเพิ่งซื้อหม้อหุงข้าวเครื่องใหม่",
    "exampleJa": "私は新しい炊飯器を買ったばかりです。"
  },
  {
    "id": 1521,
    "word": "หมั้น",
    "meaning": "婚約する",
    "pronunciation": "mân",
    "frequency": "7回中1回",
    "exampleTh": "พวกเขาหมั้นกันเมื่อเดือนที่แล้ว",
    "exampleJa": "彼らは先月婚約しました。"
  },
  {
    "id": 1522,
    "word": "หมา",
    "meaning": "犬",
    "pronunciation": "mǎa",
    "frequency": "7回中1回",
    "exampleTh": "หมาตัวนั้นเห่าเสียงดังตอนกลางคืน",
    "exampleJa": "あの犬は夜に大きな声で吠える。"
  },
  {
    "id": 1523,
    "word": "หมุน",
    "meaning": "回す",
    "pronunciation": "mǔn",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาหมุนลูกบิดประตูเพื่อเปิด",
    "exampleJa": "ドアノブを回して開けてください。"
  },
  {
    "id": 1524,
    "word": "หมุนรอบ",
    "meaning": "自転する",
    "pronunciation": "mǔn-rɔ̂ɔp",
    "frequency": "7回中1回",
    "exampleTh": "โลกหมุนรอบตัวเองใช้เวลาหนึ่งวัน",
    "exampleJa": "地球は1日かけて自転します。"
  },
  {
    "id": 1525,
    "word": "หมู่บ้าน",
    "meaning": "村、住宅地",
    "pronunciation": "mùu-bâan",
    "frequency": "7回中1回",
    "exampleTh": "หมู่บ้านของฉันเงียบสงบและน่าอยู่",
    "exampleJa": "私の村は静かで住みやすいです。"
  },
  {
    "id": 1526,
    "word": "หยิบ",
    "meaning": "手に取る",
    "pronunciation": "yìp",
    "frequency": "7回中1回",
    "exampleTh": "ช่วยหยิบปากกาบนโต๊ะให้หน่อย��รับ",
    "exampleJa": "机の上のペンを取ってください。"
  },
  {
    "id": 1527,
    "word": "หรือว่าก็",
    "meaning": "あるいは、それとも",
    "pronunciation": "rʉ̌ʉ-wâa-gɔ̂",
    "frequency": "7回中1回",
    "exampleTh": "จะไปกินข้าวหรือว่าก็กลับบ้านเลยดี",
    "exampleJa": "ご飯を食べに行くか、それとももう家に帰るのがいいか。"
  },
  {
    "id": 1528,
    "word": "หลอด",
    "meaning": "ストロー",
    "pronunciation": "lɔ̀ɔt",
    "frequency": "7回中1回",
    "exampleTh": "ขอหลอดสำหรับดื่มน้ำส้มหน่อยค่ะ",
    "exampleJa": "オレンジジュース用のストローをください。"
  },
  {
    "id": 1529,
    "word": "หลอดไฟ",
    "meaning": "電球",
    "pronunciation": "lɔ̀ɔt-fai",
    "frequency": "7回中1回",
    "exampleTh": "หลอดไฟในห้องนั่งเล่นเสียแล้ว",
    "exampleJa": "リビングの電球が切れてしまいました。"
  },
  {
    "id": 1530,
    "word": "หลัก",
    "meaning": "原則、基本",
    "pronunciation": "làk",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องเข้าใจหลักการทำงานของมัน",
    "exampleJa": "私たちはその��組みの原則を理解しなければならない。"
  },
  {
    "id": 1531,
    "word": "หลักประกัน",
    "meaning": "保証、担保",
    "pronunciation": "làk-pra-kan",
    "frequency": "7回中1回",
    "exampleTh": "เงินฝากนี้ใช้เป็นหลักประกันได้",
    "exampleJa": "この預金は担保として使用できます。"
  },
  {
    "id": 1532,
    "word": "หลับ",
    "meaning": "眠る、寝る",
    "pronunciation": "làp",
    "frequency": "7回中1回",
    "exampleTh": "เมื่อคืนนี้นอนหลับสบายดีไหม",
    "exampleJa": "昨夜はよく眠れましたか？"
  },
  {
    "id": 1533,
    "word": "ห่วง",
    "meaning": "心配する、気にかける",
    "pronunciation": "hùang",
    "frequency": "7回中1回",
    "exampleTh": "แม่เป็นห่วงสุขภ���พของลูกเสมอ",
    "exampleJa": "母はいつも子供の健康を心配している。"
  },
  {
    "id": 1534,
    "word": "หว่าง",
    "meaning": "間、すき間",
    "pronunciation": "wàang",
    "frequency": "7回中1回",
    "exampleTh": "เขานั่งอยู่ระหว่างเพื่อนสองคน",
    "exampleJa": "彼は2人の友達の間に座っている。"
  },
  {
    "id": 1535,
    "word": "หวานอมเปรี้ยว",
    "meaning": "甘酸っぱい",
    "pronunciation": "wǎan-om-prîao",
    "frequency": "7回中1回",
    "exampleTh": "มะม่วงลูกนี้มีรสหวานอมเปรี้ยว",
    "exampleJa": "このマンゴーは甘酸っぱい味がする。"
  },
  {
    "id": 1536,
    "word": "หอม",
    "meaning": "いい匂いがする、香る",
    "pronunciation": "hǒom",
    "frequency": "7回中1回",
    "exampleTh": "ดอกไม้ในสวนส่งกลิ่นหอมชื่นใจ",
    "exampleJa": "庭の花が心地よい良い香りを漂わせている。"
  },
  {
    "id": 1537,
    "word": "หัด",
    "meaning": "練習する、習う",
    "pronunciation": "hàt",
    "frequency": "7回中1回",
    "exampleTh": "น้องสาวกำลังหัดขับรถยนต์อยู่",
    "exampleJa": "妹は今、車の運転を練習している。"
  },
  {
    "id": 1538,
    "word": "หัวใจ",
    "meaning": "心臓、心",
    "pronunciation": "hǔa-cai",
    "frequency": "7回中1回",
    "exampleTh": "เสียงหัวใจเต้นแรงเมื่อตื่นเต้น",
    "exampleJa": "緊張すると心臓の鼓動が激しくなる。"
  },
  {
    "id": 1539,
    "word": "หัวเราะ",
    "meaning": "笑う",
    "pronunciation": "hǔa-ró",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราหัวเราะกับมุกตลกของเขา",
    "exampleJa": "私たちは彼のジョークに笑った。"
  },
  {
    "id": 1540,
    "word": "หากว่า",
    "meaning": "もし〜なら",
    "pronunciation": "hàak-wâa",
    "frequency": "7回中1回",
    "exampleTh": "หากว่าฝนตก เราจะยกเลิกงานนี้",
    "exampleJa": "もし雨が降れば、このイベントは中止します。"
  },
  {
    "id": 1541,
    "word": "ห้าง",
    "meaning": "デパート、店",
    "pronunciation": "hâang",
    "frequency": "7回中1回",
    "exampleTh": "วันเสาร์นี้จะไปเดินเล่นที่ห้าง",
    "exampleJa": "今週の土曜日はデパートに遊びに行きます。"
  },
  {
    "id": 1542,
    "word": "หาด",
    "meaning": "ビーチ、浜辺",
    "pronunciation": "hàat",
    "frequency": "7回中1回",
    "exampleTh": "พวกเราไปเดินเล่นที่หาดตอนเย็น",
    "exampleJa": "私たちは夕方にビーチを散歩した。"
  },
  {
    "id": 1543,
    "word": "หาดหราย",
    "meaning": "砂浜",
    "pronunciation": "hàat-saai",
    "frequency": "7回中1回",
    "exampleTh": "เด็กๆ ชอบเล่นก่อกองทรายบนหาดหราย",
    "exampleJa": "子供たちは砂浜で砂の城を作るのが好きだ。"
  },
  {
    "id": 1544,
    "word": "หายป่วย",
    "meaning": "病気が治る、回復する",
    "pronunciation": "hǎai-pùai",
    "frequency": "7回中1回",
    "exampleTh": "ขอให้คุณหายป่วยเร็วๆ นี้นะครับ",
    "exampleJa": "早く病気が治りますように。"
  },
  {
    "id": 1545,
    "word": "หายห่วง",
    "meaning": "心配がなくなる、安心する",
    "pronunciation": "hǎai-hùang",
    "frequency": "7回中1回",
    "exampleTh": "พอรู้ว่าเขาปลอดภัยก็หายห่วงเลย",
    "exampleJa": "彼が無事だと知って、すっかり安心した。"
  },
  {
    "id": 1546,
    "word": "หิว",
    "meaning": "お腹が空く",
    "pronunciation": "hǐu",
    "frequency": "7回中1回",
    "exampleTh": "ตอนนี้หิว��้าวมาก อยากกินราเมน",
    "exampleJa": "今とてもお腹が空いているので、ラーメンが食べたい。"
  },
  {
    "id": 1547,
    "word": "หุง",
    "meaning": "（米を）炊く",
    "pronunciation": "hǔng",
    "frequency": "7回中1回",
    "exampleTh": "แม่กำลังหุงข้าวอยู่ในห้องครัว",
    "exampleJa": "母は台所でご飯を炊いている。"
  },
  {
    "id": 1548,
    "word": "เหงา",
    "meaning": "寂しい",
    "pronunciation": "ngǎo",
    "frequency": "7回中1回",
    "exampleTh": "อยู่บ้านคนเดียวรู้สึกเหงาจังเลย",
    "exampleJa": "一人で家にいると、とても寂しく感じる。"
  },
  {
    "id": 1549,
    "word": "เหงื่อ",
    "meaning": "汗",
    "pronunciation": "ngùea",
    "frequency": "7回中1回",
    "exampleTh": "วิ่งเสร็จแล้วเหงื่อออกเต็มตัวเลย",
    "exampleJa": "走り終わった後、全身に汗をかいた。"
  },
  {
    "id": 1550,
    "word": "เหตุการณ์",
    "meaning": "出来事、事件、状況",
    "pronunciation": "hèet-gàan",
    "frequency": "7回中1回",
    "exampleTh": "ตำรวจกำลังสอบสวนเหตุการณ์ที่เกิดขึ้น",
    "exampleJa": "警察は起きた事件を捜査している。"
  },
  {
    "id": 1551,
    "word": "เหนียวตัว",
    "meaning": "体がベタベタする",
    "pronunciation": "nǐao-tua",
    "frequency": "7回中1回",
    "exampleTh": "อากาศร้อนทำให้รู้สึกเหนียวตัว",
    "exampleJa": "暑い天気で体がベタベタする。"
  },
  {
    "id": 1552,
    "word": "เหนือ",
    "meaning": "北、上",
    "pronunciation": "nǔea",
    "frequency": "7回中1回",
    "exampleTh": "เชียงใหม่อยู่ทางภาคเหนือของไทย",
    "exampleJa": "チェンマイはタイの北部にあります。"
  },
  {
    "id": 1553,
    "word": "เหม็น",
    "meaning": "臭い",
    "pronunciation": "měn",
    "frequency": "7回中1回",
    "exampleTh": "ขยะพวกนี้ส่งกลิ่นเ��ม็นมาก",
    "exampleJa": "これらのゴミはとても臭い。"
  },
  {
    "id": 1554,
    "word": "เมล้า",
    "meaning": "疲れ果てる",
    "pronunciation": "mûeai-láa",
    "frequency": "7回中1回",
    "exampleTh": "เขารู้สึกเมื่อยล้าจากการทำงานหนัก",
    "exampleJa": "彼は重労働で疲れ果てている。"
  },
  {
    "id": 1555,
    "word": "เหล่านั้น",
    "meaning": "それらの",
    "pronunciation": "lào-nán",
    "frequency": "7回中1回",
    "exampleTh": "หนังสือเหล่านั้นเป็นของฉันเอง",
    "exampleJa": "それらの本は私のものです。"
  },
  {
    "id": 1556,
    "word": "แห่ง",
    "meaning": "〜の、場所",
    "pronunciation": "hàeng",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำงานที่ธนาคารแห่งหนึ่ง",
    "exampleJa": "彼はある銀行で働いています。"
  },
  {
    "id": 1557,
    "word": "แหล่ง",
    "meaning": "場所、起源",
    "pronunciation": "lèang",
    "frequency": "7回中1回",
    "exampleTh": "ที่นี่เป็นแหล่งท่องเที่ยวที่มีชื่อเสียง",
    "exampleJa": "ここは有名な観光地です。"
  },
  {
    "id": 1558,
    "word": "ให้กั��",
    "meaning": "〜に与える",
    "pronunciation": "hâi-gàp",
    "frequency": "7回中1回",
    "exampleTh": "ฉันมอบของขวัญชิ้นนี้ให้กับเขา",
    "exampleJa": "私はこのプレゼントを彼に贈りました。"
  },
  {
    "id": 1559,
    "word": "ให้มา",
    "meaning": "くれる",
    "pronunciation": "hâi-maa",
    "frequency": "7回中1回",
    "exampleTh": "นี่คือเงินที่แม่ให้มาเมื่อวาน",
    "exampleJa": "これは昨日母がくれたお金です。"
  },
  {
    "id": 1560,
    "word": "ให้ยืม",
    "meaning": "貸す",
    "pronunciation": "hâi-yuem",
    "frequency": "7回中1回",
    "exampleTh": "คุณช่วยให้ฉันยืมปากกาหน่อยได้ไหม",
    "exampleJa": "ペンを貸していただけませんか？"
  },
  {
    "id": 1561,
    "word": "ไหม",
    "meaning": "〜ですか",
    "pronunciation": "mǎi",
    "frequency": "7回中1回",
    "exampleTh": "คุณสบายดีไหมครับ",
    "exampleJa": "お元気ですか？"
  },
  {
    "id": 1562,
    "word": "ไหม้",
    "meaning": "燃える、焦げる",
    "pronunciation": "mâi",
    "frequency": "7回中1回",
    "exampleTh": "ฉันได้กลิ่นเหมือนมีอะไรไหม้",
    "exampleJa": "何か��焦げているような臭いがします。"
  },
  {
    "id": 1563,
    "word": "ไหล",
    "meaning": "流れる",
    "pronunciation": "lǎi",
    "frequency": "7回中1回",
    "exampleTh": "น้ำในแม่น้ำไหลแรงมากวันนี้",
    "exampleJa": "今日は川の水が激しく流れている。"
  },
  {
    "id": 1564,
    "word": "ไหว้",
    "meaning": "合掌する",
    "pronunciation": "wâi",
    "frequency": "7回中1回",
    "exampleTh": "คนไทยมักจะไหว้เพื่อทักทายกัน",
    "exampleJa": "タイ人は挨拶をするために合掌します。"
  },
  {
    "id": 1565,
    "word": "อด",
    "meaning": "我慢する、絶つ",
    "pronunciation": "òt",
    "frequency": "7回中1回",
    "exampleTh": "เขาต้องอดอาหารก่อนไปตรวจร่างกาย",
    "exampleJa": "彼は健康診断の前に絶食しなければならない。"
  },
  {
    "id": 1566,
    "word": "อดทน",
    "meaning": "耐える",
    "pronunciation": "òt-thon",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องอดทนต่อความยากลำบาก",
    "exampleJa": "私たちは困難に耐えなければならない。"
  },
  {
    "id": 1567,
    "word": "อธิบาย",
    "meaning": "説明する",
    "pronunciation": "à-thí-baai",
    "frequency": "7回中1回",
    "exampleTh": "ครูช่วยอธิบายบทเรียนนี้อีกครั้ง",
    "exampleJa": "先生、このレッスンをもう一度説明してください。"
  },
  {
    "id": 1568,
    "word": "อนาคต",
    "meaning": "未来、将来",
    "pronunciation": "à-naa-khót",
    "frequency": "7回中1回",
    "exampleTh": "ฉันอยากเป็นหมอในอนาคต",
    "exampleJa": "私は将来医者になりたいです。"
  },
  {
    "id": 1569,
    "word": "อนุญาต",
    "meaning": "許可する",
    "pronunciation": "à-nú-yâat",
    "frequency": "7回中1回",
    "exampleTh": "คุณพ่ออนุญาตให้ฉันไปเที่ยวได้",
    "exampleJa": "父は私が旅行に行くのを許可してくれた。"
  },
  {
    "id": 1570,
    "word": "อบ",
    "meaning": "焼く、蒸す",
    "pronunciation": "òp",
    "frequency": "7回中1回",
    "exampleTh": "แม่กำลังอบเค้กอยู่ในครัว",
    "exampleJa": "母は台所でケーキを焼いています。"
  },
  {
    "id": 1571,
    "word": "เอ็มโพเรียม",
    "meaning": "エンポリアム",
    "pronunciation": "em-phoo-riam",
    "frequency": "7回中1回",
    "exampleTh": "ฉันไปช้อปปิ้งที่เอ็มโพเรียมบ่อยๆ",
    "exampleJa": "私はよくエンポリアムに買い物に行きます。"
  },
  {
    "id": 1572,
    "word": "เอาแต่",
    "meaning": "〜ばかりする",
    "pronunciation": "ao-tàe",
    "frequency": "7回中1回",
    "exampleTh": "เขาเอาแต่เล่นเกมไม่ยอมทำการบ้าน",
    "exampleJa": "彼は宿題をしないでゲームばかりしている。"
  },
  {
    "id": 1573,
    "word": "เอาแต่ใจตัวเอง",
    "meaning": "わがままな",
    "pronunciation": "ao-tàe-cai-tua-eeng",
    "frequency": "7回中1回",
    "exampleTh": "อย่าเอาแต่ใจตัวเองให้มากนักเลย",
    "exampleJa": "あまりわがままを言わないでください。"
  },
  {
    "id": 1574,
    "word": "แอโรบิก",
    "meaning": "エアロビクス",
    "pronunciation": "ae-roo-bìk",
    "frequency": "7回中1回",
    "exampleTh": "แม่ชอบไปเต้นแอโรบิกที่สวนสาธารณะ",
    "exampleJa": "母は公園にエアロビクスを踊りに行くのが好きです。"
  },
  {
    "id": 1575,
    "word": "แออัด",
    "meaning": "混雑した",
    "pronunciation": "ae-àt",
    "frequency": "7回中1回",
    "exampleTh": "รถไฟในตอนเช้ามีคนแออัดมาก",
    "exampleJa": "朝の電車は人がとても混雑しています。"
  },
  {
    "id": 1576,
    "word": "แอ็ะ",
    "meaning": "えっ",
    "pronunciation": "ae",
    "frequency": "7回中1回",
    "exampleTh": "แอ็ะ! ทำไมเธอถึงทำแบบนั้นล่ะ",
    "exampleJa": "えっ！どうしてそんなことをするの？"
  },
  {
    "id": 1577,
    "word": "โอ",
    "meaning": "おお",
    "pronunciation": "oo",
    "frequency": "7回中1回",
    "exampleTh": "โอ! สวยงามมากจริงๆ",
    "exampleJa": "おお！���当にとても美しいですね。"
  },
  {
    "id": 1578,
    "word": "โอซาก้า",
    "meaning": "大阪",
    "pronunciation": "oo-saa-gâa",
    "frequency": "7回中1回",
    "exampleTh": "ปีหน้าฉันอยากไปเที่ยวที่โอซาก้า",
    "exampleJa": "来年、私は大阪に旅行に行きたいです。"
  },
  {
    "id": 1579,
    "word": "โอน",
    "meaning": "譲渡する",
    "pronunciation": "oon",
    "frequency": "7回中1回",
    "exampleTh": "เขาโอนกรรมสิทธิ์บ้านให้ลูกชาย",
    "exampleJa": "彼は家の所有権を息子に譲渡した。"
  },
  {
    "id": 1580,
    "word": "โอนเงิน",
    "meaning": "送金する",
    "pronunciation": "oon-ngoen",
    "frequency": "7回中1回",
    "exampleTh": "ฉันโอนเงินค่าสินค้าให้คุณแล้ว",
    "exampleJa": "商品代金をあなたに送金しました。"
  },
  {
    "id": 1581,
    "word": "ฮ่องกง",
    "meaning": "香港",
    "pronunciation": "hông-gong",
    "frequency": "7回中1回",
    "exampleTh": "ครอบครัวเราจะไปเที่ยวฮ่องกงเดือนหน้า",
    "exampleJa": "私たちの家族は来月香港に旅行に行きます。"
  },
  {
    "id": 1582,
    "word": "บาท",
    "meaning": "バーツ（通貨）",
    "pronunciation": "bàat",
    "frequency": "7回中1回",
    "exampleTh": "ก๋วยเตี๋ยวชามนี้ราคาห้าสิบบาท",
    "exampleJa": "この麺料理は50バーツです。"
  },
  {
    "id": 1583,
    "word": "บ้านเกิด",
    "meaning": "故郷",
    "pronunciation": "bâan-kòet",
    "frequency": "7回中1回",
    "exampleTh": "ฉันคิดถึงบ้านเกิดที่อยู่ต่างจังหวัด",
    "exampleJa": "地方にある故郷が恋しいです。"
  },
  {
    "id": 1584,
    "word": "บ้านสวน",
    "meaning": "庭付きの家",
    "pronunciation": "bâan-sǔan",
    "frequency": "7回中1回",
    "exampleTh": "เขาชอบไปพักผ่อนที่บ้านสวนวันหยุด",
    "exampleJa": "彼は休日に庭付きの家で休むのが好きです。"
  },
  {
    "id": 1585,
    "word": "บ้านหลังใหญ่",
    "meaning": "大きな家",
    "pronunciation": "bâan-lǎng-yài",
    "frequency": "7回中1回",
    "exampleTh": "ครอบครัวของเขาอาศัยอยู่ในบ้านหลังใหญ่",
    "exampleJa": "彼の家族は大きな家に住んでいます。"
  },
  {
    "id": 1586,
    "word": "บุหรี่",
    "meaning": "タバコ",
    "pronunciation": "bù-rìi",
    "frequency": "7回中1回",
    "exampleTh": "การสูบบุหรี่เป็นอันตรายต่อสุขภาพ",
    "exampleJa": "喫煙は健康に害を及ぼします。"
  },
  {
    "id": 1587,
    "word": "เบอร์",
    "meaning": "番号",
    "pronunciation": "bəə",
    "frequency": "7回中1回",
    "exampleTh": "คุณช่วยบอกเบอร์ห้องให้ฉันหน่อยได้ไหม",
    "exampleJa": "部屋番号を教えていただけますか。"
  },
  {
    "id": 1588,
    "word": "เบอร์โทรศัพท์",
    "meaning": "電話番号",
    "pronunciation": "bəə-thoo-rá-sàp",
    "frequency": "7回中1回",
    "exampleTh": "ขอเบอร์โทรศัพท์ของคุณไ��้ติดต่อได้ไหม",
    "exampleJa": "連絡用に電話番号を教えてもらえますか。"
  },
  {
    "id": 1589,
    "word": "เบียด",
    "meaning": "押し合う",
    "pronunciation": "bìat",
    "frequency": "7回中1回",
    "exampleTh": "คนบนรถไฟฟ้าเบียดกันมากในตอนเช้า",
    "exampleJa": "朝の電車は人がとても押し合っています。"
  },
  {
    "id": 1590,
    "word": "เบียร์",
    "meaning": "ビール",
    "pronunciation": "bia",
    "frequency": "7回中1回",
    "exampleTh": "เขาชอบดื่มเบียร์เย็นๆ หลังเลิกงาน",
    "exampleJa": "彼は仕事終わりに冷えたビールを飲むのが好きです。"
  },
  {
    "id": 1591,
    "word": "เบี้ยเลี้ยง",
    "meaning": "手当",
    "pronunciation": "bîia-líang",
    "frequency": "7回中1回",
    "exampleTh": "พนักงานได้รับเบี้ยเลี้ยงสำหรับการเดินทาง",
    "exampleJa": "従業員は出張手当を受け取りました。"
  },
  {
    "id": 1592,
    "word": "เบื่อ",
    "meaning": "飽きる",
    "pronunciation": "bùea",
    "frequency": "7回中1回",
    "exampleTh": "ฉันเบื่อกับการทำงานแบบเดิมทุกวัน",
    "exampleJa": "毎日同じ仕事をするのに飽きてしまいました。"
  },
  {
    "id": 1593,
    "word": "แบ่ง",
    "meaning": "分ける",
    "pronunciation": "bèeng",
    "frequency": "7回中1回",
    "exampleTh": "ช่วยแบ่งขนมให้เพื่อนๆ กินด้วยนะ",
    "exampleJa": "友達にもお菓子を分けてあげてください。"
  },
  {
    "id": 1594,
    "word": "แบบ",
    "meaning": "型、スタイル",
    "pronunciation": "bèep",
    "frequency": "7回中1回",
    "exampleTh": "คุณชอบเสื้อผ้าแบบไหนมากกว่ากัน",
    "exampleJa": "あなたはどんなスタイルの服が好きですか。"
  },
  {
    "id": 1595,
    "word": "แบบฝึกหัด",
    "meaning": "練習問題",
    "pronunciation": "bèep-fʉ̀k-hàt",
    "frequency": "7回中1回",
    "exampleTh": "นักเรียนกำลังทำแบบฝึกหัดภาษาไทย",
    "exampleJa": "生徒たちはタイ語の練習問題を解いています。"
  },
  {
    "id": 1596,
    "word": "ใบ",
    "meaning": "葉、枚（類別詞）",
    "pronunciation": "bai",
    "frequency": "7回中1回",
    "exampleTh": "ต้นไม้นี้มีใบสีเขียวสดใสมาก",
    "exampleJa": "この木はとても鮮やかな緑色の葉をしています。"
  },
  {
    "id": 1597,
    "word": "ใบเมเปิ้ล",
    "meaning": "カエデの葉",
    "pronunciation": "bai-mee-pə̂en",
    "frequency": "7回中1回",
    "exampleTh": "ใบเมเปิ้ลเปลี่ยนเป็นสีแดงในฤดูใบไม้ร่วง",
    "exampleJa": "秋になるとカエデの葉が赤く変わります。"
  },
  {
    "id": 1598,
    "word": "ปกติ",
    "meaning": "普通、通常",
    "pronunciation": "pòk-kà-tì",
    "frequency": "7回中1回",
    "exampleTh": "โดยปกติแล้วฉันจะตื่นนอนตอนหกโมง",
    "exampleJa": "普段は6時に起床します。"
  },
  {
    "id": 1599,
    "word": "ปฏิทิน",
    "meaning": "カレンダー",
    "pronunciation": "pà-tì-thin",
    "frequency": "7回中1回",
    "exampleTh": "ฉันทำเครื่องหมายวันหยุดไว้ในปฏิทิน",
    "exampleJa": "カレンダーに休日をマークしました。"
  },
  {
    "id": 1600,
    "word": "ประกอบ",
    "meaning": "組み立てる",
    "pronunciation": "prà-kòp",
    "frequency": "7回中1回",
    "exampleTh": "เขาช่วยกันประกอบเฟอร์นิเจอร์ที่ซื้อมา",
    "exampleJa": "彼らは買ってきた家具を協力して組み立てました。"
  },
  {
    "id": 1601,
    "word": "ประกอบอาชีพ",
    "meaning": "職業に就く",
    "pronunciation": "prà-kòp-aa-chîip",
    "frequency": "7回中1回",
    "exampleTh": "เขาประกอบอาชีพเป็นครูสอนภาษา",
    "exampleJa": "彼は語学教師という職業に就いています。"
  },
  {
    "id": 1602,
    "word": "ประจำปี",
    "meaning": "年次、毎年の",
    "pronunciation": "prà-cam-pii",
    "frequency": "7回中1回",
    "exampleTh": "บริษัทมีการประชุมผู้ถือหุ้นประจำปีในเดือนนี้",
    "exampleJa": "会社は今月、年次株主総会を行います。"
  },
  {
    "id": 1603,
    "word": "ประชากร",
    "meaning": "人口",
    "pronunciation": "prà-chaa-gɔɔn",
    "frequency": "7回中1回",
    "exampleTh": "ประเทศไทยมีจำนวนประชากรประมาณ 70 ล้านคน",
    "exampleJa": "タイの人口は約7000万人です。"
  },
  {
    "id": 1604,
    "word": "ประชาชน",
    "meaning": "国民、市民",
    "pronunciation": "prà-chaa-chon",
    "frequency": "7回中1回",
    "exampleTh": "ประชาชนทุกคนมีสิทธิ์ในการแสดงความคิดเห็น",
    "exampleJa": "国民全員に意見を表明する権利があります。"
  },
  {
    "id": 1605,
    "word": "ประชาสัมพันธ์",
    "meaning": "広報、案内",
    "pronunciation": "prà-chaa-sǎm-phan",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาติดต่อสอบถามที่แผนกประชาสัมพันธ์",
    "exampleJa": "広報部門にお問い合わせください。"
  },
  {
    "id": 1606,
    "word": "ประทับ",
    "meaning": "押す、刻印する",
    "pronunciation": "prà-tháp",
    "frequency": "7回中1回",
    "exampleTh": "เจ้าหน้าที่ประทับตราลงในหนังสือเดินทาง",
    "exampleJa": "係官がパスポートにスタンプを押した。"
  },
  {
    "id": 1607,
    "word": "ประเทศญี่ปุ่น",
    "meaning": "日本国",
    "pronunciation": "prà-thêet-yîi-pùn",
    "frequency": "7回中1回",
    "exampleTh": "ฉันอยากไปเที่ยวประเทศญี่ปุ่นในช่วงฤดูหนาว",
    "exampleJa": "冬に日本へ旅行に行きたいです。"
  },
  {
    "id": 1608,
    "word": "ประเทศต่างๆ",
    "meaning": "各国の、諸国",
    "pronunciation": "prà-thêet-tàang-tàang",
    "frequency": "7回中1回",
    "exampleTh": "มีการแลกเปลี่ยนวัฒนธรรมระหว่างประเทศต่างๆ",
    "exampleJa": "各国の間で文化交流が行われている。"
  },
  {
    "id": 1609,
    "word": "ประธาน",
    "meaning": "議長、会長、大統領",
    "pronunciation": "prà-thaan",
    "frequency": "7回中1回",
    "exampleTh": "ประธานในที่ประชุมกล่าวเปิดงานอย่างเป็นทางการ",
    "exampleJa": "会議の議長が正式に開会の挨拶をした。"
  },
  {
    "id": 1610,
    "word": "ประธานบริษัท",
    "meaning": "社長、会長",
    "pronunciation": "prà-thaan-bɔɔ-rí-sàt",
    "frequency": "7回中1回",
    "exampleTh": "ประธานบริษัทตัดสินใจขยายสาขาไปต่างประเทศ",
    "exampleJa": "社長は海外への支店拡大を決定した。"
  },
  {
    "id": 1611,
    "word": "ประปา",
    "meaning": "水道",
    "pronunciation": "prà-paa",
    "frequency": "7回中1回",
    "exampleTh": "ค่าน้ำประปาเดือนนี้แพงกว่าเดือนที่แล้ว",
    "exampleJa": "今月の水道代は先月より高い。"
  },
  {
    "id": 1612,
    "word": "ประเพณี",
    "meaning": "伝統、慣習",
    "pronunciation": "prà-phee-nii",
    "frequency": "7回中1回",
    "exampleTh": "สงกรานต์เป็นประเพณีที่สำคัญของไทย",
    "exampleJa": "ソンクラーンはタイの重要な伝統行事です。"
  },
  {
    "id": 1613,
    "word": "ประเภท",
    "meaning": "種類、タイプ",
    "pronunciation": "prà-phêet",
    "frequency": "7回中1回",
    "exampleTh": "คุณชอบหนังสือประเภทไหนมากที่สุด",
    "exampleJa": "あなたはどんな種類の本が一番好きですか。"
  },
  {
    "id": 1614,
    "word": "ประมง",
    "meaning": "漁業",
    "pronunciation": "prà-mong",
    "frequency": "7回中1回",
    "exampleTh": "ชาวบ้านในหมู่บ้านนี้ประกอบอาชีพประมง",
    "exampleJa": "この村の住民は漁業を営んでいる。"
  },
  {
    "id": 1615,
    "word": "ประโยค",
    "meaning": "文、文章",
    "pronunciation": "prà-yòok",
    "frequency": "7回中1回",
    "exampleTh": "ลองแต่งประโยคภาษาไทยด้วยคำนี้ดูสิ",
    "exampleJa": "この単語を使っ���タイ語の文を作ってみて。"
  },
  {
    "id": 1616,
    "word": "ประวัติ",
    "meaning": "履歴、経歴",
    "pronunciation": "prà-wàt",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาส่งประวัติส่วนตัวมาที่อีเมลนี้",
    "exampleJa": "履歴書をこのメールアドレスに送ってください。"
  },
  {
    "id": 1617,
    "word": "ประวัติศาสตร์",
    "meaning": "歴史",
    "pronunciation": "prà-wàt-tì-sàat",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบเรียนวิชาประวัติศาสตร์มาก",
    "exampleJa": "私は歴史の授業を学ぶのがとても好きです。"
  },
  {
    "id": 1618,
    "word": "ประสบ",
    "meaning": "遭遇する、経験する",
    "pronunciation": "prà-sòp",
    "frequency": "7回中1回",
    "exampleTh": "เขาประสบอุบัติเหตุระหว่างทางกลับบ้าน",
    "exampleJa": "彼は帰宅途中に事故に遭った。"
  },
  {
    "id": 1619,
    "word": "ประสบความสำเร็จ",
    "meaning": "成功する",
    "pronunciation": "prà-sòp-khwaam-sǎm-rèt",
    "frequency": "7回中1回",
    "exampleTh": "เขาทำงานหนักจนประสบความสำเร็จในชีวิต",
    "exampleJa": "彼は一生懸命働いて人生で成功を収めた。"
  },
  {
    "id": 1620,
    "word": "ประสิทธิภาพ",
    "meaning": "効率、性能",
    "pronunciation": "prà-sìt-thì-phâap",
    "frequency": "7回中1回",
    "exampleTh": "เครื่องจักรนี้ช่วยเพิ่มประสิทธิภาพการผลิต",
    "exampleJa": "この機械は生産効率を高めるのに役立つ。"
  },
  {
    "id": 1621,
    "word": "ปรับตัว",
    "meaning": "適応する、調整する",
    "pronunciation": "pràp-tua",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องปรับตัวให้เข้ากับสถานการณ์ใหม่",
    "exampleJa": "私たちは新しい状況に適応しなければならない。"
  },
  {
    "id": 1622,
    "word": "อพาร์ตเมนต์",
    "meaning": "アパート",
    "pronunciation": "a-paat-mên",
    "frequency": "7回中1回",
    "exampleTh": "ฉันอาศัยอยู่ในอพาร์ตเมนต์ใกล้สถานีรถไฟฟ้า",
    "exampleJa": "私は駅の近くのアパートに住んでいます。"
  },
  {
    "id": 1623,
    "word": "อย่างนั้น",
    "meaning": "そのように",
    "pronunciation": "yàang-nán",
    "frequency": "7回中1回",
    "exampleTh": "ถ้าคุณคิดอย่างนั้น ก็ทำตามใจชอบเลย",
    "exampleJa": "もしあなたがそう思うなら、好きにしてください。"
  },
  {
    "id": 1624,
    "word": "อย่างมาก",
    "meaning": "非常に、せいぜい",
    "pronunciation": "yàang-mâak",
    "frequency": "7回中1回",
    "exampleTh": "งานนี้จะใช้เวลาอย่างมากไม่เกินสองชั่วโมง",
    "exampleJa": "この仕事はせいぜい2時間以内には終わります。"
  },
  {
    "id": 1625,
    "word": "อย่างยิ่ง",
    "meaning": "極めて、非常に",
    "pronunciation": "yàang-yîng",
    "frequency": "7回中1回",
    "exampleTh": "เรื่องนี้มีความสำคัญอย่างยิ่งต่อบริษัท",
    "exampleJa": "この件は会社にとって極めて重要です。"
  },
  {
    "id": 1626,
    "word": "อย่างหนัก",
    "meaning": "激しく、重く",
    "pronunciation": "yàang-nàk",
    "frequency": "7回中1回",
    "exampleTh": "ฝนตกอย่างหนักตลอดทั้งคืนที่ผ่านมา",
    "exampleJa": "昨晩は一晩中、雨が激しく降りました。"
  },
  {
    "id": 1627,
    "word": "อยู่แล้ว",
    "meaning": "当然、すでに",
    "pronunciation": "yùu-láew",
    "frequency": "7回中1回",
    "exampleTh": "ฉันรู้เรื่องนี้อยู่แล้ว ไม่ต้องบอกหรอก",
    "exampleJa": "そのことはもう知っています、言わなくていいですよ。"
  },
  {
    "id": 1628,
    "word": "อ๋อ",
    "meaning": "ああ（納得）",
    "pronunciation": "ǒo",
    "frequency": "7回中1回",
    "exampleTh": "อ๋อ เข้าใจแล้วครับ ขอบคุณที่อธิบาย",
    "exampleJa": "ああ、わかりました。説明してくれてありがとう。"
  },
  {
    "id": 1629,
    "word": "ออกแบบ",
    "meaning": "設計する、デザインする",
    "pronunciation": "òok-bàep",
    "frequency": "7回中1回",
    "exampleTh": "เขาเป็นคนออกแบบบ้านหลังนี้ด้วยตัวเอง",
    "exampleJa": "彼はこの家を自分で設計しました。"
  },
  {
    "id": 1630,
    "word": "ออกไป",
    "meaning": "外へ出る",
    "pronunciation": "òok-pai",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ฉันจะออกไปซื้อของที่ห้างสรรพสินค้า",
    "exampleJa": "今日はデパートへ買い物に出かけます。"
  },
  {
    "id": 1631,
    "word": "ออกมา",
    "meaning": "外へ出てくる",
    "pronunciation": "òok-maa",
    "frequency": "7回中1回",
    "exampleTh": "เขารีบวิ่งออกมาจากบ้านเมื่อได้ยินเสียงเรียก",
    "exampleJa": "呼び声を聞いて、彼は急いで���から出てきました。"
  },
  {
    "id": 1632,
    "word": "ออกเสียง",
    "meaning": "発音する",
    "pronunciation": "òok-sǐang",
    "frequency": "7回中1回",
    "exampleTh": "คำนี้ออกเสียงยากมากสำหรับคนต่างชาติ",
    "exampleJa": "この単語は外国人にとって発音がとても難しいです。"
  },
  {
    "id": 1633,
    "word": "อ่อน",
    "meaning": "柔らかい、弱い",
    "pronunciation": "òn",
    "frequency": "7回中1回",
    "exampleTh": "ฉันชอบดื่มกาแฟรสอ่อนมากกว่ารสเข้ม",
    "exampleJa": "私は濃いコーヒーより薄いコーヒーが好きです。"
  },
  {
    "id": 1634,
    "word": "ออม",
    "meaning": "貯金する",
    "pronunciation": "oom",
    "frequency": "7回中1回",
    "exampleTh": "เราควรเริ่มออมเงินตั้งแต่วันนี้เพื่ออนาคต",
    "exampleJa": "将来のために今日から貯金を始めるべきです。"
  },
  {
    "id": 1635,
    "word": "ออสเตรเลีย",
    "meaning": "オーストラリア",
    "pronunciation": "òot-tree-lia",
    "frequency": "7回中1回",
    "exampleTh": "ปีหน้าฉันวางแผนจะไปเที่ยวที่ออสเตรเลีย",
    "exampleJa": "来年、オーストラリアへ旅行する計画です。"
  },
  {
    "id": 1636,
    "word": "อักเสบ",
    "meaning": "炎症を起こす",
    "pronunciation": "àk-sèep",
    "frequency": "7回中1回",
    "exampleTh": "คอของฉันอักเสบทำให้กลืนอาหารลำบาก",
    "exampleJa": "喉が炎症を起こしていて、食べ物を飲み込むのが辛いです。"
  },
  {
    "id": 1637,
    "word": "อัด",
    "meaning": "詰める、録音する",
    "pronunciation": "àt",
    "frequency": "7回中1回",
    "exampleTh": "เขากำลังอัดเสียงการบรรยายในห้องเรียน",
    "exampleJa": "彼は教室での講義を録音しています。"
  },
  {
    "id": 1638,
    "word": "อัตโนมัติ",
    "meaning": "自動の",
    "pronunciation": "àt-tà-noo-mát",
    "frequency": "7回中1回",
    "exampleTh": "ประตูนี้เป็นระบบเปิดปิดอัตโนมัติ",
    "exampleJa": "このドアは自動開閉システムです。"
  },
  {
    "id": 1639,
    "word": "อันดับ",
    "meaning": "順位、ランク",
    "pronunciation": "an-dàp",
    "frequency": "7回中1回",
    "exampleTh": "ทีมฟุตบอลนี้อยู่อันดับหนึ่งของตาราง",
    "exampleJa": "このサッカーチームは順位表で1位です。"
  },
  {
    "id": 1640,
    "word": "อาอาการป่วย",
    "meaning": "病状",
    "pronunciation": "aa-gaan-pùay",
    "frequency": "7回中1回",
    "exampleTh": "หมอตรวจดูอาการป่วยของคนไข้อย่างละเอียด",
    "exampleJa": "医者は患者の病状を詳しく診察しました。"
  },
  {
    "id": 1641,
    "word": "ดาคาร",
    "meaning": "ダカール（都市名）",
    "pronunciation": "daa-khaan",
    "frequency": "7回中1回",
    "exampleTh": "ดาคารเป็นเมืองหลวงของประเทศเซเนกัล",
    "exampleJa": "ダカールはセネガルの首都です。"
  },
  {
    "id": 1642,
    "word": "อาจจะ",
    "meaning": "たぶん、〜かもしれない",
    "pronunciation": "àat-cà",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้ฝนอาจจะตกหนักในช่วงบ่าย",
    "exampleJa": "今日は午後から大雨が降るかもしれません。"
  },
  {
    "id": 1643,
    "word": "อาบ",
    "meaning": "浴びる",
    "pronunciation": "àap",
    "frequency": "7回中1回",
    "exampleTh": "เขาชอบอาบแสงแดดที่ชายหาด",
    "exampleJa": "彼はビーチで日光を浴びるのが好きです。"
  },
  {
    "id": 1644,
    "word": "อาบแดด",
    "meaning": "日光浴する",
    "pronunciation": "àap-dàet",
    "frequency": "7回中1回",
    "exampleTh": "นักท่องเที่ยวช��บมานอนอาบแดดที่นี่",
    "exampleJa": "観光客はここで日光浴をして寝るのが好きです。"
  },
  {
    "id": 1645,
    "word": "อาบน้ำ",
    "meaning": "シャワーを浴びる",
    "pronunciation": "àap-náam",
    "frequency": "7回中1回",
    "exampleTh": "ฉันอาบน้ำก่อนไปทำงานทุกเช้า",
    "exampleJa": "私は毎朝仕事に行く前にシャワーを浴びます。"
  },
  {
    "id": 1646,
    "word": "อาหารเช้า",
    "meaning": "朝食",
    "pronunciation": "aa-hǎan-cháo",
    "frequency": "7回中1回",
    "exampleTh": "คุณทานอาหารเช้าหรือยังครับ",
    "exampleJa": "朝食はもう食べましたか？"
  },
  {
    "id": 1647,
    "word": "อาหารทะเล",
    "meaning": "海鮮料理",
    "pronunciation": "aa-hǎan-tha-lee",
    "frequency": "7回中1回",
    "exampleTh": "ร้านนี้มีอาหารทะเลสดใหม่ทุกวัน",
    "exampleJa": "この店には毎日新鮮な海鮮料理があります。"
  },
  {
    "id": 1648,
    "word": "อาหารเย็น",
    "meaning": "夕食",
    "pronunciation": "aa-hǎan-yen",
    "frequency": "7回中1回",
    "exampleTh": "เย็นนี้เราไปทานอาหารเย็นกันเถอะ",
    "exampleJa": "今晩は一緒に夕食を食べに行きましょう。"
  },
  {
    "id": 1649,
    "word": "อิจฉา",
    "meaning": "羨ましい、嫉妬する",
    "pronunciation": "ìt-chǎa",
    "frequency": "7回中1回",
    "exampleTh": "ฉันอิจฉาที่คุณได้ไปเที่ยวต่างประเทศ",
    "exampleJa": "あなたが海外旅行に行けるなんて羨ましいです。"
  },
  {
    "id": 1650,
    "word": "อินเดีย",
    "meaning": "インド",
    "pronunciation": "in-dia",
    "frequency": "7回中1回",
    "exampleTh": "ฉันอยากไปเที่ยวประเทศอินเดียสักครั้ง",
    "exampleJa": "一度インドへ旅行に行ってみたいです。"
  },
  {
    "id": 1651,
    "word": "อิ่ม",
    "meaning": "満腹",
    "pronunciation": "ìm",
    "frequency": "7回中1回",
    "exampleTh": "กินข้าวเยอะมากจนอิ่มแปล้เลย",
    "exampleJa": "ご飯をたくさん食べてお腹がいっぱいです。"
  },
  {
    "id": 1652,
    "word": "อีกด้วย",
    "meaning": "〜もまた",
    "pronunciation": "ìik-dûai",
    "frequency": "7回中1回",
    "exampleTh": "เขาทั้งฉลาดและใจดีอีกด้วย",
    "exampleJa": "彼は賢いだけでなく、親切でもあります��"
  },
  {
    "id": 1653,
    "word": "อีกทั้ง",
    "meaning": "さらに、その上",
    "pronunciation": "ìik-tháng",
    "frequency": "7回中1回",
    "exampleTh": "งานนี้ยาก อีกทั้งยังมีเวลาจำกัด",
    "exampleJa": "この仕事は難しく、さらに時間も限られています。"
  },
  {
    "id": 1654,
    "word": "อืม",
    "meaning": "うん、ええと",
    "pronunciation": "uem",
    "frequency": "7回中1回",
    "exampleTh": "อืม ผมคิดว่ามันน่าจะเป็นแบบนั้นนะ",
    "exampleJa": "うん、私はそれがそうなるだろうと思います。"
  },
  {
    "id": 1655,
    "word": "อุณหภูมิ",
    "meaning": "温度、気温",
    "pronunciation": "un-ná-phuum",
    "frequency": "7回中1回",
    "exampleTh": "วันนี้อุณหภูมิสูงถึง 35 องศา",
    "exampleJa": "今日の気温は35度に達しています。"
  },
  {
    "id": 1656,
    "word": "อุดม",
    "meaning": "豊か、豊富",
    "pronunciation": "u-dom",
    "frequency": "7回中1回",
    "exampleTh": "ประเทศไทยเป็นดินแดนที่อุดมสมบูรณ์",
    "exampleJa": "タイは豊かな土地です。"
  },
  {
    "id": 1657,
    "word": "อุดมไปด้วย",
    "meaning": "〜に富んでいる",
    "pronunciation": "u-dom-pai-dûai",
    "frequency": "7回中1回",
    "exampleTh": "ผักชนิดนี้อุดมไปด้วยวิตามินซี",
    "exampleJa": "この野菜はビタミンCが豊富です。"
  },
  {
    "id": 1658,
    "word": "อุบัติ",
    "meaning": "発生する、起こる",
    "pronunciation": "u-bàt",
    "frequency": "7回中1回",
    "exampleTh": "เหตุการณ์นี้อุบัติขึ้นอย่างกะทันหัน",
    "exampleJa": "この出来事は突然発生しました。"
  },
  {
    "id": 1659,
    "word": "อุปกรณ์",
    "meaning": "道具、機器",
    "pronunciation": "ùp-pa-kɔ̌ɔn",
    "frequency": "7回中1回",
    "exampleTh": "กรุณาเตรียมอุปกรณ์การเรียนมาให้พร้อม",
    "exampleJa": "学習用具を準備してきてください。"
  },
  {
    "id": 1660,
    "word": "อุปสรรค",
    "meaning": "障害、困難",
    "pronunciation": "ùp-pa-sàk",
    "frequency": "7回中1回",
    "exampleTh": "เราต้องร่วมมือกันฝ่าฟันอุปสรรคนี้ไป",
    "exampleJa": "私たちは協力してこの障害を乗り越えなければなりません。"
  },
  {
    "id": 1661,
    "word": "เอกสาร",
    "meaning": "書類",
    "pronunciation": "èek-ka-sǎan",
    "frequency": "7回中1回",
    "exampleTh": "ช่วยตรวจสอบเอกสารนี้ให้หน่อยครับ",
    "exampleJa": "この書類を確認していただけますか。"
  }
];
