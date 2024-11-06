import React,{useState} from 'react'
import Bgcontext  from './Bgcontext'
const Bgcontextprovider=({children})=>{
    const[bg,setbg]=useState("light");
    return(
        <>
        <Bgcontext.Provider value={{bg,setbg}}>
          {children}
        </Bgcontext.Provider>
        </>
    )
}
export default Bgcontextprovider