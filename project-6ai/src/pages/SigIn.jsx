import React, { useState } from 'react';
import "./SigIn.scss"; // Use consolidated SCSS
import StarBackground from './StarBackground';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { toast } from 'react-toastify';

function SigIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Сиз ийгиликтүү кирдиңиз!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Логин же сырсөз туура эмес!');
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success('Google аркылуу кирүү ийгиликтүү болду!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Google аркылуу кирүү болбой калды: ' + error.message);
    }
  };

  return (
    <div className="login-page container">
      <StarBackground />
      <div className="form-container">
        <h1>Welcome back!</h1>
        <p>Enter your credentials to login</p>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="create-btn" onClick={handleLogin}>
          Login
        </button>
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