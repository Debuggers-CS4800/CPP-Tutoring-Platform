import React from 'react';
import './Subject.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Subject({ subject, description, linkText, subjectImage, linkTo }) {
  return (
    <section className="subject">
      <div className="subject-info">
        <h2>{subject}</h2>
        <p>{description}</p>
        <Link to={linkTo}>&#x2192; {linkText}</Link>
      </div>
      <div className="subject-image">
        <img src={subjectImage} alt={subject} />
      </div>
    </section>
  );
}

export default Subject;