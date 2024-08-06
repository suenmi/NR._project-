import FooterList from "../FooterList/FooterList"
import css from "./Footer.module.css"
const Footer = () => {
    return (
        <footer>
            <div className={css.footer}>
                <div className={css.logo}></div>
            </div>
            <div className={css.footer_info}>
                <div className={css.footer_list}>
                    <FooterList/>
                    <FooterList/>
                    <FooterList/>
                    <FooterList/>
                    <FooterList/>
                    <FooterList/>
                    <FooterList/>
                </div>
                <div className={css.footer_list}>
                    <FooterList/>
                    <FooterList/>
                    <FooterList/>
                    <FooterList/>
                    <FooterList/>
                    <FooterList/>
                    <FooterList/>
                </div>
            </div>
        </footer>
    )
}
export default Footer