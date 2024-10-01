import pannel from "../../assets/image/pannel.png"
import hp_1 from "../../assets/image/hp_1.png"
import hp_2 from "../../assets/image/hp_2.png"
import hp_3 from "../../assets/image/hp_3.png"
import "../../assets/scss/homepage.scss";
import Prod from "../Content/Prod"
import Contact from "../Content/Contact"
import Contest from "../Content/Contest"
import News from "../Content/News"

const Homepage = () => {
    return (
        <>
            <div className="homepage-pannel">
                <img src={pannel} alt="logo" />
            </div>

            <div className="homepage-desc row mt-4 mb-5">
                <div className="col-lg-6">
                    <span className="homepage-desc-text d-block mb-2">
                        Cà phê Nhật Kim Anh Laura Sunshine
                        được sản xuất từ những hạt cà phê
                        thượng hạng nhất, mang đến cho quý
                        khách những sản phẩm tốt nhất của
                        chúng tôi.
                    </span>

                    <button className="btn btn-outline-dark btn-lg mt-4 homepage-desc-btn">ĐẶT NGAY</button>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={hp_1} alt="logo" />
                        </div>
                        <div className="col-lg-4">
                            <img src={hp_2} alt="logo" />
                        </div>
                        <div className="col-lg-4">
                            <img src={hp_3} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="mt-5">SẢN PHẨM</h3>
            <hr />
            <Prod />
            <h3 className="mt-5">TIN TỨC</h3>
            <hr />
            <News />
            <h3 className="mt-5">CUỘC THI</h3>
            <hr />
            <Contest />
            <h3 className="mt-5">LIÊN HỆ</h3>
            <hr />
            <Contact />
        </>
    )
}

export default Homepage