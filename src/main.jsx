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
import Errorpage from './Component/Errorpage/Errorpage';
import ServicesFeature from './Component/Services/ServicesFeature';
import Serivcedetails from './Pages/Servicedetalis/Serivcedetails';
import EventsFeature from './Component/Events/EventsFeature';
import SpeakersFeature from './Component/Speakers/SpeakersFeature';
import AuthProvider from './Firebase/AuthProvider';
import PrivateRoute from './Component/PrivateRoute';


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
        element:<PrivateRoute><Serivcedetails></Serivcedetails></PrivateRoute>,
        loader:()=>fetch('../Services.Json')
      },
      {
        path: "/Register",
        element:<Register></Register>
      },
      {
        path: "/Events",
        element:<PrivateRoute><EventsFeature></EventsFeature></PrivateRoute>
      },
      {
        path: "/Speakers",
        element:<PrivateRoute><SpeakersFeature></SpeakersFeature></PrivateRoute>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>,
)
