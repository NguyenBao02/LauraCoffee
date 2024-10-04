import prod_2 from "../../assets/image/prod_2.png"
import "../../assets/scss/prodNew.scss"

const ProLinhChi = () => {
    return (
        <div className="prod-container my-text-primary">
            <div className="row mt-4">
                <div className="col-lg-3">
                    <img src={prod_2} alt="logo" />
                </div>
                <div className="col-lg-9 mt-2">
                    <h2 className="mb-3">CÀ PHÊ NẤM LINH CHI</h2>
                    <span className="d-block mb-2">75.000Đ/HỘP (10 gói)</span>
                    <p>Hương vị: ngọt thanh, có vị đắng nhẹ và hơi khét của nấm linh chi, mùi thơm đậm đà.
                        Cà phê linh chi mang hương vị thanh nhẹ đủ làm say đắm những tín đồ cà phê, mang đến sức khỏe cho người sử dụng.
                    </p>
                </div>
            </div>

            <button className="btn btn-outline-dark btn-lg mt-4 prod-btn">ĐẶT NGAY</button>
        </div>
    )
}

export default ProLinhChi