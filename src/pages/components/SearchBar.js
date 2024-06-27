import React, {useState} from 'react';
import './Search.css';
import {FaSearch} from "react-icons/fa"

function SearchBar({ setResults }) {
  const [input, setInput] = useState("")

  const fetchData = (value) => {
    fetch("https://cs4800-cpp-tutorplatform-default-rtdb.firebaseio.com/.json")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  };

	return(
		<div className="input-wrapper">
      <FaSearch id="search-icon" />
			<input 
        placeholder="Type to search..." 
        value={input}
        onChange={(e) => handleChange(e.target.value)}/>
		</div>	
	);
};

export default SearchBar;