import React from "react"
import { useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const SignupComponent = ({isOpen, onClose, app}) => {
    const [emailController, setEmail] = useState("");
    const [passwordController, setPassword] = useState("");
    // Your web app's Firebase configuration
    
    const auth = getAuth(app);
    const styling = {padding: "15px", 
        margin: "10px",
        height: "15px", 
        display: "flex",
        alignItems: "center"
      }

    const authenticate = () => {
        createUserWithEmailAndPassword(auth, emailController, passwordController)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    

    if (!isOpen) return null;
    return(
       <div
        style={{
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
            <div
                style={{
                    background: "white",
                    // height: 170,
                    // width: 240,
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
                    <button onClick={onClose}
                        style={{marginLeft: "auto", justifyContent:"flex-end"}}
                    >x</button>

                    <h2>Sign Up</h2>
                    <input
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            border: '2px solid #ccc',
                            padding: '10px',  // Adjust padding as needed
                            width: '100%',     // Adjust width percentage or pixels
                            boxSizing: 'border-box'  // Ensure padding and border are included in the width
                        }} 
                        placeholder="CPP Email"
                        value={emailController}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Password"
                        type='password'
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            border: '2px solid #ccc',
                            padding: '10px',  // Adjust padding as needed
                            width: '100%',     // Adjust width percentage or pixels
                            boxSizing: 'border-box'  // Ensure padding and border are included in the width
                          }} 
                        value={passwordController}
                        onChange={(p) => setPassword(p.target.value)}
                    />
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
                        onClick={authenticate}
                    >Sign Up</button>
            </div>
       </div>
    ); 
}


export default SignupComponent;