import { makeStyles } from "@material-ui/core";

import colors from "./colors";

const sideBarStyles = makeStyles((theme) => ({
  sideBarContainer: {
    width: "300px",
    height: "300px",
    position: "absolute",
    top: "25%",
    left: "0%",
    display: "flex",
    flexDirection: "column",
    transform: "translateX(-88%)",
  },
  sideBarItem: {
    width: "100%",
    height: "20%",
    marginBottom: "10px",
    backgroundColor: "#3d3d3d",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "8px",
    cursor: "pointer",
  },
  sideBarNames: {
    color: colors.white,
    marginRight: "10px",
  },
  sideBarIcons: {
    color: colors.orange,
    fontSize: "1.8rem",
  },
}));

export default sideBarStyles;
