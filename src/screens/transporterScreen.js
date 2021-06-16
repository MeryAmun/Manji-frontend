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
       
        dispatch(detailsTransporter(props.match.params.id));
         //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    
       

    return (
        <div>
        <div className='back-to-results'>
        <Link to='/'>Back to results</Link>
    </div>
    {loading ? <div>loading...</div> :
        error ? <div>{error}</div> :
        
        
        <div className='details'>
        <div className='details-image'>
    <img  width="200px" src={transporter.image} alt='transporter' />
</div>
<div className='details-info'>
    <ul>
        <li>
          Name:  <b>{transporter.name}</b>
        </li>
        <li>
        Ratings:
            {transporter.rating} Stars
</li>
        <li>
            Telephone :  <b>{transporter.telephone}</b>
        </li>
        <li>
           Location: <b>{transporter.location}</b>
        </li>
    </ul>

</div>


<div className='details-action'>
    <ul>
        <li>
    <form>
    <label>Please call your transporter and make a deal then 
     click select if not go back and choose another</label><br/>
    <br/>
<button className='button danger'>Select Transporter</button>
    </form>
        </li>

    </ul>

</div>

        
  </div>
        }
  </div>
        
    )
         
     }
        

        
export default  TransporterScreen
