import React from 'react'
import axios from "axios"
import './user.css'
import { useState} from "react";
function User() {
    const [id, setId] = useState({id:""})
    const [name, setName] = useState({name:""})
    const [email, setEmail] = useState({email:""})
    const [city, setCity] = useState({city:""})
    const [phone, setPhone] = useState({phone:""})
  
   let x={id:id, name:name,email:email, city:city,phone:phone}
   console.log(x)
     function Register(){
       axios({
         method:"post",
         url:"user/add",
         data:
          x
       });
       console.log(x);
     }
    return (
            <div>
              {/* <h2> Register :  </h2><br></br>
            ID <input type="text" name="firstName"  onChange={(event) => { setId(event.target.value) }} /><br></br>
             Name <input type="text" name="lastName"  onChange={(event) => { setName(event.target.value) }} /><br></br>
            City <input type="text" name="firstName"  onChange={(event) => { setCity(event.target.value) }} /><br></br>
            phone<input type="text" name="firstName"  onChange={(event) => { setPhone(event.target.value) }} /><br></br>
            email<input type="text" name ="password" onChange={(event) => { setEmail(event.target.value) }}/><br></br>
              <button onClick={Register}>Add</button> */}
              <h3>Stacked Form</h3>
<p>How to use CSS to create a stacked form:</p>

<div className='container'>
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="id.." onChange={(event) => { setId(event.target.value) }}/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your name.."onChange={(event) => { setName(event.target.value) }}/>
    {/* <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."onChange={(event) => { setCity(event.target.value) }}/> */}
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your Phone.."onChange={(event) => { setPhone(event.target.value) }}/>
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your Email.."onChange={(event) => { setEmail(event.target.value) }}/>

    <label for="country">Country</label>
    <select id="country" name="country" onChange={(event) => { setCity(event.target.value) }}>
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
    <button onClick={Register}>Add</button>
  
  </form>
</div>

            </div>
          );
}
export default User