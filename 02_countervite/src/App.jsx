import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [cv,cvupdate]=useState(5);
  const addvalue=()=>{
    cvupdate(cv+1);
  }
  const subtractvalue=()=>{
    cvupdate(cv-1);
  }
  return (
    <>
     <h1>Counter</h1>
     <h2>CurrentValue:{cv}</h2>
     <button onClick={addvalue}>Add Value</button>
     <br/>
     <button onClick={subtractvalue}>Decrease Value</button>
    </>
  )
}

export default App
