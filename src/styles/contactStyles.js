import { makeStyles } from "@material-ui/core";

import colors from "./colors";

const contactStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "40%",
    padding: "10px",
    backgroundColor: colors.white,
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  inputLabel: {
    color: colors.matteBlack,
    "&.Mui-focused": {
      color: colors.orange,
    },
  },

  borderChange: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.matteBlack,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.orange,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.orange,
    },
  },

  emailInput: {
    width: "50%",
    color: colors.white,
  },
}));

export default contactStyles;
