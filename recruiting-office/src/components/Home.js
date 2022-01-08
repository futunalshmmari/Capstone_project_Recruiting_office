import React,{useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import Login from './Login'

import './home.css'

function Home(){
let[login,setLogin]= useState(false);
function handleLogin(){
  setLogin(true);
}
if(!login){
  
  return <div><Login handleLogin={handleLogin}  /></div>;



}
    return (
      <div>
      {/* <div className='navbar'>
        <div className='container'>
        <div classnName='logo'>
          <h2 className='logo-text'>gggg</h2>
          </div>
          <ul className='ul-list'>
            <li className='list-item'> <Link to='/login'>Login</Link></li>
            <li className='list-item'> <Link to='/user'>user</Link></li>
            <li className='list-item'> <Link to='/profile'>Profile</Link></li>
            <li className='list-item'><Link to='/services'>services </Link></li>
            <li className='list-item'><Link to='/feedback'>feedback</Link></li>
            <li className='list-item'>   <Link to='/contractor'>Contractor</Link></li>
            <li className='list-item'>       <Link to='/opinion' >opinion</Link>   </li>

          </ul>
           </div>  */}
           {/* <Outlet></Outlet> */}
          

           <nav class="navbar">
      <div class="container">
        <a href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="apple-logo"
            class="logo"
          />
        </a>
        <ul class="nav">
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/user'>user</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/services'>services </Link></li>
            <li><Link to='/feedback'>feedback</Link></li> 
             <li><Link to='/contractor'>Contractor</Link></li>  
          <li><Link to='/opinion' >opinion</Link></li>
         
          <li class="search-mobile"><a href="#"><img src="https://svgshare.com/i/L1v.svg" alt="magnifier" class="magnifier"/></a></li>
        </ul>
      </div>
    </nav>
           
      

   
          
   
      
  </div>
    )
  }


export default Home 