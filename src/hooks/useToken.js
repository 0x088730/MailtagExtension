import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_REFRESH_TOKEN } from "../redux/Auth/user.type";
const useToken = (url) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  dispatch({
    type: SET_REFRESH_TOKEN,
    payload:
      "eyJhbGciOiJIUzI1NiJ9.MTAxNzEyNzQ2MDQ3NDMwMDU4NjIx.D31A2lmbRsfxfj0kDYdo07CIkxc_vn3oCMvygKsNOt8",
  });
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useToken;
