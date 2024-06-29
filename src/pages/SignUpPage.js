import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from '../firebase'; // updated the import path

const SignupComponent = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name,
        email,
        subject,
        createdAt: new Date(),
      });

      console.log('User profile created successfully');
      onClose(); // closes the sign-up modal after successful sign-up
    } catch (error) {
      console.error('Error creating user profile:', error);
    }
  };

  if (!isOpen) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
    }}>
      <div style={{
        background: "white",
        margin: "auto",
        padding: "7%",
        border: "2px solid #000",
        borderRadius: "10px",
        boxShadow: "2px solid black",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <button onClick={onClose} style={{ marginLeft: "auto", justifyContent: "flex-end" }}>x</button>
        <h2>Sign Up</h2>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: '10px',
            width: '100%',
            boxSizing: 'border-box',
            margin: '10px 0',
            border: '2px solid #ccc',
            borderRadius: "5px",
          }}
        />
        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{
            padding: '10px',
            width: '100%',
            boxSizing: 'border-box',
            margin: '10px 0',
            border: '2px solid #ccc',
            borderRadius: "5px",
          }}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '10px',
            width: '100%',
            boxSizing: 'border-box',
            margin: '10px 0',
            border: '2px solid #ccc',
            borderRadius: "5px",
          }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '10px',
            width: '100%',
            boxSizing: 'border-box',
            margin: '10px 0',
            border: '2px solid #ccc',
            borderRadius: "5px",
          }}
        />
        <button onClick={handleSignUp} style={{
          fontSize: "20px",
          padding: "10px 20px",
          margin: "10px 0",
          border: '2px solid #ccc',
          borderRadius: "5px",
          background: "#f8f8f8",
          cursor: "pointer",
        }}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignupComponent;
