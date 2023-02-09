import React, { useContext, useState } from 'react'
import {signOut} from "firebase/auth"
import {auth} from "../firebase"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const [err,setErr] =useState(false);
  const navigate = useNavigate()
  const {currentUser} = useContext(AuthContext)
  const logOut = async() =>{
    try{
      await signOut(auth);
      navigate("/login");
    }
    catch(err)
    {
      setErr(true);
      console.error(err);
    }
  }
  return (
    <div className='navbar'>
        <span className='logo'>Amrit chat</span>
        <div className='user'>
            <img className="image"src={currentUser.photoURL} alt=""></img>
            <span>{currentUser.displayName}</span>
            {err && <span>Something went wrong</span>}
            <button onClick={logOut}>Logout</button>
        </div>
        
    </div>
  )
}

export default Navbar