import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import coreData from "@/@core/data/common.json";

export default function MeWithCode() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8 }}
      className="me-with-code-container"
    >
      <div className="code-content">
        <Typewriter
          options={{
            strings: [
              `const Me = {`,
              `  role: "Software Developer",`,
              `  technologies: ${JSON.stringify(coreData.technologies, null, 2)},`,
              `  experience: ${JSON.stringify(coreData.experience, null, 2)},`,
              `  education: ${JSON.stringify(coreData.myEducation, null, 2)}`,
              `};`
            ],
            autoStart: true,
            loop: false,
            delay: 50,
            deleteSpeed: 30,
            cursor: "▋"
          }}
        />
      </div>
    </motion.div>
  );
}
