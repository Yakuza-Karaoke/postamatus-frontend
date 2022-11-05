import Footer from "../Footer";
import Header from "../Header";
import { YMaps } from "@pbe/react-yandex-maps";
import MyMap from "../components/Map";
import { Navigate } from "react-router-dom";
import Button from "../components/Button";

export default function MainPage() {
  if (localStorage.getItem("authenticated") === "true") {
    let pointCalculations = null;

    const onCalculate = (data) => {
      pointCalculations = data.point;
      document.getElementById("score").innerHTML =
        "Оценка локации: " + data.point.score;
    };

    return (
      <YMaps query={{ apikey: "6054728e-f3f0-4a09-b10c-8e6d17c49bf2" }}>
        <Header title="Главная" />
        <div className="container">
          <div className="row justify-content-center">
            <p className="col h3 p-3">
              Установка постамата в{" "}
              <strong>
                <u>г. Москва</u>
              </strong>
            </p>

            <div className="row justify-content-around">
              <div className="col-4">
                <Button name="Добавить постамат" class="button" />
              </div>

              <h3 id="score" className="text-center"></h3>

              <div className="col-auto">
                <MyMap onCalculate={onCalculate} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </YMaps>
    );
  } else {
    return <Navigate replace to="/login" />;
  }
}
