import React from "react"; 
import { BrowserRouter, Routes, Router,Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Merchandise from "./components/merchandise/Merchandise";




function App() {

  
    return (
    
        <div className="App">

          
            <Navbar/>
            <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register"  element={<Register/>}/>
              <Route path="/merchandise"  element={<Merchandise/>}/>
            </Routes>
           
          
          
        </div>)
          /* <Navbar/>
          <Home />
       
  
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register"  element={<Register/>}/>
          </Routes>
  
  
        </div>) */
    /* //  <div>
    //      <Navbar/>
    //      <Home />
    //      <Login />
    //      <Register />
    //  </div>
    // ) */
  }
  
  export default App;
  