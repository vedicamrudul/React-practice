import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import AddProduct from './Pages/AddProduct.jsx'
import DisplayCart from './Pages/DisplayCart.jsx'
import NavLayout from './Pages/NavLayout.jsx'
import { store } from './app/store.js'

const router=createBrowserRouter([
  {
    path: "/",
    element: <NavLayout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/DisplayCart",
        element: <DisplayCart/>
      },
      {
        path: "/AddProduct",
        element: <AddProduct/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
