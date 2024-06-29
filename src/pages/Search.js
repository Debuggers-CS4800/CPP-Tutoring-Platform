import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import "./components/Search.css";
import { FaSearch } from "react-icons/fa";
import { doc, collection, getDocs, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

function Search() {
  const [search, setSearch] = useState([]);
  const [users, setUsers] = useState([]);
  const collectionRef = collection(db, 'users');

  // get function
  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collectionRef);
      const items = [];
      querySnapshot.forEach((doc) => { items.push(doc.data()) });
      setUsers(items);
    };

    try {
      getUsers();
    } catch (error) {
      console.error(error);
    }
  });

  // from firestore documentation
  /*
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUsers(items);
    });
    
    //return () => unsubscribe();
  }); */
  
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
        {users
          .filter((item) => {
            if (item.isTutor) {
              return search.toString().toLowerCase() === '' ? 
              item :
              item.name.toString().toLowerCase().includes(search) || // allows for search of name, subject, or email
              item.subject.toString().toLowerCase().includes(search) ||
              item.email.toString().toLowerCase().includes(search);
            }
          })
          .map(item => (
            <div key={item.id} className="grid-item">
              <h2>{item.name}</h2>
              <p>Subject: {item.subject}</p>
              <p>Email: {item.email}</p>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Search;