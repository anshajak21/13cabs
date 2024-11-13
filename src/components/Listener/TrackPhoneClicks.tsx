"use client";
import { useEffect } from 'react';


const TrackPhoneClicks = () => {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.closest('[href^="tel:"]')) {
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-DSFSD/SDFRTQ4W3RF34-g2545'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};

export default TrackPhoneClicks;
