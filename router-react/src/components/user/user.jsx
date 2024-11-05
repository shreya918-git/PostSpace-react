import React from 'react'
import { useParams } from 'react-router-dom'
function User(){
    const {Userid}=useParams();
    return(
        <>
        <h1>User:{Userid}</h1>
        </>
    )
}
export default User