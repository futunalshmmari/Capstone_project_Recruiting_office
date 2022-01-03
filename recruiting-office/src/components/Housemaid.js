
import React, { Component } from 'react'
import axios from 'axios';
import './contractor.css';
export default class Housemaid extends Component {
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
        const mycCntractor = this.state.contractor.filter(item => item.category=="Housemaid");
        return (
            <>
            <h2 className='work-title'><span>My</span> ggggg</h2>
        <div className='flexer' >
 
            
            {mycCntractor.map(item=>(
                <div className='card' key={item.id}>
                  <div className='contianer'>
                          
                            
                            <hr className='line' />
                            <h4 >{item.name}</h4>
                            <h4 >{item.phone}</h4>
                            <h4 >{item.Address}</h4>
                            <h4 >{item.Nationality}</h4>

                            {/* <div className="shower" onClick={this.handleClick} key={item.category}>show description
                                <div className="opening">{item.description}</div>
                            </div> */}
                            <p>{item.category}</p>
                   
                         </div>


                 </div>
            ))}
        </div>
        </>)
    }

}
