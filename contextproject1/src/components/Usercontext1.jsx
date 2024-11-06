import React ,{useState} from 'react'
import Usercontext1 from './Usercontext.js'
const Usercontext=({children})=>{
    const[user,setuser]=useState({})    //you give access of these variables to the children components
    return(
    <Usercontext1.Provider value={{user,setuser}}>   
        {children}
    </Usercontext1.Provider>)
}
export default Usercontext