import { REFRESH_TOKEN } from "constract/utilis";

export const login = () => {
  localStorage.setItem(REFRESH_TOKEN, "TestLogin");
};

export const logout = () => {
  localStorage.removeItem(REFRESH_TOKEN);
};

export const isLogin = () => {
  localStorage.setItem(
    REFRESH_TOKEN,
    "eyJhbGciOiJIUzI1NiJ9.MTAxNzEyNzQ2MDQ3NDMwMDU4NjIx.D31A2lmbRsfxfj0kDYdo07CIkxc_vn3oCMvygKsNOt8"
  );
  if (localStorage.getItem(REFRESH_TOKEN)) {
    return true;
  }
  return false;
};
