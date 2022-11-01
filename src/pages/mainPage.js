import Header from "../Header";
import Content from "../Content";
import { YMaps } from "@pbe/react-yandex-maps";
import { doFetchUser } from "../common/auth";
import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export default function MainPage() {
  const [userData, setUserData] = useState("");
  let [authenticated, setAuthenticated] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setUserData(
      doFetchUser()
        .then((res) => {
          console.log(res.data.username);
          return res.data.username;
        })
        .catch(() => "Nothing")
    );
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem("authenticated");
    if (loggedIn) {
      setAuthenticated(loggedIn);
    }
  }, []);

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
