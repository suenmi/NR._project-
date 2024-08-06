import { useState } from "react"
import css from "./Search.module.css"
import { HiHandThumbUp } from "react-icons/hi2"
import { CiSearch } from "react-icons/ci"
import { Data } from "../../page/Home"

const Search =  () => {

    const [searchItem, setSearchItem] = useState([])

    const HandlerSearch = (el) => {
        const value  = e.target.value
        
        const findElements = Data.filter((el) => el.title === value)

        console.log(value)
    }

    return (
        <div className={css.search_div}>
            <ul>
                {
                    searchItem.map((el, index) => <li>key={index}{el.title}</li>)
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