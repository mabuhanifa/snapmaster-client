import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Services from '../Services/Services';

const Checkout = () => {
    const[user]= useAuthState(auth);
    return (
        <div>
           <Services></Services>
        </div>
    );
};

export default Checkout;