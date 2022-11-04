import Footer from "../Footer"
import Header from "../Header";
import Content from "../Content";
import { YMaps } from "@pbe/react-yandex-maps";

export const mainPage = (
  <YMaps>
    <Header />
    <Content />
    <Footer />
  </YMaps>
);
