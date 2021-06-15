import React, { useEffect} from 'react'
import data from '../data';
import { Link } from 'react-router-dom'




const  HomeScreen = () => {
    

    return (
        <div>
        <ul className="transporters">
        {
            data.transporters.map(transporter =>
                <li key={transporter._id}>
                    <div className="transporter">
                        <Link to={"/transporters/" + transporter._id}>
                            <img className="transporter-image" src={transporter.image} alt='transporter' />
                        
                        <div className="transporter-name">

                            {transporter.name}

                        </div>
                        <div className="transporter-brand">{transporter.telephone}</div>
                        <div className="transporter-price">{transporter.location}</div>
                        <div className="transporter-rating">{transporter.rating} Stars{transporter.number}</div>
                        </Link>
                    </div>
                </li>
            )
        }


    </ul>
        </div>
    )
}
export default  HomeScreen
