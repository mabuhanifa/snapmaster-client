import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Home = () => {
    const[user]= useAuthState(auth);
    return (
        <div>
            <h2>
                this is home page{user?.displayName}
            </h2>
        </div>
    );
};

export default Home;