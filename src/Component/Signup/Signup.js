import "bootstrap/dist/css/bootstrap.min.css";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { app } from "../../firebase.init";
import useFirebase from "../hooks/useFirebase";
import './Signup.css';


const Signup = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passError, setPasserror] = useState("");
    const [emailError, setEmailerror] = useState("");

    const { signInWithGoogle } = useFirebase();
    const auth = getAuth(app);

    const handleSubmit = (event) => {
        event.preventDefault();
        if ((password.length < 6) || (!/^[0-9a-zA-Z]+$/.test(password)) ){
            setPasserror("Password must be at least 6 characters and contain only letters and numbers");
            return;
        };
        setPasserror("");

        if (!/^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/.test(email)){
            setEmailerror ("Email must be in the valid format");
            return;}
        setEmailerror("");
        createUserWithEmailAndPassword(auth,email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                verifyEmail();
                setName();
            })
            .catch((error) => {console.log(error)
            setPasserror(error.message);
            });
        ;
        const verifyEmail =() =>{
          sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log("Email verification sent");
          })
          
        };
        const setName = () =>{
          updateProfile(auth.currentUser,{
            displayName: name
          })
          .then(() => {
            console.log("Name updated");
          })
          
        };
    };
    
    const handleEmailBlur = (event) => {setEmail(event.target.value);
        console.log(email, password);
    };
    const handlePasswordBlur = (event) => {setPassword(event.target.value)};
   const  handleNameBlur = (event) => {setName(event.target.value)};
    return (
    <>
    <div>
     <div onSubmit={handleSubmit} className="registration w-50 mx-auto mt-5">
       <h2 className="text-primary">Please Sign Up</h2>
       <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter your name" required />
          {/* <p className="text-danger">{emailError}</p> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
          <p className="text-danger">{emailError}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
          <p className="text-danger">{passError}</p>
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">Submit</Button>
     
         
        <br />
        <Button className="mt-5 csbtn" onClick={signInWithGoogle}  type="submit"> 
        <FcGoogle className="google" ></FcGoogle>Login with Google </Button>
        <h4 className="mt-4">Alredy registered? Go to  <Link className="link" to="/login">Login Page</Link>   </h4> 
      </Form>
     </div>
    </div>
    </>
  );
};

export default Signup;