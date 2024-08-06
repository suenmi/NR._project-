import { useParams } from "react-router-dom"
import { Data } from "./Home";
import { useState } from "react";
import Card from "../components/Card/Card";


const CategoryPage = () => {
    const {id} = useParams();

    const [searchItem, setSearchItem] = useState([])

    useEffect(() => {
        const filterElement = Data.filter((el) => el.category == id)
        setSearchItem(filterElement)
    })

    return (
        <main style={{backgroundColor: "white"}}>
            {
            searchItem.map((el,index) => <Card key = {index} data = {el} />)    
            }
        </main>
    )
}

export default CategoryPage