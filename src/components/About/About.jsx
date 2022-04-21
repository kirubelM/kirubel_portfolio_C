import React from 'react';
import './About.css';
import AK_AWARD from '../../img/aboutme.png'
const About = () => {
  return <div className='a-main'>
    <div className="a-bg">      </div>
    <div className="about" id="about">
      <div className='about-text'>
        <h1 className="a-title">About Me</h1>
        <p className="a-subtitle">I'm a detail-oriented Web Developer with experience developing web applications
          for various projects and clients.
        </p>
        <p className="a-subtitle-2"> I'm currently seeking a Web development
          role to create solutions for real-world problems
          and grow as a full-stack web developer.
        </p>
        <div className="award">
          <img src={AK_AWARD} alt="" className="ak-image" />
          <p className='award-info'><strong>Al-Khwarizmi - </strong>Computer Science Honor Society </p>
        </div>
      </div>
    </div>
  </div>;
}


export default About;