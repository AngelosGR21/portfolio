import { Link } from "react-router-dom";
import { Button } from "@mui/material"

const NavButton = ({ location, text }) => {
    return (
        <Link className="home-links" to={`/${location}`}>
            <Button className="home-buttons" variant="outlined">{text}</Button>
        </Link>
    )

}


export default NavButton;