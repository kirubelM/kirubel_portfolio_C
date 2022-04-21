import React, { useState } from 'react';
import './NavBar.css';
import KM_LOGO from '../../img/KM_logo_white.png'
import Resume from '../../img/Kirubel_Mognehode_Resume.pdf'
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = () => {
    setIsOpen(!isOpen);
    props.handleNavClick()
    window.scroll({
      // top: 0,
    });
  }
  const closeNav = () => {
    // setIsOpen(!isOpen);
    // props.handleNavClick()

  }
  return (
    <div className={`navbar ${isOpen && "open"}`} >
      <div className="left-nav">
        <a href="#intro"> <img src={KM_LOGO} alt="KM Logo" id="logo-img"></img></a>
      </div>
      <div className={`nav-items ${isOpen && "open"}`} onClick={closeNav}>
        <a href="#intro" >Intro</a>
        <a href="#about">About</a>
        <a href="#tools">Tools</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href={Resume} target="_blank">Resume</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={handleNavClick}>
        <div className="bar">

        </div>
      </div>
    </div >
  );
}

export default NavBar;