import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { Box, SvgIcon, Typography, AppBar } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
//styles
import sideBarStyles from "../styles/sideBarStyles";
const SideNavbar = () => {
  const classes = sideBarStyles();
  const [width, setWidth] = useState(window.innerWidth);

  const [openMenu, setOpenMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const checkSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    if (openMenu && width >= 960) {
      setOpenMenu(false);
      setShowMenu(false);
    }
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  //Variants for motion

  const topVariant = {
    clicked: {
      originX: "left",
      rotate: openMenu ? "35deg" : "0deg",
    },
  };

  const middleVariant = {
    clicked: {
      opacity: openMenu ? 0 : 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const bottomVariant = {
    clicked: {
      originX: "left",
      rotate: openMenu ? "-35deg" : "0deg",
    },
  };

  const modalVariant = {
    initial: {
      clipPath: "circle(0px at 5% -10px)",
      webkitClipPath: "circle(10px at 5% -10px)",
      display: "flex",
      transition: {
        duration: 0.5,
      },
    },
    clicked: {
      display: "flex",
      clipPath: "circle(1200px at 5% -10px)",
      webkitClipPath: "circle(1200px at 5% -10px)",
      transition: {
        duration: 1,
      },
    },
  };

  //Mobile view
  if (width < 960) {
    return (
      <>
        <AppBar
          position="fixed"
          className={classes.mobileNavbar}
          component="nav"
        >
          <div
            className={classes.mobileMenu}
            onClick={() => {
              setOpenMenu((prev) => !prev);
              setShowMenu((prev) => !prev);
            }}
          >
            <motion.span
              className={classes.menuLines}
              variants={topVariant}
              animate="clicked"
            ></motion.span>
            <motion.span
              className={classes.menuLines}
              variants={middleVariant}
              animate="clicked"
              transition="transition"
            ></motion.span>
            <motion.span
              className={classes.menuLines}
              variants={bottomVariant}
              animate="clicked"
            ></motion.span>
          </div>
        </AppBar>

        <Box
          className={classes.menuModal}
          component={motion.div}
          variants={modalVariant}
          animate={showMenu ? "clicked" : "initial"}
        >
          <Link to="/" className={classes.menuItemsContainer}>
            <Typography className={classes.menuItemHeader}>Home</Typography>
            <SvgIcon classes={{ root: classes.sideBarIcons }}>
              <HomeIcon />
            </SvgIcon>
          </Link>
          <Link to="/about" className={classes.menuItemsContainer}>
            <Typography className={classes.menuItemHeader}>About</Typography>
            <SvgIcon classes={{ root: classes.sideBarIcons }}>
              <AccountCircleIcon />
            </SvgIcon>
          </Link>
          <Link to="/projects" className={classes.menuItemsContainer}>
            <Typography className={classes.menuItemHeader}>Projects</Typography>
            <SvgIcon classes={{ root: classes.sideBarIcons }}>
              <CodeIcon />
            </SvgIcon>
          </Link>
          <Link to="/contact" className={classes.menuItemsContainer}>
            <Typography className={classes.menuItemHeader}>
              Contact Me
            </Typography>
            <SvgIcon classes={{ root: classes.sideBarIcons }}>
              <EmailIcon />
            </SvgIcon>
          </Link>
        </Box>
      </>
    );
  }

  //Desktop view
  return (
    <>
      <Box className={classes.sideBarContainer} component="section">
        {/* <Box
          className={classes.sideBarItem}
          component={motion.div}
          whileHover={{ x: 50 }}
        > */}
        <Link
          to="/"
          className={classes.sideBarItem}
          component={motion.a}
          whileHover={{ x: 50 }}
        >
          <Typography className={classes.sideBarNames}>Home</Typography>

          <SvgIcon classes={{ root: classes.sideBarIcons }}>
            <HomeIcon />
          </SvgIcon>
        </Link>
        {/* </Box> */}
        <Link
          to="/about"
          className={classes.sideBarItem}
          component={motion.a}
          whileHover={{ x: 50 }}
        >
          <Typography className={classes.sideBarNames}>About</Typography>
          <SvgIcon classes={{ root: classes.sideBarIcons }}>
            <AccountCircleIcon />
          </SvgIcon>
        </Link>
        <Link
          to="/projects"
          className={classes.sideBarItem}
          component={motion.a}
          whileHover={{ x: 70 }}
        >
          <Typography className={classes.sideBarNames}>Projects</Typography>
          <SvgIcon classes={{ root: classes.sideBarIcons }}>
            <CodeIcon />
          </SvgIcon>
        </Link>
        <Link
          to="/contact"
          className={classes.sideBarItem}
          component={motion.a}
          whileHover={{ x: 90 }}
        >
          <Typography className={classes.sideBarNames}>Contact Me</Typography>
          <SvgIcon classes={{ root: classes.sideBarIcons }}>
            <EmailIcon />
          </SvgIcon>
        </Link>
      </Box>
    </>
  );
};

export default SideNavbar;
