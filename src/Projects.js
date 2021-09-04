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
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
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
      <Container maxWidth="lg" className={classes.carouselContainer}>
        <Box className={classes.carousel}>
          <Box className={classes.arrowAndImageContainer}>
            <div>
              <IconButton onClick={backArrowHandle}>
                <ArrowBackIosIcon
                  className={`${classes.arrows}  ${classes.leftArrow} `}
                ></ArrowBackIosIcon>
              </IconButton>
            </div>
            <div className={classes.imageContainer}>
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
                    opacity: { duration: 1 },
                  }}
                ></motion.img>
              </AnimatePresence>
            </div>
            <div>
              <IconButton onClick={forwardArrowHandle}>
                <ArrowForwardIosIcon
                  className={`${classes.arrows} ${classes.rightArrow}`}
                ></ArrowForwardIosIcon>
              </IconButton>
            </div>
          </Box>
          <Box>
            <Link
              href={projects[index].github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" endIcon={<GitHubIcon />}>
                View Code
              </Button>
            </Link>
            <Link
              href={projects[index].liveWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained">View Live</Button>
            </Link>
          </Box>
          <Typography className={classes.description}>
            {projects[index].description}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Projects;
