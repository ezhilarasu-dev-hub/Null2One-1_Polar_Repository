import React from 'react';
import { PlayCircle, ArrowRight, ArrowLeft, X, CheckCircle, Sparkles } from 'lucide-react';

export const DEMO_STEPS = [
  {
    step: 1,
    title: "1. Dashboard Overview",
    description: "Start at the institutional dashboard with live statistics, explore cards, recent research & audience mapping.",
    action: "Go to Dashboard",
    targetPage: "dashboard"
  },
  {
    step: 2,
    title: "2. Global Semantic Search",
    description: "Trigger query for 'Antarctic sea ice' to demonstrate the intelligent faceted search engine.",
    action: "Search 'Antarctic sea ice'",
    targetPage: "repository",
    query: "Antarctic sea ice"
  },
  {
    step: 3,
    title: "3. Filtered Search Results",
    description: "Observe the 'Semantic match' badge, faceted content-type filters, and metadata summary tags.",
    action: "Examine Results",
    targetPage: "repository",
    query: "Antarctic sea ice"
  },
  {
    step: 4,
    title: "4. Research Details View",
    description: "Inspect the peer-reviewed monograph 'Seasonal Variability of Antarctic Sea Ice' with full abstract and DOIs.",
    action: "Open Publication",
    targetPage: "research",
    selectedPubId: "pub-001"
  },
  {
    step: 5,
    title: "5. Comprehensive Metadata Review",
    description: "Review standardized Dublin Core and ISO-19115 scientific metadata, authors, and citation generator.",
    action: "View Metadata Section",
    targetPage: "research",
    selectedPubId: "pub-001"
  },
  {
    step: 6,
    title: "6. Linked Scientific Dataset",
    description: "Transition directly from research publication to its companion satellite & sensor dataset (POLAR-ANT-2025-001).",
    action: "Open Datasets Catalog",
    targetPage: "datasets",
    previewDatasetId: "ds-001"
  },
  {
    step: 7,
    title: "7. Scientific Data Table Preview",
    description: "Preview calibrated daily ice concentration, thickness, and coordinates in the interactive data modal.",
    action: "Preview Data Table",
    targetPage: "datasets",
    triggerPreviewModal: "ds-001"
  },
  {
    step: 8,
    title: "8. Interactive Polar Map",
    description: "Explore Indian research stations (Bharati, Maitri, Himadri, Dakshin Gangotri) and oceanic observation zones.",
    action: "Open Polar Map",
    targetPage: "map"
  },
  {
    step: 9,
    title: "9. Research Station Deep Dive",
    description: "Select Bharati Station in Larsemann Hills to view coordinates, active projects, and telemetry links.",
    action: "Inspect Bharati Station",
    targetPage: "map",
    selectedStationId: "loc-bharati"
  },
  {
    step: 10,
    title: "10. AI Content Studio",
    description: "Initiate the AI-assisted outreach pipeline to translate complex scientific papers into public communication.",
    action: "Open AI Content Studio",
    targetPage: "aistudio",
    selectedPubId: "pub-001"
  },
  {
    step: 11,
    title: "11. Generate Outreach Article",
    description: "Generate a public web article with clear albedo explanations, reading time, and key findings.",
    action: "Generate Web Article",
    targetPage: "aistudio",
    aiTab: "website"
  },
  {
    step: 12,
    title: "12. Generate Social Media Post",
    description: "Generate multi-platform social media posts (X & LinkedIn) formatted with hashtags and character counts.",
    action: "Generate Social Post",
    targetPage: "aistudio",
    aiTab: "social"
  },
  {
    step: 13,
    title: "13. Upload & Data Ingestion",
    description: "Open the technical ingestion workflow showing OCR text extraction, classification & standardization.",
    action: "Open Upload / Ingest",
    targetPage: "upload"
  },
  {
    step: 14,
    title: "14. Select Sample PDF",
    description: "Choose '44th_Antarctic_Expedition_Report.pdf' preset to run automated processing.",
    action: "Load Sample Document",
    targetPage: "upload",
    ingestPresetId: "sample-pdf-01"
  },
  {
    step: 15,
    title: "15. Simulated Processing Pipeline",
    description: "Watch live 6-stage extraction: Upload -> Text Extraction -> Metadata Gen -> Data Cleaning -> Standardization.",
    action: "Run Ingestion Pipeline",
    targetPage: "upload",
    triggerProcessing: true
  },
  {
    step: 16,
    title: "16. Metadata Review & Add to Repository",
    description: "Verify generated Dublin Core metadata and commit the new document to the live frontend repository.",
    action: "Commit to Repository",
    targetPage: "upload",
    showMetadataReview: true
  }
];

export function JudgeDemoTour({ currentStepIndex, onStepChange, onClose }) {
  const currentStep = DEMO_STEPS[currentStepIndex] || DEMO_STEPS[0];
  const isFirst = currentStepIndex === 0;
  const isLast = currentStepIndex === DEMO_STEPS.length - 1;

  const handleNext = () => {
    if (!isLast) {
      onStepChange(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      onStepChange(currentStepIndex - 1);
    }
  };

  return (
    <div className="demo-tour-banner">
      <div className="container demo-tour-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="demo-tour-badge">SIH 2026 Judge Tour</span>
          <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 600 }}>
            Step {currentStep.step} of {DEMO_STEPS.length}
          </span>
          <span className="demo-step-text">
            <strong>{currentStep.title}:</strong> {currentStep.description}
          </span>
        </div>

        <div className="demo-tour-controls">
          <button
            className="demo-tour-btn"
            onClick={handlePrev}
            disabled={isFirst}
            style={{ opacity: isFirst ? 0.4 : 1, cursor: isFirst ? 'default' : 'pointer' }}
          >
            <ArrowLeft size={13} style={{ display: 'inline', marginRight: '4px' }} />
            Prev
          </button>

          <button
            className="demo-tour-btn primary"
            onClick={handleNext}
          >
            {isLast ? 'Complete Demo' : (
              <>
                {currentStep.action}
                <ArrowRight size={13} style={{ display: 'inline', marginLeft: '4px' }} />
              </>
            )}
          </button>

          <button
            className="demo-tour-btn"
            onClick={onClose}
            title="Exit Demo Tour"
            style={{ padding: '4px 6px' }}
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
