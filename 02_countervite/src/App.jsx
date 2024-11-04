import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [cv,cvupdate]=useState(5);
  const addvalue=()=>{
    if(cv<20)
    cvupdate(cv+1);
  // cvupdate(cv+1);  this whole block will be executed only once as they perform same operation,so the value will only be incremented by 1.
  // cvupdate(cv+1);  fibre is responsible for execution
  // cvupdate(cv+1);
  // cvupdate(cv+1);
  // cvupdate(cv=>cv+1); this block will update the previous value of cv hence each time the value will be incremented.
  // cvupdate(cv=>cv+1);
  // cvupdate(cv=>cv+1);
  // cvupdate(cv=>cv+1);
  }
  const subtractvalue=()=>{
    if(cv>0)
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
