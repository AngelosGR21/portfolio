import { motion } from "framer-motion";
import { Box, SvgIcon, Typography } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";

//styles
import sideBarStyles from "../styles/sideBarStyles";
const SideNavbar = () => {
  const classes = sideBarStyles();
  return (
    <>
      <Box className={classes.sideBarContainer}>
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
            <InfoOutlinedIcon className={classes.sidebarIcons} />
          </SvgIcon>
        </Box>
        <Box
          className={classes.sideBarItem}
          component={motion.div}
          whileHover={{ x: 80 }}
        >
          <Typography className={classes.sideBarNames}>Portofolio</Typography>
          <SvgIcon classes={{ root: classes.sideBarIcons }}>
            <MenuBookIcon className={classes.sidebarIcons} />
          </SvgIcon>
        </Box>
        <Box
          className={classes.sideBarItem}
          component={motion.div}
          whileHover={{ x: 90 }}
        >
          <Typography className={classes.sideBarNames}>Contact Me</Typography>
          <SvgIcon classes={{ root: classes.sideBarIcons }}>
            <EmailIcon className={classes.sidebarIcons} />
          </SvgIcon>
        </Box>
      </Box>
    </>
  );
};

export default SideNavbar;
