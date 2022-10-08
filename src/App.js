import ReactDOM from "react";
import AdminLayout from "layouts/Admin";
import { BrowserRouter, Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import Login from "views/Login";
import { useDispatch,  } from "react-redux";
import {
  getMilestone,
} from "redux/Auth/user.action";
import config from "./config";
import GoogleSuccess from "views/GoogleSuccess";
import Spinner from "components/Spinner";
import useAuth from "hooks/useAuth";

ReactGA.initialize(config.googleAnalyticsId);
ReactGA.send("pageview");

const ProtectedRoute = ({ ...rest }) => {
  const { loading, user, isAuthenticated } = useAuth()
  const navigate = useHistory();
  const location = useLocation();

  if (loading) {
    return <Spinner />
  }
  if (!isAuthenticated) {
    navigate.replace("/login", {
      state: { from: location },
      replace: true,
    });
  }

  return <Route {...rest} />
}

export default function App() {
  const { loading, user } = useAuth()
  const dispatch = useDispatch();
  dispatch(getMilestone());
  
  return (
    <Switch>
      {/* {!window.opener && <Redirect to={!user ? "/login" : "/admin"} />} */}
      <Route path="/" exact render={(props) => <Redirect to={!user ? "/login" : "/admin"} />} />
      <Route path="/login" exact component={Login} />
      <Route path="/google/success" component={GoogleSuccess} />
      {/* <Redirect to="/admin/dashboard" /> */}
      <ProtectedRoute path="/admin" render={(props) => <AdminLayout {...props} />} />
    </Switch>
  );
}
