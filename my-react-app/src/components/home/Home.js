import React from 'react';
import {FaSearch} from "react-icons/fa"; 
import "./home.css";
import MaxBG from "../../assets/Maxwell4.jpeg";






function Home() {
  return (

  <div className='splash'>
       
      <div className="bg-overlay"style={{backgroundImage: `url(${MaxBG})`}}></div>

      <div className="splash-text">
        <h2>Welcome to FOR LOVERS ONLY</h2>
        <p>Official Maxwell<br></br>Merchandise</p>
        <form className="form">
            <div>
              <input type="text" placeholder="Search Merchandise"></input>
            </div>
            <div>
              <button><FaSearch className="icon"/></button>
            </div>
        </form>
    </div>
    </div>
  )
 }
export default Home;