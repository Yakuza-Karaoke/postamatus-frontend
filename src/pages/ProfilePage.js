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
      <div className="text-center mt-5">
        <h3>Последние добавленные точки</h3>
      </div>
      <div className="text-center container-fluid">
        <div className="row justify-content-end">
          <div className="col-2 mb-4">
            <h4>Добро пожаловать, путин в.в</h4>
          </div>
          <div className="col-2  mb-4">
            <h4>ВАШ ID - 2281337</h4>
          </div>
          <div className="col-4">
            <TableForProfile />
          </div>
          <div className="col-4">
            <div className="cointainer-fluid">
              <div className="row">
                <div className="col-5"></div>
                <div className="col-4">
                  <div className="row justify-content-center">
                    <div className="col-19 text-center text-change-password mb-4">
                      <h5>Хотите поменять пароль?</h5>
                    </div>
                    <div className="col-7 text-center">
                      <a
                        className="text-center btn btn-light btn-lg  button-above-tcp"
                        href="/changePassword"
                      >
                        <div onClick={Return}>ТЫК</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-secondary">
        <div className="row">
          <div className="text-change-password-statistic-header text-center col-2 mb-4 mt-5">
            <h2>Ваша статистика:</h2>
          </div>
        </div>
        <div className="row">
          <div className="text-change-password-statistic col-2  mb-5">
            Точек добавлено - 228
          </div>
        </div>
        <div className="row">
          <div className="text-change-password-statistic col-2 mb-5">
            Точек установлено - 000
          </div>
        </div>
        <div className="row">
          <div className="text-change-password-statistic col-2  mb-5">
            Точек отменено - 666
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
