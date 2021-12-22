import React from 'react'
import axios from "axios"
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
     }
    return (
            <div>
              <h2> Register :  </h2><br></br>
            ID <input type="text" name="firstName"  onChange={(event) => { setId(event.target.value) }} /><br></br>
             Name <input type="text" name="lastName"  onChange={(event) => { setName(event.target.value) }} /><br></br>
            City <input type="text" name="firstName"  onChange={(event) => { setCity(event.target.value) }} /><br></br>
            phone<input type="text" name="firstName"  onChange={(event) => { setPhone(event.target.value) }} /><br></br>
            email<input type="text" name ="password" onChange={(event) => { setEmail(event.target.value) }}/><br></br>
              <button onClick={Register}>Add</button>
            </div>
          );
}
export default User