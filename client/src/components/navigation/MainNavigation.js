import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";
import NavDropdown from "react-bootstrap/NavDropdown";

function MainNavigation() {
  return (
    <Navbar className={classes.navbar} expand="lg">
      <Navbar.Brand href="/" style={{ color: "white" }}>
        Byju's Premier League
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive
                ? `${classes["isLinkActive"]} ${classes["link"]}`
                : `${classes["link"]}`
            }
          >
            Make a prediction
          </NavLink>
          <NavLink
            to="/leaderboard"
            className={(navData) =>
              navData.isActive
                ? `${classes["isLinkActive"]} ${classes["link"]}`
                : `${classes["link"]}`
            }
          >
            Leaderboard
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavigation;
