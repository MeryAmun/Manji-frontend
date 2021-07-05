import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { listTransporters } from '../actions/transporterActions';
import FindTransporterScreen from './findTransporterScreen';




const  HomeScreen = () => {
    const transporterList = useSelector(state => state.transporterList);
    const {transporters, loading, error} = transporterList;
    const dispatch = useDispatch();
    //console.log(transporters)
        useEffect(() => {
            dispatch(listTransporters());
      //eslint-disable-next-line react-hooks/exhaustive-deps
      return () => {
      };
    
    }, [])

    return (
        loading ? <div>loading...</div> :
        error ? <div>{error}</div>:
        
    <div className='jumbotron text-center text-bold text-secondary'>
    <h1 className='jumbotron text-center text-bold text-info'> Available Transporters in your Area</h1>
   
    <FindTransporterScreen/>
    <ul className="transporters">
        {
            
            transporters.map(transporter =>
                <li key={transporter._id}>
                    <div className="transporter">
                        <Link to={"/transporters/" + transporter._id}>
                       <div> <img className="transporter-image" src={transporter.create.passImage} alt='transporter' /></div>
                        
                        <div className="transporter-price"><label>Name:</label>{transporter.create.firstName} {transporter.create.lastName}</div>
                        <div className="transporter-price"><label>Work area:</label>{transporter.create.location}</div>
                        <div className="transporter-price"><label>Transport Type:</label>{transporter.create.category}</div>
                        <div className="transporter-price"><label>Phone:</label>{transporter.create.telephone}</div>
                        <div className="transporter-availability"><label>Available:</label>{transporter.create.availability}</div>
                        <div className="transporter-rating"><label>Rating:</label>{transporter.create.rating} Stars{transporter.create.number}</div>
                        </Link>
                    </div>
                </li>
            )
        }


    </ul>
    </div>
        
        
    )
}
export default  HomeScreen
