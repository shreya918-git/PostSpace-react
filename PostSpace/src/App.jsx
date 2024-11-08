import './App.css'
import React, { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { login,logout } from './store/storeSlices'
import useauthenticate from './appwrite/Authenticate'
function App() {
  const [loading,isloading]=useState(true)
 useEffect(()=>{ useauthenticate.getcurrentinfo().then((userdata)=>{if (userdata){useDispatch(login(userdata))}
 else{
  useDispatch(logout())
 }
}).finally(()=>isloading(false))
},[])
 return !loading?(<div>Hi</div>):null
}

export default App

  