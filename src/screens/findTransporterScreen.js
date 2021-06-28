import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { listTransporters } from '../actions/transporterActions';




const  FindTransporterScreen = () => {
    const[ transportType, setTransportType] = useState("");
    const [city, setCity] = useState("");
    const [transporterLocation, setTransporterLocation] = useState("");
    const {transporters, loading, error} = transporterList;
    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(listTransporters());
      //eslint-disable-next-line react-hooks/exhaustive-deps
      return () => {
      };
    
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            transportType,city, transporterLocation
        }
        dispatch(saveTransporter(data));
       console.log(data)
    }

    return (
        loading ? <div>loading...</div> :
        error ? <div>{error}</div>:
        
        <div>
        <h1 className='jumbotron text-center text-bold text-info'> Find Transporters in your Area</h1>
    <div className='jumbotron text-center text-bold text-info'>
    
    </div>
        <ul className="transporters">
        <form className="" onSubmit={submitHandler}>
        <div className="search">
        <div className="form-group">
        <label for="">City</label>
        <select className="form-select" id="validationDefaultType" 
        onChange={(e) => {
          setTransportType(e.target.value)}} required>
        <option selected>Select City</option>
        <option>Okada</option>
        <option>Taxi</option>
        <option>Cargo</option>
        <option>Caterpillar</option>
        </select>
        </div>
        <div className="form-group">
        <label for="">City</label>
        <select  className="form-select" id="validationDefaultCity" 
        onChange={(e) => {
          setCity(e.target.value)}} required>
        <option selected>Select City</option>
        <option>Bamenda</option>
        <option>Buea</option>
        <option>Limbe</option>
        <option>Douala</option>
        <option>Yaounde</option>
        <option>Kumba</option>
        <option>Kribi</option>
        </select>
        </div>
        <div className="form-group">
        <label for="">Location</label>
       <input type="text"  className="form-select" id="validationDefaultLocation" 
       onChange={(e) => {
         setLocation(e.target.value)}} required></input>
        </div>
        <li>
        <button type="submit" className="button btn-info text-white text-center">Search</button>
    </li>
        </div>
        </form>

    </ul>
        </div>
    )
}
export default  FindTransporterScreen
