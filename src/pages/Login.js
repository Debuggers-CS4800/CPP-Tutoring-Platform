import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SignupComponent from './SignUpPage';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login() 
{
  const [open, setOpen] = useState(false);
  const [emailController, setEmail] = useState("");
  const [passwordController, setPassword] = useState("");
  const firebaseConfig = {
    apiKey: "AIzaSyB-jsQGHmxCDjf9k0SWMrjsS6R1E9gs4QI",
    authDomain: "cs4800-cpp-tutorplatform.firebaseapp.com",
    projectId: "cs4800-cpp-tutorplatform",
    storageBucket: "cs4800-cpp-tutorplatform.appspot.com",
    messagingSenderId: "692396275639",
    appId: "1:692396275639:web:7bd1c939063bdda32b1a32"
  };

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const authenticate = () => {
    signInWithEmailAndPassword(auth, emailController, passwordController)
      .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  const styling = {
    padding: "15px", 
    margin: "10px",
    height: "15px", 
    display: "flex",
    alignItems: "center"
  }
  return (
    <div className="Login"
      style={{
        // backgroundImage: `url(https://livelymindstutoring.com/wp-content/uploads/2018/02/Tutoring-picture.jpeg)`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // minHeight: '100vh', // Ensure the background covers the entire viewport height
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "8%", //adjust if adding background Image
      }}>
      <Header />
      <h1>
        Please Log In or Register a New Account
      </h1>
      <input
          style={{
            // color: "black",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: '2px solid #ccc',
            padding: '10px',  // Adjust padding as needed
            width: '30%',     // Adjust width percentage or pixels
            boxSizing: 'border-box'  // Ensure padding and border are included in the width
          }} 
          placeholder="CPP Email"
          value={emailController}
          onChange={(e) => setEmail(e.target.value)}
      />
      <input
          placeholder="Password"
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: '2px solid #ccc',
            padding: '10px',  // Adjust padding as needed
            width: '30%',     // Adjust width percentage or pixels
            boxSizing: 'border-box'  // Ensure padding and border are included in the width
          }} 
          value={passwordController}
          type='password'
          onChange={(p) => setPassword(p.target.value)}
      />
      <div className="button-container" style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <button
          style={{
            fontSize: "20px",
            padding: "10px 20px",
            margin: "0 5px",
            border: '2px solid #ccc',
            borderRadius: "5px",
            background: "#f8f8f8",
            cursor: "pointer",
          }}
          onClick={authenticate}
        >
        Log In
        </button>
        <span style={{ margin: "0 5px", alignSelf: "center", fontSize: "18px", color: "#666", fontSize: "20px", }}> or </span>
        <button 
          style={{
            fontSize: "20px",
            padding: "10px 20px",
            margin: "0 5px",
            border: '2px solid #ccc',
            borderRadius: "5px",
            background: "#f8f8f8",
            cursor: "pointer",
            display: "flex",
          }}
          onClick={() => setOpen(true)}
        >
          Sign Up
        </button>
        <SignupComponent isOpen={open} onClose={() => setOpen(false)} app={app}></SignupComponent>
        <Footer />
      </div>

      
    </div>
  );
}

export default Login;