'use client';

import React, { useEffect, useState } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      setWidth(scrollPercentage);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="scroll-progress-bar" style={{ width: `${width}%` }}></div>
  );
};

export default ScrollProgressBar; 