import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Award, 
  RotateCcw, 
  Home, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Bookmark, 
  ChevronDown, 
  ChevronUp, 
  Filter,
  Sparkles,
  TrendingUp,
  Lightbulb
} from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function ResultsView({
  results,
  onRetake,
  onPracticeMistakes,
  onNavigateHome,
  onToggleBookmark,
  bookmarkedIds
}) {
  const [activeReviewFilter, setActiveReviewFilter] = useState('all'); // 'all' | 'incorrect' | 'correct'
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const {
    questions,
    userAnswers,
    correctCount,
    totalQuestions,
    scorePercentage,
    timeSpentSeconds,
    topicBreakdown,
    track,
    mode
  } = results;

  const passed = scorePercentage >= 70;
  const mastery = scorePercentage >= 90;

  useEffect(() => {
    soundFx.playComplete();
    if (passed) {
      // Trigger festive confetti explosion
      const duration = 2.5 * 1000;
      const animationEnd = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#6366f1', '#00d8ff', '#facc15', '#10b981']
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#6366f1', '#00d8ff', '#facc15', '#10b981']
        });

        if (Date.now() < animationEnd) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [passed]);

  const toggleExpand = (id) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  const filteredQuestions = questions.filter((q, idx) => {
    const isCorrect = userAnswers[idx] === q.correctAnswer;
    if (activeReviewFilter === 'correct') return isCorrect;
    if (activeReviewFilter === 'incorrect') return !isCorrect;
    return true;
  });

  const incorrectCount = totalQuestions - correctCount;

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Score Summary Showcase Card */}
      <div className="glass-panel" style={{
        padding: '36px 32px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        border: `1px solid ${passed ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
        background: `radial-gradient(circle at 50% 0%, ${passed ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)'} 0%, rgba(18, 26, 47, 0.95) 75%)`
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: passed ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
          border: `2px solid ${passed ? '#10b981' : '#ef4444'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
          boxShadow: passed ? '0 0 25px rgba(16, 185, 129, 0.4)' : '0 0 25px rgba(239, 68, 68, 0.4)'
        }}>
          {mastery ? (
            <Trophy size={36} color="#facc15" />
          ) : passed ? (
            <Award size={36} color="#10b981" />
          ) : (
            <RotateCcw size={36} color="#ef4444" />
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
          <span className={`badge ${mastery ? 'badge-intermediate' : passed ? 'badge-beginner' : 'badge-advanced'}`}>
            {mastery ? 'Mastery Level Achieved' : passed ? 'Examination Passed' : 'Needs Reinforcement'}
          </span>
        </div>

        <h1 style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '4px' }}>
          {scorePercentage}%
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '24px' }}>
          You scored <strong>{correctCount}</strong> out of <strong>{totalQuestions}</strong> questions correct
        </p>

        {/* Quick KPI stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '12px',
          maxWidth: '600px',
          margin: '0 auto 28px'
        }}>
          <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Correct</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10b981' }}>{correctCount}</p>
          </div>
          <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Incorrect</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ef4444' }}>{incorrectCount}</p>
          </div>
          <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Time Elapsed</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#38bdf8' }}>{formatTime(timeSpentSeconds)}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <button 
            className="btn-primary"
            onClick={() => { soundFx.playClick(); onRetake(); }}
          >
            <RotateCcw size={18} />
            Retake Exam
          </button>

          {incorrectCount > 0 && (
            <button 
              className="btn-secondary"
              onClick={() => { soundFx.playClick(); onPracticeMistakes(); }}
              style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#f87171' }}
            >
              <XCircle size={18} color="#ef4444" />
              Practice Missed ({incorrectCount} Qs)
            </button>
          )}

          <button 
            className="btn-secondary"
            onClick={() => { soundFx.playClick(); onNavigateHome(); }}
          >
            <Home size={18} />
            Home Dashboard
          </button>
        </div>
      </div>

      {/* Topic Mastery Breakdown */}
      {topicBreakdown && Object.keys(topicBreakdown).length > 0 && (
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TrendingUp size={20} color="var(--accent-primary)" />
            Topic-by-Topic Performance Analysis
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {Object.entries(topicBreakdown).map(([topicId, data]) => {
              const accuracy = Math.round((data.correct / data.total) * 100);
              return (
                <div 
                  key={topicId}
                  style={{
                    padding: '14px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f8fafc' }}>
                      {data.name}
                    </span>
                    <span style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: accuracy >= 70 ? '#10b981' : '#f59e0b'
                    }}>
                      {data.correct}/{data.total} ({accuracy}%)
                    </span>
                  </div>

                  <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${accuracy}%`,
                      height: '100%',
                      background: accuracy >= 70 ? '#10b981' : accuracy >= 40 ? '#f59e0b' : '#ef4444',
                      borderRadius: '3px'
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* In-Depth Question Corrections Review */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Detailed Answer Review</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Review complete explanations and key takeaways</p>
          </div>

          {/* Filter Pills */}
          <div style={{
            display: 'flex',
            background: 'rgba(15, 23, 42, 0.8)',
            padding: '4px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            gap: '4px'
          }}>
            <button
              onClick={() => setActiveReviewFilter('all')}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeReviewFilter === 'all' ? 'var(--accent-primary)' : 'transparent',
                color: activeReviewFilter === 'all' ? '#fff' : 'var(--text-secondary)'
              }}
            >
              All ({totalQuestions})
            </button>
            <button
              onClick={() => setActiveReviewFilter('incorrect')}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeReviewFilter === 'incorrect' ? 'rgba(239, 68, 68, 0.25)' : 'transparent',
                color: activeReviewFilter === 'incorrect' ? '#f87171' : 'var(--text-secondary)'
              }}
            >
              Missed ({incorrectCount})
            </button>
            <button
              onClick={() => setActiveReviewFilter('correct')}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeReviewFilter === 'correct' ? 'rgba(16, 185, 129, 0.25)' : 'transparent',
                color: activeReviewFilter === 'correct' ? '#34d399' : 'var(--text-secondary)'
              }}
            >
              Correct ({correctCount})
            </button>
          </div>
        </div>

        {/* Questions Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredQuestions.map((q, idx) => {
            const originalIndex = questions.findIndex(orig => orig.id === q.id);
            const userChoice = userAnswers[originalIndex];
            const isCorrect = userChoice === q.correctAnswer;
            const isExpanded = expandedQuestions[q.id] !== undefined ? expandedQuestions[q.id] : !isCorrect; // Default expand mistakes
            const isBookmarked = bookmarkedIds.includes(q.id);

            return (
              <div 
                key={q.id}
                style={{
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.25)'}`,
                  overflow: 'hidden'
                }}
              >
                {/* Header Row */}
                <div 
                  onClick={() => toggleExpand(q.id)}
                  style={{
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    background: isCorrect ? 'rgba(16, 185, 129, 0.04)' : 'rgba(239, 68, 68, 0.04)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                    {isCorrect ? (
                      <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0 }} />
                    ) : (
                      <XCircle size={20} color="#ef4444" style={{ flexShrink: 0 }} />
                    )}

                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                        Q{originalIndex + 1} • {q.topicName}
                      </span>
                      <h4 style={{ fontSize: '0.96rem', fontWeight: 600, color: '#f8fafc', marginTop: '2px' }}>
                        {q.question}
                      </h4>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '12px' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(q.id);
                      }}
                      style={{ padding: '6px', color: isBookmarked ? 'var(--accent-primary)' : 'var(--text-muted)' }}
                      title="Bookmark Question"
                    >
                      <Bookmark size={16} fill={isBookmarked ? 'var(--accent-primary)' : 'none'} />
                    </button>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div style={{ padding: '20px', borderTop: '1px solid var(--border-subtle)', background: 'rgba(6, 9, 19, 0.5)' }}>
                    {q.code && (
                      <div className="code-block-wrapper" style={{ margin: '0 0 16px' }}>
                        <pre className="code-content">
                          <code>{q.code}</code>
                        </pre>
                      </div>
                    )}

                    {/* Options Breakdown */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                      {q.options.map((opt, optIdx) => {
                        const isThisCorrect = optIdx === q.correctAnswer;
                        const isThisUser = optIdx === userChoice;

                        let optBg = 'rgba(255, 255, 255, 0.03)';
                        let optBorder = 'var(--border-subtle)';
                        let optColor = 'var(--text-secondary)';

                        if (isThisCorrect) {
                          optBg = 'rgba(16, 185, 129, 0.15)';
                          optBorder = '#10b981';
                          optColor = '#ffffff';
                        } else if (isThisUser && !isThisCorrect) {
                          optBg = 'rgba(239, 68, 68, 0.15)';
                          optBorder = '#ef4444';
                          optColor = '#ffffff';
                        }

                        return (
                          <div
                            key={optIdx}
                            style={{
                              padding: '10px 14px',
                              borderRadius: '8px',
                              background: optBg,
                              border: `1px solid ${optBorder}`,
                              color: optColor,
                              fontSize: '0.9rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <span style={{ fontWeight: 700, opacity: 0.8 }}>
                                {String.fromCharCode(65 + optIdx)}.
                              </span>
                              <span>{opt}</span>
                            </div>

                            {isThisCorrect && (
                              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <CheckCircle2 size={14} /> Correct Answer
                              </span>
                            )}
                            {isThisUser && !isThisCorrect && (
                              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <XCircle size={14} /> Your Pick
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    <div style={{
                      padding: '14px',
                      borderRadius: '8px',
                      background: 'rgba(99, 102, 241, 0.08)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      marginBottom: q.tip ? '10px' : '0'
                    }}>
                      <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#e2e8f0' }}>
                        <strong style={{ color: '#a5b4fc' }}>Explanation: </strong>
                        {q.explanation}
                      </p>
                    </div>

                    {q.tip && (
                      <div style={{
                        padding: '10px 14px',
                        borderRadius: '8px',
                        background: 'rgba(245, 158, 11, 0.08)',
                        border: '1px solid rgba(245, 158, 11, 0.2)',
                        color: '#fef3c7',
                        fontSize: '0.84rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px'
                      }}>
                        <Lightbulb size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <strong style={{ color: '#fbbf24' }}>Pro Tip: </strong>
                          {q.tip}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
