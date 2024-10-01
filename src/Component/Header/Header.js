import { Nav, NavLink } from "react-bootstrap"
import logo from "../../assets/image/laura-logo.png"
import "../../assets/scss/header.scss"
import { useNavigate } from "react-router-dom"

const Header = (props) => {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="header-left">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        <span className="ms-2">LAURA COFFEE</span>
                    </a>
                </div>

                <div className="header-right">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' onClick={() => navigate("/")}>GIỚI THIỆU</NavLink>
                        <NavLink className='nav-link' onClick={() => navigate("news")}>TIN TỨC</NavLink>
                        <NavLink className='nav-link' onClick={() => navigate("products")}>SẢN PHẨM</NavLink>
                        <NavLink className='nav-link' onClick={() => navigate("contest")}>CUỘC THI</NavLink>
                        <NavLink className='nav-link' onClick={() => navigate("contact")}>LIÊN HỆ</NavLink>
                    </Nav>
                </div>
            </div>
        </nav>

    )
}

export default Header