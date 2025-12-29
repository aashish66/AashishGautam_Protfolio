import './Education.css';

const Education = () => {
    const educationData = [
        {
            date: 'Jan, 2025 - Present',
            degree: 'Master of Science in Civil Engineering',
            institution: 'Jackson State University, Mississippi, USA',
            description: 'Relevant Courses: Advanced Fluid Mechanics, Hydraulics Engineering Design, Advanced Topics in Water Resources Engineering, Coastal Engineering, Advanced Hydrology',
            skills: ['Hydrology', 'Remote Sensing', 'GIS Analysis', 'Water Resources']
        },
        {
            date: '2018 - 2023',
            degree: 'Bachelor of Engineering in Geomatics Engineering',
            institution: 'Tribhuvan University,Pokhara, Nepal',
            description: 'Relevant Courses: Geographic Information Systems, Application of GIS with Python, Object Oriented Programming, Cartography and Geoinformation Visualization, Photogrammetry, Remote Sensing, Digital Terrain Model, Digital Imaging and Application, Surveying I & II, Cadastre, Land Administration and Management,  Geodetic Positioning and Gravity Field, Satellite Positioning, Engineering Mathematics I-IV, Probability and Statistics',
            skills: ['Surveying', 'Geodesy', 'Photogrammetry', 'LiDAR']
        },
        {
            date: '2016 - 2018',
            degree: 'Higher Secondary Education',
            institution: 'Premier College,Kathmandu, Nepal',
            description: 'Completed higher secondary education with focus on Physics, Chemistry, and Mathematics. Built strong foundation for engineering studies.',
            skills: ['Physics', 'Mathematics', 'Chemistry']
        }
    ];

    const honors = [
        {
            date: '2025 – Present',
            award: 'HICORPS Project Graduate Research Assistantship',
            institution: 'Jackson State University (JSU) / ERDC & WOOLPERT',
            details: '$24,000 / year + Full Tuition',
            icon: '🔬'
        },
        {
            date: '2025',
            award: 'Graduate Student Association (GSA) Travel Grant',
            institution: 'Geological Society of America (GSA)',
            details: '$150',
            icon: '✈️'
        },
        {
            date: '2025',
            award: 'WaterSoftHack Fellowship',
            institution: 'Clemson University',
            details: '$1,000',
            icon: '💧'
        },
        {
            date: '2025',
            award: 'NSF HPCSI Summer Institute Full Scholarship',
            institution: 'NSF Grant / JSU',
            details: '$2,000',
            icon: '💻'
        },
        {
            date: '2024',
            award: 'FIG Foundation Grant',
            institution: 'FIG Foundation',
            details: 'Grant Awarded',
            icon: '🗺️'
        },
        {
            date: '2018 – 2023',
            award: 'Government of Nepal Full Merit Scholarship',
            institution: 'Government of Nepal',
            details: 'Full Undergraduate Tuition',
            icon: '🇳🇵'
        }
    ];

    return (
        <main className="main-content">
            <section className="section">
                <div className="section-header">
                    <h1>Education</h1>
                    <p>Academic journey in Civil Engineering and Geomatics</p>
                </div>

                <div className="timeline">
                    {educationData.map((item, index) => (
                        <div key={index} className="timeline-item glass-card">
                            <div className="timeline-date">{item.date}</div>
                            <div className="timeline-content">
                                <h3>{item.degree}</h3>
                                <h4>{item.institution}</h4>
                                <p>{item.description}</p>
                                <div className="skill-list">
                                    {item.skills.map((skill, i) => (
                                        <span key={i} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="section-header">
                    <h2>Honors and Awards</h2>
                </div>
                <div className="achievements-grid">
                    {honors.map((item, index) => (
                        <div key={index} className="glass-card cert-card">
                            <div className="cert-icon">{item.icon}</div>
                            <div className="cert-info">
                                <h4>{item.award}</h4>
                                <p>{item.institution}</p>
                                <p>{item.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Education;
