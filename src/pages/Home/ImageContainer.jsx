import image from "../../assets/HomeSVG2.svg";
import { Box } from "@mui/material";

const ImageContainer = () => {
    return (
        <Box className="home-image-container">
            <img className="home-image" src={image} alt="person coding" />
        </Box>
    )
}

export default ImageContainer