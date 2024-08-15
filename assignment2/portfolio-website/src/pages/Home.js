// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import Skill from '../components/Skill';

const Home = () => {
    const [skills, setSkills] = useState([]);

  useEffect(() => {


    // Fetching skills data
    fetch('/data/skills.json')
      .then(response => response.json())
      .then(data => setSkills(data));
  }, []);
    return (
        <div>
            <Intro />
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
        </div>
    );
};

export default Home;
