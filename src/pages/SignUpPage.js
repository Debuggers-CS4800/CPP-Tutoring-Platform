import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from '../firebase'; // Updated import path

const SignupComponent = ({ isOpen, onClose }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [experience, setExperience] = useState("");
  const [mode, setMode] = useState("");
  const [bio, setBio] = useState("");
  const [isTutor, setIsTutor] = useState(false);
  const [tutorProf, setTutorProf] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      try {
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          name,
          email,
          //subject,
          createdAt: new Date(),
        });

        console.log('User profile created successfully');

      } catch (firestoreError) {
        console.error('Error creating user profile in Firestore:', firestoreError);
        setError("Failed to create user profile in Firestore.");
      }

      onClose(); // closes the sign-up modal

      setSuccess(true); // shows the success popup

    } catch (authError) {
      console.error('Error creating user:', authError);
      setError(authError.message);
    }
  };

  const createTutor = async () =>{ //triggered after finishing tutor profile
    setTutorProf(true);
    const docRef = doc(collection(db, "tutors"));
    try {
      const docRef = await addDoc((collection(db, "tutors")), {
        name,
        email,
        subject,
        experience,
        mode,
        bio
      });
      console.log("Document written with ID: ", docRef.id);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isOpen && (
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
                margin: '10px 0'
              }}
            />
            {/* <input
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={{
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box',
                margin: '10px 0'
              }}
            /> */}
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box',
                margin: '10px 0'
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
                margin: '10px 0'
              }}
            />
            <div className="Tutor" style={{
                display:"flex", 
                flexDirection:"row", 
                alignItems:"center",}}>
                <input type="checkbox" value={isTutor} name="tutor"onChange={() => setIsTutor(true)}/>
                <label htmlFor="tutor">Tutor</label>

                <input type="checkbox" value={isTutor} name="tutee" onChange={() => setIsTutor(false)}/>
                <label htmlFor="tutee">Student</label>
            </div>
            <button onClick={handleSignUp} style={{
              fontSize: "20px",
              padding: "10px 20px",
              margin: "10px 0",
              border: '2px solid #ccc',
              borderRadius: "5px",
              background: "#f8f8f8",
              cursor: "pointer",
            }}>Sign Up</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      )}

      {(success && !isTutor) && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center"
        }}>
          <p>Successfully Signed Up!</p>
          <button onClick={() => setSuccess(false)} style={{
            fontSize: "20px",
            padding: "10px 20px",
            marginTop: "10px",
            border: '2px solid #ccc',
            borderRadius: "5px",
            background: "#f8f8f8",
            cursor: "pointer",
          }}>Ok</button>
        </div>
      )}
        {/* tutor profile setup */}
      {(isTutor && !tutorProf) && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center"}}> 
          <h2>Tutor Profile Setup</h2>
          <input
              placeholder="Subjects"
              onChange={(e) => setSubject(e.target.value)}
              style={{
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box',
                margin: '10px 0'
              }}
            />
            <input
              placeholder="Experience/Qualifications"
              onChange={(e) => setExperience(e.target.value)}
              style={{
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box',
                margin: '10px 0'
              }}
            />
            <input
              placeholder="Mode of Instruction/Location"
              onChange={(e) => setMode(e.target.value)}
              style={{
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box',
                margin: '10px 0'
              }}
            />
            <input
              placeholder="Bio"
              onChange={(e) => setBio(e.target.value)}
              style={{
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box',
                margin: '10px 0'
              }}
            />

          <button onClick={createTutor} style={{
            fontSize: "20px",
            padding: "10px 20px",
            marginTop: "10px",
            border: '2px solid #ccc',
            borderRadius: "5px",
            background: "#f8f8f8",
            cursor: "pointer",
          }}>Finish</button>
        </div>)}

    </>
  );
};

export default SignupComponent;
