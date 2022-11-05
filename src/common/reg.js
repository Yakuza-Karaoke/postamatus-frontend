import axios from "axios";

export const doSubmitForm = (fullname, username, password) => {

  return new Promise((resolve, reject) => {
    axios
      .post(
        `http://178.170.192.207:8000/reg`,
        { username: username, full_name: fullname, password: password }
      )
      .then((res) => {
        if (res.status === 200) {
          resolve("AccountCreated");
        } else reject(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
