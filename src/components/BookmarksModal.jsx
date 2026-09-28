import React from 'react';
import { X, Bookmark, Trash2, Play, Code2, Atom } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function BookmarksModal({
  isOpen,
  onClose,
  bookmarkedQuestions,
  onRemoveBookmark,
  onStartBookmarksDrill
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
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(99, 102, 241, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Bookmark size={20} color="var(--accent-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Saved Bookmarks Bank</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {bookmarkedQuestions.length} Starred questions available for focused review
              </p>
            </div>
          </div>

          <button className="btn-secondary" onClick={onClose} style={{ padding: '8px', borderRadius: '50%' }}>
            <X size={18} />
          </button>
        </div>

        {/* Action button if has items */}
        {bookmarkedQuestions.length > 0 && (
          <div style={{ marginBottom: '16px' }}>
            <button
              className="btn-primary"
              onClick={() => {
                soundFx.playClick();
                onStartBookmarksDrill();
                onClose();
              }}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Play size={16} />
              Start Drill on All {bookmarkedQuestions.length} Saved Questions
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
          {bookmarkedQuestions.length > 0 ? (
            bookmarkedQuestions.map((q) => (
              <div
                key={q.id}
                style={{
                  padding: '14px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span className="badge badge-js" style={{ fontSize: '0.65rem' }}>
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

                <button
                  onClick={() => onRemoveBookmark(q.id)}
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    color: 'var(--text-muted)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    cursor: 'pointer'
                  }}
                  title="Remove from bookmarks"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
              No questions bookmarked yet. Click the bookmark icon during any quiz to save difficult questions here!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
