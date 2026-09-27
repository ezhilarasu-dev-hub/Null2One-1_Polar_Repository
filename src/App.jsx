import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { DashboardPage } from './pages/DashboardPage';
import { RepositoryPage } from './pages/RepositoryPage';
import { ResearchDetailsPage } from './pages/ResearchDetailsPage';
import { DatasetsPage } from './pages/DatasetsPage';
import { MediaPage } from './pages/MediaPage';
import { PolarMapPage } from './pages/PolarMapPage';
import { AiStudioPage } from './pages/AiStudioPage';
import { UploadIngestPage } from './pages/UploadIngestPage';
import { EducationalPage } from './pages/EducationalPage';
import { AdminManagementPage } from './pages/AdminManagementPage';
import { AboutPage } from './pages/AboutPage';

import { 
  RESEARCH_PUBLICATIONS, 
  EXPEDITION_REPORTS, 
  SCIENTIFIC_DATASETS, 
  MEDIA_GALLERY, 
  EDUCATIONAL_RESOURCES 
} from './data/polarData';

export function App() {
  // Navigation State
  const [activePage, setActivePage] = useState('repository');

  // Unified Local Mock Data States (allows live additions via Ingestion)
  const [publications, setPublications] = useState(RESEARCH_PUBLICATIONS);
  const [expeditions, setExpeditions] = useState(EXPEDITION_REPORTS);
  const [datasets, setDatasets] = useState(SCIENTIFIC_DATASETS);
  const [mediaItems, setMediaItems] = useState(MEDIA_GALLERY);

  // Selected item states
  const [selectedPubId, setSelectedPubId] = useState('pub-001');
  const [selectedDatasetId, setSelectedDatasetId] = useState('ds-001');
  const [selectedStationId, setSelectedStationId] = useState('loc-bharati');
  const [aiStudioInitialTab, setAiStudioInitialTab] = useState('website');
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  // Search handler from top bar or hero
  const handleGlobalSearch = (query) => {
    setGlobalSearchQuery(query);
    setActivePage('repository');
  };

  // Select publication to view details
  const handleSelectPublication = (pubId) => {
    setSelectedPubId(pubId);
    setActivePage('research');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select dataset to view / preview
  const handleSelectDataset = (datasetId) => {
    setSelectedDatasetId(datasetId);
    setActivePage('datasets');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Launch AI Studio with a specific paper
  const handleLaunchAiStudio = (pubId) => {
    setSelectedPubId(pubId);
    setActivePage('aistudio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ingestion: Add new resource to local state
  const handleAddNewResource = (newRecord) => {
    if (newRecord.type === 'Dataset') {
      setDatasets(prev => [newRecord, ...prev]);
    } else {
      setPublications(prev => [newRecord, ...prev]);
    }
  };

  const selectedPub = publications.find(p => p.id === selectedPubId) || publications[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        onSearch={handleGlobalSearch}
        initialSearchQuery={globalSearchQuery}
      />

      {/* Primary Navigation Tabs */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Router */}
      <main className="main-content">
        {activePage === 'dashboard' && (
          <DashboardPage
            publications={publications}
            datasets={datasets}
            onSearch={handleGlobalSearch}
            setActivePage={setActivePage}
            onSelectPublication={handleSelectPublication}
          />
        )}

        {activePage === 'repository' && (
          <RepositoryPage
            publications={publications}
            expeditionReports={expeditions}
            datasets={datasets}
            mediaItems={mediaItems}
            educationalResources={EDUCATIONAL_RESOURCES}
            initialSearchQuery={globalSearchQuery}
            onSelectPublication={handleSelectPublication}
            onSelectDataset={handleSelectDataset}
            onSelectMedia={() => setActivePage('media')}
            onSelectEducational={() => setActivePage('educational')}
          />
        )}

        {activePage === 'research' && (
          <ResearchDetailsPage
            publication={selectedPub}
            allPublications={publications}
            datasets={datasets}
            mediaItems={mediaItems}
            onBack={() => setActivePage('repository')}
            onSelectPublication={handleSelectPublication}
            onSelectDataset={handleSelectDataset}
            onSelectMedia={() => setActivePage('media')}
            onLaunchAiStudio={handleLaunchAiStudio}
          />
        )}

        {activePage === 'datasets' && (
          <DatasetsPage
            datasets={datasets}
          />
        )}

        {activePage === 'media' && (
          <MediaPage
            mediaItems={mediaItems}
          />
        )}

        {activePage === 'map' && (
          <PolarMapPage
            initialStationId={selectedStationId}
            onSelectPublication={handleSelectPublication}
            onSelectDataset={handleSelectDataset}
          />
        )}

        {activePage === 'aistudio' && (
          <AiStudioPage
            publications={publications}
            initialPublicationId={selectedPubId}
            initialTab={aiStudioInitialTab}
          />
        )}

        {activePage === 'upload' && (
          <UploadIngestPage
            onAddNewResource={handleAddNewResource}
            onViewInRepository={() => setActivePage('repository')}
          />
        )}

        {activePage === 'educational' && (
          <EducationalPage />
        )}

        {activePage === 'admin' && (
          <AdminManagementPage
            onSelectPublication={handleSelectPublication}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            setActivePage={setActivePage}
          />
        )}
      </main>
    </div>
  );
}

export default App;
