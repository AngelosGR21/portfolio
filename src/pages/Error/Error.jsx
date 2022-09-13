import { Box, Typography } from "@mui/material"

import Navbar from "../../components/Navbar/Navbar"
import Spaceship from "../../assets/Spaceship.svg"

import NavButton from "../../components/NavButton/NavButton"

import "./Error.css"


const Error = () => {
    return (
        <>
            <Navbar />
            <Box className="error-container">
                <img className="error-image" alt="Spaceship" src={Spaceship} />
                <Typography className="error-header">Page not found</Typography>
                <NavButton text="Go back" />
            </Box>
        </>
    )
}

export default Error