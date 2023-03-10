import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'

function FDANavbar()
{
    return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/FDAView/FDADash">FDADash</Link></li>
            <li><Link to="/FDAView/FDASearch">FDASearch</Link></li>
            <li><Link to="/FDAView/FDAResults">FDAResults</Link></li>
            <li><Link to="/FDAView/FDANew">FDANew</Link></li>
            <li><Link to="/FDAView/FDAOngoing">FDAOngoing</Link></li>
            <li><Link to="/FDAView/FDAFinish">FDAFinish</Link></li>
        </ul>
    </nav>);
}

export default FDANavbar;