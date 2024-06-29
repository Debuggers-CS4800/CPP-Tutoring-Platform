import React from 'react';
import {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import "./components/Search.css";
import {FaSearch} from "react-icons/fa"

function Search() {
  const [search, setSearch] = useState([]);

  // This is just a stand-in for data
  const items = [
    { id: 1, title: 'Arvind dakrishman', subject: 'Masters in Mathematics',
      MoI: 'Online', certification: 'Bachelors in Mathematics', 
      description: 'I have been tutoring for 20 years and all my tutees always get all As.',
      accountType: 'tutor' },
    { id: 2, title: 'Tutor 2', subject: 'science',
      MoI: "Online", certification: 'Education',
      description: 'text', accountType: 'tutor' },
    { id: 3, title: 'Science', subject: 'subject',
      MoI: "Online", certification: 'Education',
      description: 'text', accountType: 'tutor' },
    { id: 4, title: 'Tutor 4', subject: 'subject',
      MoI: "Online", certification: 'Education',
      description: 'text', accountType: 'tutor' },
    { id: 5, title: 'Student 5', subject: 'subject',
      MoI: "Online", certification: 'Education',
      description: 'text', accountType: 'student' },
  ];

  


  return (
    <div className="Search">
      <Header />
      <div className="search-bar-container">
        <div className="input-wrapper">
          <FaSearch id="search-icon" />
    			<input 
            placeholder="Type to search..." 
            onChange={(e) => setSearch(e.target.value)}/>
  		  </div>	
      </div> 
      <div className="grid-container">
        {items
          .filter((item) => {
            return search.toString().toLowerCase() === '' 
              ? item.accountType.toString().toLowerCase().includes('tutor')
              : (item.title.toString().toLowerCase().includes(search) ||
              item.subject.toString().toLowerCase().includes(search)) &&
              item.accountType.toString().toLowerCase().includes('tutor');
          })
          .map(item => (
            <div key={item.id} className="grid-item">
              <h2>{item.title}</h2>
              <p>Subject: {item.subject}</p>
              <p>Mode of Instruction: {item.MoI}</p>
              <p>Certification: {item.certification}</p>
              <p>Description: {item.description}</p>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Search;