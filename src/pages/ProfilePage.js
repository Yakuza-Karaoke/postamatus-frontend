import Header from "../Header";
import Footer from "../Footer";
import TableForProfile from "../components/TableForProfile";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  function Return() {
    navigate("/");
  }
  return (
    <div>
      <Header title="Личный кабинет" />
      <div className="text-center mt-5">
        <div className="text-center">
          <h3>Последние добавленные точки</h3>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-end">
          <div className="col text-change-password mb-4">
          Хотите поменять пароль?
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
                      
                      <div className="col-12 text-center text-change-password mb-4">
                      Добро пожаловать, путин в.в
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
      </div>
      <Footer />
    </div>
  );
}
