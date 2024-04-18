import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin,text,setText }) => {
    const [currState, setCurrState] = useState("Sign Up");
    const [credentials, setCredentials] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const signup = () => {
        const newCredentials = [...credentials, { username, email, password }];
        setCredentials(newCredentials);
        console.log('Signing up:', { username, email, password });
        alert("Sign up Successful");
        setCurrState("Login");
    };

    const loginIn = () => {
        const foundUser = credentials.find(cred => cred.email === email);
        if (foundUser) {
            if (foundUser.password === password) {
                alert("Login Successful");
                setShowLogin(false)
                setText("Logout")
            } else {
                alert("Invalid Password");
            }
        } else {
            alert("Invalid Email");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        currState === "Login" ? loginIn() : signup();
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="login-container">
                <div className="login-title">
                    <h2>{currState}</h2>
                    <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt='close' />
                </div>
                <div className="login-input">
                    {currState === "Login" ? <></> : <input type='text' placeholder='Your name' value={username} onChange={(e) => setUsername(e.target.value)} required />}
                    <input type='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type='password' placeholder='Your Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By clicking, I confirm with the terms and the conditions</p>
                </div>
                {currState === "Login" ?
                    <p>Create new account?<span onClick={() => { setCurrState("Sign Up") }}>Click Here</span></p> :
                    <p>Already have account?<span onClick={() => { setCurrState("Login") }}>Click Here</span></p>}
            </form>
        </div>
    );
};

export default Login;
