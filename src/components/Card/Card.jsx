import MyLink from "../MyLink/MyLink"
import css from "./Card.module.css"
const Card = ({data}) => {

    return (
        <div className={css.new}>
            <img src = { data.img } className={css.new__img}/>
            <div className={css.new_txt}>
                <h5 className={css.new__title}>{data.title}</h5>
                <h6 className={css.new__body}>{data.body}</h6>
                <p className={css.new__more}><MyLink name = {"Read more"} link = {`showItem/${data.id}`} style = {css.new__link}/></p>
            </div>
        </div>
    )
}
export default Card