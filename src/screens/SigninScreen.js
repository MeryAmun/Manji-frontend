import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useEffect, useState, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signIn } from '../actions/userActions';


const SigninScreen = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userSignin = useSelector(state => state.userSignin );
    const {loading, userInfo, error} = userSignin;
    const { reset } = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            Redirect("/user/:id");
        }
        return () => {

        }
        //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signIn(email, password));
        reset({});
    }
    return (
        <div className="jumbotron">
        <div className="jumbotron bg-secondary  d-flex flex-row">
        <div className="jumbotron bg-dark w-100  text-center text-white"><b>YOU HAVE</b></div>
        <div className="jumbotron bg-danger w-100  text-center text-white"><b>WHAT</b></div>
        <div className="jumbotron bg-success w-100  text-center text-white"><b>IT TAKES</b></div>
        </div>
        <div className="form">
       
            <form onSubmit={submitHandler}>
            <br/>
            <br/>
            <br/>
                <ul className="form-container">

                    <li>
                        <h2 className="sign text-center text-bold">
                           <b> Sign In</b>
                            </h2> </li>
                            <li>
                                {loading && <div>Loading</div>}
                                {error && <div>error</div>}
                            </li>
                    <li>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </li>
                    <li>
                        <button type="submit" className="button btn-dark text-white text-center">Sign in</button>
                    </li>
                    <li>
                        New to Manji ?
                </li>
                    <li>
                        <Link to="/register" className="button btn-dark text-white text-center">
                            Create your Manji account
                    </Link>
                    </li>
                </ul>
            </form>
        </div>
        </div>
    )
}



export default SigninScreen;