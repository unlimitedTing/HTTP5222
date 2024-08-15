import React, { useState, useEffect } from 'react';
import Project from '../components/Project';
import Skill from '../components/Skill';
import Header from '../components/Header'; // New Header component
import Intro from '../components/Intro';   // New Intro component
import Footer from '../components/Footer'; // New Footer component

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetching project data
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data));

    // Fetching skills data
    fetch('/data/skills.json')
      .then(response => response.json())
      .then(data => setSkills(data));
  }, []);

  return (
    <div>
      {/* Add the Header component */}
      <Header />

      <main className="portfolio container">
        {/* Add the Intro section */}
        <Intro />

        {/* Projects Section */}
        <section className="projects">
          <h2 className="text-center my-4">My Projects</h2>
          <div className="row">
            {projects.map(project => (
              <div key={project.project_name} className="col-md-4 col-sm-6 mb-4">
                <Project project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills">
          <h2 className="text-center my-4">Skills</h2>
          <div className="row justify-content-center">
            {skills.map(skill => (
              <div key={skill.skill_name} className="col-md-2 col-sm-3 mb-3 text-center">
                <Skill skill={skill} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Add the Footer component */}
      <Footer />
    </div>
  );
};

export default Portfolio;
