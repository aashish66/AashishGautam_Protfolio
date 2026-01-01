import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '6ec02f1d-c846-4539-b4f9-8959e4a031fd',
                    from_name: formData.name,
                    email: formData.email,
                    subject: `Portfolio Inquiry from ${formData.name}`,
                    message: `Name: ${formData.name}\nEmail: ${formData.email}\nAddress/Organization: ${formData.address}\n\nMessage:\n${formData.message}`,
                    to: 'aashishgautam533@gmail.com'
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', address: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        }

        setIsSubmitting(false);
    };

    const contactLinks = [
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'linkedin.com/in/aashishgautam11',
            href: 'https://www.linkedin.com/in/aashishgautam11/'
        },
        {
            icon: '📧',
            label: 'Email',
            value: 'aashishgautam533@gmail.com',
            href: 'mailto:aashishgautam533@gmail.com'
        },
        {
            icon: '📞',
            label: 'Phone',
            value: '+1-601-316-1615',
            href: 'tel:+16013161615'
        },
        {
            icon: '📍',
            label: 'Location',
            value: 'Jackson, Mississippi, USA',
            href: null
        }
    ];

    return (
        <main className="main-content">
            <section className="section">
                <div className="section-header">
                    <h1>Get In Touch</h1>
                    <p>Feel free to reach out for collaborations or opportunities</p>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>I'm always open to discussing new projects, research collaborations, or opportunities in GIS and Remote Sensing.</p>

                        <div className="contact-links">
                            {contactLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href || '#'}
                                    className="contact-link"
                                    target={link.href?.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    <div className="contact-icon">{link.icon}</div>
                                    <div className="contact-details">
                                        <span className="contact-label">{link.label}</span>
                                        <span className="contact-value">{link.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="contact-form-container glass-card">
                        <h2>Send a Message</h2>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Address / Organization</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Your organization or address"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message ✉️'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="form-success">
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="form-error">
                                    ❌ Failed to send message. Please try again or email me directly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            {/* Visitor Statistics Section */}
            <section className="section visitor-stats-section">
                <div className="section-header">
                    <h2>📊 Visitor Statistics</h2>
                    <p>See who's visiting from around the world</p>
                </div>
                <div className="visitor-stats-container glass-card">
                    <div className="stats-widget">
                        {/* Flag Counter Widget with detailed stats */}
                        <a href="https://info.flagcounter.com/QLhU" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://s11.flagcounter.com/count2/QLhU/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_16/viewers_0/labels_1/pageviews_1/flags_1/percent_0/"
                                alt="Visitor Statistics by Country"
                                className="flag-counter-img"
                            />
                        </a>
                        <p className="stats-note">
                            📍 Live visitor tracking • Day • Week • Month • Total
                        </p>
                    </div>
                    <div className="stats-info">
                        <div className="stat-item">
                            <span className="stat-icon">🌍</span>
                            <span className="stat-text">Global visitor tracking across countries</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-icon">📈</span>
                            <span className="stat-text">Daily, weekly, monthly & yearly statistics</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-icon">🏳️</span>
                            <span className="stat-text">Country flags with visitor counts</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;

