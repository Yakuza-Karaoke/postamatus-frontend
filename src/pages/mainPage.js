import Header from "../Header";
import Content from "../Content";
import { YMaps } from "@pbe/react-yandex-maps";
import { doFetchUser } from "../common/auth";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    setUserData(
      doFetchUser().then((res) => {
        console.log(res.data.username);
        return res.data.username;
      }).catch(() => 'Nothing')
    );
  }, []);

  return (
    <>
      <YMaps>
        <Header />
        <Content />
        <h1>{userData && typeof userData}</h1>
      </YMaps>
    </>
  );
}
