import React from 'react';
import { Link } from 'react-router-dom'
import { signout } from '../actions/userActions';
import { useSelector,  useDispatch} from 'react-redux';
import CreateTransporterScreen from './createTransporter';


export default function ProfileScreen() {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signout());
      }


    return (
        <div className="jumbotron">
        <div className="jumbotron bg-secondary  d-flex flex-row">
        <div className="jumbotron bg-primary w-100  text-center"><b>Ratings</b></div>
        <div className="jumbotron bg-danger w-100  text-center"><b>Ratings</b></div>
        <div className="jumbotron bg-success w-100  text-center"><b>Ratings</b></div>
        </div>
           <CreateTransporterScreen/>
           <Link to="/" onClick={logout}>Sign out </Link>
        </div>
    )
}
