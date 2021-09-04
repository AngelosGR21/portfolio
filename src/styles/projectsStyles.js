import { makeStyles } from "@material-ui/core";
import colors from "./colors";

const projectsStyles = makeStyles((theme) => ({
  carouselContainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  carousel: {
    alignSelf: "start",
    height: "auto",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.grey,
  },
  arrowAndImageContainer: {
    display: "flex",
    alignItems: "center",
  },
  arrows: {
    color: colors.orange,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "150px",
  },
  image: {
    position: "absolute",
    top: "24%",
    width: "100%",
  },
  description: {
    color: colors.white,
  },
}));

export default projectsStyles;
