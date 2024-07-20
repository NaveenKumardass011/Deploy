import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({setStatus}) => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()
    axios.defaults.withCredentials=true

    const loginRequest=()=>{
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,{email,password})
      .then((res)=>{
        if(res){
            if(res.data.result === "Success"){
             return navigate("/home")
            }
            setStatus(res.data.error)
         
        }
        console.log(res)})
      .catch((err)=>{
         setStatus("Network Error Please Try Again Later")
        console.log(err.messages)})
    }

  return (
    
    <div className='container'>
      <div className='row d-flex justify-content-center mt-5'>
            <div className='col-md-8 col-lg-6 bg-white p-3 rounded shadow'>
              <form action="/singup" method="post" className='' >
              <div className=' display-4 text-center text-uppercase'>Login</div>
                  <div className='form-group mb-4 '>
                      <label htmlFor="email" className=' form-label'>Email</label>
                      <input type="text" onChange={(e)=>{setEmail(e.target.value)}} className='form-control mt-1' id='email' />
                  </div>
                  <div className="form-group mb-4">
                      <label htmlFor="password" className=' form-label'>Password</label>
                      <input type="text" onChange={(e)=>{setPassword(e.target.value)}} className='form-control mt-1' id='password' placeholder='*****' />
                  </div>
              <p>Don't have an account ? <Link className=' text-decoration-none' to="/signup">Signup</Link></p>
              <input type="button" onClick={loginRequest} className='w-100  btn btn-success pb-2 mb-5'value="Login" /><br />

            </form>
          </div>
      </div>
    
    </div>
  )
}

export default Login
