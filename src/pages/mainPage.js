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
        <div className="container-xl">
          <div className="row justify-content-center">
            <p className="col h3 p-3 text-center">
              Установка постамата в{" "}
              <strong>
                <u>г. Москва</u>
              </strong>
            </p>

            <div className="container-fluid">
              <div className="row justify-content-around">
                <div className="col-6">
                  <div className="col-11">
                    <Button name="Добавить постамат" class="button" />
                  </div>

                  <div className="col-11">
                    <div className="row align-items-center justify-content-between">
                      <div className="col ml-3 py-2 h4 text-start">
                        Постамат
                      </div>
                      <div
                        id="score"
                        className="col-7 mr-3 py-2 h4 text-end"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="col-6 full-height">
                  <MyMap onCalculate={onCalculate} />
                </div>
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
