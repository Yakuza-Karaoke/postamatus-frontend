import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doChangePwd } from "../common/changePwd";

export default function ChangePass() {
  const [newPwd, setNewPwd] = useState("");
  const [checkPwd, setCheckPwd] = useState("");

  const [newPwdError, setNewPwdError] = useState("");

  const navigate = useNavigate();

  const checkNewPwd = (newPwd) => {
    setNewPwd(newPwd.target.value);
  };

  const checkCheckPwd = (checkPwd) => {
    setCheckPwd(checkPwd.target.value);
  };

  const clearFields = () => {
    setNewPwd("");
    setCheckPwd("");
  };

  const doChange = () => {
    setNewPwdError("");
    if (newPwd !== checkPwd) setNewPwdError("Пароли не совпадают!");
    if (!newPwdError) {
      doChangePwd(newPwd)
        .then(() => {
          toast.success("Пароль изменён!");
          return navigate("/");
        })
        .catch((error) => {
          toast.error(String(error.response.data.detail));
          clearFields();
        });
    } else toast.error("Пароли не совпадают!");
  };
  if (localStorage.getItem("authenticated") === "true") {
    return (
      <div className="form-login d-flex flex-column justify-content-center align-items-center">
        <div className="form d-flex flex-column justify-content-center align-items-center">
          <div className="container">
            <div className="row align-items-center text-center mb-5">
              <div className="col-1"></div>
              <h4 className="col-10">СМЕНА ПАРОЛЯ</h4>
              <div className="col-1"></div>
            </div>
          </div>

          <form>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 form-floating mb-2">
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder="Password"
                    value={newPwd}
                    onChange={checkNewPwd}
                  />
                  <label htmlFor="Password" className="p-3">
                    Новый пароль
                  </label>
                </div>

                <div className="col-10 form-floating mb-2">
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder="Password"
                    value={checkPwd}
                    onChange={checkCheckPwd}
                  />
                  <label htmlFor="Password" className="p-3">
                    Повторите пароль
                  </label>
                </div>

                <div className="col-10 btn btn-primary button-login my-3 py-2">
                  <div onClick={doChange}>Изменить</div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <Navigate replace to="/login" />;
  }
}
