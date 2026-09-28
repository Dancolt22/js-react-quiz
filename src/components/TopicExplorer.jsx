import React, { useState } from 'react';
import { X, Search, BookOpen, Sparkles, Filter, ChevronRight, Code2, Atom } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function TopicExplorer({
  isOpen,
  onClose,
  jsTopics,
  reactTopics,
  onSelectTopic
}) {
  const [activeTab, setActiveTab] = useState('javascript'); // 'javascript' | 'react'
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  if (!isOpen) return null;

  const currentTopics = activeTab === 'javascript' ? jsTopics : reactTopics;

  const filteredTopics = currentTopics.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiff = difficultyFilter === 'all' || t.difficulty.toLowerCase() === difficultyFilter.toLowerCase();
    return matchesSearch && matchesDiff;
  });

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
        maxWidth: '840px',
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
              <BookOpen size={20} color="var(--accent-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Curriculum & Syllabus Explorer</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Select any module from the full JavaScript or React 19 course to practice
              </p>
            </div>
          </div>

          <button className="btn-secondary" onClick={onClose} style={{ padding: '8px', borderRadius: '50%' }}>
            <X size={18} />
          </button>
        </div>

        {/* Track Switch Tabs */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
          <button
            onClick={() => { soundFx.playClick(); setActiveTab('javascript'); }}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: activeTab === 'javascript' ? 'rgba(247, 223, 30, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'javascript' ? '#facc15' : 'var(--text-secondary)',
              border: activeTab === 'javascript' ? '1px solid rgba(247, 223, 30, 0.4)' : '1px solid var(--border-subtle)',
              transition: 'all 0.2s'
            }}
          >
            <Code2 size={16} />
            JavaScript Complete Course ({jsTopics.length} Sections)
          </button>

          <button
            onClick={() => { soundFx.playClick(); setActiveTab('react'); }}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: activeTab === 'react' ? 'rgba(0, 216, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'react' ? '#38bdf8' : 'var(--text-secondary)',
              border: activeTab === 'react' ? '1px solid rgba(0, 216, 255, 0.4)' : '1px solid var(--border-subtle)',
              transition: 'all 0.2s'
            }}
          >
            <Atom size={16} />
            React 19 Complete Standard ({reactTopics.length} Modules)
          </button>
        </div>

        {/* Search & Difficulty Filter Bar */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <div style={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px' }} />
            <input
              type="text"
              placeholder="Search topics by name, concept, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px 10px 36px',
                borderRadius: '8px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
          </div>

          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            style={{
              padding: '10px 14px',
              borderRadius: '8px',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-subtle)',
              color: '#fff',
              fontSize: '0.85rem',
              outline: 'none'
            }}
          >
            <option value="all">All Difficulties</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Topics Scrollable List */}
        <div style={{
          overflowY: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '12px',
          padding: '4px'
        }}>
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => {
                soundFx.playClick();
                onSelectTopic(activeTab, topic.id);
                onClose();
              }}
              style={{
                padding: '16px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = activeTab === 'javascript' ? 'rgba(247, 223, 30, 0.5)' : 'rgba(0, 216, 255, 0.5)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    SECTION {topic.sectionNum}
                  </span>
                  <span className={`badge ${
                    topic.difficulty === 'Beginner' ? 'badge-beginner' :
                    topic.difficulty === 'Intermediate' ? 'badge-intermediate' : 'badge-advanced'
                  }`} style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
                    {topic.difficulty}
                  </span>
                </div>

                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>
                  {topic.name}
                </h4>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '12px' }}>
                  {topic.description}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '10px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                fontSize: '0.8rem',
                color: activeTab === 'javascript' ? '#facc15' : '#38bdf8',
                fontWeight: 600
              }}>
                <span>Launch Practice Drill</span>
                <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
