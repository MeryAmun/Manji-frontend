import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveTransporter } from '../actions/transporterActions';


function CreateTransporterScreen(props) {
    const [name, setName] = useState(" ");
    const [category, setCategory] = useState(" ");
    const [idNumber, setIdNumber] = useState(" ");
    const [passImage, setPassImage] = useState(" ");
    const [idImageF, setIdImageF] = useState(" ");
    const [idImageB, setIdImageB] = useState(" ");
    const [autoImage, setAutoImage] = useState(" ");
    const [fullImage, setFullImage] = useState(" ");
    const [city, setCity] = useState(" ");
    const [telephone, setTelephone] = useState(" ");
    const [location, setLocation] = useState(" ");
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
            name,  category,idNumber, passImage,idImageF, idImageB,autoImage, fullImage, city, telephone, location, address
        }
        dispatch(saveTransporter(data));
       console.log(data)
    }
    return (
        <div className="create">
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
                        <label htmlFor="name">Full Names:</label>
                        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} required/>
                    </li>
                    <li>
                        <label htmlFor="category">Category (Taxi,Okada, Cargo or Caterpiller):</label>
                        <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)} required/>
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
                        <label htmlFor="autoImage">Image of Taxi/Okada/Lorry (Matriculation number should be visible):</label>
                    <input type="file" name="autoImage" id="autoImage" onChange={(e) => setAutoImage(e.target.value)} required/>
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
                        <label htmlFor="address">Neigbourhood (Kwata):</label>
                        <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)} required/>
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