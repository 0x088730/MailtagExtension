import CONFIG from "config";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { SET_CURRENT_USER } from "redux/Auth/user.type";
import { SET_REFRESH_TOKEN } from "redux/Auth/user.type";
import { SET_ACCESS_TOKEN } from "redux/Auth/user.type";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const refreshToken = useSelector(store => store.auth.refresh);
  const user = useSelector(store => store.auth.user);
  const navigate = useHistory();

  useEffect(() => {
    // const refresh = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3M2VlZjMwNi1iOWVkLTQ1NjAtOGRhNi0zZmQ5Mjc5YjQ1OWUiLCJwcm92aWRlcklkIjoiMTAwODQ5MTE5NTU2MDY1MjAwNzQxIiwidGltZXN0YW1wIjoxNjYwNTkxMzIyLCJpYXQiOjE2NjA1OTEzMjJ9.WfXQuK30geryLC03LOoCNPsgLj_b_4uzYKXL0B3lfcM'
    // dispatch({ type: SET_REFRESH_TOKEN, payload: refresh })
    window.handleAuthCallback = ({ access, refresh}) => {
      debugger
      dispatch({ type: SET_ACCESS_TOKEN, payload: access })
      dispatch({ type: SET_REFRESH_TOKEN, payload: refresh })
      navigate.replace("/admin");
    }
  }, [])

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    (async () => {
      if (refreshToken) {
        const getUsers = async () => {
          try {
            setLoading(true);
            const response = await axiosPrivate.get(`/${CONFIG.me}`, {
              signal: controller.signal,
            });
            isMounted &&
              dispatch({
                type: SET_CURRENT_USER,
                payload: response.data.data.user,
              });
          } catch (err) {
            dispatch({
              type: SET_CURRENT_USER,
              payload: null,
            });
            console.error(err);
          }
        };
        await getUsers();
      }

      setLoading(false);

    })()
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [refreshToken]);

  const value = { auth, setAuth, loading, user, isAuthenticated: !!user }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

