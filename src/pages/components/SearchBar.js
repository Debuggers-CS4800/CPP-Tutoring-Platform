import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { db } from '../../firebase'; // updated the import path
import './Search.css';

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    const q = query(collection(db, "users"), where("name", ">=", value), where("name", "<=", value + "\uf8ff"));
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map(doc => doc.data());
    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input 
        placeholder="Type to search..." 
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>	
  );
};

export default SearchBar;
