// Complete Mock Database for SIH 2026 Problem Statement SIH26063
// "Integrated Polar Science Outreach, Knowledge Repository and Media Dissemination Portal"
// Realistic polar scientific content from NCPOR / Ministry of Earth Sciences ecosystem

export const REPOSITORY_STATS = {
  publications: 1248,
  expeditions: 386,
  datasets: 724,
  mediaAssets: 2150,
  activeExpeditions: 86,
  participatingInstitutes: 47,
  activeStations: 3,
  openAccessPercent: 94.2
};

export const RESEARCH_LOCATIONS = [
  {
    id: "loc-bharati",
    name: "Bharati Research Station",
    hindiName: "भारती अनुसंधान केंद्र",
    region: "Antarctica",
    subRegion: "Larsemann Hills, Princess Elizabeth Land",
    coordinates: { lat: -69.4078, lon: 76.1872, display: "69°24'28\"S, 76°11'14\"E" },
    establishedYear: 2012,
    elevation: "35 m above sea level",
    status: "Operational — Year-Round",
    expeditionCount: 14,
    activeProjectsCount: 22,
    facilities: ["Atmospheric Physics Lab", "Satellite Ground Station", "Oceanographic Wet Lab", "Seismological Vault"],
    description: "Commissioned in March 2012, Bharati is India's third Antarctic research station, constructed using prefabricated containers with high aerodynamic efficiency and environmental compliance under the Antarctic Treaty System Protocol on Environmental Protection.",
    imageUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1000&q=80",
    recentResearchIds: ["pub-001", "pub-007", "pub-008"],
    availableDatasetIds: ["ds-001", "ds-002", "ds-008"]
  },
  {
    id: "loc-maitri",
    name: "Maitri Research Station",
    hindiName: "मैत्री अनुसंधान केंद्र",
    region: "Antarctica",
    subRegion: "Schirmacher Oasis, Queen Maud Land",
    coordinates: { lat: -70.7658, lon: 11.7358, display: "70°45'57\"S, 11°44'09\"E" },
    establishedYear: 1989,
    elevation: "117 m above sea level",
    status: "Operational — Year-Round",
    expeditionCount: 37,
    activeProjectsCount: 28,
    facilities: ["Geomagnetic Observatory", "Priyadarshini Lake Monitoring", "Meteorological Radar", "Biology Clean-room"],
    description: "Established during the 8th Indian Expedition (1988-89), Maitri is situated on ice-free rocky terrain in Schirmacher Oasis adjacent to freshwater Lake Priyadarshini. It serves as India's enduring gateway for inland glaciological and geomagnetism studies.",
    imageUrl: "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?auto=format&fit=crop&w=1000&q=80",
    recentResearchIds: ["pub-003", "pub-006", "pub-010", "pub-015"],
    availableDatasetIds: ["ds-003", "ds-006"]
  },
  {
    id: "loc-dakshin-gangotri",
    name: "Dakshin Gangotri Site",
    hindiName: "दक्षिण गंगोत्री (ऐतिहासिक स्थल)",
    region: "Antarctica",
    subRegion: "Princess Astrid Coast, Ice Shelf",
    coordinates: { lat: -70.0936, lon: 12.0000, display: "70°05'37\"S, 12°00'00\"E" },
    establishedYear: 1983,
    elevation: "Ice shelf surface",
    status: "Historic Site / Automated AWS Station",
    expeditionCount: 8,
    activeProjectsCount: 4,
    facilities: ["Automated Weather Station (AWS)", "Glacier Mass Movement Marker", "Historic Monument"],
    description: "India's pioneer Antarctic base established during 1983-84. Submerged by successive ice sheet accumulation in 1990, it is now commemorated under the Antarctic Treaty as Historic Site and Monument (HSM No. 44) with active unmanned telemetry monitoring.",
    imageUrl: "https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?auto=format&fit=crop&w=1000&q=80",
    recentResearchIds: ["pub-009", "pub-013"],
    availableDatasetIds: ["ds-003"]
  },
  {
    id: "loc-himadri",
    name: "Himadri Research Station",
    hindiName: "हिमाद्रि अनुसंधान केंद्र (आर्कटिक)",
    region: "Arctic",
    subRegion: "Ny-Ålesund, Spitsbergen, Svalbard",
    coordinates: { lat: 78.9167, lon: 11.9333, display: "78°55'00\"N, 11°56'00\"E" },
    establishedYear: 2008,
    elevation: "12 m above sea level",
    status: "Operational — Year-Round / Winter Missions",
    expeditionCount: 16,
    activeProjectsCount: 19,
    facilities: ["Kongsfjorden Fjord Hydrography", "Aerosol Spectrometer", "Microbiology Cold Chamber", "IndARC Mooring Receiver"],
    description: "Dedicated on 1 July 2008, Himadri is India's dedicated Arctic research station located at the world's northernmost scientific settlement in Ny-Ålesund, Svalbard, focusing on fjord oceanography, atmospheric chemistry, and glaciological melting.",
    imageUrl: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1000&q=80",
    recentResearchIds: ["pub-004", "pub-011"],
    availableDatasetIds: ["ds-004"]
  },
  {
    id: "loc-southern-ocean",
    name: "Southern Ocean Polar Frontal Zone",
    hindiName: "दक्षिणी महासागर ध्रुवीय सीमा",
    region: "Southern Ocean",
    subRegion: "Sub-Antarctic & Polar Front (40°S - 66°S, 57.5°E)",
    coordinates: { lat: -52.0000, lon: 57.5000, display: "52°00'00\"S, 57°30'00\"E" },
    establishedYear: 2004,
    elevation: "Depth: 0 - 5200 m",
    status: "Recurring Annual Cruise Transects",
    expeditionCount: 13,
    activeProjectsCount: 15,
    facilities: ["ORV Sagar Nidhi / Sagar Kanya Cruises", "CTD Rosette Array", "Argo Float Arrays", "Carbon Flux Sediment Traps"],
    description: "A crucial oceanic regime where cold Antarctic waters subduct beneath temperate waters. Indian scientists monitor carbon sequestering, biogeochemical cycles, and teleconnections with the Indian Summer Monsoon across repeated 57.5°E meridional transects.",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    recentResearchIds: ["pub-002", "pub-005", "pub-014", "pub-016"],
    availableDatasetIds: ["ds-002", "ds-007"]
  },
  {
    id: "loc-prydz-bay",
    name: "Prydz Bay Deep Mooring Station",
    hindiName: "प्रिड्ज़ बे समुद्री वेधशाला",
    region: "Antarctica",
    subRegion: "Amery Ice Shelf Edge, Prydz Bay",
    coordinates: { lat: -68.5000, lon: 75.0000, display: "68°30'00\"S, 75°00'00\"E" },
    establishedYear: 2014,
    elevation: "Depth: 650 m",
    status: "Active Mooring & Remote Sensing",
    expeditionCount: 11,
    activeProjectsCount: 12,
    facilities: ["Sub-surface Moored ADCP Array", "Fluorometer Strings", "Turbulence Profilers", "Satellite Synthetic Aperture Radar (SAR)"],
    description: "Positioned offshore from Bharati Station at the outflow of the Amery Ice Shelf, this oceanographic observatory continuously records dense Antarctic Bottom Water (AABW) formation, polynyas, and seasonal pack-ice breakup dynamics.",
    imageUrl: "https://images.unsplash.com/photo-1548263594-a71ea65a8598?auto=format&fit=crop&w=1000&q=80",
    recentResearchIds: ["pub-001", "pub-008", "pub-002"],
    availableDatasetIds: ["ds-001", "ds-005"]
  }
];

export const RESEARCH_PUBLICATIONS = [
  {
    id: "pub-001",
    title: "Seasonal Variability of Antarctic Sea Ice",
    subtitle: "Observational Dynamics, Satellite-derived Trends and Microclimatic Teleconnections (2018–2025)",
    type: "Research Publication",
    year: 2025,
    region: "Antarctica",
    researchArea: "Climate Science",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    authors: ["Dr. Ananya Rao", "Dr. Karthik Menon", "Dr. Rajesh Sharma"],
    journal: "Polar Science Research & Climate Dynamics, Vol. 42(3), pp. 112-129",
    doi: "10.1016/j.polar.2025.101142",
    citations: 18,
    downloads: 412,
    dateAdded: "2025-08-14",
    pdfSize: "4.8 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Antarctic sea ice forms a pivotal boundary layer governing global thermohaline circulation, albedo modulation, and ocean-atmosphere heat exchange. This investigation evaluates multi-sensor passive microwave measurements (AMSR-2, SSMIS) calibrated against in-situ autonomous ice-tethered profilers and field surveys conducted during the 43rd and 44th Indian Scientific Expeditions to Antarctica (ISEA). A statistically significant asymmetric decline was recorded in the Weddell and Ross Sea sectors, accompanied by anomalous autumn refreezing delays of 14 ± 3 days along the Princess Elizabeth Land coast. High-resolution thermodynamic modeling reveals that altered circumpolar wind stress and elevated Southern Ocean heat flux are key drivers accelerating seasonal pack-ice thinning.",
    keywords: ["Sea Ice", "Climate Change", "Antarctic Research", "Passive Microwave", "Prydz Bay", "Thermodynamic Modeling"],
    semanticMatchScore: 0.98,
    relatedDatasetIds: ["ds-001", "ds-005"],
    relatedMediaIds: ["med-001", "med-004", "med-007"],
    relatedExpeditionIds: ["exp-001", "exp-002"],
    isFeatured: true
  },
  {
    id: "pub-002",
    title: "Microplastic Accumulation in Sub-Antarctic Pelagic Waters and Prydz Bay",
    subtitle: "Quantification of Anthropogenic Polymer Incursion into Pristine Marine Food Webs",
    type: "Research Publication",
    year: 2025,
    region: "Southern Ocean",
    researchArea: "Oceanography",
    institution: "National Institute of Oceanography (NIO) & NCPOR",
    authors: ["Dr. Meenakshi Sundaram", "Dr. Arvind Saxena"],
    journal: "Marine Environmental Pollution Letters, 89, 104521",
    doi: "10.1016/j.marpol.2025.104521",
    citations: 9,
    downloads: 290,
    dateAdded: "2025-06-20",
    pdfSize: "3.2 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Surface manta net trawls (330 μm mesh) and deep Niskin casts deployed along the 57.5°E Southern Ocean transect revealed pervasive microplastic concentrations ranging from 0.08 to 1.42 items/m³. Micro-FTIR and Raman spectroscopic analysis identified polyethylene (44%) and polypropylene fibers (32%) as the predominant polymers. Bio-optical observations indicate adherence of microplastics to Antarctic krill (Euphausia superba) carapace surfaces, posing bioaccumulation risks across trophic cascades.",
    keywords: ["Microplastics", "Southern Ocean", "Euphausia superba", "FTIR Spectroscopy", "Marine Pollution"],
    semanticMatchScore: 0.88,
    relatedDatasetIds: ["ds-002", "ds-007"],
    relatedMediaIds: ["med-005", "med-006"],
    relatedExpeditionIds: ["exp-004"],
    isFeatured: false
  },
  {
    id: "pub-003",
    title: "Mass Balance and Surface Velocity of Dakshin Gangotri Glacier",
    subtitle: "DGPS Measurements and Sentinel-1 SAR Interferometry over Central Dronning Maud Land",
    type: "Research Publication",
    year: 2024,
    region: "Antarctica",
    researchArea: "Glaciology",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    authors: ["Dr. Rajesh Sharma", "Dr. Neha Deshmukh", "Er. Vipin Nair"],
    journal: "Journal of Glaciological Society of India, Vol. 33(1), pp. 45-58",
    doi: "10.1007/s12040-024-0211-8",
    citations: 24,
    downloads: 530,
    dateAdded: "2024-11-10",
    pdfSize: "5.6 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "The snout of Dakshin Gangotri Glacier in Schirmacher Oasis has been monitored since 1983 as a reference baseline for East Antarctic peripheral ice retreat. Over the decade 2014-2024, high-precision differential GPS combined with differential SAR interferometry indicates an average snout retreat rate of 0.62 ± 0.08 m/year, coupled with a surface ice velocity deceleration from 2.1 m/yr to 1.8 m/yr in the ablation zone. Supraglacial meltwater channels have expanded by 18% due to extended summer positive degree days.",
    keywords: ["Glaciology", "Mass Balance", "Schirmacher Oasis", "DGPS", "SAR Interferometry", "Dakshin Gangotri"],
    semanticMatchScore: 0.84,
    relatedDatasetIds: ["ds-003"],
    relatedMediaIds: ["med-003", "med-008"],
    relatedExpeditionIds: ["exp-002", "exp-005"],
    isFeatured: true
  },
  {
    id: "pub-004",
    title: "Atmospheric Boundary Layer Structure over Kongsfjorden, Svalbard",
    subtitle: "Tethered Balloon Soundings and Eddy Covariance Fluxes during Arctic Winter",
    type: "Research Publication",
    year: 2025,
    region: "Arctic",
    researchArea: "Atmospheric Science",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    authors: ["Dr. Pradeep Verma", "Dr. Linda Johansen", "Dr. Ananya Rao"],
    journal: "Atmospheric Chemistry and Physics Discussions, 25, 3401-3419",
    doi: "10.5194/acp-2025-3401",
    citations: 12,
    downloads: 315,
    dateAdded: "2025-03-12",
    pdfSize: "6.1 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Wintertime atmospheric boundary layer (ABL) dynamics were probed at the Himadri Station in Ny-Ålesund using a 250 m tethered balloon system, microwave radiometer, and sonic anemometer tower. Surface-based temperature inversions exceeding 7.2 K/100 m were observed during polar night clear-sky episodes. Marine air incursions from the West Spitsbergen Current trigger abrupt breakdown of stratification, generating strong turbulent sensible heat fluxes toward the atmosphere and accelerated fjord ice melting.",
    keywords: ["Arctic Atmosphere", "Kongsfjorden", "Himadri", "Boundary Layer", "Eddy Covariance", "Polar Inversion"],
    semanticMatchScore: 0.81,
    relatedDatasetIds: ["ds-004"],
    relatedMediaIds: ["med-009", "med-010"],
    relatedExpeditionIds: ["exp-003", "exp-006"],
    isFeatured: false
  },
  {
    id: "pub-005",
    title: "Southern Ocean Oceanographic Observations: Frontal Dynamics and Carbon Fluxes",
    subtitle: "Meridional Biogeochemical Profiling Across the Subtropical and Polar Frontal Zones",
    type: "Research Publication",
    year: 2024,
    region: "Southern Ocean",
    researchArea: "Oceanography",
    institution: "National Centre for Polar and Ocean Research & NIO",
    authors: ["Dr. Arvind Saxena", "Dr. Meenakshi Sundaram", "Dr. Karthik Menon"],
    journal: "Deep Sea Research Part II: Polar Oceans, 218, 105340",
    doi: "10.1016/j.dsr2.2024.105340",
    citations: 31,
    downloads: 620,
    dateAdded: "2024-09-05",
    pdfSize: "7.4 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Hydrographic sections obtained along 57.5°E from Mauritius to 67°S aboard ORV Sagar Nidhi capture steep thermohaline transitions across the Sub-Antarctic Front (SAF) and Polar Front (PF). Under-saturation of surface water pCO2 with respect to the atmosphere demonstrates that the Sub-Antarctic Zone acts as an intense biological sink (-18.4 mmol C m⁻² d⁻¹), whereas upwelling regions south of the Southern Boundary release carbon to the atmosphere. Nitrate-to-phosphate ratios confirm strong iron limitation controlling diatom growth.",
    keywords: ["Southern Ocean", "Carbon Flux", "Polar Front", "pCO2", "Hydrography", "ORV Sagar Nidhi"],
    semanticMatchScore: 0.86,
    relatedDatasetIds: ["ds-002", "ds-007"],
    relatedMediaIds: ["med-002", "med-006"],
    relatedExpeditionIds: ["exp-004", "exp-007"],
    isFeatured: true
  },
  {
    id: "pub-006",
    title: "Antarctic Biodiversity Observation Study: Lichen and Cyanobacterial Mats of Schirmacher Oasis",
    subtitle: "Metagenomic Characterization and Desiccation Tolerance Adaptations",
    type: "Research Publication",
    year: 2024,
    region: "Antarctica",
    researchArea: "Biodiversity",
    institution: "Botanical Survey of India & NCPOR",
    authors: ["Dr. Sulochana Gadgil", "Dr. K. S. Murthy"],
    journal: "Antarctic Ecology & Microorganisms, 18(2), 178-195",
    doi: "10.1007/s00300-024-03221-x",
    citations: 16,
    downloads: 380,
    dateAdded: "2024-12-02",
    pdfSize: "4.1 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Schirmacher Oasis harbors 28 recorded lichen species and expansive benthic cyanobacterial mats dominating epilithic surfaces. High-throughput Illumina amplicon sequencing of the 16S and ITS rRNA loci revealed dominance of Nostoc commune and Xanthoria elegans. Biochemical screening elucidated high intracellular accumulations of trehalose and mycosporine-like amino acids (MAAs), which confer exceptional cryoprotection against prolonged sub-zero temperatures and intense solar ultraviolet-B radiation.",
    keywords: ["Antarctic Flora", "Lichen", "Cyanobacteria", "Biodiversity", "Cryoprotection", "Schirmacher Oasis"],
    semanticMatchScore: 0.79,
    relatedDatasetIds: ["ds-006"],
    relatedMediaIds: ["med-011", "med-012"],
    relatedExpeditionIds: ["exp-002"],
    isFeatured: false
  },
  {
    id: "pub-007",
    title: "Long-term Aerosol Optical Depth and Black Carbon Measurements over Larsemann Hills",
    subtitle: "Radiative Forcing and Trans-boundary Smoke Intrusion Analysis (2014–2024)",
    type: "Research Publication",
    year: 2025,
    region: "Antarctica",
    researchArea: "Atmospheric Science",
    institution: "National Physical Laboratory (NPL) & NCPOR",
    authors: ["Dr. Pradeep Verma", "Dr. Ananya Rao"],
    journal: "Journal of Geophysical Research: Atmospheres, 130(4), e2024JD041289",
    doi: "10.1029/2024JD041289",
    citations: 7,
    downloads: 245,
    dateAdded: "2025-01-18",
    pdfSize: "3.9 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Continuous 10-year observations of aerosol optical depth (AOD at 500 nm) utilizing a CIMEL sunphotometer at Bharati Station yielded a baseline background average of 0.024 ± 0.008, characteristic of the pristine polar maritime troposphere. Episodic smoke intrusions originating from Australian wildfire events induced transient AOD spikes up to 0.16, accompanied by equivalent black carbon (eBC) surges to 85 ng/m³, exerting positive top-of-atmosphere radiative perturbations.",
    keywords: ["Aerosols", "Black Carbon", "Bharati Station", "Radiative Forcing", "Atmospheric Chemistry"],
    semanticMatchScore: 0.83,
    relatedDatasetIds: ["ds-008"],
    relatedMediaIds: ["med-001", "med-013"],
    relatedExpeditionIds: ["exp-001"],
    isFeatured: false
  },
  {
    id: "pub-008",
    title: "Sub-surface Hydrography and Circulation Patterns in Prydz Bay",
    subtitle: "Mooring-Derived Oceanographic Profiling at the Continental Shelf Slope",
    type: "Research Publication",
    year: 2024,
    region: "Antarctica",
    researchArea: "Oceanography",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    authors: ["Dr. Karthik Menon", "Dr. Arvind Saxena"],
    journal: "Journal of Marine Systems, 246, 103984",
    doi: "10.1016/j.jmarsys.2024.103984",
    citations: 14,
    downloads: 360,
    dateAdded: "2024-07-19",
    pdfSize: "5.1 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Moored acoustic Doppler current profilers (ADCPs) and temperature-salinity sensors positioned at 68°30'S, 75°00'E in Prydz Bay at depths of 200–650 m recorded sustained cyclonic gyre recirculation and pulses of Modified Circumpolar Deep Water (MCDW) intruding onto the continental shelf. The onshore heat transport of MCDW corresponds directly with sub-ice shelf basal melt rates calculated beneath the Amery Ice Shelf tongue.",
    keywords: ["Prydz Bay", "Ocean Currents", "ADCP", "Amery Ice Shelf", "MCDW", "Hydrography"],
    semanticMatchScore: 0.85,
    relatedDatasetIds: ["ds-001", "ds-005"],
    relatedMediaIds: ["med-002", "med-007"],
    relatedExpeditionIds: ["exp-001", "exp-002"],
    isFeatured: false
  },
  {
    id: "pub-009",
    title: "Basal Topography and Ice Sheet Dynamics of Princess Elizabeth Land",
    subtitle: "Airborne Deep Ground-Penetrating Radar Survey Findings",
    type: "Research Publication",
    year: 2023,
    region: "Antarctica",
    researchArea: "Geology",
    institution: "Geological Survey of India & NCPOR",
    authors: ["Dr. Rajesh Sharma", "Dr. S. K. Roy", "Dr. Neha Deshmukh"],
    journal: "Earth and Planetary Science Letters, 612, 118167",
    doi: "10.1016/j.epsl.2023.118167",
    citations: 27,
    downloads: 480,
    dateAdded: "2023-11-28",
    pdfSize: "8.3 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Airborne radio-echo sounding across 12,000 line-kilometers in Princess Elizabeth Land resolved previously unmapped deep subglacial canyons up to 1,000 meters below sea level connecting the interior plateau with coastal glaciers. Basal thermal regime analysis indicates extensive subglacial basal sliding and lubricating water networks that influence ice sheet discharge into Prydz Bay.",
    keywords: ["Basal Topography", "Radar Sounding", "Princess Elizabeth Land", "Ice Dynamics", "Subglacial Lakes"],
    semanticMatchScore: 0.77,
    relatedDatasetIds: ["ds-005"],
    relatedMediaIds: ["med-004", "med-014"],
    relatedExpeditionIds: ["exp-005", "exp-008"],
    isFeatured: false
  },
  {
    id: "pub-010",
    title: "Meltwater Geochemistry of Polar Glacial Lakes in Schirmacher Oasis",
    subtitle: "Hydrochemical Evolution, Cation Exchange and Mineral Weathering Indices",
    type: "Research Publication",
    year: 2024,
    region: "Antarctica",
    researchArea: "Glaciology",
    institution: "Indian Institute of Science (IISc) & NCPOR",
    authors: ["Dr. Neha Deshmukh", "Dr. Rajesh Sharma"],
    journal: "Geochimica et Cosmochimica Acta, 368, 89-105",
    doi: "10.1016/j.gca.2024.01.018",
    citations: 19,
    downloads: 340,
    dateAdded: "2024-05-14",
    pdfSize: "4.5 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Twenty-two proglacial and periglacial freshwater lakes across Schirmacher Oasis, including Lake Priyadarshini and Lake Zub, were sampled across two consecutive austral summers. Major ion chemistry shows water types transitioning from Na-Cl dominated maritime rain to Ca-HCO3 facies driven by chemical silicate weathering of granitic gneiss bedrock. Stable isotope signatures (δ18O and δD) track glacial melt replenishment versus evaporative concentration.",
    keywords: ["Geochemistry", "Lake Priyadarshini", "Hydrochemistry", "Schirmacher Oasis", "Stable Isotopes"],
    semanticMatchScore: 0.82,
    relatedDatasetIds: ["ds-006"],
    relatedMediaIds: ["med-003", "med-011"],
    relatedExpeditionIds: ["exp-002"],
    isFeatured: false
  },
  {
    id: "pub-011",
    title: "Arctic Stratospheric Ozone Depletion and Polar Vortex Interaction",
    subtitle: "Ozonesonde Profiles Recorded at Ny-Ålesund during Extraordinary 2024 Winter",
    type: "Research Publication",
    year: 2024,
    region: "Arctic",
    researchArea: "Atmospheric Science",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    authors: ["Dr. Pradeep Verma", "Dr. Ananya Rao"],
    journal: "Geophysical Research Letters, 51(18), e2024GL109842",
    doi: "10.1029/2024GL109842",
    citations: 15,
    downloads: 310,
    dateAdded: "2024-10-11",
    pdfSize: "3.7 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Weekly electrochemical concentration cell (ECC) ozonesonde launches from Himadri Station during early 2024 documented persistent stratospheric temperatures below 195 K, sustaining Polar Stratospheric Clouds (PSCs). Chemical ozone destruction rates reached 38 ± 4 nmol/mol per day in the 18–20 km altitude layer, demonstrating that despite Montreal Protocol adherence, exceptional vortex stability can still induce severe localized Arctic ozone losses.",
    keywords: ["Arctic", "Ozone Layer", "Polar Vortex", "Ozonesonde", "Stratosphere", "Himadri"],
    semanticMatchScore: 0.80,
    relatedDatasetIds: ["ds-004"],
    relatedMediaIds: ["med-009", "med-015"],
    relatedExpeditionIds: ["exp-003"],
    isFeatured: false
  },
  {
    id: "pub-012",
    title: "Comparative Genomics of Psychrophilic Bacteria from Antarctic Lake Priyadarshini",
    subtitle: "Cold-Adapted Enzyme Secretion and Novel Antimicrobial Peptide Clusters",
    type: "Research Publication",
    year: 2025,
    region: "Antarctica",
    researchArea: "Biodiversity",
    institution: "Centre for Cellular and Molecular Biology (CCMB) & NCPOR",
    authors: ["Dr. Sulochana Gadgil", "Dr. K. S. Murthy", "Dr. R. Raman"],
    journal: "Applied and Environmental Microbiology, 91(2), e01890-24",
    doi: "10.1128/aem.01890-24",
    citations: 11,
    downloads: 405,
    dateAdded: "2025-02-27",
    pdfSize: "5.0 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Whole genome sequencing of eight psychrotolerant Pseudomonas and Arthrobacter strains isolated from deep sediment cores of Lake Priyadarshini identified gene clusters encoding polyunsaturated fatty acid desaturases, chaperones (CspA family), and cold-active lipases with optimal catalysis at 4°C. Bioinformatic analysis uncovered two uncharacterized non-ribosomal peptide synthetase (NRPS) clusters possessing antimicrobial activity against multi-drug resistant clinical isolates.",
    keywords: ["Psychrophiles", "Enzymes", "Lake Priyadarshini", "Genomics", "Biotechnology", "Microbiology"],
    semanticMatchScore: 0.78,
    relatedDatasetIds: ["ds-006"],
    relatedMediaIds: ["med-012"],
    relatedExpeditionIds: ["exp-002"],
    isFeatured: false
  },
  {
    id: "pub-013",
    title: "Paleoclimatic Inferences from 200m Ice Core in Central Dronning Maud Land",
    subtitle: "High-Resolution Stable Water Isotopes and Volcanic Tephra Horizons (1200–2020 CE)",
    type: "Research Publication",
    year: 2023,
    region: "Antarctica",
    researchArea: "Glaciology",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    authors: ["Dr. Rajesh Sharma", "Dr. Neha Deshmukh"],
    journal: "Quaternary Science Reviews, 319, 108315",
    doi: "10.1016/j.quascirev.2023.108315",
    citations: 34,
    downloads: 512,
    dateAdded: "2023-12-08",
    pdfSize: "6.8 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "A continuous 200.2 meter ice core recovered from the Dronning Maud Land coastal dome was analyzed for δ18O, δD, methanesulfonate, and electrical conductivity at 2 cm resolution. Distinct sulfate and tephra horizons calibrate the chronostratigraphy to major volcanic eruptions including Tambora (1815), Kuwae (1452), and Samalas (1257). The derived surface temperature proxy indicates that post-1970 warming exceeds any 50-year reconstructed epoch over the past eight centuries.",
    keywords: ["Ice Core", "Paleoclimate", "Stable Isotopes", "Dronning Maud Land", "Volcanic Tephra"],
    semanticMatchScore: 0.85,
    relatedDatasetIds: ["ds-003"],
    relatedMediaIds: ["med-008", "med-014"],
    relatedExpeditionIds: ["exp-005"],
    isFeatured: false
  },
  {
    id: "pub-014",
    title: "Marine Biogeochemical Responses to Sea Ice Decline in the Weddell Gyre",
    subtitle: "Nutrient Drawdown, Primary Productivity and Export Efficiency during Austral Summer",
    type: "Research Publication",
    year: 2025,
    region: "Southern Ocean",
    researchArea: "Climate Science",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    authors: ["Dr. Ananya Rao", "Dr. Arvind Saxena", "Dr. Meenakshi Sundaram"],
    journal: "Global Biogeochemical Cycles, 39(5), e2024GB008123",
    doi: "10.1029/2024GB008123",
    citations: 8,
    downloads: 275,
    dateAdded: "2025-07-03",
    pdfSize: "4.4 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Satellite ocean color and robotic BGC-Argo float observations in the Weddell Gyre document that earlier seasonal sea ice retreats trigger premature diatom blooms. However, rapid stratification coupled with dissolved silicate depletion abruptly truncates bloom duration, suppressing particulate organic carbon (POC) export to depths below 1000 meters by 22% compared with long-term climatology.",
    keywords: ["Weddell Gyre", "Primary Productivity", "BGC-Argo", "Carbon Export", "Southern Ocean", "Sea Ice"],
    semanticMatchScore: 0.91,
    relatedDatasetIds: ["ds-001", "ds-002", "ds-007"],
    relatedMediaIds: ["med-005", "med-007"],
    relatedExpeditionIds: ["exp-004"],
    isFeatured: false
  },
  {
    id: "pub-015",
    title: "Magnetospheric Wave Particle Interactions Observed at Maitri Station",
    subtitle: "ELF/VLF Chorus and Hiss Emissions during Geomagnetic Storm Disturbances",
    type: "Research Publication",
    year: 2024,
    region: "Antarctica",
    researchArea: "Atmospheric Science",
    institution: "Indian Institute of Geomagnetism & NCPOR",
    authors: ["Dr. Pradeep Verma", "Dr. K. R. Rao"],
    journal: "Space Weather, 22(8), e2024SW003920",
    doi: "10.1029/2024SW003920",
    citations: 13,
    downloads: 230,
    dateAdded: "2024-08-30",
    pdfSize: "3.5 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Digital induction loop magnetometers and VLF receivers installed at Maitri Station (sub-auroral L-value ~4.6) continuously recorded electromagnetic chorus and hiss emissions across the 200 Hz–10 kHz band. Severe geomagnetic storm main-phases induce significant electron precipitation into the lower D-region ionosphere, producing riometer absorption events up to 3.8 dB at 30 MHz.",
    keywords: ["Geomagnetism", "Maitri Station", "VLF Waves", "Space Weather", "Ionosphere"],
    semanticMatchScore: 0.75,
    relatedDatasetIds: ["ds-006"],
    relatedMediaIds: ["med-003", "med-015"],
    relatedExpeditionIds: ["exp-002"],
    isFeatured: false
  },
  {
    id: "pub-016",
    title: "Phytoplankton Blooms and Chlorophyll-a Dynamics along the 57.5°E Transect",
    subtitle: "High-Performance Liquid Chromatography (HPLC) Pigment Analysis across Fronts",
    type: "Research Publication",
    year: 2025,
    region: "Southern Ocean",
    researchArea: "Oceanography",
    institution: "National Institute of Oceanography & NCPOR",
    authors: ["Dr. Meenakshi Sundaram", "Dr. Arvind Saxena"],
    journal: "Frontiers in Marine Science, 12, 1384021",
    doi: "10.3389/fmars.2025.1384021",
    citations: 5,
    downloads: 198,
    dateAdded: "2025-05-18",
    pdfSize: "4.7 MB",
    license: "CC BY 4.0 Open Access",
    abstract: "Chemotaxonomic evaluation using the CHEMTAX matrix revealed distinct latitudinal succession of phytoplankton taxa across Southern Ocean thermal fronts. In the Subtropical Front, prymnesiophytes and dinoflagellates prevailed, whereas diatoms (Fucoxanthin marker) accounted for over 78% of total chlorophyll-a south of the Polar Front. Photo-protective carotenoid ratios increased northward in response to high light irradiance.",
    keywords: ["Phytoplankton", "Chlorophyll", "HPLC", "Diatoms", "Southern Ocean", "Primary Production"],
    semanticMatchScore: 0.82,
    relatedDatasetIds: ["ds-007"],
    relatedMediaIds: ["med-006", "med-016"],
    relatedExpeditionIds: ["exp-004"],
    isFeatured: false
  }
];

export const EXPEDITION_REPORTS = [
  {
    id: "exp-001",
    title: "44th Indian Scientific Expedition to Antarctica (ISEA) — Preliminary Science Report",
    expeditionNumber: "44th ISEA",
    year: 2025,
    leader: "Dr. P. K. Joshi",
    vessel: "MV Vasiliy Golovnin (Chartered Ice-Class Vessel)",
    duration: "November 2024 – April 2025",
    stationsCovered: ["Bharati", "Maitri", "Prydz Bay"],
    participatingInstitutes: ["NCPOR", "Survey of India", "IIG", "IMD", "DRDO-DIPAS"],
    personnelCount: 48,
    summary: "The 44th ISEA accomplished comprehensive scientific operations across Maitri and Bharati stations, including continuous oceanographic mooring servicing in Prydz Bay, deployment of automated sea ice beacons, maintenance of environmental satellite antennas, and replacement of the wintering scientific team.",
    objectives: [
      "Servicing of deep-sea oceanographic moorings at 68°30'S, 75°E in Prydz Bay",
      "Retrieval and redeployment of ice core drilling equipment at Princess Elizabeth Land",
      "Upgradation of satellite Earth-station communication link at Bharati Station",
      "Annual replenishment of fuel, provisions, and scientific payload"
    ],
    majorOutcomes: "All 18 seasonal research projects successfully completed; 24-member wintering team safely installed at Bharati and 23-member team at Maitri; zero lost-time environmental incidents.",
    doi: "10.6084/m9.ncpor.exp.44.2025",
    type: "Expedition Report",
    region: "Antarctica",
    researchArea: "Multidisciplinary",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    dateAdded: "2025-05-10"
  },
  {
    id: "exp-002",
    title: "43rd Indian Scientific Expedition to Antarctica — Comprehensive Field Report",
    expeditionNumber: "43rd ISEA",
    year: 2024,
    leader: "Dr. Rajesh Sharma",
    vessel: "MV Vasiliy Golovnin",
    duration: "December 2023 – April 2024",
    stationsCovered: ["Bharati", "Maitri"],
    participatingInstitutes: ["NCPOR", "GSI", "WIHG", "IISc", "BSI"],
    personnelCount: 52,
    summary: "Comprehensive field operations documenting glacial mass balance measurements along the Schirmacher Oasis corridor, biological sampling of 14 periglacial lakes, atmospheric black carbon monitoring at Bharati, and installation of a broadband seismic sensor.",
    objectives: [
      "GPS resurvey of Dakshin Gangotri glacier ablation stakes",
      "Biological sampling of cryoconite holes and moss beds",
      "Atmospheric aerosol profile sounding during polar day transitions"
    ],
    majorOutcomes: "Delivered 120GB raw telemetry datasets; calibrated 15 glaciological monitoring stakes; conducted collaborative logistics with Russian and Australian Antarctic bases.",
    doi: "10.6084/m9.ncpor.exp.43.2024",
    type: "Expedition Report",
    region: "Antarctica",
    researchArea: "Glaciology",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    dateAdded: "2024-06-15"
  },
  {
    id: "exp-003",
    title: "Indian Arctic Expedition Winter Phase 2024-2025 at Himadri, Ny-Ålesund",
    expeditionNumber: "Arctic Winter 2024-25",
    year: 2025,
    leader: "Dr. Pradeep Verma",
    vessel: "Ny-Ålesund Kings Bay Support Vessel",
    duration: "November 2024 – February 2025",
    stationsCovered: ["Himadri Station", "Kongsfjorden Fjord"],
    participatingInstitutes: ["NCPOR", "IIT Roorkee", "NPL"],
    personnelCount: 12,
    summary: "Milestone winter-over observation campaign at Himadri Station, Svalbard, focusing on polar night atmospheric boundary layer chemistry, aerosol speciation, and Kongsfjorden fjord temperature-salinity structure under prolonged darkness.",
    objectives: [
      "Continuous winter air-mass sampling for persistent organic pollutants (POPs)",
      "High-frequency sonic anemometer observations of boundary layer turbulence",
      "CTD profiling across outer and inner Kongsfjorden waters"
    ],
    majorOutcomes: "Successful uninterrupted 90-day winter observations; documented sudden winter marine heatwave pulse causing 1.4°C subsurface warming in the fjord.",
    doi: "10.6084/m9.ncpor.exp.arc.2025w",
    type: "Expedition Report",
    region: "Arctic",
    researchArea: "Atmospheric Science",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    dateAdded: "2025-03-25"
  },
  {
    id: "exp-004",
    title: "13th Indian Southern Ocean Expedition (SOE) Cruise Report",
    expeditionNumber: "13th SOE",
    year: 2024,
    leader: "Dr. Arvind Saxena",
    vessel: "ORV Sagar Nidhi / SA Agulhas II",
    duration: "January 2024 – March 2024",
    stationsCovered: ["Subtropical Front", "Sub-Antarctic Front", "Polar Front", "Prydz Bay Sector"],
    participatingInstitutes: ["NCPOR", "NIO", "IIT Madras", "CMLRE"],
    personnelCount: 34,
    summary: "Cruised along the 57.5°E meridian from 40°S to 66°S, conducting 62 full-depth CTD casts, deploying 8 Argo floats, 4 surface drifters, and collecting 450 seawater samples for dissolved inorganic carbon and microplastic filtration.",
    objectives: [
      "Quantify air-sea CO2 exchange across the Southern Ocean Polar Front",
      "Deploy biogeochemical Argo profiling floats equipped with pH and nitrate sensors",
      "Determine microplastic spatial distribution along latitudinal gradients"
    ],
    majorOutcomes: "Full oceanic transect completed without weather disruption; recovered 2 acoustic transponder units; delivered baseline hydrographic dataset now cataloged in INCOIS/NCPOR archives.",
    doi: "10.6084/m9.ncpor.exp.soe.13.2024",
    type: "Expedition Report",
    region: "Southern Ocean",
    researchArea: "Oceanography",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    dateAdded: "2024-05-18"
  },
  {
    id: "exp-005",
    title: "42nd Indian Scientific Expedition to Antarctica — Glaciological & Atmospheric Operations",
    expeditionNumber: "42nd ISEA",
    year: 2023,
    leader: "Dr. Rajesh Sharma",
    vessel: "MV Vasiliy Golovnin",
    duration: "December 2022 – April 2023",
    stationsCovered: ["Maitri", "Bharati", "Wohlthat Mountains"],
    participatingInstitutes: ["NCPOR", "GSI", "IIG", "SAC-ISRO"],
    personnelCount: 46,
    summary: "Multi-disciplinary summer campaign executing deep ice core drilling operations in coastal Dronning Maud Land, geological mapping in the Wohlthat ranges, and ground-truth validation for ISRO's NISAR satellite radar mission.",
    objectives: [
      "Drill and extract 200m ice core for high-resolution paleoclimatic reconstruction",
      "Ground-truth corner reflector array deployment for satellite radar calibration",
      "Geomagnetic pulsation monitoring during solar flare events"
    ],
    majorOutcomes: "Extracted intact 200m ice core under pristine cold-chain storage; established 4 permanent geodetic GNSS monuments.",
    doi: "10.6084/m9.ncpor.exp.42.2023",
    type: "Expedition Report",
    region: "Antarctica",
    researchArea: "Glaciology",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    dateAdded: "2023-06-22"
  },
  {
    id: "exp-006",
    title: "Indian Arctic Summer Expedition 2024 — Kongsfjorden Multi-disciplinary Campaign",
    expeditionNumber: "Arctic Summer 2024",
    year: 2024,
    leader: "Dr. Linda Johansen",
    vessel: "Teisten (Kings Bay Research Launch)",
    duration: "June 2024 – August 2024",
    stationsCovered: ["Himadri Station", "Ny-Ålesund"],
    participatingInstitutes: ["NCPOR", "IISc", "BSI", "University of Delhi"],
    personnelCount: 16,
    summary: "Summer investigation of glacier meltwater runoff, sediment plume dispersion into Kongsfjorden, and phenological response of Arctic tundra vegetation to abnormal July temperatures.",
    objectives: [
      "Monitor Kronebreen glacier calving events and suspended sediment discharge",
      "Collect tundra soil cores for metagenomic microbial characterization",
      "Surface water sampling for micro-pollutants and heavy metal transport"
    ],
    majorOutcomes: "Quantified 28% increase in Kronebreen meltwater influx compared to 2018 baseline; mapped flowering time shifts in Saxifraga oppositifolia.",
    doi: "10.6084/m9.ncpor.exp.arc.2024s",
    type: "Expedition Report",
    region: "Arctic",
    researchArea: "Climate Science",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    dateAdded: "2024-09-30"
  },
  {
    id: "exp-007",
    title: "12th Southern Ocean Expedition: Biogeochemical Transect Report",
    expeditionNumber: "12th SOE",
    year: 2023,
    leader: "Dr. Meenakshi Sundaram",
    vessel: "ORV Sagar Kanya",
    duration: "February 2023 – April 2023",
    stationsCovered: ["Sub-Antarctic Zone", "Polar Frontal Zone"],
    participatingInstitutes: ["NCPOR", "NIO", "IIT Kharagpur"],
    personnelCount: 30,
    summary: "Investigation of trace metal micronutrient (Fe, Zn, Mn) availability in high-nutrient low-chlorophyll (HNLC) sectors of the Indian Southern Ocean.",
    objectives: [
      "Trace metal-clean Rosette sampling down to 4000 m",
      "Deck incubation experiments assessing iron fertilization on phytoplankton growth",
      "Sediment trap recovery at 50°S"
    ],
    majorOutcomes: "Identified deep hydrothermal iron source near the Southwest Indian Ridge affecting surface productivity; collected 320 trace-metal verified samples.",
    doi: "10.6084/m9.ncpor.exp.soe.12.2023",
    type: "Expedition Report",
    region: "Southern Ocean",
    researchArea: "Oceanography",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    dateAdded: "2023-06-10"
  },
  {
    id: "exp-008",
    title: "Special Geological Traverse Report: Wohlthat Mountain Range Expedition",
    expeditionNumber: "ISEA Special Traverse",
    year: 2024,
    leader: "Dr. S. K. Roy",
    vessel: "PistenBully Snow Groomers & Skidoos from Maitri",
    duration: "January 2024 – February 2024",
    stationsCovered: ["Maitri Station", "Wohlthat Range Nunataks"],
    participatingInstitutes: ["Geological Survey of India", "NCPOR"],
    personnelCount: 14,
    summary: "A 450-km overland traverse from Maitri Station to the Wohlthat mountains to conduct structural geology, granulite facies metamorphism sampling, and paleomagnetic analysis reconstructing the East Gondwana supercontinent assembly.",
    objectives: [
      "Collect orientable rock cores from Proterozoic granulite complexes",
      "Ground gravity and magnetic profiling across concealed subglacial faults",
      "Test emergency high-latitude satellite communication backup systems"
    ],
    majorOutcomes: "Acquired 350 kg oriented geological specimens; mapped 8 previously unrecorded pegmatite dyke occurrences; zero vehicular breakdowns.",
    doi: "10.6084/m9.ncpor.exp.traverse.2024",
    type: "Expedition Report",
    region: "Antarctica",
    researchArea: "Geology",
    institution: "Geological Survey of India & NCPOR",
    dateAdded: "2024-04-12"
  }
];

export const SCIENTIFIC_DATASETS = [
  {
    id: "ds-001",
    datasetCode: "POLAR-ANT-2025-001",
    title: "Antarctic Sea Ice Observation Dataset",
    subtitle: "High-Resolution Daily Concentration, Extent and Ice-Type Classification (Prydz Bay Sector)",
    region: "Antarctica",
    dataType: "Satellite Observation & In-situ Telemetry",
    year: 2025,
    size: "2.4 GB",
    format: "CSV / GeoTIFF / NetCDF-4",
    status: "Verified",
    accessLevel: "Open Access",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    temporalCoverage: "2024-01-01 to 2025-06-30 (Daily)",
    spatialCoverage: "65°S - 70°S, 70°E - 80°E (Prydz Bay)",
    sensors: ["AMSR-2 Microwave Radiometer", "Sentinel-1 SAR", "Bharati Coastal AWS"],
    parameters: ["Sea Ice Concentration (%)", "Ice Surface Temperature (°C)", "Freeboard Thickness (m)", "Snow Depth (cm)", "Quality Flag"],
    description: "Multi-year calibrated sea ice concentration and physical state records combining spaceborne passive microwave data (89 GHz channel) with coastal automatic weather station telemetry and ice-tethered profiler validation. Standardized according to WMO Sea Ice Nomenclature.",
    sampleTableData: [
      { timestamp: "2025-03-01 00:00:00", lat: "-68.500", lon: "75.200", concentration: 84.5, thickness: 1.42, surfTemp: -12.4, iceType: "First-Year Pack Ice", flag: "PASS_VERIFIED" },
      { timestamp: "2025-03-02 00:00:00", lat: "-68.520", lon: "75.250", concentration: 82.1, thickness: 1.38, surfTemp: -11.8, iceType: "First-Year Pack Ice", flag: "PASS_VERIFIED" },
      { timestamp: "2025-03-03 00:00:00", lat: "-68.540", lon: "75.310", concentration: 79.4, thickness: 1.35, surfTemp: -10.2, iceType: "Marginal Ice Zone", flag: "PASS_VERIFIED" },
      { timestamp: "2025-03-04 00:00:00", lat: "-68.560", lon: "75.380", concentration: 86.8, thickness: 1.48, surfTemp: -13.6, iceType: "Fast Ice Fringe", flag: "PASS_VERIFIED" },
      { timestamp: "2025-03-05 00:00:00", lat: "-68.580", lon: "75.450", concentration: 88.2, thickness: 1.51, surfTemp: -14.2, iceType: "Fast Ice Fringe", flag: "PASS_VERIFIED" },
      { timestamp: "2025-03-06 00:00:00", lat: "-68.600", lon: "75.520", concentration: 91.0, thickness: 1.59, surfTemp: -15.1, iceType: "Heavy Multi-Year Ice", flag: "PASS_VERIFIED" },
      { timestamp: "2025-03-07 00:00:00", lat: "-68.620", lon: "75.600", concentration: 89.7, thickness: 1.54, surfTemp: -14.8, iceType: "Heavy Multi-Year Ice", flag: "PASS_VERIFIED" }
    ],
    doi: "10.21421/ncpor.dataset.ant.2025.001",
    citation: "Rao, A., Menon, K., & Sharma, R. (2025). Antarctic Sea Ice Observation Dataset (POLAR-ANT-2025-001) [Data set]. National Centre for Polar and Ocean Research. https://doi.org/10.21421/ncpor.dataset.ant.2025.001"
  },
  {
    id: "ds-002",
    datasetCode: "POLAR-SO-2024-004",
    title: "Southern Ocean 57.5°E CTD Oceanographic Profiling Dataset",
    subtitle: "Full-Depth Hydrographic Casts: Temperature, Salinity, Dissolved Oxygen and Chlorophyll",
    region: "Southern Ocean",
    dataType: "Shipboard CTD Rosette",
    year: 2024,
    size: "850 MB",
    format: "CSV / NetCDF-4",
    status: "Verified",
    accessLevel: "Open Access",
    institution: "National Centre for Polar and Ocean Research & NIO",
    temporalCoverage: "2024-01-15 to 2024-02-28",
    spatialCoverage: "40°S - 66°S along 57.5°E Transect",
    sensors: ["Seabird SBE 911plus CTD", "SBE 43 Dissolved Oxygen", "Wetlabs ECO Fluorometer"],
    parameters: ["Pressure (dbar)", "In-situ Temp (°C)", "Practical Salinity (PSU)", "Dissolved Oxygen (μmol/kg)", "Chlorophyll-a (mg/m³)"],
    description: "Quality-controlled vertical casts collected at 62 hydrographic stations from 40°S across the Sub-Antarctic Front and Polar Front down to 66°S. Binned to 1 dbar pressure increments according to GO-SHIP international protocols.",
    sampleTableData: [
      { timestamp: "2024-01-22 04:15:00", lat: "-52.000", lon: "57.500", depth: 5, inSituTemp: 3.82, salinity: 33.89, dissolvedO2: 312.4, chla: 0.88, flag: "WOCE_FLAG_2" },
      { timestamp: "2024-01-22 04:18:00", lat: "-52.000", lon: "57.500", depth: 50, inSituTemp: 3.41, salinity: 33.92, dissolvedO2: 318.9, chla: 1.42, flag: "WOCE_FLAG_2" },
      { timestamp: "2024-01-22 04:22:00", lat: "-52.000", lon: "57.500", depth: 100, inSituTemp: 1.85, salinity: 34.05, dissolvedO2: 295.1, chla: 0.35, flag: "WOCE_FLAG_2" },
      { timestamp: "2024-01-22 04:28:00", lat: "-52.000", lon: "57.500", depth: 250, inSituTemp: 2.15, salinity: 34.38, dissolvedO2: 242.0, chla: 0.04, flag: "WOCE_FLAG_2" },
      { timestamp: "2024-01-22 04:36:00", lat: "-52.000", lon: "57.500", depth: 500, inSituTemp: 2.28, salinity: 34.62, dissolvedO2: 218.4, chla: 0.01, flag: "WOCE_FLAG_2" },
      { timestamp: "2024-01-22 04:50:00", lat: "-52.000", lon: "57.500", depth: 1000, inSituTemp: 1.94, salinity: 34.71, dissolvedO2: 210.8, chla: 0.00, flag: "WOCE_FLAG_2" }
    ],
    doi: "10.21421/ncpor.dataset.so.2024.004",
    citation: "Saxena, A., & Sundaram, M. (2024). Southern Ocean 57.5°E CTD Oceanographic Profiling Dataset [Data set]. NCPOR. https://doi.org/10.21421/ncpor.dataset.so.2024.004"
  },
  {
    id: "ds-003",
    datasetCode: "POLAR-SCH-2024-009",
    title: "Schirmacher Oasis Glacial Ablation and GPS Velocity Time-Series",
    subtitle: "Dakshin Gangotri Snout Movement and Surface Velocity Vectors (2014–2024)",
    region: "Antarctica",
    dataType: "Geodetic GNSS / In-situ Stakes",
    year: 2024,
    size: "420 MB",
    format: "CSV / Shapefile",
    status: "Verified",
    accessLevel: "Open Access",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    temporalCoverage: "2014-01-01 to 2024-04-30",
    spatialCoverage: "70°44'S - 70°48'S, 11°35'E - 11°55'E",
    sensors: ["Leica Viva GS15 GNSS Receivers", "Cryospheric Bamboo Stakes"],
    parameters: ["Easting (m)", "Northing (m)", "Elevation (m)", "Annual Velocity (m/yr)", "Annual Ablation (cm)", "Measurement Uncertainty (±mm)"],
    description: "Ten-year geodetic monitoring time-series tracking 18 ablation stakes planted along the longitudinal centerline of the Dakshin Gangotri glacier and peripheral ice shelf margin in Schirmacher Oasis.",
    sampleTableData: [
      { stakeId: "DG-STK-01", northing: "2145890.2", easting: "489210.4", elevation: "142.5", annualVelocity: 2.14, annualAblation: -42.8, uncertainty: "±4 mm", status: "VERIFIED" },
      { stakeId: "DG-STK-02", northing: "2145710.8", easting: "489350.1", elevation: "158.2", annualVelocity: 2.08, annualAblation: -38.5, uncertainty: "±4 mm", status: "VERIFIED" },
      { stakeId: "DG-STK-03", northing: "2145520.1", easting: "489480.9", elevation: "174.9", annualVelocity: 1.95, annualAblation: -34.1, uncertainty: "±3 mm", status: "VERIFIED" },
      { stakeId: "DG-STK-04", northing: "2145310.4", easting: "489620.0", elevation: "192.4", annualVelocity: 1.82, annualAblation: -29.6, uncertainty: "±3 mm", status: "VERIFIED" },
      { stakeId: "DG-STK-05", northing: "2145100.9", easting: "489750.3", elevation: "210.8", annualVelocity: 1.70, annualAblation: -22.3, uncertainty: "±4 mm", status: "VERIFIED" }
    ],
    doi: "10.21421/ncpor.dataset.sch.2024.009",
    citation: "Sharma, R., & Deshmukh, N. (2024). Schirmacher Oasis Glacial Ablation and GPS Velocity Time-Series [Data set]. NCPOR. https://doi.org/10.21421/ncpor.dataset.sch.2024.009"
  },
  {
    id: "ds-004",
    datasetCode: "POLAR-ARC-2025-012",
    title: "Kongsfjorden High-Latitude Meteorological & Ozonesonde Telemetry",
    subtitle: "Vertical Atmospheric Profiles from Himadri Station, Ny-Ålesund, Svalbard",
    region: "Arctic",
    dataType: "Atmospheric Sounding",
    year: 2025,
    size: "610 MB",
    format: "CSV / NetCDF-4",
    status: "Verified",
    accessLevel: "Open Access",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    temporalCoverage: "2024-06-01 to 2025-03-31",
    spatialCoverage: "78°55'N, 11°56'E (Himadri Station Ground Pad)",
    sensors: ["Vaisala RS41-SGP Radiosondes", "ECC Ozonesonde", "Campbell Sonic Tower"],
    parameters: ["Pressure (hPa)", "Altitude (m)", "Air Temperature (°C)", "Relative Humidity (%)", "Wind Speed (m/s)", "Ozone Partial Pressure (mPa)"],
    description: "Synchronized meteorological radiosonde soundings and electrochemical concentration cell (ECC) ozone profiles launched from the Himadri Station research pad during Arctic summer and polar night winter phases.",
    sampleTableData: [
      { timestamp: "2025-02-14 11:00:00", altitude: 50, pressure: 1012.4, temp: -18.4, rh: 78, windSpd: 4.2, ozoneP: 3.2, flag: "SOUNDING_OK" },
      { timestamp: "2025-02-14 11:02:30", altitude: 500, pressure: 955.1, temp: -12.1, rh: 65, windSpd: 7.8, ozoneP: 3.4, flag: "SOUNDING_OK" },
      { timestamp: "2025-02-14 11:05:00", altitude: 1000, pressure: 898.3, temp: -14.6, rh: 58, windSpd: 9.1, ozoneP: 3.6, flag: "SOUNDING_OK" },
      { timestamp: "2025-02-14 11:12:00", altitude: 5000, pressure: 520.4, temp: -44.2, rh: 42, windSpd: 14.5, ozoneP: 4.8, flag: "SOUNDING_OK" },
      { timestamp: "2025-02-14 11:24:00", altitude: 15000, pressure: 121.0, temp: -68.9, rh: 12, windSpd: 22.1, ozoneP: 14.2, flag: "SOUNDING_OK" }
    ],
    doi: "10.21421/ncpor.dataset.arc.2025.012",
    citation: "Verma, P., & Rao, A. (2025). Kongsfjorden Meteorological & Ozonesonde Telemetry [Data set]. NCPOR. https://doi.org/10.21421/ncpor.dataset.arc.2025.012"
  },
  {
    id: "ds-005",
    datasetCode: "POLAR-ANT-2024-008",
    title: "Prydz Bay Deep-Moored Ocean Current and Thermohaline Time-Series",
    subtitle: "Continuous Mooring Array Observations at the Amery Ice Shelf Outflow Margin",
    region: "Antarctica",
    dataType: "Moored Oceanographic Sensor Array",
    year: 2024,
    size: "1.1 GB",
    format: "CSV / NetCDF-4",
    status: "Verified",
    accessLevel: "Open Access",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    temporalCoverage: "2023-02-01 to 2024-02-15",
    spatialCoverage: "68°30.2'S, 75°01.4'E (Depth 200m - 650m)",
    sensors: ["Teledyne RDI 75 kHz Workhorse Long Ranger ADCP", "SBE 37-SM MicroCATs"],
    parameters: ["Bin Depth (m)", "Current Speed (cm/s)", "Current Direction (°)", "Potential Temperature (°C)", "Salinity (PSU)"],
    description: "One-year unbroken time-series of deep-water ocean currents, temperature, and salinity deployed offshore from Bharati Station at the eastern perimeter of Prydz Bay.",
    sampleTableData: [
      { timestamp: "2024-01-01 12:00:00", depth: 220, speed: 14.2, direction: 245, temp: -1.82, salinity: 34.42, flag: "QC_GOOD" },
      { timestamp: "2024-01-01 12:00:00", depth: 350, speed: 11.8, direction: 238, temp: -1.74, salinity: 34.48, flag: "QC_GOOD" },
      { timestamp: "2024-01-01 12:00:00", depth: 480, speed: 9.4, direction: 220, temp: -1.61, salinity: 34.56, flag: "QC_GOOD" },
      { timestamp: "2024-01-01 12:00:00", depth: 620, speed: 8.1, direction: 215, temp: -0.84, salinity: 34.68, flag: "QC_GOOD" }
    ],
    doi: "10.21421/ncpor.dataset.ant.2024.008",
    citation: "Menon, K., & Saxena, A. (2024). Prydz Bay Deep-Moored Ocean Current Dataset [Data set]. NCPOR. https://doi.org/10.21421/ncpor.dataset.ant.2024.008"
  },
  {
    id: "ds-006",
    datasetCode: "POLAR-BIO-2024-015",
    title: "Schirmacher Oasis Freshwater Lakes Hydrochemistry and Microbiome Profiling",
    subtitle: "Multi-parameter Water Quality and 16S Amplicon OTU Counts across 14 Glacial Lakes",
    region: "Antarctica",
    dataType: "Limnological & Metagenomic Assay",
    year: 2024,
    size: "350 MB",
    format: "CSV / FASTA / BIOM",
    status: "Verified",
    accessLevel: "Open Access",
    institution: "Botanical Survey of India, CCMB & NCPOR",
    temporalCoverage: "2023-12-10 to 2024-02-20",
    spatialCoverage: "Schirmacher Oasis Lakes (Lakes Priyadarshini, Zub, Kamat, Trishul)",
    sensors: ["YSI ProDSS Multi-Parameter Sonde", "Illumina MiSeq System"],
    parameters: ["Lake Name", "Sampling Depth (m)", "Water Temp (°C)", "pH", "Dissolved Oxygen (mg/L)", "Conductivity (μS/cm)", "Dominant Phylum"],
    description: "Comprehensive limnological physical-chemical baseline and bacterial taxonomic abundances for 14 freshwater bodies in Queen Maud Land.",
    sampleTableData: [
      { lake: "Lake Priyadarshini", depth: 1.0, temp: 4.2, ph: 7.82, do: 11.4, cond: 48.2, dominantPhylum: "Cyanobacteria (42%)", flag: "LAB_CERTIFIED" },
      { lake: "Lake Priyadarshini", depth: 12.0, temp: 2.1, ph: 7.45, do: 9.8, cond: 52.1, dominantPhylum: "Pseudomonadota (38%)", flag: "LAB_CERTIFIED" },
      { lake: "Lake Zub", depth: 2.0, temp: 3.8, ph: 7.91, do: 10.9, cond: 64.5, dominantPhylum: "Bacteroidota (31%)", flag: "LAB_CERTIFIED" },
      { lake: "Lake Kamat", depth: 1.5, temp: 4.0, ph: 7.60, do: 11.1, cond: 39.8, dominantPhylum: "Actinomycetota (29%)", flag: "LAB_CERTIFIED" }
    ],
    doi: "10.21421/ncpor.dataset.bio.2024.015",
    citation: "Gadgil, S., & Murthy, K. S. (2024). Schirmacher Oasis Freshwater Lakes Hydrochemistry and Microbiome Dataset [Data set]. NCPOR. https://doi.org/10.21421/ncpor.dataset.bio.2024.015"
  },
  {
    id: "ds-007",
    datasetCode: "POLAR-SO-2025-002",
    title: "Southern Ocean Surface pCO2 and Carbon Sinks Transect",
    subtitle: "Underway Infrared Gas Analysis and Marine Carbonate Chemistry (40°S to 65°S)",
    region: "Southern Ocean",
    dataType: "Underway Shipboard Telemetry",
    year: 2025,
    size: "520 MB",
    format: "CSV / NetCDF-4",
    status: "Verified",
    accessLevel: "Open Access",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    temporalCoverage: "2024-12-20 to 2025-02-15",
    spatialCoverage: "57.5°E Meridional Transect",
    sensors: ["General Oceanics 8050 Underway pCO2 System", "LICOR LI-7000 Analyzer"],
    parameters: ["Equilibrator Temp (°C)", "Sea Surface Salinity", "fCO2 water (μatm)", "fCO2 air (μatm)", "Air-Sea CO2 Flux (mmol/m²/day)"],
    description: "High-precision underway partial pressure of carbon dioxide (pCO2) measurements collected along the repeat 57.5°E cruise track. Includes atmospheric xCO2 calibrated against WMO trace gas standards.",
    sampleTableData: [
      { timestamp: "2025-01-10 06:00:00", lat: "-45.20", lon: "57.50", sst: 9.8, sss: 34.12, fco2Water: 362.4, fco2Air: 418.2, flux: -14.2, flag: "SURFACE_VALID" },
      { timestamp: "2025-01-10 12:00:00", lat: "-48.50", lon: "57.50", sst: 6.4, sss: 33.95, fco2Water: 348.1, fco2Air: 418.0, flux: -18.9, flag: "SURFACE_VALID" },
      { timestamp: "2025-01-10 18:00:00", lat: "-52.10", lon: "57.50", sst: 3.2, sss: 33.88, fco2Water: 339.8, fco2Air: 417.8, flux: -22.4, flag: "SURFACE_VALID" },
      { timestamp: "2025-01-11 00:00:00", lat: "-56.40", lon: "57.50", sst: 1.1, sss: 34.02, fco2Water: 382.5, fco2Air: 417.5, flux: -9.8, flag: "SURFACE_VALID" },
      { timestamp: "2025-01-11 06:00:00", lat: "-62.00", lon: "57.50", sst: -0.8, sss: 34.20, fco2Water: 424.1, fco2Air: 417.3, flux: +2.1, flag: "SURFACE_VALID" }
    ],
    doi: "10.21421/ncpor.dataset.so.2025.002",
    citation: "Saxena, A., & Rao, A. (2025). Southern Ocean Surface pCO2 and Carbon Sinks Transect [Data set]. NCPOR. https://doi.org/10.21421/ncpor.dataset.so.2025.002"
  },
  {
    id: "ds-008",
    datasetCode: "POLAR-ATM-2025-007",
    title: "Larsemann Hills Aerosol Optical Depth and Black Carbon Baseline",
    subtitle: "Aerosol Robotic Network (AERONET) Standard Sunphotometer & Aethalometer Records",
    region: "Antarctica",
    dataType: "Continuous Ground-based Telemetry",
    year: 2025,
    size: "380 MB",
    format: "CSV / NASA Ames Format",
    status: "Verified",
    accessLevel: "Open Access",
    institution: "National Physical Laboratory & NCPOR",
    temporalCoverage: "2024-01-01 to 2025-05-31",
    spatialCoverage: "69°24'S, 76°11'E (Bharati Station Atmospheric Terrace)",
    sensors: ["CIMEL CE318 Sunphotometer", "Magee Scientific AE33 Aethalometer"],
    parameters: ["AOD 500nm", "AOD 870nm", "Angstrom Exponent (440-870nm)", "Equivalent Black Carbon (ng/m³)", "Single Scattering Albedo"],
    description: "Cloud-screened Level 2.0 aerosol optical depth and multi-wavelength black carbon absorption coefficients measured at India's Bharati Station in Larsemann Hills.",
    sampleTableData: [
      { timestamp: "2025-01-05 08:30:00", aod500: 0.021, aod870: 0.012, angstrom: 1.45, ebc: 8.4, ssa: 0.98, flag: "AERONET_L2" },
      { timestamp: "2025-01-05 12:00:00", aod500: 0.023, aod870: 0.013, angstrom: 1.48, ebc: 9.1, ssa: 0.98, flag: "AERONET_L2" },
      { timestamp: "2025-01-05 16:30:00", aod500: 0.019, aod870: 0.011, angstrom: 1.42, ebc: 7.8, ssa: 0.99, flag: "AERONET_L2" },
      { timestamp: "2025-01-06 09:00:00", aod500: 0.025, aod870: 0.014, angstrom: 1.51, ebc: 11.2, ssa: 0.97, flag: "AERONET_L2" }
    ],
    doi: "10.21421/ncpor.dataset.atm.2025.007",
    citation: "Verma, P., & Rao, A. (2025). Larsemann Hills Aerosol Optical Depth and Black Carbon Baseline [Data set]. NCPOR. https://doi.org/10.21421/ncpor.dataset.atm.2025.007"
  }
];

export const MEDIA_GALLERY = [
  {
    id: "med-001",
    title: "Bharati Research Station Panoramic View",
    category: "Photos",
    subCategory: "Research Station",
    location: "Larsemann Hills, Princess Elizabeth Land, Antarctica",
    year: 2025,
    expedition: "44th ISEA",
    description: "Aerial view of Bharati Research Station situated on rocky Promontory-3 in Larsemann Hills, featuring modular container construction designed to minimize environmental footprint.",
    photographer: "NCPOR Expedition Media Cell / Dr. P. K. Joshi",
    rights: "Ministry of Earth Sciences / Open Scientific Outreach",
    imageUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1200&q=80",
    tags: ["Bharati Station", "Antarctica", "Research Station", "Larsemann Hills", "Infrastructure"]
  },
  {
    id: "med-002",
    title: "Oceanographic CTD Rosette Deployment in Southern Ocean",
    category: "Photos",
    subCategory: "Research",
    location: "Southern Ocean Polar Front (52°S, 57.5°E)",
    year: 2024,
    expedition: "13th Southern Ocean Expedition",
    description: "Marine scientists aboard ORV Sagar Nidhi maneuvering a 24-bottle Seabird CTD Rosette array into turbulent sub-antarctic waters to collect deep hydrochemical samples.",
    photographer: "Dr. Arvind Saxena / NIO-NCPOR Cruise Team",
    rights: "NCPOR Open Scientific Repository",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tags: ["CTD Rosette", "Oceanography", "Southern Ocean", "Marine Science", "Fieldwork"]
  },
  {
    id: "med-003",
    title: "Maitri Station and Lake Priyadarshini during Austral Summer",
    category: "Photos",
    subCategory: "Research Station",
    location: "Schirmacher Oasis, Queen Maud Land, Antarctica",
    year: 2024,
    expedition: "43rd ISEA",
    description: "View of Maitri Station main living module with the pristine blue waters of Lake Priyadarshini in the foreground and the continental polar ice cap rising in the background.",
    photographer: "Dr. Rajesh Sharma / 43rd ISEA",
    rights: "NCPOR / MoES",
    imageUrl: "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?auto=format&fit=crop&w=1200&q=80",
    tags: ["Maitri", "Lake Priyadarshini", "Schirmacher Oasis", "Antarctica", "Station"]
  },
  {
    id: "med-004",
    title: "Pack-Ice and Calving Icebergs off Prydz Bay",
    category: "Photos",
    subCategory: "Expedition",
    location: "Prydz Bay Coastline, East Antarctica",
    year: 2025,
    expedition: "44th ISEA",
    description: "Vast expanse of consolidated first-year pack ice and tabular icebergs calved from the Amery Ice Shelf drifting along the East Antarctic coastline.",
    photographer: "Dr. Karthik Menon / NCPOR",
    rights: "NCPOR Public Access Media",
    imageUrl: "https://images.unsplash.com/photo-1548263594-a71ea65a8598?auto=format&fit=crop&w=1200&q=80",
    tags: ["Sea Ice", "Iceberg", "Prydz Bay", "Antarctic Ocean", "Glaciers"]
  },
  {
    id: "med-005",
    title: "Sub-Antarctic Wildlife: Emperor Penguin Colony on Fast Ice",
    category: "Photos",
    subCategory: "Educational",
    location: "Princess Astrid Coast Ice Shelf, Antarctica",
    year: 2024,
    expedition: "43rd ISEA",
    description: "Emperor penguins (Aptenodytes forsteri) congregating on sea ice near the ice shelf edge during seasonal molting and breeding cycles.",
    photographer: "Wildlife Survey Team / 43rd ISEA",
    rights: "Ministry of Earth Sciences Archive",
    imageUrl: "https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=1200&q=80",
    tags: ["Penguins", "Wildlife", "Biodiversity", "Fauna", "Antarctica"]
  },
  {
    id: "med-006",
    title: "Ice-Class Research Vessel Maneuvering through Pack Ice",
    category: "Photos",
    subCategory: "Expedition",
    location: "Southern Ocean Marginal Ice Zone",
    year: 2024,
    expedition: "13th SOE",
    description: "Chartered polar ice-class vessel cutting through 1.2-meter thick seasonal sea ice to deliver scientific payloads and fuel to Indian stations.",
    photographer: "ORV Expedition Logistics Team",
    rights: "NCPOR Media Repository",
    imageUrl: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=1200&q=80",
    tags: ["Research Vessel", "Icebreaker", "Logistics", "Polar Navigation"]
  },
  {
    id: "med-007",
    title: "Autonomous Sea Ice Tethered Profiler Deployment",
    category: "Videos",
    subCategory: "Research",
    location: "Prydz Bay, Antarctica",
    year: 2025,
    expedition: "44th ISEA",
    duration: "4 min 18 sec",
    description: "Field video footage documenting the drilling of a 20-cm auger hole through 1.8-meter thick sea ice and the precision installation of an autonomous ocean profiler.",
    photographer: "Dr. Ananya Rao & Marine Operations Group",
    rights: "NCPOR Open Scientific Outreach",
    imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    tags: ["Video", "Sea Ice", "Autonomous Sensor", "Deployment", "Fieldwork"],
    videoUrl: "mock-polar-stream-001"
  },
  {
    id: "med-008",
    title: "Deep Ice Core Extraction at Central Dronning Maud Land",
    category: "Photos",
    subCategory: "Research",
    location: "Dronning Maud Land Ice Dome, Antarctica",
    year: 2023,
    expedition: "42nd ISEA",
    description: "Glaciologists in insulated clean-suits inspecting an intact 1-meter ice core barrel segment retrieved from a depth of 185 meters for paleoclimate gas bubble analysis.",
    photographer: "Dr. Rajesh Sharma / Glaciology Division",
    rights: "NCPOR Glaciological Archive",
    imageUrl: "https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?auto=format&fit=crop&w=1200&q=80",
    tags: ["Ice Core", "Paleoclimate", "Glaciology", "Drilling", "Clean Room"]
  },
  {
    id: "med-009",
    title: "Himadri Station during Polar Night, Svalbard",
    category: "Photos",
    subCategory: "Research Station",
    location: "Ny-Ålesund, Spitsbergen, Arctic",
    year: 2025,
    expedition: "Arctic Winter 2024-25",
    description: "India's Himadri Station illuminated against the Arctic polar night sky with green Aurora Borealis shimmering over the Kongsfjorden fjord mountains.",
    photographer: "Dr. Pradeep Verma / Arctic Team",
    rights: "NCPOR Arctic Program",
    imageUrl: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
    tags: ["Himadri", "Arctic", "Ny-Ålesund", "Aurora Borealis", "Polar Night"]
  },
  {
    id: "med-010",
    title: "Atmospheric Boundary Layer Tethered Balloon Launch",
    category: "Videos",
    subCategory: "Research",
    location: "Kongsfjorden Glacier Margin, Ny-Ålesund",
    year: 2024,
    expedition: "Arctic Summer 2024",
    duration: "3 min 45 sec",
    description: "Launch video showing aerodynamic tethered balloon ascending through temperature inversion layers to record turbulent eddy fluxes and aerosol optical properties.",
    photographer: "Atmospheric Field Group / Himadri",
    rights: "NCPOR Open Scientific Outreach",
    imageUrl: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Video", "Balloon Sounding", "Atmospheric Science", "Arctic", "Aerosols"],
    videoUrl: "mock-polar-stream-002"
  },
  {
    id: "med-011",
    title: "Cryophilic Lichen Colonies (Xanthoria elegans) on Bedrock",
    category: "Photos",
    subCategory: "Educational",
    location: "Schirmacher Oasis Exposed Nunataks",
    year: 2024,
    expedition: "43rd ISEA",
    description: "Macro-photograph of bright orange sunburst lichen (Xanthoria elegans) flourishing on gneiss rocks, illustrating remarkable adaptation to freezing desiccating conditions.",
    photographer: "Dr. Sulochana Gadgil / Botanical Survey of India",
    rights: "Botanical Survey of India / NCPOR",
    imageUrl: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1200&q=80",
    tags: ["Lichen", "Botany", "Schirmacher Oasis", "Flora", "Ecology"]
  },
  {
    id: "med-012",
    title: "Sediment Core Extraction from Lake Priyadarshini",
    category: "Photos",
    subCategory: "Research",
    location: "Lake Priyadarshini, Schirmacher Oasis",
    year: 2024,
    expedition: "43rd ISEA",
    description: "Microbiologists utilizing an Uwitec gravity corer on lake surface ice to sample anaerobic benthic sediment containing extremophile bacterial communities.",
    photographer: "Limnology Field Team",
    rights: "CCMB & NCPOR",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    tags: ["Lake Priyadarshini", "Sediment Core", "Microbiology", "Limnology"]
  },
  {
    id: "med-013",
    title: "Solar CIMEL Sunphotometer Operations at Bharati",
    category: "Photos",
    subCategory: "Research",
    location: "Bharati Station Scientific Observation Roof",
    year: 2025,
    expedition: "44th ISEA",
    description: "Automated sunphotometer tracking the low polar sun over Prydz Bay to record aerosol optical thickness and validate planetary radiation budgets.",
    photographer: "NPL Atmospheric Radiation Lab",
    rights: "NPL / NCPOR",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    tags: ["Sunphotometer", "Aerosols", "Solar Radiation", "Bharati", "Atmosphere"]
  },
  {
    id: "med-014",
    title: "Overland Snowcat Convoy Traverses East Antarctic Ice Plateau",
    category: "Videos",
    subCategory: "Expedition",
    location: "Princess Elizabeth Land Inland Ice Shelf",
    year: 2024,
    expedition: "ISEA Special Traverse",
    duration: "5 min 20 sec",
    description: "Expedition convoy of PistenBully heavy tracked vehicles hauling fuel sledges and living cabooses across wind-sculpted sastrugi snow formations.",
    photographer: "Traverse Operations Team",
    rights: "MoES Scientific Expedition Archive",
    imageUrl: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1200&q=80",
    tags: ["Video", "Traverse", "Snowcat", "Expedition", "Sastrugi", "Antarctica"],
    videoUrl: "mock-polar-stream-003"
  },
  {
    id: "med-015",
    title: "Southern Lights (Aurora Australis) over Maitri Station",
    category: "Photos",
    subCategory: "Photos",
    location: "Schirmacher Oasis, Antarctica",
    year: 2024,
    expedition: "43rd ISEA Winter Team",
    description: "Curtains of violet and emerald Aurora Australis dancing above Maitri Station during a G3-class geomagnetic storm triggered by coronal mass ejection.",
    photographer: "Wintering Radio Officer / Maitri Base",
    rights: "NCPOR Public Access Outreach",
    imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80",
    tags: ["Aurora Australis", "Southern Lights", "Geomagnetism", "Maitri", "Night Sky"]
  },
  {
    id: "med-016",
    title: "Marine Microscopic Diatom and Radiolarian Assemblage",
    category: "Photos",
    subCategory: "Educational",
    location: "Southern Ocean Polar Front Water Samples",
    year: 2025,
    expedition: "13th Southern Ocean Expedition",
    description: "Scanning electron micrograph (SEM) showing exquisite silica frustules of polar diatoms (Fragilariopsis kerguelensis) responsible for oceanic carbon sequestration.",
    photographer: "Dr. Meenakshi Sundaram / NIO SEM Laboratory",
    rights: "NIO / NCPOR Scientific Outreach",
    imageUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80",
    tags: ["Diatoms", "Microscopy", "Phytoplankton", "Oceanography", "Silica"]
  }
];

export const EDUCATIONAL_RESOURCES = [
  {
    id: "edu-001",
    title: "What is Polar Science?",
    subtitle: "A Comprehensive Guide to Earth's Frozen Frontiers and Global Climate Regulation",
    category: "Polar Science Basics",
    level: "Middle School & High School",
    readTime: "6 min read",
    author: "NCPOR Polar Science Outreach Team",
    summary: "Discover why the Arctic and Antarctic are not just distant ice deserts, but the central engine regulating Earth's oceans, atmospheric jet streams, and planetary temperatures.",
    keyTakeaways: [
      "The Cryosphere comprises all frozen water on Earth, including glaciers, ice sheets, sea ice, and permafrost.",
      "Polar ice sheets reflect up to 85% of incoming solar radiation back to space through the planetary albedo effect.",
      "Antarctica holds roughly 70% of Earth's freshwater and 90% of all planetary ice.",
      "Polar research provides critical baseline data to forecast global sea-level rise and monsoon variations."
    ],
    fullArticleContent: `
### The Cryosphere: Earth's Natural Refrigerator
Polar science encompasses the multidisciplinary investigation of Earth's high-latitude regions: the Arctic Ocean surrounded by northern continents, and the continent of Antarctica surrounded by the vast Southern Ocean.

While these regions appear remote, they function as Earth's natural thermostat. Through the **Albedo Effect**, bright white snow and ice reflect incoming sunlight back into space. When polar sea ice melts, it exposes darker ocean waters that absorb over 90% of solar heat, initiating a self-reinforcing warming cycle known as polar amplification.

### Why Do Scientists Travel to Antarctica?
Antarctica is an extraordinary natural laboratory for scientific research:
1. **Uncontaminated Atmosphere:** The pristine polar air allows atmospheric physicists to establish clean baseline records of planetary greenhouse gases, aerosols, and cosmic radiation.
2. **Ice Cores as Time Capsules:** Snow falling in the interior of Antarctica never melts; it accumulates layer upon layer, trapping atmospheric air bubbles from hundreds of thousands of years ago.
3. **Marine Ecosystems:** The nutrient-rich Southern Ocean fuels massive swarms of Antarctic krill, supporting whales, seals, and seabirds across the globe.
    `,
    glossary: [
      { term: "Cryosphere", definition: "The frozen water part of the Earth system, including sea ice, lake ice, river ice, snow cover, glaciers, ice caps, ice sheets, and frozen ground (permafrost)." },
      { term: "Albedo", definition: "The proportion of incident light or radiation that is reflected by a surface, typically expressed as a percentage or fraction from 0 to 1." },
      { term: "Polar Amplification", definition: "The phenomenon where global warming causes greater temperature increases near the poles compared to the rest of the planet." }
    ]
  },
  {
    id: "edu-002",
    title: "Why is Antarctic Sea Ice Important?",
    subtitle: "How Frozen Ocean Water Protects the Global Climate System",
    category: "Climate & Polar Regions",
    level: "High School & Undergraduate",
    readTime: "8 min read",
    author: "Dr. Ananya Rao (Senior Scientist, NCPOR)",
    summary: "Learn the crucial distinction between continental ice sheets and sea ice, and understand how the seasonal freezing of ocean water powers the global ocean conveyor belt.",
    keyTakeaways: [
      "Sea ice forms directly from freezing seawater, unlike ice sheets and glaciers that originate from compacted snowfall.",
      "When seawater freezes, salt is expelled into the surrounding water in a process called brine rejection.",
      "Cold, dense, salty water sinks to the ocean floor, forming Antarctic Bottom Water (AABW) that drives global ocean circulation.",
      "Sea ice acts as an insulating blanket, slowing heat loss from the relatively warm ocean to the sub-zero polar atmosphere."
    ],
    fullArticleContent: `
### Sea Ice vs. Glacial Ice
A common misconception is confusing Antarctic sea ice with the massive Antarctic ice sheet. The ice sheet sits on bedrock and reaches thicknesses exceeding 4,000 meters. Sea ice, by contrast, is a thin layer—typically 1 to 3 meters thick—that freezes directly on the ocean surface each winter.

### The Engine of Ocean Conveyor Belts: Brine Rejection
When ocean water reaches its freezing temperature of approximately -1.8°C (28.8°F), water molecules crystallize into pure ice. Salt is excluded from the ice crystal lattice into tiny channels of concentrated saltwater known as **brine**.

Much of this heavy brine drains downward into the deep ocean. This produces cold, extremely dense water called **Antarctic Bottom Water (AABW)**. This dense water sinks to the ocean floor and flows northward across the Atlantic, Indian, and Pacific basins, circulating oxygen, heat, and nutrients worldwide over centuries.

### Habitat for Extremophiles
Underneath the sea ice resides a hidden microscopic forest: specialized sea ice algae. In early spring, these algae bloom, providing the primary food source for Antarctic krill (*Euphausia superba*), which in turn feeds penguins, seals, and baleen whales.
    `,
    glossary: [
      { term: "Brine Rejection", definition: "The process by which salt ions are expelled from freezing seawater, creating high-salinity, extremely dense water." },
      { term: "Antarctic Bottom Water (AABW)", definition: "The densest water mass in the world oceans, formed around Antarctica, which flows along the ocean bottom globally." },
      { term: "Fast Ice", definition: "Sea ice that is 'fastened' or anchored to the coastline, ice shelves, or grounded icebergs and does not drift with ocean currents." }
    ]
  },
  {
    id: "edu-003",
    title: "How Do Scientists Study Antarctica?",
    subtitle: "From Remote Field Tents to High-Tech Earth Observation Satellites",
    category: "Antarctic Expeditions",
    level: "General Public & Students",
    readTime: "7 min read",
    author: "Indian Scientific Expedition Logistics & Outreach",
    summary: "An inside look into the logistical marvel and technological innovations that enable Indian scientists to live and conduct cutting-edge research in sub-zero polar conditions.",
    keyTakeaways: [
      "Expeditions require months of meticulous pre-departure medical screening and polar survival training at ITBP Auli.",
      "Research stations Bharati and Maitri operate as self-sustaining life support capsules with zero-waste environmental protocols.",
      "Modern polar science combines autonomous buoys, drones, satellite radar (SAR), and automated weather stations with traditional ice coring.",
      "India is a consultative party to the Antarctic Treaty, upholding principles of non-military scientific collaboration."
    ],
    fullArticleContent: `
### Living in -40°C: The Daily Reality
Conducting research in Antarctica demands extreme physical resilience and advanced engineering. At India's Bharati Station, temperatures plunge below -40°C during winter with wind speeds surpassing 150 km/h (blizzards).

The station is engineered on stilts to prevent snowdrift buildup and incorporates advanced combined heat and power (CHP) generators, reverse osmosis desalination, and biological wastewater recycling systems that release only treated water compliant with the Antarctic Treaty Madrid Protocol.

### Tools of the Modern Polar Scientist
1. **Satellite Radar Interferometry (InSAR):** Satellites like Sentinel-1 and the upcoming NASA-ISRO NISAR penetrate cloud cover and polar night darkness to measure millimeter-scale glacier movements.
2. **Ice-Tethered Autonomous Profilers:** Instruments suspended through holes drilled in sea ice that climb up and down ocean cables automatically, transmitting temperature and salinity data via Iridium satellite telemetry.
3. **Deep Ice Core Drills:** Hollow diamond-tipped electromechanical drills that retrieve pristine cylindrical cores from kilometers beneath the ice surface.
    `,
    glossary: [
      { term: "Madrid Protocol", definition: "The Protocol on Environmental Protection to the Antarctic Treaty, designating Antarctica as a natural reserve devoted to peace and science." },
      { term: "Sastrugi", definition: "Wavelike ridges formed on a snow surface by wind erosion and deposition, creating hard, uneven terrain." },
      { term: "InSAR", definition: "Interferometric Synthetic Aperture Radar, a geodetic technique using radar images to map ground movement and ice surface velocity." }
    ]
  },
  {
    id: "edu-004",
    title: "Life in Extreme Polar Environments",
    subtitle: "How Extremophiles, Lichens and Animals Thrive in Frozen Habitats",
    category: "Biodiversity",
    level: "Middle School & High School",
    readTime: "5 min read",
    author: "Botanical Survey of India & CCMB",
    summary: "Discover the astonishing survival mechanisms of polar wildlife—from natural antifreeze proteins in fish to desiccating lichens and specialized bacteria that eat rock minerals.",
    keyTakeaways: [
      "Antarctic icefish produce biological antifreeze glycoproteins that prevent ice crystals from growing in their blood.",
      "Lichens in Schirmacher Oasis can survive complete dehydration and resume photosynthesis within minutes of receiving snow meltwater.",
      "Emperor penguins huddle in rotating formations where birds on the freezing perimeter take turns moving into the 37°C warm center.",
      "Psychrophilic bacteria produce cold-active enzymes that have revolutionary applications in green detergents, food processing, and pharmaceuticals."
    ],
    fullArticleContent: `
### The Masters of Cryoprotection
Antarctica is often considered biologically barren, yet its coastal fringes and exposed rocky hills (nunataks) support unique life forms specially adapted to extreme cold, high ultraviolet radiation, and months of complete darkness.

### Biological Antifreeze
Notothenioid fish inhabiting sub-zero waters surrounding the continent synthesize specialized **Antifreeze Glycoproteins (AFGPs)**. These proteins bind directly to microscopic ice crystals that enter the fish's body, physically halting crystal growth and lowering the freezing point of body fluids below that of seawater.

### The Hardy Lichens of Schirmacher Oasis
Lichens represent a symbiotic partnership between a fungus and an algae or cyanobacteria. In Antarctic oases like Schirmacher, species such as *Xanthoria elegans* endure desiccation during winter, entering an inactive state of **anhydrobiosis**. When summer arrives and surface snow melts, they rehydrate instantly and begin photosynthesizing, producing bright orange pigments that act as natural sunscreen against intense UV rays.
    `,
    glossary: [
      { term: "Extremophile", definition: "An organism that thrives in extreme physical or geochemical conditions that would be detrimental to most life on Earth." },
      { term: "Anhydrobiosis", definition: "A state of suspended animation entered by an organism in response to extreme desiccation (drying out)." },
      { term: "AFGP", definition: "Antifreeze Glycoprotein, a class of biological proteins that prevent organismal freezing in sub-zero environments." }
    ]
  },
  {
    id: "edu-005",
    title: "India's Antarctic Odyssey: From Dakshin Gangotri to Bharati",
    subtitle: "Four Decades of Scientific Leadership under the National Centre for Polar and Ocean Research",
    category: "Antarctic Expeditions",
    level: "General Public & Students",
    readTime: "9 min read",
    author: "National Centre for Polar and Ocean Research (NCPOR)",
    summary: "Trace the inspiring historic journey of India's polar research program, initiated in 1981 by visionary Indian scientists and culminating in cutting-edge year-round stations in both polar regions.",
    keyTakeaways: [
      "India's first Antarctic expedition sailed in 1981 under the leadership of Dr. S. Z. Qasim aboard the vessel MV Polar Circle.",
      "India constructed its first winter station, Dakshin Gangotri, in a record time of 60 days in 1983-84.",
      "Maitri Station was established on solid rock in 1989 in Schirmacher Oasis and has operated continuously for over 35 years.",
      "Bharati Station, opened in 2012, is an architectural and ecological marvel facilitating deep Southern Ocean oceanography."
    ],
    fullArticleContent: `
### The Visionary Beginnings (1981)
India's polar journey began with Operation Gangotri on 6 December 1981, when a team of 21 scientists departed from Goa under the leadership of Dr. S. Z. Qasim. Landing on the Princess Astrid Coast on 9 January 1982, India signaled its commitment to peaceful scientific discovery in the polar realms.

### Building Dakshin Gangotri (1983)
During the 3rd expedition in 1983-84, Indian engineers and military sappers achieved the historic feat of constructing India's first permanent base, **Dakshin Gangotri**, directly on the floating ice shelf in just 60 days. It sheltered India's first historic wintering team.

### Transition to Maitri (1989) and Bharati (2012)
As successive snow layers submerged Dakshin Gangotri, India established **Maitri** in 1988-89 on ice-free ground in Schirmacher Oasis. In 2012, India added **Bharati** in Larsemann Hills, featuring state-of-the-art labs and satellite downlink antennas communicating directly with ISRO ground stations in Hyderabad.
    `,
    glossary: [
      { term: "NCPOR", definition: "National Centre for Polar and Ocean Research, an autonomous R&D institution under the Ministry of Earth Sciences based in Vasco da Gama, Goa." },
      { term: "Consultative Party", definition: "A voting member state of the Antarctic Treaty with proven substantial scientific research activity in Antarctica." }
    ]
  },
  {
    id: "edu-006",
    title: "The Kongsfjorden Living Laboratory: Arctic Research at Himadri",
    subtitle: "Why India Monitors Arctic Climate Change in Svalbard, Norway",
    category: "Ocean Science",
    level: "High School & Undergraduate",
    readTime: "7 min read",
    author: "NCPOR Arctic Research Division",
    summary: "Understand the vital scientific connection between warming Arctic waters, retreating Svalbard glaciers, and the variability of the Indian Summer Monsoon.",
    keyTakeaways: [
      "India established Himadri Station at Ny-Ålesund, Svalbard (78°55'N) on July 1, 2008.",
      "The Arctic is warming nearly four times faster than the global average, a phenomenon known as Arctic Amplification.",
      "Kongsfjorden acts as an open natural test-tube where warm Atlantic water mixes with freezing Arctic glacier meltwater.",
      "Atmospheric teleconnections link Arctic sea ice loss to disruptions in the mid-latitude jet stream and Indian monsoon rainfall patterns."
    ],
    fullArticleContent: `
### India in the High Arctic
While Antarctica is a continent surrounded by ocean, the Arctic is an ocean surrounded by continents. In 2008, India inaugurated its permanent Arctic research base, **Himadri**, in the international scientific enclave of Ny-Ålesund in the Norwegian archipelago of Svalbard.

### The Monsoon-Arctic Teleconnection
Why does an equatorial and tropical nation like India study the North Pole? Meteorological research conducted by NCPOR and Indian universities proves that polar vortex oscillations and loss of Barents-Kara sea ice alter high-altitude planetary Rossby waves. These wave anomalies propagate southward, modulating the onset, spatial distribution, and intensity of the **Indian Summer Monsoon (ISM)** upon which over a billion people depend for agriculture and water security.

### IndARC: India's Underwater Arctic Observatory
In 2014, Indian oceanographers deployed **IndARC**, India's first multi-sensor moored observatory in the deep waters of Kongsfjorden, recording temperature, salinity, and acoustic sounds year-round through ice-covered winters.
    `,
    glossary: [
      { term: "IndARC", definition: "India's first multi-sensor underwater moored observatory deployed in Kongsfjorden, Arctic Ocean." },
      { term: "Teleconnection", definition: "Significant climate relationships or correlations between weather phenomena at widely separated geographic points on the globe." }
    ]
  },
  {
    id: "edu-007",
    title: "Ice Cores: Reading Earth's Climate History",
    subtitle: "How Polar Ice Preserves Ancient Atmospheres, Volcanoes and Temperature Chronicles",
    category: "Glaciers & Ice",
    level: "Middle School & High School",
    readTime: "6 min read",
    author: "Dr. Rajesh Sharma (Lead Paleoclimatologist, NCPOR)",
    summary: "Step inside the cold-room laboratories of NCPOR in Goa, where ice cores extracted from Antarctica reveal 800,000 years of Earth's atmospheric temperature and carbon dioxide levels.",
    keyTakeaways: [
      "Falling snow traps atmospheric air bubbles that become hermetically sealed as snow compresses into solid glacial ice.",
      "Scientists measure the ratio of heavy to light oxygen isotopes (δ18O) to determine the exact temperature when snow fell.",
      "Ice cores prove that atmospheric carbon dioxide and global temperatures have moved in lockstep over hundreds of thousands of years.",
      "Volcanic eruptions leave distinct acid and ash (tephra) layers that act as precise geological time markers."
    ],
    fullArticleContent: `
### Ancient Air in Frozen Bubbles
When snow falls in Antarctica, the air between the delicate snowflakes is gradually trapped. As successive winters deposit new snow layers, the pressure compacts the deeper snow into firn, and eventually into impermeable glacial ice. The trapped air bubbles become preserved time capsules of ancient atmospheres.

### The Isotopic Thermometer
Water molecules contain different isotopes of hydrogen and oxygen: common light water ($H_2^{16}O$) and rarer heavy water ($H_2^{18}O$). Because heavy water condenses and precipitates more readily at lower temperatures, the ratio of $^{18}O$ to $^{16}O$ (expressed as $\\delta^{18}O$) in ice directly records the local atmospheric temperature at the moment of precipitation.

### NCPOR's Ultra-Clean Ice Core Repository
At NCPOR in Vasco da Gama, Goa, ice core segments are stored in massive walk-in sub-zero vaults held at -20°C. Scientists slice these cores inside clean-room laboratories under laminar flow hoods, analyzing them with mass spectrometers to decipher past climate shifts and solar cycles.
    `,
    glossary: [
      { term: "Firn", definition: "Compacted granular snow that is in an intermediate stage between fresh snow and solid glacial ice." },
      { term: "Oxygen Isotopes", definition: "Atoms of oxygen with differing numbers of neutrons, whose relative abundance in water molecules serves as a proxy for historical temperatures." }
    ]
  },
  {
    id: "edu-008",
    title: "Southern Ocean: The Great Planetary Carbon Sponge",
    subtitle: "Oceanic Currents, Biological Pumps and the Fight Against Global Warming",
    category: "Ocean Science",
    level: "Undergraduate & General Public",
    readTime: "8 min read",
    author: "Dr. Arvind Saxena & Dr. Meenakshi Sundaram",
    summary: "Discover how the turbulent, storm-swept Southern Ocean absorbs over 40% of all human-produced carbon dioxide taken up by the global oceans.",
    keyTakeaways: [
      "The Southern Ocean connects the Atlantic, Pacific, and Indian Oceans via the uninterrupted Antarctic Circumpolar Current (ACC).",
      "Phytoplankton in the Southern Ocean absorb dissolved CO2 through photosynthesis, locking carbon into biomass.",
      "When marine organisms die, they sink into the dark abyss—a process termed the biological carbon pump.",
      "Iron is a scarce micronutrient in the Southern Ocean; without it, vast regions remain High-Nutrient, Low-Chlorophyll (HNLC)."
    ],
    fullArticleContent: `
### The Unbounded Current
Unlike other oceans bounded by continents, the Southern Ocean completely encircles the globe without land obstruction. Powered by fierce westerly winds, the **Antarctic Circumpolar Current (ACC)** transports approximately 150 million cubic meters of water per second—more than 100 times the flow of all world rivers combined.

### The Biological Carbon Pump
Tiny single-celled plants called phytoplankton bloom across millions of square kilometers when sunlight returns in the austral spring. Utilizing chlorophyll, they convert dissolved carbon dioxide into organic matter.

When tiny crustaceans like krill graze on diatoms, their dense fecal pellets sink rapidly into the deep abyss (thousands of meters down), locking away atmospheric carbon for centuries in deep sediments.

### The Iron Dilemma
Large sectors of the Southern Ocean possess abundant nitrates and phosphates but unexpectedly low phytoplankton concentrations. Indian oceanographic cruises along 57.5°E have proven that dissolved iron is the limiting micronutrient: microscopic dust blowing from distant continents or upwelling from deep hydrothermal vents acts as the essential fertilizer triggering massive oceanic blooms.
    `,
    glossary: [
      { term: "Antarctic Circumpolar Current (ACC)", definition: "The largest and strongest ocean current in the world, flowing clockwise from west to east around Antarctica." },
      { term: "Biological Carbon Pump", definition: "The ocean's biologically driven sequestration of carbon from the atmosphere to the ocean interior and seafloor sediments." },
      { term: "HNLC", definition: "High-Nutrient, Low-Chlorophyll waters where plant growth is limited by iron scarcity despite abundant major nutrients." }
    ]
  }
];

export const RESEARCHERS = [
  {
    id: "res-001",
    name: "Dr. Ananya Rao",
    designation: "Scientist-F & Lead Sea Ice Dynamics",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    specialization: "Polar Remote Sensing, Sea Ice Thermodynamics, Satellite Oceanography",
    expeditionsLed: 3,
    publicationsCount: 42,
    datasetsCount: 14,
    email: "ananya.rao@ncpor.res.in",
    bio: "Dr. Ananya Rao leads polar microwave remote sensing initiatives at NCPOR. She has participated in 6 Indian Scientific Expeditions to Antarctica and 2 Arctic winter campaigns, focusing on thermodynamic ice-ocean interactions."
  },
  {
    id: "res-002",
    name: "Dr. Karthik Menon",
    designation: "Senior Oceanographer",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    specialization: "Physical Oceanography, Deep Moorings, Hydrographic Modeling",
    expeditionsLed: 2,
    publicationsCount: 36,
    datasetsCount: 18,
    email: "karthik.menon@ncpor.res.in",
    bio: "Specializing in continental shelf circulation and Antarctic Bottom Water formation, Dr. Menon is the principal investigator for the Prydz Bay deep mooring array."
  },
  {
    id: "res-003",
    name: "Dr. Rajesh Sharma",
    designation: "Chief Glaciologist",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    specialization: "Glacier Mass Balance, Ice Core Paleoclimatology, DGPS Geodesy",
    expeditionsLed: 4,
    publicationsCount: 58,
    datasetsCount: 22,
    email: "rajesh.sharma@ncpor.res.in",
    bio: "Leader of the 43rd Indian Scientific Expedition to Antarctica. Dr. Sharma has overseen long-term ablation stake measurements at Dakshin Gangotri glacier for over 15 years."
  },
  {
    id: "res-004",
    name: "Dr. Arvind Saxena",
    designation: "Principal Scientist (Biogeochemistry)",
    institution: "National Institute of Oceanography (CSIR-NIO) & NCPOR",
    specialization: "Southern Ocean Carbon Fluxes, Marine Chemistry, Underway pCO2",
    expeditionsLed: 3,
    publicationsCount: 49,
    datasetsCount: 16,
    email: "asaxena@nio.org",
    bio: "Leader of the 13th Southern Ocean Expedition, Dr. Saxena investigates air-sea gas exchange across sub-antarctic fronts and oceanic acidification."
  },
  {
    id: "res-005",
    name: "Dr. Meenakshi Sundaram",
    designation: "Senior Marine Biologist",
    institution: "National Institute of Oceanography (NIO)",
    specialization: "Plankton Ecology, Marine Microplastics, HPLC Pigment Chemotaxonomy",
    expeditionsLed: 1,
    publicationsCount: 31,
    datasetsCount: 11,
    email: "msundaram@nio.org",
    bio: "Dr. Sundaram investigates microscopic marine ecosystems and anthropogenic particle distribution in polar and sub-polar pelagic waters."
  },
  {
    id: "res-006",
    name: "Dr. Pradeep Verma",
    designation: "Atmospheric Scientist-E",
    institution: "National Centre for Polar and Ocean Research (NCPOR)",
    specialization: "Boundary Layer Meteorology, Arctic Ozonesondes, Black Carbon Aerosols",
    expeditionsLed: 2,
    publicationsCount: 38,
    datasetsCount: 15,
    email: "pverma@ncpor.res.in",
    bio: "Station Commander of the Arctic Winter 2024-25 expedition at Himadri, Svalbard, focusing on polar night atmospheric chemistry."
  },
  {
    id: "res-007",
    name: "Dr. Neha Deshmukh",
    designation: "Scientist (Hydrogeochemistry)",
    institution: "Indian Institute of Science (IISc) & NCPOR Associate",
    specialization: "Glacial Limnology, Stable Isotope Hydrology, Permafrost Weathering",
    expeditionsLed: 0,
    publicationsCount: 26,
    datasetsCount: 9,
    email: "neha.d@iisc.ac.in",
    bio: "Investigating water-rock-ice chemical interactions in polar periglacial lakes across East Antarctica and the Himalayas."
  },
  {
    id: "res-008",
    name: "Dr. Sulochana Gadgil",
    designation: "Honorary Research Advisor (Cryo-biology)",
    institution: "Botanical Survey of India & NCPOR Fellow",
    specialization: "Antarctic Lichens, Cyanobacterial Mats, Desiccation Cryoprotection",
    expeditionsLed: 1,
    publicationsCount: 44,
    datasetsCount: 8,
    email: "sgadgil@bsi.gov.in",
    bio: "Pioneering botanist studying cryptogamic vegetation adaptations across Schirmacher Oasis and Larsemann Hills nunataks."
  }
];

export const INSTITUTIONAL_UPDATES = [
  {
    id: "upd-001",
    date: "2025-09-15",
    title: "Flag-off of Pre-Departure Briefing for 45th Indian Scientific Expedition to Antarctica",
    category: "Expedition Announcement",
    institution: "NCPOR / Ministry of Earth Sciences",
    summary: "Director NCPOR officially opened the pre-expedition medical and environmental acclimatization workshop in Vasco da Gama for 54 selected winter and summer team scientists.",
    linkText: "Read Circular",
    isUrgent: false
  },
  {
    id: "upd-002",
    date: "2025-08-28",
    title: "Open Data Release: Full Calibration of 2024-2025 Southern Ocean BGC-Argo Float Array",
    category: "Data Release",
    institution: "INCOIS / NCPOR Data Gateway",
    summary: "Seventeen autonomous biogeochemical profiling floats deployed along the 57.5°E transect have completed Level-2 delayed-mode quality control and are open to global researchers.",
    linkText: "View Datasets",
    isUrgent: false
  },
  {
    id: "upd-003",
    date: "2025-08-04",
    title: "International Antarctic Treaty Consultative Meeting (ATCM XLVII) Submissions Approved",
    category: "Treaty & Policy",
    institution: "Ministry of Earth Sciences",
    summary: "India presented three Information Papers highlighting waste minimization achievements at Bharati Station and joint oceanographic studies with international partners.",
    linkText: "View Working Papers",
    isUrgent: false
  },
  {
    id: "upd-004",
    date: "2025-07-19",
    title: "Call for Research Proposals: Indian Arctic Expedition Campaign (Summer 2026)",
    category: "Research Grant Call",
    institution: "NCPOR Arctic Program",
    summary: "Inviting multi-disciplinary proposals from Indian universities and national labs for atmospheric, glaciological, and biological research at Himadri Station, Svalbard.",
    linkText: "Download Guidelines",
    isUrgent: true
  }
];

// Initial mock state for simulated upload and ingestion presets
export const SAMPLE_INGESTION_PRESETS = [
  {
    id: "sample-pdf-01",
    filename: "44th_Antarctic_Expedition_Report_Advance_Draft.pdf",
    filesize: "4.2 MB",
    documentType: "Expedition Report",
    simulatedTitle: "44th Indian Scientific Expedition to Antarctica — Advance Operational Report",
    extractedData: {
      title: "44th Indian Scientific Expedition to Antarctica — Advance Operational Report",
      documentType: "Expedition Report",
      researchArea: "Multidisciplinary",
      region: "Antarctica",
      year: 2025,
      institution: "National Centre for Polar and Ocean Research (NCPOR)",
      authors: ["Dr. P. K. Joshi", "Dr. Rajesh Sharma"],
      keywords: ["ISEA 44", "Bharati Station", "Maitri", "Prydz Bay", "Logistics", "Telemetry"],
      abstract: "Detailed overview of operational milestones, station maintenance, environmental compliance, and scientific projects conducted during the austral summer 2024-2025.",
      doi: "10.6084/m9.ncpor.adv.44.2025",
      classification: "Scientific Technical Report (Verified Format)"
    }
  },
  {
    id: "sample-pdf-02",
    filename: "Prydz_Bay_CTD_Hydrographic_Survey_2025.nc",
    filesize: "18.5 MB",
    documentType: "Dataset",
    simulatedTitle: "Prydz Bay High-Precision CTD Cast Hydrographic Survey",
    extractedData: {
      title: "Prydz Bay High-Precision CTD Cast Hydrographic Survey",
      documentType: "Dataset",
      researchArea: "Oceanography",
      region: "Antarctica",
      year: 2025,
      institution: "National Centre for Polar and Ocean Research (NCPOR)",
      authors: ["Dr. Karthik Menon", "Dr. Arvind Saxena"],
      keywords: ["Prydz Bay", "CTD", "Salinity", "Modified Circumpolar Deep Water", "Amery"],
      abstract: "Full-depth temperature, practical salinity, and dissolved oxygen profiles binned at 1 dbar resolution across 24 stations in the Prydz Bay continental shelf sector.",
      doi: "10.21421/ncpor.dataset.prydz.2025.04",
      classification: "NetCDF-4 CF-1.8 Compliant Hydrographic Dataset"
    }
  },
  {
    id: "sample-pdf-03",
    filename: "Schirmacher_Glacial_Mass_Balance_Bulletin_2025.pdf",
    filesize: "3.1 MB",
    documentType: "Research Publication",
    simulatedTitle: "Schirmacher Oasis Glacial Mass Balance and Snout Ablation Bulletin",
    extractedData: {
      title: "Schirmacher Oasis Glacial Mass Balance and Snout Ablation Bulletin",
      documentType: "Research Publication",
      researchArea: "Glaciology",
      region: "Antarctica",
      year: 2025,
      institution: "National Centre for Polar and Ocean Research (NCPOR)",
      authors: ["Dr. Rajesh Sharma", "Dr. Neha Deshmukh"],
      keywords: ["Glaciology", "Ablation", "Schirmacher Oasis", "Dakshin Gangotri", "DGPS"],
      abstract: "Annual report summarizing geodetic stake surveys, automated snow gauge readings, and satellite radar backscatter over peripheral glaciers in Queen Maud Land.",
      doi: "10.1007/s12040-025-0391-4",
      classification: "Peer-Reviewed Institutional Monograph"
    }
  }
];

// Initial mock items for the Admin / Repository Management table
export const INITIAL_REPOSITORY_MANAGEMENT_ITEMS = [
  {
    id: "rep-001",
    title: "Seasonal Variability of Antarctic Sea Ice",
    type: "Research Publication",
    status: "Published",
    uploaded: "2025-08-14",
    uploadedBy: "Dr. Ananya Rao",
    downloads: 412,
    doi: "10.1016/j.polar.2025.101142",
    region: "Antarctica"
  },
  {
    id: "rep-002",
    title: "Microplastic Accumulation in Sub-Antarctic Pelagic Waters and Prydz Bay",
    type: "Research Publication",
    status: "Published",
    uploaded: "2025-06-20",
    uploadedBy: "Dr. Meenakshi Sundaram",
    downloads: 290,
    doi: "10.1016/j.marpol.2025.104521",
    region: "Southern Ocean"
  },
  {
    id: "rep-003",
    title: "Antarctic Sea Ice Observation Dataset (POLAR-ANT-2025-001)",
    type: "Scientific Dataset",
    status: "Published",
    uploaded: "2025-07-01",
    uploadedBy: "Data Management Group",
    downloads: 580,
    doi: "10.21421/ncpor.dataset.ant.2025.001",
    region: "Antarctica"
  },
  {
    id: "rep-004",
    title: "44th Indian Scientific Expedition Advance Log & Fuel Logistics",
    type: "Expedition Report",
    status: "Under Review",
    uploaded: "2025-09-02",
    uploadedBy: "Er. S. Chatterjee",
    downloads: 14,
    doi: "Pending Review",
    region: "Antarctica"
  },
  {
    id: "rep-005",
    title: "Ny-Ålesund Fjord Biogeochemical Carbon Flux Archive (2018-2020)",
    type: "Scientific Dataset",
    status: "Archived",
    uploaded: "2021-04-10",
    uploadedBy: "Arctic Core Team",
    downloads: 1240,
    doi: "10.21421/ncpor.arc.legacy.2020",
    region: "Arctic"
  },
  {
    id: "rep-006",
    title: "Marine Diatom Scanning Electron Microscopy Image Series",
    type: "Media Asset",
    status: "Published",
    uploaded: "2025-05-22",
    uploadedBy: "Dr. Meenakshi Sundaram",
    downloads: 185,
    doi: "N/A",
    region: "Southern Ocean"
  },
  {
    id: "rep-007",
    title: "Historical Magnetometer Telemetry from Dakshin Gangotri (1985-1988)",
    type: "Scientific Dataset",
    status: "Archived",
    uploaded: "2019-11-15",
    uploadedBy: "IIG Digitization Project",
    downloads: 890,
    doi: "10.21421/ncpor.hist.dg.1988",
    region: "Antarctica"
  },
  {
    id: "rep-008",
    title: "Kongsfjorden High-Latitude Meteorological & Ozonesonde Telemetry",
    type: "Scientific Dataset",
    status: "Published",
    uploaded: "2025-04-12",
    uploadedBy: "Dr. Pradeep Verma",
    downloads: 310,
    doi: "10.21421/ncpor.dataset.arc.2025.012",
    region: "Arctic"
  }
];
