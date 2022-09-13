import { Link } from "react-router-dom";
import { Button } from "@mui/material"

import "./NavButton.css"

const NavButton = ({ location, text }) => {
    location = location !== undefined ? location : ""
    return (
        <Link className="shared-links" to={`/${location}`}>
            <Button className="shared-buttons" variant="outlined">{text}</Button>
        </Link>
    )

}


export default NavButton;