import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase'; // updated the import path
import SignupComponent from './SignUpPage';
import Footer from './components/Footer';
import Header from './components/Header';

function Login() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const authenticate = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(userCredential);
        
        // fetch user name from Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userName = userDoc.data().name;
          localStorage.setItem("userName", userName); // then store user's name in localStorage
        }

        navigate("/home"); // redirects to home page
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.error(errorMessage);
      });
  }

  return (
    <div className="Login" style={{
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "8%",
    }}>
      <Header />
      <h1>Please Log In or Register a New Account</h1>
      <input
        placeholder="CPP Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: '10px',
          width: '30%',
          boxSizing: 'border-box',
          margin: '10px 0',
          border: '2px solid #ccc',
          borderRadius: '4px'
        }}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: '10px',
          width: '30%',
          boxSizing: 'border-box',
          margin: '10px 0',
          border: '2px solid #ccc',
          borderRadius: '4px'
        }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="button-container" style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <button onClick={authenticate} style={{
          fontSize: "20px",
          padding: "10px 20px",
          margin: "0 5px",
          border: '2px solid #ccc',
          borderRadius: "5px",
          background: "#f8f8f8",
          cursor: "pointer",
        }}>Log In</button>
        <span style={{ margin: "0 5px", alignSelf: "center", fontSize: "18px", color: "#666" }}> or </span>
        <button onClick={() => setOpen(true)} style={{
          fontSize: "20px",
          padding: "10px 20px",
          margin: "0 5px",
          border: '2px solid #ccc',
          borderRadius: "5px",
          background: "#f8f8f8",
          cursor: "pointer",
          display: "flex",
        }}>Sign Up</button>
        <SignupComponent isOpen={open} onClose={() => setOpen(false)} />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
