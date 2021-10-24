import http from "../../src/http-common";

export const register = (userDetails) => {
  console.log(userDetails);
  return http.post("/register", userDetails);
};
