import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doSubmitForm } from "../common/reg";
import { toast } from "react-toastify";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPwd, setCheckPwd] = useState("");

  const [checkPwdError, setCheckPwdError] = useState("");

  const navigate = useNavigate();

  const GoLogin = () => {
    return navigate("/login");
  };

  const CheckFullname = (fullname) => {
    setFullname(fullname.target.value);
  };

  const CheckUsername = (username) => {
    setUsername(username.target.value);
  };

  const CheckPassword = (password) => {
    setPassword(password.target.value);
  };

  const CheckPwd = (checkPwd) => {
    setCheckPwd(checkPwd.target.value);
  };

  const clearFields = () => {
    setFullname("");
    setUsername("");
    setPassword("");
    setCheckPwd("");
  }

  const doSubmit = () => {
    console.log(
      "Кнопка тыкнулась",
      "Full Name: " + fullname,
      "Username: " + username,
      "Password: " + password
    );

    if (password !== checkPwd) {setCheckPwdError("Пароли не совпадают!")} else setCheckPwdError("")

    if (fullname && username && password && !checkPwdError) {
      doSubmitForm(fullname, username, password)
        .then(() => {
          toast.success('Пользователь успешно создан!');
          clearFields();
          return navigate("/login");
        })
        .catch((error) => {
          toast.error(String(error.response.data.detail));
        });
    } else {
      if (checkPwdError) {toast.error(checkPwdError)} else toast.error('Все поля должны быть заполнены!')
    }
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
                  onChange={CheckFullname}
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
                  onChange={CheckUsername}
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
                  onChange={CheckPassword}
                />
                <label htmlFor="Password" className="p-3">
                  Пароль
                </label>
              </div>

              <div className="col-10 form-floating mb-2">
                <input
                  type="Password"
                  className="form-control"
                  id="CheckPwd"
                  placeholder="checkPwd"
                  value={checkPwd}
                  onChange={CheckPwd}
                />
                <label htmlFor="CheckPwd" className="p-3">
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
