import { RxCross2 } from "react-icons/rx";
import css from "./SideBar.module.css"
import { IoIosMenu } from "react-icons/io";

const SideBar = ({ isActive, setIsActive }) => {

    
    
    return (
        <div className = { isActive ? css.active_sidebar : css.sidebar}>
            <button onClick = {() => setIsActive(!isActive)}className={css.button_menu}>
                {
                    isActive ? <RxCross2  className={css.cross__icon}/> : <IoIosMenu className={css.menu__icon}/>
                }
            </button>
            <div className={css.logo}>
                <div className={css.logo_img}></div>
            </div>
            <div className={css.sidebar_menu}>
                <div className={css.menu__heading}>
                    <h1>Heading</h1>
                </div>
                <a href="#" className={css.menu__link}>
                    <span>Info</span>
                </a>
                <a href="#" className={css.menu__link}>
                    <span>Info</span>
                </a>
                <a href="#" className={css.menu__link}>
                    <span>Info</span>
                </a>
                <div className={css.menu__heading}>
                    <h1>Heading</h1>
                </div>
                <a href="#" className={css.menu__link}>
                    <span>Info</span>
                </a>
                <a href="#" className={css.menu__link}>
                    <span>Info</span>
                </a>
                <div className={css.menu__heading}>
                    <h1>Heading</h1>
                </div>
                <a href="#" className={css.menu__link}>
                    <span>Info</span>
                </a>
                <a href="#" className={css.menu__link}>
                    <span>Info</span>
                </a>
            </div>
        </div>
    )
}

export default SideBar;