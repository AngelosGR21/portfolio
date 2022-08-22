import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { Typography, Button, Box } from "@mui/material";

import SideNavbar from "./components/SideNavbar";

import globalStyles from "./styles/globalStyles";
import homeStyles from "./styles/homeStyles";

import image from "./images/HomeSVG2.svg";

const Home = () => {
  globalStyles();
  const classes = homeStyles();

  useEffect(() => {
    document.title = "Angelos Grigoriu - Homepage";
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <SideNavbar/>
      <Box className={classes.mainContainer}>
        <Box className={classes.textAndButtonsContainer}>
          <Box className={classes.textContainer}>
            <Typography className={classes.homeHeader}>
              Hi there, I'm
            </Typography>
            <Typography className={classes.homeHeader}>
              Angelos Grigoriu,
            </Typography>
            <Typography className={classes.homeHeader}>
              Web Developer.
            </Typography>
          </Box>
          <Box className={classes.buttonsContainer}>
            <Link to="/about" className={classes.homeLinks}>
              <Button variant="outlined" className={classes.buttons}>
                About
              </Button>
            </Link>
            <Link to="/projects" className={classes.homeLinks}>
              <Button variant="outlined" className={classes.buttons}>
                Projects
              </Button>
            </Link>
          </Box>
        </Box>
        <Box className={classes.imageContainer}>
          <img src={image} alt="home" className={classes.image}></img>
        </Box>
      </Box>
    </>
  );
};

export default Home;
