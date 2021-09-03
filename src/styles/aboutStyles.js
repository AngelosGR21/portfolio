import { makeStyles } from "@material-ui/core";
import colors from "./colors";

const iconFontSize = {
  xs: "2rem",
  sm: "2.8rem",
  md: "3.1rem",
  lg: "3.2rem",
  xl: "6.5rem",
};

const aboutStyles = makeStyles((theme) => ({
  //Main container
  aboutContainer: {
    opacity: "0",
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
      fontSize: "1.1rem",
      lineHeight: "1.8rem",
    },
    [theme.breakpoints.up("md")]: {
      lineHeight: "2.2rem",
      fontSize: "1.4rem",
    },
    [theme.breakpoints.up("lg")]: {
      lineHeight: "2.5rem",
      letterSpacing: "2px",
      fontSize: "1.6rem",
    },
    [theme.breakpoints.up("xl")]: {
      lineHeight: "4rem",
      fontSize: "3rem",
    },
  },

  //skills container
  skills: {
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
      fontSize: "2.3rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "4rem",
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
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.8rem",
    },
  },
  html: {
    color: "red",
    fontSize: iconFontSize.xs,
    [theme.breakpoints.up("sm")]: {
      fontSize: iconFontSize.sm,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: iconFontSize.md,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: iconFontSize.lg,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: iconFontSize.xl,
    },
  },
  css: {
    color: "blue",
    fontSize: iconFontSize.xs,
    [theme.breakpoints.up("sm")]: {
      fontSize: iconFontSize.sm,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: iconFontSize.md,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: iconFontSize.lg,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: iconFontSize.xl,
    },
  },
  js: {
    color: "yellow",
    fontSize: iconFontSize.xs,
    [theme.breakpoints.up("sm")]: {
      fontSize: iconFontSize.sm,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: iconFontSize.md,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: iconFontSize.lg,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: iconFontSize.xl,
    },
  },
  react: {
    color: "#61dafb",
    fontSize: iconFontSize.xs,
    [theme.breakpoints.up("sm")]: {
      fontSize: iconFontSize.sm,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: iconFontSize.md,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: iconFontSize.lg,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: iconFontSize.xl,
    },
  },
  git: {
    color: "#f14e32",
    fontSize: iconFontSize.xs,
    [theme.breakpoints.up("sm")]: {
      fontSize: iconFontSize.sm,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: iconFontSize.md,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: iconFontSize.lg,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: iconFontSize.xl,
    },
  },

  //github linkedin container
  githubLinkedInContainer: {
    color: colors.white,
    textAlign: "center",
  },
  githubLinkedInParagraph: {
    fontSize: "0.9rem",
    marginBottom: "2rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.5rem",
    },
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
    [theme.breakpoints.up("xl")]: {
      fontSize: "5rem",
    },
  },
  linkedIn: {
    color: "#0a66c2",
    fontSize: "2.5rem",
    transition: "all 0.4s",
    "&:hover": {
      color: colors.orange,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "5rem",
    },
  },
  resume: {
    color: "white",
    fontSize: "2.5rem",
    transition: "all 0.4s",
    "&:hover": {
      color: colors.orange,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "5rem",
    },
  },
}));

export default aboutStyles;
