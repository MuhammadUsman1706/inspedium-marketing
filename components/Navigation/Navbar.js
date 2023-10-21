import React, { useState } from "react";
import Link from "next/link";
import useWindowSize from "@/hooks/UseWindowSize";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [drawerState, setDrawerState] = useState(false);
  const router = useRouter();
  const window = useWindowSize();

  const toggleDrawer = () => setDrawerState((prevState) => !prevState);
  const navigationHandler = async (event) => {
    event.preventDefault();
    if (router.pathname === "/")
      document.getElementById(event.target.id + 1).scrollIntoView();
    else {
      router.push("/");
      setTimeout(() => {
        document.getElementById(event.target.id + 1).scrollIntoView();
      }, 400);
    }
  };

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
      id={classes["dropdown-box"]}
    >
      <div className={classes["dropdown-logo"]}>
        {/* <h1 style={{ fontFamily: "Josefin Sans" }}> */}
        <Link href="/">
          <div className={classes["logo-mobile"]}>
            <img src="/images/logo.png" alt="Inspedium Marketing" />
          </div>
        </Link>
        {/* </h1> */}
        <span style={{ color: "black" }}>
          <ClearIcon />
        </span>
      </div>
      {/* <Divider /> */}
      <List className={classes["dropdown-list"]}>
        <a id="faqs" onClick={navigationHandler} href="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="FAQ" />
            </ListItemButton>
          </ListItem>
        </a>
        <a id="features" onClick={navigationHandler} href="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Features" />
            </ListItemButton>
          </ListItem>
        </a>
        <Link href="/pricing">
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemIcon></ListItemIcon> */}
              <ListItemText primary="Pricing" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/contact">
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemIcon></ListItemIcon> */}
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/about">
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemIcon></ListItemIcon> */}
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem disablePadding>
          <ListItemButton className={classes["dropdown-buttons"]}>
            <button style={{ width: "150px" }} className="color-button">
              <div>
                <span>SIGNUP</span>
                <span>SIGNUP</span>
              </div>
            </button>
            <button style={{ width: "150px" }} className="color-inverse-button">
              LOGIN
            </button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <header className={classes.navbar}>
      <div className={classes.content}>
        <ul className={classes.links}>
          <li>
            <a id="features" onClick={navigationHandler} href="/">
              Features
            </a>
          </li>
          <li>
            <a id="faqs" onClick={navigationHandler} href="/">
              FAQ
            </a>
          </li>
          <li>
            <Link
              className={router.pathname == "/pricing" ? classes.active : ""}
              href="/pricing"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname == "/contact" ? classes.active : ""}
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname == "/about" ? classes.active : ""}
              href="/about"
            >
              About
            </Link>
          </li>
        </ul>
        <div className={classes["mobile-view"]}>
          <Button
            style={{
              padding: 0,
              color: "black",
            }}
            onClick={toggleDrawer}
          >
            <MenuIcon fontSize="medium" />
          </Button>
          <Drawer
            PaperProps={{
              sx: {
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              },
            }}
            anchor={"top"}
            open={drawerState}
            onClose={toggleDrawer}
          >
            {list()}
          </Drawer>
        </div>
        <div className={classes.logo}>
          <Link
            className={router.pathname == "/" ? classes.active : ""}
            href="/"
          >
            {/* <h1>LOGO</h1> */}
            <img
              src={
                window.width > 1000 || window.width < 801
                  ? "/images/logo.png"
                  : "/images/logo-cropped.png"
              }
              alt="Inspedium Email Marketing"
              title="Inspedium Email Marketing"
            />
          </Link>
        </div>
        <div className={classes.buttons}>
          <button
            onClick={() => {
              window.open("https://app.inspedium.email/login", "_blank");
            }}
            style={
              window.width > 1111
                ? { width: "150px" }
                : { width: "110px", color: "red" }
            }
            className="color-inverse-button"
          >
            <a>LOGIN</a>
          </button>
          <button
            onClick={() => {
              window.open(
                "https://app.inspedium.email/users/register",
                "_blank"
              );
            }}
            style={
              window.width > 1111
                ? { width: "150px" }
                : { width: "110px", color: "red" }
            }
            className="color-button"
          >
            <a>
              <div>
                <span>SIGNUP</span>
                <span>SIGNUP</span>
              </div>
            </a>
          </button>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Navbar;
