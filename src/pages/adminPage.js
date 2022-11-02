import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Header from "../Header";
import Content from "../Content";
import { YMaps } from "@pbe/react-yandex-maps";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(null);
  const navigate = useNavigate();

  if (localStorage.getItem("authenticated")==="false") {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <YMaps>
        <Header />
        <Content />
      </YMaps>
    );
  }
}
