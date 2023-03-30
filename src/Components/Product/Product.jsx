import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{img,name,price,seller,ratings} = props.product;
    const handleAddToCart=props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6>{name}</h6>
            <p>Price: ${price}</p>
            <p>Menufactures: {seller}</p>
            <p>Ratings: {ratings}</p>
           </div>
           <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add To Cart <FontAwesomeIcon icon={faShoppingBag}/></button>
            
        </div>
    );
};

export default Product;