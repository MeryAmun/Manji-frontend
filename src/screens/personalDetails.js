import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router';
import { saveTransporter } from '../actions/transporterActions';


function PersonalDetails(props) {
    const [firstName, setFirstName] = useState(" ");
    const [lastName, setLastName] = useState(" ");
    const [idNumber, setIdNumber] = useState(" ");
    const [passImage, setPassImage] = useState(" ");
    const [idImageF, setIdImageF] = useState(" ");
    const [idImageB, setIdImageB] = useState(" ");
    const [fullImage, setFullImage] = useState(" ");
    const [city, setCity] = useState(" ");
    const [telephone, setTelephone] = useState(" ");
    const [address, setAddress] = useState(" ");
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
            firstName,lastName,idNumber, passImage,idImageF, idImageB,fullImage, city, telephone, address
        }
        dispatch(saveTransporter(data));
       Redirect('/auto');
    }
    return (
        <div className="jumbotron create">
        <div className="form">


            <form onSubmit={submitHandler}>
                <ul className="form-container">

                    <li>
                        <h2 className="junbotron text-center text-bold tesxt-info">
                           Personal Details 
                            </h2> </li>
                    <li>
                        {loadingSave && <div>Loading</div>}
                        {successSave && <div>success</div>}
                        {errorSave && <div>error</div>}
                    </li>
                    <li>
                        <label htmlFor="name">First Name:</label>
                        <input type="text" name="firstName" id="firstName" onChange={(e) => setFirstName(e.target.value)} required/>
                    </li>
                    <li>
                        <label htmlFor="name">Middle and Last Name:</label>
                        <input type="text" name="lastName" id="lastName" onChange={(e) => setLastName(e.target.value)} required/>
                    </li>
                    <li>
                        <label htmlFor="idNumber">Identity Card Number:</label>
                        <input type="text" name="idNumber" id="idNumber" onChange={(e) => setIdNumber(e.target.value)} required/>
                    </li>
                   <li>
                   <label htmlFor="passImage">Passport Size Image:</label>
                    <input type="file" name="passImage" id="passImage" onChange={(e) => setPassImage(e.target.value)} required/>
                   </li>
                    <li> 
                    <label htmlFor="idImageF">Identity Card Front:</label>
                <input type="file" name="idImageF" id="idImageF" onChange={(e) => setIdImageF(e.target.value)} required/>
                </li>
                    <li>
                        <label htmlFor="idImageB">Identity Card Back:</label>
                        <input type="file" name="idImageB" id="idImageB" onChange={(e) => setIdImageB(e.target.value)} required/>
                    </li>
                    <li>
                        <label htmlFor="fullImage">Full Image:</label>
                    <input type="file" name="fullImage" id="fullImage" onChange={(e) => setFullImage(e.target.value)} required/>
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
                        <label htmlFor="address">Home address (Kwata):</label>
                        <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)} required/>
                    </li>
                   
                    <li>
                        <button type="submit" className="button btn-info text-white text-center">Next</button>
                    </li>

                </ul>
            </form>
        
        </div>
        </div>
    )
}



export default PersonalDetails;