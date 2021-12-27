import React from 'react';
import axios from "axios"
import { useState} from "react";
import { Link } from 'react-router-dom';
    function Feedback() {
const [id, setId] = useState({id:""})
    const [subject, setSubject] = useState({subject:""})
    const [description, setDescription] = useState({description:""})
 
//   let y ={user_id}
   let x={id:id, subject:subject,description:description}
   console.log(x)
     function Register(){
       axios({
         method:"post",
         url:"Feedback/add",
         data:
          x 
       });
     }
    return (
            <div>
              <h2> Register :  </h2><br></br>
            ID <input type="text" name="firstName"  onChange={(event) => { setId(event.target.value) }} /><br></br>
            subject <input type="text" name="lastName"  onChange={(event) => { setSubject(event.target.value) }} /><br></br>
            email<input type="text" name ="password" onChange={(event) => { setDescription(event.target.value) }}/><br></br>
           

              <button  onClick={Register}>Add</button>
              <Link to="/opinion"  onClick={Register}>opinion </Link>
              
              
            </div>
          );



}
export default Feedback