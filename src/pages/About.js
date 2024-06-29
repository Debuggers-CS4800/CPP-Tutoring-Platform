import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './components/About.css';

function About() {
  return (
    <div className="About">
      <Header />
      <main className="main-content">

        <h1>About Our CPP Tutoring Platform</h1>

        <p>
          Welcome to our CPP Tutoring Platform, this is going to be your solution to find and connect with
          tutors at Cal Poly Pomona. Our platform's goal is to simplify the process of finding the
          right and most convenient tutor for a students' specific course needs.
        </p>

        <h2>Why Choose Us?</h2>

        <ul>
          <li><strong>Centralized Tutor Listings:</strong> You can easily search for tutors based upon the subject or course.</li>
          <li><strong>User Feedback:</strong> You can read the feedback from other students to find the best optimal tutor for your needs!</li>
          <li><strong>Flexible Scheduling:</strong> You can communictae with tutors directly to find the best convenient time or place!</li>
          <li><strong>Comprehensive Profiles:</strong> You can access other detailed tutor profiles, including qualifications and avaliability!</li>
        </ul>

        <h2>Our Team Mission</h2>

        <p>
          Our overall team mission is to provide easy access and a user-friendly platform that connects students
          with the best qualified tutors to better their learning experience and academic goals. We are
          to eliminate the difficulty of searching for tutors by offering the best and most convenient time
          and place. We are also to give access to tutor listings, user feedback and flexible scheduling options!
        </p>

        <h2>The Key Features</h2>

        <ul>
          <li><strong>Search and Filter:</strong> Find tutors based on your specific needs and preferences </li>
          <li><strong>Account Management:</strong> Create user accounts for both tutees and tutors </li>
          <li><strong>Account Management:</strong>Manage user accounts for both tutees and tutors <strong>*Feature still in development*</strong> </li>
          <li><strong>Messaging System:</strong> Communicate directly with tutors through our built-in messaging system <strong>*Feature still in development*</strong></li>
          <li><strong>Booking Sessions:</strong> Book tutoring sessions directly from the platform <strong>*Feature still in development*</strong></li>
          <li><strong>Notifications:</strong> Receive notifications for booking confirmations and session reminders <strong>*Feature still in development*</strong></li>
        </ul>

        <h2>Contact Us</h2>

        <p>
          If you have any questions, please contact us at <a href="mailto:support@cpp-tutoring.com">support@cpp-tutoring.com</a>.
        </p>

      </main>
      <Footer />
    </div>
  );
}

export default About;
