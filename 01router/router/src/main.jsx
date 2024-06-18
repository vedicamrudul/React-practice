import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import { Route } from 'react-router-dom'
import Users from './Components/Users/Users.jsx'
import Github,{githubInfoLoader} from './Components/Github/Github.jsx'



const router= createBrowserRouter([
{
  path: '/',
  element: <Layout/>,
  children: [
    {
      path: "",
      element:  <Home/>
    },
    {
      path: "About",
      element: <About/>
    },
    {
      path: "Contact",
      element: <Contact/>
    }
  ]
},

])


// const router=createBrowserRouter(
// createRoutesFromElements(
  
//   <Route path='/' element={<Layout/>}>
//     <Route path='' element={<Home/> }/>
//     <Route path='About' element={<About/>} />
//     <Route path='Contact' element={<Contact/>}/>
//     <Route path='User/:userId' element={<Users/>}/>
//     {/* yea userId ka access we will get inside the element automatically using useParams */}
//     <Route 
//       loader={githubInfoLoader}
//       path='Github' 
//       element={<Github />}
//        />
//   </Route>))
 

 




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
