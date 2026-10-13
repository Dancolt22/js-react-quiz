import React, { useState } from 'react';
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
    topicBreakdown
  } = results;

  const passed = scorePercentage >= 70;
  const mastery = scorePercentage >= 90;

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
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      
      {/* Score Summary Showcase Card */}
      <div className="glass-panel" style={{
        padding: '32px 24px',
        textAlign: 'center',
        background: '#ffffff',
        border: '1px solid var(--border-primary)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: passed ? 'var(--success-bg)' : 'var(--error-bg)',
          border: `1.5px solid ${passed ? 'var(--success-border)' : 'var(--error-border)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 14px'
        }}>
          {mastery ? (
            <Trophy size={30} color="var(--brand-red)" />
          ) : passed ? (
            <Award size={30} color="var(--success)" />
          ) : (
            <RotateCcw size={30} color="var(--error)" />
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
          <span className={`badge ${mastery ? 'badge-intermediate' : passed ? 'badge-beginner' : 'badge-advanced'}`}>
            {mastery ? 'Mastery Level' : passed ? 'Passed' : 'Needs Reinforcement'}
          </span>
        </div>

        <h1 style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '2px', color: 'var(--text-primary)' }}>
          {scorePercentage}%
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', marginBottom: '22px' }}>
          You answered <strong style={{ color: 'var(--text-primary)' }}>{correctCount}</strong> of <strong style={{ color: 'var(--text-primary)' }}>{totalQuestions}</strong> questions correctly
        </p>

        {/* Quick KPI stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '12px',
          maxWidth: '520px',
          margin: '0 auto 24px'
        }}>
          <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-primary)' }}>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>Correct</p>
            <p style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--success)' }}>{correctCount}</p>
          </div>
          <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-primary)' }}>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>Incorrect</p>
            <p style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--error)' }}>{incorrectCount}</p>
          </div>
          <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-primary)' }}>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>Time Elapsed</p>
            <p style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>{formatTime(timeSpentSeconds)}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button 
            className="btn-primary"
            onClick={() => { soundFx.playClick(); onRetake(); }}
          >
            <RotateCcw size={16} />
            Retake Exam
          </button>

          {incorrectCount > 0 && (
            <button 
              className="btn-secondary"
              onClick={() => { soundFx.playClick(); onPracticeMistakes(); }}
            >
              <XCircle size={16} color="var(--brand-red)" />
              Practice Missed ({incorrectCount} Qs)
            </button>
          )}

          <button 
            className="btn-secondary"
            onClick={() => { soundFx.playClick(); onNavigateHome(); }}
          >
            <Home size={16} />
            Home Dashboard
          </button>
        </div>
      </div>

      {/* Topic Mastery Breakdown */}
      {topicBreakdown && Object.keys(topicBreakdown).length > 0 && (
        <div className="glass-panel" style={{ padding: '22px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
            <TrendingUp size={18} color="var(--brand-red)" />
            Topic Performance Breakdown
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
            {Object.entries(topicBreakdown).map(([topicId, data]) => {
              const accuracy = Math.round((data.correct / data.total) * 100);
              return (
                <div 
                  key={topicId}
                  style={{
                    padding: '14px',
                    borderRadius: '8px',
                    background: '#f8fafc',
                    border: '1px solid var(--border-primary)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {data.name}
                    </span>
                    <span style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: accuracy >= 70 ? 'var(--success)' : 'var(--error)'
                    }}>
                      {data.correct}/{data.total} ({accuracy}%)
                    </span>
                  </div>

                  <div style={{ width: '100%', height: '5px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${accuracy}%`,
                      height: '100%',
                      background: accuracy >= 70 ? 'var(--success)' : 'var(--brand-red)',
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
      <div className="glass-panel" style={{ padding: '22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '18px' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>Detailed Question Review</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Review complete rationale and explanations</p>
          </div>

          {/* Filter Pills */}
          <div style={{
            display: 'flex',
            background: '#f1f5f9',
            padding: '3px',
            borderRadius: '6px',
            border: '1px solid var(--border-primary)',
            gap: '2px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setActiveReviewFilter('all')}
              style={{
                padding: '5px 12px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeReviewFilter === 'all' ? '#ffffff' : 'transparent',
                color: activeReviewFilter === 'all' ? 'var(--text-primary)' : 'var(--text-muted)',
                boxShadow: activeReviewFilter === 'all' ? 'var(--shadow-sm)' : 'none'
              }}
            >
              All ({totalQuestions})
            </button>
            <button
              onClick={() => setActiveReviewFilter('incorrect')}
              style={{
                padding: '5px 12px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeReviewFilter === 'incorrect' ? '#ffffff' : 'transparent',
                color: activeReviewFilter === 'incorrect' ? 'var(--brand-red)' : 'var(--text-muted)',
                boxShadow: activeReviewFilter === 'incorrect' ? 'var(--shadow-sm)' : 'none'
              }}
            >
              Missed ({incorrectCount})
            </button>
            <button
              onClick={() => setActiveReviewFilter('correct')}
              style={{
                padding: '5px 12px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeReviewFilter === 'correct' ? '#ffffff' : 'transparent',
                color: activeReviewFilter === 'correct' ? 'var(--success)' : 'var(--text-muted)',
                boxShadow: activeReviewFilter === 'correct' ? 'var(--shadow-sm)' : 'none'
              }}
            >
              Correct ({correctCount})
            </button>
          </div>
        </div>

        {/* Questions Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filteredQuestions.map((q) => {
            const originalIndex = questions.findIndex(orig => orig.id === q.id);
            const userChoice = userAnswers[originalIndex];
            const isCorrect = userChoice === q.correctAnswer;
            const isExpanded = expandedQuestions[q.id] !== undefined ? expandedQuestions[q.id] : !isCorrect;
            const isBookmarked = bookmarkedIds.includes(q.id);

            return (
              <div 
                key={q.id}
                style={{
                  borderRadius: '8px',
                  background: '#ffffff',
                  border: `1px solid ${isCorrect ? 'var(--success-border)' : 'var(--error-border)'}`,
                  overflow: 'hidden'
                }}
              >
                {/* Header Row */}
                <div 
                  onClick={() => toggleExpand(q.id)}
                  style={{
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    background: isCorrect ? 'var(--success-bg)' : 'var(--error-bg)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                    {isCorrect ? (
                      <CheckCircle2 size={18} color="var(--success)" style={{ flexShrink: 0 }} />
                    ) : (
                      <XCircle size={18} color="var(--error)" style={{ flexShrink: 0 }} />
                    )}

                    <div>
                      <span style={{ fontSize: '0.74rem', fontWeight: 700, color: isCorrect ? 'var(--success-text)' : 'var(--brand-red)' }}>
                        Q{originalIndex + 1} • {q.topicName}
                      </span>
                      <h4 style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>
                        {q.question}
                      </h4>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '12px' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(q.id);
                      }}
                      style={{ padding: '6px', color: isBookmarked ? 'var(--brand-red)' : 'var(--text-muted)' }}
                      title="Bookmark Question"
                    >
                      <Bookmark size={15} fill={isBookmarked ? 'var(--brand-red)' : 'none'} />
                    </button>
                    {isExpanded ? <ChevronUp size={16} color="var(--text-secondary)" /> : <ChevronDown size={16} color="var(--text-secondary)" />}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div style={{ padding: '18px', borderTop: '1px solid var(--border-subtle)', background: '#ffffff' }}>
                    {q.code && (
                      <div className="code-block-wrapper" style={{ margin: '0 0 14px' }}>
                        <pre className="code-content">
                          <code>{q.code}</code>
                        </pre>
                      </div>
                    )}

                    {/* Options Breakdown */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                      {q.options.map((opt, optIdx) => {
                        const isThisCorrect = optIdx === q.correctAnswer;
                        const isThisUser = optIdx === userChoice;

                        let optBg = '#f8fafc';
                        let optBorder = 'var(--border-primary)';

                        if (isThisCorrect) {
                          optBg = 'var(--success-bg)';
                          optBorder = 'var(--success-border)';
                        } else if (isThisUser && !isThisCorrect) {
                          optBg = 'var(--error-bg)';
                          optBorder = 'var(--error-border)';
                        }

                        return (
                          <div
                            key={optIdx}
                            style={{
                              padding: '10px 14px',
                              borderRadius: '6px',
                              background: optBg,
                              border: `1px solid ${optBorder}`,
                              color: 'var(--text-primary)',
                              fontSize: '0.9rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              flexWrap: 'wrap',
                              gap: '6px'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <span style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>
                                {String.fromCharCode(65 + optIdx)}.
                              </span>
                              <span>{opt}</span>
                            </div>

                            {isThisCorrect && (
                              <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--success-text)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <CheckCircle2 size={15} /> Correct Choice
                              </span>
                            )}
                            {isThisUser && !isThisCorrect && (
                              <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--error-text)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <XCircle size={15} /> Your Pick
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    <div style={{
                      padding: '14px 16px',
                      borderRadius: '6px',
                      background: 'var(--brand-red-subtle)',
                      border: '1px solid var(--brand-red-border)',
                      marginBottom: q.tip ? '10px' : '0'
                    }}>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                        <strong style={{ color: 'var(--brand-red)' }}>Explanation: </strong>
                        {q.explanation}
                      </p>
                    </div>

                    {q.tip && (
                      <div style={{
                        padding: '10px 14px',
                        borderRadius: '6px',
                        background: 'var(--warning-bg)',
                        border: '1px solid var(--warning-border)',
                        color: 'var(--warning-text)',
                        fontSize: '0.86rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px'
                      }}>
                        <Lightbulb size={16} color="var(--warning)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <strong>Pro Tip: </strong>
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
