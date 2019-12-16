import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
    return (
        <header className="nav-container">
            <Link to={'./'}>
            <h1 className="nav-container-app-name">Twitch ReactBoard</h1>
            </Link>
            <nav className="nav-container-links">
                <NavLink to={'./top-streams'} className="nav-container-links__item">
                Top Streams
                </NavLink>
                <NavLink to={'./top-games'} className="nav-container-links__item">
                Top Games
                </NavLink>
                <NavLink to={'./profile'} className="nav-container-links__item">
                User
                </NavLink>
            </nav>
        </header>
    )
}
