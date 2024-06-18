import Dashboard from "../components/Dashboard";
import {Outlet} from 'react-router-dom'
import React from 'react'

function DashLayout() {
  return (

<>
<Dashboard/>
<Outlet/>
</>
  )
}

export default DashLayout