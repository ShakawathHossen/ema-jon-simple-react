import React from 'react';
import './Product.css';

const Product = (props) => {
    const{img,name,price,seller,ratings} = props.product;
    console.log(props.product);
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6>{name}</h6>
            <p>Price: ${price}</p>
            <p>Menufactures: {seller}</p>
            <p>Ratings: {ratings}</p>
           </div>
           <button className='btn-cart'>Add To Cart</button>
            
        </div>
    );
};

export default Product;