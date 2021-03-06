import React from 'react';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'
import {register } from '../actions/userActions';


const RegisterScreen = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const userRegister = useSelector(state => state.userRegister );
    const {loading, userInfo, error} = userRegister;
    const { reset } = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/personal");
        }
        return () => {

        }
        //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, telephone,  password, rePassword));
        reset({});
    }
    return (
        <div className="form">
        <div className="jumbotron bg-secondary  d-flex flex-row">
        <div className="jumbotron bg-dark w-100  text-center text-white"><b>YOU HAVE</b></div>
        <div className="jumbotron bg-danger w-100  text-center text-white"><b>WHAT</b></div>
        <div className="jumbotron bg-success w-100  text-center text-white"><b>IT TAKES</b></div>
        </div>

            <form onSubmit={submitHandler}>
            <br/>
            <br/>
                <ul className="form-container">

                    <li>
                        <h2>
                          Create Account
                            </h2> </li>
                            <li>
                                {loading && <div>Loading</div>}
                                {error && <div>error</div>}
                            </li>

                            <li>
                        <label htmlFor="name">Full Names:</label>
                        <input type="name" name="email" id="name" onChange={(e) => setName(e.target.value)} />
                    </li>
                
                    <li>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </li>
                    <li>
                    <label htmlFor="telephone">Phone Number:</label>
                    <input type="telephone" name="telephone" id="telephone" onChange={(e) => setTelephone(e.target.value)} />
                </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="rePassword">Re-Enter Password:</label>
                        <input type="password" name="rePassword" id="rePassword" onChange={(e) => setRePassword(e.target.value)} />
                    </li>
                    <li>
                        <button type="submit" className="button dark">Create Your Manji account</button>
                    </li>
                    <li>
                        Already have an account ? <Link to='/signin'>
                            sign-in
                        </Link>
                </li>
                </ul>
            </form>
        </div>
    )
}



export default RegisterScreen;