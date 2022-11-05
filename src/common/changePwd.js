import axios from "axios";

export const doChangePwd = (newPwd) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://178.170.192.207:8000/password`, "", {
        params: {
          new_password: newPwd,
        },
        headers: {
          accept: "application/json",
          token: localStorage.getItem("token"),
          "content-type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          resolve("Password changed!");
        } else reject(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
