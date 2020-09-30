import React from 'react';
import './GalleryItem.css';

const GalleryItem = (props) => (
  <div className="gallery-item">
    <img className="project-img" src={props.image} alt="Image of project"/>
    <div className="content">
      <h3 className="title">{props.title}</h3>
      <a href={props.github} target="_blank" className="github-a">
        <img className="github-img" alt="Github logo" />
      </a>
      <p className="description">{props.description}</p>
    </div>
  </div>
);

export default GalleryItem;