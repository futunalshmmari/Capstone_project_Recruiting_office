import React from 'react'
import axios from "axios"
import './user.css'
import { useState} from "react";
import { Link } from 'react-router-dom';
function User() {
    const [id, setId] = useState({id:""})
    
    const [name, setName] = useState({name:""})
    const[password,setPassword]=useState({password:""})
    const [email, setEmail] = useState({email:""})
    const [city, setCity] = useState({city:""})
    const [phone, setPhone] = useState({phone:""})

  
   let x={id:id, name:name,password:password,email:email, city:city,phone:phone}
   console.log(x)
     function Register(){
       axios({
         method:"post",
         url:"user/add",
         data:
          x
       });alert("Register done ")
      // window.location.reload(false)
       console.log(x);
     }
    return (
            <div class='wrap'>
              user
             <input type="text" name="ID" id='username'  placeholder="ID" onChange={(event) => { setId(event.target.value) }} />
              <input type="text" name="username" placeholder="Username" onChange={(event) => { setName(event.target.value) }} />
              <input type="text" name="firstname" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }}/>
             <input type="text" name="City"  placeholder="City" onChange={(event) => { setCity(event.target.value) }} />
            <input type="text" name="Phone" placeholder="Phone" onChange={(event) => { setPhone(event.target.value) }} />
            <input type="text" name ="Email" placeholder="Email" onChange={(event) => { setEmail(event.target.value) }}/>
            < Link  to="/">   <button type="submit"value="submit" class='login' onClick={Register}>Add</button></Link>
              {/* <h3>Stacked Form</h3>
<p>How to use CSS to create a stacked form:</p>

<div className='container'>
  <form action="/action_page.php">
    <label for="fname">ID</label>
    <input type="text" id="fname" name="firstname" placeholder="id.." onChange={(event) => { setId(event.target.value) }}/>
   
    <label for="lname"> Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your name.."onChange={(event) => { setName(event.target.value) }}/>
    <label for="fname">Password</label>
    <input type="text" id="fname" name="firstname" placeholder="id.." onChange={(event) => { setPassword(event.target.value) }}/>
    <label for="lname">Phone</label>
    <input type="text" id="lname" name="lastname" placeholder="Your Phone.."onChange={(event) => { setPhone(event.target.value) }}/>
    <label for="lname">Email</label>
    <input type="text" id="lname" name="lastname" placeholder="Your Email.."onChange={(event) => { setEmail(event.target.value) }}/>

    <label for="country">City</label>
    <select id="country" name="country" onChange={(event) => { setCity(event.target.value) }}>
      <option value="australia"></option>
      <option value="الجوف">الجوف </option>
      <option value="usa">الرياض</option>
      <option value="usa">الجبيل </option>
    </select>
    <button onClick={Register}>Add</button> */}
  
  {/* </form>
 
</div> */}

            </div>
          );
}
export default User