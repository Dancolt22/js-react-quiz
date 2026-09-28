// LocalStorage persistence for user quiz progress, bookmarks, mistakes, and stats

const STORAGE_KEYS = {
  BOOKMARKS: 'evalforge_bookmarks',
  MISTAKES: 'evalforge_mistakes',
  STATS: 'evalforge_stats',
  HISTORY: 'evalforge_history',
  SETTINGS: 'evalforge_settings'
};

export const getStoredBookmarks = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

export const toggleStoredBookmark = (questionId) => {
  const bookmarks = getStoredBookmarks();
  let updated;
  if (bookmarks.includes(questionId)) {
    updated = bookmarks.filter(id => id !== questionId);
  } else {
    updated = [...bookmarks, questionId];
  }
  localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
  return updated;
};

export const getStoredMistakes = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MISTAKES);
    return raw ? JSON.parse(raw) : {}; // { [questionId]: { count: number, lastAttempt: string } }
  } catch (e) {
    return {};
  }
};

export const recordMistake = (questionId) => {
  const mistakes = getStoredMistakes();
  mistakes[questionId] = {
    count: (mistakes[questionId]?.count || 0) + 1,
    lastAttempt: new Date().toISOString()
  };
  localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(mistakes));
};

export const resolveMistake = (questionId) => {
  const mistakes = getStoredMistakes();
  if (mistakes[questionId]) {
    delete mistakes[questionId];
    localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(mistakes));
  }
};

export const getStoredStats = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STATS);
    return raw ? JSON.parse(raw) : {
      totalAnswered: 0,
      totalCorrect: 0,
      examsCompleted: 0,
      currentStreak: 0,
      bestStreak: 0,
      topicStats: {} // { [topicId]: { answered: number, correct: number } }
    };
  } catch (e) {
    return {
      totalAnswered: 0,
      totalCorrect: 0,
      examsCompleted: 0,
      currentStreak: 0,
      bestStreak: 0,
      topicStats: {}
    };
  }
};

export const updateStoredStats = (sessionResults) => {
  const stats = getStoredStats();
  const { totalQuestions, correctCount, topicBreakdown, isExam } = sessionResults;

  stats.totalAnswered += totalQuestions;
  stats.totalCorrect += correctCount;
  if (isExam) {
    stats.examsCompleted += 1;
  }

  // Update topic breakdown
  if (topicBreakdown) {
    Object.entries(topicBreakdown).forEach(([topicId, data]) => {
      if (!stats.topicStats[topicId]) {
        stats.topicStats[topicId] = { answered: 0, correct: 0 };
      }
      stats.topicStats[topicId].answered += data.total;
      stats.topicStats[topicId].correct += data.correct;
    });
  }

  // Update streak
  if (correctCount === totalQuestions && totalQuestions >= 5) {
    stats.currentStreak += 1;
    if (stats.currentStreak > stats.bestStreak) {
      stats.bestStreak = stats.currentStreak;
    }
  }

  localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));

  // Save to history
  const history = getStoredHistory();
  history.unshift({
    id: 'hist_' + Date.now(),
    date: new Date().toISOString(),
    track: sessionResults.track,
    mode: sessionResults.mode,
    totalQuestions,
    correctCount,
    scorePercentage: Math.round((correctCount / totalQuestions) * 100),
    timeSpentSeconds: sessionResults.timeSpentSeconds || 0
  });

  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history.slice(0, 30))); // Keep last 30
  return stats;
};

export const getStoredHistory = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

export const getStoredSettings = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return raw ? JSON.parse(raw) : { sound: true, instantFeedback: true, keyboardNav: true };
  } catch (e) {
    return { sound: true, instantFeedback: true, keyboardNav: true };
  }
};

export const saveStoredSettings = (settings) => {
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
};
