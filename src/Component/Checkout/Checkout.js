import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Checkout = () => {
    const[user]= useAuthState(auth);
    return (
        <div>
            <h2>
                this is checkout page
            </h2>
        </div>
    );
};

export default Checkout;