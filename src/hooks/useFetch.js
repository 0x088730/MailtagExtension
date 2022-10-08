import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchSuccess,
  fetchStart,
  fetchError,
} from "redux/Common/common.action";
import useAxiosPrivate from "./useAxiosPrivate";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const startFetch = async () => {
      try {
        dispatch(fetchStart());
        const response = await axiosPrivate.get(`/${url}`, {
          signal: controller.signal,
        });
        dispatch(fetchSuccess());
        isMounted && setData(response?.data?.data || "");
      } catch (err) {
        dispatch(fetchError("Fetch Error"));
        console.error(err);
      }
    };
    startFetch();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url]);

  return [data];
};

export default useFetch;
