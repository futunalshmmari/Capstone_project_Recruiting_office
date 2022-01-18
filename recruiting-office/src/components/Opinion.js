// import React ,{useEffect,useState}from 'react'
// import axios from "axios"

// export default function Opinion() {
//     const[opinion,setOpinion]=useState([{id:"",subject:"",description:""}]);
//     useEffect(()=>{
// axios
// .get("Feedback")
// .then(res=>setOpinion(res.data));
// console.log(opinion);
//     },[]);
//     return (
//         <div>
//             <h1>feedback</h1>
//           {opinion.map(post =>{
//               return <div key={post.id}>
//                   <h2>{post.subject}</h2>
//                   <p>{post.description}</p>
//                   <button>Delete </button>
//                   </div>
//           })}  
//         </div>
//     )
// }
import React, { Component } from 'react'
import axios from 'axios';
import './opinion.css'
export default class Opinion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opinion: [],

    };
  }

  componentDidMount() {
    axios.get("Feedback").then(res => {
      const opinion = res.data
      this.setState({ opinion })
    });
  }

  deleteOpinion(id) {
    axios.delete(`Feedback/delete/${id}`)
      .then(res => {
        const opinion = this.state.opinion.filter(item => item.id !== id);
        this.setState({ opinion })
      })
  }
  render() {
    return (<div><br></br><br></br>
      <h1>Feedback</h1><br></br>
     
        <figure class="snip1540">
          {this.state.opinion.map((item => (
            <div key={item.id}>
             <br></br> <br></br> <br></br> <br></br> <br></br>
              <div class="profile-image"><img src="https://instaker.com/uploads/img/user-img.png" alt="profile-sample1" />
          <div class="icons"><a href="#"><i class="ion-social-reddit"></i></a>
            <a href="#"> <i class="ion-social-twitter"></i></a>
            <a href="#"> <i class="ion-social-vimeo"></i></a>
          </div>
          </div>
          <figcaption>
            <h1>subject</h1>
              <p>{item.subject}</p>
              <h1>description</h1>
              <p>{item.description}</p>
              <h3> email:</h3>
              <p>{item.user.email}</p>
              <h3>services</h3>
              <p>{item.services.category}</p>
              <fieldset class="score">
  <legend>Score:</legend>
  
  <input className='in' type="radio" id="score-5" name="score" value="5"/>
  <label  title="5 stars" for="score-5">5 stars</label>
  
  <input className='in' type="radio" id="score-4" name="score" value="4"/>
  <label title="4 stars" for="score-4">4 stars</label>
  
  <input className='in' type="radio" id="score-3" name="score" value="3"/>
  <label title="3 stars" for="score-3">3 stars</label>
  
  <input className='in' type="radio" id="score-2" name="score" value="2"/>
  <label title="2 stars" for="score-2">2 stars</label>
  
  <input className='in' type="radio" id="score-1" name="score" value="1"/>
  <label title="1 stars" for="score-1">1 stars</label>
  
</fieldset>
              <button onClick={(e) => this.deleteOpinion(item.id, e)}>Delete</button>
              </figcaption>

            </div>
          )))}
             </figure> 

    </div>)


  }

}
