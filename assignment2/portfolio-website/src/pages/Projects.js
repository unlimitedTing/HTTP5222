import React, { useState, useEffect } from 'react';
import Project from '../components/Project';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetching project data
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div>
       <main className="portfolio container">
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
      </main>
    </div>
  );
};

export default Projects;
