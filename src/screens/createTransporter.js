import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveTransporter } from '../actions/transporterActions';


function CreateTransporterScreen(props) {
    const [firstName, setFirstName] = useState(" ");
    const [lastName, setLastName] = useState(" ");
    const [category, setCategory] = useState(" ");
    const [passImage, setPassImage] = useState(" ");
    const [city, setCity] = useState(" ");
    const [telephone, setTelephone] = useState(" ");
    const [location, setLocation] = useState(" ");
    const transporterSave = useSelector(state => state.transporterSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = transporterSave;
    const dispatch = useDispatch();

    useEffect(() => {

        return () => {

        }
        //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            firstName,lastName,  category, passImage, city, telephone, location
        }
        dispatch(saveTransporter(data));
       console.log(data)
    }
    return (
        <div className="create">
        <div className="jumbotron bg-secondary  d-flex flex-row">
        <div className="jumbotron bg-dark w-100  text-center text-white"><b>YOU HAVE</b></div>
        <div className="jumbotron bg-danger w-100  text-center text-white"><b>WHAT</b></div>
        <div className="jumbotron bg-success w-100  text-center text-white"><b>IT TAKES</b></div>
        </div>
        <div className="form">


            <form onSubmit={submitHandler}>
                <ul className="form-container">

                    <li>
                        <h2 className="junbotron text-center text-bold tesxt-info">
                            Create Transporter 
                            </h2> </li>
                    <li>
                        {loadingSave && <div>Loading</div>}
                        {successSave && <div>success</div>}
                        {errorSave && <div>error</div>}
                    </li>
                    <li>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name="firstName" id="firstName" onChange={(e) => setFirstName(e.target.value)} required/>
                    </li>
                    <li>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName" id="lastName" onChange={(e) => setLastName(e.target.value)} required/>
                    </li>
                    <li>
                        <label htmlFor="category">Category (Taxi,Okada, Cargo or Caterpiller):</label>
                        <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)} required/>
                    </li>
                   
                    
                   <li>
                   <label htmlFor="passImage">Passport Size Image:</label>
                    <input type="file" name="passImage" id="passImage" onChange={(e) => setPassImage(e.target.value)} required/>
                   </li>
                    
                   
                    <li>
                        <label htmlFor="city">City:</label>
                        <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} required/>
                    </li>

                    <li>
                        <label htmlFor="telephone">Telephone Number:</label>
                    <input type="text" name="telephone" id="telephone" onChange={(e) => setTelephone(e.target.value)} required/>
                    </li>
                    <li>
                    <label htmlFor="location">Work Area (e.g City Chemist):</label>
                    <input type="text" name="location" id="location" onChange={(e) => setLocation(e.target.value)} required/>
                </li>
                    <li>
                        <button type="submit" className="button btn-info text-white text-center">Create</button>
                    </li>

                </ul>
            </form>
        
        </div>
        </div>
    )
}



export default CreateTransporterScreen;