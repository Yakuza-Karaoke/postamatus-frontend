import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doGetAuthToken, doFetchUser } from "../common/auth";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const GoLogin = () => {
    return navigate("/login");
  };

  const doSubmit = () => {
    console.log("Кнопка тыкнулась");
    console.log("Full Name: " + fullname);
    console.log("Username: " + username);
    console.log("Password: " + password);

    if (!fullname) console.log("Введите имя и фамилию")
    if (!username) console.log("Введите имя пользователя")
    if (!password) console.log("Введите пароль")
  };

  return (
    <div className="loginForm d-flex flex-column justify-content-center align-items-center">
      <div className="form d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-5 mt-5">
            <div className="col-1"></div>
            <h4 className="col pointer">
              <div onClick={GoLogin}>ВХОД</div>
            </h4>
            <h4 className="col text-end">РЕГИСТРАЦИЯ</h4>
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
                  id="FullName"
                  placeholder="fullname"
                  value={fullname}
                  // onChange={}
                />
                <label htmlFor="FullName" className="p-3">
                  Имя и фамилия
                </label>
              </div>

              <div className="col-10 form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  placeholder="username"
                  value={username}
                  // onChange={}
                />
                <label htmlFor="Username" className="p-3">
                  Имя пользователя
                </label>
              </div>

              <div className="col-10 form-floating mb-2">
                <input
                  type="Password"
                  className="form-control"
                  id="Password"
                  placeholder="password"
                  value={password}
                  // onChange={}
                />
                <label htmlFor="Password" className="p-3">
                  Пароль
                </label>
              </div>

              <div className="col-10 form-floating mb-2">
                <input
                  type="Password"
                  className="form-control"
                  id="Password"
                  placeholder="password"
                  // value={}
                  // onChange={}
                />
                <label htmlFor="Password" className="p-3">
                  Повторите пароль
                </label>
              </div>

              <div className="col-9 btn btn-primary button-login mb-5 mt-4 py-2">
                <div onClick={doSubmit}>Регистрация</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
