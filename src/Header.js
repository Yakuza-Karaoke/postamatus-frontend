import "./index.css";
import { doFetchUser } from "./common/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const title = <div>Панель администратора</div>

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
          <div className="row align-items-center justify-content-between head">
            <div className='col-auto pl-3'>Постаматус</div>
            <div className='col-auto pr-3'>{title}</div>
            <div className="col-auto p-3">
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
      </div>
    </header>
  );
}
