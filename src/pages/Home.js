import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Subject from './components/Subject';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import {Link} from "react-router-dom"

function Home() {
  return (
      <div className="Home">
          <Header />
            <main className="main-content">
              <Intro />
                <Subject
                  subject="Math"
                  description="Experienced educators with advanced degrees in mathematics and related fields. Our tutors specialize in college-level calculus, providing personalized instruction to help you master complex concepts and excel in your studies."
                  linkText="Find Math Tutors Here!"
                  subjectImage="https://www.hlmathemagic.com/storage/2019/10/153-1538667_lfsf-ort-upcoming-math-transparent-background-mathematics-illustration.png"
                />
              <hr />
                <Subject
                  subject="English/Arts"
                  description="Accomplished scholars specializing in English literature and the arts, bringing advanced degrees and extensive experience to support your mastery of literary analysis, writing skills, and creative projects."
                  linkText="Find English Tutors Here!"
                  subjectImage="https://www.ogdensd.org/uploaded/photos/Website_Icons/176-open-book.png"
                />
              <hr />
                <Subject
                  subject="Science/Engineering"
                  description="CPP provides knowledgeable educators with advanced degrees in science and engineering disciplines. Our tutors specialize in guiding students through complex scientific and engineering concepts, offering personalized support to excel in coursework and projects."
                  linkText="Find Science Tutors Here!"
                  subjectImage="https://lh3.googleusercontent.com/proxy/Ki7Ep4UGFLQUIYe3Q4BlL50qi7rqGiL9XMgDDJSRLsIc3aze82aPkIwCyjP3HkdQqJg9TPL57K8q8kZPk2Og46FMaulR7CrlaaKKA6plX4PECd3MCHoPgV5THdP2"
                />
              </main>
              <Footer />
      </div>
  );
}

export default Home;