import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/mainPage";
import Page404 from "./pages/page404";
import ChangePass from "./pages/changePass";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/changePassword" element={<ChangePass />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)