
// import React, { useEffect, useState } from 'react'
// import axios from "axios"



// export default function Contractor() {

//     const [opinion, setOpinion] = useState([{ id: "", subject: "", description: "" }]);
//     useEffect(() => {

//         axios
//             .get("Feedback")
//             .then(res => setOpinion(res.data));
//         console.log(opinion);
 
//     }, []);
//     return (
//         <div>
//             <h1> Feedback </h1>
//             {opinion.map(post => {
//                 return <div key={post.id}>
//                     <h2>{post.subject}</h2>
//                     <p>{post.description}</p>
//                 </div>
//             })}
//         </div>
//     )

// }
// import React from 'react';
// import './contractor.css'

// export default function Contractor() {
//     return (
        
//      <div>fghjk,</div>
       
//     )
// }
import React, { Component } from 'react'
import axios from 'axios';
import './contractor.css';
export default class Contractor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contractor: [],

        };
    }
    componentDidMount() {
        axios.get("Contractor").then(res => {
            const contractor = res.data
            this.setState({ contractor })
            console.log(res.data);
        });
    }
    // handleClick = event => {
    //     event.currentTarget.classList.toggle('active');
    //   }



    render() {
        return (
            <>
            <h2 className='work-title'><span>My</span> ggggg</h2>
        <div className='flexer' >
 
            
            {this.state.contractor.map(item=>(
                <div className='card' key={item.id}>
                  <div className='contianer'>
                            <h4 >{item.name}</h4>
                            
                            <hr className='line' />
                            <h4 >{item.name}</h4>
                            <h4 >{item.phone}</h4>
                            <h4 >{item.address}</h4>
                            <h4 >{item.nationality}</h4>

                            {/* <div className="shower" onClick={this.handleClick} key={item.category}>show description
                                <div className="opening">{item.description}</div>
                            </div> */}
                            <p>{item.description}</p>
                   
                         </div>

<a href=''></a>
                 </div>
            ))}
        </div>
        </>)
    }

}
