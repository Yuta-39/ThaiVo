import React, { useState } from 'react';
import { vocabulary } from './data/vocabulary';
import HomeScreen from './components/HomeScreen';
import WordListScreen from './components/WordListScreen';
import TypingScreen from './components/TypingScreen';
import IchiNikkiScreen from './components/IchiNikkiScreen';

type AppView = 'home' | 'wordList' | 'typing' | 'ichiNikki';

const ALL_FILTER_LEVELS = [
  '7回中7回',
  '7回中6回',
  '7回中5回',
  '7回中4回',
  '7回中3回',
  '7回中2回',
  '7回中1回',
];

const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [isRandom, setIsRandom] = useState(false);
  const [isTimeLimit, setIsTimeLimit] = useState(false);
  const [hideMeanings, setHideMeanings] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(ALL_FILTER_LEVELS);
  const [practiceLimit, setPracticeLimit] = useState<number | 'all'>(50);
  const [sessionItems, setSessionItems] = useState<{ id: number; word: string; meaning: string; pronunciation: string; frequency: string; exampleTh: string; exampleJa: string; originalIndex: number }[]>([]);
  const [sessionIndex, setSessionIndex] = useState(0);

  // ゲーム要素：現在の連続正解数（コンボ）のみを管理
  const [combo, setCombo] = useState(0);

  // フィルタ適用後の単語リスト（元のインデックス付き）
  const filteredItems = vocabulary
    .map((item, originalIndex) => ({ ...item, originalIndex }))
    .filter(item => selectedFilters.includes(item.frequency));

  // ホームで３級を選択 -> ３級の単語一覧画面へ
  const handleStartWordList = () => {
    setView('wordList');
    setCombo(0);
  };

  // 単語一覧画面で任意の単語を選択 -> タイピング画面へ
  const handleSelectWord = (originalIndex: number) => {
    const startIdx = filteredItems.findIndex(item => item.originalIndex === originalIndex);
    if (startIdx === -1) return;

    let list = [];
    if (isRandom) {
      const remaining = filteredItems.filter((_, idx) => idx !== startIdx);
      list = [filteredItems[startIdx], ...shuffleArray(remaining)];
    } else {
      list = filteredItems.slice(startIdx);
    }

    if (practiceLimit !== 'all') {
      list = list.slice(0, practiceLimit);
    }

    setSessionItems(list);
    setSessionIndex(0);
    setView('typing');
  };

  // 「スタート」ボタン: フィルター済みリストから件数制限を適用してタイピング開始
  const handleStartFromRandom = () => {
    if (filteredItems.length === 0) return;
    
    let list = [...filteredItems];
    if (isRandom) {
      list = shuffleArray(list);
    }
    
    if (practiceLimit !== 'all') {
      list = list.slice(0, practiceLimit);
    }
    
    setSessionItems(list);
    setSessionIndex(0);
    setView('typing');
  };

  // タイピング画面から「一覧に戻る」 -> 単語一覧画面へ
  const handleBackToWordList = () => {
    setView('wordList');
    setCombo(0);
  };

  // 単語一覧画面から「ホームへ戻る」 -> レベル選択画面へ
  const handleBackToHome = () => {
    setView('home');
    setCombo(0);
  };

  // 単語クリア時の判定（完璧に打てたらコンボ追加、間違えたらリセット）
  const handleCompleteWord = (isPerfect: boolean) => {
    if (isPerfect) {
      setCombo(prev => prev + 1);
    } else {
      setCombo(0);
    }
  };

  // 次の単語へ（セッションリスト内で遷移する）
  const handleNext = () => {
    if (sessionIndex + 1 < sessionItems.length) {
      setSessionIndex(prev => prev + 1);
    } else {
      // 制限後の最後まで終わったら一覧へ戻る
      setView('wordList');
    }
  };

  return (
    <>
      {view === 'home' && (
        <HomeScreen onStart={handleStartWordList} />
      )}
      {view === 'wordList' && (
        <WordListScreen
          items={vocabulary}
          levelLabel="３級"
          selectedFilters={selectedFilters}
          onToggleFilter={setSelectedFilters}
          onSelectWord={handleSelectWord}
          onBackToHome={handleBackToHome}
          isRandom={isRandom}
          onToggleRandom={setIsRandom}
          isTimeLimit={isTimeLimit}
          onToggleTimeLimit={setIsTimeLimit}
          onStart={handleStartFromRandom}
          filteredCount={filteredItems.length}
          practiceLimit={practiceLimit}
          onChangePracticeLimit={setPracticeLimit}
          hideMeanings={hideMeanings}
          onToggleHideMeanings={setHideMeanings}
          onStartIchiNikki={() => setView('ichiNikki')}
        />
      )}
      {view === 'ichiNikki' && (
        <IchiNikkiScreen
          vocabulary={vocabulary}
          onBack={() => setView('wordList')}
        />
      )}
      {view === 'typing' && sessionItems[sessionIndex] && (
        <TypingScreen
          key={sessionIndex}
          item={sessionItems[sessionIndex]}
          wordId={sessionItems[sessionIndex].id}
          currentIndex={sessionIndex}
          totalCount={sessionItems.length}
          isRandom={isRandom}
          onToggleRandom={setIsRandom}
          isTimeLimit={isTimeLimit}
          combo={combo}
          onCompleteWord={handleCompleteWord}
          onBack={handleBackToWordList}
          onNext={handleNext}
          hideMeanings={hideMeanings}
        />
      )}
    </>
  );
};

export default App;
