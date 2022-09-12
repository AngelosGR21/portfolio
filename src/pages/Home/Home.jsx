import Navbar from "../../components/Navbar/Navbar"

import ImageContainer from "./ImageContainer";
import HeaderAndButtonsContainer from "./HeaderAndButtonsContainer";

import { useEffect } from "react";
import { Box } from "@mui/material";

import "../../styles/global.css";
import "./Home.css";


const Home = () => {

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Navbar />
      <Box className="home-main-container">
        <HeaderAndButtonsContainer />
        <ImageContainer />
      </Box>
    </>
  );
};

export default Home;
