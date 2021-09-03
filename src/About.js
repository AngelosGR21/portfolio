//components import
import SideNavbar from "./components/SideNavbar";

//styles import
import globalStyles from "./styles/globalStyles";
import aboutStyles from "./styles/aboutStyles";

//Material ui imports
import { Icon, Container, Box, Typography, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";

const About = () => {
  globalStyles();
  const classes = aboutStyles();

  return (
    <>
      <SideNavbar />
      <Container className={classes.aboutContainer} maxWidth="sm">
        <Box className={classes.aboutParagraphContainer} component="section">
          <Typography variant="body1" className={classes.aboutParagraph}>
            Hi, my name is Angelos Grigoriu and i'm a self-taught Front-End Web
            Developer currently located in Derby (East Midlands). I'm passionate
            about making beautiful, responsive websites, web applications and
            learning about new technologies.
          </Typography>
        </Box>
        <Box className={classes.skills} component="section">
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
        <Box className={classes.githubLinkedInContainer} component="section">
          <Typography className={classes.githubLinkedInParagraph}>
            You can also have a look at my Github/LinkedIn profile or resume
            below
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
            <Link>
              <DescriptionIcon className={classes.resume}></DescriptionIcon>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;
