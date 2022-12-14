import axios from "axios";
import { toast } from "react-toastify";

export const doCalcScore = (lat, long) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(`http://178.170.192.207:8000/points/score?lat=${lat}&long=${long}`, {
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
  toast.promise(promise, {
    success: "Оценка получена",
    error: "Произошла ошибка",
  });
  return promise;
};

export const doSavePostamat = (lat, long, score) => {
  console.log(localStorage.getItem("token"));
  return new Promise((resolve, reject) => {
    axios
      .post("http://178.170.192.207:8000/points/postamat", "", {
        params: {
          lat: lat,
          long: long,
          score: score,
        },
        headers: {
          accept: "application/json",
          token: localStorage.getItem("token"),
          "content-type": "application/x-www-form-urlencoded",
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

export const savePointCalc = (data) => {
  localStorage.setItem();
};

export const doGetUserPoints = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://178.170.192.207:8000/points/my", {
        headers: {
          accept: "application/json",
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
