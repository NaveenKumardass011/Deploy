import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = ({setStatus}) => {
   const [show,setshow]=useState(false)
   const [userEmail,setUserEmail]=useState()
   const [userName,setUserName]=useState()
  const navigate=useNavigate()
  axios.defaults.withCredentials=true
  useEffect(()=>{
    
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/home`)
      .then((res)=>{
        console.log(res);
        if(!res.data.error){
          if(res.data.result === "Success"){
                setUserEmail(res.data.userDetails.email)
                setUserName(res.data.userDetails.name)
                setshow(true)
            return navigate("/home")
          }
         }
         navigate("/")
         setStatus("Please Login Again")
        console.log(res)})
      .catch((err)=>{
        navigate("/")
        console.log(err.message)
        setStatus(err.messages)
      })
  })
  const logout=()=>{
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`)
      .then((res)=>{
        if(res){
           navigate("/")
        }
        console.log(res)})
      .catch((err)=>console.log(err.messages))
    }
  

  return (
    <>
    {show&& <div className='container'>
      <div className=' display-2 mb-3 text-center'>Home Page</div>
      <p className=' bg-body-secondary rounded d-flex p-3  justify-content-around'><span>{`Name: ${userName}, Email: ${userEmail}`} </span>
      <button type="button" className='btn btn-danger' onClick={logout}>LogOut</button> 
      </p>
      </div> }
    </>
   
  )
}

export default Home
