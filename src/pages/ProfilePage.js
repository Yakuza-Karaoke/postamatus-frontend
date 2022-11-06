import Header from "../Header";
import Footer from "../Footer";
import TableForProfile from "../components/TableForProfile";
import { useNavigate, Navigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  function Return() {
    navigate("/");
  }

  if (localStorage.getItem("authenticated") === "true") { 
  return (
    <div>
      <Header title="Личный кабинет" />
      <div className="container-fluid">
        <div className="text-center row">
          <div className="col-6 mt-5 mb-5">
            <h2>Последние добавленные точки</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TableForProfile />
          </div>
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="text-center col">
                  <h2>Добро пожаловать, путин в.в</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="text-center mt-5 mb-5">
                    <h4>Ваш ID - 2281337</h4>
                  </div>
                </div>
                <div className="text-center col">
                  {
                    <a
                      className="mt-5 mb-5 text-center btn btn-light btn-lg  button-above-tcp"
                      href="/changePassword"
                    >
                      <div onClick={Return}>Сменить пароль</div>
                    </a>
                  }
                </div>
              </div>
              <div className="row">
                <div className="col">
                    <div className="text-change-password-statistic-header text-center mb-4 mt-5">
                      <h2>Ваша статистика:</h2>
                  </div>
                  <div className="row">
                    <div className="text-change-password-statistic text-center col-6  mt-5 mb-5">
                      <h4>Точек добавлено - 228</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="text-change-password-statistic text-center col-6 mt-5 mb-5">
                      <h4>Точек установлено - 000</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="text-change-password-statistic text-center col-6 mt-5 mb-5">
                      <h4>Точек отменено - 666</h4>
                    </div>
                  </div>
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
