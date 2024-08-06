import { NavLink } from "react-router-dom"
import css from "./MyLink.module.css"
const MyLink = ({name, link, style}) => {
    return (
        <NavLink className={style} to = {link}>
            {name}
        </NavLink>
    )
}
export default MyLink