
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



      
        axios({
            method: "post",
            url: "http://localhost:3000/Services/add",
            data: {
                id: 2,
                category: "سائق ",
                description: "ffff",
                img:"https://mzadqatar.com//uploads/images/2020/10/24/12066148-89315251d1.png",
                link: "http://localhost:3000/driver"



            }


        })
        axios({
            method: "post",
            url: "http://localhost:3000/Services/add",
            data: {
                id: 3,
                category: "عامله ",
                description: "ffff",
                img: "https://www.alyaum.com/uploads/imported_images/media/article/3_frruZDX.jpg",
                link: "http://localhost:3000/housemaid"



            }


        })
        axios({
            method: "post",
            url: "http://localhost:3000/Services/add",
            data: {
                id: 4,
                category: "مربيه ",
                description: "iiii",
                img:"https://www.tutoraround.com/uploads/1/1/7/7/117782982/published/nannies-near-me.png?1594292267",
                link:""



            }


        })

    }
   




    render() {
        return (
            <>
                <h2 className='work-title'><span>My</span> Services</h2>
                <div className='flexer' >


                    {this.state.services.map(item => (
                        <div className='card' key={item.id}>
                            <div className='contianer'>
                                <img className='img' src={item.img} />
                                <h4 >{item.category}</h4>
                                <hr className='line' />
                              
                                <p>{item.description}</p>
                                <div class="tooltip">
                                <a href={item.link} >link</a>
  <span class="tooltiptext">من هنا</span>

                               
                                </div>
                                <br></br>
<a href='housemaid'>hhh</a>
                            </div>

                        </div>
                    ))}



                </div>
            </>)
    }

}