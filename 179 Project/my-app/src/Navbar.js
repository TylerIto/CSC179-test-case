import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'

function Navbar()
{
    return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Bavaria">Bavaria</Link></li>
            <li><Link to="/FDAView/FDADash">FDA</Link></li>
            <li><Link to="/JaneHopkins">JaneHopkins</Link></li>
        </ul>
    </nav>);
}

export default Navbar;