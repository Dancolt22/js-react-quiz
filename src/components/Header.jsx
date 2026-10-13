import React from 'react';
import { 
  Code2, 
  Atom, 
  Volume2, 
  VolumeX, 
  Bookmark, 
  BarChart3, 
  AlertCircle,
  BookOpen
} from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function Header({
  currentTrack,
  onSelectTrack,
  activeView,
  onNavigateHome,
  bookmarksCount,
  mistakesCount,
  onOpenBookmarks,
  onOpenMistakes,
  onOpenStats,
  onOpenTopics,
  soundMuted,
  onToggleSound,
  totalJsQuestions = 200,
  totalReactQuestions = 200
}) {
  const isJs = currentTrack === 'javascript';

  return (
    <header className="header-top glass-nav">
      <div className="header-content">
        {/* Brand Identity */}
        <div 
          onClick={onNavigateHome}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
          title="Back to Dashboard"
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            background: 'var(--brand-red)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Code2 size={20} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                DFI Quiz
              </span>
              <span className="badge badge-brand" style={{ fontSize: '0.72rem' }}>
                {isJs ? 'JavaScript' : 'React 19'}
              </span>
            </div>
            <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '-2px' }}>
              Exam & Practice Portal • 400 Questions
            </p>
          </div>
        </div>

        {/* Minimalist Segmented Track Switcher */}
        <div className="track-switcher-group" style={{
          display: 'flex',
          background: '#f1f5f9',
          padding: '3px',
          borderRadius: '8px',
          border: '1px solid var(--border-primary)',
          gap: '2px'
        }}>
          <button
            id="btn-track-javascript"
            onClick={() => {
              soundFx.playClick();
              onSelectTrack('javascript');
            }}
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '0.84rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all var(--transition-fast)',
              background: isJs ? '#ffffff' : 'transparent',
              color: isJs ? 'var(--text-primary)' : 'var(--text-muted)',
              border: isJs ? '1px solid var(--border-primary)' : '1px solid transparent',
              boxShadow: isJs ? 'var(--shadow-sm)' : 'none'
            }}
          >
            <Code2 size={15} color={isJs ? 'var(--brand-red)' : 'var(--text-muted)'} />
            JavaScript ({totalJsQuestions})
          </button>

          <button
            id="btn-track-react"
            onClick={() => {
              soundFx.playClick();
              onSelectTrack('react');
            }}
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '0.84rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all var(--transition-fast)',
              background: !isJs ? '#ffffff' : 'transparent',
              color: !isJs ? 'var(--text-primary)' : 'var(--text-muted)',
              border: !isJs ? '1px solid var(--border-primary)' : '1px solid transparent',
              boxShadow: !isJs ? 'var(--shadow-sm)' : 'none'
            }}
          >
            <Atom size={15} color={!isJs ? 'var(--brand-red)' : 'var(--text-muted)'} />
            React 19 ({totalReactQuestions})
          </button>
        </div>

        {/* Header Action Buttons */}
        <div className="header-actions-row" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Syllabus */}
          <button 
            id="btn-nav-syllabus"
            className="btn-secondary"
            onClick={() => { soundFx.playClick(); onOpenTopics(); }}
            title="Browse Syllabus & Topics"
          >
            <BookOpen size={15} color="var(--text-secondary)" />
            <span>Syllabus</span>
          </button>

          {/* Bookmarks */}
          <button 
            id="btn-nav-bookmarks"
            className="btn-secondary"
            onClick={() => { soundFx.playClick(); onOpenBookmarks(); }}
            title="Saved Questions"
          >
            <Bookmark size={15} color={bookmarksCount > 0 ? 'var(--brand-red)' : 'var(--text-secondary)'} />
            <span>Bookmarks</span>
            {bookmarksCount > 0 && (
              <span style={{
                background: 'var(--brand-red-subtle)',
                color: 'var(--brand-red)',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '1px 6px',
                borderRadius: '10px'
              }}>
                {bookmarksCount}
              </span>
            )}
          </button>

          {/* Mistakes */}
          <button 
            id="btn-nav-mistakes"
            className="btn-secondary"
            onClick={() => { soundFx.playClick(); onOpenMistakes(); }}
            title="Weakness & Mistakes Vault"
          >
            <AlertCircle size={15} color={mistakesCount > 0 ? 'var(--brand-red)' : 'var(--text-secondary)'} />
            <span>Mistakes</span>
            {mistakesCount > 0 && (
              <span style={{
                background: 'var(--brand-red-subtle)',
                color: 'var(--brand-red)',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '1px 6px',
                borderRadius: '10px'
              }}>
                {mistakesCount}
              </span>
            )}
          </button>

          {/* Stats */}
          <button 
            id="btn-nav-stats"
            className="btn-secondary"
            onClick={() => { soundFx.playClick(); onOpenStats(); }}
            title="Performance Analytics"
          >
            <BarChart3 size={15} color="var(--text-secondary)" />
            <span>Analytics</span>
          </button>

          {/* Audio */}
          <button 
            id="btn-nav-sound"
            className="btn-secondary"
            onClick={onToggleSound}
            title={soundMuted ? "Sound Off (Click to unmute)" : "Sound On (Click to mute)"}
            style={{ padding: '8px 10px' }}
          >
            {soundMuted ? <VolumeX size={15} color="var(--text-muted)" /> : <Volume2 size={15} color="var(--brand-red)" />}
          </button>
        </div>
      </div>
    </header>
  );
}
