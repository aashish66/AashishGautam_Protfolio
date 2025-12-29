import './Footer.css';

// Base URL for assets (matches vite.config.js base)
const BASE_URL = import.meta.env.BASE_URL;

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Left - AASHISH */}
                <img src={`${BASE_URL}name-alphabet/AASHISH.png`} alt="AASHISH" className="footer-name-image left" />

                {/* Center - Copyright and Social Icons */}
                <div className="footer-center">
                    <p>© {new Date().getFullYear()} Aashish Gautam. All Rights Reserved.</p>
                    <div className="footer-social-icons">
                        <a href="https://www.linkedin.com/in/aashishgautam11/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        <a href="tel:+16013161615" title="Phone">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                        </a>
                        <a href="mailto:aashishgautam533@gmail.com" title="Email">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Right - GAUTAM */}
                <img src={`${BASE_URL}name-alphabet/GAUTAM.png`} alt="GAUTAM" className="footer-name-image right" />
            </div>
        </footer>
    );
};

export default Footer;

