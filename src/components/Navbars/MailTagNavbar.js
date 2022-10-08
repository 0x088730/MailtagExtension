import CicleProgressBar from "components/CicleProgressBar";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import iconFeedBack from "../../assets/img/ic-feedback.svg";
import routes from "routes";
import ReactTooltip from "react-tooltip";
import CheckList from "components/CicleProgressBar/CheckList";
import FeedBackModal from "components/navbar/FeedBackModal";
import NavMailList from "./NavMailList";
import { useSelector } from "react-redux";
function Header(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const location = useLocation();
  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("dark");
    }
    setIsOpen(!isOpen);
  };
  const { user } = useSelector((state) => state.auth);
  // eslint-disable-next-line no-unused-vars
  const getBrand = () => {
    let brandName = "MailTag";
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  };
  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("dark");
    } else {
      setColor("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor.bind(this));
  });
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);
  return (
    <Navbar
      color={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "dark"
          : color
      }
      expand="lg"
      className={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "navbar-absolute fixed-top"
          : "navbar-absolute fixed-top " +
            (color === "transparent" ? "navbar-transparent " : "")
      }
    >
      <Container fluid>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button
              type="button"
              ref={sidebarToggle}
              className="navbar-toggler"
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <NavbarBrand href="/">{getBrand()}</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar>
            <NavItem>
              <ReactTooltip
                clickable={true}
                globalEventOff={"click"}
                event="click"
                place="bottom"
                multiline={true}
                id={`feedback_tooltip`}
                type="light"
              >
                <FeedBackModal></FeedBackModal>
              </ReactTooltip>
              <Link
                to="#!"
                data-toggle="tooltip"
                data-for={`feedback_tooltip`}
                data-tip
                className="nav-link btn-magnify"
              >
                <img
                  src={iconFeedBack}
                  alt="icon Feed Back"
                  id="feedback-img"
                ></img>
              </Link>
            </NavItem>
            <NavItem>
              <ReactTooltip
                clickable={true}
                event="click"
                place="bottom"
                globalEventOff={"click"}
                multiline={true}
                id={`progress_tooltip`}
                type="light"
              >
                <CheckList />
                {/* <CheckListCompleted /> */}
              </ReactTooltip>
              <Link
                to="#!"
                data-toggle="tooltip"
                data-for={`progress_tooltip`}
                data-tip
                className="nav-link btn-magnify"
              >
                <CicleProgressBar progress={75} />
              </Link>
            </NavItem>
            <NavItem>
              <NavMailList emails={user?.email} />
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
