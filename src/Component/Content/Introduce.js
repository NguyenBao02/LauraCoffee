import introduce from "../../assets/image/introduce.png"
import "../../assets/scss/introduce.scss"

const Introduce = () => {
    return (
        <div className="introduce-container">
            <h2 className="mb-3">LAURA COFFEE</h2>
            <p>LAURA COFFEE - sản phẩm do nữ ca sĩ Nhật Kim Anh sáng lập, Cùng công nghệ chế biến hiện đại bậc nhất thế giới, Laura Coffee mang đến hương vị bừng tỉnh mọi giác quan của người sành cà phê. Sự kế thừa giá trị phong phú của truyền thống và sáng tạo hiện đại. Gói trọn tinh túy của những hạt cà phê tự hào Đất Việt, hạt cà phê tinh túy đất trời của vùng đất Cao Nguyên. Nơi ấp ủ hạt giống cà phê số 1 tại Việt Nam.</p>
            <p>Các dòng sản phẩm của Laura Coffee được phát triển dựa trên sự kết hợp giữa nguyên liệu cà phê chất lượng cao và thảo dược tự nhiên, nhằm cung cấp các lợi ích về sức khỏe, chẳng hạn như tăng cường sinh lực và hỗ trợ hệ miễn dịch. Công ty tập trung vào sự hài lòng của khách hàng thông qua việc phát triển sản phẩm sáng tạo, đáp ứng nhu cầu ngày càng cao về các sản phẩm cà phê bổ dưỡng và có lợi cho sức khỏe.</p>
            <div className="introduce-image mt-4">
                <img src={introduce} alt="laura" />
            </div>
        </div>
    )
}

export default Introduce;