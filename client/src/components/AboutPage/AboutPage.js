import React from 'react';
import './AboutPage.css';
import face from "../../resources/my-face.jpg";

const AboutPage = () => (
  <section id="about" className="about-page">
    <h2 className="about-title">Me</h2>
    <section className="desc-img">
      <section className="desc">
        <p className="personal">Just a front-end web developer from 
        <br />
        Baltimore, Maryland.
        </p>
        <p> I wrote my first lines of code when I was only 12, but have spent the better part of the last 4 years learning everything I can about the world of the web.</p>
      </section>
      
      <img src={face} alt="Self Portrait"/>
    </section>
    
    <section className="skills">
      skills
    </section>
  </section>
);

export default AboutPage;