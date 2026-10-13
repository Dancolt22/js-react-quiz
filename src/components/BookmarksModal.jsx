import React from 'react';
import { X, Bookmark, Trash2, Play } from 'lucide-react';
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
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-card animate-fade-in" style={{ maxWidth: '680px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'var(--brand-red-subtle)',
              border: '1px solid var(--brand-red-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Bookmark size={18} color="var(--brand-red)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--text-primary)' }}>Saved Bookmarks</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {bookmarkedQuestions.length} Questions saved for review
              </p>
            </div>
          </div>

          <button className="btn-secondary" onClick={onClose} style={{ padding: '6px', borderRadius: '6px' }}>
            <X size={16} />
          </button>
        </div>

        {/* Action button if has items */}
        {bookmarkedQuestions.length > 0 && (
          <div style={{ marginBottom: '14px' }}>
            <button
              className="btn-primary"
              onClick={() => {
                soundFx.playClick();
                onStartBookmarksDrill();
                onClose();
              }}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Play size={15} />
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
          gap: '8px',
          maxHeight: '360px'
        }}>
          {bookmarkedQuestions.length > 0 ? (
            bookmarkedQuestions.map((q) => (
              <div
                key={q.id}
                style={{
                  padding: '12px 14px',
                  borderRadius: '6px',
                  background: '#ffffff',
                  border: '1px solid var(--border-primary)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span className="badge badge-brand" style={{ fontSize: '0.68rem' }}>
                      {q.topicName}
                    </span>
                    {q.difficulty && (
                      <span className="badge badge-intermediate" style={{ fontSize: '0.68rem' }}>
                        {q.difficulty}
                      </span>
                    )}
                  </div>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                    {q.question}
                  </h4>
                </div>

                <button
                  onClick={() => onRemoveBookmark(q.id)}
                  style={{
                    padding: '6px',
                    borderRadius: '4px',
                    color: 'var(--text-muted)',
                    background: '#f8fafc',
                    border: '1px solid var(--border-primary)',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                  title="Remove from bookmarks"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '36px 20px', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              No questions bookmarked yet. Click the bookmark icon during any quiz to save difficult questions here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
