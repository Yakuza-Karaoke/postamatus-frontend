import Footer from "../Footer"
import Header from "../Header";
import Content from "../Content";
import { YMaps } from "@pbe/react-yandex-maps";
import { Navigate } from "react-router-dom";

export default function MainPage() {


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
