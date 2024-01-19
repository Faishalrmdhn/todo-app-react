import React,{ useEffect, useState } from 'react';
import './App.css';
import InputBox from './Components/todo/InputBox';
import OutputBox from './Components/todo/OutputBox';
import axios from 'axios'

function App() {
    const [items, setItems] = useState([])
    const [users, setUsers] = useState([])
    const acceptTask =(task)=>{
        console.log('accept');
        let taskList = [...items,task]
        console.log(taskList);
        setItems(taskList)
    }
    // use effect takes a function and array
    useEffect(function (params) {
        (async function (params) {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users")  
            console.log(res.data);
            // let userList = [...users, res.data]
            setUsers(res.data)
        })()
    }, [])
  return (
    <div className='app'>
        <h1>ToDo App</h1>
        <InputBox acceptTask={acceptTask}></InputBox>
        <OutputBox items={items}></OutputBox>

        <h1>Fetching Data From API</h1>
        {users.length === 0?<h2>is loading...</h2>: 
            <>
                <h2>users</h2>
                {users.map((user)=>{
                    return <div key={user.id}>{user.name}</div>
                    
                })}
            </>
            
        }

    </div>
    
  );
}

export default App;
