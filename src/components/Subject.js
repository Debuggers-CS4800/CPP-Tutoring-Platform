import React from 'react';
import './Subject.css';

function Subject({ subject, description, linkText, subjectImage }) {
  return (
    <section className="subject">
      <div className="subject-info">
        <h2>{subject}</h2>
        <p>{description}</p>
        <a href="#">&#x2192; {linkText} </a>
      </div>
      <div className="subject-image">
        <img src={subjectImage} alt={subject} />
      </div>
    </section>
  );
}

export default Subject;