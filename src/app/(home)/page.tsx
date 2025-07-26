'use client';
import React, { useRef, useEffect, useState, useContext } from "react";
import NavMenu from "./components/NavBar";
import AboutMe from "./components/About";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import MySkill from "./components/MySkills";
import ContactMe from "./components/ContactMe";
import SideProjects from "./components/SideProjects";
import CustomParticle from "@/@core/components/ParticleBackground";
import { Fade } from "react-awesome-reveal";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { ThemeProvider, ThemeContext } from "@/context/ThemeContext";


// Memoized CustomParticle component to prevent re-renders during scrolling
const MemoizedParticle = React.memo(CustomParticle);

// Create a separate component for the main content
const PortfolioContent: React.FC = () => {
  // Create references for each section
  const aboutRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const skillsRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const experienceRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const educationRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const contactMeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const [activeSection, setActiveSection] = useState<string>("about");

  // Now this will correctly get the value from the parent ThemeProvider
  const { isDarkMode } = useContext(ThemeContext);

  // Function to scroll to the specified section
  const scrollToSection = (section: string) => {
    const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      about: aboutRef,
      skills: skillsRef,
      experience: experienceRef,
      education: educationRef,
      contactMe: contactMeRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  // Detect which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      const sections = [
        { id: "about", ref: aboutRef },
        { id: "skills", ref: skillsRef },
        { id: "experience", ref: experienceRef },
        { id: "education", ref: educationRef },
        { id: "contactMe", ref: contactMeRef },
      ];

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Position the particle background with fixed position, behind all content
  return (
    <div className="portfolio-container">
      <ScrollProgressBar />
      {/* The key prop ensures re-rendering when theme changes */}
      <MemoizedParticle
        isDarkMode={isDarkMode}
        key={isDarkMode ? "dark" : "light"}
      />

      {/* Render the navigation menu */}
      <NavMenu onMenuClick={scrollToSection} activeSection={activeSection} />

      {/* Section Components */}
      <div className="full-width-container">
        <div ref={aboutRef} className="section-container" id="about-section">
          <Fade direction="up" triggerOnce>
            <div className="row">
              <div className="col-md-12">
                <AboutMe contactMeRef={contactMeRef} />
              </div>
              {/* <div className="col-md-5">
                <MeWithCode />
              </div> */}
            </div>
          </Fade>
        </div>

        <div ref={skillsRef} className="section-container" id="skills-section">
          <Fade direction="up" triggerOnce>
            <ProfessionalSummary />
          </Fade>
        </div>

        <div
          ref={experienceRef}
          className="section-container"
          id="experience-section"
        >
          <Fade direction="up" triggerOnce>
            <Experience />
            <SideProjects />
          </Fade>
        </div>

        <div
          ref={educationRef}
          className="section-container"
          id="education-section"
        >
          <Fade direction="up" triggerOnce>
            <Education />
          </Fade>
        </div>

        <div className="section-container" id="myskill-section">
          <Fade direction="up" triggerOnce>
            <MySkill />
          </Fade>
        </div>

        <div
          ref={contactMeRef}
          className="section-container"
          id="contact-section"
        >
          <Fade direction="up" triggerOnce>
            <ContactMe />
          </Fade>
        </div>
      </div>
    </div>
  );
};

// Main component that wraps the content with ThemeProvider
const SinglePageApp: React.FC = () => {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default SinglePageApp;
