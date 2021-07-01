import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveTransporter } from '../actions/transporterActions';


function AutomobileDetails(props) {
    const [name, setName] = useState(" ");
    const [category, setCategory] = useState(" ");
    const [autoImage, setAutoImage] = useState(" ");
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
            category,autoImage
        }
        dispatch(saveTransporter(data));
       console.log(data)
    }
    return (
        <div className="create">
        <div className="jumbotron bg-secondary  d-flex flex-row">
        <div className="jumbotron bg-primary w-100  text-center"><b>WE'VE</b></div>
        <div className="jumbotron bg-danger w-100  text-center"><b>GOT YOU</b></div>
        <div className="jumbotron bg-success w-100  text-center"><b>COVERED</b></div>
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
                        <label htmlFor="category">Category (Taxi,Okada, Cargo or Caterpiller):</label>
                        <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)} required/>
                    </li>
                    
                    <li>
                        <label htmlFor="autoImage">Image of Taxi/Okada/Lorry (Matriculation number should be visible):</label>
                    <input type="file" name="autoImage" id="autoImage" onChange={(e) => setAutoImage(e.target.value)} required/>
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



export default AutomobileDetails;