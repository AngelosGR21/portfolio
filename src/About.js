import { useEffect } from "react";

//components import
import SideNavbar from "./components/SideNavbar";
import resume from "./images/Resume.pdf";
//styles import
import globalStyles from "./styles/globalStyles";
import aboutStyles from "./styles/aboutStyles";

//Material ui imports
import { Icon, Container, Box, Typography, Link } from "@material-ui/core";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Description as DescriptionIcon,
} from "@material-ui/icons";
import { StylesProvider } from "@material-ui/styles";
//import motion
import { motion } from "framer-motion";

const About = () => {
  globalStyles();
  const classes = aboutStyles();
  useEffect(() => {
    document.title = "Angelos Grigoriu - About";
  }, []);
  return (
    <>
      <SideNavbar />
      <StylesProvider injectFirst>
        <Container className={classes.aboutContainer} maxWidth="lg">
          <Box
            className={classes.aboutParagraphContainer}
            component={motion.section}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="body1" className={classes.aboutParagraph}>
              Hi, my name is Angelos Grigoriu and i'm a self-taught Front-End
              Web Developer currently located in Derby (East Midlands). I'm
              passionate about making beautiful, responsive websites, web
              applications and learning about new technologies.
            </Typography>
          </Box>
          <Box
            className={classes.skills}
            component={motion.section}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography variant="h4" className={classes.skillsHeader}>
              My skills
            </Typography>
            <Container className={classes.skillsIconsContainer}>
              <Box className={classes.iconContainer}>
                <Icon className={`${classes.html} fab fa-html5`}></Icon>
                <Typography className={classes.iconText}>HTML5</Typography>
              </Box>
              <Box className={classes.iconContainer}>
                <Icon className={`${classes.css} fab fa-css3-alt`}></Icon>
                <Typography className={classes.iconText}>CSS3</Typography>
              </Box>
              <Box className={classes.iconContainer}>
                <Icon className={`${classes.js} fab fa-js`}></Icon>
                <Typography className={classes.iconText}>JavaScript</Typography>
              </Box>
              <Box className={classes.iconContainer}>
                <Icon className={`${classes.react} fab fa-react`}></Icon>
                <Typography className={classes.iconText}>React</Typography>
              </Box>
              <Box className={classes.iconContainer}>
                <Icon className={`${classes.git} fab fa-git-alt`}></Icon>
                <Typography className={classes.iconText}>Git</Typography>
              </Box>
            </Container>
          </Box>
          <Box
            className={classes.githubLinkedInContainer}
            component={motion.section}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Typography className={classes.githubLinkedInParagraph}>
              You can also have a look at my Github/LinkedIn profile or resume
              by clicking on the icons below
              <span className={classes.arrowSymbol}>&darr;</span>
            </Typography>
            <Box className={classes.iconsContainer}>
              <Link
                href="https://github.com/AngelosGR21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className={classes.github} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/angelos-grigoriu-297295204/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className={classes.linkedIn} />
              </Link>
              <Link href={resume} target="_blank" rel="noopener noreferrer">
                <DescriptionIcon className={classes.resume}></DescriptionIcon>
              </Link>
            </Box>
          </Box>
        </Container>
      </StylesProvider>
    </>
  );
};

export default About;
