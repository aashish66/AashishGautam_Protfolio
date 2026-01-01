import { useState } from 'react';
import GalleryItem from '../components/GalleryItem';
import Modal from '../components/Modal';
import './Experience.css';

// Base URL for assets (matches vite.config.js base)
const BASE_URL = import.meta.env.BASE_URL;

const Experience = () => {
    const [modalData, setModalData] = useState({ isOpen: false, media: '', title: '', description: '' });

    const workExperience = [
        {
            date: 'Jan, 2025 - Present',
            title: 'Graduate Research Assistant',
            company: 'Jackson State University, USA',
            description: 'Applying specialized coastal modeling software (SMS, ADCIRC, PTM) for coastal and hydraulic engineering. Researching methods for estimating suspended sediment concentration using satellite imagery. Developing a geospatial application using Google Earth Engine (GEE) for water quality monitoring. Utilized High-Performance Computing (HPC) resources and models like HAWQS and SWAT for advanced hydrology and fluid mechanics analysis.'
        },
        {
            date: 'Apr, 2023 - Dec, 2024',
            title: 'Geomatics Engineer',
            company: 'Geo3DModeling Pvt. Ltd., Nepal',
            description: 'Executed LiDAR and RTK-enabled drone surveys for critical national-level projects. Processed and classified LiDAR data to generate highly accurate DTMs, DSMs, and topographic reports for hydropower and transmission line engineering design. Leveraged LiDAR and GIS technologies to support national-scale geotechnical risk prediction for a Countrywide Landslide Warning System in Nepal. Conducted over 100 days of Construction Surveying using Total Station, DGPS, and UAVs for route, hydropower, and forest inventory projects.'
        },
        {
            date: 'Apr, 2022 - Mar, 2023',
            title: 'GIS Analyst (Intern)',
            company: 'Geo3DModeling Pvt. Ltd., Nepal',
            description: 'Conducted in-depth geospatial data analysis using various GIS software. Managed GIS projects from initiation to completion. Processed drone data using Pix4DMapper and Agisoft. Developed and maintained GIS databases, ensuring data accuracy. Performed Image Processing, including Dehazing and Shadow Removal.'
        }
    ];

    const officeWork = [
        { src: `${BASE_URL}images/gis/ArcGIS_CityEngine.jpg`, title: 'ArcGIS CityEngine', desc: '3D urban modeling and visualization', isVideo: false },
        { src: `${BASE_URL}images/gis/Building_Detection_Arcgis.jpg`, title: 'Building Detection', desc: 'AI-powered building extraction from imagery', isVideo: false },
        { src: `${BASE_URL}images/gis/FloodMap_Qgis.jpg`, title: 'Flood Mapping', desc: 'QGIS-based flood extent analysis', isVideo: false },
        { src: `${BASE_URL}images/gis/Heat Risk Index Map for Athens.jpg`, title: 'Heat Risk Index', desc: 'Urban heat risk analysis and mapping', isVideo: false },
        { src: `${BASE_URL}images/gis/TIA_QGIS_Map.jpg`, title: 'TIA QGIS Map', desc: 'Airport vicinity mapping project', isVideo: false },
        { src: `${BASE_URL}images/gis/UrbanHeat_ArcGIS1.jpg`, title: 'Urban Heat Analysis', desc: 'Thermal imagery analysis for cities', isVideo: false },
        { src: `${BASE_URL}images/animation/Flood_sim_ArcgisCityEngine_Nepal.mp4`, title: 'Flood Simulation', desc: '3D flood simulation in ArcGIS CityEngine', isVideo: true },
        { src: `${BASE_URL}images/animation/LiDAR Technology for Transmission Line Projects in Nepal's Hilly Terrain.mp4`, title: 'LiDAR for Transmission Lines', desc: 'LiDAR survey for powerline corridor mapping', isVideo: true },
        { src: `${BASE_URL}images/gee/1724324095710.gif`, title: 'GEE Time-Lapse', desc: 'Google Earth Engine satellite imagery analysis', isVideo: false },
        { src: `${BASE_URL}images/gee/Flood_Sentinel1_Banke_Nepal_GEE.mp4`, title: 'Flood Detection - Sentinel-1', desc: 'SAR-based flood extent mapping in Banke, Nepal', isVideo: true },
    ];

    const fieldWork = [
        { src: `${BASE_URL}images/field/DroneSurvey3.jpg`, title: 'Drone Survey Setup', desc: 'Preparing UAV for aerial mapping mission', isVideo: false },
        { src: `${BASE_URL}images/field/DroneSurvey4.jpg`, title: 'Field Operations', desc: 'Survey team in action', isVideo: false },
        { src: `${BASE_URL}images/field/DroneSurvey5.jpg`, title: 'UAV Launch', desc: 'Quadcopter takeoff for survey mission', isVideo: false },
        { src: `${BASE_URL}images/field/DroneSurvey6.jpg`, title: 'Mountain Survey', desc: 'High altitude drone operations', isVideo: false },
        { src: `${BASE_URL}images/field/DroneSurvey7.jpg`, title: 'Data Collection', desc: 'Ground control point measurement', isVideo: false },
        { src: `${BASE_URL}images/animation/Bathymetric_Survey_Khulekhani.mp4`, title: 'Bathymetric Survey', desc: 'Lake depth measurement operations', isVideo: true },
    ];

    const workshops = [
        { src: `${BASE_URL}images/workshop/DMG_workshop_LiDAR&GlobalMapper_Training_1_2023.jpg`, title: 'LiDAR & Global Mapper Training', desc: 'DMG Workshop 2023' },
        { src: `${BASE_URL}images/workshop/DMG_workshop_LiDAR&GlobalMapper_Training_2023.jpg`, title: 'Point Cloud Processing', desc: 'Advanced LiDAR data processing workshop' },
        { src: `${BASE_URL}images/workshop/REDD_Implementation_Center_Drone&LiDAR_Training_2024.jpg`, title: 'Drone & LiDAR Training', desc: 'REDD Implementation Center 2024' },
        { src: `${BASE_URL}images/workshop/UAV_workshop_KU_2024.jpg`, title: 'UAV Workshop', desc: 'Kathmandu University 2024' },
        { src: `${BASE_URL}images/workshop/UAV_workshop_KU_2024_1.jpg`, title: 'Flight Planning Session', desc: 'Mission planning and execution training' },
        { src: `${BASE_URL}images/workshop/UAV_workshop_KU_2024_2.jpg`, title: 'Practical Training', desc: 'Hands-on drone operation training' },
    ];

    const openModal = (media, title, description) => {
        setModalData({ isOpen: true, media, title, description });
    };

    const closeModal = () => {
        setModalData({ ...modalData, isOpen: false });
    };

    return (
        <main className="main-content">
            <section className="section">
                <div className="section-header">
                    <h1>Work Experience</h1>
                    <p>Professional journey in Geomatics and Civil Engineering</p>
                </div>

                <div className="timeline">
                    {workExperience.map((item, index) => (
                        <div key={index} className="timeline-item glass-card">
                            <div className="timeline-date">{item.date}</div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <h4>{item.company}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Office Work Gallery */}
            <section className="section">
                <h2>🖥️ Office Work - GIS & Remote Sensing</h2>
                <p className="section-subtitle">Click on any item to view details</p>
                <div className="gallery-grid">
                    {officeWork.map((item, index) => (
                        <GalleryItem
                            key={index}
                            src={item.src}
                            title={item.title}
                            description={item.desc}
                            isVideo={item.isVideo}
                            onClick={() => openModal(item.src, item.title, item.desc)}
                        />
                    ))}
                </div>
            </section>

            {/* Field Work Gallery */}
            <section className="section">
                <h2>🌍 Field Work - Surveys & Data Collection</h2>
                <p className="section-subtitle">Click on any item to view details</p>
                <div className="gallery-grid">
                    {fieldWork.map((item, index) => (
                        <GalleryItem
                            key={index}
                            src={item.src}
                            title={item.title}
                            description={item.desc}
                            isVideo={item.isVideo}
                            onClick={() => openModal(item.src, item.title, item.desc)}
                        />
                    ))}
                </div>
            </section>

            {/* Workshops Section */}
            <section className="section">
                <h2>🎓 Workshops & Training</h2>
                <p className="section-subtitle">Professional development and training sessions</p>
                <div className="gallery-grid">
                    {workshops.map((item, index) => (
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

export default Experience;
