import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Header.css';

const Header = () => {
     const[user]= useAuthState(auth);
    return (
        <div className='topbar bg-light'> 
            <div >
                <h2>SnapMaster</h2>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/checkout">Checkout</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blogs</Link>
                <span>{user?.displayName && user.displayName}</span>
                { user?.uid
                ? 
                <button className='btn btn-danger ms-2' onClick={()=>signOut(auth)}> SignOut </button>
                :
                <Link to="/signup">Signup</Link>
                    }
            </nav>
        </div>
    );
};

export default Header;