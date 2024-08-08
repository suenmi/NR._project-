import { useParams } from "react-router-dom"
import { Data } from "./Home";
import { useState } from "react";
import Card from "../components/Card/Card";
import { useEffect } from "react";

const CategoryPage = () => {
    const {id} = useParams();

    const [searchItem, setSearchItem] = useState([])

    useEffect(() => {
        const filterElement = Data.filter((el) => el.category == id)
        setSearchItem(filterElement)
    }, [id])

    return (
        <main>
            {
            searchItem.map((el,index) => <Card key = {index} data = {el} />)    
            }
        </main>
    )
}

export default CategoryPage