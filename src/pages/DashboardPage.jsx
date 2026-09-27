import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  FileText, 
  Database, 
  Image, 
  GraduationCap, 
  Compass, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Building2, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Share2,
  Layers,
  ChevronRight
} from 'lucide-react';
import { REPOSITORY_STATS, INSTITUTIONAL_UPDATES } from '../data/polarData';

export function DashboardPage({ 
  onSearch, 
  setActivePage, 
  onSelectPublication, 
  publications = [],
  datasets = [] 
}) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchInput || 'Antarctic sea ice');
    }
  };

  const handleQuickKeyword = (kw) => {
    setSearchInput(kw);
    if (onSearch) {
      onSearch(kw);
    }
  };

  // Recent 5 research records
  const recentResearch = publications.slice(0, 5);

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-dashboard">
        <div className="hero-content">
          <h1 className="hero-title">Polar Science Knowledge Portal</h1>
          <p className="hero-subtitle">
            Discover, explore and share knowledge from India's polar research ecosystem.
          </p>

          {/* Prominent Search Bar */}
          <form onSubmit={handleSearchSubmit} className="hero-search-box">
            <input
              type="text"
              className="hero-search-input"
              placeholder="Search expeditions, publications, datasets, researchers, locations..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className="hero-search-btn">
              <Search size={16} />
              <span>Search Portal</span>
            </button>
          </form>

          {/* Quick Query Pills */}
          <div className="search-pills">
            <span>Suggested research queries:</span>
            <button type="button" className="search-pill-btn" onClick={() => handleQuickKeyword("Antarctic sea ice")}>
              Antarctic sea ice
            </button>
            <button type="button" className="search-pill-btn" onClick={() => handleQuickKeyword("Prydz Bay")}>
              Prydz Bay
            </button>
            <button type="button" className="search-pill-btn" onClick={() => handleQuickKeyword("Schirmacher Oasis")}>
              Schirmacher Oasis
            </button>
            <button type="button" className="search-pill-btn" onClick={() => handleQuickKeyword("Kongsfjorden")}>
              Kongsfjorden (Arctic)
            </button>
            <button type="button" className="search-pill-btn" onClick={() => handleQuickKeyword("Microplastics")}>
              Microplastics
            </button>
          </div>
        </div>
      </section>

      {/* Clean Repository Statistics Cards */}
      <section style={{ marginBottom: '36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#0c2035', fontWeight: 600 }}>
            Repository Catalog At A Glance
          </h3>
          <span style={{ fontSize: '12px', color: '#64748b' }}>
            Synchronized with NCPOR & INCOIS Archives (Open Access: {REPOSITORY_STATS.openAccessPercent}%)
          </span>
        </div>

        <div className="stats-grid">
          <div className="stat-card" onClick={() => setActivePage('repository')} style={{ cursor: 'pointer' }}>
            <div className="stat-icon-wrapper" style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}>
              <BookOpen size={22} />
            </div>
            <div>
              <div className="stat-number">{REPOSITORY_STATS.publications.toLocaleString()}</div>
              <div className="stat-label">Research Publications</div>
            </div>
          </div>

          <div className="stat-card" onClick={() => setActivePage('repository')} style={{ cursor: 'pointer' }}>
            <div className="stat-icon-wrapper" style={{ backgroundColor: '#fef3c7', color: '#b45309' }}>
              <FileText size={22} />
            </div>
            <div>
              <div className="stat-number">{REPOSITORY_STATS.expeditions.toLocaleString()}</div>
              <div className="stat-label">Expedition Reports</div>
            </div>
          </div>

          <div className="stat-card" onClick={() => setActivePage('datasets')} style={{ cursor: 'pointer' }}>
            <div className="stat-icon-wrapper" style={{ backgroundColor: '#ecfdf5', color: '#059669' }}>
              <Database size={22} />
            </div>
            <div>
              <div className="stat-number">{REPOSITORY_STATS.datasets.toLocaleString()}</div>
              <div className="stat-label">Scientific Datasets</div>
            </div>
          </div>

          <div className="stat-card" onClick={() => setActivePage('media')} style={{ cursor: 'pointer' }}>
            <div className="stat-icon-wrapper" style={{ backgroundColor: '#ede9fe', color: '#7c3aed' }}>
              <Image size={22} />
            </div>
            <div>
              <div className="stat-number">{REPOSITORY_STATS.mediaAssets.toLocaleString()}</div>
              <div className="stat-label">Media Assets</div>
            </div>
          </div>

          <div className="stat-card" onClick={() => setActivePage('map')} style={{ cursor: 'pointer' }}>
            <div className="stat-icon-wrapper" style={{ backgroundColor: '#f1f5f9', color: '#0f172a' }}>
              <Compass size={22} />
            </div>
            <div>
              <div className="stat-number">{REPOSITORY_STATS.activeExpeditions.toLocaleString()}</div>
              <div className="stat-label">Research Expeditions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Polar Knowledge Section */}
      <section style={{ marginBottom: '40px' }}>
        <div className="section-header">
          <div>
            <h2>Explore Polar Knowledge</h2>
            <div className="section-subtitle">Faceted access to categorized scientific collections and field documentation</div>
          </div>
          <button className="btn btn-sm btn-outline-primary" onClick={() => setActivePage('repository')}>
            View All in Repository <ChevronRight size={14} />
          </button>
        </div>

        <div className="category-grid">
          <div className="category-card" onClick={() => setActivePage('repository')}>
            <div className="category-icon" style={{ backgroundColor: '#e0f2fe', color: '#0369a1' }}>
              <BookOpen size={20} />
            </div>
            <div className="category-title">Research Publications</div>
            <div className="category-desc">
              Peer-reviewed articles, monograph series, and journal papers across cryospheric disciplines.
            </div>
          </div>

          <div className="category-card" onClick={() => setActivePage('repository')}>
            <div className="category-icon" style={{ backgroundColor: '#fef3c7', color: '#b45309' }}>
              <FileText size={20} />
            </div>
            <div className="category-title">Expedition Reports</div>
            <div className="category-desc">
              Official cruise and station field reports from the 1st to 44th Indian Antarctic and Arctic missions.
            </div>
          </div>

          <div className="category-card" onClick={() => setActivePage('datasets')}>
            <div className="category-icon" style={{ backgroundColor: '#ecfdf5', color: '#047857' }}>
              <Database size={20} />
            </div>
            <div className="category-title">Scientific Datasets</div>
            <div className="category-desc">
              Calibrated oceanographic CTD profiles, satellite sea ice time-series, and atmospheric soundings.
            </div>
          </div>

          <div className="category-card" onClick={() => setActivePage('media')}>
            <div className="category-icon" style={{ backgroundColor: '#ede9fe', color: '#6d28d9' }}>
              <Image size={20} />
            </div>
            <div className="category-title">Photos & Videos</div>
            <div className="category-desc">
              High-resolution polar imagery, expedition footage, research station views, and marine wildlife.
            </div>
          </div>

          <div className="category-card" onClick={() => setActivePage('educational')}>
            <div className="category-icon" style={{ backgroundColor: '#fce7f3', color: '#be185d' }}>
              <GraduationCap size={20} />
            </div>
            <div className="category-title">Educational Resources</div>
            <div className="category-desc">
              Curriculum-aligned guides, polar science fundamentals, infographics, and student primers.
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Layout: Recent Research + Latest Institutional Updates */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '28px', marginBottom: '44px' }}>
        {/* Left Column: Recent Research */}
        <div>
          <div className="section-header">
            <div>
              <h2>Recent Research</h2>
              <div className="section-subtitle">Newly indexed publications, monographs and hydrographic datasets</div>
            </div>
            <button className="btn btn-sm btn-outline-primary" onClick={() => setActivePage('repository')}>
              Browse Catalog
            </button>
          </div>

          <div>
            {recentResearch.map((item) => (
              <div key={item.id} className="resource-item-card">
                <div className="resource-header-line">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge badge-publication">{item.type}</span>
                    <span style={{ fontSize: '12px', color: '#0369a1', fontWeight: 600 }}>{item.researchArea}</span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    DOI: {item.doi}
                  </span>
                </div>

                <div 
                  className="resource-title-link"
                  onClick={() => onSelectPublication(item.id)}
                >
                  {item.title}
                </div>

                <div className="resource-meta-bar">
                  <div className="meta-item">
                    <Calendar size={13} color="#0284c7" />
                    <span>{item.year}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={13} color="#0284c7" />
                    <span>{item.region}</span>
                  </div>
                  <div className="meta-item">
                    <Building2 size={13} color="#0284c7" />
                    <span>{item.institution}</span>
                  </div>
                </div>

                <p className="resource-abstract">
                  {item.abstract}
                </p>

                <div className="resource-footer-row">
                  <div className="tags-group">
                    {item.keywords.slice(0, 3).map((kw) => (
                      <span key={kw} className="tag-chip" onClick={() => handleQuickKeyword(kw)}>
                        {kw}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button 
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => onSelectPublication(item.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Latest Updates & News */}
        <div>
          <div className="section-header">
            <div>
              <h2>Latest Updates</h2>
              <div className="section-subtitle">Institutional announcements</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {INSTITUTIONAL_UPDATES.map((update) => (
              <div 
                key={update.id} 
                style={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '6px', 
                  padding: '16px', 
                  boxShadow: 'var(--shadow-sm)' 
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '11px', color: '#0369a1', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {update.category}
                  </span>
                  <span style={{ fontSize: '11.5px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    {update.date}
                  </span>
                </div>
                <h4 style={{ fontSize: '13.5px', color: '#0c2035', marginBottom: '6px', lineHeight: '1.4' }}>
                  {update.title}
                </h4>
                <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.45', marginBottom: '10px' }}>
                  {update.summary}
                </p>
                <div style={{ fontSize: '12px', color: '#0284c7', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                  <span>{update.linkText}</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            ))}

            {/* Quick Callout: Outreach & Dissemination Suite */}
            <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '6px', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#0369a1' }}>
                <Share2 size={18} />
                <h4 style={{ color: '#0369a1', fontSize: '14px' }}>Outreach & Dissemination Suite</h4>
              </div>
              <p style={{ fontSize: '12.5px', color: '#334155', lineHeight: '1.45', marginBottom: '12px' }}>
                Translate complex polar research into press releases, social communications, and educational primers for public outreach.
              </p>
              <button 
                className="btn btn-sm btn-accent" 
                style={{ width: '100%' }}
                onClick={() => setActivePage('aistudio')}
              >
                Open Outreach Suite
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Audience Segments Section: "Who is this portal for?" */}
      <section style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '28px 24px', marginBottom: '32px', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 24px' }}>
          <h2 style={{ fontSize: '1.4rem', color: '#0c2035', marginBottom: '6px' }}>Who is this portal for?</h2>
          <p style={{ fontSize: '13.5px', color: '#64748b' }}>
            A single, unified interface addressing the specific workflows of India's diverse polar science stakeholders.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          <div style={{ borderLeft: '3px solid #0284c7', paddingLeft: '14px' }}>
            <h4 style={{ color: '#0c2035', fontSize: '14.5px', marginBottom: '4px' }}>Researchers</h4>
            <div style={{ fontSize: '12px', color: '#0369a1', fontWeight: 600, marginBottom: '6px' }}>Search, upload and collaborate</div>
            <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5' }}>
              Discover open-access observational datasets, download NetCDF hydrographic profiles, trace DOIs, and contribute new field telemetry.
            </p>
          </div>

          <div style={{ borderLeft: '3px solid #059669', paddingLeft: '14px' }}>
            <h4 style={{ color: '#0c2035', fontSize: '14.5px', marginBottom: '4px' }}>Students & Educators</h4>
            <div style={{ fontSize: '12px', color: '#059669', fontWeight: 600, marginBottom: '6px' }}>Learn and explore resources</div>
            <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5' }}>
              Access simplified science fact-sheets, explore high-latitude wildlife galleries, and understand how polar climate regulates monsoons.
            </p>
          </div>

          <div style={{ borderLeft: '3px solid #7c3aed', paddingLeft: '14px' }}>
            <h4 style={{ color: '#0c2035', fontSize: '14.5px', marginBottom: '4px' }}>NCPOR & Government</h4>
            <div style={{ fontSize: '12px', color: '#7c3aed', fontWeight: 600, marginBottom: '6px' }}>Archive, monitor and analyze</div>
            <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5' }}>
              Maintain digital institutional memory, track Antarctic Treaty environmental compliance, and monitor national research output.
            </p>
          </div>

          <div style={{ borderLeft: '3px solid #b45309', paddingLeft: '14px' }}>
            <h4 style={{ color: '#0c2035', fontSize: '14.5px', marginBottom: '4px' }}>General Public</h4>
            <div style={{ fontSize: '12px', color: '#b45309', fontWeight: 600, marginBottom: '6px' }}>Explore and learn</div>
            <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5' }}>
              Follow Indian expedition milestones, view stunning station photography, and gain transparent insight into publicly funded polar science.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
