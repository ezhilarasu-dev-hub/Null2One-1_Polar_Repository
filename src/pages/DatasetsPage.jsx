import React, { useState } from 'react';
import { 
  Database, 
  Search, 
  Download, 
  Eye, 
  CheckCircle2, 
  Filter, 
  Calendar, 
  MapPin, 
  FileSpreadsheet, 
  ShieldCheck, 
  Layers,
  ExternalLink,
  Table
} from 'lucide-react';
import { DatasetPreviewModal } from '../components/DatasetPreviewModal';

export function DatasetsPage({ datasets = [], initialPreviewDatasetId = null }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedFormat, setSelectedFormat] = useState('All');
  const [activePreviewDataset, setActivePreviewDataset] = useState(() => {
    if (initialPreviewDatasetId) {
      return datasets.find(d => d.id === initialPreviewDatasetId) || datasets[0];
    }
    return null;
  });
  const [downloadToast, setDownloadToast] = useState(null);
  const [expandedMetadataId, setExpandedMetadataId] = useState(null);

  // Filter datasets
  const filteredDatasets = datasets.filter(ds => {
    const matchesSearch = 
      ds.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ds.datasetCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ds.dataType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ds.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRegion = selectedRegion === 'All' || ds.region === selectedRegion;
    const matchesFormat = selectedFormat === 'All' || ds.format.includes(selectedFormat);

    return matchesSearch && matchesRegion && matchesFormat;
  });

  const handleDownload = (ds) => {
    setDownloadToast(`Initiating archive transfer for ${ds.datasetCode} (${ds.format.split('/')[0].trim()})`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3500);
  };

  const toggleMetadata = (id) => {
    setExpandedMetadataId(expandedMetadataId === id ? null : id);
  };

  return (
    <div className="container">
      {/* Page Title & Breadcrumb */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
          Portal / Scientific Datasets Catalog
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 style={{ fontSize: '1.65rem', color: '#0c2035' }}>Scientific Datasets Gateway</h1>
            <div style={{ fontSize: '13.5px', color: '#475569' }}>
              Standardized NetCDF-4, GeoTIFF, and CSV telemetry time-series validated under WMO and GO-SHIP protocols.
            </div>
          </div>
          <div style={{ fontSize: '12.5px', color: '#059669', display: 'flex', alignItems: 'center', gap: '5px', backgroundColor: '#ecfdf5', padding: '5px 12px', borderRadius: '4px', border: '1px solid #a7f3d0' }}>
            <ShieldCheck size={16} /> All 724 datasets certified Open Access
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '16px', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Search box */}
          <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              placeholder="Search by dataset ID (e.g. POLAR-ANT), parameter, or instrument..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '8px 12px 8px 36px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '13.5px' }}
            />
          </div>

          {/* Region Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <span style={{ color: '#64748b' }}>Region:</span>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px', backgroundColor: '#fff', color: '#0c2035' }}
            >
              <option value="All">All Polar Regions</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Southern Ocean">Southern Ocean</option>
              <option value="Arctic">Arctic</option>
            </select>
          </div>

          {/* Format Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <span style={{ color: '#64748b' }}>Format:</span>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px', backgroundColor: '#fff', color: '#0c2035' }}
            >
              <option value="All">All Formats</option>
              <option value="CSV">CSV</option>
              <option value="NetCDF">NetCDF-4</option>
              <option value="GeoTIFF">GeoTIFF</option>
            </select>
          </div>
        </div>

        {downloadToast && (
          <div style={{ marginTop: '12px', padding: '8px 14px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px', color: '#1d4ed8', fontSize: '12.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={16} /> {downloadToast}
          </div>
        )}
      </div>

      {/* Dataset Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        {filteredDatasets.map(ds => {
          const isExpanded = expandedMetadataId === ds.id;

          return (
            <div key={ds.id} className="resource-item-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="badge badge-dataset" style={{ fontFamily: 'var(--font-mono)' }}>
                    {ds.datasetCode}
                  </span>
                  <span style={{ fontSize: '12px', color: '#0369a1', fontWeight: 600 }}>
                    {ds.dataType}
                  </span>
                  <span style={{ fontSize: '11px', backgroundColor: '#ecfdf5', color: '#065f46', border: '1px solid #a7f3d0', padding: '1px 6px', borderRadius: '3px', fontWeight: 600 }}>
                    Status: {ds.status}
                  </span>
                </div>

                <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', gap: '12px' }}>
                  <span>Size: <strong>{ds.size}</strong></span>
                  <span>Format: <strong>{ds.format}</strong></span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0c2035', marginBottom: '4px' }}>
                {ds.title}
              </div>
              {ds.subtitle && (
                <div style={{ fontSize: '13px', color: '#475569', marginBottom: '10px' }}>
                  {ds.subtitle}
                </div>
              )}

              {/* Spatial & Temporal Meta */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '12.5px', color: '#64748b', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={13} color="#0284c7" />
                  <span>Region: {ds.region}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={13} color="#0284c7" />
                  <span>Year: {ds.year}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Layers size={13} color="#0284c7" />
                  <span>Parameters: {ds.parameters ? ds.parameters.slice(0, 3).join(', ') : 'Telemetry'}</span>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '13.5px', color: '#334155', lineHeight: '1.5', marginBottom: '14px' }}>
                {ds.description}
              </p>

              {/* Collapsible Metadata Drawer */}
              {isExpanded && (
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '16px', marginBottom: '16px', fontSize: '13px' }}>
                  <div style={{ fontWeight: 600, color: '#0c2035', marginBottom: '8px' }}>
                    Dataset Technical Specifications & Provenance
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '10px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>TEMPORAL BOUNDS</span>
                      <strong>{ds.temporalCoverage}</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>SPATIAL EXTENT</span>
                      <strong>{ds.spatialCoverage}</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>DEPLOYED SENSORS</span>
                      <span>{ds.sensors ? ds.sensors.join('; ') : 'Shipboard & Satellite'}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>DIGITAL OBJECT IDENTIFIER</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px' }}>{ds.doi}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#475569', borderTop: '1px solid #e2e8f0', paddingTop: '8px' }}>
                    <strong>Recommended Citation:</strong> {ds.citation}
                  </div>
                </div>
              )}

              {/* Action Buttons Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                <button 
                  className="btn btn-sm btn-secondary"
                  onClick={() => toggleMetadata(ds.id)}
                >
                  <Eye size={13} /> {isExpanded ? 'Hide Technical Metadata' : 'View Metadata'}
                </button>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    className="btn btn-sm btn-accent"
                    onClick={() => setActivePreviewDataset(ds)}
                  >
                    <Table size={13} />
                    Preview Data
                  </button>

                  <button 
                    className="btn btn-sm btn-primary"
                    onClick={() => handleDownload(ds)}
                  >
                    <Download size={13} />
                    Download ({ds.size})
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dataset Preview Modal */}
      {activePreviewDataset && (
        <DatasetPreviewModal
          dataset={activePreviewDataset}
          onClose={() => setActivePreviewDataset(null)}
        />
      )}
    </div>
  );
}
