
import React, { Component } from 'react'
import axios from 'axios';
import './contractor.css';
export default class Driver extends Component {
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
  



    render() {
        const mycCntractor = this.state.contractor.filter(item => item.category=="Driver");
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
                            <p>{item.category}</p>
                   
                         </div>


                 </div>
            ))}
        </div>
        </>)
    }

}
