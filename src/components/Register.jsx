import React, { useState } from "react";
import './Register.css'
export const Register = (props) => {  
    const [input , setInput] = useState({
        name : "",
        email : "",
        password : "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(input));
        alert("Succesfully Registered");
    }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input 
            name="name" 
            value= {input.name}
            onChange={(e) => setInput({
                ...input,
                [e.target.name]:e.target.value,
            })}type="text" id="name" placeholder="Enter your Name" required/>
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
            })} type="password" placeholder="Enter your password" id="password" required/>
            <button type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}