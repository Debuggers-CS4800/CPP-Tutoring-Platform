import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import "./components/Search.css";
import { FaSearch } from "react-icons/fa";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function Search() {
  const [search, setSearch] = useState([]);
  const [tutors, setTutors] = useState([]);
  const collectionRef = collection(db, 'tutors');

  // get function
  useEffect(() => {
    const getTutors = async () => {
      const querySnapshot = await getDocs(collectionRef);
      const items = [];
      querySnapshot.forEach((doc) => { items.push(doc.data()) });
      setTutors(items);
    };

    try {
      getTutors();
    } catch (error) {
      console.error(error);
    }
  });

  const Divider = () => {
    return (
        <hr style={{ borderTop: "1px solid lightgrey" }}></hr>
    );
  };

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
        {tutors
          .filter((item) => {
            if (item.name.toString().toLowerCase() != '' ) {
              return search.toString().toLowerCase() === '' ? 
              item :
              item.name.toString().toLowerCase().includes(search) || // allows for search of name, subject, mode or email
              item.subject.toString().toLowerCase().includes(search) ||
              item.email.toString().toLowerCase().includes(search) ||
              item.mode.toString().toLowerCase().includes(search);
            }
          })
          .map(item => (
            <div key={item.id} className="grid-item">
              <h2>{item.name}</h2>
              <Divider />
              <p><b>Subject: </b>{item.subject}</p>
              <p><b>Experience: </b>{item.experience}</p>
              <p><b>Bio: </b>{item.bio}</p>
              <p><b>Email: </b>{item.email}</p>
              <p><b>Mode: </b>{item.mode}</p>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Search;