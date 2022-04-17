import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFire';
import './Header.css';

const Header = () => {
     const{user, handleSignOut }= useFirebase();
    console.log(user);
    return (
        <div className='topbar'> 
            <div >
                <h2>SnapMaster</h2>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/protected">Checkout</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blogs</Link>
                <span>{user?.displayName && user.displayName}</span>
                { user?.uid
                ? 
                <button onClick={handleSignOut}> SignOut </button>
                :
                <Link to="/signup">Signup</Link>
                    }
            </nav>
        </div>
    );
};

export default Header;