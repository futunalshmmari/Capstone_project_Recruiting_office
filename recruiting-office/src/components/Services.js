
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
    }
    // handleClick = event => {
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
                            <h4 >{item.category}</h4>
                            <hr className='line' />
                            {/* <div className="shower" onClick={this.handleClick} key={item.category}>show description
                                <div className="opening">{item.description}</div>
                            </div> */}
                            <p>{item.description}</p>
                     <a href='contractor'>contractor</a>
                         </div>


                 </div>
            ))}
        </div>
        </>)
    }

}