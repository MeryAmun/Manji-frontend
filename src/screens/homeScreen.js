import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'




const  HomeScreen = () => {
    const [ transporter, setTransporters] = useState([]);

        useEffect(() => {
          const fetchData = async () => {
  const {data} = await Axios.get('http://127.0.0.1:3500/api/transporters/');
  setTransporters(data);
 
 
          }
          fetchData();
      //eslint-disable-next-line react-hooks/exhaustive-deps
      return () => {
      };
    
    }, [])

    return (
        <div>
        <ul className="transporters">
        {
            transporter.map(transporter =>
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
