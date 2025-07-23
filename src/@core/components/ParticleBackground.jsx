
"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React from "react";

// eslint-disable-next-line react/prop-types
const CustomParticle = ({ isDarkMode }) => {
  const [init, setInit] = useState(false);
  // This should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // const particlesLoaded = async (container) => {
  //   console.log(container);
  // };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: isDarkMode ? "#121212" : "#ECEFF1", // Change background based on theme
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            lineLinked: {
              opacity: 0.5,
            },
          },
          bubble: {
            distance: 200,
            size: 10,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      particles: {
        color: {
          value: isDarkMode ? "#607D8B" : "#ADD8E6", // Optional: also adjust particle color
        },
        links: {
          color: isDarkMode ? "#607D8B" : "#ADD8E6", // Optional: also adjust links color
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 600,
          },
        },
        opacity: {
          value: 0.2,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 8,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        lineLinked: {
          enable: true,
          distance: 150,
          color: isDarkMode ? "#78909C" : "#546E7A", // Optional: also adjust line color
          opacity: 0.2,
          width: 1,
        },
      },
      detectRetina: true,
    }),
    [isDarkMode] // Add isDarkMode to dependency array
  );

  if (init) {
    return <Particles options={options} />;
  }

  return <></>;
};

export default CustomParticle;
