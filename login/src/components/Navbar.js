import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar navbar-dark opacity-50 navbar-expand-sm shadow" style={{backgroundColor:'blue'}}>
      <div className=' container-fluid'>
      <a href={()=>false} className=' navbar-brand fw-semibold'>Naveen</a>
      <button className=' navbar-toggler'type='button' data-bs-toggle='collapse' data-bs-target='#nav'>
        <span className=' navbar-toggler-icon'></span>
      </button>
       <div className=' collapse navbar-collapse' id='nav'>
        
          <ul className='navbar-nav ms-auto'>
           <li className="nav-item "><Link  className=' nav-link' to="/home">HOME</Link></li>
           <li className="nav-item"><a href={()=>false} className="nav-link">PRODUCTS</a></li>
           <li className="nav-item"><a href={()=>false} className="nav-link">PROFILE</a></li>
           <li className="nav-item "><Link className=' nav-link' to="/signup">SIGNUP</Link></li>
           <li className="nav-item "><Link className=' nav-link' to="/">LOGIN</Link></li>
          </ul>
          <form className='d-flex ms-2'>
            <input type="text" className=' form-control me-2'placeholder='Search'/>
            <button className='btn btn-outline-secondary text-white'><i className="bi bi-search"></i></button>
          </form>
       </div>
      </div>
     
    </div>
  )
}

export default Navbar