import { makeStyles } from "@mui/material";
import colors from "./colors";

const errorPageStyles = makeStyles((theme) => ({
  "@global": {
    html: {
      fontSize: "17px",
      [theme.breakpoints.up("lg")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.up(1400)]: {
        fontSize: "24px",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "35px",
      },
    },
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  image: {
    width: "100%",
    maxWidth: "400px",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "500px",
    },
    [theme.breakpoints.up(1400)]: {
      maxWidth: "600px",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "900px",
    },
  },
  header: {
    color: colors.white,
    marginTop: "-80px",
    fontSize: "1.6rem",
    [theme.breakpoints.up("lg")]: {
      marginTop: "-130px",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "-200px",
    },
  },
  link: {
    textDecoration: "none",
  },
  button: {
    marginTop: "20px",
    color: colors.orange,
    borderColor: colors.orange,
  },
}));

export default errorPageStyles;
