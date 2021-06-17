import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { listTransporters } from '../actions/transporterActions';




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
        <h2 className='sidetex'> Find Your Transporter</h2>
        <ul className="transporters">
        {
            transporters.map(transporter =>
                <li key={transporter._id}>
                    <div className="transporter">
                        <Link to={"/transporters/" + transporter._id}>
                            <img className="transporter-image" src={transporter.image} alt='transporter' />
                        
                        <div className="transporter-name">

                            {transporter.name}

                        </div>
                        <div className="transporter-brand">{transporter.telephone}</div>
                        <div className="transporter-price">{transporter.location}</div>
                        <div className="transporter-rating">{transporter.rating} Stars{transporter.number}</div>
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
