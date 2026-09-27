import React from 'react';
import { X, BookOpen, Clock, Award, CheckCircle, HelpCircle } from 'lucide-react';

export function EducationalModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '820px' }} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge badge-educational">{article.category}</span>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Curriculum Level: <strong>{article.level}</strong></span>
              <span style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '3px' }}>
                <Clock size={13} /> {article.readTime}
              </span>
            </div>
            <h3 style={{ fontSize: '1.3rem', color: '#0c2035' }}>{article.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} title="Close Reader">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Subtitle & Author */}
          <div style={{ fontSize: '14.5px', color: '#0369a1', fontWeight: 500, marginBottom: '14px' }}>
            {article.subtitle}
          </div>
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
            Authored by: <strong>{article.author}</strong> • Educational Outreach Division, NCPOR
          </div>

          {/* Key Takeaways Box */}
          {article.keyTakeaways && (
            <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '6px', padding: '16px 20px', marginBottom: '24px' }}>
              <h4 style={{ color: '#0369a1', fontSize: '13.5px', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                <CheckCircle size={16} color="#0284c7" /> Key Learning Takeaways:
              </h4>
              <ul style={{ paddingLeft: '20px', fontSize: '13.5px', color: '#1e293b', lineHeight: '1.6' }}>
                {article.keyTakeaways.map((item, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Full Article Content */}
          <div style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#334155' }}>
            {article.fullArticleContent.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} style={{ fontSize: '1.2rem', color: '#0c2035', margin: '22px 0 10px' }}>
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                return (
                  <div key={idx} style={{ paddingLeft: '16px', margin: '10px 0' }}>
                    {paragraph.split('\n').map((line, lidx) => (
                      <div key={lidx} style={{ marginBottom: '6px' }}>{line}</div>
                    ))}
                  </div>
                );
              }
              return <p key={idx} style={{ marginBottom: '16px' }}>{paragraph}</p>;
            })}
          </div>

          {/* Glossary Section */}
          {article.glossary && (
            <div style={{ marginTop: '28px', borderTop: '2px solid #e2e8f0', paddingTop: '18px' }}>
              <h4 style={{ fontSize: '14px', color: '#0c2035', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                <HelpCircle size={16} color="#0284c7" /> Polar Science Scientific Glossary
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                {article.glossary.map((item, i) => (
                  <div key={i} style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '10px 12px', fontSize: '12.5px' }}>
                    <strong style={{ color: '#0c2035', display: 'block', marginBottom: '3px' }}>{item.term}</strong>
                    <span style={{ color: '#475569', lineHeight: '1.4' }}>{item.definition}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
}
