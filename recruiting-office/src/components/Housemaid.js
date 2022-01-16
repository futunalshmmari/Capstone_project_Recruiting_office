
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
    deleteOpinion(id) {
        axios.delete(`Contractor/delete/${id}`)
            .then(res => {
                const contractor = this.state.contractor.filter(item => item.id !== id);
                this.setState({ contractor })
                alert("Thank you for choosing us...")
            })
    }
    render() {
        const mycCntractor = this.state.contractor.filter(item => item.category == "Housemaid");
        return (
            <><br></br><br></br>
            <h2 className='work-title'>Resumes for Housemaid</h2><br></br><br></br>
        <div class="flex-container" >
            {mycCntractor.map(item=>(
                <div  key={item.id}>
                  <div className='contianer'>
                            <h4 >{item.name}</h4>
                            <h4 >{item.name}</h4>
                            <h4 >{item.phone}</h4>
                            <h4 >{item.address}</h4>
                            <h4 >{item.nationality}</h4>
                            <p>{item.description}</p>
                            <button onClick={(e) => this.deleteOpinion(item.id, e)}>Delete</button>
                          
                         </div>
                 </div>
                    ))}
                </div>
            </>)
    }

}
