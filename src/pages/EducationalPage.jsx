import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Search, 
  Filter, 
  Award,
  Layers
} from 'lucide-react';
import { EDUCATIONAL_RESOURCES } from '../data/polarData';
import { EducationalModal } from '../components/EducationalModal';

export function EducationalPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = [
    'All',
    'Polar Science Basics',
    'Climate & Polar Regions',
    'Antarctic Expeditions',
    'Ocean Science',
    'Glaciers & Ice',
    'Biodiversity'
  ];

  const filteredResources = EDUCATIONAL_RESOURCES.filter(res => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch = 
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.summary.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container">
      {/* Page Title & Breadcrumb */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
          Portal / Educational Center & Student Outreach
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 style={{ fontSize: '1.65rem', color: '#0c2035' }}>Polar Educational Resources & Learning Center</h1>
            <div style={{ fontSize: '13.5px', color: '#475569' }}>
              Curriculum-aligned scientific primers, extreme ecosystem studies, and classroom discussion guides for students and educators.
            </div>
          </div>
          <span style={{ fontSize: '12px', color: '#0369a1', backgroundColor: '#f0f9ff', padding: '4px 10px', borderRadius: '4px', border: '1px solid #bae6fd' }}>
            Aligned with CBSE / NCERT Earth & Environmental Sciences
          </span>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '14px 18px', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          {/* Categories */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div style={{ position: 'relative', width: '240px' }}>
            <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              placeholder="Search educational topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '6px 10px 6px 30px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '12.5px' }}
            />
          </div>
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {filteredResources.map((res) => (
          <div 
            key={res.id} 
            className="card" 
            style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
            onClick={() => setActiveArticle(res)}
          >
            <div className="card-header" style={{ padding: '14px 18px' }}>
              <span className="badge badge-educational" style={{ fontSize: '10.5px' }}>
                {res.category}
              </span>
              <span style={{ fontSize: '11.5px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={12} /> {res.readTime}
              </span>
            </div>

            <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '18px' }}>
              <div style={{ fontSize: '11px', color: '#0369a1', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                Level: {res.level}
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0c2035', marginBottom: '6px', lineHeight: '1.3' }}>
                {res.title}
              </h3>
              <div style={{ fontSize: '12.5px', color: '#0284c7', fontWeight: 500, marginBottom: '10px' }}>
                {res.subtitle}
              </div>
              <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', flex: 1, marginBottom: '16px' }}>
                {res.summary}
              </p>

              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '11.5px', color: '#64748b' }}>
                  {res.keyTakeaways ? `${res.keyTakeaways.length} Key Takeaways` : 'Full Article'}
                </span>
                <span style={{ fontSize: '12.5px', color: '#0284c7', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Read Primer <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Educational Article Reader Modal */}
      {activeArticle && (
        <EducationalModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      )}
    </div>
  );
}
