import pannel from "../../assets/image/pannel.png"
import hp_1 from "../../assets/image/hp_1.png"
import hp_2 from "../../assets/image/hp_2.png"
import hp_3 from "../../assets/image/hp_3.png"
import "../../assets/scss/homepage.scss";

const Homepage = () => {
    return (
        <>
            <div className="homepage-pannel">
                <img src={pannel} />
            </div>

            <div className="homepage-desc row mt-4">
                <div className="col-lg-6">
                    <span className="homepage-desc-text d-block mb-2 my-text-primary">
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
                            <img src={hp_1} />
                        </div>
                        <div className="col-lg-4">
                            <img src={hp_2} />
                        </div>
                        <div className="col-lg-4">
                            <img src={hp_3} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage