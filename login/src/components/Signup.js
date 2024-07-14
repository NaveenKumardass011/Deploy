import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = ({setStatus}) => {
  const [username,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()

const signupData=async()=>{
    axios.post(`${process.env.REACT_APP_BACKEND_URL}register`,{username,email,password})
    .then((res)=>{
      if(res.data.error){
        return setStatus(res.data.error)
       

      }
      navigate("/")
      console.log(res)})
    .catch((err)=>{
      setStatus("Network Error Please Try Again Later")
      console.log(err.messages)
    }
  )
}

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center mt-5'>
            <div className='col-md-8 col-lg-6 bg-white p-3 rounded shadow'>
              <form action="/singup" method="post">
              <div className=' display-5 text-center text-uppercase'>Sign up</div>
                  <div className='form-group mb-4 '>
                      <label htmlFor="name" className=' form-label'>Name</label>
                      <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}  className='form-control mt-1' id='name' />
                  </div>
                  <div className='form-group mb-4 '>
                      <label htmlFor="email" className=' form-label'>Email</label>
                      <input type="text" placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} className='form-control mt-1' id='email' />
                  </div>
                  <div className="form-group mb-4">
                      <label htmlFor="password" className=' form-label'>Password</label>
                      <input type="text" className='form-control mt-1' onChange={(e)=>{setPassword(e.target.value)}} id='password' placeholder='*****' />
                  </div>
              <p>You have Already an account ? <Link className=' text-decoration-none' to="/">Login</Link></p>
              <input type="button" className='w-100  btn btn-success pb-2 mb-5' onClick={signupData} value="Sign up" /><br />

            </form>
          </div>
      </div>
    
    </div>
  )
}

export default Signup