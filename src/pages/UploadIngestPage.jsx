import React, { useState } from 'react';
import { 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw, 
  ShieldCheck, 
  Database, 
  RotateCcw, 
  Check, 
  Layers,
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react';
import { SAMPLE_INGESTION_PRESETS } from '../data/polarData';

export function UploadIngestPage({ onAddNewResource, onViewInRepository }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pipelineState, setPipelineState] = useState('idle'); // 'idle', 'processing', 'completed', 'added'
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [processingLogs, setProcessingLogs] = useState([]);
  const [extractedMetadata, setExtractedMetadata] = useState(null);

  const pipelineStages = [
    { id: 'upload', name: 'Document Upload' },
    { id: 'extract', name: 'Text Extraction' },
    { id: 'metadata', name: 'Metadata Gen' },
    { id: 'cleaning', name: 'Data Cleaning' },
    { id: 'standardize', name: 'Standardization' },
    { id: 'repository', name: 'Repository Ready' },
  ];

  const handleSelectPreset = (preset) => {
    setSelectedFile({
      name: preset.filename,
      size: preset.filesize,
      presetRef: preset
    });
    runSimulation(preset);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fallbackPreset = SAMPLE_INGESTION_PRESETS[0];
      setSelectedFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        presetRef: fallbackPreset
      });
      runSimulation(fallbackPreset);
    }
  };

  const runSimulation = (preset) => {
    setPipelineState('processing');
    setCurrentStepIndex(1);
    setProcessingLogs([`[0.0s] Uploading file '${preset.filename}' (${preset.filesize})...`]);

    // Simulated staggered step pipeline
    setTimeout(() => {
      setCurrentStepIndex(2);
      setProcessingLogs(prev => [...prev, `[0.6s] Text & tabular extraction executed (Tesseract OCR / PDF LayoutLM parser)`]);
    }, 700);

    setTimeout(() => {
      setCurrentStepIndex(3);
      setProcessingLogs(prev => [...prev, `[1.3s] Metadata inference: Detected document type '${preset.extractedData.documentType}'`]);
      setProcessingLogs(prev => [...prev, `[1.7s] Extracted Authors: ${preset.extractedData.authors.join(', ')}`]);
    }, 1500);

    setTimeout(() => {
      setCurrentStepIndex(4);
      setProcessingLogs(prev => [...prev, `[2.2s] Data cleaning & duplicate hash check: SHA-256 verified, 0 collisions`]);
    }, 2200);

    setTimeout(() => {
      setCurrentStepIndex(5);
      setProcessingLogs(prev => [...prev, `[2.8s] ISO-19115 & Dublin Core schema format standardization completed`]);
      setExtractedMetadata(preset.extractedData);
      setPipelineState('completed');
    }, 2900);
  };

  const handleCommitToRepository = () => {
    if (!extractedMetadata) return;

    // Create new unified resource object
    const newRecord = {
      id: `custom-${Date.now()}`,
      title: extractedMetadata.title,
      type: extractedMetadata.documentType,
      year: extractedMetadata.year,
      region: extractedMetadata.region,
      researchArea: extractedMetadata.researchArea,
      institution: extractedMetadata.institution,
      abstract: extractedMetadata.abstract,
      keywords: extractedMetadata.keywords,
      doi: extractedMetadata.doi,
      authors: extractedMetadata.authors,
      downloads: 1,
      citations: 0,
      license: 'CC BY 4.0 Open Access',
      dateAdded: new Date().toISOString().split('T')[0]
    };

    if (onAddNewResource) {
      onAddNewResource(newRecord);
    }

    setPipelineState('added');
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPipelineState('idle');
    setCurrentStepIndex(0);
    setProcessingLogs([]);
    setExtractedMetadata(null);
  };

  return (
    <div className="container">
      {/* Page Title & Breadcrumb */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
          Portal / Upload & Ingestion Pipeline
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 style={{ fontSize: '1.65rem', color: '#0c2035' }}>Automated Data Ingestion & Metadata Pipeline</h1>
            <div style={{ fontSize: '13.5px', color: '#475569' }}>
              Standardized ingestion workflow: OCR text extraction, automated metadata tagging, format validation, and repository indexing.
            </div>
          </div>
          <span style={{ fontSize: '11.5px', color: '#0369a1', backgroundColor: '#f0f9ff', padding: '4px 10px', borderRadius: '4px', border: '1px solid #bae6fd' }}>
            Compliant with ISO-19115 Geographic Information Metadata
          </span>
        </div>
      </div>

      {/* 6-Stage Visual Pipeline Stepper */}
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px 20px', marginBottom: '28px', boxShadow: 'var(--shadow-sm)' }}>
        <div className="ingest-pipeline">
          <div className="pipeline-connector"></div>
          {pipelineStages.map((stg, idx) => {
            const isCompleted = currentStepIndex > idx || pipelineState === 'completed' || pipelineState === 'added';
            const isActive = currentStepIndex === idx && pipelineState === 'processing';

            return (
              <div key={stg.id} className={`pipeline-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                <div className="step-node">
                  {isCompleted ? <Check size={18} /> : idx + 1}
                </div>
                <div className="step-name">{stg.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Upload / Review Area */}
      {pipelineState === 'idle' && (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '40px' }}>
          {/* Dropzone Container */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '28px', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#0c2035', marginBottom: '16px' }}>Select or Drop Polar Research Asset</h3>

            <label htmlFor="file-upload" className="upload-dropzone" style={{ display: 'block' }}>
              <input
                id="file-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                accept=".pdf,.nc,.csv,.tif,.docx"
              />
              <div className="upload-icon-circle">
                <UploadCloud size={28} />
              </div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#0c2035', marginBottom: '4px' }}>
                Drag and drop research document or dataset here
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '14px' }}>
                Supports Scientific PDFs, NetCDF-4 (.nc), GeoTIFF, CSV telemetry, and field cruise logs.
              </p>
              <button 
                type="button" 
                className="btn btn-sm btn-secondary" 
                onClick={() => document.getElementById('file-upload').click()}
              >
                Browse Local Files
              </button>
            </label>
          </div>

          {/* Quick Presets for Demo */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#0c2035', marginBottom: '6px' }}>Quick Demo Presets</h3>
            <p style={{ fontSize: '12.5px', color: '#64748b', marginBottom: '16px' }}>
              Select a pre-loaded scientific asset to observe simulated extraction in seconds:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SAMPLE_INGESTION_PRESETS.map((preset) => (
                <div
                  key={preset.id}
                  style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px', cursor: 'pointer', transition: 'all 0.15s', backgroundColor: '#f8fafc' }}
                  onClick={() => handleSelectPreset(preset)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span className="badge badge-publication" style={{ fontSize: '10px' }}>{preset.documentType}</span>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>{preset.filesize}</span>
                  </div>
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#0c2035', marginBottom: '2px' }}>
                    {preset.filename}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#0284c7' }}>
                    Click to load & process →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Processing Live Feedback */}
      {pipelineState === 'processing' && (
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '36px 28px', textAlign: 'center', marginBottom: '40px', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f0f9ff', color: '#0969da', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <RefreshCw size={24} className="spin" />
          </div>
          <h3 style={{ fontSize: '1.3rem', color: '#0c2035', marginBottom: '6px' }}>
            Processing: {selectedFile ? selectedFile.name : 'scientific_document.pdf'}
          </h3>
          <p style={{ fontSize: '13.5px', color: '#64748b', marginBottom: '20px' }}>
            Automated pipeline executing OCR parsing, entity extraction, and Dublin Core schema validation...
          </p>

          {/* Console / Terminal logs */}
          <div style={{ maxWidth: '680px', margin: '0 auto', backgroundColor: '#0c2035', color: '#93c5fd', borderRadius: '6px', padding: '16px', textAlign: 'left', fontFamily: 'var(--font-mono)', fontSize: '12.5px', lineHeight: '1.6' }}>
            {processingLogs.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>
        </div>
      )}

      {/* Completed State: Review Extracted Metadata & Commit */}
      {(pipelineState === 'completed' || pipelineState === 'added') && extractedMetadata && (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '40px' }}>
          {/* Metadata Review & Edit Form */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '28px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
              <div>
                <span className="badge badge-semantic" style={{ marginBottom: '4px' }}>
                  <ShieldCheck size={12} style={{ marginRight: '3px' }} /> Automated Extraction Complete
                </span>
                <h3 style={{ fontSize: '1.25rem', color: '#0c2035' }}>Review Generated Dublin Core Metadata</h3>
              </div>
              <button className="btn btn-sm btn-secondary" onClick={handleReset}>
                <RotateCcw size={13} /> Reset
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>Document Title</label>
                <input
                  type="text"
                  value={extractedMetadata.title}
                  onChange={(e) => setExtractedMetadata({ ...extractedMetadata, title: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13.5px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>Document Type</label>
                  <input
                    type="text"
                    value={extractedMetadata.documentType}
                    onChange={(e) => setExtractedMetadata({ ...extractedMetadata, documentType: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13.5px' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>Research Domain</label>
                  <input
                    type="text"
                    value={extractedMetadata.researchArea}
                    onChange={(e) => setExtractedMetadata({ ...extractedMetadata, researchArea: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13.5px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>Target Region</label>
                  <input
                    type="text"
                    value={extractedMetadata.region}
                    onChange={(e) => setExtractedMetadata({ ...extractedMetadata, region: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13.5px' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>Year of Record</label>
                  <input
                    type="number"
                    value={extractedMetadata.year}
                    onChange={(e) => setExtractedMetadata({ ...extractedMetadata, year: Number(e.target.value) })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13.5px' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>Authors / Investigators</label>
                <input
                  type="text"
                  value={extractedMetadata.authors ? extractedMetadata.authors.join(', ') : ''}
                  onChange={(e) => setExtractedMetadata({ ...extractedMetadata, authors: e.target.value.split(',').map(s => s.trim()) })}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13.5px' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>Keywords (comma separated)</label>
                <input
                  type="text"
                  value={extractedMetadata.keywords ? extractedMetadata.keywords.join(', ') : ''}
                  onChange={(e) => setExtractedMetadata({ ...extractedMetadata, keywords: e.target.value.split(',').map(s => s.trim()) })}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13.5px' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>Abstract / Description</label>
                <textarea
                  rows={4}
                  value={extractedMetadata.abstract}
                  onChange={(e) => setExtractedMetadata({ ...extractedMetadata, abstract: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px', lineHeight: '1.5' }}
                />
              </div>

              {pipelineState === 'added' ? (
                <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '6px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#065f46', fontSize: '13.5px', fontWeight: 600 }}>
                    <CheckCircle2 size={20} />
                    <span>Successfully Committed to Unified Polar Repository!</span>
                  </div>
                  <button className="btn btn-sm btn-primary" onClick={onViewInRepository}>
                    View in Repository <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <button
                  className="btn btn-accent btn-lg"
                  onClick={handleCommitToRepository}
                  style={{ marginTop: '8px' }}
                >
                  <Database size={16} />
                  Add to Repository
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Ingestion Audit Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
              <h4 style={{ fontSize: '13.5px', color: '#0c2035', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="#059669" /> Verification Checks Passed
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px', color: '#334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={15} color="#059669" />
                  <span>Document uploaded & parsed</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={15} color="#059669" />
                  <span>Text extracted via OCR layer</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={15} color="#059669" />
                  <span>Metadata detected & standardized</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={15} color="#059669" />
                  <span>Content classified & cataloged</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={15} color="#059669" />
                  <span>Duplicate SHA-256 check passed</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={15} color="#059669" />
                  <span>Repository ingestion ready</span>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '8px', padding: '16px', fontSize: '12px', color: '#0369a1', lineHeight: '1.45' }}>
              <strong>Notice:</strong> Adding this record updates the repository catalog. It will immediately appear in search results, repository facets, and statistics.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
