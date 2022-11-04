import "./index.css";
import { doFetchUser } from "./common/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
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
      <div className="container">
        <div className="row align-items-center head">
          <div className="col-auto me-auto p-3">Постаматус</div>
          <div className="col-auto p-3">
            <div className="row align-items-center justify-content-evenly">
              {localStorage.getItem("token") && (
                <>
                  <div className="lead col-auto">
                    Добро пожаловать, {userData}!
                  </div>
                  <div className="col pointer" onClick={Logout}>
                    <i class="bi bi-door-closed"></i>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
