import { makeStyles } from "@material-ui/core";
import colors from "./colors";

const iconFontSize = "2rem";

const aboutStyles = makeStyles((theme) => ({
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  aboutParagraphContainer: {
    margin: "1rem 0",
    width: "100%",
    color: colors.white,
    textAlign: "center",
  },
  aboutParagraph: {
    fontSize: "0.9rem",
    lineHeight: "1.5rem",
  },
  skills: {
    marginTop: "0.8rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  skillsHeader: {
    color: colors.white,
    marginBottom: "1.5rem",
  },
  skillsIconsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: " 0",
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
  githubLinkedInContainer: {
    color: colors.white,
    textAlign: "center",
  },
  githubLinkedInParagraph: {
    fontSize: "0.9rem",
    marginBottom: "2rem",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  github: {
    color: "white",
    fontSize: "2.5rem",
  },
  linkedIn: {
    color: "#0a66c2",
    fontSize: "2.5rem",
  },
  resume: {
    color: "white",
    fontSize: "2.5rem",
  },
}));

export default aboutStyles;
