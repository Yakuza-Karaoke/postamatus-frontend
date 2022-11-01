import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { doGetAuthToken, doFetchUser } from "../common/auth";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

  const clearErrorFields = () => {
    setUsernameError("");
    setPasswordError("");
  };

  const checkUsername = (username) => {
    // clearErrorFields();
    // if (username !== "") setUsernameError("");
    // else setUsernameError("incorrect");
    setUsername(username.target.value);
  };

  const checkPassword = (password) => {
    // clearErrorFields();
    // if (password !== "") setPasswordError("");
    // else setPasswordError("incorrect");
    setPassword(password.target.value);
  };

  const doLogin = () => {
    console.log("Я ТУТ");
    console.log("Username: " + username);
    console.log("Password: " + password);

    if (!username) setUsernameError("логина нет");
    if (!password) setPasswordError("пароля нет");

    if (!usernameError && !passwordError) {
      doGetAuthToken(username, password)
        .then(() => {
          localStorage.setItem("authenticated", true);
          <Navigate replace to="/" />
        })
        .catch((error) => {
          clearErrorFields();
          alert(error);
          localStorage.setItem("authenticated", false)
        });
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="loginForm d-flex flex-column justify-content-center align-items-center">
      <div className="form d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-5">
            <div className="col-1"></div>
            <h3 className="col">Вход</h3>
            <h3 className="col text-end">Регистрация</h3>
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
                  Username
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
                  Password
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
