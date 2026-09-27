# Polar Knowledge Portal

> **Smart India Hackathon (SIH26063)**  
> **Integrated Polar Science Outreach, Knowledge Repository and Media Dissemination Portal**  
> Dedicated to unified polar research dissemination, metadata preservation, open-access datasets, and scientific outreach for the Indian Antarctic Programme, Arctic expeditions, and Southern Ocean observations.

---

## Overview

The **Polar Knowledge Portal** is a centralized digital knowledge infrastructure modeled after institutional scientific repositories (NCPOR, MoES, NCBI, NASA Earthdata, and NOAA NCEI). It provides researchers, students, educators, and the public with open-access scientific publications, expedition archives, tabular telemetry datasets, multimedia galleries, and interactive polar station mapping.

### Core Capabilities

1. **Unified Polar Knowledge Repository**
   - Faceted search across multi-disciplinary scientific publications, expedition reports, datasets, and educational media.
   - Standard academic metadata schema (Dublin Core, ISO-19115 compliant) with DOI tracking.
   - Direct export of academic citations in APA, BibTeX, Chicago, and MLA formats.

2. **Scientific Datasets Gateway**
   - Catalog of telemetry observations, CTD casts, and meteorological time-series.
   - Interactive tabular data previewer with client-side sorting and row-level filtering.

3. **Interactive Polar Spatial Station Map**
   - Dual-view SVG spatial projections covering Antarctica (Bharati, Maitri, Dakshin Gangotri, Prydz Bay) and the Arctic (Himadri, Ny-Ålesund, Svalbard).
   - Station telemetry drawer with coordinates, weather profiles, elevation, and linked station publications.

4. **Polar Multimedia Dissemination Library**
   - High-resolution photographic and video documentation of Indian polar research stations, ice cores, and marine fauna.
   - Modal telemetry viewer displaying camera attributes, geographical coordinates, and open-access licensing.

5. **Outreach & Media Dissemination Studio**
   - Multi-channel science communication suite generating official press releases, public outreach summaries, institutional newsletters, and educational primers from peer-reviewed monographs.

6. **Automated Metadata Ingestion Pipeline**
   - 6-stage document ingestion workflow simulating OCR parsing, Dublin Core extraction, taxonomic classification, and live repository indexing.

7. **Educational Learning Center**
   - Curriculum-aligned polar science primers, key takeaway cards, and learning guides for students and educators.

---

## Tech Stack

- **Framework**: React 19 + Vite 6
- **Icons**: Lucide React
- **Styling**: Pure Institutional CSS design system (high-contrast, accessible, zero third-party CSS overhead)
- **Deployment**: Optimized for Vercel / Netlify / Static hosting

---

## Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ezhilarasu-dev-hub/Null2One-1_Polar_Repository.git
   cd Null2One-1_Polar_Repository
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## Deploying to Vercel

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import `Null2One-1_Polar_Repository`.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. SPA route rewrites are pre-configured in `vercel.json`.

---

## License

Open-Access Scientific Prototype. Built for educational and research dissemination demonstration purposes.
