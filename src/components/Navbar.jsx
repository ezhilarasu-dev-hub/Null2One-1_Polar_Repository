import React from 'react';
import { 
  LayoutDashboard, 
  Library, 
  FileText, 
  Database, 
  Image, 
  MapPin, 
  Share2, 
  UploadCloud, 
  GraduationCap, 
  Info 
} from 'lucide-react';

export function Navbar({ activePage, setActivePage }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'repository', label: 'Repository', icon: Library },
    { id: 'research', label: 'Research', icon: FileText },
    { id: 'datasets', label: 'Datasets', icon: Database },
    { id: 'media', label: 'Media', icon: Image },
    { id: 'map', label: 'Polar Map', icon: MapPin },
    { id: 'aistudio', label: 'Outreach Studio', icon: Share2 },
    { id: 'upload', label: 'Data Ingestion', icon: UploadCloud },
    { id: 'educational', label: 'Educational Center', icon: GraduationCap },
    { id: 'about', label: 'About', icon: Info },
  ];

  return (
    <nav className="portal-nav">
      <div className="container nav-inner">
        <ul className="nav-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <li key={item.id}>
                <button
                  className={`nav-item-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActivePage(item.id)}
                >
                  <Icon size={16} strokeWidth={isActive ? 2.2 : 1.8} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
