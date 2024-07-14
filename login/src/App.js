
import './App.css';
import {Route,Routes}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Navbar from './components/Navbar.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js'
import Home from './components/Home.js';
import { useEffect, useState } from 'react';
import PageNotFound from './components/PageNotFound.js';


function App() {
  const [status,setStatus]=useState()

  useEffect(()=>{
     setTimeout(()=>{
       setStatus("")
     },5000)
  },[status])
  return (
    <div className="App">
      <Navbar/>
     {status && <div className="container">
        <div className='text-center alert alert-danger mt-2 fw-bold' >{status}</div>
      </div>}
      <Routes>
         <Route path='/' element={<Login
            setStatus={setStatus}
           />}/>
         <Route path='/signup' element={<Signup
            setStatus={setStatus}
         />}/>
         <Route path='/home' element={<Home
            setStatus={setStatus}
          />}/>
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
