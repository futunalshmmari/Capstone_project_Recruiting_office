import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Login from './Login'

import './home.css'

function Home() {
  //let[login,setLogin]= useState(false);
  // function handleLogin(){
  //   setLogin(true);
  //   // window.sessionStorage.setItem("isLoggedln",true)
  // }
  // if(!login){

  //   return <div><Login handleLogin={handleLogin}  /></div>;

  // }
  let loggedIn = localStorage.getItem("isLoggedln")
  if (loggedIn != "yes") {
    return (
      <div>
        <nav class="navbar">
          <div class="container">

            <h1>hover <span>&#8595;</span></h1>
            <div class="squares">
              <div class="one"></div>
              <div class="two"></div>
              <div class="three"></div>
              <div class="four"></div>
            </div>

            <ul class="nav">
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/user'>user</Link></li>

              {/* <li><Link to='/profile'>Profile</Link></li> */}
              {/* <li><Link to='/services'>services </Link></li>
              <li><Link to='/feedback'>feedback</Link></li>
              <li><Link to='/contractor'>Contractor</Link></li> */}
              <li><Link to='/opinion' >opinion</Link></li>

              <li class="search-mobile"><a href="#"><img src="https://svgshare.com/i/L1v.svg" alt="magnifier" class="magnifier" /></a></li>
            </ul>
          </div>
        </nav>

        <Outlet></Outlet>
      </div>
    )
  }

  return (
    <div>
      <nav class="navbar">
        <div class="container">

          <h1>hover <span>&#8595;</span></h1>
          <div class="squares">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
        </div>
        <div class="container">

          <ul class="nav">
            {/* <li><Link to='/login'>Login</Link></li>
            <li><Link to='/user'>user</Link></li> */}

            {/* <li><Link to='/profile'>Profile</Link></li> */}
            <li><Link to='/services'>services </Link></li>
            <li><Link to='/feedback'>feedback</Link></li>
            <li><Link to='/contractor'>Contractor</Link></li>
            <li><Link to='/opinion' >opinion</Link></li>
            <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
            <li><Link onClick={() => { localStorage.setItem("isLoggedln", "no"); window.open("/", "_self") }} to='/' >Logout</Link></li>
            {/* <li><button onClick={()=>{localStorage.setItem("isLoggedln","no");window.open("/","_self")}} >Logout</button></li> */}

            <li class="search-mobile"><a href="#"><img src="https://svgshare.com/i/L1v.svg" alt="magnifier" class="magnifier" /></a></li>
          </ul>
        </div>
      </nav>

      <Outlet></Outlet>
    </div>
  )
}


export default Home 