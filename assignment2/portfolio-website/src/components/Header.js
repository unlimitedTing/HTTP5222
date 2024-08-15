import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Eric Liu</h1>
      <nav>
        <ul>
          <li><a href="/" aria-label="Home"><span className="deadnav">Home</span></a></li>
          <li><a href="/projects" aria-label="Project">Projects</a></li>
          <li><a href="/portfolio" aria-label="Portfolio">Portfolio</a></li>
          <li><a href="/blog" aria-label="Blog">Blog</a></li>
          <li><a href="/contact" aria-label="Contact">Contact</a></li>
        </ul>
      </nav>
      <button className="menu-icon" aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
