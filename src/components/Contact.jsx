import React from 'react';

const Contact = () => {
  const contactLinks = {
    github: 'https://github.com/yourusername', // Replace with your GitHub link
    whatsapp: 'https://wa.me/yourphonenumber', // Replace with your WhatsApp link (E.164 format for phone)
    linkedin: 'https://linkedin.com/in/yourusername', // Replace with your LinkedIn link
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Contact Me</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'green', textDecoration: 'underline' }}
          >
            WhatsApp
          </a>
        </li>
        <li>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;