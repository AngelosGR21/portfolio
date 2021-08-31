import React from "react";

import { Typography, Container, Button } from "@material-ui/core";

import SideNavbar from "./components/SideNavbar";

import globalStyles from "./styles/globalStyles";
import homeStyles from "./styles/homeStyles";

import image from "./images/HomeSVG2.svg";

const Home = () => {
  globalStyles();
  const classes = homeStyles();

  return (
    <>
      <SideNavbar></SideNavbar>
      <Container maxWidth="lg" className={classes.homeContainer}>
        <Container className={classes.textAndButtonContainer}>
          <Container className={classes.textContainer}>
            <Typography variant="h4" className={classes.homeHeader}>
              Hi there, I'm
            </Typography>
            <Typography variant="h3" className={classes.homeHeader}>
              Angelos Grigoriu
            </Typography>
            <Typography variant="h4" className={classes.homeHeader}>
              Web Developer.
            </Typography>
          </Container>
          <Container className={classes.buttonContainer}>
            <Button variant="outlined" className={classes.buttons}>
              About
            </Button>
            <Button variant="outlined" className={classes.buttons}>
              Projects
            </Button>
          </Container>
        </Container>
        <img src={image} alt="home" className={classes.homeImage}></img>
      </Container>
    </>
  );
};

export default Home;
