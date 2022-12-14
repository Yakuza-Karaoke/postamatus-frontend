import axios from "axios";

export const doGetAuthToken = (username, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://178.170.192.207:8000/login`, { login: username, password: password })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          resolve("loggedIn");
        } else reject(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


export const doFetchUser = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://178.170.192.207:8000/me`, {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.status === 200) {
            resolve(res);
          } else reject(res);
        })
        .catch((error) => reject(error));
    });
  };