import SideNavbar from "./components/SideNavbar";
import image from "./images/ErrorAlienSpaceship.svg";

import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

import globalStyles from "./styles/globalStyles";
import errorPageStyles from "./styles/errorPageStyles";

const ErrorPage = () => {
  globalStyles();
  const classes = errorPageStyles();

  return (
    <>
      <SideNavbar />
      <Box className={classes.container}>
        <img alt="spaceship" src={image} className={classes.image}></img>
        <Typography className={classes.header}>Page not found!</Typography>
        <Link to="/" className={classes.link}>
          <Button variant="outlined" className={classes.button}>
            Go Back
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default ErrorPage;
