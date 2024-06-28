import {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import "./components/Search.css";
import SearchBar from './components/SearchBar';
import SearchResultsList from './components/SearchResultsList';


function Search() {
  const [results, setResults] = useState([]);
  
  // This is just a stand-in for data
  const items = [
    { id: 1, title: 'Arvind dakrishman', subject: 'Masters in Mathematics',
      MoI: 'Online', certification: 'Bachelors in Mathematics', 
      description: 'I have been tutoring for 20 years and all my tutees always get all As.' },
    { id: 2, title: 'Tutor 2', subject: 'subject',
      MoI: "Online", certification: 'Education',
      description: 'text' },
    { id: 3, title: 'Tutor 3', subject: 'subject',
      MoI: "Online", certification: 'Education',
      description: 'text' },
    { id: 4, title: 'Tutor 4', subject: 'subject',
      MoI: "Online", certification: 'Education',
      description: 'text' },
    { id: 5, title: 'Tutor 5', subject: 'subject',
      MoI: "Online", certification: 'Education',
      description: 'text' },
  ];
  return (
    <div className="Search">
      <Header />
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div> 
      <div className="grid-container">
        {items.map(item => (
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