import MyLink from "../MyLink/MyLink"
import css from "./FooterList.module.css"

const FooterList = () => {
    return (
        <ul className={css.list}>
            <li className={css.footer_item}><MyLink name="Home" link = "/"/></li>
            <li className={css.footer_item}><MyLink name="About" link = "about"/></li>
            <li className={css.footer_item}><MyLink name="Contacts" link = "contacts"/></li>
        </ul>
    )
}
export default FooterList