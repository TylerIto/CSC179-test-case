import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'

function Navbar()
{
    return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Bavaria">Bavaria</Link></li>
<<<<<<< Updated upstream
            <li><Link to="/FDAHome">FDA Home</Link></li>
=======
            <li><Link to="/FDAView/FDADash">FDA</Link></li>
>>>>>>> Stashed changes
            <li><Link to="/Login">JaneHopkins Login</Link></li>
        </ul>
    </nav>);
}

export default Navbar;