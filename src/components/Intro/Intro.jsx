import React, { useEffect, useRef } from 'react'
import { init } from 'ityped';
import './Intro.css';
import { loadFull } from "tsparticles";
import BgParticles from '../BgParticles/BgParticles';
import IntroRight from '../IntroRight/IntroRight';

const Intro = () => {
  //Background animation particle ts
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  //End
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Web Designer", "Finance Enthusiast"]
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <BgParticles className="bg-animation" height={"100px"} />

      <div className="intro-left">
        <div className="i-left-wrapper">
          <div className="wrapper">
            <h2>Hello, My name is </h2>
            <h1>Kirubel</h1>
            <h3 >I'm a <span className="titles" ref={textRef}></span></h3>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <IntroRight />
      </div>

    </div>
  )
}

export default Intro;