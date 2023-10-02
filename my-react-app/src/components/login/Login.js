import React from 'react';
import "./Login.css";
import { Link } from "react-router-dom";


function Login() {
  return (
    <div>
       <div className='l-wrapper'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='Username'/>
        <input type="text" placeholder='Password'/>
      </form>
      <button className='l-btn'>Login</button>
      <Link to="/register">
      <div className='member'>Not a member? Register Now</div>
      </Link>
    </div>
      
    </div>
  )
}

export default Login;