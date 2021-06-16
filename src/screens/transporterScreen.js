import React from 'react';
import { Link } from 'react-router-dom'
import {useEffect, useState } from 'react'


const  TransporterScreen = (props) => {
    const { product, loading, error } = productDetails;
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {

        }
         //eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    const handleAddToCart = () => {
        props.history.push('/cart/' + props.match.params.id + "?qty=" + qty)
    }





    return (
        <div>
        <div className='back-to-results'>
        <Link to='/'>Back to results</Link>
    </div>
    {loading ? <div>loading...</div> :
        error ? <div>{error}</div> :
        
        
        <div className='details'>
        <div className='details-image'>
    <img  width="400px" src={product.image} alt='product' />
</div>
<div className='details-info'>
    <ul>
        <li>
            <h4>{product.name}</h4>
        </li>
        <li>
            {product.rating} Stars ({product.numReviews} Reviews)
</li>
        <li>
            Location :  <b>{product.location}</b>
        </li>
        <li>
            Description:
<div> {product.description}</div>
        </li>
    </ul>

</div>


<div className='details-action'>
    
        

</div>

        
  </div>
        }
  </div>
        
    )
    
}
        
export default  TransporterScreen
