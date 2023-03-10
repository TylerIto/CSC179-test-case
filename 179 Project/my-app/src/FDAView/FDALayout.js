import React from "react";
import { Outlet } from "react-router-dom";
import FDANavbar from "./FDANavbar";

const FDALayout = () => 
{
    return (<><FDANavbar /><Outlet /></>);
};

export default FDALayout;
