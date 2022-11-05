import axios from "axios";

export const doCalcScore = (lat, long) => {
  return new Promise((resolve, reject) => {
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
};


export const savePointCalc = (data) => {
    localStorage.setItem()
}
