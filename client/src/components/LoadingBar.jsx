import React, { useEffect } from 'react';
import './LoadingBar.css';

const LoadingBar = () => {
  useEffect(() => {
    const loadingBar = document.getElementById('loading-bar');

    // Start the loading animation
    setTimeout(() => {
      loadingBar.style.width = '70%';
    }, 500);

    // Complete the loading animation
    setTimeout(() => {
      loadingBar.style.width = '100%';
    }, 1500);

    // Hide the loading bar after animation is complete
    setTimeout(() => {
      loadingBar.style.opacity = '0';
    }, 2000);

    // Remove the loading bar from DOM (optional)
    setTimeout(() => {
      loadingBar.style.display = 'none';
    }, 2500);
  }, []);

  return (
    <div id="loading-bar" className="fixed top-0 left-0 w-0 h-[3px] bg-[#EC7063] z-50 transition-width"></div>
  );
};

export default LoadingBar;
