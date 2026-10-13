import React, { useState } from 'react';
import { X, Search, BookOpen, ChevronRight, Code2, Atom } from 'lucide-react';
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
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-card animate-fade-in" style={{ maxWidth: '800px' }}>
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
              <BookOpen size={18} color="var(--brand-red)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--text-primary)' }}>Curriculum & Syllabus</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Select any module for targeted drill
              </p>
            </div>
          </div>

          <button className="btn-secondary" onClick={onClose} style={{ padding: '6px', borderRadius: '6px' }}>
            <X size={16} />
          </button>
        </div>

        {/* Track Switch Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <button
            onClick={() => { soundFx.playClick(); setActiveTab('javascript'); }}
            style={{
              flex: 1,
              minWidth: '180px',
              padding: '9px 14px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.86rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              background: activeTab === 'javascript' ? 'var(--brand-red)' : '#f8fafc',
              color: activeTab === 'javascript' ? '#ffffff' : 'var(--text-secondary)',
              border: activeTab === 'javascript' ? '1px solid var(--brand-red)' : '1px solid var(--border-primary)',
              transition: 'all var(--transition-fast)'
            }}
          >
            <Code2 size={15} />
            JavaScript Course ({jsTopics.length} Sections)
          </button>

          <button
            onClick={() => { soundFx.playClick(); setActiveTab('react'); }}
            style={{
              flex: 1,
              minWidth: '180px',
              padding: '9px 14px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.86rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              background: activeTab === 'react' ? 'var(--brand-red)' : '#f8fafc',
              color: activeTab === 'react' ? '#ffffff' : 'var(--text-secondary)',
              border: activeTab === 'react' ? '1px solid var(--brand-red)' : '1px solid var(--border-primary)',
              transition: 'all var(--transition-fast)'
            }}
          >
            <Atom size={15} />
            React 19 ({reactTopics.length} Modules)
          </button>
        </div>

        {/* Search & Difficulty Filter Bar */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <div style={{
            flex: 1,
            minWidth: '200px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Search size={15} color="var(--text-muted)" style={{ position: 'absolute', left: '12px' }} />
            <input
              type="text"
              placeholder="Search topics by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                borderRadius: '6px',
                background: '#ffffff',
                border: '1px solid var(--border-primary)',
                color: 'var(--text-primary)',
                fontSize: '0.86rem',
                outline: 'none'
              }}
            />
          </div>

          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              background: '#ffffff',
              border: '1px solid var(--border-primary)',
              color: 'var(--text-primary)',
              fontSize: '0.84rem',
              outline: 'none',
              cursor: 'pointer'
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '10px',
          padding: '2px'
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
                padding: '14px',
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid var(--border-primary)',
                cursor: 'pointer',
                transition: 'border-color var(--transition-fast), background var(--transition-fast)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
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
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)' }}>
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

                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '10px' }}>
                  {topic.description}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '8px',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.8rem',
                color: 'var(--brand-red)',
                fontWeight: 600
              }}>
                <span>Practice Module</span>
                <ChevronRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
