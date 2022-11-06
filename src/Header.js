import "./index.css";
import { doFetchUser } from "./common/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    doFetchUser().then((res) => setUserData(res.data.full_name));
  }, []);

  const Logout = () => {
    localStorage.clear();
    navigate("/login");
  };

return (
  <header>
    <div>
      <div className="row align-items-center justify-content-between head">
        <div className="text-left col p-4">Постаматус</div>
        <div className="col-auto pr-3">
          {props.title ? props.title : null}
        </div>
        <div className="col-auto p-3">
          {localStorage.getItem("token") && (
            <div className="col-auto lead">
              Добро пожаловать, {userData}!
              <i onClick={Logout} className="bi bi-door-closed pointer"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  </header>
);
}