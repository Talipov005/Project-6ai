import React, { useState } from 'react';
import './Login.scss';
import StarBackground from './StarBackground';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { auth,provider } from '../firebase';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name
      });
      alert("Каттоо ийгиликтүү болду!");
      navigate('/sigin'); 
    } catch (error) {
      alert("Ката кетти: " + error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/sigin');
    } catch (error) {
      alert("Google аркылуу каттоо болбой калды: " + error.message);
    }
  };

  return (
    <div className="login-page container">
      <StarBackground />
      <div className="form-container">
        <h1>Create an account</h1>
        <p>Enter your details below</p>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="create-btn" onClick={handleSignup}>Create Account</button>

        <button className="google-btn" onClick={handleGoogleSignup}>
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
          Sign up with Google
        </button>

        <p className="login-link">
          Already have account? <Link to="/sigin">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;


