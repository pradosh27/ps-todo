import React, { useState } from 'react'
import "./Body.css"
import {useNavigate} from 'react-router-dom'
function Body() {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));
    const [task,setTasks] = useState([])
    const buttonHandler =()=>{
        const newButtonHandler = document.getElementById("daily_goal").value
        document.getElementById("daily_goal").value=""
        setTasks([...task,newButtonHandler])
    }
    const remove = (e)=>{
        setTasks(task.filter((task,index)=>index!=e))
    }
    const up = (e)=>{
        if(e>0){
        const newArrayUp = [...task];
        [newArrayUp[e],newArrayUp[e-1]]=[newArrayUp[e-1],newArrayUp[e]];
        setTasks(newArrayUp);
        }
    }
    const down = (e)=>{
        if(e<task.length-1){
        const newArrayDown = [...task];
        [newArrayDown[e],newArrayDown[e+1]]=[newArrayDown[e+1],newArrayDown[e]];
        setTasks(newArrayDown);
        }
    }
    const handleLogout = ()=>{
        localStorage.removeItem("loggedin");
        navigate("/");
    }
  return (
    <div className='first'>
        <p className='userdetails'>Welcome... {userName.name} <button onClick={()=>handleLogout()}>Logout</button></p>
        
        <h2 className='heading'>TODO-LISTS</h2>
        <input type="text" placeholder='enter the required task' id='daily_goal' className='input_element'/><br />
        <button className='button_element' onClick={buttonHandler}>Add Task</button>
        <div className='aftereffect'>
            {task.map((task,index)=><div className='task'>{task} <button onClick={()=>remove(index)} className='delete'>Remove</button><button onClick={()=>up(index)} className='up'>Up</button><button onClick={()=>down(index)} className='down'>Down</button></div>)}
        </div>
    </div>
    
  )
}

export default Body