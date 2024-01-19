import React from 'react'
import { useState } from 'react';

function InputBox(props) {
    let [task, setTask] = useState('') 
    
    const addTask=(e)=>{
        props.acceptTask(task)
        setTask('')
    }

    const handleKeyDown = (val) =>{
        if (val.key == 'Enter') {
            return addTask()
        }
    }
  return (
    <>
        <div className="input-container">
            <input
            value={task} type="text"
            onChange={(e)=>{
                setTask(e.target.value)
            }}
            onKeyDown={handleKeyDown} />
            <button onClick={addTask}>+</button>
        </div>
    </>
    
  )
}

export default InputBox