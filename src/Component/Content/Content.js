import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Content = (props) => {
    return (
        <div className="app-container">
            <div className="header-container mt-2 container">
                <Header />
                <hr />
            </div>

            <div className="content-container container mb-5 my-color-primary">
                <Outlet />
            </div>

            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default Content