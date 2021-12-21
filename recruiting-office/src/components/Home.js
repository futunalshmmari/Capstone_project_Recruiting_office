import React from 'react'
import { Link } from 'react-router-dom'
//import './style.css'

 const Home =() => {

    return (
      <div className="navbar">
            
      <div className="container">
      
          <div className="logo">
              <h2 className="logo-text"> Recruiting Office  </h2>
          </div>
          <ul className="ul-list">
            
            <Link to='/user'>user</Link>
      <Link to='/services'>services </Link>
     <Link to='/feedback'>feedback</Link>
       <Link to='/Contractor'>Contractor'</Link>        
          </ul>
          
      </div>
      
  </div>
    )
  }


export default Home 