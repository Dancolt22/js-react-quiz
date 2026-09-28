import React, { useState } from 'react';
import { 
  Trophy, 
  Zap, 
  BookOpen, 
  RotateCcw, 
  Bookmark, 
  CheckCircle2, 
  Flame, 
  Timer, 
  Sparkles, 
  Sliders, 
  ChevronRight,
  ShieldCheck,
  Code2,
  Atom,
  HelpCircle,
  TrendingUp
} from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function HomeScreen({
  track,
  onStartExam,
  onStartPractice,
  onStartSprint,
  onStartMistakes,
  onStartBookmarks,
  onOpenTopics,
  stats,
  bookmarksCount,
  mistakesCount,
  topics,
  totalAvailableQuestions
}) {
  const [examQuestionCount, setExamQuestionCount] = useState(50);
  const [selectedTopicFilter, setSelectedTopicFilter] = useState('all');

  const isJs = track === 'javascript';
  const trackTitle = isJs ? 'JavaScript Mastery' : 'React 19 Core & Advanced';
  const trackColor = isJs ? '#facc15' : '#38bdf8';
  const trackGradient = isJs ? 'var(--accent-gradient-js)' : 'var(--accent-gradient-react)';

  const overallAccuracy = stats.totalAnswered > 0 
    ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) 
    : 0;

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Hero Banner */}
      <div className="glass-panel" style={{
        padding: '36px 32px',
        position: 'relative',
        overflow: 'hidden',
        border: `1px solid ${isJs ? 'rgba(247, 223, 30, 0.25)' : 'rgba(0, 216, 255, 0.25)'}`,
        background: `radial-gradient(circle at 90% 10%, ${isJs ? 'rgba(247, 223, 30, 0.08)' : 'rgba(0, 216, 255, 0.08)'} 0%, rgba(18, 26, 47, 0.95) 70%)`
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className={`badge ${isJs ? 'badge-js' : 'badge-react'}`}>
                {isJs ? <Code2 size={14} /> : <Atom size={14} />}
                Active Track: {isJs ? 'JavaScript (ES2024)' : 'React 19 Full Standard'}
              </span>
              <span className="badge badge-intermediate">
                {totalAvailableQuestions} Exam Questions Available
              </span>
            </div>

            <h1 style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Master <span style={{ color: trackColor }}>{trackTitle}</span> with In-Depth Real Scenarios
            </h1>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Comprehensive multiple-choice assessments with authentic code evaluations, instant diagnostics, memory tricks, and deep explanations.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <button 
                className="btn-primary"
                onClick={() => {
                  soundFx.playClick();
                  onStartExam(examQuestionCount);
                }}
                style={{
                  background: trackGradient,
                  padding: '14px 28px',
                  fontSize: '1rem',
                  color: isJs ? '#0f172a' : '#ffffff',
                  fontWeight: 700
                }}
              >
                <Trophy size={18} />
                Launch Full Exam ({examQuestionCount} Qs)
              </button>

              <button 
                className="btn-secondary"
                onClick={() => {
                  soundFx.playClick();
                  onStartSprint();
                }}
                style={{ padding: '14px 22px', fontSize: '0.95rem' }}
              >
                <Zap size={18} color="#f59e0b" />
                10-Q Speed Sprint
              </button>
            </div>
          </div>

          {/* Quick Performance Gauge Card */}
          <div style={{
            background: 'rgba(8, 13, 26, 0.75)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            minWidth: '260px',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>YOUR STATS</span>
              <TrendingUp size={16} color="var(--accent-primary)" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Questions Answered</p>
                <p style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc' }}>{stats.totalAnswered}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Accuracy</p>
                <p style={{ fontSize: '1.4rem', fontWeight: 800, color: overallAccuracy >= 75 ? '#10b981' : '#f59e0b' }}>
                  {overallAccuracy}%
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Exams Finished</p>
                <p style={{ fontSize: '1.4rem', fontWeight: 800, color: '#a855f7' }}>{stats.examsCompleted || 0}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Current Streak</p>
                <p style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Flame size={18} color="#f59e0b" /> {stats.currentStreak || 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modes Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        
        {/* Exam Configuration Card */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(99, 102, 241, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(99, 102, 241, 0.3)'
              }}>
                <Trophy size={22} color="var(--accent-primary)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Certification Exam Mode</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Official timed conditions, instant score & topic analytics</p>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '18px' }}>
              Test your full knowledge under realistic exam constraints. Includes question flagging, jump palette, and detailed topic breakdown upon completion.
            </p>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                SELECT QUESTION COUNT:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                {[20, 50, 100, 200].map(cnt => (
                  <button
                    key={cnt}
                    onClick={() => { soundFx.playClick(); setExamQuestionCount(cnt); }}
                    style={{
                      padding: '8px 0',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      background: examQuestionCount === cnt ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                      color: examQuestionCount === cnt ? '#ffffff' : 'var(--text-secondary)',
                      border: examQuestionCount === cnt ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                      transition: 'all 0.18s'
                    }}
                  >
                    {cnt} Qs
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            className="btn-primary"
            onClick={() => {
              soundFx.playClick();
              onStartExam(examQuestionCount);
            }}
            style={{ width: '100%' }}
          >
            Start {examQuestionCount}-Question Exam
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Topic Practice Card */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}>
                <Sparkles size={22} color="#10b981" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Topic Mastery Practice</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Immediate feedback, in-depth explanations & pro tips</p>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '18px' }}>
              Practice targeted sections at your own pace. Receive instant explanations for every answer choice and learn key exam tricks.
            </p>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                FILTER BY TOPIC / MODULE:
              </label>
              <select
                value={selectedTopicFilter}
                onChange={(e) => setSelectedTopicFilter(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              >
                <option value="all">⚡ All Topics ({topics.length} Sections Combined)</option>
                {topics.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.name} ({t.difficulty})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button 
            className="btn-secondary"
            onClick={() => {
              soundFx.playClick();
              onStartPractice(selectedTopicFilter);
            }}
            style={{ width: '100%', justifyContent: 'center', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#34d399' }}
          >
            Start Practice Session
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Mistakes & Bookmarks Card */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(239, 68, 68, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}>
                <RotateCcw size={22} color="#ef4444" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Targeted Remediation</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Focus on missed concepts & custom bookmarks</p>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '18px' }}>
              Drill down into questions you previously got wrong until you achieve 100% mastery, or review questions you've starred.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
              <button
                disabled={mistakesCount === 0}
                onClick={() => { soundFx.playClick(); onStartMistakes(); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: mistakesCount > 0 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                  border: mistakesCount > 0 ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid var(--border-subtle)',
                  color: mistakesCount > 0 ? '#f87171' : 'var(--text-muted)',
                  cursor: mistakesCount > 0 ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <RotateCcw size={16} />
                  <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>Practice Weakness Vault</span>
                </div>
                <span className="badge" style={{ background: mistakesCount > 0 ? '#ef4444' : 'rgba(255, 255, 255, 0.1)', color: '#fff' }}>
                  {mistakesCount} Qs
                </span>
              </button>

              <button
                disabled={bookmarksCount === 0}
                onClick={() => { soundFx.playClick(); onStartBookmarks(); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: bookmarksCount > 0 ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                  border: bookmarksCount > 0 ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid var(--border-subtle)',
                  color: bookmarksCount > 0 ? '#a5b4fc' : 'var(--text-muted)',
                  cursor: bookmarksCount > 0 ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Bookmark size={16} />
                  <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>Review Saved Bookmarks</span>
                </div>
                <span className="badge" style={{ background: bookmarksCount > 0 ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.1)', color: '#fff' }}>
                  {bookmarksCount} Qs
                </span>
              </button>
            </div>
          </div>

          <button 
            className="btn-secondary"
            onClick={() => { soundFx.playClick(); onOpenTopics(); }}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <BookOpen size={16} />
            Explore Full Syllabus ({topics.length} Modules)
          </button>
        </div>

      </div>

      {/* Quick Topics Preview Strip */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Curriculum & Syllabus Modules</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Click any module to jump into direct targeted drill</p>
          </div>
          <button 
            className="btn-secondary"
            onClick={() => { soundFx.playClick(); onOpenTopics(); }}
            style={{ fontSize: '0.82rem' }}
          >
            View All ({topics.length})
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '12px'
        }}>
          {topics.slice(0, 8).map(topic => (
            <div
              key={topic.id}
              onClick={() => {
                soundFx.playClick();
                onStartPractice(topic.id);
              }}
              style={{
                padding: '14px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    SECTION {topic.sectionNum}
                  </span>
                  <span className={`badge ${
                    topic.difficulty === 'Beginner' ? 'badge-beginner' : 
                    topic.difficulty === 'Intermediate' ? 'badge-intermediate' : 'badge-advanced'
                  }`} style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
                    {topic.difficulty}
                  </span>
                </div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: '#f8fafc', marginBottom: '4px' }}>
                  {topic.name}
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {topic.description}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  Practice Module →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
