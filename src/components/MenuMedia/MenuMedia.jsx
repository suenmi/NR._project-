import { RxCross2 } from "react-icons/rx"
import css from "./MenuMedia.module.css"
import { NavLink } from "react-router-dom"
import { IoIosMenu } from "react-icons/io"
import { useState } from "react"

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
                    <NavLink href="#" className={css.menu_media__item__link}>Todays news2</NavLink>
                    <NavLink href="#" className={css.menu_media__item__link}>Todays news</NavLink>
                    <NavLink href="#" className={css.menu_media__item__link}>Todays news</NavLink>
                    <NavLink href="#" className={css.menu_media__item__link}>Todays news</NavLink>
                    <NavLink href="#" className={css.menu_media__item__link}>Todays news</NavLink>
                    <NavLink href="#" className={css.menu_media__item__link}>Todays news</NavLink>
                    <NavLink href="#" className={css.menu_media__item__link}>Todays news</NavLink>
                    <NavLink href="#" className={css.menu_media__item__link}>Todays news</NavLink>
                </div>
            </li>
        </menu>
    )
}

export default MenuMedia