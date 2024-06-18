import { Outlet } from "react-router-dom";

import React from 'react'
import Navbar from "./Navbar";

function NavLayout() {
    return (
        <>
        <div className="bg-slate-300">
            <Navbar />
            <Outlet/>
            </div>
        </>
    )
}

export default NavLayout