import React, { useState } from 'react';
import { X, Copy, CheckCircle2, Quote } from 'lucide-react';

export function CitationModal({ publication, onClose }) {
  const [format, setFormat] = useState('APA');
  const [copied, setCopied] = useState(false);

  if (!publication) return null;

  const authorsText = publication.authors ? publication.authors.join(', ') : 'National Centre for Polar and Ocean Research';
  const year = publication.year || 2025;
  const title = publication.title;
  const journal = publication.journal || 'Polar Science Research, MoES';
  const doi = publication.doi || '10.1016/j.polar.2025.101142';

  const getCitation = () => {
    switch (format) {
      case 'APA':
        return `${authorsText} (${year}). ${title}. ${journal}. https://doi.org/${doi}`;
      case 'BibTeX':
        return `@article{${publication.id || 'polar2025'},\n  author = {${authorsText}},\n  title = {${title}},\n  journal = {${journal}},\n  year = {${year}},\n  doi = {${doi}}\n}`;
      case 'RIS':
        return `TY  - JOUR\nAU  - ${authorsText}\nTI  - ${title}\nJO  - ${journal}\nPY  - ${year}\nDO  - ${doi}\nER  -`;
      case 'MLA':
        return `${authorsText}. "${title}." ${journal}, ${year}, doi:${doi}.`;
      default:
        return `${authorsText} (${year}). ${title}.`;
    }
  };

  const citationText = getCitation();

  const handleCopy = () => {
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Quote size={18} color="#0284c7" />
            <h3>Export Citation</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            {['APA', 'BibTeX', 'RIS', 'MLA'].map((fmt) => (
              <button
                key={fmt}
                className={`btn btn-sm ${format === fmt ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFormat(fmt)}
              >
                {fmt}
              </button>
            ))}
          </div>

          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '14px', fontFamily: format === 'BibTeX' || format === 'RIS' ? 'var(--font-mono)' : 'var(--font-sans)', fontSize: '13px', whiteSpace: 'pre-wrap', lineHeight: '1.5', color: '#1e293b' }}>
            {citationText}
          </div>
        </div>

        <div className="modal-footer">
          {copied && (
            <span style={{ color: '#059669', fontSize: '12.5px', display: 'flex', alignItems: 'center', gap: '4px', marginRight: 'auto' }}>
              <CheckCircle2 size={16} /> Citation copied to clipboard
            </span>
          )}
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button className="btn btn-accent" onClick={handleCopy}>
            <Copy size={15} />
            Copy Citation
          </button>
        </div>
      </div>
    </div>
  );
}
