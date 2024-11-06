import React,{useContext} from 'react'
import Usercontext1 from './Usercontext.js'
function Show(){
    const {user}=useContext(Usercontext1);
    return(
        <div>hi {user.username}</div>
    )
}
export default Show