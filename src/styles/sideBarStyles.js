import { makeStyles } from "@material-ui/core";

import colors from "./colors";

const sideBarStyles = makeStyles((theme) => ({
  //Mobile view
  mobileNavbar: {
    height: "50px",
    backgroundColor: colors.grey,
    position: "relative",
    width: "100vw",
  },
  mobileMenu: {
    width: "50px",
    height: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "10px 8px",
  },
  menuLines: {
    width: "70%",
    height: "2px",
    backgroundColor: colors.matteBlack,
    borderRadius: "20px",
    "&:nth-of-type(2)": {
      margin: "4px 0",
    },
  },
  menuModal: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "none",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grey,
    zIndex: "2",
  },
  menuItemsContainer: {
    textDecoration: "none",
    display: "flex",
    color: colors.white,
    backgroundColor: colors.matteBlack,
    height: "45px",
    width: "50%",
    borderRadius: "5px",
    padding: "0 20px",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px",
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
  },
  menuItemHeader: {
    // marginRight: "20px",
  },

  //Desktop View

  sideBarContainer: {
    width: "300px",
    height: "300px",
    position: "absolute",
    top: "25%",
    left: "0%",
    display: "flex",
    flexDirection: "column",
    transform: "translateX(-88%)",
    [theme.breakpoints.up("xl")]: {
      top: "30%",
      width: "400px",
      height: "400px",
    },
  },
  sideBarItem: {
    width: "100%",
    height: "20%",
    marginBottom: "10px",
    backgroundColor: colors.grey,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "8px",
    cursor: "pointer",
    textDecoration: "none",
    [theme.breakpoints.up("xl")]: {
      paddingRight: "12px",
    },
  },
  sideBarNames: {
    color: colors.white,
    marginRight: "10px",
    fontSize: "16px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "24px",
    },
  },
  sideBarIcons: {
    color: colors.orange,
    fontSize: "30px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "40px",
    },
  },
}));

export default sideBarStyles;
