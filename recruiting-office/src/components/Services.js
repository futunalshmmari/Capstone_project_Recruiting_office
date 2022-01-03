
import React, { Component } from 'react'
import axios from 'axios';
import './services.css';
export default class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
            services: [],

        };
    }
    componentDidMount() {
        axios.get("Services").then(res => {
            const services = res.data
            this.setState({ services })
            console.log(res.data);
        });
      
            
         
            // function myFunction() {
            //     var x = document.getElementById("myDIV");
            //     if (x.style.display === "none") {
            //       x.style.display = "block";
            //     } else {
            //       x.style.display = "none";
            //     }
            //   }
     
            axios({
                method:"post",
                url:"http://localhost:3000/Services/add",
                data:{
                    id:2,
                    category:"سائق ",
                    description:"ffff",
                    link:"http://localhost:3000/driver"
                    
            
            
                }
              
            
            })
            axios({
                method:"post",
                url:"http://localhost:3000/Services/add",
                data:{
                    id:3,
                    category:"عامله ",
                    description:"ffff",
                    img:"https://www.alyaum.com/uploads/imported_images/media/article/3_frruZDX.jpg",
                    link:"localhost:3000/driver"
                    
            
            
                }
              
            
            })
            axios({
                method:"post",
                url:"http://localhost:3000/Services/add",
                data:{
                    id:4,
                    category:"مربيه ",
                    description:"iiii"
                    
            
            
                }
              
            
            })     
        
    }
    //   handleClick = event => {
    //     event.currentTarget.classList.toggle('active');
    //   }
 





    render() {
        return (
            <>
            <h2 className='work-title'><span>My</span> Services</h2>
        <div className='flexer' >
 
            
            {this.state.services.map(item=>(
                <div className='card' key={item.id}>
                  <div className='contianer'>
<img src={item.img}/>
                            <h4 >{item.category}</h4>
                            <hr className='line' />
                            {/* <div className="shower" onClick={this.handleClick} key={item.category}>show description
                                <div className="opening">{item.description}</div>
                            </div> */}
                              <div className="shower" onClick={this.myFunction} key={item.category}>show description
                                <div className="opening">{item.description}</div>
                            </div>
                            <p>{item.description}</p>
                            <a href={item.link} >link</a>
                        
                            <br></br>
                 
                         </div>
                  
                 </div>
            ))}
              


        </div>
        </>)
    }

}