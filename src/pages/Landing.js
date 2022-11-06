/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const navMain = () => {
    return navigate("/main");
  };
  const navAdmin = () => {
    return navigate("/admin");
  };
  const navPp = () => {
    return navigate("/profile");
  };

  return (
    <div className="form-login d-flex flex-column justify-content-center">
      <div className="form d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 h3 text-center mb-4">
              <strong>Постаматус</strong>
            </div>
            <div className="col-10 mb-2 text-center">
              <a className="h4 pointer" onClick={navMain}>
                Главная
              </a>
            </div>
            <div className="col-10 mb-2 text-center">
              <a className="h4 pointer" onClick={navAdmin}>
                Панель управления админа (В разработке)
              </a>
            </div>
            <div className="col-10 text-center">
              <a className="h4 pointer" onClick={navPp}>
                Личный кабинет
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
