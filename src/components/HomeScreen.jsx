import React, { useState } from 'react';
import { 
  Trophy, 
  Zap, 
  BookOpen, 
  RotateCcw, 
  Bookmark, 
  ChevronRight,
  Code2,
  Atom,
  TrendingUp,
  Sparkles,
  Award
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
  const trackTitle = isJs ? 'JavaScript' : 'React 19';

  const overallAccuracy = stats.totalAnswered > 0 
    ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) 
    : 0;

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Hero Section */}
      <div className="glass-panel hero-panel" style={{
        padding: '32px 30px',
        background: '#ffffff',
        border: '1px solid var(--border-primary)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <span className="badge badge-brand">
                {isJs ? <Code2 size={13} /> : <Atom size={13} />}
                {isJs ? 'JavaScript Track' : 'React 19 Track'}
              </span>
              <span className="badge" style={{ background: '#f1f5f9', color: 'var(--text-secondary)', border: '1px solid var(--border-primary)' }}>
                {totalAvailableQuestions} Questions
              </span>
            </div>

            <h1 className="hero-title" style={{ fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.25, marginBottom: '12px', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              Professional Assessment & Mastery for <span style={{ color: 'var(--brand-red)' }}>{trackTitle}</span>
            </h1>

            <p className="hero-desc" style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '22px' }}>
              Structured examination portal featuring real code evaluation, comprehensive diagnostic feedback, and detailed topic tracking.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button 
                id="btn-launch-exam"
                className="btn-primary"
                onClick={() => {
                  soundFx.playClick();
                  onStartExam(examQuestionCount);
                }}
                style={{
                  padding: '11px 22px',
                  fontSize: '0.92rem'
                }}
              >
                <Trophy size={16} />
                Launch Exam ({examQuestionCount} Qs)
              </button>

              <button 
                id="btn-launch-sprint"
                className="btn-secondary"
                onClick={() => {
                  soundFx.playClick();
                  onStartSprint();
                }}
                style={{ padding: '11px 18px', fontSize: '0.92rem' }}
              >
                <Zap size={16} color="var(--brand-red)" />
                10-Question Sprint
              </button>
            </div>
          </div>

          {/* Clean Performance Overview */}
          <div style={{
            background: '#ffffff',
            border: '1px solid var(--border-primary)',
            borderRadius: 'var(--radius-md)',
            padding: '20px 22px',
            minWidth: '260px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '10px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>YOUR METRICS</span>
              <TrendingUp size={16} color="var(--brand-red)" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Answered</p>
                <p style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>{stats.totalAnswered}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Accuracy</p>
                <p style={{ fontSize: '1.35rem', fontWeight: 800, color: overallAccuracy >= 75 ? 'var(--success)' : 'var(--brand-red)' }}>
                  {overallAccuracy}%
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Completed</p>
                <p style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>{stats.examsCompleted || 0}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Best Streak</p>
                <p style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-red)' }}>{stats.bestStreak || 0}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modes Grid */}
      <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '18px' }}>
        
        {/* Exam Configuration Card */}
        <div className="glass-panel" style={{ padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--brand-red-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--brand-red-border)',
                flexShrink: 0
              }}>
                <Trophy size={18} color="var(--brand-red)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-primary)' }}>Certification Exam</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Timed constraints with instant grading</p>
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Simulates official assessment conditions with a question navigation palette, question flagging, and detailed topic breakdown.
            </p>

            <div style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '8px', letterSpacing: '0.02em' }}>
                QUESTION COUNT:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                {[20, 50, 100, 200].map(cnt => (
                  <button
                    key={cnt}
                    onClick={() => { soundFx.playClick(); setExamQuestionCount(cnt); }}
                    style={{
                      padding: '7px 0',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      background: examQuestionCount === cnt ? 'var(--brand-red)' : '#ffffff',
                      color: examQuestionCount === cnt ? '#ffffff' : 'var(--text-secondary)',
                      border: examQuestionCount === cnt ? '1px solid var(--brand-red)' : '1px solid var(--border-primary)',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {cnt} Qs
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            id="btn-start-exam-card"
            className="btn-primary"
            onClick={() => {
              soundFx.playClick();
              onStartExam(examQuestionCount);
            }}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Start {examQuestionCount}-Question Exam
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Topic Practice Card */}
        <div className="glass-panel" style={{ padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--brand-red-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--brand-red-border)',
                flexShrink: 0
              }}>
                <Sparkles size={18} color="var(--brand-red)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-primary)' }}>Topic Practice</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Self-paced learning with immediate explanations</p>
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Practice targeted syllabus sections. Get immediate diagnostic feedback, rationale for every choice, and core takeaways.
            </p>

            <div style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '8px', letterSpacing: '0.02em' }}>
                FILTER BY TOPIC:
              </label>
              <select
                id="select-topic-filter"
                value={selectedTopicFilter}
                onChange={(e) => setSelectedTopicFilter(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '6px',
                  background: '#ffffff',
                  border: '1px solid var(--border-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.86rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="all">All Topics ({topics.length} Sections)</option>
                {topics.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.name} ({t.difficulty})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button 
            id="btn-start-practice"
            className="btn-secondary"
            onClick={() => {
              soundFx.playClick();
              onStartPractice(selectedTopicFilter);
            }}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Start Practice Session
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Targeted Remediation Card */}
        <div className="glass-panel" style={{ padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--brand-red-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--brand-red-border)',
                flexShrink: 0
              }}>
                <RotateCcw size={18} color="var(--brand-red)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-primary)' }}>Targeted Remediation</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Focus on missed questions and bookmarks</p>
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Revisit questions you previously answered incorrectly until mastered, or review questions you flagged for later study.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              <button
                disabled={mistakesCount === 0}
                onClick={() => { soundFx.playClick(); onStartMistakes(); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px 12px',
                  borderRadius: '6px',
                  background: mistakesCount > 0 ? 'var(--brand-red-subtle)' : '#ffffff',
                  border: mistakesCount > 0 ? '1px solid var(--brand-red-border)' : '1px solid var(--border-primary)',
                  color: mistakesCount > 0 ? 'var(--brand-red)' : 'var(--text-muted)',
                  cursor: mistakesCount > 0 ? 'pointer' : 'not-allowed',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <RotateCcw size={15} />
                  <span>Mistakes Vault</span>
                </div>
                <span className="badge" style={{ background: mistakesCount > 0 ? 'var(--brand-red)' : '#f1f5f9', color: mistakesCount > 0 ? '#ffffff' : 'var(--text-muted)' }}>
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
                  padding: '9px 12px',
                  borderRadius: '6px',
                  background: bookmarksCount > 0 ? '#f8fafc' : '#ffffff',
                  border: bookmarksCount > 0 ? '1px solid var(--border-hover)' : '1px solid var(--border-primary)',
                  color: bookmarksCount > 0 ? 'var(--text-primary)' : 'var(--text-muted)',
                  cursor: bookmarksCount > 0 ? 'pointer' : 'not-allowed',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Bookmark size={15} />
                  <span>Saved Bookmarks</span>
                </div>
                <span className="badge" style={{ background: bookmarksCount > 0 ? 'var(--brand-red)' : '#f1f5f9', color: bookmarksCount > 0 ? '#ffffff' : 'var(--text-muted)' }}>
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
            <BookOpen size={15} />
            Explore Full Syllabus ({topics.length} Modules)
          </button>
        </div>

      </div>

      {/* Curriculum Strip */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>Curriculum & Syllabus Modules</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Select a module for targeted practice</p>
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
                padding: '14px 16px',
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid var(--border-primary)',
                cursor: 'pointer',
                transition: 'border-color var(--transition-fast), background var(--transition-fast)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brand-red)';
                e.currentTarget.style.background = '#fef2f2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-primary)';
                e.currentTarget.style.background = '#ffffff';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                    SECTION {topic.sectionNum}
                  </span>
                  <span className={`badge ${
                    topic.difficulty === 'Beginner' ? 'badge-beginner' : 
                    topic.difficulty === 'Intermediate' ? 'badge-intermediate' : 'badge-advanced'
                  }`}>
                    {topic.difficulty}
                  </span>
                </div>
                <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {topic.name}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {topic.description}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--brand-red)', fontWeight: 600 }}>
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
