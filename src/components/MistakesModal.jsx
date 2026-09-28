import React from 'react';
import { X, RotateCcw, Trash2, Play, AlertCircle } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function MistakesModal({
  isOpen,
  onClose,
  mistakeQuestions,
  onStartMistakesDrill
}) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(2, 6, 23, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 250,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="glass-panel animate-fade-in" style={{
        width: '100%',
        maxWidth: '740px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '28px',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(239, 68, 68, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <AlertCircle size={20} color="#ef4444" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Weakness / Mistake Vault</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {mistakeQuestions.length} Questions needing targeted remediation
              </p>
            </div>
          </div>

          <button className="btn-secondary" onClick={onClose} style={{ padding: '8px', borderRadius: '50%' }}>
            <X size={18} />
          </button>
        </div>

        {/* Action button if has items */}
        {mistakeQuestions.length > 0 && (
          <div style={{ marginBottom: '16px' }}>
            <button
              className="btn-primary"
              onClick={() => {
                soundFx.playClick();
                onStartMistakesDrill();
                onClose();
              }}
              style={{
                width: '100%',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #ef4444, #dc2626)'
              }}
            >
              <RotateCcw size={16} />
              Launch Mastery Drill on {mistakeQuestions.length} Missed Questions
            </button>
          </div>
        )}

        {/* List of items */}
        <div style={{
          overflowY: 'auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxHeight: '400px'
        }}>
          {mistakeQuestions.length > 0 ? (
            mistakeQuestions.map((q) => (
              <div
                key={q.id}
                style={{
                  padding: '14px',
                  borderRadius: '10px',
                  background: 'rgba(239, 68, 68, 0.04)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span className="badge badge-advanced" style={{ fontSize: '0.65rem' }}>
                      {q.topicName}
                    </span>
                    {q.difficulty && (
                      <span className="badge badge-intermediate" style={{ fontSize: '0.65rem' }}>
                        {q.difficulty}
                      </span>
                    )}
                  </div>
                  <h4 style={{ fontSize: '0.94rem', fontWeight: 600, color: '#f8fafc', lineHeight: 1.4 }}>
                    {q.question}
                  </h4>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
              🎉 Clean slate! You currently have no unresolved mistakes in your vault.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
