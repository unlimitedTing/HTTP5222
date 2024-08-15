import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="card h-100 d-flex flex-column">
      <img 
        src={project.project_thumbnail} 
        className="card-img-top" 
        alt={project.project_name} 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
      />
      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title font-weight-bold">{project.project_name}</h5>

        <p className="card-text">{project.project_description}</p>

        <p><strong>Languages:</strong> {project.project_languages}</p>


        <a href={project.project_url} className="btn btn-primary mt-auto align-self-end" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Project;
