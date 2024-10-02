import { Nav, NavDropdown, NavLink } from "react-bootstrap"
import logo from "../../assets/image/laura-logo.png"
import "../../assets/scss/header.scss"
import { useNavigate } from "react-router-dom"

const Header = (props) => {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <div className="header-left">
                    <a className="navbar-brand" onClick={() => navigate("/")}>
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        <span className="ms-2">LAURA COFFEE</span>
                    </a>
                </div>

                <div className="header-right">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' onClick={() => navigate("introduce")}>Giới Thiệu</NavLink>
                        <NavLink className='nav-link' onClick={() => navigate("news")}>Gia Đình Laura</NavLink>
                        <NavLink className='nav-link' onClick={() => navigate("benefit")}>Có Lợi Cho Sức Khỏe</NavLink>
                        <NavDropdown title="Sản Phẩm" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate("products/ha-thao")}>Café Đông Trùng Hạ Thảo</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("products/linh-chi")}>Café Nấm Linh Chi</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Cuộc Thi" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate("contest")}>Sơ Lược Về Cuộc Thi</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink className='nav-link' onClick={() => navigate("contact")}>Liên Hệ</NavLink>
                    </Nav>
                </div>
            </div>
        </nav>

    )
}

export default Header