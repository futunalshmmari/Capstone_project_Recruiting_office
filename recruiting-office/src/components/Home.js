import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

 const Home =() => {

    return (
      <div className='navbar'>
        <div className='container'>
        <div classnName='logo'>
          <h2 className='logo-text'>gggg</h2>
          </div>
          <ul className='ul-list'>
            <li className='list-item'> <Link to='/user'>user</Link></li>
            <li className='list-item'><Link to='/services'>services </Link></li>
            <li className='list-item'><Link to='/feedback'>feedback</Link></li>
            <li className='list-item'>   <Link to='/contractor'>Contractor</Link></li>
            <li className='list-item'>       <Link to='/opinion' >opinion</Link>   </li>
          </ul>
           </div> 
          


           
      

   
          
   
      
  </div>
    )
  }


export default Home 