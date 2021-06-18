import React from 'react';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveProduct } from '../actions/productAction';


function CreateTransporterScreen(props) {
    const [name, setName] = useState(" ");
    const [category, setCategory] = useState(" ");
    const [image, setImage] = useState(" ");
    const [city, setCity] = useState(" ");
    const [telephone, setTelephone] = useState(" ");
    const [location, setLocation] = useState(" ");
    const productSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
    const dispatch = useDispatch();

    useEffect(() => {

        return () => {

        }
        //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct(name,  category, image, city, telephone, location));
    }
    return (
        <div className="form">


            <form onSubmit={submitHandler}>
                <ul className="form-container">

                    <li>
                        <h2 className="junbotron text-center text-bold tesxt-info">
                            Create Transporter
                            </h2> </li>
                    <li>
                        {loadingSave && <div>Loading</div>}
                        {errorSave && <div>error</div>}
                    </li>
                    <li>
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="category">Category:</label>
                        <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="image">Image:</label>
                        <input type="text" name="image" id="image" onChange={(e) => setImage(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="city">city:</label>
                        <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} />
                    </li>

                    <li>
                        <label htmlFor="telephone">Telephone:</label>
                        <input type="text" name="telephone" id="telephone" onChange={(e) => setTelephone(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="location">Location:</label>
                        <textarea type="text" name="location" id="location" onChange={(e) => setLocation(e.target.value)} />
                    </li>

                    <li>
                        <button type="submit" className="button primary">Create</button>
                    </li>

                </ul>
            </form>
        </div>
    )
}



export default CreateTransporterScreen;