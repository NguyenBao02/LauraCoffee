import benefit from "../../assets/image/benefit.png"
import "../../assets/scss/introduce.scss"

const Benefit = () => {
    return (
        <div className="introduce-container">
            <h2 className="mb-3">LỢI ÍCH CỦA CÀ PHÊ LAURA</h2>
            <p>Cà phê Laura của ca sĩ Nhật Kim Anh mang lại lợi ích cho sức khỏe nhờ sự kết hợp giữa cà phê hảo hạng và các dược liệu quý như đông trùng hạ thảo và nấm linh chi. Những thành phần này giúp tăng cường sinh lực, hỗ trợ hệ miễn dịch, và mang lại nguồn năng lượng tự nhiên cho cơ thể. Sản phẩm không chỉ mang đến trải nghiệm cà phê ngon mà còn giúp cải thiện sức khỏe tổng thể cho người dùng.</p>
            <div className="introduce-image mt-4">
                <img src={benefit} alt="laura" />
            </div>
        </div>
    )
}

export default Benefit;