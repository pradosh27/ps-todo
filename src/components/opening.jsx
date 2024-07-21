import React ,  { useState } from 'react'
import "./opening.css";
import { Login } from './Login'
import { Register } from './Register'
import AnchorLink from "react-anchor-link-smooth-scroll";
function opening() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }
  return (
    <>
    <section>
        <div className="wrapper centered">
            <h1>Let's Get Started .....</h1><br />
            <AnchorLink href="#app">
              <button className='anchorbutton'>Login</button>
            </AnchorLink>
        </div>
        <div className="app" id='app'>
          {
            currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
          }
        </div>
    </section>
    </>
  )
}

export default opening