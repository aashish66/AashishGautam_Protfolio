import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'GIS & Remote Sensing',
            icon: '🗺️',
            skills: ['ArcGIS Pro', 'QGIS', 'Google Earth Engine', 'ENVI', 'ERDAS Imagine', 'Global Mapper']
        },
        {
            title: 'Surveying Equipment',
            icon: '📡',
            skills: ['Total Station', 'DGPS/RTK GPS', 'UAV/Drone', 'LiDAR', 'Echo Sounder', 'Theodolite']
        },
        {
            title: 'Programming & Scripting',
            icon: '💻',
            skills: ['Python', 'R', 'JavaScript', 'SQL', 'MATLAB', 'ArcPy']
        },
        {
            title: 'Data Processing',
            icon: '📊',
            skills: ['Point Cloud Processing', 'Photogrammetry', 'Image Classification', 'Spatial Analysis', 'DEM Generation', 'Orthomosaic Creation']
        },
        {
            title: 'CAD & 3D Modeling',
            icon: '✏️',
            skills: ['AutoCAD', 'Civil 3D', 'ArcGIS CityEngine', 'SketchUp', 'Pix4D', 'Agisoft Metashape']
        },
        {
            title: 'Hydrology & Water Resources',
            icon: '💧',
            skills: ['HEC-RAS', 'HEC-HMS', 'SWAT', 'Flood Modeling', 'Watershed Analysis', 'Bathymetric Survey']
        }
    ];

    const licenses = [
        { icon: '🛩️', title: 'Part 107 Remote Pilot Certificate', issuer: 'Federal Aviation Administration (FAA)', location: 'MS, USA', year: '2025' },
        { icon: '📋', title: 'Class-A Geomatics Engineer', issuer: 'Nepal Engineering Council (NEC)', location: 'Nepal', year: '2023' }
    ];

    const trainings = [
        { title: 'NSF HPCSI Summer Institute', issuer: 'Jackson State University', year: '2025', skills: 'High Performance Computing (HPC), Linux, GPU Computing' },
        { title: 'Application of Google Earth Engine and Airborne Remote Sensing in Landslide Detection', issuer: 'G.E.O.S. Ingenieurgesellschaft mbH (Countrywide Landslide Warning System Project)', year: '2023', skills: 'GEE, Remote Sensing, Landslide Analysis' },
        { title: 'SAR Data Processing and its Applications', issuer: 'Professional Training', year: '2023', skills: 'SAR Processing, Radar Imagery, InSAR' },
        { title: 'GIS for Climate Action', issuer: 'Indian Institute of Remote Sensing (IIRS), ISRO', year: '2023', skills: 'Climate Modeling, GIS Analysis' },
        { title: 'Going Places with Spatial Analysis', issuer: 'ESRI', year: '2023', skills: 'Spatial Analysis, ArcGIS' },
        { title: 'Cartography', issuer: 'ESRI', year: '2023', skills: 'Map Design, Visualization' },
        { title: 'Increasing Climate Resilience using Geospatial Technologies', issuer: 'VCSP', year: '2022', skills: 'Climate Resilience, Geospatial Tech' },
        { title: 'Training/Workshop on DGPS and Terrestrial LiDAR Scanner', issuer: 'CSSGS supported by UGC', year: '2022', skills: 'DGPS, TLS, Survey Technology' },
        { title: 'Promoting Tenure Security in Face of Legal, Institutional & Social Challenges', issuer: 'VCSP', year: '2021', skills: 'Land Administration, Policy' },
        { title: 'Global Navigation Satellite System (GNSS) Training/Workshop', issuer: 'CSSGS supported by CSIS: The University of Tokyo & ICG: Vienna, Austria', year: '2021', skills: 'GNSS, Satellite Navigation' },
        { title: 'WebGIS Training', issuer: 'GESAN', year: '2021', skills: 'Web Mapping, WebGIS Development' },
        { title: 'QGIS Training', issuer: 'GESAN', year: '2021', skills: 'QGIS, Open Source GIS' }
    ];

    return (
        <main className="main-content">
            <section className="section">
                <div className="section-header">
                    <h1>Skills & Expertise</h1>
                    <p>Technical competencies in Geomatics, GIS, and Civil Engineering</p>
                </div>

                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="glass-card skill-category">
                            <div className="skill-category-header">
                                <span className="skill-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Professional Licenses */}
            <section className="section">
                <div className="section-header">
                    <h2>🎖️ Professional Licenses</h2>
                    <p>Official certifications and professional credentials</p>
                </div>
                <div className="certifications-grid">
                    {licenses.map((license, index) => (
                        <div key={index} className="glass-card cert-item license-item">
                            <div className="cert-icon-large">{license.icon}</div>
                            <div className="cert-details">
                                <h4>{license.title}</h4>
                                <p className="cert-issuer">{license.issuer}</p>
                                <p className="cert-license">{license.location} • {license.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trainings & Certifications */}
            <section className="section">
                <div className="section-header">
                    <h2>📜 Training & Certifications</h2>
                    <p>Professional development courses and workshops</p>
                </div>
                <div className="trainings-grid">
                    {trainings.map((training, index) => (
                        <div key={index} className="glass-card training-item">
                            <div className="training-header">
                                <h4>{training.title}</h4>
                                <span className="training-year">{training.year}</span>
                            </div>
                            <p className="training-issuer">{training.issuer}</p>
                            <div className="training-skills">
                                {training.skills.split(', ').map((skill, i) => (
                                    <span key={i} className="skill-tag-small">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="section-header">
                    <h2>Software Proficiency</h2>
                </div>
                <div className="proficiency-bars">
                    <div className="proficiency-item">
                        <div className="proficiency-header">
                            <span>ArcGIS Pro / QGIS</span>
                            <span>95%</span>
                        </div>
                        <div className="proficiency-bar">
                            <div className="proficiency-fill" style={{ width: '95%' }}></div>
                        </div>
                    </div>
                    <div className="proficiency-item">
                        <div className="proficiency-header">
                            <span>Python / GIS Scripting</span>
                            <span>85%</span>
                        </div>
                        <div className="proficiency-bar">
                            <div className="proficiency-fill" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                    <div className="proficiency-item">
                        <div className="proficiency-header">
                            <span>Drone / UAV Operations</span>
                            <span>90%</span>
                        </div>
                        <div className="proficiency-bar">
                            <div className="proficiency-fill" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div className="proficiency-item">
                        <div className="proficiency-header">
                            <span>LiDAR Data Processing</span>
                            <span>88%</span>
                        </div>
                        <div className="proficiency-bar">
                            <div className="proficiency-fill" style={{ width: '88%' }}></div>
                        </div>
                    </div>
                    <div className="proficiency-item">
                        <div className="proficiency-header">
                            <span>Remote Sensing Analysis</span>
                            <span>85%</span>
                        </div>
                        <div className="proficiency-bar">
                            <div className="proficiency-fill" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Skills;
