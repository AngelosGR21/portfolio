import React, { useState } from "react";

import SideNavbar from "./components/SideNavbar";

import globalStyles from "./styles/globalStyles";

const Home = () => {
  globalStyles();

  return (
    <>
      <SideNavbar></SideNavbar>
    </>
  );
};

export default Home;
