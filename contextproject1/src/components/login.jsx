import React,{useState} from 'react'
import {useContext} from 'react'
import Usercontext1 from './Usercontext.js'
function Login(){
    const[username,setusername]=useState("")
    const[pass,setpass]=useState("")
    const {setuser} =useContext(Usercontext1)
    const submit=(e)=>{
        e.preventDefault()
        setuser({ username, pass })
    }
    return(
        <>
        <h1>Login Here</h1>
        <input type='text' placeholder='Enter Username' value={username} onChange={(e)=>setusername(e.target.value)}/>
        <input type='password' placeholder='Enter Password' value={pass} onChange={(e)=>setpass(e.target.value)}/>
        <button onClick={submit}>Submit</button>
        </>
    )
}
export default Login