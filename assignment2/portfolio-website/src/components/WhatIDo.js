import React from 'react';

const WhatIDo = () => {
  return (
    <section id="what-i-do">
      <h2>What I do</h2>
      <p>Build and maintain websites, <strong>full stack dev.</strong> My motto is Beauty and function in equal measure as priority.</p>
      <div className="projects">
        <article className="project-item">
          <h3>Nextjs Starter</h3>
          <p>A dead simple starter for Next.js projects.</p>
          <div className="project-icons">
            <div className="tailwind-icon icon">
              <img src="images/Tailwind-icon.png" alt="Tailwind icon" />
            </div>
            <div className="react-icon icon">
              <img src="images/React-icon.png" alt="React icon" />
            </div>
          </div>
        </article>
        <article className="project-item">
          <h3>Frontend Kit</h3>
          <p>A simple HTML5 boilerplate project including setup for minified CSS, HTML, and SEO settings.</p>
          <div className="project-icons">
            <div className="tailwind-icon icon">
              <img src="images/Tailwind-icon.png" alt="Tailwind icon" />
            </div>
            <div className="react-icon icon">
              <img src="images/React-icon.png" alt="React icon" />
            </div>
          </div>
        </article>
        <article className="project-item">
          <h3>Frontend UI Design</h3>
          <p>A simple React project focused on frontend UI design.</p>
          <div className="project-icons">
            <div className="tailwind-icon icon">
              <img src="images/Tailwind-icon.png" alt="Tailwind icon" />
            </div>
            <div className="react-icon icon">
              <img src="images/React-icon.png" alt="React icon" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhatIDo;
