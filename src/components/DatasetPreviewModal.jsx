import React, { useState } from 'react';
import { X, Download, FileSpreadsheet, CheckCircle2, Search, Filter, ShieldCheck } from 'lucide-react';

export function DatasetPreviewModal({ dataset, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!dataset) return null;

  const dataRows = dataset.sampleTableData || [];
  const columns = dataRows.length > 0 ? Object.keys(dataRows[0]) : [];

  const filteredRows = dataRows.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleDownloadCsv = () => {
    // Generate simulated CSV content
    const header = columns.join(',');
    const rows = dataRows.map((r) => columns.map((col) => `"${r[col]}"`).join(','));
    const csvContent = "data:text/csv;charset=utf-8," + [header, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${dataset.datasetCode}_preview.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '960px' }} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge badge-dataset">{dataset.datasetCode}</span>
              <span style={{ fontSize: '12px', color: '#0369a1', fontWeight: 600 }}>
                {dataset.dataType} • {dataset.region}
              </span>
              <span style={{ fontSize: '11px', backgroundColor: '#ecfdf5', color: '#065f46', border: '1px solid #a7f3d0', padding: '1px 6px', borderRadius: '3px', fontWeight: 600 }}>
                <ShieldCheck size={12} style={{ display: 'inline', marginRight: '3px' }} />
                Verified QA/QC
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem' }}>{dataset.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} title="Close Preview">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Metadata Summary Box */}
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '14px 18px', marginBottom: '18px', fontSize: '13px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div>
                <span style={{ color: '#64748b', fontSize: '11.5px', textTransform: 'uppercase', fontWeight: 600, display: 'block' }}>Temporal Coverage</span>
                <strong>{dataset.temporalCoverage || 'Continuous Seasonal'}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '11.5px', textTransform: 'uppercase', fontWeight: 600, display: 'block' }}>Spatial Coverage</span>
                <strong>{dataset.spatialCoverage || dataset.region}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '11.5px', textTransform: 'uppercase', fontWeight: 600, display: 'block' }}>Sensors / Instrumentation</span>
                <span>{dataset.sensors ? dataset.sensors.join(', ') : 'Standard Hydrographic CTD'}</span>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '11.5px', textTransform: 'uppercase', fontWeight: 600, display: 'block' }}>Format & Size</span>
                <span>{dataset.format} ({dataset.size})</span>
              </div>
            </div>
          </div>

          {/* Table Search & Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', gap: '12px' }}>
            <div style={{ position: 'relative', width: '280px' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
              <input
                type="text"
                placeholder="Filter sample records..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '6px 10px 6px 30px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '12.5px' }}
              />
            </div>

            <div style={{ fontSize: '12px', color: '#64748b' }}>
              Displaying <strong>{filteredRows.length}</strong> of <strong>{dataRows.length}</strong> sample calibrated records
            </div>
          </div>

          {/* Scientific Tabular Grid */}
          <div className="table-responsive" style={{ maxHeight: '320px' }}>
            <table className="sci-table">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th key={col} style={{ textTransform: 'capitalize' }}>
                      {col.replace(/([A-Z])/g, ' $1').trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, idx) => (
                  <tr key={idx}>
                    {columns.map((col) => {
                      const val = row[col];
                      const isFlag = col.toLowerCase().includes('flag') || col.toLowerCase().includes('status');
                      return (
                        <td key={col} style={{ fontFamily: typeof val === 'number' || col === 'timestamp' ? 'var(--font-mono)' : 'inherit' }}>
                          {isFlag ? (
                            <span style={{ backgroundColor: '#ecfdf5', color: '#065f46', padding: '1px 6px', borderRadius: '3px', fontSize: '11px', fontWeight: 600, border: '1px solid #a7f3d0' }}>
                              {val}
                            </span>
                          ) : (
                            val
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Description & Citation Note */}
          <div style={{ marginTop: '16px', fontSize: '12.5px', color: '#475569', lineHeight: '1.5' }}>
            <strong>Dataset Synopsis:</strong> {dataset.description}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          {downloadSuccess && (
            <span style={{ color: '#059669', fontSize: '12.5px', display: 'flex', alignItems: 'center', gap: '4px', marginRight: 'auto' }}>
              <CheckCircle2 size={16} /> Sample CSV exported successfully
            </span>
          )}
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button className="btn btn-accent" onClick={handleDownloadCsv}>
            <Download size={15} />
            Export Sample CSV
          </button>
        </div>
      </div>
    </div>
  );
}
