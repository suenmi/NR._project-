import Container from "./Container/Container"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { Outlet } from "react-router-dom"

const Layot = () => {
    return (
        <>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
            <Footer/>
        </>
    )
}
export default Layot