import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  return (
    <div id="contact" className="contact-info">
      <h1>Contact Me</h1>
      <p>If you'd like to get in touch, feel free to reach out through any of the methods below.</p>

      <ul className="contact-list">
        <li>
          <EmailIcon /> <a href="mailto:varun.s3301@gmail.com">varun.s3301@gmail.com</a>
        </li>
        <li>
          <PhoneIcon /> <a href="tel:+7204195395">+1 (720) 419-5395</a>
        </li>
        <li>
          <LinkedInIcon /> <a href="https://www.linkedin.com/in/varun-srinivasan-136316243/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>

      </ul>
    </div>
  );
}

export default Contact;
