import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doGetAuthToken, doFetchUser } from "../common/auth";
import { toast } from "react-toastify";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const checkUsername = (username) => {
    setUsername(username.target.value);
  };

  const checkPassword = (password) => {
    setPassword(password.target.value);
  };

  const clearFields = () => {
    setUsername("");
    setPassword("");
  };

  const doLogin = () => {
    console.log("Username: " + username + ", Password: " + password);

    if (username && password) {
      doGetAuthToken(username, password)
        .then(() => {
          localStorage.setItem("authenticated", true);
          return navigate("/");
        })
        .catch((error) => {
          toast.error(String(error.response.data.detail));
          localStorage.setItem("authenticated", false);
          clearFields();
        });
    } else {
      toast.error("Введите логин и пароль!");
    }
  };

  function GoReg() {
    return navigate("/reg");
  }

  return (
    <div className="form-login d-flex flex-column justify-content-center align-items-center">
      <div className="form d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-5">
            <div className="col-1"></div>
            <h4 className="col">ВХОД</h4>
            <h4 className="col text-end pointer">
              <div onClick={GoReg}>РЕГИСТРАЦИЯ</div>
            </h4>
            <div className="col-1"></div>
          </div>
        </div>

        <form>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  placeholder="name@example.com"
                  value={username}
                  onChange={checkUsername}
                />
                <label htmlFor="Username" className="p-3">
                  Имя пользователя
                </label>
              </div>

              <div className="col-10 form-floating mb-2">
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  value={password}
                  onChange={checkPassword}
                />
                <label htmlFor="Password" className="p-3">
                  Пароль
                </label>
              </div>

              <div className="form-check col-9 mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="RememberMe"
                />
                <label className="form-check-label" htmlFor="RememberMe">
                  Запомнить меня
                </label>
              </div>

              <div className="col-10 btn btn-primary button-login mb-3">
                <div onClick={doLogin}>Войти</div>
              </div>

              <div className="col-10 text-center">
                <p onClick={doFetchUser}>Забыли пароль?</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const Logout = () => {
  console.log("Logout");
};
