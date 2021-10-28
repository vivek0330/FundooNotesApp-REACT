import Axios from "axios";

// Axios.defaults.baseURL = "http://localhost:8080";

// const header = {
//   headers: {
//     token: token,
//   },
// };

class UserNoteServices {
  static addNote = (data) => {
    const token = localStorage.getItem("token");
    // console.log(token);
    // console.log(`Bearer ${token}`);
    return Axios.post("http://localhost:8080/createnotes", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  static getNotes = () => {
    const token = localStorage.getItem("token");
    // console.log(token);
    return Axios.get("http://localhost:8080/getnotes", {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  static forgotPassword = (data) => {
    return Axios.post("http://localhost:8080/forgotPassword", data);
  };

  static resetPassword = (data, token) => {
    console.log("token -> ", token);
    return Axios.post("http://localhost:8080/reset-Password", data, token);
  };
}

export default UserNoteServices;
