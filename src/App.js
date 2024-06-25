import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Intro />
        <Project
          number="01"
          name="Tutor Name"
          description="Example Text"
          linkText="Details"
        />
        <hr />
        <Project
          number="02"
          name="Tutor Name"
          description="Example Text"
          linkText="Details"
        />
        <hr />
        <Project
          number="03"
          name="Tutor Name"
          description="Example Text"
          linkText="Details"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;