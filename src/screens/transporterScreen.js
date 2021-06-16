import React from 'react';
import { Link } from 'react-router-dom'
import {useEffect, useState } from 'react'
import Axios from 'axios';


const  TransporterScreen = () => {
    const [transporter, setTransporter] = useState([]);
  

    useEffect(() => {
       
            Axios.get('http://127.0.0.1:3500/api/transporters/:id').then((response)=>{
                console.log(response.data)
                setTransporter(response.data);
            });
            
           
           
                
         //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    
       

    return (
        <div>
        <div className='back-to-results'>
        <Link to='/'>Back to results</Link>
    </div>
     {
         transporter.map((transporter) => {
             return(
                <div className='details'>
                <div className='details-image'>
            <img  width="400px" src={transporter.image} alt='transporter' />
        </div>
        <div className='details-info'>
            <ul>
                <li>
                    <h4>{transporter.name}</h4>
                </li>
                <li>
                    {transporter.rating} Stars ({transporter.numReviews} Reviews)
        </li>
                <li>
                    Location :  <b>{transporter.location}</b>
                </li>
                <li>
                    Description:
        <div> {transporter.description}</div>
                </li>
            </ul>
        
        </div>
        
        
        <div className='details-action'>
            
                
        
        </div>
        
                
          </div>
             )
         }) 
     }
        
        
  </div>
        
    )
    
}
        
export default  TransporterScreen
