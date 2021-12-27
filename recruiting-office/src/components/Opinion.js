import React ,{useEffect,useState}from 'react'
import axios from "axios"

export default function Opinion() {
    const[opinion,setOpinion]=useState([{id:"",subject:"",description:""}]);
    useEffect(()=>{
axios
.get("Feedback")
.then(res=>setOpinion(res.data));
console.log(opinion);
    },[]);
    return (
        <div>
            <h1>feedback</h1>
          {opinion.map(post =>{
              return <div key={post.id}>
                  <h2>{post.subject}</h2>
                  <p>{post.description}</p>
                  <button>Delete </button>
                  </div>
          })}  
        </div>
    )
}
