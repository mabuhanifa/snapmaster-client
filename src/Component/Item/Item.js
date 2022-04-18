import React from 'react';
import './Item.css';

const Item = (props) => {
    const {name,price,img,description} = props.pack;
    
    return (
        <div className='package'>
            <img src={img} alt="" />
            <div className='m-2'>
            <h4>Package : {name}</h4>
            <p>{description} </p>
            <p>Price: $ {price }</p>
            <button className='btn btn-primary d-block mx-auto px-5'>Book This Package</button>
            </div>
        </div>
    );
};

export default Item;