import Header from "../Header";
import Content from "../Content";
import { YMaps } from "@pbe/react-yandex-maps";

export default function MainPage() {
  return (
    <YMaps>
      <Header />
      <Content />
    </YMaps>
  )
};