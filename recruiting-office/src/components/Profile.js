import React, { Component } from 'react'
import axios from 'axios';

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: [],

        };
    }
    componentDidMount() {
        axios.get("Services").then(res => {
            const profile = res.data
            this.setState({ profile })
            console.log(res.data);
        });
    }
    render() {
        return (
            <div>
                 <h1>Checkout</h1>
    <table>
        <tbody>
    {this.state.profile.map((item=>(
        <div key={item.id}>
            <p>{item.category}</p>
            <p>{item.description}</p>
      
            {/* <p>{item.user.email}</p> */}
            {/* <p>{item.user.name}</p>
            <p>{item.user.phone}</p>
            <p>{item.contractor.name}</p> */}
        
            <button onClick={(e) => this.deleteProfile(item.id, e)}>Delete</button>
               
                </div>
    )))}
    </tbody>
</table>

            </div>
        )
    }
}
