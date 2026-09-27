import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Archive, 
  Clock, 
  AlertCircle, 
  Search, 
  Filter, 
  Eye, 
  Trash2,
  Layers,
  ChevronRight
} from 'lucide-react';
import { INITIAL_REPOSITORY_MANAGEMENT_ITEMS } from '../data/polarData';

export function AdminManagementPage({ onSelectPublication }) {
  const [items, setItems] = useState(INITIAL_REPOSITORY_MANAGEMENT_ITEMS);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState(null);

  // Status Counts
  const totalCount = items.length;
  const publishedCount = items.filter(i => i.status === 'Published').length;
  const reviewCount = items.filter(i => i.status === 'Under Review').length;
  const archivedCount = items.filter(i => i.status === 'Archived').length;

  // Filtered Items
  const filteredItems = items.filter(item => {
    const matchesStatus = filterStatus === 'All' || item.status === filterStatus;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.uploadedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleApprove = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, status: 'Published' } : item));
    showNotification('Item approved and transitioned to Published state');
  };

  const handleArchive = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, status: 'Archived' } : item));
    showNotification('Item moved to Digital Archive');
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
    showNotification('Resource record removed from catalog');
  };

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="container">
      {/* Page Title & Breadcrumb */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
          Portal / Administrative Operations
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '1.65rem', color: '#0c2035' }}>Repository Management Console</h1>
              <span style={{ fontSize: '11.5px', backgroundColor: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                Curator Role (NCPOR Metadata Cell)
              </span>
            </div>
            <div style={{ fontSize: '13.5px', color: '#475569' }}>
              Institutional review queue, accession authorization, metadata curation and lifecycle archiving.
            </div>
          </div>
        </div>
      </div>

      {/* KPI Statistic Cards */}
      <div className="stats-grid" style={{ marginBottom: '28px' }}>
        <div className="stat-card" onClick={() => setFilterStatus('All')} style={{ cursor: 'pointer', borderLeft: '4px solid #0284c7' }}>
          <div className="stat-icon-wrapper" style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}>
            <Layers size={22} />
          </div>
          <div>
            <div className="stat-number">{totalCount}</div>
            <div className="stat-label">Total Catalogued</div>
          </div>
        </div>

        <div className="stat-card" onClick={() => setFilterStatus('Under Review')} style={{ cursor: 'pointer', borderLeft: '4px solid #f59e0b' }}>
          <div className="stat-icon-wrapper" style={{ backgroundColor: '#fef3c7', color: '#b45309' }}>
            <Clock size={22} />
          </div>
          <div>
            <div className="stat-number">{reviewCount}</div>
            <div className="stat-label">Pending Peer Review</div>
          </div>
        </div>

        <div className="stat-card" onClick={() => setFilterStatus('Published')} style={{ cursor: 'pointer', borderLeft: '4px solid #10b981' }}>
          <div className="stat-icon-wrapper" style={{ backgroundColor: '#ecfdf5', color: '#059669' }}>
            <CheckCircle2 size={22} />
          </div>
          <div>
            <div className="stat-number">{publishedCount}</div>
            <div className="stat-label">Published (Live)</div>
          </div>
        </div>

        <div className="stat-card" onClick={() => setFilterStatus('Archived')} style={{ cursor: 'pointer', borderLeft: '4px solid #64748b' }}>
          <div className="stat-icon-wrapper" style={{ backgroundColor: '#f1f5f9', color: '#475569' }}>
            <Archive size={22} />
          </div>
          <div>
            <div className="stat-number">{archivedCount}</div>
            <div className="stat-label">Archived / Historical</div>
          </div>
        </div>
      </div>

      {notification && (
        <div style={{ padding: '10px 16px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '6px', color: '#065f46', fontSize: '13px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={16} /> {notification}
        </div>
      )}

      {/* Filter & Search Toolbar */}
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '14px 18px', marginBottom: '18px', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['All', 'Published', 'Under Review', 'Archived'].map((st) => (
              <button
                key={st}
                className={`btn btn-sm ${filterStatus === st ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilterStatus(st)}
              >
                {st}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', width: '260px' }}>
            <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              placeholder="Search resource title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '6px 10px 6px 30px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '12.5px' }}
            />
          </div>
        </div>
      </div>

      {/* Admin Table */}
      <div className="table-responsive" style={{ marginBottom: '40px' }}>
        <table className="sci-table">
          <thead>
            <tr>
              <th>Resource Title</th>
              <th>Content Type</th>
              <th>Status</th>
              <th>Uploaded Date</th>
              <th>Submitted By</th>
              <th>DOI / Ref</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => {
              const isReview = item.status === 'Under Review';
              const isArchived = item.status === 'Archived';
              const isPublished = item.status === 'Published';

              return (
                <tr key={item.id}>
                  <td style={{ fontWeight: 600, color: '#0c2035', maxWidth: '320px' }}>
                    <div style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                      {item.title}
                    </div>
                  </td>
                  <td>
                    <span style={{ fontSize: '12px', color: '#475569' }}>{item.type}</span>
                  </td>
                  <td>
                    <span
                      style={{
                        padding: '2px 8px',
                        borderRadius: '3px',
                        fontSize: '11px',
                        fontWeight: 600,
                        backgroundColor: isPublished ? '#ecfdf5' : isReview ? '#fffbeb' : '#f1f5f9',
                        color: isPublished ? '#065f46' : isReview ? '#92400e' : '#475569',
                        border: isPublished ? '1px solid #a7f3d0' : isReview ? '1px solid #fde68a' : '1px solid #cbd5e1',
                      }}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                    {item.uploaded}
                  </td>
                  <td style={{ fontSize: '12.5px' }}>
                    {item.uploadedBy}
                  </td>
                  <td style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748b' }}>
                    {item.doi}
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', gap: '6px' }}>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => onSelectPublication('pub-001')}
                        title="View Record Details"
                      >
                        <Eye size={12} />
                      </button>

                      {isReview && (
                        <button
                          className="btn btn-sm btn-accent"
                          onClick={() => handleApprove(item.id)}
                          title="Approve & Publish to Repository"
                        >
                          Approve
                        </button>
                      )}

                      {!isArchived && (
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={() => handleArchive(item.id)}
                          title="Move to Historical Archive"
                        >
                          Archive
                        </button>
                      )}

                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => handleDelete(item.id)}
                        title="Remove Record"
                        style={{ color: '#dc2626' }}
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
