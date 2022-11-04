import './index.css'
import { doFetchUser } from './common/auth'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Header() {
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();

  const govno = useEffect(() => {
    setUserData(
      doFetchUser()
        .then(res => res.data.username)
    );
  }, []);

  const Logout = () => {
    localStorage.clear();
    navigate("/login")
  }

  return (
      <header>
        <div className="container">
          <div className="row align-items-center head">
            <div className='col-auto me-auto p-3'>Постаматус</div>
            <div className='col-auto p-3'>
              <div className='row align-items-center justify-content-evenly'>
                <div className='col'>Username</div>
                <div className='col pointer' onClick={Logout}>Выйти</div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}
