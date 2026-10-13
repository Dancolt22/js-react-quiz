import React from 'react';
import { X, Trophy, Flame, Target, BarChart3, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export default function StatsModal({
  isOpen,
  onClose,
  stats,
  history
}) {
  if (!isOpen) return null;

  const overallAccuracy = stats.totalAnswered > 0 
    ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) 
    : 0;

  const formatDate = (isoString) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    } catch {
      return 'Recent';
    }
  };

  const formatSeconds = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s}s`;
  };

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
              <BarChart3 size={18} color="var(--brand-red)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--text-primary)' }}>Performance Analytics</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Study history and accuracy tracking
              </p>
            </div>
          </div>

          <button className="btn-secondary" onClick={onClose} style={{ padding: '6px', borderRadius: '6px' }}>
            <X size={16} />
          </button>
        </div>

        {/* Overview Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '12px',
          marginBottom: '20px'
        }}>
          <div style={{ padding: '14px', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.76rem', marginBottom: '4px', fontWeight: 600 }}>
              <Target size={14} color="var(--brand-red)" /> Answered
            </div>
            <p style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>{stats.totalAnswered}</p>
          </div>

          <div style={{ padding: '14px', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.76rem', marginBottom: '4px', fontWeight: 600 }}>
              <CheckCircle2 size={14} color="var(--success)" /> Accuracy
            </div>
            <p style={{ fontSize: '1.4rem', fontWeight: 800, color: overallAccuracy >= 75 ? 'var(--success)' : 'var(--brand-red)' }}>
              {overallAccuracy}%
            </p>
          </div>

          <div style={{ padding: '14px', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.76rem', marginBottom: '4px', fontWeight: 600 }}>
              <Trophy size={14} color="var(--brand-red)" /> Completed
            </div>
            <p style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>{stats.examsCompleted || 0}</p>
          </div>

          <div style={{ padding: '14px', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.76rem', marginBottom: '4px', fontWeight: 600 }}>
              <Flame size={14} color="var(--brand-red)" /> Best Streak
            </div>
            <p style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-red)' }}>{stats.bestStreak || 0}</p>
          </div>
        </div>

        {/* History Table */}
        <h4 style={{ fontSize: '0.98rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
          Recent Activity
        </h4>

        <div style={{
          overflowY: 'auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxHeight: '300px'
        }}>
          {history && history.length > 0 ? (
            history.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: '12px 14px',
                  borderRadius: '6px',
                  background: '#ffffff',
                  border: '1px solid var(--border-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge badge-brand" style={{ fontSize: '0.68rem' }}>
                      {item.track === 'javascript' ? 'JavaScript' : 'React 19'}
                    </span>
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'capitalize' }}>
                      {item.mode} Mode ({item.totalQuestions} Qs)
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '3px', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    <span><Calendar size={12} style={{ verticalAlign: 'middle', marginRight: '3px' }} />{formatDate(item.date)}</span>
                    {item.timeSpentSeconds > 0 && (
                      <span><Clock size={12} style={{ verticalAlign: 'middle', marginRight: '3px' }} />{formatSeconds(item.timeSpentSeconds)}</span>
                    )}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: item.scorePercentage >= 70 ? 'var(--success)' : 'var(--brand-red)'
                  }}>
                    {item.scorePercentage}%
                  </span>
                  <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    {item.correctCount}/{item.totalQuestions} correct
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              No exam attempts recorded yet. Start an exam or practice session to build your stats.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
