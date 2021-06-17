import React from 'react';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signIn } from '../actions/userActions';


const SigninScreen = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userSignin = useSelector(state => state.userSignin );
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/");
        }
        return () => {

        }
        //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signIn(email, password));
    }
    return (
        <div className="form">

            <form onSubmit={submitHandler}>
            <br/>
            <br/>
            <br/>
                <ul className="form-container">

                    <li>
                        <h2>
                            Sign In
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
                        <button type="submit" className="button primary">Sign in</button>
                    </li>
                    <li>
                        New to Manji ?
                </li>
                    <li>
                        <Link to="/register" style={{background: "#f0c040"}} className="button text-dark text-center">
                            Create your Manji account
                    </Link>
                    </li>
                </ul>
            </form>
        </div>
    )
}



export default SigninScreen;