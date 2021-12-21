import React, { Component} from 'react'
import { BrowserRouter,Route ,Routes  } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Serivices from './components/Services'
import Feedback from './components/Feedback'
import Contractor from './components/Contractor'
 class App extends Component {
  render() {
    return (
<div>

<BrowserRouter>
<Home/> 
          <Routes>
           
             <Route path="/user" element={<User />} />
             
             <Route path="/services" element={<Serivices />} />
             <Route path="/feedback" exact element={<Feedback />} />
             <Route path="/Contractor" exact element={<Contractor />} />
          
          </Routes>
       </BrowserRouter>
</div>
    )
  }
}

export default App
//import './App.css';
// import React, { useState, useEffect} from "react";
// import axios from 'axios';

// function App() {
//    const [client, setClient] = useState({ id: "", name: "", email: ""});

// //https://www.digitalocean.com/community/tutorials/react-axios-react
//    useEffect(() => {
//      axios.post("/user/add", { id: 1, name: "" }).then(() => getHospital());
//    }, []);

//    const handleclientChange = (e) => {
//       const { name, value } = e.target;
//       setClient((prevState) => ({
//          ...prevState,
//          [name]: value,
//       }));
//    };

//    // بيضيف في قاعده البيانات
//   const addclient = () => {
//     console.log("inside add ")
//     axios.post("/user/add", {
//        id: client.id,
//        name: client.name,
//        email: client.email,
//     }).then(()=>{
//       getHospital();
//     });
//   }

//   const getHospital = () =>{
//     // بيكلم السيرفر و يجيب الرد منه
//      axios.get("/user").then((response) => {
    
//       console.log(response.data.client)
//      });
//   }

//    return (
//       <div>
//          <label htmlFor="id">client ID:</label>
//          <br />
//          <input type="text" id="id" name="id" onChange={handleclientChange} />
//          <br />
//          <br />
//          <label htmlFor="name">client Name: </label>
//          <br />
//          <input type="text" id="name" name="name" onChange={handleclientChange} />
//          <br />
//          <br />
//          <label htmlFor="email">client Email: </label>
//          <br />
//          <input type="text" id="email" name="email" onChange={handleclientChange} />
//          <br />
//          <br />
//          <input type="submit" value="Submit" onClick={addclient}></input>
//          <br />
//          <br />
//          <br />
//          <br />
         
//       </div>
   
//    );
// }
  

// export default App;
