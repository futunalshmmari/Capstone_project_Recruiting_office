import React from 'react';
import axios from "axios"
import { useState} from "react";
import './contractor.css'
// import { Link } from 'react-router-dom';
    function Feedback() {
const [id, setId] = useState({id:""})
    const [subject, setSubject] = useState({subject:""})
    const [description, setDescription] = useState({description:""})
    const [user,setUser]=useState({use:""})
    const[services,setServices]=useState({services:""})
    let userid={"id":user} 
    let servicesid={"id ":services}
   let x={id:id, subject:subject,description:description,user:userid,services:servicesid}
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
            
              <div className='drop'>
            <div className='container'>
                <h2 className='drop-title'><span>ppp </span>feedback</h2>
                <form action="">
                    <div className='form-input'>
                        <input type="text" placeholder="id"  onChange={(event) => { setId(event.target.value) }}/>
                        <input type="email" placeholder="foreign" onChange={(event) => { setUser(event.target.value) }}/>
                        <input type="email" placeholder="foreign setServices" onChange={(event) => { setServices(event.target.value) }}/>
                        

                    </div>
                    <input type="text" className='sub' placeholder="Your Subject" onChange={(event) => { setSubject(event.target.value) }}/>
                    <textarea cols="30" rows="10" placeholder="Your Message"  onChange={(event) => { setDescription(event.target.value) }}></textarea>
                    <input type="submit" value="Send Message"  onClick={Register}/>
                </form>
            </div>
        </div>
              
            </div>
          );



}
export default Feedback