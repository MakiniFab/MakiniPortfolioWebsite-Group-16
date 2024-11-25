import React from 'react';
import githubImage from '../assets/github.png';
import xImage from '../assets/ximg.png';
import linkedinImage from '../assets/linkedin.png';
import './Contact.css';

const Contact = () => {
  const contactLinks = {
    github: 'https://github.com/yourusername',
    whatsapp: 'https://wa.me/yourphonenumber',
    linkedin: 'https://linkedin.com/in/yourusername',
  };

  return (
    <div className="contact-container">
      <div className="contact-links">
        <div className="contact-item">
          <a href={contactLinks.github} target="_blank" rel="noopener noreferrer">
            <img src={githubImage} alt="GitHub" className="contact-image" />
            <p className='contact-p' >GitHub</p>
          </a>
        </div>
        <div className="contact-item">
          <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer">
            <img src={xImage} alt="x" className="contact-image" />
            <p className='contact-p'>X</p>
          </a>
        </div>
        <div className="contact-item">
          <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedinImage} alt="LinkedIn" className="contact-image" />
            <p className='contact-p'>LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;