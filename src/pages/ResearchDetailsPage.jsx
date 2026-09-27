import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  MapPin, 
  Building2, 
  Download, 
  Share2, 
  Quote, 
  Database, 
  Image as ImageIcon, 
  ArrowLeft, 
  CheckCircle2, 
  ExternalLink,
  Shield,
  Layers,
  BookOpen
} from 'lucide-react';
import { CitationModal } from '../components/CitationModal';

export function ResearchDetailsPage({ 
  publication, 
  allPublications = [],
  datasets = [], 
  mediaItems = [],
  onBack, 
  onSelectPublication,
  onSelectDataset,
  onSelectMedia,
  onLaunchAiStudio
}) {
  const [showCitationModal, setShowCitationModal] = useState(false);
  const [downloadingPdf, setDownloadingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Fallback to first publication if none passed
  const pub = publication || allPublications[0];

  if (!pub) {
    return (
      <div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>
        <h2>Research record not found</h2>
        <button className="btn btn-secondary" onClick={onBack} style={{ marginTop: '16px' }}>
          Back to Repository
        </button>
      </div>
    );
  }

  // Related datasets
  const relatedDatasets = datasets.filter(d => 
    pub.relatedDatasetIds ? pub.relatedDatasetIds.includes(d.id) : false
  );

  // Related media
  const relatedMedia = mediaItems.filter(m => 
    pub.relatedMediaIds ? pub.relatedMediaIds.includes(m.id) : false
  );

  // Related other publications in same research area
  const relatedPubs = allPublications.filter(p => 
    p.id !== pub.id && (p.researchArea === pub.researchArea || p.region === pub.region)
  ).slice(0, 3);

  const handleDownloadPdf = () => {
    setDownloadingPdf(true);
    setTimeout(() => {
      setDownloadingPdf(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    }, 1200);
  };

  return (
    <div className="container">
      {/* Back button & Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
        <button className="btn btn-sm btn-secondary" onClick={onBack}>
          <ArrowLeft size={14} /> Back to Repository
        </button>
        <span style={{ fontSize: '12px', color: '#64748b' }}>
          Record ID: <code>{pub.id}</code> • Status: <strong>Archived & Verified</strong>
        </span>
      </div>

      {/* Main Publication Article Header */}
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '28px 32px', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <span className="badge badge-publication">{pub.type}</span>
          <span style={{ fontSize: '12.5px', color: '#0369a1', fontWeight: 600 }}>{pub.researchArea}</span>
          <span style={{ fontSize: '11.5px', color: '#059669', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', padding: '1px 6px', borderRadius: '3px' }}>
            {pub.license || 'CC BY 4.0 Open Access'}
          </span>
        </div>

        <h1 style={{ fontSize: '1.9rem', color: '#0c2035', marginBottom: '8px', lineHeight: '1.25' }}>
          {pub.title}
        </h1>

        {pub.subtitle && (
          <div style={{ fontSize: '1.1rem', color: '#334155', fontWeight: 500, marginBottom: '16px' }}>
            {pub.subtitle}
          </div>
        )}

        {/* Authors line */}
        <div style={{ fontSize: '14px', color: '#0c2035', fontWeight: 600, marginBottom: '6px' }}>
          {pub.authors ? pub.authors.join(', ') : 'Dr. Ananya Rao, Dr. Karthik Menon'}
        </div>

        {/* Institutional & Citation Details Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', fontSize: '13px', color: '#475569', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Building2 size={15} color="#0284c7" />
            <span>{pub.institution}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MapPin size={15} color="#0284c7" />
            <span>{pub.region}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Calendar size={15} color="#0284c7" />
            <span>Year: {pub.year}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
            <span>DOI: {pub.doi}</span>
          </div>
        </div>

        {/* Action Buttons Toolbar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <button 
            className="btn btn-primary"
            onClick={handleDownloadPdf}
            disabled={downloadingPdf}
          >
            <Download size={15} />
            {downloadingPdf ? 'Preparing Document...' : `Download PDF (${pub.pdfSize || '4.8 MB'})`}
          </button>

          <button 
            className="btn btn-secondary"
            onClick={() => setShowCitationModal(true)}
          >
            <Quote size={15} />
            Cite Research
          </button>

          <button 
            className="btn btn-secondary"
            onClick={() => onLaunchAiStudio(pub.id)}
          >
            <Share2 size={15} />
            Outreach & Dissemination
          </button>

          {downloadSuccess && (
            <span style={{ color: '#059669', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px', marginLeft: 'auto' }}>
              <CheckCircle2 size={16} /> Official Monograph PDF Download Initiated
            </span>
          )}
        </div>
      </div>

      {/* Two Column Layout: Main Text / Abstract + Metadata & Linked Assets */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '28px', marginBottom: '40px' }}>
        {/* Left Column: Abstract & Metadata Section */}
        <div>
          {/* Abstract Box */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#0c2035', marginBottom: '12px' }}>Abstract</h3>
            <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: '#334155', textAlign: 'justify' }}>
              {pub.abstract}
            </p>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
              <strong style={{ fontSize: '12.5px', color: '#0c2035', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Keywords & Subject Headings
              </strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {pub.keywords && pub.keywords.map(kw => (
                  <span key={kw} className="tag-chip">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Standardized Metadata Section */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#0c2035', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={18} color="#0284c7" /> Standardized Dublin Core & ISO-19115 Metadata
              </h3>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Schema v2.4</span>
            </div>

            <div className="table-responsive">
              <table className="sci-table">
                <tbody>
                  <tr>
                    <td style={{ width: '25%', fontWeight: 600, color: '#0c2035' }}>Title</td>
                    <td>{pub.title}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#0c2035' }}>Authors / Contributors</td>
                    <td>{pub.authors ? pub.authors.join('; ') : 'NCPOR Polar Science Team'}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#0c2035' }}>Publication Year</td>
                    <td>{pub.year}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#0c2035' }}>Target Region</td>
                    <td>{pub.region} (Princess Elizabeth Land & Southern Ocean)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#0c2035' }}>Research Domain</td>
                    <td>{pub.researchArea}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#0c2035' }}>Lead Institution</td>
                    <td>{pub.institution}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#0c2035' }}>Persistent Identifier (DOI)</td>
                    <td style={{ fontFamily: 'var(--font-mono)' }}>https://doi.org/{pub.doi}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#0c2035' }}>Repository Version</td>
                    <td>Version 1.2 (Post-peer review archival release)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: '#0c2035' }}>Usage & Access License</td>
                    <td>Creative Commons Attribution 4.0 International (CC BY 4.0)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Linked Datasets & Linked Media */}
        <div>
          {/* Related Datasets Section */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', marginBottom: '20px', boxShadow: 'var(--shadow-sm)' }}>
            <h4 style={{ fontSize: '14px', color: '#0c2035', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
              <Database size={16} color="#059669" /> Linked Scientific Datasets ({relatedDatasets.length || 1})
            </h4>

            {relatedDatasets.length > 0 ? (
              relatedDatasets.map(ds => (
                <div key={ds.id} style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px', marginBottom: '10px', backgroundColor: '#f8fafc' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span className="badge badge-dataset" style={{ fontSize: '10px' }}>{ds.datasetCode}</span>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>{ds.size}</span>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#0c2035', marginBottom: '6px' }}>
                    {ds.title}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#475569', marginBottom: '8px' }}>
                    Format: {ds.format} • {ds.dataType}
                  </div>
                  <button 
                    className="btn btn-sm btn-accent" 
                    onClick={() => onSelectDataset(ds.id)}
                    style={{ width: '100%' }}
                  >
                    Preview Dataset Table
                  </button>
                </div>
              ))
            ) : (
              /* Fallback link to Primary Sea Ice dataset */
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px', backgroundColor: '#f8fafc' }}>
                <span className="badge badge-dataset" style={{ fontSize: '10px', marginBottom: '4px' }}>POLAR-ANT-2025-001</span>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#0c2035', marginBottom: '4px' }}>
                  Antarctic Sea Ice Observation Dataset
                </div>
                <button 
                  className="btn btn-sm btn-accent" 
                  onClick={() => onSelectDataset('ds-001')}
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  Preview Dataset Table
                </button>
              </div>
            )}
          </div>

          {/* Related Media Section */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', marginBottom: '20px', boxShadow: 'var(--shadow-sm)' }}>
            <h4 style={{ fontSize: '14px', color: '#0c2035', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
              <ImageIcon size={16} color="#7c3aed" /> Related Media Assets ({relatedMedia.length || 1})
            </h4>

            {relatedMedia.length > 0 ? (
              relatedMedia.map(m => (
                <div 
                  key={m.id} 
                  style={{ display: 'flex', gap: '10px', marginBottom: '10px', cursor: 'pointer', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '6px', backgroundColor: '#f8fafc' }}
                  onClick={() => onSelectMedia(m)}
                >
                  <img 
                    src={m.imageUrl} 
                    alt={m.title} 
                    style={{ width: '64px', height: '52px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                  <div>
                    <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#0c2035', lineHeight: '1.3' }}>
                      {m.title}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                      {m.category} • {m.expedition}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              /* Fallback to first media */
              mediaItems.slice(0, 2).map(m => (
                <div 
                  key={m.id} 
                  style={{ display: 'flex', gap: '10px', marginBottom: '10px', cursor: 'pointer', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '6px', backgroundColor: '#f8fafc' }}
                  onClick={() => onSelectMedia(m)}
                >
                  <img 
                    src={m.imageUrl} 
                    alt={m.title} 
                    style={{ width: '64px', height: '52px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                  <div>
                    <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#0c2035', lineHeight: '1.3' }}>
                      {m.title}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                      {m.category} • {m.expedition}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Related Research Monograph Links */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
            <h4 style={{ fontSize: '14px', color: '#0c2035', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
              <BookOpen size={16} color="#0284c7" /> Related Publications
            </h4>
            {relatedPubs.map(rp => (
              <div 
                key={rp.id}
                style={{ padding: '8px 0', borderBottom: '1px solid #f1f5f9', cursor: 'pointer' }}
                onClick={() => onSelectPublication(rp.id)}
              >
                <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#0369a1', lineHeight: '1.3' }}>
                  {rp.title}
                </div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '3px' }}>
                  {rp.year} • {rp.region}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Citation Modal */}
      {showCitationModal && (
        <CitationModal 
          publication={pub} 
          onClose={() => setShowCitationModal(false)} 
        />
      )}
    </div>
  );
}
