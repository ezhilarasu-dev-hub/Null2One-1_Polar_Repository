import React, { useState } from 'react';
import { X, Play, Pause, Volume2, Maximize, Film, Image as ImageIcon, MapPin, Calendar, Camera, Shield } from 'lucide-react';

export function MediaModal({ mediaItem, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  if (!mediaItem) return null;

  const isVideo = mediaItem.category === 'Videos' || Boolean(mediaItem.videoUrl);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '880px' }} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className={`badge ${isVideo ? 'badge-publication' : 'badge-media'}`}>
              {isVideo ? <Film size={12} style={{ marginRight: '4px' }} /> : <ImageIcon size={12} style={{ marginRight: '4px' }} />}
              {mediaItem.category} • {mediaItem.subCategory || 'Field Asset'}
            </span>
            <span style={{ fontSize: '13px', color: '#64748b' }}>{mediaItem.expedition}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} title="Close Media">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body" style={{ padding: 0 }}>
          {/* Media Player / Viewer Viewport */}
          <div style={{ backgroundColor: '#071524', position: 'relative', minHeight: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={mediaItem.imageUrl}
              alt={mediaItem.title}
              style={{ maxHeight: '440px', width: '100%', objectFit: 'contain' }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />

            {/* Video Player Controls Simulation */}
            {isVideo && (
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  backgroundColor: isPlaying ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.45)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between', 
                  padding: '20px' 
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <span style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: '#ffffff', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                    4K UHD • 60 FPS Field Recording
                  </span>
                </div>

                {/* Center Big Play Button */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <button
                    onClick={togglePlay}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(2, 132, 199, 0.9)',
                      border: '2px solid rgba(255,255,255,0.8)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                      transition: 'transform 0.15s ease'
                    }}
                  >
                    {isPlaying ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: '3px' }} />}
                  </button>
                </div>

                {/* Bottom Scrubbing Bar */}
                <div style={{ backgroundColor: 'rgba(12, 32, 53, 0.85)', padding: '10px 16px', borderRadius: '6px', backdropFilter: 'blur(4px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span style={{ color: '#fff', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                      {isPlaying ? '01:42' : '00:00'} / {mediaItem.duration || '04:18'}
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={progress}
                      onChange={(e) => setProgress(e.target.value)}
                      style={{ flex: 1, accentColor: '#38bdf8', height: '4px' }}
                    />
                    <Volume2 size={16} color="#cbd5e1" />
                    <Maximize size={16} color="#cbd5e1" style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Media Info & Metadata */}
          <div style={{ padding: '22px' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: '#0c2035' }}>{mediaItem.title}</h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: '#475569', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <MapPin size={15} color="#0284c7" />
                <span>{mediaItem.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={15} color="#0284c7" />
                <span>Year: {mediaItem.year}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Camera size={15} color="#0284c7" />
                <span>Credit: {mediaItem.photographer || 'NCPOR Expedition Media'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Shield size={15} color="#059669" />
                <span>License: {mediaItem.rights || 'Public Scientific Access'}</span>
              </div>
            </div>

            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#334155', marginBottom: '16px' }}>
              {mediaItem.description}
            </p>

            {/* Tag Pills */}
            {mediaItem.tags && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {mediaItem.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
