import React, { useState } from 'react';
import { 
  MapPin, 
  Compass, 
  ExternalLink, 
  Calendar, 
  Layers, 
  Radio, 
  BookOpen, 
  Database, 
  ChevronRight,
  Info,
  ShieldCheck
} from 'lucide-react';
import { RESEARCH_LOCATIONS } from '../data/polarData';

export function PolarMapPage({ 
  onSelectPublication, 
  onSelectDataset,
  initialStationId = 'loc-bharati' 
}) {
  const [selectedStationId, setSelectedStationId] = useState(initialStationId);
  const [mapView, setMapView] = useState('antarctica'); // 'antarctica' or 'arctic'

  const selectedLocation = RESEARCH_LOCATIONS.find(l => l.id === selectedStationId) || RESEARCH_LOCATIONS[0];

  // SVG coordinate positions for Antarctica map (600x500 viewport)
  const antarcticStationPositions = {
    'loc-bharati': { x: 410, y: 220, label: 'Bharati Station (Larsemann Hills)' },
    'loc-maitri': { x: 195, y: 240, label: 'Maitri Station (Schirmacher Oasis)' },
    'loc-dakshin-gangotri': { x: 190, y: 200, label: 'Dakshin Gangotri Site' },
    'loc-prydz-bay': { x: 425, y: 190, label: 'Prydz Bay Deep Mooring' },
    'loc-southern-ocean': { x: 340, y: 90, label: 'Southern Ocean 57.5°E Transect' }
  };

  // Arctic position
  const arcticStationPositions = {
    'loc-himadri': { x: 300, y: 250, label: 'Himadri Station (Ny-Ålesund, Svalbard)' }
  };

  return (
    <div className="container">
      {/* Page Title & Breadcrumb */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
          Portal / Interactive Polar Station & Expedition Map
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 style={{ fontSize: '1.65rem', color: '#0c2035' }}>Polar Spatial Exploration Map</h1>
            <div style={{ fontSize: '13.5px', color: '#475569' }}>
              Interactive geographic visualization of India's year-round research stations, historic monuments, and oceanic observatories.
            </div>
          </div>

          {/* Region Switcher */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              className={`btn btn-sm ${mapView === 'antarctica' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => {
                setMapView('antarctica');
                setSelectedStationId('loc-bharati');
              }}
            >
              Antarctica & Southern Ocean
            </button>
            <button
              className={`btn btn-sm ${mapView === 'arctic' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => {
                setMapView('arctic');
                setSelectedStationId('loc-himadri');
              }}
            >
              Arctic (Himadri, Svalbard)
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Map Canvas Container */}
      <div className="polar-map-container" style={{ marginBottom: '32px' }}>
        {/* Left Map Canvas Area */}
        <div className="polar-map-canvas-area">
          {/* Map Compass Rose / Legend */}
          <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10, backgroundColor: 'rgba(12, 32, 53, 0.85)', padding: '10px 14px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '12px', backdropFilter: 'blur(4px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#38bdf8', marginBottom: '4px' }}>
              <Compass size={16} />
              <span>{mapView === 'antarctica' ? 'South Polar Azimuthal Projection' : 'North Polar Arctic Projection'}</span>
            </div>
            <div style={{ fontSize: '11px', color: '#94a3b8' }}>
              Click pins to inspect coordinates, telemetry & datasets
            </div>
          </div>

          {/* SVG Map Projection */}
          {mapView === 'antarctica' ? (
            <svg viewBox="0 0 600 500" style={{ width: '100%', maxWidth: '640px', height: 'auto' }}>
              {/* Ocean Background Circles */}
              <circle cx="300" cy="270" r="230" fill="#0d243d" stroke="#173f69" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="300" cy="270" r="170" fill="#112d4d" stroke="#1d4e7f" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="300" cy="270" r="100" fill="#15375d" stroke="#25629c" strokeWidth="1" />

              {/* Latitude Labels */}
              <text x="305" y="55" fill="#64748b" fontSize="10" fontFamily="var(--font-mono)">50°S (Southern Ocean)</text>
              <text x="305" y="115" fill="#64748b" fontSize="10" fontFamily="var(--font-mono)">60°S (Polar Front)</text>
              <text x="305" y="185" fill="#64748b" fontSize="10" fontFamily="var(--font-mono)">70°S (Antarctic Margin)</text>
              <text x="290" y="275" fill="#93c5fd" fontSize="11" fontWeight="bold">South Pole</text>

              {/* Stylized Antarctic Continent Landmass */}
              <path
                d="M 220 180 
                   C 260 170, 310 160, 360 180 
                   C 420 200, 480 230, 470 290 
                   C 460 350, 410 400, 350 420 
                   C 290 440, 220 420, 180 370 
                   C 140 320, 150 250, 180 210 
                   Z"
                fill="#f1f6fb"
                stroke="#93c5fd"
                strokeWidth="2.5"
              />

              {/* Ice Shelves & Glacial tongues */}
              <path
                d="M 370 190 C 400 200, 415 220, 395 240 Z"
                fill="#d0e6f7"
                stroke="#7dd3fc"
                strokeWidth="1.5"
              />
              <text x="390" y="260" fill="#0369a1" fontSize="10" fontWeight="600">Amery Ice Shelf</text>
              <text x="145" y="235" fill="#0369a1" fontSize="10" fontWeight="600">Queen Maud Land</text>

              {/* Station Markers */}
              {Object.entries(antarcticStationPositions).map(([id, pos]) => {
                const isSelected = selectedStationId === id;
                return (
                  <g
                    key={id}
                    onClick={() => setSelectedStationId(id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Pulsing ring for active selection */}
                    {isSelected && (
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="14"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        opacity="0.8"
                      />
                    )}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isSelected ? "7" : "5"}
                      fill={isSelected ? "#0284c7" : "#38bdf8"}
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <text
                      x={pos.x + 9}
                      y={pos.y + 4}
                      fill={isSelected ? "#ffffff" : "#cbd5e1"}
                      fontSize={isSelected ? "11.5" : "10"}
                      fontWeight={isSelected ? "700" : "500"}
                      style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                    >
                      {pos.label.split('(')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          ) : (
            /* Arctic SVG Viewport */
            <svg viewBox="0 0 600 500" style={{ width: '100%', maxWidth: '640px', height: 'auto' }}>
              <circle cx="300" cy="250" r="210" fill="#0d243d" stroke="#173f69" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="300" cy="250" r="130" fill="#112d4d" stroke="#1d4e7f" strokeWidth="1" />

              {/* Svalbard Archipelago stylized */}
              <path
                d="M 260 210 C 290 190, 330 200, 350 230 C 370 260, 340 310, 300 320 C 260 330, 240 280, 250 240 Z"
                fill="#f1f6fb"
                stroke="#93c5fd"
                strokeWidth="2.5"
              />
              <text x="270" y="270" fill="#0369a1" fontSize="12" fontWeight="700">Spitsbergen (Svalbard)</text>
              <text x="260" y="160" fill="#64748b" fontSize="10" fontFamily="var(--font-mono)">79°N • High Arctic Fjord Zone</text>

              {/* Himadri Station Pin */}
              <g
                onClick={() => setSelectedStationId('loc-himadri')}
                style={{ cursor: 'pointer' }}
              >
                <circle cx="300" cy="235" r="14" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.8" />
                <circle cx="300" cy="235" r="7" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                <text x="315" y="240" fill="#ffffff" fontSize="12" fontWeight="700" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
                  Himadri Station (Ny-Ålesund)
                </text>
              </g>
            </svg>
          )}
        </div>

        {/* Right Station Details Drawer */}
        <div className="map-sidebar-details">
          {/* Station Image Banner */}
          <div style={{ position: 'relative', height: '150px', backgroundColor: '#0c2035' }}>
            <img
              src={selectedLocation.imageUrl}
              alt={selectedLocation.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '8px', left: '12px', right: '12px', backgroundColor: 'rgba(12, 32, 53, 0.85)', padding: '4px 8px', borderRadius: '4px', color: '#fff', fontSize: '11px', backdropFilter: 'blur(3px)' }}>
              <span>{selectedLocation.subRegion}</span>
            </div>
          </div>

          {/* Details Content */}
          <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <div>
                <span className="badge badge-publication" style={{ fontSize: '10px', marginBottom: '4px' }}>
                  {selectedLocation.region}
                </span>
                <h3 style={{ fontSize: '1.25rem', color: '#0c2035', lineHeight: '1.2' }}>
                  {selectedLocation.name}
                </h3>
                <div style={{ fontSize: '12.5px', color: '#0284c7', fontWeight: 500 }}>
                  {selectedLocation.hindiName}
                </div>
              </div>
            </div>

            {/* Coordinates & Status */}
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '10px 12px', margin: '12px 0', fontSize: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ color: '#64748b' }}>Coordinates:</span>
                <strong style={{ fontFamily: 'var(--font-mono)' }}>{selectedLocation.coordinates.display}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ color: '#64748b' }}>Established:</span>
                <strong>{selectedLocation.establishedYear}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Elevation:</span>
                <strong>{selectedLocation.elevation}</strong>
              </div>
            </div>

            {/* Scientific Counters */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
              <div style={{ backgroundColor: '#e0f2fe', borderRadius: '4px', padding: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0369a1' }}>{selectedLocation.expeditionCount}</div>
                <div style={{ fontSize: '10.5px', color: '#0369a1', fontWeight: 600 }}>Expeditions Hosted</div>
              </div>
              <div style={{ backgroundColor: '#ecfdf5', borderRadius: '4px', padding: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#065f46' }}>{selectedLocation.activeProjectsCount}</div>
                <div style={{ fontSize: '10.5px', color: '#065f46', fontWeight: 600 }}>Active Projects</div>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '12.5px', color: '#334155', lineHeight: '1.5', marginBottom: '14px' }}>
              {selectedLocation.description}
            </p>

            {/* Facilities List */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                Station Facilities & Instrumentation
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {selectedLocation.facilities.map((f, i) => (
                  <span key={i} style={{ fontSize: '11px', backgroundColor: '#f1f5f9', color: '#1e293b', padding: '2px 6px', borderRadius: '3px', border: '1px solid #e2e8f0' }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
              <button 
                className="btn btn-sm btn-primary"
                onClick={() => onSelectPublication(selectedLocation.recentResearchIds[0] || 'pub-001')}
                style={{ width: '100%' }}
              >
                <BookOpen size={13} />
                View Associated Research
              </button>
              <button 
                className="btn btn-sm btn-secondary"
                onClick={() => onSelectDataset(selectedLocation.availableDatasetIds[0] || 'ds-001')}
                style={{ width: '100%' }}
              >
                <Database size={13} />
                Explore Station Datasets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
