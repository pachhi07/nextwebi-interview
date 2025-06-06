import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//router
import { BrowserRouter } from "react-router-dom";
// import { PrimeReactProvider } from "primereact/api";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <BrowserRouter >    
//   <App />
//   </BrowserRouter>  
//   </React.StrictMode>
// )


