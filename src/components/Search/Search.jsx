import { useState } from "react"
import css from "./Search.module.css"
import { HiHandThumbUp } from "react-icons/hi2"
import { CiSearch } from "react-icons/ci"
import { Data } from "../../page/Home"
import MyLink from "../MyLink/MyLink"

const Search =  () => {

    const [searchItem, setSearchItem] = useState([])

    const HandlerSearch = (el) => {
        const value  = el.target.value

        if (!value) {
            setSearchItem([])
            return 
        }

        const findElements = Data.filter((el) => el.title.toLowerCase().includes(value.toLowerCase()))
        setSearchItem(findElements)
    }

    return (
        <div className={css.search_div}>
            <ul className={ searchItem.length ? css.search__items_active : css.search__items}>
                {
                    searchItem.map((el, index) => <li key={index}><MyLink link={`showitem/${el.id}`} name = {`${index + 1}. ${el.title}`} /></li>)
                }
            </ul>
            <div className={css.search_div__search}>
                <CiSearch  className={css.search__img}/>
                <input onInput = { HandlerSearch } type="search" placeholder="Search" className={css.search}/>
            </div>
            <input type="submit" value="Search" className={css.button_search}/>
        </div>  
    )
}
export default Search