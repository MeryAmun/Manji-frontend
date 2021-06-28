import React from 'react';
import { Link } from 'react-router-dom'

export default function ProfileScreen() {
    return (
        <div>
            Profile
            <Link to="/transporters" className="btn btn-info text-center text-bold">Create Transporter Session</Link>
        </div>
    )
}
