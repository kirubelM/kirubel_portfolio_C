import React, { useState, useContext } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ThemeContext } from "../../context";


const BgParticles = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  //Background animation particle ts
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  //End
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{

          fpsLimit: 600,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 1,
              },
            },
          },

          particles: {
            color: {
              value: darkMode ? "#fff" : "#222",
            },
            links: {
              color: darkMode ? "#fff" : "#222",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "right",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 20,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              // type: "circle",
              type: "image",
              "image": {
                "src": "https://miro.medium.com/max/750/1*YHgUQU-5XqWQ3R36hGAX5Q.png"
              }
            },
            size: {
              value: { min: 5, max: 20 },
            },
          },
          detectRetina: true,
        }}
      />
      {/* //End */}
    </div>
  );
}

export default BgParticles;