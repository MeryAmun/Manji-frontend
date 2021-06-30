import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { listTransporters } from '../actions/transporterActions';
import FindTransporterScreen from './findTransporterScreen';




const  HomeScreen = () => {
    const transporterList = useSelector(state => state.transporterList);
    const {transporters, loading, error} = transporterList;
    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(listTransporters());
      //eslint-disable-next-line react-hooks/exhaustive-deps
      return () => {
      };
    
    }, [])

    return (
        loading ? <div>loading...</div> :
        error ? <div>{error}</div>:
        
        <div>
        <h1 className='jumbotron text-center text-bold text-info'> Available Transporters in your Area</h1>
    <div className='jumbotron text-center text-bold text-secondary'>
    
    <div>
    
    </div>
    <form className="">
    
    <label>Find Transporter by town</label><br/>
    <div className="search">
    <select>
    <option>Bamenda</option>
    <option>Buea</option>
    <option>Limbe</option>
    <option>Douala</option>
    <option>Yaounde</option>
    <option>Kumba</option>
    <option>Kribi</option>
    </select>
<button type="submit">search</button>
    </div>
    </form>
    </div>
        <ul className="transporters">
        {
            
            transporters.map(transporter =>
                <li key={transporter._id}>
                    <div className="transporter">
                        <Link to={"/transporters/" + transporter._id}>
                        <img className="transporter-image" src={transporter.fullImage} alt='transporter' />
                        
                        <div className="transporter-name">{transporter.name}</div>
                        <div className="transporter-brand"><label>Phone Number:</label>{transporter.telephone}</div>
                        <div className="transporter-price"><label>Work area:</label>{transporter.location}</div>
                        <div className="transporter-price"><label>Transport Type:</label>{transporter.category}</div>
                        <div className="transporter-price">{transporter.city}</div>
                        <div className="transporter-availability"><label>Available:</label>{transporter.availability}</div>
                        <div className="transporter-rating"><label>Rating:</label>{transporter.rating} Stars{transporter.number}</div>
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
