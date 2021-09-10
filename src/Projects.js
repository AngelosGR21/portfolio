import { useState, useEffect } from "react";
import SideNavbar from "./components/SideNavbar";

import projects from "./utils/data";

import {
  Container,
  IconButton,
  Box,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import GitHubIcon from "@material-ui/icons/GitHub";

import { motion, AnimatePresence } from "framer-motion";

import globalStyles from "./styles/globalStyles";
import projectsStyles from "./styles/projectsStyles";

const Projects = () => {
  globalStyles();
  const classes = projectsStyles();
  const [index, setIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const backArrowHandle = () => {
    if (index === 0) {
      setPage([page + 1, 1]);
      return setIndex(2);
    }
    setPage([page + 1, 1]);
    setIndex((i) => i - 1);
  };
  const forwardArrowHandle = () => {
    if (index === 2) {
      setPage([page + 1, -1]);
      return setIndex(0);
    }
    setPage([page + 1, -1]);
    setIndex((i) => i + 1);
  };

  useEffect(() => {
    document.title = `Projects - ${projects[index].name}`;
  }, [index]);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <>
      <SideNavbar />
      <Container
        maxWidth="lg"
        className={classes.carouselContainer}
        component={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box className={classes.carousel}>
          <Typography className={classes.name}>
            {projects[index].name}
          </Typography>
          <Box className={classes.arrowAndImageContainer}>
            <Box>
              <IconButton
                onClick={backArrowHandle}
                className={classes.arrowButtons}
              >
                <NavigateBeforeIcon
                  fontSize="large"
                  className={`${classes.arrows}  ${classes.leftArrow} `}
                ></NavigateBeforeIcon>
              </IconButton>
            </Box>
            <Box className={classes.imageContainer}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  alt={projects[index].name}
                  src={projects[index].image}
                  className={classes.image}
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 40 },
                    opacity: { duration: 0.5 },
                  }}
                ></motion.img>
              </AnimatePresence>
            </Box>
            <Box>
              <IconButton
                onClick={forwardArrowHandle}
                className={classes.arrowButtons}
              >
                <NavigateNextIcon
                  fontSize="large"
                  className={`${classes.arrows} ${classes.rightArrow}`}
                ></NavigateNextIcon>
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.buttonsContainer}>
            <Link
              style={{ textDecoration: "none" }}
              href={projects[index].github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={classes.buttons}
                variant="contained"
                startIcon={<GitHubIcon />}
              >
                View Code
              </Button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={projects[index].liveWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={classes.buttons} variant="contained">
                View Live
              </Button>
            </Link>
          </Box>
          <Typography className={classes.descriptionTitle} variant="h5">
            About
          </Typography>
          <Typography variant="body2" className={classes.description}>
            {projects[index].description}
          </Typography>
          <Typography variant="body2" className={classes.toolsHeader}>
            Built with
          </Typography>
          <Box>
            <Typography className={classes.toolsUsed}>
              {projects[index].builtWith.join(", ")}
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Projects;
