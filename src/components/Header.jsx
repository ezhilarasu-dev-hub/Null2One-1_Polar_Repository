import React, { useState } from 'react';
import { Search, Compass, User } from 'lucide-react';

export function Header({ onSearch, activePage, setActivePage, initialSearchQuery = '' }) {
  const [query, setQuery] = useState(initialSearchQuery);
  const [lang, setLang] = useState('EN');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <header>
      {/* Main Portal Header */}
      <div className="portal-header">
        <div className="container header-inner">
          {/* Brand - Normal, Clean Title without Over-Text */}
          <div className="brand-section" onClick={() => setActivePage('repository')} style={{ cursor: 'pointer' }}>
            <div className="brand-logo-emblem">
              <Compass size={24} strokeWidth={2.2} />
            </div>
            <div className="brand-titles">
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.01em' }}>
                Polar Knowledge Portal
              </span>
            </div>
          </div>

          {/* Top Actions: Global Search, Language Selector & Profile */}
          <div className="header-actions">
            <form onSubmit={handleSubmit} className="header-search-form">
              <Search className="header-search-icon" size={16} />
              <input
                type="text"
                className="header-search-input"
                placeholder="Search expeditions, publications, datasets, researchers, locations..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>

            {/* Language Selector */}
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)} 
              title="Select Language"
              style={{ 
                background: 'rgba(255,255,255,0.12)', 
                color: '#ffffff', 
                border: '1px solid rgba(255,255,255,0.25)', 
                padding: '7px 10px', 
                borderRadius: '4px', 
                fontSize: '13px', 
                cursor: 'pointer' 
              }}
            >
              <option value="EN" style={{ color: '#0c2035' }}>EN</option>
              <option value="HI" style={{ color: '#0c2035' }}>HI</option>
            </select>

            {/* Simple profile / menu icon */}
            <div 
              style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '4px', 
                backgroundColor: 'rgba(255,255,255,0.12)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer'
              }}
              title="User Profile / Menu"
              onClick={() => setActivePage('admin')}
            >
              <User size={18} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
