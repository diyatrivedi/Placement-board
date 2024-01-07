
import './App.css'
import Login from './components/Login'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './components/Home'

import Register from './components/Register'


function App() {
  

  return (
    <div className='App'>
    
  
    
    <Router>
    
    <Routes>
          <Route exact path="/" element={<Home/>}/>
         <Route  exact path="/login" element={<Login/>}/>
         <Route  exact path="/register" element={<Register/>}/>
      </Routes>
   </Router>
    
    
    
      
    </div>
  )
}

export default App;
