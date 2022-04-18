import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import logo from '../Data/banner.jpg';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    const[user]= useAuthState(auth);
    return (
        <div>
            <h2 className='text-center m-4'>
                Welcome To SnapMaster.
            </h2>
            <img className='img-fluid w-50 d-block mx-auto rounded' src={logo} alt="" />
            <p className='text-center m-5 intro mx-auto'>
            Hi, I am an award-winning lifestyle photographer with an experience of 10 years of photography. I mostly cover moment related life, including weddings, birthdays, family occasions, fashion, and outdoor photography.
            </p>
            <Services></Services>
        </div>
    );
};

export default Home;