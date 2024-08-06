
import {NavLink} from "react-router-dom"

import Menu from "../Menu/Menu"

import { useState } from "react";

import { CiSearch } from "react-icons/ci";

import css from "./Header.module.css"

import SideBar from "../SideBar/SideBar";

import Fading from "../Fading/Fading"

import MenuMedia from "../MenuMedia/MenuMedia";

import Search from "../Search/Search";

const Header = () => {
    
    const [isActive, setIsActive] = useState(false);
    
    return(
        <header>
           <div className={css.header}>
            <Menu isActive={isActive} setIsActive={setIsActive}/>   
            <MenuMedia isActive={isActive} setIsActive={setIsActive}/> 
            <div className={css.logo_nam}>
                <h1 className={css.logo_txt}>The World</h1>
                <h1 className={css.logo_txt1}>News</h1>         
            </div>
            <Fading isActive = {isActive} setIsActive =  {setIsActive}/>
            <SideBar isActive = { isActive } setIsActive = { setIsActive } />  
            <Search />             
        </div>
        </header>
    )
}

export default Header