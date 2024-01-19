import React,{ useState } from 'react';
import './App.css';
import InputBox from './Components/InputBox';
import OutputBox from './Components/OutputBox';

function App() {
    const [items, setItems] = useState([])
    const acceptTask =(task)=>{
        console.log('accept');
        let taskList = [...items,task]
        console.log(taskList);
        setItems(taskList)
    }
  return (
    <div className='app'>
        <h1>ToDo App</h1>

        <InputBox acceptTask={acceptTask}></InputBox>
        <OutputBox items={items}></OutputBox>
    </div>
    
  );
}

export default App;
