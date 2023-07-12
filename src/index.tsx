import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Backend from "./pages/Backend";
import Agent from "./pages/Agent";
import Frontend from "./pages/Frontend";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: '',
        element: <App/>,
      },
      {
        path: "/back-end",
        element: <Backend/>,
      },
      {
        path: "/agent",
        element: <Agent/>,
      },
      {
        path: "/front-end",
        element: <Frontend/>,
      },
    ]
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
