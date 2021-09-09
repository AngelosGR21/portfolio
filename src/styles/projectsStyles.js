import { makeStyles } from "@material-ui/core";
import colors from "./colors";

const projectsStyles = makeStyles((theme) => ({
  "@global": {
    html: {
      fontSize: "16px",
      [theme.breakpoints.up("xl")]: {
        fontSize: "22px",
      },
    },
  },

  //Main containers
  carouselContainer: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      alignItems: "center",
      height: "100%",
    },
  },
  carousel: {
    width: "90%",
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.grey,
    marginTop: "10px",
    [theme.breakpoints.up(400)]: {
      width: "75%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "0",
      width: "520px",
      padding: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "650px",
      padding: "30px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "850px",
    },
  },

  //header
  name: {
    textAlign: "center",
    color: colors.orange,
    textTransform: "uppercase",
    fontSize: "1.3rem",
    fontWeight: "700",
    letterSpacing: "1px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "10px",
    },
    [theme.breakpoints.up(700)]: {
      marginBottom: "20px",
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "70px",
    },
    [theme.breakpoints.up("xl")]: {
      marginBottom: "120px",
    },
  },

  arrowAndImageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "120px",
    marginBottom: "10px",
    [theme.breakpoints.up(700)]: {
      marginBottom: "25px",
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "60px",
    },
    [theme.breakpoints.up("xl")]: {
      marginBottom: "120px",
    },
  },
  arrows: {
    color: colors.orange,
  },
  arrowButtons: {
    color: colors.orange,
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100px",
    boxSizing: "border-box",
  },
  image: {
    position: "absolute",
    width: "160px",
    [theme.breakpoints.up("sm")]: {
      width: "200px",
    },
    [theme.breakpoints.up(700)]: {
      width: "250px",
    },
    [theme.breakpoints.up("md")]: {
      width: "300px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "360px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "500px",
    },
  },

  descriptionTitle: {
    color: colors.orange,
    fontWeight: "700",
    marginTop: "15px",
  },

  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up(450)]: {
      justifyContent: "space-evenly",
    },
  },
  buttons: {
    fontSize: "0.8rem",
    backgroundColor: colors.matteBlack,
    color: colors.orange,
    "&:hover": {
      backgroundColor: "black",
      boxShadow: "0px 2px 10px black",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.9rem",
    },
  },

  description: {
    color: colors.white,
    lineHeight: "20px",
    letterSpacing: "1px",
  },

  toolsHeader: {
    fontWeight: "700",
    color: colors.orange,
    marginTop: "15px",
  },
  toolsUsed: {
    color: colors.white,
  },
}));

export default projectsStyles;
