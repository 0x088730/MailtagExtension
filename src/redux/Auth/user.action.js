import useFetch from "hooks/useFetch";
import useRefreshToken from "hooks/useRefreshToken";
import config from "../../config";
import {
  SET_ACCESS_TOKEN,
  SET_CURRENT_USER,
  SET_MILESTONE,
  SET_SUBSCRIPTION,
} from "./user.type";
export const getUserData = () => {
  return async (dispatch) => {
    const [data] = await useFetch(`/${config.me}`);
    if (data && data.user) {
      dispatch({ type: SET_CURRENT_USER, payload: data.user });
    }
  };
};
export const getUserSubscription = () => {
  return async (dispatch) => {
    const [data] = await useFetch(`${config.subscription}`);
    if (data && data.subscription) {
      dispatch({ type: SET_SUBSCRIPTION, payload: data.subscription });
    }
  };
};
export const getMilestone = () => {
  return async (dispatch) => {
    const [data] = await useFetch(`${config.milestones}`);
    if (data && data.milestoneEvents) {
      dispatch({ type: SET_MILESTONE, payload: data.milestoneEvents });
    }
  };
};

/**
 * deprecated
 * @returns 
 */
// export const getAccessToken = () => {
//   return async (dispatch) => {
//     const refresh = useRefreshToken();
//     const response = await refresh();
//     console.log(response);
//     if (response && response.data.data.accessToken) {
//       alert(response.data.data.accessToken);
//       dispatch({
//         type: SET_ACCESS_TOKEN,
//         payload: response.data.data.accessToken,
//       });
//     } else {
//       //   window.location.href = "/admin/logout";
//     }
//   };
// };
