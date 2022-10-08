import { ACCESS_TOKEN, REFRESH_TOKEN } from "constract/utilis";
import {
  GET_CURRENT_USER,
  SET_CURRENT_USER,
  SET_ACCESS_TOKEN,
  SET_REFRESH_TOKEN,
  SET_SUBSCRIPTION,
  SET_MILESTONE,
} from "./user.type";

const INIT_STATE = {
  user: null,
  milestone: null,
  subscription: null,
  token: localStorage.getItem(ACCESS_TOKEN),
  refresh: localStorage.getItem(REFRESH_TOKEN),
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_SUBSCRIPTION: {
      return {
        ...state,
        subscription: action.payload,
      };
    }
    case SET_MILESTONE: {
      return {
        ...state,
        milestone: action.payload,
      };
    }
    case SET_REFRESH_TOKEN: {
      localStorage.setItem(REFRESH_TOKEN, action.payload);
      return {
        ...state,
        refresh: action.payload,
      };
    }
    case SET_ACCESS_TOKEN: {
      localStorage.setItem(ACCESS_TOKEN, action.payload);
      return {
        ...state,
        token: action.payload,
      };
    }
    case SET_CURRENT_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};
export default authReducer;
