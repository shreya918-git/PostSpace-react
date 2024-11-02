import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function Test(){
  return(
    <>
    <h1>Shreya is a good girl</h1>
    <h2>i am testing</h2>
    </>
  )
}
const Render=React.createElement("a",{href:"https://www.google.com"},"click here")

createRoot(document.getElementById('root')).render(   //react creates its own virtual dom.
    Render
)
