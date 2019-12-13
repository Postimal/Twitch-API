import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
            Navigation Bar |{' '}
            <Link to={'./top-streams'}>top strams</Link><hr />
        </div>
    )
}
