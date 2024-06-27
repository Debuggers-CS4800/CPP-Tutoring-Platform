import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SignupComponent from './SignUpPage';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login() {
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

  const styling = {padding: "15px", 
    margin: "10px",
    height: "15px", 
    display: "flex",
    alignItems: "center"
  }
  return (
      <div className="Login"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Header />
        <h1>Log In</h1>
        <input
            style={styling} 
            placeholder="CPP Email"
            value={emailController}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            placeholder="Password"
            style={styling}
            value={passwordController}
            type='password'
            onChange={(p) => setPassword(p.target.value)}
        />
        <button 
            style={styling}
            onClick={authenticate}
            >
          Log In
        </button>
        <span>or</span>
        <button 
          style={styling}
          onClick={() => setOpen(true)}
          >
            Sign Up</button>
          <SignupComponent isOpen={open} onClose={() => setOpen(false)} app={app}></SignupComponent>

        <Footer />
      </div>
  );
}

export default Login;