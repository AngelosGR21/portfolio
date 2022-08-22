import { useState, useEffect } from "react";
import image from "./images/messageSent.svg";
import errorImage from "./images/contactFormError.svg";
// import emailjs from "emailjs";
import env from "react-dotenv";

import SideNavbar from "./components/SideNavbar";

import globalStyles from "./styles/globalStyles";
import contactStyles from "./styles/contactStyles";

import { TextField, Button, Box, Typography } from "@mui/material";
// import { StylesProvider } from "@material-ui/styles";

import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  globalStyles();
  const classes = contactStyles();

  useEffect(() => {
    document.title = "Angelos Grigoriu - Contact Page";
  }, []);

  const [success, setSuccess] = useState(false);
  const [contactForm, setContactForm] = useState(true);
  const [formError, setFormError] = useState(false);

  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     `${env.SERVICE_ID}`,
    //     `${env.TEMPLATE_ID}`,
    //     e.target,
    //     `${env.USER_ID}`
    //   )
    //   .then(
    //     () => {
    //       setDetails({ name: "", email: "", message: "" });
    //       setContactForm(false);
    //       setSuccess(true);
    //     },
    //     (error) => {
    //       setContactForm(false);
    //       setFormError(true);
    //     }
    //   );
  };

  const showContact = (error) => {
    if (error) {
      setContactForm(true);
      setFormError(false);
    } else {
      setContactForm(true);
      setSuccess(false);
    }
  };

  return (
    <>
      <SideNavbar />
      {/* <StylesProvider injectFirst> */}
        <AnimatePresence>
          {contactForm && (
            <Box
              className={classes.formContainer}
              component={motion.section}
              initial={{ y: "-100vw" }}
              animate={{ y: 0 }}
              exit={{ y: "100vw" }}
              transition={{ duration: 2, type: "spring" }}
            >
              <Typography variant="h4" className={classes.header}>
                Contact Form
              </Typography>
              <form className={classes.form} onSubmit={sendEmail}>
                <Box className={classes.namesContainer}>
                  <TextField
                    autoComplete="off"
                    name="first_name"
                    autoFocus={true}
                    value={details.first_name}
                    onChange={(e) =>
                      setDetails({ ...details, first_name: e.target.value })
                    }
                    label="First Name"
                    required
                    variant="outlined"
                    className={`${classes.borderChange} ${classes.firstName}`}
                    InputLabelProps={{
                      className: classes.inputLabel,
                    }}
                  ></TextField>
                  <TextField
                    name="last_name"
                    value={details.last_name}
                    onChange={(e) =>
                      setDetails({ ...details, last_name: e.target.value })
                    }
                    label="Last Name"
                    required
                    variant="outlined"
                    className={`${classes.borderChange} ${classes.lastName}`}
                    InputLabelProps={{
                      className: classes.inputLabel,
                    }}
                  ></TextField>
                </Box>
                <TextField
                  name="email"
                  value={details.email}
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  label="Email"
                  required
                  variant="outlined"
                  className={`${classes.emailInput} ${classes.borderChange}`}
                  InputLabelProps={{
                    className: classes.inputLabel,
                  }}
                ></TextField>

                <TextField
                  name="message"
                  value={details.message}
                  onChange={(e) =>
                    setDetails({ ...details, message: e.target.value })
                  }
                  label="Message"
                  required
                  variant="outlined"
                  multiline
                  minRows={2}
                  maxRows={5}
                  className={classes.borderChange}
                  InputLabelProps={{
                    className: classes.inputLabel,
                  }}
                ></TextField>
                <Box className={classes.buttonContainer}>
                  <Button
                    variant="contained"
                    type="submit"
                    className={classes.button}
                  >
                    Send
                  </Button>
                </Box>
              </form>
            </Box>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {success && (
            <Box
              className={classes.container}
              component={motion.section}
              initial={{ y: "-150vw" }}
              animate={{ y: 0 }}
              exit={{ y: "150vw" }}
              transition={{ duration: 2 }}
            >
              <img
                alt="message sent"
                src={image}
                className={classes.image}
              ></img>
              <Typography className={classes.message} variant="h4">
                Message sent
              </Typography>
              <Button
                variant="contained"
                className={classes.backButton}
                onClick={() => showContact()}
              >
                Go back
              </Button>
            </Box>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {formError && (
            <Box
              className={classes.errorContainer}
              component={motion.section}
              initial={{ y: "-100vw" }}
              animate={{ y: 0 }}
              exit={{ y: "100vw" }}
              transition={{ duration: 2, type: "spring" }}
            >
              <img
                alt="contact form error"
                src={errorImage}
                className={classes.errorFormImage}
              ></img>
              <Button
                onClick={() => showContact("error")}
                variant="contained"
                className={classes.backButton}
              >
                Try again
              </Button>
            </Box>
          )}
        </AnimatePresence>
      {/* </StylesProvider> */}
    </>
  );
};

export default Contact;
