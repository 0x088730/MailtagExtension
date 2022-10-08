import { SET_LOADING } from "../Loading/loader.type";
const INITIAL_STATE = {
  loading: true,
};
const loaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    default:
      return state;
  }
};

export default loaderReducer;
