import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

function NavLayout() {
  return (
  <>
  <Navbar/>
  <Outlet/>
  </>

  )
}

export default NavLayout