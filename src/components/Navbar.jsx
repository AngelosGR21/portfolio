import { useState, useEffect } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, SvgIcon, Typography, AppBar, Link } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
//styles
import "../styles/SideNavbar.css";

const Navbar = () => {
  const navigate = useNavigate();
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
  }, [openMenu, width]);

  //Variants for motion
  const hamburger = {
    topVariant: {
      clicked: {
        originX: "left",
        rotate: openMenu ? "39deg" : "0deg",
      },
    },
    middleVariant: {
      clicked: {
        opacity: openMenu ? 0 : 1,
        transition: {
          duration: 0.2,
        },
      },
    },
    bottomVariant: {
      clicked: {
        originX: "left",
        rotate: openMenu ? "-39deg" : "0deg",
      },
    }
  }

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
      clipPath: "circle(1300px at 5% -10px)",
      webkitClipPath: "circle(1300px at 5% -10px)",
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
          className="mobile-navbar"
          component="nav"
        >
          <div
            className="mobile-hamburger"
            onClick={() => {
              setOpenMenu((prev) => !prev);
              setShowMenu((prev) => !prev);
            }}
          >
            <motion.span
              className="mobile-menu-lines"
              variants={hamburger.topVariant}
              animate="clicked"
            ></motion.span>
            <motion.span
              className="mobile-menu-lines"
              variants={hamburger.middleVariant}
              animate="clicked"
              transition="transition"
            ></motion.span>
            <motion.span
              className="mobile-menu-lines"
              variants={hamburger.bottomVariant}
              animate="clicked"
            ></motion.span>
          </div>
        </AppBar>

        <Box
          className="mobile-menu-modal"
          component={motion.div}
          variants={modalVariant}
          animate={showMenu ? "clicked" : "initial"}
        >
          <RouterLink to="/" className="mobile-menu-options-container">
            <Typography className="mobile-menu-options-header">Home</Typography>
            <SvgIcon className="navbar-mui-icons">
              <HomeIcon />
            </SvgIcon>
          </RouterLink>
          <RouterLink to="/about" className="mobile-menu-options-container">
            <Typography className="mobile-menu-options-header">About</Typography>
            <SvgIcon className="navbar-mui-icons">
              <AccountCircleIcon />
            </SvgIcon>
          </RouterLink>
          <RouterLink to="/projects" className="mobile-menu-options-container">
            <Typography className="mobile-menu-options-header">Projects</Typography>
            <SvgIcon className="navbar-mui-icons">
              <CodeIcon />
            </SvgIcon>
          </RouterLink>
          <RouterLink to="/contact" className="mobile-menu-options-container">
            <Typography className="mobile-menu-options-header">
              Contact Me
            </Typography>
            <SvgIcon className="navbar-mui-icons">
              <EmailIcon />
            </SvgIcon>
          </RouterLink>
        </Box>
      </>
    );
  }

  //Desktop view

  return (
    <>
      <Box className="desktop-navbar-container" component="section">
        <Link
          className="desktop-navbar-links"
          component={motion.a}
          whileHover={{ x: width >= 1920 ? 76 : 65 }}
          onClick={() => navigate("/")}
        >
          <Typography className="desktop-navbar-headers">Home</Typography>

          <SvgIcon className="navbar-mui-icons">
            <HomeIcon />
          </SvgIcon>
        </Link>
        <Link
          className="desktop-navbar-links"
          component={motion.a}
          whileHover={{ x: width >= 1920 ? 76 : 65 }}
          onClick={() => navigate("/about")}
        >
          <Typography className="desktop-navbar-headers">About</Typography>
          <SvgIcon className="navbar-mui-icons">
            <AccountCircleIcon />
          </SvgIcon>
        </Link>
        <Link
          className="desktop-navbar-links"
          component={motion.a}
          whileHover={{ x: width >= 1920 ? 80 : 78 }}
          onClick={() => navigate("/projects")}
        >
          <Typography className="desktop-navbar-headers">Projects</Typography>
          <SvgIcon className="navbar-mui-icons">
            <CodeIcon />
          </SvgIcon>
        </Link>
        <Link
          className="desktop-navbar-links"
          component={motion.a}
          whileHover={{ x: width >= 1920 ? 76 : 76 }}
          onClick={() => navigate("/contact")}
        >
          <Typography className="desktop-navbar-headers">Contact</Typography>
          <SvgIcon className="navbar-mui-icons">
            <EmailIcon />
          </SvgIcon>
        </Link>
      </Box>
    </>
  );
};

export default Navbar;
