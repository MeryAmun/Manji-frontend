import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { listTransporters } from '../actions/transporterActions';




const  FindTransporterScreen = () => {
    const[ category, setCategory] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");
    // const transporterList = useSelector(state => state.transporterList);
    // const {transporters, loading, error} = transporterList;
    // const dispatch = useDispatch();

    //     useEffect(() => {
    //         dispatch(listTransporters());
    //   //eslint-disable-next-line react-hooks/exhaustive-deps
    //   return () => {
    //   };
    
    // }, [])
    const submitHandler = (e) => {
        e.preventDefault();
       const category = setCategory;
        // const city = setCity;
        // const location = setLocation

      Axios.get('http://127.0.0.1:3500/api/transporters/?category=' + category).then((response) => {
                console.log(response.data)
                
            });
           
          
           
    }

    

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     const data = {
    //         category,city, location
    //     }
    //     dispatch(listTransporters(data));
    //    console.log(data)
    // }

    return (
        // loading ? <div>loading...</div> :
        // error ? <div>{error}</div>:
        
        <div className='jumbotron'>
        <h1 className='jumbotron text-center bg-info text-bold text-white'> Are you looking for a quick ride aound town,<br/> are you relocating to a new neigbourhood, or do you have goods to move? <br/>
        Find Available Transporters in your Area,</h1>
    
        <ul className="jumbotron transporters">
        <form className="find" onSubmit={submitHandler}>
        <div className="search2">
        <div className="form-group">
        <label htmlFor=""><b>Transport Type</b>:</label>
        <select className="form-select" id="validationDefaultType" 
        onChange={(e) => {
          setCategory(e.target.value)}} required>
        <option defaultValue>Select Transport Type</option>
        <option>Okada</option>
        <option>Taxi</option>
        <option>Cargo</option>
        <option>Caterpillar</option>
        </select>
        </div>
        <div className="form-group">
        <label htmlFor=""><b>City</b></label>
        <select  className="form-select" id="validationDefaultCity" 
        onChange={(e) => {
          setCity(e.target.value)}} required>
        <option defaultValue>Select City</option>
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
        <label htmlFor=""><b>Location</b></label>
       <input type="text"  className="form-select" id="validationDefaultLocation" 
       onChange={(e) => {
        setLocation(e.target.value)}} required></input>
        </div>
        <li>
        <button type="submit" className="button btn-info text-white text-center"><b>Find Transporter</b></button>
    </li>
        </div>
        </form>

    </ul>
        </div>
    )
}
export default  FindTransporterScreen
