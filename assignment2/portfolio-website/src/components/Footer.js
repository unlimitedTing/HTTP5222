import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>©Eric Liu, 2024, All rights reserved</p>
      <div className="footer-icons">
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub">
          <img src="images/github.png" alt="GitHub" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn">
          <img src="images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit my Twitter">
          <img src="images/twitter.png" alt="Twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
