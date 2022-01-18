import React from 'react'
import axios from "axios"
import './user.css'
import { useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
function User() {
    const [id, setId] = useState({id:""})
    
    const [name, setName] = useState({name:""}) 
    const[password,setPassword]=useState({password:""})
    const [email, setEmail] = useState({email:""})
    const [city, setCity] = useState({city:""})
    const [phone, setPhone] = useState({phone:""})

  const navigate = useNavigate();
   let x={id:id, name:name,password:password,email:email, city:city,phone:phone}
   console.log(x)
     function Register(){
       axios({
         method:"post",
         url:"user/add",
         data:
          x
       });
      //  navigate("/navabar")
       alert("Register done ")
      // window.location.reload(false)
       console.log(x);
     }
    return (
            <div class='wrapp'>
              user
             {/* <input type="text" required name="ID" id='username'  placeholder="ID" onChange={(event) => { setId(event.target.value) }} /> */}
             <form>
              <input type="text"  name="username" required placeholder="Username" required onChange={(event) => { setName(event.target.value)  }}  />
              <input type="text"  name="firstname" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} required/>
             <input type="text"  name="City"  placeholder="City" onChange={(event) => { setCity(event.target.value) }} required />
            <input type="number"  name="Phone" placeholder="Phone" onChange={(event) => { setPhone(event.target.value) }} required />
            <input type="email"  name ="Email" placeholder="Email" onChange={(event) => { setEmail(event.target.value) }} required/>
            <button type="submit"value="submit" class='login' onClick={Register}>Add</button>
            </form>
            </div>
          );
}
export default User