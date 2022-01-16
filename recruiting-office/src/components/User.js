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
            <div class='wrapp'>
              user
             <input type="text" name="ID" id='username'  placeholder="ID" onChange={(event) => { setId(event.target.value) }} />
              <input type="text" name="username" placeholder="Username" onChange={(event) => { setName(event.target.value) }} />
              <input type="text" name="firstname" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }}/>
             <input type="text" name="City"  placeholder="City" onChange={(event) => { setCity(event.target.value) }} />
            <input type="text" name="Phone" placeholder="Phone" onChange={(event) => { setPhone(event.target.value) }} />
            <input type="text" name ="Email" placeholder="Email" onChange={(event) => { setEmail(event.target.value) }}/>
            < Link  to="/">   <button type="submit"value="submit" class='login' onClick={Register}>Add</button></Link>

            </div>
          );
}
export default User