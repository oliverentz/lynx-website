import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">Medieval Reenactment Group</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;