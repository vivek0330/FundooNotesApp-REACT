import http from "../component/http/http-common";

export const register = (userDetails) => {
  return http.post("/register", userDetails);
};

export const login = (data) => {
  return http.post("/signin", data);
};
