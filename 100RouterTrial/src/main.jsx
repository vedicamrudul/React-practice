import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import NavLayout from './Pages/NavLayout.jsx'
import About from './Pages/About.jsx'
import DashLayout from './Pages/DashLayout.jsx'
import Stats1 from './Pages/Dashboard.jsx/Stats1.jsx'
import Stats2 from './Pages/Dashboard.jsx/Stats1.jsx'
import Reviews from './Pages/Reviews.jsx'


const router= createBrowserRouter([
  {
    path: "/",
    element: <Home/>

  },
  {
    path: "/NavLayout",
    element: <NavLayout/>,
    children: [
      {
        path: "/NavLayout/About",
        element: <About/>
      },
      {
        path: "/NavLayout/Reviews",
        element: <Reviews/>
      },
    ]
  },{
    path: "/DashLayout",
    element: <DashLayout/>,
    children:[
      {
        path: "/DashLayout/Stats1",
        element: <Stats1/>
      },
      {
        path: "/DashLayout/Stats2",
        element: <Stats2/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
