import React, { useState } from 'react';
import './SigIn.scss';
import StarBackground from './StarBackground';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from '../firebase';

function SigIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Сиз ийгиликтүү кирдиңиз!");
      navigate('/dashboard'); 
    } catch (error) {
      setError("Логин же сырсөз туура эмес!");
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (error) {
      setError("Google аркылуу кирүү болбой калды!");
    }
  };

  return (
    <div className="login-page container">
      <StarBackground />
      <div className="form-container">
        <h1>Welcome back!</h1>
        <p>Enter your credentials to login</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="create-btn" onClick={handleLogin}>Login</button>
        <button className="google-btn" onClick={handleGoogleSignin}>
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
          Sign in with Google
        </button>
        <p className="login-link">
          Don't have an account? <Link to="/">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default SigIn;
