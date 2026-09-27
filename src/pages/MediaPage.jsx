import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Film, 
  Search, 
  Play, 
  MapPin, 
  Calendar, 
  Compass, 
  Filter, 
  Maximize2,
  Tag
} from 'lucide-react';
import { MediaModal } from '../components/MediaModal';

export function MediaPage({ mediaItems = [], onSelectMediaItem = null }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['All', 'Photos', 'Videos', 'Expedition', 'Research', 'Educational'];

  const filteredMedia = mediaItems.filter((item) => {
    const matchesCategory = 
      activeCategory === 'All' || 
      item.category === activeCategory || 
      item.subCategory === activeCategory;

    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.expedition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  const handleOpenMedia = (item) => {
    setSelectedItem(item);
    if (onSelectMediaItem) {
      onSelectMediaItem(item);
    }
  };

  return (
    <div className="container">
      {/* Page Title & Breadcrumb */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
          Portal / Polar Multimedia Library
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 style={{ fontSize: '1.65rem', color: '#0c2035' }}>Polar Multimedia Dissemination Library</h1>
            <div style={{ fontSize: '13.5px', color: '#475569' }}>
              Photographic and video documentation of Indian research stations, ice cores, polar flora/fauna, and oceanographic cruises.
            </div>
          </div>
          <span style={{ fontSize: '12px', color: '#64748b' }}>
            Total Catalog: <strong>2,150</strong> Assets ({mediaItems.length} Featured in High-Res)
          </span>
        </div>
      </div>

      {/* Category Tabs & Search Bar */}
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '14px 18px', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          {/* Category Filter Buttons */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`btn btn-sm ${activeCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'Videos' && <Film size={13} style={{ marginRight: '4px' }} />}
                {cat === 'Photos' && <ImageIcon size={13} style={{ marginRight: '4px' }} />}
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div style={{ position: 'relative', width: '260px' }}>
            <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              placeholder="Search images, videos, stations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '6px 10px 6px 30px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '12.5px' }}
            />
          </div>
        </div>
      </div>

      {/* Media Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {filteredMedia.map((item) => {
          const isVideo = item.category === 'Videos' || Boolean(item.videoUrl);

          return (
            <div 
              key={item.id} 
              className="card"
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              onClick={() => handleOpenMedia(item)}
            >
              {/* Media Thumbnail Container */}
              <div style={{ position: 'relative', height: '185px', backgroundColor: '#071524', overflow: 'hidden' }}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.25s ease' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
                />

                {/* Video Play Indicator Overlay */}
                {isVideo && (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(2, 132, 199, 0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', border: '2px solid rgba(255,255,255,0.8)' }}>
                      <Play size={20} style={{ marginLeft: '2px' }} />
                    </div>
                  </div>
                )}

                {/* Badge Top Left */}
                <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                  <span className={`badge ${isVideo ? 'badge-publication' : 'badge-media'}`} style={{ backgroundColor: 'rgba(12, 32, 53, 0.85)', color: '#fff', borderColor: 'transparent' }}>
                    {isVideo ? <Film size={11} style={{ marginRight: '3px' }} /> : <ImageIcon size={11} style={{ marginRight: '3px' }} />}
                    {item.category}
                  </span>
                </div>

                {/* Video Duration / Photo Info Top Right */}
                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                  <span style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: '11px', padding: '2px 6px', borderRadius: '3px', fontFamily: 'var(--font-mono)' }}>
                    {isVideo ? item.duration : 'HD Photo'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ fontSize: '14.5px', color: '#0c2035', marginBottom: '8px', lineHeight: '1.35' }}>
                  {item.title}
                </h4>

                <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '10px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} color="#0284c7" />
                    <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} color="#0284c7" />
                    <span>{item.expedition} ({item.year})</span>
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
                  {item.tags && item.tags.slice(0, 3).map(tag => (
                    <span key={tag} style={{ fontSize: '11px', color: '#0369a1', backgroundColor: '#f0f9ff', padding: '1px 5px', borderRadius: '3px' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Media Detail Modal */}
      {selectedItem && (
        <MediaModal
          mediaItem={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
