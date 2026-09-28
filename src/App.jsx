import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header.jsx';
import HomeScreen from './components/HomeScreen.jsx';
import QuizCard from './components/QuizCard.jsx';
import ExamPalette from './components/ExamPalette.jsx';
import ResultsView from './components/ResultsView.jsx';
import TopicExplorer from './components/TopicExplorer.jsx';
import StatsModal from './components/StatsModal.jsx';
import BookmarksModal from './components/BookmarksModal.jsx';
import MistakesModal from './components/MistakesModal.jsx';

import { JAVASCRIPT_QUESTIONS } from './data/javascriptQuestions.js';
import { REACT_QUESTIONS } from './data/reactQuestions.js';
import { JS_TOPICS, REACT_TOPICS } from './data/topicsData.js';

import { soundFx } from './utils/sound.js';
import { 
  getStoredBookmarks, 
  toggleStoredBookmark, 
  getStoredMistakes, 
  recordMistake, 
  resolveMistake, 
  getStoredStats, 
  updateStoredStats, 
  getStoredHistory,
  getStoredSettings,
  saveStoredSettings
} from './utils/storage.js';

export default function App() {
  // App navigation and track state
  const [track, setTrack] = useState('javascript'); // 'javascript' | 'react'
  const [activeView, setActiveView] = useState('home'); // 'home' | 'quiz' | 'results'
  const [quizMode, setQuizMode] = useState('exam'); // 'exam' | 'practice' | 'sprint' | 'mistakes' | 'bookmarks'

  // Quiz active session state
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flaggedIndices, setFlaggedIndices] = useState([]);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [sessionResults, setSessionResults] = useState(null);

  // Timer state (seconds)
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [sessionStartTime, setSessionStartTime] = useState(0);

  // Modals & Drawers
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isTopicExplorerOpen, setIsTopicExplorerOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isMistakesOpen, setIsMistakesOpen] = useState(false);

  // Stored state
  const [bookmarks, setBookmarks] = useState(getStoredBookmarks());
  const [mistakes, setMistakes] = useState(getStoredMistakes());
  const [stats, setStats] = useState(getStoredStats());
  const [history, setHistory] = useState(getStoredHistory());
  const [soundMuted, setSoundMuted] = useState(false);

  // Load sound settings
  useEffect(() => {
    const settings = getStoredSettings();
    if (settings && settings.sound !== undefined) {
      setSoundMuted(!settings.sound);
      soundFx.setMuted(!settings.sound);
    }
  }, []);

  // Timer interval for exam mode
  useEffect(() => {
    let interval = null;
    if (activeView === 'quiz' && quizMode === 'exam' && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            handleFinishExam(); // Auto-submit when time expires
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeView, quizMode, timeRemaining, userAnswers, quizQuestions]);

  const handleToggleSound = () => {
    const newMuted = !soundMuted;
    setSoundMuted(newMuted);
    soundFx.setMuted(newMuted);
    saveStoredSettings({ sound: !newMuted });
  };

  // Helper: Shuffle array
  const shuffleArray = (arr) => {
    const clone = [...arr];
    for (let i = clone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
  };

  const getActiveQuestionBank = () => {
    return track === 'javascript' ? JAVASCRIPT_QUESTIONS : REACT_QUESTIONS;
  };

  const getActiveTopics = () => {
    return track === 'javascript' ? JS_TOPICS : REACT_TOPICS;
  };

  // Start Exam Mode
  const handleStartExam = (count = 50) => {
    const bank = getActiveQuestionBank();
    const shuffled = shuffleArray(bank).slice(0, Math.min(count, bank.length));
    
    setQuizQuestions(shuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedIndices([]);
    setIsAnswerSubmitted(false);
    setQuizMode('exam');
    setTimeRemaining(shuffled.length * 60); // 60s per question
    setSessionStartTime(Date.now());
    setActiveView('quiz');
  };

  // Start Topic Practice Mode
  const handleStartPractice = (topicId = 'all') => {
    const bank = getActiveQuestionBank();
    let filtered = bank;
    if (topicId !== 'all') {
      filtered = bank.filter(q => q.topicId === topicId);
    }
    const randomized = shuffleArray(filtered);

    setQuizQuestions(randomized.length > 0 ? randomized : bank.slice(0, 20));
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedIndices([]);
    setIsAnswerSubmitted(false);
    setQuizMode('practice');
    setTimeRemaining(0);
    setSessionStartTime(Date.now());
    setActiveView('quiz');
  };

  // Start 10-Question Speed Sprint
  const handleStartSprint = () => {
    const bank = getActiveQuestionBank();
    const shuffled = shuffleArray(bank).slice(0, 10);

    setQuizQuestions(shuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedIndices([]);
    setIsAnswerSubmitted(false);
    setQuizMode('sprint');
    setTimeRemaining(0);
    setSessionStartTime(Date.now());
    setActiveView('quiz');
  };

  // Start Mistakes Drill
  const handleStartMistakes = () => {
    const allBank = [...JAVASCRIPT_QUESTIONS, ...REACT_QUESTIONS];
    const mistakeIds = Object.keys(mistakes);
    const filtered = allBank.filter(q => mistakeIds.includes(q.id));

    if (filtered.length === 0) return;

    setQuizQuestions(shuffleArray(filtered));
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedIndices([]);
    setIsAnswerSubmitted(false);
    setQuizMode('mistakes');
    setTimeRemaining(0);
    setSessionStartTime(Date.now());
    setActiveView('quiz');
  };

  // Start Bookmarks Drill
  const handleStartBookmarks = () => {
    const allBank = [...JAVASCRIPT_QUESTIONS, ...REACT_QUESTIONS];
    const filtered = allBank.filter(q => bookmarks.includes(q.id));

    if (filtered.length === 0) return;

    setQuizQuestions(shuffleArray(filtered));
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedIndices([]);
    setIsAnswerSubmitted(false);
    setQuizMode('bookmarks');
    setTimeRemaining(0);
    setSessionStartTime(Date.now());
    setActiveView('quiz');
  };

  // Option selection
  const handleSelectAnswer = (optionIdx) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIdx
    }));

    // In non-exam modes, record / resolve mistake immediately
    const currentQ = quizQuestions[currentIndex];
    if (quizMode !== 'exam' && currentQ) {
      if (optionIdx === currentQ.correctAnswer) {
        resolveMistake(currentQ.id);
        setMistakes(getStoredMistakes());
      } else {
        recordMistake(currentQ.id);
        setMistakes(getStoredMistakes());
      }
    }
  };

  const handleSubmitAnswer = () => {
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsAnswerSubmitted(userAnswers[currentIndex + 1] !== undefined);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsAnswerSubmitted(userAnswers[currentIndex - 1] !== undefined);
    }
  };

  const handleToggleFlag = () => {
    soundFx.playClick();
    setFlaggedIndices(prev => {
      if (prev.includes(currentIndex)) {
        return prev.filter(i => i !== currentIndex);
      } else {
        return [...prev, currentIndex];
      }
    });
  };

  const handleToggleBookmark = (questionId) => {
    soundFx.playClick();
    const updated = toggleStoredBookmark(questionId);
    setBookmarks(updated);
  };

  // Finish exam and calculate score
  const handleFinishExam = () => {
    const total = quizQuestions.length;
    let correct = 0;
    const topicBreakdown = {};

    quizQuestions.forEach((q, idx) => {
      const isCorrect = userAnswers[idx] === q.correctAnswer;
      if (isCorrect) {
        correct += 1;
        resolveMistake(q.id);
      } else {
        recordMistake(q.id);
      }

      // Populate topic breakdown
      const tid = q.topicId || 'general';
      if (!topicBreakdown[tid]) {
        topicBreakdown[tid] = { name: q.topicName || tid, total: 0, correct: 0 };
      }
      topicBreakdown[tid].total += 1;
      if (isCorrect) {
        topicBreakdown[tid].correct += 1;
      }
    });

    setMistakes(getStoredMistakes());

    const timeSpent = Math.max(1, Math.round((Date.now() - sessionStartTime) / 1000));
    const scorePct = Math.round((correct / total) * 100);

    const results = {
      questions: quizQuestions,
      userAnswers,
      correctCount: correct,
      totalQuestions: total,
      scorePercentage: scorePct,
      timeSpentSeconds: timeSpent,
      topicBreakdown,
      track,
      mode: quizMode,
      isExam: quizMode === 'exam'
    };

    const updatedStats = updateStoredStats(results);
    setStats(updatedStats);
    setHistory(getStoredHistory());
    setSessionResults(results);
    setActiveView('results');
  };

  const currentQuestion = quizQuestions[currentIndex];
  const allBank = [...JAVASCRIPT_QUESTIONS, ...REACT_QUESTIONS];
  const bookmarkedQuestionObjs = allBank.filter(q => bookmarks.includes(q.id));
  const mistakeQuestionObjs = allBank.filter(q => Object.keys(mistakes).includes(q.id));

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navigation */}
      <Header
        currentTrack={track}
        onSelectTrack={(newTrack) => {
          setTrack(newTrack);
          if (activeView !== 'home') {
            setActiveView('home');
          }
        }}
        activeView={activeView}
        onNavigateHome={() => setActiveView('home')}
        bookmarksCount={bookmarks.length}
        mistakesCount={Object.keys(mistakes).length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenMistakes={() => setIsMistakesOpen(true)}
        onOpenStats={() => setIsStatsOpen(true)}
        onOpenTopics={() => setIsTopicExplorerOpen(true)}
        soundMuted={soundMuted}
        onToggleSound={handleToggleSound}
        totalJsQuestions={JAVASCRIPT_QUESTIONS.length}
        totalReactQuestions={REACT_QUESTIONS.length}
      />

      {/* Main Container */}
      <main className="app-container" style={{ flex: 1 }}>
        {activeView === 'home' && (
          <HomeScreen
            track={track}
            onStartExam={handleStartExam}
            onStartPractice={handleStartPractice}
            onStartSprint={handleStartSprint}
            onStartMistakes={handleStartMistakes}
            onStartBookmarks={handleStartBookmarks}
            onOpenTopics={() => setIsTopicExplorerOpen(true)}
            stats={stats}
            bookmarksCount={bookmarks.length}
            mistakesCount={Object.keys(mistakes).length}
            topics={getActiveTopics()}
            totalAvailableQuestions={getActiveQuestionBank().length}
          />
        )}

        {activeView === 'quiz' && currentQuestion && (
          <QuizCard
            question={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={quizQuestions.length}
            selectedAnswer={userAnswers[currentIndex]}
            onSelectAnswer={handleSelectAnswer}
            isAnswerSubmitted={isAnswerSubmitted}
            onSubmitAnswer={handleSubmitAnswer}
            onNextQuestion={handleNextQuestion}
            onPrevQuestion={handlePrevQuestion}
            isFlagged={flaggedIndices.includes(currentIndex)}
            onToggleFlag={handleToggleFlag}
            isBookmarked={bookmarks.includes(currentQuestion.id)}
            onToggleBookmark={() => handleToggleBookmark(currentQuestion.id)}
            mode={quizMode}
            onTogglePalette={() => setIsPaletteOpen(true)}
            timeRemaining={timeRemaining}
            isTimerRunning={activeView === 'quiz' && quizMode === 'exam'}
            onFinishExam={handleFinishExam}
          />
        )}

        {activeView === 'results' && sessionResults && (
          <ResultsView
            results={sessionResults}
            onRetake={() => {
              if (sessionResults.mode === 'exam') {
                handleStartExam(sessionResults.totalQuestions);
              } else {
                handleStartPractice();
              }
            }}
            onPracticeMistakes={() => {
              handleStartMistakes();
            }}
            onNavigateHome={() => setActiveView('home')}
            onToggleBookmark={handleToggleBookmark}
            bookmarkedIds={bookmarks}
          />
        )}
      </main>

      {/* Modals and Palettes */}
      <ExamPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        totalQuestions={quizQuestions.length}
        currentIndex={currentIndex}
        userAnswers={userAnswers}
        flaggedQuestions={flaggedIndices}
        onJumpToQuestion={(idx) => {
          setCurrentIndex(idx);
          setIsAnswerSubmitted(userAnswers[idx] !== undefined);
        }}
        onFinishExam={handleFinishExam}
        isExam={quizMode === 'exam'}
      />

      <TopicExplorer
        isOpen={isTopicExplorerOpen}
        onClose={() => setIsTopicExplorerOpen(false)}
        jsTopics={JS_TOPICS}
        reactTopics={REACT_TOPICS}
        onSelectTopic={(selectedTrack, topicId) => {
          setTrack(selectedTrack);
          handleStartPractice(topicId);
        }}
      />

      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        stats={stats}
        history={history}
      />

      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedQuestions={bookmarkedQuestionObjs}
        onRemoveBookmark={handleToggleBookmark}
        onStartBookmarksDrill={handleStartBookmarks}
      />

      <MistakesModal
        isOpen={isMistakesOpen}
        onClose={() => setIsMistakesOpen(false)}
        mistakeQuestions={mistakeQuestionObjs}
        onStartMistakesDrill={handleStartMistakes}
      />
    </div>
  );
}
