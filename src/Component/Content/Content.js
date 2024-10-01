import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Homepage from "../Content/Homepage"
import Prod from "../Content/Prod"
import News from "../Content/News"
import Contact from "../Content/Contact"
import Contest from "../Content/Contest"

const Content = (props) => {
    return (
        <div className="app-container">
            <div className="header-container mt-2 container">
                <Header />
                <hr />
            </div>

            <div className="content-container container mb-5">
                {/* <Outlet /> */}
                <Homepage />
                <hr />
                <Prod />
                <hr />
                <News />
                <hr />
                <Contest />
                <hr />
                <Contact />
            </div>

            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default Content