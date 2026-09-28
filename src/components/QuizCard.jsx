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
  Timer, 
  AlertTriangle,
  HelpCircle
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
      // Ignore keyboard shortcuts if user is typing in an input
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
      // In practice/sprint/mistakes, if already submitted and reviewed, allow changing or re-selecting
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
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Top Status & Timer Bar */}
      <div className="glass-panel" style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#f8fafc' }}>
            Question {currentIndex + 1} <span style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem' }}>of {totalQuestions}</span>
          </span>

          <span className="badge badge-js" style={{ fontSize: '0.72rem' }}>
            {question.topicName || 'General'}
          </span>

          {question.difficulty && (
            <span className={`badge ${
              question.difficulty === 'Beginner' ? 'badge-beginner' : 
              question.difficulty === 'Intermediate' ? 'badge-intermediate' : 'badge-advanced'
            }`} style={{ fontSize: '0.72rem' }}>
              {question.difficulty}
            </span>
          )}
        </div>

        {/* Right side controls: Timer, Flag, Bookmark, Jump Palette */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {isExam && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              background: timeRemaining < 120 ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              border: timeRemaining < 120 ? '1px solid rgba(239, 68, 68, 0.5)' : '1px solid var(--border-subtle)',
              color: timeRemaining < 120 ? '#f87171' : 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '0.9rem'
            }}>
              <Timer size={16} color={timeRemaining < 120 ? '#f87171' : '#38bdf8'} />
              <span>{formatTimer(timeRemaining)}</span>
            </div>
          )}

          <button 
            className="btn-secondary"
            onClick={onToggleFlag}
            title={isFlagged ? "Remove Flag (shortcut: F)" : "Flag for review (shortcut: F)"}
            style={{
              padding: '8px 10px',
              color: isFlagged ? '#f59e0b' : 'var(--text-muted)',
              borderColor: isFlagged ? 'rgba(245, 158, 11, 0.4)' : 'var(--border-subtle)',
              background: isFlagged ? 'rgba(245, 158, 11, 0.1)' : 'transparent'
            }}
          >
            <Flag size={16} fill={isFlagged ? '#f59e0b' : 'none'} />
          </button>

          <button 
            className="btn-secondary"
            onClick={onToggleBookmark}
            title={isBookmarked ? "Remove Bookmark" : "Bookmark Question"}
            style={{
              padding: '8px 10px',
              color: isBookmarked ? 'var(--accent-primary)' : 'var(--text-muted)',
              borderColor: isBookmarked ? 'rgba(99, 102, 241, 0.4)' : 'var(--border-subtle)',
              background: isBookmarked ? 'rgba(99, 102, 241, 0.1)' : 'transparent'
            }}
          >
            <Bookmark size={16} fill={isBookmarked ? 'var(--accent-primary)' : 'none'} />
          </button>

          <button 
            className="btn-secondary"
            onClick={onTogglePalette}
            title="Open Question Grid Palette"
            style={{ padding: '8px 12px', fontSize: '0.85rem' }}
          >
            <Grid size={16} />
            <span style={{ display: 'none', md: 'inline' }}>Overview</span>
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          width: `${progressPercent}%`,
          height: '100%',
          background: 'var(--accent-gradient)',
          transition: 'width 0.25s ease'
        }} />
      </div>

      {/* Main Question Card */}
      <div className="glass-panel" style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Question Text */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
          <div style={{
            background: 'var(--accent-primary)',
            color: '#fff',
            fontWeight: 800,
            fontSize: '0.9rem',
            padding: '4px 10px',
            borderRadius: '6px',
            flexShrink: 0
          }}>
            Q{currentIndex + 1}
          </div>
          <h2 style={{
            fontSize: '1.28rem',
            fontWeight: 700,
            lineHeight: 1.5,
            color: '#f8fafc',
            letterSpacing: '-0.01em'
          }}>
            {question.question}
          </h2>
        </div>

        {/* Code Block if Present */}
        {question.code && (
          <div className="code-block-wrapper">
            <div className="code-header">
              <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }} />
                Code Snippet
              </span>
              <button 
                onClick={handleCopyCode}
                style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '0.75rem', padding: '2px 6px', borderRadius: '4px' }}
                title="Copy code"
              >
                {copiedCode ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                {copiedCode ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="code-content">
              <code>{question.code}</code>
            </pre>
          </div>
        )}

        {/* Option Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
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
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left', flex: 1 }}>
                  <div className="option-index">
                    {letter}
                  </div>
                  <span style={{ fontSize: '0.96rem', fontWeight: 500 }}>
                    {optionText}
                  </span>
                </div>

                {/* Instant Feedback Status Icon */}
                {showInstantFeedback && optIdx === question.correctAnswer && (
                  <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginLeft: '12px' }} />
                )}
                {showInstantFeedback && isSelected && optIdx !== question.correctAnswer && (
                  <XCircle size={20} color="#ef4444" style={{ flexShrink: 0, marginLeft: '12px' }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Explanation Drawer (Shown immediately in Practice Mode) */}
        {showInstantFeedback && (
          <div className="animate-fade-in" style={{
            marginTop: '12px',
            padding: '20px',
            borderRadius: 'var(--radius-md)',
            background: selectedAnswer === question.correctAnswer ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
            border: `1px solid ${selectedAnswer === question.correctAnswer ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              {selectedAnswer === question.correctAnswer ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontWeight: 700 }}>
                  <CheckCircle2 size={18} /> Correct!
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444', fontWeight: 700 }}>
                  <XCircle size={18} /> Incorrect Answer
                </div>
              )}
            </div>

            <p style={{ fontSize: '0.92rem', color: '#e2e8f0', lineHeight: 1.6, marginBottom: '14px' }}>
              <strong style={{ color: '#ffffff' }}>Explanation: </strong>
              {question.explanation}
            </p>

            {question.tip && (
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                color: '#fef3c7',
                fontSize: '0.86rem',
                lineHeight: 1.5
              }}>
                <Lightbulb size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fbbf24' }}>Pro Tip: </strong>
                  {question.tip}
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Bottom Nav Bar */}
      <div className="glass-panel" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <button
          className="btn-secondary"
          onClick={() => { soundFx.playClick(); onPrevQuestion(); }}
          disabled={currentIndex === 0}
          style={{
            opacity: currentIndex === 0 ? 0.4 : 1,
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {isExam && currentIndex === totalQuestions - 1 ? (
            <button
              className="btn-primary"
              onClick={() => { soundFx.playClick(); onFinishExam(); }}
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
            >
              Submit & Grade Exam
            </button>
          ) : (
            <button
              className="btn-primary"
              onClick={() => { soundFx.playClick(); onNextQuestion(); }}
              disabled={currentIndex === totalQuestions - 1}
              style={{
                opacity: currentIndex === totalQuestions - 1 ? 0.4 : 1,
                cursor: currentIndex === totalQuestions - 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Next Question
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
