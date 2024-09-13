import React, { useState, useEffect } from 'react';
import './AdvertisementSection.css';

const ads = [
  { id: 1, img: 'homepage-concept-with-search-bar (1).jpg', alt: 'Ad 1' },
  { id: 2, img: 'software-developer-using-terminal-window-app-laptop-learning-code-new-user-interface-program-developing-cloud-computing-online-server-with-firewall-security-css-html-script.jpg', alt: 'Ad 2' },
  { id: 3, img: 'homepage-concept-with-search-bar.jpg', alt: 'Ad 3' }
];

const AdvertisementSection = () => {
  const [currentAd, setCurrentAd] = useState(0);

  // Cycle through ads every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="advertisement-section">
      <div className="ad-slide">
        <img src={ads[currentAd].img} alt={ads[currentAd].alt} />
      </div>
    </div>
  );
};

export default AdvertisementSection;
