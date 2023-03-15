import './App.css';
import React, { useState } from 'react'
import AddNumberRoot from './components/AddNumberRoot'
import DisplayNumberRoot from './components/DisplayNumberRoot';



function App() {

  const [number, setNumber] = useState([0]);

  const handleNumber = (addValue)=>{
    setNumber(Number(number) + Number(addValue));
  }

  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot handleNumber={handleNumber}></AddNumberRoot>
      <DisplayNumberRoot number={number}></DisplayNumberRoot>
      </div>
  );
}

export default App;
