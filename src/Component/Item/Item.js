import React from 'react';
import './Item.css';

const Item = (props) => {
    const {name,price,img,description} = props.pack;
    
    return (
        <div className='package'>
            <img className='img-fluid rounded mx-auto d-block p-2' src={img} alt="" />
            <div className='m-2'>
            <h4>Package : {name}</h4>
            <p>{description} </p>
            <p>Price: $ {price }</p>
            <button className='book-btn'>Book This Package</button>
            </div>
        </div>
    );
};

export default Item;