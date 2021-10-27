import Axios from "axios";

// Axios.defaults.baseURL = "http://localhost:8080";

// const token = localStorage.getItem("token");
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
}

export default UserNoteServices;
