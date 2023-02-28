import logo from './logo.svg';
import './App.css';
import "../src/sb-admin-2.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Topbar from './Topbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Adduser from './Adduser';
import Edituser from './Edituser';
import Viewuser from './Viewuser';

function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <Topbar />
   

          <Routes>
          <Route path="/" element ={<Home/>}></Route>
          <Route path="/user/add" element ={<Adduser/>}></Route>
          <Route path="/edit/:id" element ={<Edituser/>}></Route>
          <Route path="/view/:id" element={<Viewuser/>}></Route>
      

          </Routes>
        </div>
    
  
  </BrowserRouter>
   
    
  
 
  );
}

export default App;
