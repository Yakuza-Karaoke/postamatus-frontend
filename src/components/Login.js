import React from "react";
import { useState } from "react";
import { doGetAuthToken, doFetchUser } from "../common/auth";

export default function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    if (!username) setUsernameError("логина нет");
    if (!password) setPasswordError("пароля нет");

    if (!usernameError && !passwordError) {
      doGetAuthToken(username, password)
        .then(() => {
        //   alert();
        })
        .catch((error) => {
          clearErrorFields();
          alert(error);
        });
    }
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
              <div class="col-10 form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="Input"
                  placeholder="name@example.com"
                  onChange={checkUsername}
                />
                <label for="Input" className="p-3">
                  Username
                </label>
              </div>

              <div className="col-10 form-floating mb-2">
                <input
                  type="password"
                  class="form-control"
                  id="Password"
                  placeholder="Password"
                  onChange={checkPassword}
                />
                <label for="Password" className="p-3">
                  Password
                </label>
              </div>

              <div className="form-check col-9 mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="RememberMe"
                />
                <label class="form-check-label" for="RememberMe">
                  Запомнить меня
                </label>
              </div>

              <div className="col-10 btn btn-primary button-login mb-3">
                <p onClick={doLogin}>Войти</p>
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
