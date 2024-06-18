import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
<>
<Link to="/" >Home</Link>
<Link to="/DashLayout">Dashboard</Link>
<Link to="/NavLayout/About">About</Link>
<Link to="/NavLayout/Reviews">About</Link>
{/* <Link to="/Reviews">Reviews</Link> */}
</>
  )
}

export default Navbar