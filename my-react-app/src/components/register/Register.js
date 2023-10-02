import React from 'react';
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className='r-wrapper'>
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder='Username'/>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Password'/>
        <input type="text" placeholder='Re-enter Password'/>
      </form>
      <button className='r-btn'>Sign Up</button>
      <Link to="/login">
        <div className='member'>Already have an account? Login Now</div>
      </Link>
      
    </div>
  )
}

export default Register;