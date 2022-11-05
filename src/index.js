import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import RegPage from "./pages/RegPage";
import MainPage from "./pages/mainPage";
import Page404 from "./pages/page404";
import ChangePass from "./pages/changePass";
import AdminPage from "./pages/adminPage";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<RegPage />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/changePassword" element={<ChangePass />} />
      </Routes>
    </BrowserRouter>{" "}
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      limit={2}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="light"
    />
  </React.StrictMode>
);
