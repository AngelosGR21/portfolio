import SideNavbar from "./components/SideNavbar";

import globalStyles from "./styles/globalStyles";
import contactStyles from "./styles/contactStyles";

import { TextField, Button, Box } from "@material-ui/core";

const Contact = () => {
  globalStyles();
  const classes = contactStyles();
  return (
    <>
      <SideNavbar />
      <Box className={classes.formContainer}>
        <form className={classes.form}>
          <TextField
            label="Name"
            required
            variant="outlined"
            className={classes.borderChange}
            InputLabelProps={{
              className: classes.inputLabel,
              focused: classes.focused,
            }}
          ></TextField>

          <TextField
            label="Email"
            required
            variant="outlined"
            className={`${classes.emailInput} ${classes.borderChange}`}
            InputLabelProps={{
              className: classes.inputLabel,
              focused: classes.focused,
            }}
          ></TextField>

          <TextField
            label="Message"
            required
            variant="outlined"
            multiline
            minRows={2}
            className={classes.borderChange}
            InputLabelProps={{
              className: classes.inputLabel,
              focused: classes.focused,
            }}
          ></TextField>
          <Box>
            <Button variant="contained" type="submit" color="secondary">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Contact;
