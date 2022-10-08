import axios from "../api/axios";
import useAuth from "./useAuth";
import config from "../config";
import { useSelector } from "react-redux";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refreshToken = useSelector(store => store.auth.refresh)

  const refresh = async () => {
    if (refreshToken) {
      const data = JSON.stringify({
        refreshToken,
      });
      const response = await axios.post(`/${config.renewAccess}`, data);
      setAuth((prev) => {
        return { ...prev, accessToken: response.data.data.accessToken };
      });
      return response.data.data.accessToken;
    }
  };
  return refresh;
};
export default useRefreshToken;
