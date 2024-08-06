import { useParams } from "react-router-dom"

import {Data} from "../Home"

import css from "./ShowItem.module.css"

const ShowItem = () => {
    const {id} = useParams()

    const findItem = Data.find((el) => el.id == id) ;

    return (
        <main>

            <p>{findItem.description}</p>
            <h2>{findItem.title}  {id} </h2>
            <p>
                { findItem.body }
            </p>
            <img src={findItem.img} />
        </main>
    )
}
export default ShowItem