import {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import "./components/Search.css";
import SearchBar from './components/SearchBar';
import SearchResultsList from './components/SearchResultsList';


function Search() {
  const [results, setResults] = useState([]);
  return (
      <div className="Search">
        <Header />
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
        </div> 
        <Footer />
      </div>
  );
}

export default Search;