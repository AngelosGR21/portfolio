import { makeStyles } from "@mui/material";

import colors from "./colors";

const homeStyles = makeStyles((theme) => ({
  "@global": {
    html: {
      fontSize: "16px",
      [theme.breakpoints.up("sm")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.up(800)]: {
        fontSize: "22px",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "30px",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "40px",
      },
    },
  },

  mainContainer: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "center",
    },
  },

  textAndButtonsContainer: {
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      height: "70%",
      width: "100%",
      marginLeft: "50px",
      marginBottom: "50px",
    },
    [theme.breakpoints.up("md")]: {
      alignItems: "start",
      justifyContent: "center",
      marginLeft: "100px",
      marginBottom: "0",
    },
    [theme.breakpoints.up("lg")]: {
      alignItems: "flex-start",
      marginLeft: "150px",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "220px",

      width: "50%",
    },
  },
  textContainer: {
    [theme.breakpoints.up("md")]: {
      marginBottom: "60px",
    },
  },
  homeHeader: {
    fontFamily: "Kaisei Tokumin, serif",
    fontWeight: "700",
    color: colors.white,
    textTransform: "uppercase",
    fontSize: "1.4rem",
    letterSpacing: "1.5px",
    "&:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "&:nth-of-type(3)": {
      fontSize: "1.1rem",
    },
  },
  buttonsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "60%",
    },
  },
  homeLinks: {
    textDecoration: "none",
    textAlign: "left",
  },
  buttons: {
    fontFamily: "Kaisei Tokumin, serif",
    color: colors.orange,
    borderColor: colors.orange,
    fontSize: "0.7rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.5rem",
    },
    "&:nth-of-type(1)": {},
  },
  imageContainer: {
    textAlign: "center",
    height: "60%",
    width: "80%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      height: "70%",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      marginBottom: "50px",
    },
    [theme.breakpoints.up("xl")]: {
      justifyContent: "center",
      width: "80%",
    },
  },
  image: {
    width: "250px",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up(1050)]: {
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "65%",
    },
  },
}));

export default homeStyles;
