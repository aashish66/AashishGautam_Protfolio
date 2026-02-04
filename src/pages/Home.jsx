import { useState, useEffect } from 'react';
import GalleryItem from '../components/GalleryItem';
import Modal from '../components/Modal';
import './Home.css';

// Base URL for assets (matches vite.config.js base)
const BASE_URL = import.meta.env.BASE_URL;

// Import images - you'll need to copy images to public folder or use correct paths
const profilePhoto = `${BASE_URL}images/ProfilePhoto.jpg`;

// Name animation images in sequence: AASHISH, then GAUTAM, then full names
const nameAnimationSequence = [
    // A-A-S-H-I-S-H (AASHISH)
    { src: `${BASE_URL}name-alphabet/a_0.jpg`, letter: 'A' },
    { src: `${BASE_URL}name-alphabet/a_3.jpg`, letter: 'A' },
    { src: `${BASE_URL}name-alphabet/s_0.jpg`, letter: 'S' },
    { src: `${BASE_URL}name-alphabet/h_0.jpg`, letter: 'H' },
    { src: `${BASE_URL}name-alphabet/i_0.jpg`, letter: 'I' },
    { src: `${BASE_URL}name-alphabet/s_2.jpg`, letter: 'S' },
    { src: `${BASE_URL}name-alphabet/h_1.jpg`, letter: 'H' },
    // Full name AASHISH
    { src: `${BASE_URL}name-alphabet/AASHISH.png`, letter: 'AASHISH', isFullName: true },
    // G-A-U-T-A-M (GAUTAM)
    { src: `${BASE_URL}name-alphabet/g_0.jpg`, letter: 'G' },
    { src: `${BASE_URL}name-alphabet/a_4.jpg`, letter: 'A' },
    { src: `${BASE_URL}name-alphabet/u_0.jpg`, letter: 'U' },
    { src: `${BASE_URL}name-alphabet/t_1.jpg`, letter: 'T' },
    { src: `${BASE_URL}name-alphabet/a_0 (1).jpg`, letter: 'A' },
    { src: `${BASE_URL}name-alphabet/m_0.jpg`, letter: 'M' },
    // Full name GAUTAM
    { src: `${BASE_URL}name-alphabet/GAUTAM.png`, letter: 'GAUTAM', isFullName: true },
];

const Home = () => {
    const [modalData, setModalData] = useState({ isOpen: false, media: '', title: '', description: '' });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-advance animation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % nameAnimationSequence.length
            );
        }, 800); // Change image every 800ms

        return () => clearInterval(interval);
    }, []);

    const licenses = [
        { icon: '🛩️', title: 'Part 107 Remote Pilot Certificate', desc: 'Federal Aviation Administration (FAA) • MS, USA • 2025' },
        { icon: '📋', title: 'Class-A Geomatics Engineer', desc: 'Nepal Engineering Council (NEC) • Nepal • 2023' }
    ];

    const galleryItems = [
        { src: `${BASE_URL}images/field/DroneSurvey1.jpg`, title: 'Drone Survey Operations', desc: 'UAV-based topographic mapping' },
        { src: `${BASE_URL}images/field/DroneSurvey2.jpg`, title: 'UAV Field Work', desc: 'Terrain mapping preparation' },
        { src: `${BASE_URL}images/field/Gallery_Drone_img_LakeKhulekhani.jpg`, title: 'Lake Khulekhani Survey', desc: 'Bathymetric mapping project' },
        { src: `${BASE_URL}images/field/DGPS_Survey1.jpg`, title: 'DGPS Survey', desc: 'Ground control establishment' },
        { src: `${BASE_URL}images/field/Gallery4500m_Height_Jumla_Nepal.jpg`, title: 'High Altitude Survey', desc: '4500m elevation, Jumla, Nepal' },
        { src: `${BASE_URL}images/field/TotalStation1.jpg`, title: 'Total Station Survey', desc: 'Precision ground measurements' },
        { src: `${BASE_URL}images/field/Lake_Bathymety_survey.jpg`, title: 'Bathymetric Survey', desc: 'Underwater terrain mapping' },
        { src: `${BASE_URL}images/Gallery_RaraLake.jpg`, title: 'Rara Lake', desc: 'Field research visit' },
    ];

    const openModal = (media, title, description) => {
        setModalData({ isOpen: true, media, title, description });
    };

    const closeModal = () => {
        setModalData({ ...modalData, isOpen: false });
    };

    // Get only letter images (not full names)
    const letterImages = nameAnimationSequence.filter(item => !item.isFullName);
    const currentLetterIndex = currentImageIndex % letterImages.length;
    const currentLetter = letterImages[currentLetterIndex];

    return (
        <main className="main-content home-with-animation">
            {/* Side Letter Animation - Left */}
            <div className="side-letter-animation left">
                <img
                    src={currentLetter.src}
                    alt={currentLetter.letter}
                    className="side-letter-image"
                />
            </div>

            {/* Side Letter Animation - Right */}
            <div className="side-letter-animation right">
                <img
                    src={letterImages[(currentLetterIndex + 7) % letterImages.length].src}
                    alt={letterImages[(currentLetterIndex + 7) % letterImages.length].letter}
                    className="side-letter-image"
                />
            </div>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-image">
                        <img src={profilePhoto} alt="Aashish Gautam" />
                    </div>
                    <div className="hero-content">
                        <h1>Aashish Gautam</h1>
                        <p className="hero-subtitle">Civil Engineering MS | GIS & Remote Sensing Specialist</p>
                        <p className="bio">
                            Detail-oriented Civil Engineering MS student with a strong Geomatics foundation,
                            seeking a role that utilizes advanced skills in Remote Sensing, Hydrology, and
                            GIS analysis to solve complex problems. Having extensive experience and exposure
                            in both field and academic research, I am skilled at seeing projects through
                            initiation to completion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Professional Licenses Section */}
            <section className="section">
                <div className="section-header">
                    <h2>🎖️ Professional Licenses</h2>
                    <p>Official certifications and professional credentials</p>
                </div>
                <div className="certifications">
                    {licenses.map((license, index) => (
                        <div key={index} className="glass-card cert-card">
                            <div className="cert-icon">{license.icon}</div>
                            <div className="cert-info">
                                <h4>{license.title}</h4>
                                <p>{license.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tools Section */}
            <section className="section">
                <div className="section-header">
                    <h2>🛠️ Google Earth Engine and GEEMAP Tools</h2>
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
                            <span className="tool-id">📦 https://agrivision-pro.streamlit.app///</span>
                            <span className="tool-action">Click to launch →</span>
                        </div>
                    </div>
                /* {/* LCZ_HeatMoist... */}
                  <div 
                        className="glass-card tool-card"
                        onClick={() => window.open('https://unraveluhiumiudi-kbshudpgryrfp7ercebzo2.streamlit.app//', '_blank')}
                    >
                        <div className="tool-header">
                            <h3>🛰️ LCZ-HeatMoist</h3>
                            <span className="tool-badge">Python GeeMap App</span>
                        </div>
                        <p className="tool-description">
                            <strong>LCZ-HeatMoist</strong> is an interactive web application designed to visualize and analyze urban climate phenomena across 50 major US cities from 2000-2020. The app enables researchers, urban planners, and climate scientists to explore the relationships between Local Climate Zones (LCZ) and three key urban climate indicators: Surface Urban Heat Island (SUHI), Urban Moisture Island (UMI), and Urban Dry Island (UDI). Built with Streamlit and featuring rich visualizations through Plotly and Folium, users can explore a CONUS-wide interactive map, perform deep-dive city analyses, compare multiple cities side-by-side, and examine how different LCZ classes influence local temperature and moisture conditions. The application leverages data from MODIS Land Surface Temperature, ERA5-Land humidity reanalysis, and WUDAPT LCZ classifications to provide comprehensive seasonal and day/night pattern analysis. Whether you're investigating which urban morphologies contribute most to heat islands or comparing mitigation strategies across different regions, LCZ-HeatMoist provides the analytical tools needed to understand complex urban-rural climate dynamics.
                        </p>
                        <div className="tool-footer">
                            <span className="tool-id">📦 https://lczheatmoist.streamlit.app///</span>
                            <span className="tool-action">Click to launch →</span>
                        </div>
                    </div>
                {/* LCZ_HeatMoist... */} */
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

            {/* Gallery Section */}
            <section className="section">
                <div className="section-header">
                    <h2>Field Work Gallery</h2>
                    <p>Snapshots from various surveying and research fieldwork across Nepal</p>
                </div>
                <div className="gallery-grid">
                    {galleryItems.map((item, index) => (
                        <GalleryItem
                            key={index}
                            src={item.src}
                            title={item.title}
                            description={item.desc}
                            onClick={() => openModal(item.src, item.title, item.desc)}
                        />
                    ))}
                </div>
            </section>

            <Modal
                isOpen={modalData.isOpen}
                onClose={closeModal}
                media={modalData.media}
                title={modalData.title}
                description={modalData.description}
            />
        </main>
    );
};

export default Home;
