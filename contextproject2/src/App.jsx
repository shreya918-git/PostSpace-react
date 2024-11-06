import React from 'react'
import Card from './components/Card'
import ThemeBtn from './components/Themebutton'
import './App.css'

function App() {
   return (
    <>
    <h1>Mini Project 2</h1>
    
  

<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                    <Card/>
                    </div>
                </div>
            </div>
</>
   )}

export default App
