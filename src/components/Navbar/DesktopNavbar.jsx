import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Box, SvgIcon, Link, Typography } from "@mui/material";

import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DesktopNavbar = ({ width }) => {
    const navigate = useNavigate();
    return (
        <>
            <Box className="desktop-navbar-container" component="section">
                <Link
                    className="desktop-navbar-links"
                    component={motion.a}
                    whileHover={{ x: width >= 1920 ? 76 : 65 }}
                    onClick={() => navigate("/")}
                >
                    <Typography className="desktop-navbar-headers">Home</Typography>

                    <SvgIcon className="navbar-mui-icons">
                        <HomeIcon />
                    </SvgIcon>
                </Link>
                <Link
                    className="desktop-navbar-links"
                    component={motion.a}
                    whileHover={{ x: width >= 1920 ? 76 : 65 }}
                    onClick={() => navigate("/about")}
                >
                    <Typography className="desktop-navbar-headers">About</Typography>
                    <SvgIcon className="navbar-mui-icons">
                        <AccountCircleIcon />
                    </SvgIcon>
                </Link>
                <Link
                    className="desktop-navbar-links"
                    component={motion.a}
                    whileHover={{ x: width >= 1920 ? 80 : 78 }}
                    onClick={() => navigate("/projects")}
                >
                    <Typography className="desktop-navbar-headers">Projects</Typography>
                    <SvgIcon className="navbar-mui-icons">
                        <CodeIcon />
                    </SvgIcon>
                </Link>
                <Link
                    className="desktop-navbar-links"
                    component={motion.a}
                    whileHover={{ x: width >= 1920 ? 76 : 76 }}
                    onClick={() => navigate("/contact")}
                >
                    <Typography className="desktop-navbar-headers">Contact</Typography>
                    <SvgIcon className="navbar-mui-icons">
                        <EmailIcon />
                    </SvgIcon>
                </Link>
            </Box>
        </>
    )
}

export default DesktopNavbar