"use client"
import { useEffect, useState } from 'react';


export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0, // <--- 0 instead of undefined
    height: 0, // <--- 0 instead of undefined
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};