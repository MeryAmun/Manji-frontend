import React from 'react';
import { Link } from 'react-router-dom'
import PersonalDetails from './personalDetails';

export default function ProfileScreen() {
    return (
        <div className="jumbotron">
        <div className="jumbotron bg-secondary  d-flex flex-row">
        <div className="jumbotron bg-primary w-100  text-center"><b>Ratings</b></div>
        <div className="jumbotron bg-danger w-100  text-center"><b>Ratings</b></div>
        <div className="jumbotron bg-success w-100  text-center"><b>Ratings</b></div>
        </div>
           <PersonalDetails/>
            <Link to="/transporters" className="btn btn-info text-center text-bold">Create Transporter Session</Link>
        </div>
    )
}
