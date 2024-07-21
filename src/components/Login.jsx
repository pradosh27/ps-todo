import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './Login.css'
export const Login = (props) => {
    const [input , setInput] = useState({
        email : "",
        password : "",
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.password === loggeduser.password)
        {
            localStorage.setItem("loggedin",true);
           navigate("/body"); 
        }
        else{
            alert("wrong email or password");
        }
    }
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input name="email" 
            value= {input.email}
            onChange={(e) => setInput({
                ...input,
                [e.target.name]:e.target.value,
            })}type="email" placeholder="Enter your Email-id" id="email" required/>
                <label htmlFor="password">Password</label>
                <input name="password" 
            value= {input.password}
            onChange={(e) => setInput({
                ...input,
                [e.target.name]:e.target.value,
            })} type="password" placeholder="Enter Password" id="password" required/>
                <button type="submit">Sign In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}