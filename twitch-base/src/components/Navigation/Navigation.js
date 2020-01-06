import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import './Navigation.scss';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="nav-container">
            <Link to={'./'}>
            <h1 className="nav-container-app-name">Twitch ReactBoard</h1>
            </Link>
            <button 
                type='button' 
                className='nav-btn'
                onClick={handleToggle}
                >
                <FaAlignRight className='nav-icon'/>
            </button>
            <nav className="nav-container-links" >
                <NavLink to={'/top-streams'} className="nav-container-links__item">
                Top Streams
                </NavLink>
                <NavLink to={'/top-games'} className="nav-container-links__item">
                Top Games
                </NavLink>
                <NavLink to={'/'} className="nav-container-links__item">
                Home
                </NavLink>
            </nav>
            <ul className={isOpen?'nav-links show-nav':'nav-links'}>
                <li>
                    <Link onClick={handleToggle} to='/'>Home</Link>
                </li>
                <li>
                    <Link onClick={handleToggle} to='/top-streams'>Top Streams</Link>
                </li>
                <li>
                    <Link onClick={handleToggle} to='/top-games'>Top Games</Link>
                </li>     
            </ul>
        </header>
    )
}
