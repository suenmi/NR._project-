import MyLink from "../MyLink/MyLink"
import css from "./FooterList.module.css"

const FooterList = () => {
    return (
        <ul>
            <li className={css.footer_item__main}><MyLink name="World" link = "#!"/></li>
            <li className={css.footer_item__minor}><MyLink name="World" link = "#!"/></li>
            <li className={css.footer_item__minor}><MyLink name="World" link = "#!"/></li>
            <li className={css.footer_item__minor}><MyLink name="World" link = "#!"/></li>
            <li className={css.footer_item__minor}><MyLink name="World" link = "#!"/></li>
            <li className={css.footer_item__minor}><MyLink name="World" link = "#!"/></li>
        </ul>
    )
}
export default FooterList