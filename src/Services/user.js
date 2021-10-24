import http from "../component/http/http-common";

export const register = (userDetails) => {
  return http.post("/register", userDetails);
};
