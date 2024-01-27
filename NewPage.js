// HomePage.js

import React from 'react';
import './header.css'; // Import CSS file for styling

const NewPage = () => {
  return (
    <div className="home-page">
      {/* Create Avatar Section */}
      <div className="section">
        <div className="section-title">
          <iconpark-icon className="icon" name="icon-cat-createavatar" theme="filled" size="20" icon-id=""></iconpark-icon>
        </div>
        <div className="box active" style={{ backgroundImage: 'url("https://static.heygen.ai/heygen/home/home-any-active.png")' }}>
          <img className="icon" src="https://static.heygen.ai/heygen/home/home-ia-icon.png" alt="Instant Avatar Icon" />
          <div className="content">
            <p className='icon-content'>Instan Avatar</p>
            <div className="subTitle">Get your digital twin in minutes!</div>
          </div>
          <img className="arrow" src="https://app.heygen.com/assets/home-arrow-down-2b264fd3.svg" alt="Arrow Down" />
        </div>
        <div className="box" style={{ backgroundImage: 'url("https://static.heygen.ai/heygen/home/home-ia-bg.png")' }}>
          <img className="icon" src="https://static.heygen.ai/heygen/home/home-tp-icon.png" alt="Photo Avatar Icon" />
          <div className="content">
            <p className='icon-content'>Photo Avatar</p>
            <div className="subTitle">Animate your photo with text</div>
          </div>
        </div>
      </div>

      {/* Grey separator line */}
      <div className="separator"></div>

      {/* Create Video Section */}
      <div className="section">
        <div className="section-title">
          <iconpark-icon className="icon" name="icon-cat-createvideo" theme="filled" size="20" icon-id=""></iconpark-icon>
        </div>
        <div className="box" style={{ backgroundImage: 'url("https://static.heygen.ai/heygen/home/home-template-bg.png")' }}>
          <img className="icon" src="https://static.heygen.ai/heygen/home/home-template-icon.png" alt="Template Icon" />
          <div className="content">
            <p className='icon-content'>Template</p>
            <div className="subTitle">Start from a template</div>
          </div>
        </div>
        <div className="box" style={{ backgroundImage: 'url("https://static.heygen.ai/heygen/home/home-aiscript-bg.png")' }}>
          <img className="icon" src="https://static.heygen.ai/heygen/home/home-aiscript-icon.png" alt="AI Script Icon" />
          <div className="content">
            <p className='icon-content'>AI Script</p>
            <div className="subTitle">Start from AI script Generation</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPage;
