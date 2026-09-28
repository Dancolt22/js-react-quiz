import React from 'react';
import { 
  Sparkles, 
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
  return (
    <header className="header-top glass-nav">
      <div className="header-content">
        {/* Brand Logo */}
        <div 
          onClick={onNavigateHome}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)'
          }}>
            <Code2 size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }} className="gradient-text-brand">
                EvalForge
              </span>
              <span style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                background: 'rgba(99, 102, 241, 0.2)',
                color: '#a5b4fc',
                padding: '2px 6px',
                borderRadius: '4px',
                border: '1px solid rgba(99, 102, 241, 0.3)'
              }}>
                v2.0
              </span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '-2px' }}>
              JS & React 19 Exam Portal
            </p>
          </div>
        </div>

        {/* Track Switcher (Only visible when not inside active quiz session or for quick jump) */}
        <div style={{
          display: 'flex',
          background: 'rgba(15, 23, 42, 0.8)',
          padding: '4px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
          gap: '4px'
        }}>
          <button
            onClick={() => {
              soundFx.playClick();
              onSelectTrack('javascript');
            }}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s',
              background: currentTrack === 'javascript' ? 'rgba(247, 223, 30, 0.15)' : 'transparent',
              color: currentTrack === 'javascript' ? '#facc15' : 'var(--text-secondary)',
              border: currentTrack === 'javascript' ? '1px solid rgba(247, 223, 30, 0.4)' : '1px solid transparent'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#facc15' }} />
            JavaScript ({totalJsQuestions})
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onSelectTrack('react');
            }}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s',
              background: currentTrack === 'react' ? 'rgba(0, 216, 255, 0.15)' : 'transparent',
              color: currentTrack === 'react' ? '#38bdf8' : 'var(--text-secondary)',
              border: currentTrack === 'react' ? '1px solid rgba(0, 216, 255, 0.4)' : '1px solid transparent'
            }}
          >
            <Atom size={15} color="#38bdf8" />
            React 19 ({totalReactQuestions})
          </button>
        </div>

        {/* Quick Nav Tools */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Topics Directory */}
          <button 
            className="btn-secondary"
            onClick={() => { soundFx.playClick(); onOpenTopics(); }}
            title="Browse Syllabus & Topics"
          >
            <BookOpen size={16} />
            <span style={{ display: 'none', md: 'inline' }}>Syllabus</span>
          </button>

          {/* Bookmarks */}
          <button 
            className="btn-secondary"
            onClick={() => { soundFx.playClick(); onOpenBookmarks(); }}
            title="Saved Questions"
            style={{ position: 'relative' }}
          >
            <Bookmark size={16} />
            {bookmarksCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: 'var(--accent-primary)',
                color: '#fff',
                fontSize: '0.68rem',
                fontWeight: 700,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 8px rgba(99, 102, 241, 0.6)'
              }}>
                {bookmarksCount}
              </span>
            )}
          </button>

          {/* Mistakes Vault */}
          <button 
            className="btn-secondary"
            onClick={() => { soundFx.playClick(); onOpenMistakes(); }}
            title="Weakness / Mistakes Vault"
            style={{ position: 'relative' }}
          >
            <AlertCircle size={16} color={mistakesCount > 0 ? '#ef4444' : 'currentColor'} />
            {mistakesCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: '#ef4444',
                color: '#fff',
                fontSize: '0.68rem',
                fontWeight: 700,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 8px rgba(239, 68, 68, 0.6)'
              }}>
                {mistakesCount}
              </span>
            )}
          </button>

          {/* Stats */}
          <button 
            className="btn-secondary"
            onClick={() => { soundFx.playClick(); onOpenStats(); }}
            title="Performance Analytics"
          >
            <BarChart3 size={16} />
          </button>

          {/* Audio Toggle */}
          <button 
            className="btn-secondary"
            onClick={onToggleSound}
            title={soundMuted ? "Sound Off (Click to unmute)" : "Sound On (Click to mute)"}
            style={{ padding: '8px 10px' }}
          >
            {soundMuted ? <VolumeX size={16} color="#94a3b8" /> : <Volume2 size={16} color="#34d399" />}
          </button>
        </div>
      </div>
    </header>
  );
}
