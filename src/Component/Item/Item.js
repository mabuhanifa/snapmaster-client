import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
    const {name,price,img,description} = props.pack;
    const navigate = useNavigate();
    function scrollWin() {
        window.scrollTo(0, 500);
        const go = ()=> navigate('/checkout');
        go();
      }
    
    return (
        <div className='package'>
            <img className='img-fluid rounded mx-auto d-block p-2' src={img} alt="" />
            <div className='m-2'>
            <h4>Package : {name}</h4>
            <p>{description} </p>
            <p>Price: $ {price }</p>
            <button className='book-btn' onClick={scrollWin }>Book This Package</button>
            </div>
        </div>
    );
};

export default Item;