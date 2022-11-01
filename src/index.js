import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

import MainPage from "./pages/mainPage";
import AdminPage from "./pages/adminPage";
import { page404 } from "./pages/page404";


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)