import { useParams } from "react-router-dom"

import {Data} from "./Home"

import css from "./ShowItem.module.css"

const ShowItem = () => {
    const {id} = useParams()

    const findItem = Data.find((el) => el.id == id) ;

    return (
        <main>
            <div className={css.new}>
                
                <h2 className={css.new__title}>{findItem.title}  {id} </h2>
                <p className={css.new__body}>
                    { findItem.body }
                </p>
                <img src={findItem.img} />
                <p className={css.new__desc}>{findItem.description}</p>
            </div>
        </main>
    )
}
export default ShowItem