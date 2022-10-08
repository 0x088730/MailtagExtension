import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Switch, useLocation } from "react-router-dom";
import MailTagNavbar from "components/Navbars/MailTagNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes";
import PrivateRoute from "components/PrivateRoot";
// import Spinner from "components/Spinner";
// import PaymentIssue from "components/PaymentIssue";

var ps;
function Dashboard(props) {
  const backgroundColor = "white";
  const activeColor = "primary";
  const mainPanel = React.useRef();
  const location = useLocation();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  // const { loading } = useSelector((state) => state.spinner);
  // if (loading) return <Spinner />;
  
  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      <div className="main-panel" ref={mainPanel}>
        <MailTagNavbar {...props} />
        <Switch>
          {routes.map((prop, key) => {
            return (
              <PrivateRoute
                component={prop.component}
                path={prop.layout + prop.path}
                key={key}
              />
            );
          })}
        </Switch>
        <Footer fluid />
      </div>
      {/* <FixedPlugin
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}
      /> */}
    </div>
  );
}

export default Dashboard;
