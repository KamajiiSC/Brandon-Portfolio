import React from 'react';
import Github from '../../resources/github-logo.png'

const GalleryItem = (props) => (
      <div id="gallery-item">
        <div className="overlay">
        <a target="_blank" href={props.webLink}>
          <img src={props.imgSrc} alt="Preview of website" id="proj-prev"/>
         </a>
         <p id="para">{props.title}</p>
        </div>
        <div id='flex-container'>
          <h3> {props.title} </h3>
          <a target="_blank" href={props.githubLink}>
            <img src={Github} alt="git logo" id="github-logo"/>    
          </a>
          <p> {props.description} </p>          
        </div> 
      </div>
);

export default GalleryItem;