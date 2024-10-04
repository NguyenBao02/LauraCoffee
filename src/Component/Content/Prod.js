import prod_1 from "../../assets/image/prod_1.png"
import prod_2 from "../../assets/image/prod_2.png"
import "../../assets/scss/prod.scss"

const Prod = () => {
    return (
        <div className="prod-container">
            <div className="row">
                <div className="col-lg-6 ">
                    <div className="prod-image">
                        <img src={prod_1} alt="logo" />
                    </div>
                    <div className="prod-desc d-flex flex-column align-items-center">
                        <h3 className="mb-3">CÀ PHÊ ĐÔNG TRÙNG HẠ THẢO</h3>
                        <span className="d-block mb-2">85.000Đ/HỘP</span>
                        <span className="d-block mb-2">Hộp 10 gói</span>
                    </div>

                </div>

                <div className="col-lg-6">
                    <div className="prod-image">
                        <img src={prod_2} alt="logo" />
                    </div>
                    <div className="prod-desc d-flex flex-column align-items-center">
                        <h3 className="mb-3">CÀ PHÊ NẤM LINH CHI</h3>
                        <span className="d-block mb-2">75.000Đ/HỘP</span>
                        <span className="d-block mb-2">Hộp 10 gói</span>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-dark btn-lg prod-btn">ĐẶT NGAY</button>
            </div>
        </div>
    )
}

export default Prod