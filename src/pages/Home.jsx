import { useState, useEffect } from 'react';
import GalleryItem from '../components/GalleryItem';
import Modal from '../components/Modal';
import './Home.css';

// Import images - you'll need to copy images to public folder or use correct paths
const profilePhoto = '/images/ProfilePhoto.jpg';

// Name animation images in sequence: AASHISH, then GAUTAM, then full names
const nameAnimationSequence = [
    // A-A-S-H-I-S-H (AASHISH)
    { src: '/name-alphabet/a_0.jpg', letter: 'A' },
    { src: '/name-alphabet/a_3.jpg', letter: 'A' },
    { src: '/name-alphabet/s_0.jpg', letter: 'S' },
    { src: '/name-alphabet/h_0.jpg', letter: 'H' },
    { src: '/name-alphabet/i_0.jpg', letter: 'I' },
    { src: '/name-alphabet/s_2.jpg', letter: 'S' },
    { src: '/name-alphabet/h_1.jpg', letter: 'H' },
    // Full name AASHISH
    { src: '/name-alphabet/AASHISH.png', letter: 'AASHISH', isFullName: true },
    // G-A-U-T-A-M (GAUTAM)
    { src: '/name-alphabet/g_0.jpg', letter: 'G' },
    { src: '/name-alphabet/a_4.jpg', letter: 'A' },
    { src: '/name-alphabet/u_0.jpg', letter: 'U' },
    { src: '/name-alphabet/t_1.jpg', letter: 'T' },
    { src: '/name-alphabet/a_0 (1).jpg', letter: 'A' },
    { src: '/name-alphabet/m_0.jpg', letter: 'M' },
    // Full name GAUTAM
    { src: '/name-alphabet/GAUTAM.png', letter: 'GAUTAM', isFullName: true },
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
        { src: '/images/field/DroneSurvey1.jpg', title: 'Drone Survey Operations', desc: 'UAV-based topographic mapping' },
        { src: '/images/field/DroneSurvey2.jpg', title: 'UAV Field Work', desc: 'Terrain mapping preparation' },
        { src: '/images/field/Gallery_Drone_img_LakeKhulekhani.jpg', title: 'Lake Khulekhani Survey', desc: 'Bathymetric mapping project' },
        { src: '/images/field/DGPS_Survey1.jpg', title: 'DGPS Survey', desc: 'Ground control establishment' },
        { src: '/images/field/Gallery4500m_Height_Jumla_Nepal.jpg', title: 'High Altitude Survey', desc: '4500m elevation, Jumla, Nepal' },
        { src: '/images/field/TotalStation1.jpg', title: 'Total Station Survey', desc: 'Precision ground measurements' },
        { src: '/images/field/Lake_Bathymety_survey.jpg', title: 'Bathymetric Survey', desc: 'Underwater terrain mapping' },
        { src: '/images/Gallery_RaraLake.jpg', title: 'Rara Lake', desc: 'Field research visit' },
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
