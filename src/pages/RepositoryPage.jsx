import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  FileText, 
  Database, 
  Image, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Building2, 
  Download, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  X,
  SlidersHorizontal,
  LayoutList,
  LayoutGrid
} from 'lucide-react';

export function RepositoryPage({
  publications = [],
  expeditionReports = [],
  datasets = [],
  mediaItems = [],
  educationalResources = [],
  initialSearchQuery = '',
  onSelectPublication,
  onSelectDataset,
  onSelectMedia,
  onSelectEducational
}) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedInstitutions, setSelectedInstitutions] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  // Build unified items pool
  const allItems = useMemo(() => {
    const list = [];

    // Publications
    publications.forEach(p => {
      list.push({
        id: p.id,
        rawId: p.id,
        title: p.title,
        type: 'Research Publication',
        badgeClass: 'badge-publication',
        year: p.year,
        region: p.region,
        researchArea: p.researchArea,
        institution: p.institution,
        authors: p.authors || [],
        journal: p.journal || '',
        description: p.abstract,
        tags: p.keywords || [],
        doi: p.doi,
        downloads: p.downloads || 240,
        citations: p.citations || 12,
        itemRef: p,
        category: 'publication'
      });
    });

    // Expedition Reports
    expeditionReports.forEach(e => {
      list.push({
        id: e.id,
        rawId: e.id,
        title: e.title,
        type: 'Expedition Report',
        badgeClass: 'badge-expedition',
        year: e.year,
        region: e.region,
        researchArea: e.researchArea,
        institution: e.institution,
        authors: e.leader ? [e.leader] : [],
        journal: e.vesselOrRoute || '',
        description: e.summary,
        tags: [e.expeditionNumber, ...(e.stationsCovered || [])],
        doi: e.doi,
        downloads: 180,
        citations: 0,
        itemRef: e,
        category: 'expedition'
      });
    });

    // Datasets
    datasets.forEach(d => {
      list.push({
        id: d.id,
        rawId: d.id,
        title: d.title,
        type: 'Dataset',
        badgeClass: 'badge-dataset',
        year: d.year,
        region: d.region,
        researchArea: d.dataType.includes('Ocean') ? 'Oceanography' : d.dataType.includes('Atmospheric') ? 'Atmospheric Science' : 'Climate',
        institution: d.institution,
        authors: d.principalInvestigator ? [d.principalInvestigator] : [],
        journal: d.dataType || '',
        description: d.description,
        tags: d.parameters ? d.parameters.slice(0, 3) : ['Telemetry', 'Satellite'],
        doi: d.datasetCode,
        downloads: 420,
        citations: 5,
        itemRef: d,
        category: 'dataset'
      });
    });

    // Media
    mediaItems.forEach(m => {
      list.push({
        id: m.id,
        rawId: m.id,
        title: m.title,
        type: m.category === 'Videos' ? 'Video' : 'Image',
        badgeClass: 'badge-media',
        year: m.year,
        region: m.location.includes('Arctic') ? 'Arctic' : m.location.includes('Southern Ocean') ? 'Southern Ocean' : 'Antarctica',
        researchArea: m.subCategory === 'Research' ? 'Oceanography' : 'Glaciology',
        institution: 'NCPOR / MoES Media Cell',
        authors: m.photographer ? [m.photographer] : [],
        journal: m.category,
        description: m.description,
        tags: m.tags ? m.tags.slice(0, 3) : ['Media', 'Polar'],
        doi: 'Media Asset',
        downloads: 110,
        citations: 0,
        imageUrl: m.imageUrl,
        itemRef: m,
        category: 'media'
      });
    });

    // Educational
    educationalResources.forEach(ed => {
      list.push({
        id: ed.id,
        rawId: ed.id,
        title: ed.title,
        type: 'Educational Resource',
        badgeClass: 'badge-educational',
        year: 2025,
        region: ed.category.includes('Arctic') ? 'Arctic' : 'Antarctica',
        researchArea: ed.category.includes('Ocean') ? 'Oceanography' : ed.category.includes('Climate') ? 'Climate' : 'Glaciology',
        institution: 'NCPOR Polar Science Outreach',
        authors: ['Polar Outreach Team'],
        journal: ed.level || 'General Science',
        description: ed.summary,
        tags: [ed.category, ed.level],
        doi: 'Educational Primer',
        downloads: 310,
        citations: 0,
        itemRef: ed,
        category: 'educational'
      });
    });

    return list;
  }, [publications, expeditionReports, datasets, mediaItems, educationalResources]);

  // Apply filters and search
  const filteredItems = useMemo(() => {
    let result = allItems;

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.region.toLowerCase().includes(q) ||
        item.researchArea.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q)) ||
        item.institution.toLowerCase().includes(q)
      );
    }

    // Type filter
    if (selectedTypes.length > 0) {
      result = result.filter(item => selectedTypes.includes(item.type));
    }

    // Region filter
    if (selectedRegions.length > 0) {
      result = result.filter(item => selectedRegions.includes(item.region));
    }

    // Research Area filter
    if (selectedAreas.length > 0) {
      result = result.filter(item => selectedAreas.includes(item.researchArea));
    }

    // Year filter
    if (selectedYears.length > 0) {
      result = result.filter(item => selectedYears.includes(String(item.year)));
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'newest') return b.year - a.year;
      if (sortBy === 'downloads') return b.downloads - a.downloads;
      if (sortBy === 'citations') return b.citations - a.citations;
      // 'relevance': title match with search query first, then newest
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const aMatch = a.title.toLowerCase().includes(q);
        const bMatch = b.title.toLowerCase().includes(q);
        if (aMatch && !bMatch) return -1;
        if (!aMatch && bMatch) return 1;
      }
      return b.year - a.year;
    });

    return result;
  }, [allItems, searchQuery, selectedTypes, selectedRegions, selectedAreas, selectedYears, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / pageSize) || 1;
  const paginatedItems = filteredItems.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const toggleFilter = (list, setList, value) => {
    setCurrentPage(1);
    if (list.includes(value)) {
      setList(list.filter(item => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedTypes([]);
    setSelectedRegions([]);
    setSelectedAreas([]);
    setSelectedYears([]);
    setSelectedInstitutions([]);
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleItemClick = (item) => {
    if (item.category === 'publication') {
      onSelectPublication(item.rawId);
    } else if (item.category === 'dataset') {
      onSelectDataset(item.rawId);
    } else if (item.category === 'media') {
      onSelectMedia(item.itemRef);
    } else if (item.category === 'educational') {
      onSelectEducational(item.itemRef);
    } else {
      // Expedition report fallback to publication detail style
      onSelectPublication('pub-001');
    }
  };

  return (
    <div className="container">
      {/* Top Breadcrumb & Page Title */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
          Portal / Knowledge Repository
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 style={{ fontSize: '1.65rem', color: '#0c2035' }}>Polar Knowledge Repository</h1>
            <div style={{ fontSize: '13.5px', color: '#475569' }}>
              Multi-disciplinary scientific documentation, open-access datasets, field expedition archives and media assets.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12.5px', color: '#64748b' }}>View:</span>
            <button 
              className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <LayoutList size={14} />
            </button>
            <button 
              className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <LayoutGrid size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Split Layout: Left Filters + Right Results */}
      <div className="layout-split">
        {/* Left Sidebar Filters */}
        <aside className="sidebar-filters">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
            <span style={{ fontWeight: 700, fontSize: '13.5px', color: '#0c2035', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Filter size={15} color="#0284c7" /> Filter Resources
            </span>
            {(selectedTypes.length > 0 || selectedRegions.length > 0 || selectedAreas.length > 0 || selectedYears.length > 0 || searchQuery) && (
              <button 
                onClick={clearAllFilters}
                style={{ background: 'none', border: 'none', color: '#0284c7', fontSize: '12px', cursor: 'pointer', fontWeight: 500 }}
              >
                Clear all
              </button>
            )}
          </div>

          {/* Content Type Filter */}
          <div className="filter-group">
            <div className="filter-group-title">Content Type</div>
            {[
              'Research Publication',
              'Expedition Report',
              'Dataset',
              'Image',
              'Video',
              'Educational Resource'
            ].map(type => (
              <div 
                key={type} 
                className="filter-option"
                onClick={() => toggleFilter(selectedTypes, setSelectedTypes, type)}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => {}}
                    style={{ accentColor: '#0284c7' }}
                  />
                  <span>{type}</span>
                </label>
                <span className="filter-count">
                  {allItems.filter(i => i.type === type).length}
                </span>
              </div>
            ))}
          </div>

          {/* Region Filter */}
          <div className="filter-group">
            <div className="filter-group-title">Polar Region</div>
            {['Antarctica', 'Arctic', 'Southern Ocean'].map(region => (
              <div 
                key={region} 
                className="filter-option"
                onClick={() => toggleFilter(selectedRegions, setSelectedRegions, region)}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={selectedRegions.includes(region)}
                    onChange={() => {}}
                    style={{ accentColor: '#0284c7' }}
                  />
                  <span>{region}</span>
                </label>
                <span className="filter-count">
                  {allItems.filter(i => i.region === region).length}
                </span>
              </div>
            ))}
          </div>

          {/* Research Area Filter */}
          <div className="filter-group">
            <div className="filter-group-title">Research Area</div>
            {[
              'Climate Science',
              'Oceanography',
              'Glaciology',
              'Atmospheric Science',
              'Biodiversity',
              'Geology'
            ].map(area => (
              <div 
                key={area} 
                className="filter-option"
                onClick={() => toggleFilter(selectedAreas, setSelectedAreas, area)}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={selectedAreas.includes(area)}
                    onChange={() => {}}
                    style={{ accentColor: '#0284c7' }}
                  />
                  <span>{area}</span>
                </label>
                <span className="filter-count">
                  {allItems.filter(i => i.researchArea === area || (area === 'Climate Science' && i.researchArea === 'Climate')).length}
                </span>
              </div>
            ))}
          </div>

          {/* Year Filter */}
          <div className="filter-group">
            <div className="filter-group-title">Publication Year</div>
            {['2025', '2024', '2023'].map(yr => (
              <div 
                key={yr} 
                className="filter-option"
                onClick={() => toggleFilter(selectedYears, setSelectedYears, yr)}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={selectedYears.includes(yr)}
                    onChange={() => {}}
                    style={{ accentColor: '#0284c7' }}
                  />
                  <span>{yr}</span>
                </label>
                <span className="filter-count">
                  {allItems.filter(i => String(i.year) === yr).length}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <main>
          {/* Search & Sort Controls Toolbar */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '14px 18px', marginBottom: '18px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Search input with live clear */}
              <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                <input
                  type="text"
                  placeholder="Filter repository by keywords, parameters, authors, stations..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  style={{ width: '100%', padding: '8px 32px 8px 36px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '13.5px' }}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* Sort By Dropdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                <span style={{ color: '#64748b', whiteSpace: 'nowrap' }}>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{ padding: '6px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px', backgroundColor: '#fff', color: '#0c2035' }}
                >
                  <option value="relevance">Relevance</option>
                  <option value="newest">Newest First</option>
                  <option value="downloads">Most Downloaded</option>
                  <option value="citations">Most Cited</option>
                </select>
              </div>
            </div>

            {/* Active Filter Chips */}
            {(selectedTypes.length > 0 || selectedRegions.length > 0 || selectedAreas.length > 0 || selectedYears.length > 0 || searchQuery) && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Active filters:</span>
                
                {searchQuery && (
                  <span className="tag-chip active" onClick={() => setSearchQuery('')}>
                    Query: "{searchQuery}" <X size={11} style={{ marginLeft: '4px' }} />
                  </span>
                )}

                {selectedTypes.map(t => (
                  <span key={t} className="tag-chip active" onClick={() => toggleFilter(selectedTypes, setSelectedTypes, t)}>
                    Type: {t} <X size={11} style={{ marginLeft: '4px' }} />
                  </span>
                ))}

                {selectedRegions.map(r => (
                  <span key={r} className="tag-chip active" onClick={() => toggleFilter(selectedRegions, setSelectedRegions, r)}>
                    Region: {r} <X size={11} style={{ marginLeft: '4px' }} />
                  </span>
                ))}

                {selectedAreas.map(a => (
                  <span key={a} className="tag-chip active" onClick={() => toggleFilter(selectedAreas, setSelectedAreas, a)}>
                    Area: {a} <X size={11} style={{ marginLeft: '4px' }} />
                  </span>
                ))}

                {selectedYears.map(y => (
                  <span key={y} className="tag-chip active" onClick={() => toggleFilter(selectedYears, setSelectedYears, y)}>
                    Year: {y} <X size={11} style={{ marginLeft: '4px' }} />
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Results Count Summary */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', fontSize: '13px', color: '#57606a' }}>
            <span>
              Showing <strong>{(currentPage - 1) * pageSize + 1}</strong> - <strong>{Math.min(currentPage * pageSize, filteredItems.length)}</strong> of <strong>{filteredItems.length}</strong> resources
            </span>
            {searchQuery && (
              <span style={{ fontSize: '12px', color: '#57606a' }}>
                Filtered by: "{searchQuery}"
              </span>
            )}
          </div>

          {/* Resource List / Grid */}
          {paginatedItems.length === 0 ? (
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #d0d7de', borderRadius: '4px', padding: '48px 24px', textAlign: 'center' }}>
              <BookOpen size={40} color="#8c959f" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '1.2rem', color: '#1f2328', marginBottom: '6px' }}>No matching records found</h3>
              <p style={{ fontSize: '13.5px', color: '#57606a', marginBottom: '16px' }}>
                Try adjusting your filter criteria or search for terms like "Antarctic", "sea ice", or "Prydz Bay".
              </p>
              <button className="btn btn-secondary" onClick={clearAllFilters}>
                Clear All Filters
              </button>
            </div>
          ) : viewMode === 'list' ? (
            <div>
              {paginatedItems.map((item) => (
                <div key={item.id} className="resource-item-card">
                  <div className="resource-header-line">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span className={`badge ${item.badgeClass}`}>{item.type}</span>
                      <span style={{ fontSize: '12px', color: '#0969da', fontWeight: 600 }}>{item.researchArea}</span>
                    </div>
                    <span style={{ fontSize: '11.5px', color: '#57606a', fontFamily: 'var(--font-mono)' }}>
                      {item.doi}
                    </span>
                  </div>

                  <div 
                    className="resource-title-link"
                    onClick={() => handleItemClick(item)}
                  >
                    {item.title}
                  </div>

                  {item.authors && item.authors.length > 0 && (
                    <div style={{ fontSize: '12px', color: '#24292f', marginTop: '3px', fontWeight: 500 }}>
                      {item.authors.join(', ')}
                      {item.journal && (
                        <span style={{ color: '#57606a', fontStyle: 'italic', marginLeft: '6px' }}>
                          — {item.journal}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="resource-meta-bar">
                    <div className="meta-item">
                      <Calendar size={13} color="#0969da" />
                      <span>{item.year}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={13} color="#0969da" />
                      <span>{item.region}</span>
                    </div>
                    <div className="meta-item">
                      <Building2 size={13} color="#0969da" />
                      <span>{item.institution}</span>
                    </div>
                    <div className="meta-item" style={{ marginLeft: 'auto', color: '#57606a', fontSize: '11.5px' }}>
                      <span>Downloads: {item.downloads}</span>
                    </div>
                  </div>

                  <p className="resource-abstract">
                    {item.description}
                  </p>

                  <div className="resource-footer-row">
                    <div className="tags-group">
                      {item.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="tag-chip" 
                          onClick={() => {
                            setSearchQuery(tag);
                            setCurrentPage(1);
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button 
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleItemClick(item)}
                      >
                        View Details
                      </button>
                      {item.type === 'Dataset' && (
                        <button 
                          className="btn btn-sm btn-accent"
                          onClick={() => onSelectDataset(item.rawId)}
                        >
                          Preview Data
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Grid View */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
              {paginatedItems.map((item) => (
                <div key={item.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  {item.imageUrl && (
                    <div style={{ height: '140px', overflow: 'hidden', backgroundColor: '#0c2035' }}>
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span className={`badge ${item.badgeClass}`}>{item.type}</span>
                      <span style={{ fontSize: '11px', color: '#64748b' }}>{item.year}</span>
                    </div>
                    <h4 
                      style={{ fontSize: '14px', color: '#0c2035', marginBottom: '8px', cursor: 'pointer' }}
                      onClick={() => handleItemClick(item)}
                    >
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.45', flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '12px' }}>
                      {item.description}
                    </p>
                    <div style={{ fontSize: '11.5px', color: '#64748b', marginBottom: '12px' }}>
                      📍 {item.region} • {item.researchArea}
                    </div>
                    <button 
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleItemClick(item)}
                      style={{ width: '100%' }}
                    >
                      View Resource
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination UI */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '10px 16px' }}>
              <div style={{ fontSize: '13px', color: '#64748b' }}>
                Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  className="btn btn-sm btn-secondary"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
                >
                  <ChevronLeft size={14} /> Previous
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    className={`btn btn-sm ${currentPage === i + 1 ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setCurrentPage(i + 1)}
                    style={{ minWidth: '32px' }}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  className="btn btn-sm btn-secondary"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
                >
                  Next <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
