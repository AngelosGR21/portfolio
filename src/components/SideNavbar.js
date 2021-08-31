import { motion } from "framer-motion";
import { Box, SvgIcon, Typography } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
//styles
import sideBarStyles from "../styles/sideBarStyles";
const SideNavbar = () => {
  const classes = sideBarStyles();
  return (
    <>
      <Box className={classes.sideBarContainer} component="section">
        <Box
          className={classes.sideBarItem}
          component={motion.div}
          whileHover={{ x: 50 }}
        >
          <Typography className={classes.sideBarNames}>Home</Typography>
          <SvgIcon classes={{ root: classes.sideBarIcons }}>
            <HomeIcon />
          </SvgIcon>
        </Box>
        <Box
          className={classes.sideBarItem}
          component={motion.div}
          whileHover={{ x: 50 }}
        >
          <Typography className={classes.sideBarNames}>About</Typography>
          <SvgIcon classes={{ root: classes.sideBarIcons }}>
            <AccountCircleIcon />
          </SvgIcon>
        </Box>
        <Box
          className={classes.sideBarItem}
          component={motion.div}
          whileHover={{ x: 70 }}
        >
          <Typography className={classes.sideBarNames}>Projects</Typography>
          <SvgIcon classes={{ root: classes.sideBarIcons }}>
            <CodeIcon />
          </SvgIcon>
        </Box>
        <Box
          className={classes.sideBarItem}
          component={motion.div}
          whileHover={{ x: 90 }}
        >
          <Typography className={classes.sideBarNames}>Contact Me</Typography>
          <SvgIcon classes={{ root: classes.sideBarIcons }}>
            <EmailIcon />
          </SvgIcon>
        </Box>
      </Box>
    </>
  );
};

export default SideNavbar;
