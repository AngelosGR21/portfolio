import { makeStyles } from "@mui/material";
import colors from "./colors";

const iconFontSize = "2rem";

const aboutStyles = makeStyles((theme) => ({
  "@global": {
    html: {
      fontSize: "16px",
      [theme.breakpoints.up("md")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "34px",
      },
    },
  },

  //Main container
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "1.5rem",
    [theme.breakpoints.up("sm")]: {
      marginTop: "2.5rem",
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "0",
      height: "100vh",
      width: "70%",
    },
  },

  //About text container
  aboutParagraphContainer: {
    opacity: "0",
    margin: "1rem 0",
    width: "100%",
    color: colors.white,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  aboutParagraph: {
    fontSize: "0.9rem",
    lineHeight: "1.5rem",
    [theme.breakpoints.up("sm")]: {
      lineHeight: "1.8rem",
    },
    [theme.breakpoints.up("md")]: {
      lineHeight: "2.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      lineHeight: "2.0rem",
      letterSpacing: "1px",
    },
  },

  //skills container
  skills: {
    opacity: "0",
    marginTop: "0.8rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "95%",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "0",
    },
    [theme.breakpoints.up("xl")]: {
      width: "90%",
    },
  },
  skillsHeader: {
    color: colors.white,
    marginBottom: "1.3rem",
    [theme.breakpoints.up("md")]: {
      marginBottom: "2rem",
    },
  },
  skillsIconsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: " 0",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
      width: "90%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "100%",
    },
  },
  iconContainer: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  iconText: {
    color: colors.white,
    fontSize: "0.8rem",
  },
  html: {
    color: "red",
    fontSize: iconFontSize,
  },
  css: {
    color: "blue",
    fontSize: iconFontSize,
  },
  js: {
    color: "yellow",
    fontSize: iconFontSize,
  },
  react: {
    color: "#61dafb",
    fontSize: iconFontSize,
  },
  git: {
    color: "#f14e32",
    fontSize: iconFontSize,
  },

  //github linkedin container
  githubLinkedInContainer: {
    color: colors.white,
    textAlign: "center",
    opacity: "0",
  },
  githubLinkedInParagraph: {
    fontSize: "0.9rem",
    marginBottom: "2rem",
  },
  arrowSymbol: {
    marginLeft: "5px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  github: {
    color: "white",
    fontSize: "2.5rem",
    transition: "all 0.4s",
    "&:hover": {
      color: colors.orange,
    },
  },
  linkedIn: {
    color: "#0a66c2",
    fontSize: "2.5rem",
    transition: "all 0.4s",
    "&:hover": {
      color: colors.orange,
    },
  },
  resume: {
    color: "white",
    fontSize: "2.5rem",
    transition: "all 0.4s",
    "&:hover": {
      color: colors.orange,
    },
  },
}));

export default aboutStyles;
