import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Mail from '../Services/Mail';
import Services from '../Services/Services';

const Checkout = () => {
    const[user]= useAuthState(auth);
    return (
        <div>
           <Services></Services>
           <Mail></Mail>
        </div>
    );
};

export default Checkout;