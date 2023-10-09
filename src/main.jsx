import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './Component/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root/Root';

import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Events from './Component/Events/Events';
import Speaker from './Component/Speaker/Speaker';
import Errorpage from './Component/Errorpage/Errorpage';
import ServicesFeature from './Component/Services/ServicesFeature';
import Serivcedetails from './Pages/Servicedetalis/Serivcedetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Services",
        element:<ServicesFeature></ServicesFeature>
      },
      {
        path: "/Login",
        element:<Login></Login>
      },
      {
        path: "/Service/:id",
        element:<Serivcedetails></Serivcedetails>,
        loader:()=>fetch('../Services.Json')
      },
      {
        path: "/Register",
        element:<Register></Register>
      },
      {
        path: "/Events",
        element:<Events></Events>
      },
      {
        path: "/Speaker",
        element:<Speaker></Speaker>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
