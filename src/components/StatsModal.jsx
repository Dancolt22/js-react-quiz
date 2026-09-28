import React from 'react';
import { X, Trophy, Flame, Target, BarChart3, Clock, Calendar, CheckCircle2, XCircle } from 'lucide-react';

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
        maxWidth: '720px',
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
              <BarChart3 size={20} color="var(--accent-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Performance Analytics</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Track your study habits, overall accuracy, and exam trajectory
              </p>
            </div>
          </div>

          <button className="btn-secondary" onClick={onClose} style={{ padding: '8px', borderRadius: '50%' }}>
            <X size={18} />
          </button>
        </div>

        {/* Overview Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.78rem', marginBottom: '4px' }}>
              <Target size={14} /> Questions Done
            </div>
            <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc' }}>{stats.totalAnswered}</p>
          </div>

          <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.78rem', marginBottom: '4px' }}>
              <CheckCircle2 size={14} color="#10b981" /> Accuracy
            </div>
            <p style={{ fontSize: '1.5rem', fontWeight: 800, color: overallAccuracy >= 75 ? '#10b981' : '#f59e0b' }}>
              {overallAccuracy}%
            </p>
          </div>

          <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.78rem', marginBottom: '4px' }}>
              <Trophy size={14} color="#a855f7" /> Exams Passed
            </div>
            <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#a855f7' }}>{stats.examsCompleted || 0}</p>
          </div>

          <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.78rem', marginBottom: '4px' }}>
              <Flame size={14} color="#f59e0b" /> Best Streak
            </div>
            <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f59e0b' }}>{stats.bestStreak || 0}</p>
          </div>
        </div>

        {/* History Table */}
        <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
          Recent Activity & Exam Sessions
        </h4>

        <div style={{
          overflowY: 'auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxHeight: '320px'
        }}>
          {history && history.length > 0 ? (
            history.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className={`badge ${item.track === 'javascript' ? 'badge-js' : 'badge-react'}`} style={{ fontSize: '0.65rem' }}>
                      {item.track === 'javascript' ? 'JavaScript' : 'React 19'}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc', textTransform: 'capitalize' }}>
                      {item.mode} Mode ({item.totalQuestions} Qs)
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    <span><Calendar size={12} style={{ verticalAlign: 'middle', marginRight: '4px' }} />{formatDate(item.date)}</span>
                    {item.timeSpentSeconds > 0 && (
                      <span><Clock size={12} style={{ verticalAlign: 'middle', marginRight: '4px' }} />{formatSeconds(item.timeSpentSeconds)}</span>
                    )}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: item.scorePercentage >= 70 ? '#10b981' : '#f59e0b'
                  }}>
                    {item.scorePercentage}%
                  </span>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {item.correctCount}/{item.totalQuestions} correct
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '36px', color: 'var(--text-muted)' }}>
              No exam attempts recorded yet. Start an exam or practice session to build your stats!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
