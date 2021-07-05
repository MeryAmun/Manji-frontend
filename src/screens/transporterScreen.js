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
       
        console.log(props.match.params.id)
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
        <div className="jumbotron bg-secondary  d-flex flex-row">
        <div className="jumbotron bg-dark w-100  text-center text-white"><b>TAKE A RIDE</b></div>
        <div className="jumbotron bg-danger w-100  text-center text-white"><b>MOVE LUGGAGES</b></div>
        <div className="jumbotron bg-success w-100  text-center text-white"><b>TRANSPORT GOODS</b></div>
        </div>
        <div className='transporter-image'>
    <img  width="200px" src={transporter.create.passImage} alt='transporter' />
</div>
<br/>
<br/>
<div className='details-info'>
    <ul className="">
        <li className="details-name">
          <b>Name: </b> <b>{transporter.create.firstName} {transporter.create.lastName}</b>
        </li>
        <li className="details-rating">
        <b>Ratings:</b>
            <b>{transporter.create.rating} Stars</b>
</li>
        <li className="details-price">
            <b>Telephone : </b> <b>{transporter.create.telephone}</b>
        </li>
        <li className="details-price">
           <b>Location: </b> <b>{transporter.create.location}</b>
        </li>
        <li className="details-price">
           <b>Category: </b> <b>{transporter.create.category}</b>
        </li>
        <li className="details-price">
           <b>Available: </b> <b>{transporter.create.availability}</b>
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
