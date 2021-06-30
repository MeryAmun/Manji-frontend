import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect } from 'react';
import { detailsTransporter } from '../actions/transporterActions';



const  TransporterScreen = (props) => {
    const transporterDetails = useSelector(state => state.transporterDetails);
    const { transporter, loading, error } = transporterDetails;
    const dispatch = useDispatch();
  

    useEffect(() => {
       
        console.log(transporter)
        dispatch(detailsTransporter(props.match.params.id));
         //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    
       

    return (
        <div className='jumbotron'>
        <div className='back-to-results'>
        <Link to='/'>Back to results</Link>
    </div>
    {loading ? <div>loading...</div> :
        error ? <div>{error}</div> :
        transporter ?
        
        <div className=' transporter'>
        <div className='transporter-image'>
    <img  width="200px" src={transporter.image} alt='transporter' />
</div>
<br/>
<br/>
<div className='details-info'>
    <ul className="">
        <li className="details-name">
          <b>Name: </b> <b>{transporter.name}</b>
        </li>
        <li className="details-rating">
        <b>Ratings:</b>
            <b>{transporter.rating} Stars</b>
</li>
        <li className="details-price">
            <b>Telephone : </b> <b>{transporter.telephone}</b>
        </li>
        <li className="details-price">
           <b>Location: </b> <b>{transporter.location}</b>
        </li>
        <li className="details-price">
           <b>Category: </b> <b>{transporter.category}</b>
        </li>
        <li className="details-price">
           <b>Available: </b> <b>{transporter.availability}</b>
        </li>
    </ul>

</div>


<div className='transporter-action'>
    <ul>
        <li>
    <form>
    <label>Please call your transporter and make a deal then 
     click select if not go back and choose another</label><br/>
    <br/>
<button className='button btn-primary p-10' style={{padding:'10px'}}>Select Transporter</button>
    </form>
        </li>

    </ul>

</div>

        
  </div> : <div></div>  
    }
  </div>
        
    )
         
     }
        

        
export default  TransporterScreen
