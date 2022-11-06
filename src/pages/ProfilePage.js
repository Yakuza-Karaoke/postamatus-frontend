import Header from "../Header";
import Footer from "../Footer";
import { useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { doFetchUser } from "../common/auth";
import { doGetUserPoints } from "../common/points";

export default function ProfilePage() {
  const navigate = useNavigate();
  function Return() {
    navigate("/");
  }

  const [userData, setUserData] = useState("");
  const [userPoints, setUserPoints] = useState();
  const table = null;

  useEffect(() => {
    doFetchUser().then((res) => setUserData(res.data.full_name));
  }, []);

  const deletePoint = (point) => {
    console.log(point);
  };

  const renderPoints = (p) => {
    let points = "";
    console.log("Changed points: ", p);
    p.map(
      (d) =>
        (points +=
          "<li>Постамат-" +
          d.title +
          " (оценка: " +
          d.score.toFixed(2) +
          ") <a class='text-danger'>Удалить</a></li>")
    );
    document.getElementById("points").innerHTML = points;
    document.getElementById("installed").innerHTML =
      "Точек установлено - " + p.length;
    document.getElementById("add").innerHTML = "Точек добавлено - " + p.length;
  };

  useEffect(() => {
    doGetUserPoints().then((res) => {
      console.log(res.data);
      renderPoints(res.data);
    });
  }, []);

  if (localStorage.getItem("authenticated") === "true") {
    return (
      <div>
        <Header title="Личный кабинет" />
        <div className="container-fluid d-flex justify-content-evenly">
          <div className="row mt-5 mb-5">
            <div className="col">
              <h2>Последние добавленные точки</h2>
              <div id="points"></div>
            </div>
            <div className="col">
              <div className="text-center row">
                <h2>Страница пользователя {userData}</h2>
              </div>
              <div className="row">
                <div className="text-center col">
                  {
                    <a
                      className="mt-5 mb-5 text-center btn btn-light btn-lg button-above-tcp"
                      href="/changePassword"
                    >
                      <div onClick={Return}>Сменить пароль</div>
                    </a>
                  }
                  {
                    <a
                      className="mt-5 mb-5 text-center btn btn-light btn-lg button-above-tcp"
                      href="https://github.com/Yakuza-Karaoke"
                    >
                      <div>
                        <i className="bi bi-github"></i>
                      </div>
                    </a>
                  }
                </div>
              </div>
            </div>
            <div className="container">
              <div className="text-change-password-statistic-header text-center mb-4 mt-5">
                <h2>Ваша статистика:</h2>
                <div className="col">
                  <div className="text-change-password-statistic text-center mt-5 mb-5">
                    <h4 id="add">Точек добавлено - 000</h4>
                  </div>
                </div>
                <div className="col">
                  <div className="text-change-password-statistic text-center mt-5 mb-5">
                    <h4 id="installed">Точек установлено - 000</h4>
                  </div>
                </div>
                <div className="col">
                  <div className="text-change-password-statistic text-center mt-5 mb-5">
                    <h4>Точек отменено - 0</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Navigate replace to="/login" />;
  }
}
