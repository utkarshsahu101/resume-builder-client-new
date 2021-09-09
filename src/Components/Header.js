import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Link,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  header: {
    // display: "flex",
    // justifyContent: "space-between",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  desktopToolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const headersData = [
  { label: "Update Profile", href: "/update-profile" },
  { label: "Templates", href: "/template" },
  { label: "Logout", href: "/logout" },
];

function Header() {
  const classes = useStyles();

  const [state, setState] = useState({ mobileView: false, drawerOpen: false });
  const { mobileView, drawerOpen } = state;
  const [error, setError] = useState("");

  const { logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({
            ...prevState,
            mobileView: false,
          }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }, index) => {
      return label === "Logout" ? (
        <Button onClick={handleLogout} color="inherit" key={index}>
          <MenuItem>{label}</MenuItem>
        </Button>
      ) : (
        <Link component={RouterLink} color="inherit" to={href} key={index}>
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }, index) => {
      return label === "Logout" ? (
        <Button onClick={handleLogout} color="inherit" key={index}>
          <MenuItem>{label}</MenuItem>
        </Button>
      ) : (
        <Button component={RouterLink} color="inherit" to={href} key={index}>
          {label}
        </Button>
      );
    });
  };

  const displayMobileView = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    };
    const handleDrawerClose = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    };
    return (
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <Typography variant="h6">{"Resume Maker"}</Typography>
      </Toolbar>
    );
  };
  const displayDesktopView = () => (
    <Toolbar className={classes.desktopToolbar}>
      <Typography variant="h6">{"Resume Maker"}</Typography>
      <div>{getMenuButtons()}</div>
    </Toolbar>
  );
  async function handleLogout() {
    setError("");
    try {
      await logout();
    } catch {
      setError("Failed to log out");
    }
    history.push("/login");
  }
  return (
    <>
      <AppBar position="static" className={classes.header}>
        {mobileView ? displayMobileView() : displayDesktopView()}
        {/* <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button> */}
      </AppBar>
      {error && <Alert severity="error">{error}</Alert>}
    </>
  );
}

export default Header;
