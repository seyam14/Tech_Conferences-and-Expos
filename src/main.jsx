import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './Component/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root/Root';
import Services from './Component/Services/Services';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Events from './Component/Events/Events';
import Speaker from './Component/Speaker/Speaker';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Services",
        element:<Services></Services>
      },
      {
        path: "/Login",
        element:<Login></Login>
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
