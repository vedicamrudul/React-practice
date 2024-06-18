import React from 'react'
import {Link} from 'react-router-dom'
function Dashboard() {
  return (
 <>
 <div className=' bg-red-500 space-x-4 flex w-full items-center justify-between'>
    
<Link  to="/NavLayout">Nav Layout</Link>
<Link to="/DashLayout/Stats1">Stats1</Link>
<Link to="/DashLayout/Stats2">Stats2</Link>
</div>
 </>
  )
}

export default Dashboard