import { makeStyles } from "@material-ui/core";

import colors from "./colors";

const homeStyles = makeStyles((theme) => ({
  homeContainer: {
    padding: "30px 20px",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textAndButtonContainer: {
    display: "flex",
    height: "70%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingLeft: "100px",
  },
  textContainer: {},
  buttonContainer: {},
  homeHeader: {
    width: "90%",
    color: colors.white,
    textTransform: "uppercase",
  },
  homeImage: {
    width: "400px",
    height: "400px",
    paddingRight: "80px",
  },
  buttons: {
    color: "orange",
    borderColor: "orange",
    "&:nth-of-type(1)": {
      marginRight: "50px",
    },
  },
}));

export default homeStyles;
