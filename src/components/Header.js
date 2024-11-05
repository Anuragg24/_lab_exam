// Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ isAuthenticated, setAuth }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth(false);
        navigate("/login"); 
    };

    return (
        <header>
            <nav>
                <Link to="/home">Home</Link> 
                {isAuthenticated ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;