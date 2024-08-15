import React from 'react';

const Skill = ({ skill }) => {
  return (
    <div className="card h-100 text-center">
      <img src={skill.skill_icon} className="card-img-top" alt={skill.skill_name} style={{width: '60px', margin: 'auto'}} />
      <div className="card-body">
        <p className="card-text">{skill.skill_name}</p>
      </div>
    </div>
  );
};

export default Skill;
