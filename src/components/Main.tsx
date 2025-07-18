import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import VarunPic from '../assets/images/Varun.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={VarunPic} alt="Varun" />
        </div>
        <div className="content">
          <div className="social_icons">
            
            <a href="https://www.linkedin.com/in/varun-srinivasan-136316243/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Varun Srinivasan</h1>
          <p>Electrical Engineer</p>

          <div className="mobile_social_icons">
            
            <a href="https://www.linkedin.com/in/varun-srinivasan-136316243/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
