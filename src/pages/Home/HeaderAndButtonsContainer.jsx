import NavButton from "../../components/NavButton/NavButton";

import { Box, Typography } from "@mui/material"

const HeaderAndButtonsContainer = () => {
    return (
        <Box className="home-left-container">
            <Box className="home-info-container" component="header">
                <Typography className="home-info-text">Hi,</Typography>
                <Typography className="home-info-text">I'm Angelos Grigoriu,</Typography>
                <Typography className="home-info-text">Software developer</Typography>
            </Box>
            <Box className="home-buttons-container">
                <NavButton location="about" text="About" />
                <NavButton location="projects" text="Projects" />
            </Box>
        </Box>
    )
}

export default HeaderAndButtonsContainer