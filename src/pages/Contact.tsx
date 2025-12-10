import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="page-container">
      <h1>📞 Contact Us</h1>

      <div className="contact-grid">
        <section className="contact-info">
          <h2>School Contact Information</h2>
          <div className="info-item">
            <h3>📍 Address</h3>
            <p>123 Education Street</p>
            <p>Learning City, State 12345</p>
          </div>

          <div className="info-item">
            <h3>📱 Phone</h3>
            <p>Main Office: (555) 123-4567</p>
            <p>Admissions: (555) 123-4568</p>
            <p>Fax: (555) 123-4569</p>
          </div>

          <div className="info-item">
            <h3>✉️ Email</h3>
            <p>General: info@school.edu</p>
            <p>Admissions: admissions@school.edu</p>
            <p>Support: support@school.edu</p>
          </div>

          <div className="info-item">
            <h3>⏰ Office Hours</h3>
            <p>Sunday - Thursday: 8:00 AM - 4:00 PM</p>
            <p>Friday:  8:00 AM - 12:00 PM</p>
            <p>Saturday: Closed</p>
          </div>
        </section>

        <section className="contact-form-section">
          <h2>Send us a Message</h2>
          {submitted && (
            <div className="success-message">
              ✅ Thank you! Your message has been sent successfully. We'll get back to you soon!
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Your message here..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
