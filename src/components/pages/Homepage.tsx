import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
        <p>HomePage</p>
        <Link to="/login">Login</Link>
    </div>
);

export default HomePage;
