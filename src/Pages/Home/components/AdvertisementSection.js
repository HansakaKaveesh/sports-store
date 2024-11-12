import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AdvertisementSection.css";

const ads = [
  {
    title: "Discover Our Latest Collection!",
    description: "Find exclusive deals and trends just for you.",
    image: "ad1.jpg", // Background image for ad 1
  },
  {
    title: "Summer Sale is Here!",
    description: "Get up to 50% off on selected items.",
    image: "ad2.jpg", // Background image for ad 2
  },
  {
    title: "Shop the New Arrivals",
    description: "Fresh styles for every season.",
    image: "ad3.jpg", // Background image for ad 3
  },
];

const AdvertisementSection = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000); // Change ad every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="advertisement-section">
      <AnimatePresence>
        {ads.map((ad, index) =>
          index === currentAdIndex ? (
            <motion.div
              key={index}
              className="ad-container"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{
                opacity: { duration: 0.5 },
                x: { type: "spring", stiffness: 100 },
              }}
              style={{ backgroundImage: `url(${ad.image})` }}
            >
              <motion.div
                className="ad-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.h1
                  className="ad-title"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {ad.title}
                </motion.h1>
                <motion.p
                  className="ad-description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {ad.description}
                </motion.p>
                <motion.button
                  className="shop-now-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Shop Now
                </motion.button>
              </motion.div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </section>
  );
};

export default AdvertisementSection;
