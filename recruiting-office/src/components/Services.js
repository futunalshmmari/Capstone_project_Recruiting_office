import React from 'react';
import './services.css'

const Serivices =()=>{
return (
   
   <div className='work'>
            <div className='container'>
                <h2 className='work-title'><span>My</span> Services</h2>
                <div className='part first'>
                    <i className='icon fa fa-chain fa-2x'></i>
                    <img className='img' src="https://musaned.com.sa/static/media/maarofa.af78e5a5.svg"/>
                    <h4 className='part-title'>Mobile Ux</h4>
                    <hr className='line'/>
                    <p className='part-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </p>
                </div>
                
                <div className='part'>
                    <i className='icon fa fa-bolt fa-2x'></i>
                    <img className='img' src="img2.png"/>
                    <h4 className='part-title'>Mobile Ux</h4>
    
                    <hr className='line'/>
                   
                    <p className='part-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </p>
                </div>
                
                <div className='part last'>
                    <i className='icon fa fa-tachometer fa-2x'></i>
                    <h4 className='part-title'>Mobile Ux</h4>
                    <hr className='line'/>
                    <p className='part-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </p>
                </div></div>
    </div>
)
}

export default Serivices;