import React from 'react';
import './Project.css';

function Project({ number, name, description, linkText }) {
  return (
    <section className="project">
      <div className="project-info">
        <h2>{number} / {name}</h2>
        <p>{description}</p>
        <a href="#">{linkText} &#x2192;</a>
      </div>
      <div className="project-image"></div>
    </section>
  );
}

export default Project;