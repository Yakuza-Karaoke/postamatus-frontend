import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Header from "../Header";
import Content from "../Content";
import { YMaps } from "@pbe/react-yandex-maps";

export default function AdminPage() {

  if (localStorage.getItem("authenticated")==="true") {
    return (
      <YMaps>
        <Header />
        <Content />
      </YMaps>
    );
  } else {
    return <Navigate replace to="/login" />;
  }
}
