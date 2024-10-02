import prod_1 from "../../assets/image/prod_1.png"
import "../../assets/scss/prod.scss"

const ProdHaThao = () => {
    return (
        <div className="prod-container my-text-primary">
            <div className="row">
                <div className="col-lg-3">
                    <img src={prod_1} alt="logo" />
                </div>
                <div className="col-lg-9 mt-2">
                    <h2 className="mb-3">CÀ PHÊ ĐÔNG TRÙNG HẠ THẢO</h2>
                    <span className="d-block mb-2">85.000Đ/HỘP (10 gói)</span>
                    <p>Hương vị: béo mà không ngấy, thơm hương đông trùng, có
                        vị chua nhẹ, đậm vị của cà phê tự nhiên.
                        Cà phê đông trùng không chỉ giúp tỉnh tảo mà còn tăng
                        cường sức đề kháng, tiếp sức cho người cần năng lượng
                        bùng nổ.
                    </p>
                </div>
            </div>

            <button className="btn btn-outline-dark btn-lg mt-4 prod-btn">ĐẶT NGAY</button>
        </div>
    )
}

export default ProdHaThao