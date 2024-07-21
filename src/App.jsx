import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import Opening from './components/opening'
import { Login } from './components/Login'
import { Register } from './components/Register'
function App() {
  
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element = {<Opening />}/>
        <Route path='/body' element = {<Body />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/register' element = {<Register />}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App