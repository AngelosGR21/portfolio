import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      overflow: "hidden",
    },
    "#root": {
      padding: 0,
      margin: 0,
      backgroundColor: "#171717",
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
    },
  },
}));

export default useStyles;
