import React from 'react';
import githubImage from '../assets/github.png';
import xImage from '../assets/ximg.png';
import linkedinImage from '../assets/linkedin.png';
import './Contact.css';

const Contact = () => {
  const contactLinks = {
    github: 'https://github.com/MakiniFab',
    x: 'https://x.com/FarbeanMakini?t=QkttivImqLGG-UOlDk_tmg&s=03',
    linkedin: 'https://www.linkedin.com/in/farbean-makini-b827542b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  };

  return (
    <div className="contact-container">
      <section className="contact-section" id="contact">
        <h2>Contact Me</h2>
        <p>If you have any questions, projects, or opportunities, feel free to reach out!</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>
      <div className="contact-links">
        <div className="contact-item">
          <a href={contactLinks.github} target="_blank" rel="noopener noreferrer">
            <img src={githubImage} alt="GitHub" className="contact-image" />
            <p className="contact-p">GitHub</p>
          </a>
        </div>
        <div className="contact-item">
          <a href={contactLinks.x} target="_blank" rel="noopener noreferrer">
            <img src={xImage} alt="X" className="contact-image" />
            <p className="contact-p">X</p>
          </a>
        </div>
        <div className="contact-item">
          <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedinImage} alt="LinkedIn" className="contact-image" />
            <p className="contact-p">LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;