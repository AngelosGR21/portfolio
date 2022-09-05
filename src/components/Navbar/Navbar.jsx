import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar"
import "./Navbar.css";

import { useState, useEffect } from "react";


const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const checkSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [width]);

  return width < 960 ? <MobileNavbar /> : <DesktopNavbar width={width} />;
};

export default Navbar;
