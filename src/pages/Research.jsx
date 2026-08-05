import { useState } from 'react';
import './Research.css';

// Base URL for assets (matches vite.config.js base)
const BASE_URL = import.meta.env.BASE_URL;

const Research = () => {
    const [selectedPoster, setSelectedPoster] = useState(null);

    const ongoingResearch = [
        {
            title: 'SAT2SSC: A MULTI-SENSOR, MULTI-ALGORITHM MACHINE LEARNING FRAMEWORK FOR SUSPENDED SEDIMENT CONCENTRATION ESTIMATION IN CONUS RIVERS',
            status: 'Ongoing',
            year: '2026'
        },
      
    ];

    const publications = [
         {
            title: 'Sat2SSC: Multi-Sensor Machine Learning for Suspended Sediment Monitoring in CONUS Rivers',
            journal: 'IEEEGARSS',
            doi: 'https://2026.ieeeigarss.org/view_paper.php?PaperNum=1684&SessionID=1504',
            year: '2026',
            type: 'Conference Proceedings'
        },
         {
            title: 'Suspended Sediment Dynamics Under the Compound Influence of a Natural Lake and Navigation Dams in the Upper Mississippi River: Insights from Remote Sensing and Modeling',
            journal: 'MDPI Remote Sensing',
            doi: 'https://doi.org/10.3390/rs18071095',
            year: '2026',
            type: 'Journal Article'
        },
          {
            title: 'Urban morphology controls thermal and moisture anomalies: Insights from local climate zones across U.S. cities',
            journal: 'RSASE Elsevier',
            doi: 'https://doi.org/10.1016/j.rsase.2026.102161',
            year: '2026',
            type: 'Journal Article'
        },
        {
            title: 'Satellite-Derived Salinity Dynamics in the Mississippi Sound: A Hurricane Nate Case Study',
            journal: 'Springer Nature (ESEV)',
            doi: 'https://doi.org/10.1007/s41748-026-01044-3',
            year: '2025',
            type: 'Journal Article'
        },
        {
            title: 'Exploring Urban Greenery: A Case Study of Roadside Treesin Pokhara Metropolitan City',
            journal: ' Landscape Architecture and Regional Planning (Volume 9, Issue 1)',
            doi: '10.11648/j.larp.20240901.12',
            year: '2024',
            type: 'Journal Article'
        }
    ];

    const conferences = [
        {
            title: 'AGU Fall Meeting 2025',
            location: 'New Orleans, USA',
            description: 'Presented two poster sessions on Compound Impacts of a Natural Lake and Navigation Dams on Suspended Sediment Dynamics in the Upper Mississippi River and Unraveling Urban Heat and Moisture Anomalies Across the Continental U.S. Using Local Climate Zones and Earth Observation Data',
            year: '2025',
            posters: [
                {
                    title: 'Sediment Dynamics in Lake Pepin',
                    file: `${BASE_URL}posters/Sediment_LakePepin_AashishGautam.pdf`
                },
                {
                    title: 'Urban Heat & Moisture Anomalies',
                    file: `${BASE_URL}posters/Unravelling_UHI_UMI_AashishGautam.pdf`
                }
            ]
        },
        {
            title: 'GSA Conference 2025',
            location: 'San Antanio, USA',
            description: 'Oral presentation on Compound Impacts of a Natural Lake and Navigation Dams on Suspended Sediment Dynamics in the Upper Mississippi River',
            year: '2025'
        }, {
            title: 'FIG International Congress 2024',
            location: 'Kathmandu, Nepal',
            description: 'Presented research on Exploring Urban Greenery: A Case Study of Roadside Treesin Pokhara Metropolitan City',
            year: '2024'
        },
    ];

    return (
        <main className="main-content">
            <section className="section">
                <div className="section-header">
                    <h1>Research & Publications</h1>
                    <p>Academic contributions and ongoing research projects</p>
                </div>
            </section>

            {/* Ongoing Research */}
            <section className="section">
                <h2>Ongoing Research</h2>
                <div className="research-grid">
                    {ongoingResearch.map((item, index) => (
                        <div key={index} className="glass-card research-card">
                            <span className="research-status">{item.status}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <span className="research-year">{item.year}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Publications */}
            <section className="section">
                <h2>Publications</h2>
                <div className="publications-list">
                    {publications.map((pub, index) => (
                        <div key={index} className="glass-card publication-card">
                            <span className="pub-type">{pub.type}</span>
                            <h3>{pub.title}</h3>
                            <span className="pub-doi">{pub.doi}</span>
                            <p>{pub.journal} • {pub.year}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Conferences */}
            <section className="section">
                <h2>Conference Presentations</h2>
                <div className="research-grid">
                    {conferences.map((conf, index) => (
                        <div key={index} className="glass-card conference-card">
                            <div className="conf-header">
                                <h3>{conf.title}</h3>
                                <span className="conf-location">📍 {conf.location}</span>
                            </div>
                            <p>{conf.description}</p>
                            {conf.posters && (
                                <div className="posters-section">
                                    <h4>📄 View Posters</h4>
                                    <div className="poster-links">
                                        {conf.posters.map((poster, pIndex) => (
                                            <button
                                                key={pIndex}
                                                className="poster-btn"
                                                onClick={() => setSelectedPoster(poster)}
                                            >
                                                {poster.title}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <span className="research-year">{conf.year}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tools Section */}
            <section className="section">
                <div className="section-header">
                    <h2>🛠️ Google Earth Engine Tools</h2>
                    <p>Interactive web applications for environmental monitoring and analysis</p>
                </div>
                 <div 
                        className="glass-card tool-card"
                        onClick={() => window.open('https://agrivision-pro.streamlit.app//', '_blank')}
                    >
                        <div className="tool-header">
                            <h3>🛰️ AgriVision_Pro</h3>
                            <span className="tool-badge">Python GeeMap App</span>
                        </div>
                        <p className="tool-description">
                            <strong>AgriVision_Pro</strong> is a web-based vegetation analysis platform that allows users to monitor crop and vegetation health using satellite imagery (Sentinel-2, Landsat, MODIS) and drone/camera photos.Users can define their area of interest, search for imagery over any date range, and calculate various vegetation indices (NDVI, SAVI, EVI, etc.) to assess plant health, detect water stress, and track changes over time. The app features side-by-side image comparison, time series analysis with interactive charts, composite image generation (mean/median), and multi-index comparison tools. All data is processed through Google Earth Engine, providing free access to decades of global satellite imagery without requiring any downloads or specialized GIS software.
                        </p>
                        <div className="tool-footer">
                            <span className="tool-id">📦 https://aashishgautamprotfolio-gpnnxhqkm2gyptofmfjude.streamlit.app/</span>
                            <span className="tool-action">Click to launch →</span>
                        </div>
                    </div>
                <div className="tools-grid">
                    <div 
                        className="glass-card tool-card"
                        onClick={() => window.open('https://ee-aashishgautam533.projects.earthengine.app/view/global-air-pollution-explorer', '_blank')}
                    >
                        <div className="tool-header">
                            <h3>🌍 Global Air Pollution Explorer</h3>
                            <span className="tool-badge">GEE App</span>
                        </div>
                        <p className="tool-description">
                            This application presents global population distribution and population exposure to ground-level PM₂.₅ air pollution for the year 2020. Users can click on any location to view the annual mean PM₂.₅ concentration, the estimated population at that location, and the exceedance factor. The exceedance factor is calculated as the ratio of the observed PM₂.₅ concentration to the World Health Organization annual guideline value of 5 µg/m³. The legend panel allows users to switch between different data layers for exploration. In addition to the 2020 snapshot, the app also displays long-term trends in annual average PM₂.₅ concentrations from 1998 to 2021 for the selected pixel, providing insight into how air quality has changed over time.
                        </p>
                        <div className="tool-footer">
                            <span className="tool-id">📦 cloud/ee-aashishgautam533/global-air-pollution-explorer</span>
                            <span className="tool-action">Click to launch →</span>
                        </div>
                    </div>

                    <div 
                        className="glass-card tool-card"
                        onClick={() => window.open('https://ee-aashishgautam533.projects.earthengine.app/view/sat2ssc', '_blank')}
                    >
                        <div className="tool-header">
                            <h3>🛰️ Sat2SSC</h3>
                            <span className="tool-badge">GEE App</span>
                        </div>
                        <p className="tool-description">
                            <strong>Real-time Suspended Sediment Concentration Monitoring:</strong> Estimate TSS concentrations (0-3000 mg/L) in CONUS rivers using machine learning models trained on HLS, Landsat 8/9, and Sentinel-2 data (2015-2024). This tool provides accurate, near real-time monitoring of water quality across the continental United States, enabling researchers and water resource managers to track sediment dynamics and assess environmental impacts on riverine ecosystems.
                        </p>
                        <div className="tool-footer">
                            <span className="tool-id">📦 cloud/ee-aashishgautam533/sat2ssc</span>
                            <span className="tool-action">Click to launch →</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conference Photo */}
            <section className="section">
                <div className="conference-image">
                    <img src={`${BASE_URL}images/Conference_FIG_2024_kathmandu.jpg`} alt="FIG Conference 2024 Kathmandu" />
                    <p className="image-caption">FIG International Congress 2024, Kathmandu, Nepal</p>
                </div>
            </section>

            {/* Poster Modal */}
            {selectedPoster && (
                <div className="poster-modal" onClick={() => setSelectedPoster(null)}>
                    <div className="poster-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="poster-modal-header">
                            <h3>{selectedPoster.title}</h3>
                            <button className="close-btn" onClick={() => setSelectedPoster(null)}>×</button>
                        </div>
                        <div className="poster-modal-body">
                            <iframe
                                src={selectedPoster.file}
                                title={selectedPoster.title}
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="poster-modal-footer">
                            <a
                                href={selectedPoster.file}
                                download
                                className="download-btn"
                            >
                                📥 Download Poster
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Research;
