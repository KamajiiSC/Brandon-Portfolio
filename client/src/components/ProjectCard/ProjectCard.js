import React from 'react';
import './ProjectCard.css';
import link from '../../resources/link-ico.png';
import git from '../../resources/git-ico.png';

const ProjectCard = (props) => (
  <div className="card-container">
    <img className="card-img" src={props.img} alt="producer"/>
    <div className="card-desc">
      <h3 className="card-title">{props.title}</h3>
      <div className="desc-contianer">
        <p className="card-description">{props.description}</p>
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
      </div>
      <div className="icons">
        <img src={git} alt=""/>
        <img src={link} alt=""/>     
      </div>
    </div>
  </div>
);

export default ProjectCard;