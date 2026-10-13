import React, { useState, useEffect } from 'react';
import { 
  Bookmark, 
  Flag, 
  CheckCircle2, 
  XCircle, 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Check, 
  Lightbulb, 
  Grid, 
  Timer
} from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function QuizCard({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  isAnswerSubmitted,
  onSubmitAnswer,
  onNextQuestion,
  onPrevQuestion,
  isFlagged,
  onToggleFlag,
  isBookmarked,
  onToggleBookmark,
  mode, // 'exam' | 'practice' | 'sprint' | 'mistakes' | 'bookmarks'
  onTogglePalette,
  timeRemaining,
  isTimerRunning,
  onFinishExam
}) {
  const [copiedCode, setCopiedCode] = useState(false);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      if (e.key === '1' || e.key.toLowerCase() === 'a') {
        handleOptionClick(0);
      } else if (e.key === '2' || e.key.toLowerCase() === 'b') {
        handleOptionClick(1);
      } else if (e.key === '3' || e.key.toLowerCase() === 'c') {
        handleOptionClick(2);
      } else if (e.key === '4' || e.key.toLowerCase() === 'd') {
        handleOptionClick(3);
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (currentIndex < totalQuestions - 1) {
          onNextQuestion();
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          onPrevQuestion();
        }
      } else if (e.key.toLowerCase() === 'f') {
        onToggleFlag();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalQuestions, selectedAnswer, isAnswerSubmitted]);

  const handleCopyCode = () => {
    if (!question.code) return;
    navigator.clipboard.writeText(question.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleOptionClick = (index) => {
    if (mode === 'exam') {
      soundFx.playClick();
      onSelectAnswer(index);
    } else {
      if (!isAnswerSubmitted) {
        if (index === question.correctAnswer) {
          soundFx.playCorrect();
        } else {
          soundFx.playWrong();
        }
        onSelectAnswer(index);
        onSubmitAnswer();
      }
    }
  };

  const isExam = mode === 'exam';
  const showInstantFeedback = !isExam && isAnswerSubmitted;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const formatTimer = (seconds) => {
    if (seconds === undefined || seconds === null) return '--:--';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* Top Status & Timer Bar */}
      <div className="glass-panel" style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 800, fontSize: '1.08rem', color: 'var(--text-primary)' }}>
            Question {currentIndex + 1} <span style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.88rem' }}>of {totalQuestions}</span>
          </span>

          <span className="badge badge-brand">
            {question.topicName || 'General'}
          </span>

          {question.difficulty && (
            <span className={`badge ${
              question.difficulty === 'Beginner' ? 'badge-beginner' : 
              question.difficulty === 'Intermediate' ? 'badge-intermediate' : 'badge-advanced'
            }`}>
              {question.difficulty}
            </span>
          )}
        </div>

        {/* Right side controls: Timer, Flag, Bookmark, Overview Palette */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {isExam && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '6px',
              background: timeRemaining < 120 ? 'var(--brand-red-subtle)' : '#f8fafc',
              border: `1px solid ${timeRemaining < 120 ? 'var(--brand-red-border)' : 'var(--border-primary)'}`,
              color: timeRemaining < 120 ? 'var(--brand-red)' : 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '0.88rem'
            }}>
              <Timer size={15} color={timeRemaining < 120 ? 'var(--brand-red)' : 'var(--text-muted)'} />
              <span>{formatTimer(timeRemaining)}</span>
            </div>
          )}

          <button 
            id="btn-flag-question"
            className="btn-secondary"
            onClick={onToggleFlag}
            title={isFlagged ? "Remove Flag (shortcut: F)" : "Flag for review (shortcut: F)"}
            style={{
              padding: '7px 11px',
              color: isFlagged ? '#ffffff' : 'var(--text-secondary)',
              borderColor: isFlagged ? 'var(--brand-red)' : 'var(--border-primary)',
              background: isFlagged ? 'var(--brand-red)' : '#ffffff'
            }}
          >
            <Flag size={15} fill={isFlagged ? '#ffffff' : 'none'} color={isFlagged ? '#ffffff' : 'currentColor'} />
          </button>

          <button 
            id="btn-bookmark-question"
            className="btn-secondary"
            onClick={onToggleBookmark}
            title={isBookmarked ? "Remove Bookmark" : "Bookmark Question"}
            style={{
              padding: '7px 11px',
              color: isBookmarked ? '#ffffff' : 'var(--text-secondary)',
              borderColor: isBookmarked ? 'var(--brand-red)' : 'var(--border-primary)',
              background: isBookmarked ? 'var(--brand-red)' : '#ffffff'
            }}
          >
            <Bookmark size={15} fill={isBookmarked ? '#ffffff' : 'none'} color={isBookmarked ? '#ffffff' : 'currentColor'} />
          </button>

          <button 
            id="btn-overview-palette"
            className="btn-secondary"
            onClick={onTogglePalette}
            title="Open Question Grid Overview"
            style={{ padding: '7px 12px', fontSize: '0.84rem' }}
          >
            <Grid size={15} color="var(--text-muted)" />
            <span>Overview</span>
          </button>
        </div>
      </div>

      {/* Clean Slim Progress Indicator */}
      <div style={{ width: '100%', height: '4px', background: '#f1f5f9', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          width: `${progressPercent}%`,
          height: '100%',
          background: 'var(--brand-red)',
          transition: 'width 0.2s ease'
        }} />
      </div>

      {/* Main Question Card */}
      <div className="glass-panel" style={{ padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        
        {/* Question Header & Text */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <div style={{
            background: 'var(--brand-red-subtle)',
            border: '1px solid var(--brand-red-border)',
            color: 'var(--brand-red)',
            fontWeight: 800,
            fontSize: '0.85rem',
            padding: '3px 10px',
            borderRadius: '6px',
            flexShrink: 0
          }}>
            Q{currentIndex + 1}
          </div>
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            lineHeight: 1.5,
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em'
          }}>
            {question.question}
          </h2>
        </div>

        {/* Code Snippet if present */}
        {question.code && (
          <div className="code-block-wrapper">
            <div className="code-header">
              <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--brand-red)' }} />
                Code Evaluation Snippet
              </span>
              <button 
                onClick={handleCopyCode}
                style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontSize: '0.74rem', padding: '2px 8px', borderRadius: '4px', background: '#334155' }}
                title="Copy code"
              >
                {copiedCode ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
                {copiedCode ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="code-content">
              <code>{question.code}</code>
            </pre>
          </div>
        )}

        {/* Options List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
          {question.options.map((optionText, optIdx) => {
            const letter = String.fromCharCode(65 + optIdx); // A, B, C, D
            const isSelected = selectedAnswer === optIdx;
            
            let cardClass = 'option-card';
            if (showInstantFeedback) {
              if (optIdx === question.correctAnswer) {
                cardClass += ' correct';
              } else if (isSelected && optIdx !== question.correctAnswer) {
                cardClass += ' wrong';
              }
            } else if (isSelected) {
              cardClass += ' selected';
            }

            return (
              <button
                key={optIdx}
                className={cardClass}
                onClick={() => handleOptionClick(optIdx)}
                disabled={showInstantFeedback}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', flex: 1 }}>
                  <div className="option-index">
                    {letter}
                  </div>
                  <span style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {optionText}
                  </span>
                </div>

                {/* Instant Feedback Status Icon */}
                {showInstantFeedback && optIdx === question.correctAnswer && (
                  <CheckCircle2 size={20} color="var(--success)" style={{ flexShrink: 0, marginLeft: '12px' }} />
                )}
                {showInstantFeedback && isSelected && optIdx !== question.correctAnswer && (
                  <XCircle size={20} color="var(--error)" style={{ flexShrink: 0, marginLeft: '12px' }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Explanation Drawer (Shown immediately in Practice Mode) */}
        {showInstantFeedback && (
          <div className="animate-fade-in" style={{
            marginTop: '8px',
            padding: '16px 18px',
            borderRadius: '8px',
            background: selectedAnswer === question.correctAnswer ? 'var(--success-bg)' : 'var(--error-bg)',
            border: `1px solid ${selectedAnswer === question.correctAnswer ? 'var(--success-border)' : 'var(--error-border)'}`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              {selectedAnswer === question.correctAnswer ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--success-text)', fontWeight: 700, fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} /> Correct Answer
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--error-text)', fontWeight: 700, fontSize: '0.9rem' }}>
                  <XCircle size={18} /> Incorrect
                </div>
              )}
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: question.tip ? '10px' : '0' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Explanation: </strong>
              {question.explanation}
            </p>

            {question.tip && (
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                padding: '10px 12px',
                borderRadius: '6px',
                background: 'var(--warning-bg)',
                border: '1px solid var(--warning-border)',
                color: 'var(--warning-text)',
                fontSize: '0.86rem',
                lineHeight: 1.5
              }}>
                <Lightbulb size={16} color="var(--warning)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Pro Tip: </strong>
                  {question.tip}
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Bottom Nav Bar */}
      <div className="glass-panel" style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <button
          id="btn-prev-question"
          className="btn-secondary"
          onClick={() => { soundFx.playClick(); onPrevQuestion(); }}
          disabled={currentIndex === 0}
          style={{
            opacity: currentIndex === 0 ? 0.35 : 1,
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          <ChevronLeft size={16} />
          Previous
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {isExam && currentIndex === totalQuestions - 1 ? (
            <button
              id="btn-submit-exam-bottom"
              className="btn-primary"
              onClick={() => { soundFx.playClick(); onFinishExam(); }}
            >
              Submit & Grade Exam
            </button>
          ) : (
            <button
              id="btn-next-question"
              className="btn-primary"
              onClick={() => { soundFx.playClick(); onNextQuestion(); }}
              disabled={currentIndex === totalQuestions - 1}
              style={{
                opacity: currentIndex === totalQuestions - 1 ? 0.35 : 1,
                cursor: currentIndex === totalQuestions - 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Next Question
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
