import { combineReducers } from "redux";
import authReducer from "./Auth/user.reducer";
import commonReducer from "./Common/common.reducer";
import LoadingReducer from "./Loading/loader.reducer";
const rootReducer = combineReducers({
  spinner: LoadingReducer,
  common: commonReducer,
  auth: authReducer,
});

export default rootReducer;
