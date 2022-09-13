import Navbar from "../../components/Navbar/Navbar"

import ImageContainer from "./ImageContainer";
import HeaderAndButtonsContainer from "./HeaderAndButtonsContainer";

import { Box } from "@mui/material";

import "./Home.css";


const Home = () => {

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
