import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Content from "../Content";
import { YMaps } from "@pbe/react-yandex-maps";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const loggedIn = localStorage.getItem("authenticated");
    if (loggedIn) {
      setAuthenticated(loggedIn);
    }
  }, []);

  if (!authenticated) {
    return navigate("/");
  } else {
    return (
      <YMaps>
        <Header />
        <Content />
      </YMaps>
    );
  }
}
