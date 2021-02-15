import React from 'react';
import './ProjectCard.css';
import greg from '../../resources/grg.PNG';
import link from '../../resources/link-ico.png';
import git from '../../resources/git-ico.png';

const ProjectCard = (props) => (
  <div className="card-container">
    <img src={greg} alt=""/>
    <div className="card-desc">
      <h3 className="card-title">GREG TREMBLY</h3>
      <p className="card-description">Music producer client personal site</p>
      <ul className="tech-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>REACT</li>
        <li>NODEJS</li>
        <li>EXPRESS</li>
        <li>MULTER</li>
        <li>MONGODB</li>
      </ul>
      <div className="icons">
        <img src={link} alt=""/>
        <img src={git} alt=""/>
      </div>
    </div>
  </div>
);

export default ProjectCard;