import { makeStyles } from "@mui/material";

import colors from "./colors";

const contactStyles = makeStyles((theme) => ({
  "@global": {
    html: {
      fontSize: "16px",
    },
  },
  formContainer: {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "90%",
    padding: "10px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up(700)]: {
      width: "70%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "600px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "700px",
      transition: "all 0.5s ease-in",
      transform: "scale(1.5)",
      marginTop: "8rem",
    },
  },
  header: {
    color: colors.orange,
    [theme.breakpoints.up("xl")]: {
      transition: "all 0.5s ease-in",
      transform: "scale(2.5)",
      marginBottom: "1rem",
    },
  },
  namesContainer: {
    display: "flex",
  },

  inputLabel: {
    color: colors.orange,

    "&.Mui-focused": {
      color: colors.orange,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
    },
    "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
      [theme.breakpoints.up("xl")]: {
        transform: "translate(7px, -10px ) scale(0.75)",
      },
    },
  },

  borderChange: {
    "& .MuiInputBase-input": {
      color: colors.white,
      [theme.breakpoints.up("xl")]: {
        fontSize: "2rem",
      },
    },
    "& .MuiInputBase-root": {
      [theme.breakpoints.up("xl")]: {
        marginBottom: "1rem",
      },
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.orange,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.orange,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.orange,
    },
  },

  firstName: {
    width: "100%",
    marginRight: "10px",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
  },
  lastName: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
  },

  emailInput: {
    color: colors.white,
  },
  buttonContainer: {
    alignSelf: "end",
  },
  button: {
    backgroundColor: colors.grey,
    color: colors.orange,
    "&:hover": {
      backgroundColor: "#545252",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.4rem",
    },
  },

  //success message
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "250px",
    marginTop: "-70px",
    marginBottom: "1rem",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      maxWidth: "350px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "400px",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "600px",
    },
  },
  message: {
    color: "green",
    marginBottom: "1rem",
    transition: "all 0.5s linear",
    [theme.breakpoints.up("md")]: {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.up("xl")]: {
      transform: "scale(1.4)",
    },
  },
  backButton: {
    backgroundColor: colors.grey,
    color: colors.white,
    transition: "all 0.5s linear",
    "&:hover": {
      backgroundColor: "#545252",
    },
    [theme.breakpoints.up("md")]: {
      transform: "scale(1.2)",
    },
    [theme.breakpoints.up("xl")]: {
      transform: "scale(1.4)",
    },
  },

  //error message
  errorContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  errorFormImage: {
    marginTop: "-100px",
    width: "350px",
    marginBottom: "30px",
    [theme.breakpoints.up(500)]: {
      width: "70%",
      maxWidth: "450px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "-50px",
      maxWidth: "500px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "550px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      maxWidth: "900px",
    },
  },
}));

export default contactStyles;
