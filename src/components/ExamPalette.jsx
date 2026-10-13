import React from 'react';
import { X } from 'lucide-react';
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
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-card animate-fade-in" style={{ maxWidth: '640px' }}>
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--text-primary)' }}>Question Navigation Palette</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Jump to any question instantly
            </p>
          </div>
          <button 
            id="btn-close-palette"
            className="btn-secondary"
            onClick={onClose}
            style={{ padding: '6px', borderRadius: '6px' }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Legend */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          padding: '8px 12px',
          background: '#f8fafc',
          borderRadius: '6px',
          marginBottom: '16px',
          flexWrap: 'wrap',
          fontSize: '0.78rem',
          border: '1px solid var(--border-primary)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--brand-red)' }} />
            <span style={{ color: 'var(--text-secondary)' }}>Answered</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#f59e0b' }} />
            <span style={{ color: 'var(--text-secondary)' }}>Flagged</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '2px', border: '2px solid var(--text-primary)', background: '#ffffff' }} />
            <span style={{ color: 'var(--text-secondary)' }}>Current</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#f8fafc', border: '1px solid var(--border-primary)' }} />
            <span style={{ color: 'var(--text-muted)' }}>Unanswered</span>
          </div>
        </div>

        {/* Grid of question buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(42px, 1fr))',
          gap: '6px',
          overflowY: 'auto',
          padding: '4px 2px',
          maxHeight: '360px'
        }}>
          {Array.from({ length: totalQuestions }, (_, idx) => {
            const isAnswered = userAnswers[idx] !== undefined && userAnswers[idx] !== null;
            const isFlag = flaggedQuestions.includes(idx);
            const isCurrent = idx === currentIndex;

            let bg = '#f8fafc';
            let color = 'var(--text-secondary)';
            let borderColor = 'var(--border-primary)';

            if (isAnswered) {
              bg = 'var(--brand-red)';
              borderColor = 'var(--brand-red)';
              color = '#ffffff';
            }
            if (isFlag) {
              bg = '#fffbeb';
              borderColor = '#f59e0b';
              color = '#b45309';
            }
            if (isCurrent) {
              borderColor = 'var(--text-primary)';
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
                  height: '38px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  background: bg,
                  border: isCurrent ? '2px solid var(--text-primary)' : `1px solid ${borderColor}`,
                  color: color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {idx + 1}
                {isFlag && (
                  <span style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    width: '5px',
                    height: '5px',
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
          marginTop: '16px',
          paddingTop: '14px',
          borderTop: '1px solid var(--border-primary)',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            Answered: <strong style={{ color: 'var(--brand-red)' }}>{Object.keys(userAnswers).length}</strong> / {totalQuestions}
          </span>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-secondary" onClick={onClose}>
              Close
            </button>
            {isExam && (
              <button
                id="btn-submit-exam-palette"
                className="btn-primary"
                onClick={() => {
                  onClose();
                  onFinishExam();
                }}
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
