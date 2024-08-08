import { RxCross2 } from "react-icons/rx"
import css from "./MenuMedia.module.css"
import { IoIosMenu } from "react-icons/io"
import MyLink from "../MyLink/MyLink"
import { Category } from "../../page/Home"

const MenuMedia = ({isActive, setIsActive}) => {

    return (
        <menu className={css.menu_media}>
            <button onClick = {() => setIsActive(!isActive)}className={css.button_menu}>
                    {
                        isActive ? <RxCross2  className={css.cross__icon}/> : <IoIosMenu className={css.menu__icon}/>
                    }
            </button>
            <li className={css.dropdown}>
                <button className={css.menu_media__item__link}>
                    Todays News
                </button>
                <div className={css.dropdown_content}>
                    <MyLink link={`category/${Category.TODAY}`} style={css.menu_media__item__link} name = {"todays news"} />
                    <MyLink link={`category/${Category.WORLD}`} style={css.menu_media__item__link} name = {"world news"}/> 
                    <MyLink link={`category/${Category.BUSINESS}`} style={css.menu_media__item__link} name = {"business"}/>
                    <MyLink link={`category/${Category.SHOWS}`} style={css.menu_media__item__link} name = {"shows"}/>
                    <MyLink link={`category/${Category.GAMES}`} style={css.menu_media__item__link} name = {"games"}/>
                    <MyLink link={`category/${Category.INFORMATION}`} style={css.menu_media__item__link}  name = {"Information"}/>
                </div>
            </li>
        </menu>
    )
}

export default MenuMedia