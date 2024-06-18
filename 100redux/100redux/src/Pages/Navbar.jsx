import Home from "./Home";
import DisplayCart from "./DisplayCart";
import AddProduct from "./AddProduct";
import {Link} from 'react-router-dom'

import React from 'react'

function Navbar() {
  return (
    <>
    <div className="flex justify-center space-x-20 h-[7vh] items-center border-slate-800 outline-offset-2 outline   outline-slate-800 w-[100vw] bg-slate-500">
                <Link  className="bg-slate-500" to="/Home">Home</Link>
                <Link  className="bg-slate-500" to="/DisplayCart">cart</Link>
                <Link className="bg-slate-500" to="/AddProduct">Add Product</Link>
    </div>
    </>
  )
}

export default Navbar