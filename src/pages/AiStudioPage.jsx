import React, { useState } from 'react';
import { 
  FileText, 
  Share2, 
  Mail, 
  GraduationCap, 
  Copy, 
  CheckCircle2, 
  RefreshCw, 
  Download, 
  Layers, 
  Sliders, 
  Info,
  Check,
  Send
} from 'lucide-react';
import { AI_OUTREACH_CONTENT } from '../data/aiStudioTemplates';

export function AiStudioPage({ 
  publications = [], 
  initialPublicationId = 'pub-001',
  initialTab = 'website'
}) {
  const [selectedPubId, setSelectedPubId] = useState(initialPublicationId);
  const [activeTab, setActiveTab] = useState(initialTab); // 'website', 'social', 'newsletter', 'educational', 'press'
  const [tone, setTone] = useState('Public Outreach');
  const [length, setLength] = useState('Standard');
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  // Available publications in studio
  const availablePubIds = Object.keys(AI_OUTREACH_CONTENT);
  const currentContent = AI_OUTREACH_CONTENT[selectedPubId] || AI_OUTREACH_CONTENT['pub-001'];
  const pubMeta = publications.find(p => p.id === selectedPubId) || publications[0];

  const handleSimulateRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      setIsRegenerating(false);
    }, 800);
  };

  const getCopyableText = () => {
    switch (activeTab) {
      case 'website':
        return currentContent.websiteArticle.content;
      case 'social':
        return currentContent.socialMediaPost.content + "\n\n" + currentContent.socialMediaPost.linkedInContent;
      case 'newsletter':
        return currentContent.newsletter.content;
      case 'educational':
        return currentContent.educationalSummary.content;
      case 'press':
        return currentContent.pressRelease.content;
      default:
        return currentContent.websiteArticle.content;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCopyableText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleExportMarkdown = () => {
    const text = getCopyableText();
    const element = document.createElement("a");
    const file = new Blob([text], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = `${selectedPubId}_${activeTab}_outreach.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="container">
      {/* Page Title & Breadcrumb */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', color: '#57606a', marginBottom: '4px' }}>
          Portal / Outreach & Dissemination Studio
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 style={{ fontSize: '1.65rem', color: '#1f2328' }}>Polar Outreach & Dissemination Studio</h1>
            <div style={{ fontSize: '13.5px', color: '#57606a', marginTop: '4px' }}>
              Multi-channel dissemination suite generating public outreach articles, press releases, educational primers, and institutional announcements from peer-reviewed polar science.
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Control Bar & Output Viewport */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '24px', marginBottom: '40px' }}>
        {/* Left Column: Source Selection & Synthesis Parameters */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Research Document Selector */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '18px', boxShadow: 'var(--shadow-sm)' }}>
            <label style={{ fontSize: '12.5px', fontWeight: 700, color: '#0c2035', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              1. Select Source Research
            </label>
            <select
              value={selectedPubId}
              onChange={(e) => setSelectedPubId(e.target.value)}
              style={{ width: '100%', padding: '8px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px', backgroundColor: '#fff', color: '#0c2035', marginBottom: '12px' }}
            >
              {availablePubIds.map(id => {
                const item = publications.find(p => p.id === id) || { title: id };
                return (
                  <option key={id} value={id}>
                    {item.title}
                  </option>
                );
              })}
            </select>

            <div style={{ fontSize: '12px', color: '#64748b', backgroundColor: '#f8fafc', padding: '10px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontWeight: 600, color: '#0c2035', marginBottom: '2px' }}>Paper Overview:</div>
              <div style={{ lineHeight: '1.4' }}>{currentContent.summaryKey}</div>
            </div>
          </div>

          {/* Tone & Style Adjustments */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '18px', boxShadow: 'var(--shadow-sm)' }}>
            <label style={{ fontSize: '12.5px', fontWeight: 700, color: '#0c2035', display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              2. Generation Parameters
            </label>

            <div style={{ marginBottom: '14px' }}>
              <span style={{ fontSize: '12px', color: '#475569', display: 'block', marginBottom: '4px' }}>Audience Tone:</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {['Public Outreach', 'Academic Simplified', 'High School Student'].map(t => (
                  <label key={t} style={{ fontSize: '12.5px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: '#334155' }}>
                    <input
                      type="radio"
                      name="tone"
                      checked={tone === t}
                      onChange={() => setTone(t)}
                      style={{ accentColor: '#0284c7' }}
                    />
                    <span>{t}</span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <span style={{ fontSize: '12px', color: '#475569', display: 'block', marginBottom: '4px' }}>Length / Scope:</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['Concise', 'Standard', 'In-Depth'].map(l => (
                  <button
                    key={l}
                    type="button"
                    className={`btn btn-sm ${length === l ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setLength(l)}
                    style={{ flex: 1 }}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="btn btn-sm btn-accent"
              onClick={handleSimulateRegenerate}
              disabled={isRegenerating}
              style={{ width: '100%', gap: '6px' }}
            >
              <RefreshCw size={13} className={isRegenerating ? 'spin' : ''} />
              {isRegenerating ? 'Synthesizing...' : 'Regenerate Content'}
            </button>
          </div>

          {/* Workflow Architecture Callout */}
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '6px', padding: '14px', fontSize: '12px', color: '#0369a1', lineHeight: '1.45' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, marginBottom: '4px' }}>
              <Info size={15} /> Dissemination Pipeline
            </div>
            Extracts semantic abstracts and translates technical cryospheric jargon into clear multi-format public narratives ready for institutional approval.
          </div>
        </aside>

        {/* Right Column: AI Output Viewer */}
        <main>
          {/* Format Tabs */}
          <div className="tabs-nav">
            <button
              className={`tab-btn ${activeTab === 'website' ? 'active' : ''}`}
              onClick={() => setActiveTab('website')}
            >
              <FileText size={15} />
              <span>Website Article</span>
            </button>

            <button
              className={`tab-btn ${activeTab === 'social' ? 'active' : ''}`}
              onClick={() => setActiveTab('social')}
            >
              <Share2 size={15} />
              <span>Social Media Post</span>
            </button>

            <button
              className={`tab-btn ${activeTab === 'newsletter' ? 'active' : ''}`}
              onClick={() => setActiveTab('newsletter')}
            >
              <Mail size={15} />
              <span>Institutional Newsletter</span>
            </button>

            <button
              className={`tab-btn ${activeTab === 'educational' ? 'active' : ''}`}
              onClick={() => setActiveTab('educational')}
            >
              <GraduationCap size={15} />
              <span>Educational Summary</span>
            </button>

            <button
              className={`tab-btn ${activeTab === 'press' ? 'active' : ''}`}
              onClick={() => setActiveTab('press')}
            >
              <Send size={15} />
              <span>Press Release</span>
            </button>
          </div>

          {/* Output Display Panel */}
          <div className="ai-output-panel">
            {/* Output Meta Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge badge-publication">
                  Official Communication Draft
                </span>
                <span style={{ fontSize: '12.5px', color: '#57606a' }}>
                  Source: <strong>{pubMeta.title}</strong>
                </span>
              </div>

              {/* Actions: Copy & Export */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="btn btn-sm btn-secondary"
                  onClick={handleCopy}
                >
                  {copied ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy Text'}</span>
                </button>

                <button 
                  className="btn btn-sm btn-secondary"
                  onClick={handleExportMarkdown}
                >
                  <Download size={14} />
                  <span>Export .md</span>
                </button>
              </div>
            </div>

            {/* Generated Content Body */}
            {isRegenerating ? (
              <div style={{ padding: '60px 0', textAlign: 'center', color: '#64748b' }}>
                <RefreshCw size={28} className="spin" style={{ margin: '0 auto 12px', color: '#0284c7' }} />
                <div style={{ fontSize: '14px', fontWeight: 600 }}>Synthesizing outreach narrative...</div>
                <div style={{ fontSize: '12px' }}>Applying {tone} tone and {length} length profile</div>
              </div>
            ) : (
              <div>
                {/* 1. Website Article View */}
                {activeTab === 'website' && (
                  <div>
                    <h2 style={{ fontSize: '1.45rem', color: '#0c2035', marginBottom: '6px' }}>
                      {currentContent.websiteArticle.title}
                    </h2>
                    <div style={{ display: 'flex', gap: '14px', fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>
                      <span>Estimated Read Time: <strong>{currentContent.websiteArticle.readTime}</strong></span>
                      <span>Target Audience: <strong>{currentContent.websiteArticle.targetAudience}</strong></span>
                    </div>

                    <div style={{ fontSize: '14px', lineHeight: '1.7', color: '#334155' }}>
                      {currentContent.websiteArticle.content.split('\n\n').map((para, i) => {
                        if (para.startsWith('### ')) {
                          return <h3 key={i} style={{ fontSize: '1.15rem', color: '#0c2035', margin: '18px 0 8px' }}>{para.replace('### ', '')}</h3>;
                        }
                        if (para.startsWith('- ')) {
                          return (
                            <ul key={i} style={{ paddingLeft: '20px', margin: '8px 0' }}>
                              {para.split('\n').map((item, ii) => (
                                <li key={ii} style={{ marginBottom: '4px' }}>{item.replace('- ', '')}</li>
                              ))}
                            </ul>
                          );
                        }
                        return <p key={i} style={{ marginBottom: '14px' }}>{para}</p>;
                      })}
                    </div>

                    <div style={{ marginTop: '16px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {currentContent.websiteArticle.tags.map(t => (
                        <span key={t} style={{ fontSize: '11.5px', color: '#0284c7', backgroundColor: '#f0f9ff', padding: '2px 8px', borderRadius: '4px' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Social Media Posts */}
                {activeTab === 'social' && (
                  <div>
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ fontSize: '13.5px', color: '#0c2035', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                        <span>X (Twitter) Short Form Thread</span>
                        <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 400 }}>
                          ({currentContent.socialMediaPost.characterCount} chars / 280 max)
                        </span>
                      </h4>
                      <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '14px', fontSize: '13.5px', whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>
                        {currentContent.socialMediaPost.content}
                      </div>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '13.5px', color: '#0c2035', marginBottom: '8px' }}>
                        LinkedIn Professional Dissemination Article
                      </h4>
                      <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '14px', fontSize: '13.5px', whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>
                        {currentContent.socialMediaPost.linkedInContent}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Newsletter */}
                {activeTab === 'newsletter' && (
                  <div>
                    <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '14px', marginBottom: '16px', fontSize: '12.5px' }}>
                      <div><strong>Subject:</strong> {currentContent.newsletter.subjectLine}</div>
                      <div><strong>Dispatch:</strong> {currentContent.newsletter.edition} ({currentContent.newsletter.date})</div>
                      <div><strong>Recipients:</strong> {currentContent.newsletter.recipientGroup}</div>
                    </div>

                    <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '18px', fontSize: '13px', whiteSpace: 'pre-wrap', lineHeight: '1.6', fontFamily: 'var(--font-mono)' }}>
                      {currentContent.newsletter.content}
                    </div>
                  </div>
                )}

                {/* 4. Educational Summary */}
                {activeTab === 'educational' && (
                  <div>
                    <div style={{ display: 'flex', gap: '14px', fontSize: '12px', color: '#64748b', marginBottom: '14px' }}>
                      <span>Level: <strong>{currentContent.educationalSummary.targetLevel}</strong></span>
                      <span>Format: <strong>{currentContent.educationalSummary.format}</strong></span>
                    </div>

                    <div style={{ fontSize: '14px', lineHeight: '1.7', color: '#334155' }}>
                      {currentContent.educationalSummary.content.split('\n\n').map((para, i) => {
                        if (para.startsWith('### ')) {
                          return <h3 key={i} style={{ fontSize: '1.2rem', color: '#0c2035', margin: '16px 0 8px' }}>{para.replace('### ', '')}</h3>;
                        }
                        if (para.startsWith('#### ')) {
                          return <h4 key={i} style={{ fontSize: '1.05rem', color: '#0369a1', margin: '14px 0 6px' }}>{para.replace('#### ', '')}</h4>;
                        }
                        if (para.startsWith('1. ') || para.startsWith('- ')) {
                          return (
                            <div key={i} style={{ paddingLeft: '16px', margin: '6px 0' }}>
                              {para.split('\n').map((line, ii) => (
                                <div key={ii} style={{ marginBottom: '4px' }}>{line}</div>
                              ))}
                            </div>
                          );
                        }
                        return <p key={i} style={{ marginBottom: '12px' }}>{para}</p>;
                      })}
                    </div>
                  </div>
                )}

                {/* 5. Press Release */}
                {activeTab === 'press' && (
                  <div>
                    <div style={{ fontSize: '11px', color: '#b91c1c', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '6px' }}>
                      {currentContent.pressRelease.dateline}
                    </div>
                    <h3 style={{ fontSize: '1.3rem', color: '#0c2035', marginBottom: '14px' }}>
                      {currentContent.pressRelease.headline}
                    </h3>
                    <div style={{ fontSize: '14px', lineHeight: '1.7', color: '#334155' }}>
                      {currentContent.pressRelease.content.split('\n\n').map((p, i) => (
                        <p key={i} style={{ marginBottom: '14px' }}>{p}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
