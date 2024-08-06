import { NavLink } from "react-router-dom"
import { useState } from "react"
import css from "./Menu.module.css"
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import MyLink from "../MyLink/MyLink";
import { Category } from "../../page/Home";


const Menu = ({isActive, setIsActive}) => {
    
    return (
        <menu className={css.menu}>
                <button onClick = {() => setIsActive(!isActive)} className={css.button_menu}>
                    {
                        isActive ? <RxCross2  className={css.cross__icon}/> : <IoIosMenu className={css.menu__icon}/>
                    }
                </button>
                <li className={css.menu__item}><MyLink link={`category/${Category.TODAY}`} style={css.menu__item__link} name = {"todays news"} /> </li>
                <li className={css.menu__item}><MyLink link={`category/${Category.WORLD}`} style={css.menu__item__link} name = {"world news"}> </MyLink></li>
                <li className={css.menu__item}><MyLink link={`category/${Category.BUSINESS}`} style={css.menu__item__link} name = {"business"}></MyLink></li>
                <li className={css.menu__item}><MyLink link={`category/${Category.SHOWS}`} style={css.menu__item__link} name = {"shows"}> </MyLink></li>
                <li className={css.menu__item}><MyLink link={`category/${Category.GAMES}`} style={css.menu__item__link} name = {"games"}> </MyLink></li>
                <li className={css.menu__item}><MyLink link={`category/${Category.INFORMATION}`} style={css.menu__item__link}  name = {"Information"}></MyLink></li>
        </menu>
    )
}

export default Menu