import React from 'react';
import { X, Check, Flag, HelpCircle } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function ExamPalette({
  isOpen,
  onClose,
  totalQuestions,
  currentIndex,
  userAnswers,
  flaggedQuestions,
  onJumpToQuestion,
  onFinishExam,
  isExam
}) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(2, 6, 23, 0.8)',
      backdropFilter: 'blur(8px)',
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="glass-panel animate-fade-in" style={{
        width: '100%',
        maxWidth: '680px',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)'
      }}>
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Question Navigation Palette</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Click any question number to jump directly to it
            </p>
          </div>
          <button 
            className="btn-secondary"
            onClick={onClose}
            style={{ padding: '8px', borderRadius: '50%' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Legend */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          padding: '10px 14px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '8px',
          marginBottom: '18px',
          flexWrap: 'wrap',
          fontSize: '0.78rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--accent-primary)' }} />
            <span>Answered</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#f59e0b' }} />
            <span>Flagged for Review</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', border: '2px solid #38bdf8', background: 'transparent' }} />
            <span>Current Question</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(255, 255, 255, 0.08)' }} />
            <span>Unanswered</span>
          </div>
        </div>

        {/* Grid of question buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(44px, 1fr))',
          gap: '8px',
          overflowY: 'auto',
          padding: '8px 4px',
          maxHeight: '400px'
        }}>
          {Array.from({ length: totalQuestions }, (_, idx) => {
            const isAnswered = userAnswers[idx] !== undefined && userAnswers[idx] !== null;
            const isFlag = flaggedQuestions.includes(idx);
            const isCurrent = idx === currentIndex;

            let bg = 'rgba(255, 255, 255, 0.05)';
            let color = 'var(--text-secondary)';
            let borderColor = 'var(--border-subtle)';

            if (isAnswered) {
              bg = 'rgba(99, 102, 241, 0.25)';
              borderColor = 'var(--accent-primary)';
              color = '#ffffff';
            }
            if (isFlag) {
              bg = 'rgba(245, 158, 11, 0.25)';
              borderColor = '#f59e0b';
              color = '#fde68a';
            }
            if (isCurrent) {
              borderColor = '#38bdf8';
            }

            return (
              <button
                key={idx}
                onClick={() => {
                  soundFx.playClick();
                  onJumpToQuestion(idx);
                  onClose();
                }}
                style={{
                  height: '42px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  background: bg,
                  border: `2px solid ${borderColor}`,
                  color: color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  transition: 'all 0.15s'
                }}
              >
                {idx + 1}
                {isFlag && (
                  <span style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#f59e0b'
                  }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Actions Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '20px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border-subtle)'
        }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Total Answered: {Object.keys(userAnswers).length} / {totalQuestions}
          </span>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn-secondary" onClick={onClose}>
              Close
            </button>
            {isExam && (
              <button
                className="btn-primary"
                onClick={() => {
                  onClose();
                  onFinishExam();
                }}
                style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
              >
                Submit Exam
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
