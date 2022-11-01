import Header from "../Header";
import Content from "../Content";
import { YMaps } from "@pbe/react-yandex-maps";
import { doFetchUser } from "../common/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [userData, setUserData] = useState("");
  const [authenticated, setAuthenticated] = useState(null);
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

  if (!authenticated) {
    return navigate("/login");
  } else {
    return (
      <YMaps>
        <Header />
        <Content />
      </YMaps>
    );
  }
}
