import "../../assets/scss/keyword.scss";
import kw_1 from "../../assets/image/kw_4-1.png"
import kw_2 from "../../assets/image/kw_4-2.png"
import kw_3 from "../../assets/image/kw_4-3.png"

const Keyword4 = () => {
    return (
        <div className="keyword-container">
            <h2 className="mb-4">LAURA COFFE - NGUỒN NGUYÊN LIỆU SẠCH TỰ NHIÊN.</h2>
            <p>Trong thời đại mà việc chăm sóc sức khỏe đã trở thành ưu tiên hàng đầu của việc lựa chọn sản phẩm nguyên bản và sạch đã trở nên vô cùng quan trọng. Đây cũng chính là lý do khiến LAURA COFFE với cam kết sử dụng nguyên liệu tự nhiên và sạch, ngày càng trở thành sự lựa chọn hàng đầu của những người yêu thích.</p>
            <h4>1. Nguyên liệu sạch tự nhiên - Sự khác biệt của LAURA COFFE.</h4>
            <p>LAURA COFFE hiểu rằng chất lượng của hạt cà phê không chỉ nằm ở hương vị mà còn ở quá trình trồng trọt và chế biến. Bắt nguồn từ những hạt cà phê tinh túy đất trời của vùng đất Cao Nguyên nơi ấp ủ hạt giống cà phê số 1 tại Việt Nam, đảm bảo không sử dụng hóa chất độc hại trong quá trình trồng trọt.Từ việc lựa chọn giống cà phê cho đến quy trình thu hoạch, mọi thứ đều tuân thủ nghiêm ngặt các tiêu chuẩn an toàn và bảo vệ môi trường.</p>
            <div className="keyword-image mb-3">
                <a>
                    <img src={kw_1} alt="anh" />
                </a>
                <span>Người dân thu hoạch hạt cà phê tại Cao Nguyên</span>
            </div>
            <h4>2. Vì sao nguồn nguyên liệu tự nhiên quan trọng?</h4>
            <p>Việc sử dụng nguồn nguyên liệu tự nhiên không chỉ đơn giản là một xu hướng mà còn là cách bảo vệ sức khỏe người tiêu dùng. Cà phê được trồng bằng phương pháp tự nhiên giúp loại bỏ nguy cơ bị nhiễm hóa chất độc hại, đồng thời giữ lại những dưỡng chất và hương vị nguyên bản nhất của cà phê. LAURA COFFE cam kết rằng mọi sản phẩm đều được chế biến từ nguyên liệu sạch, không chỉ đảm bảo hương vị đậm đà mà còn mang lại sự an toàn tối đa cho người dùng.</p>
            <div className="keyword-image mb-3">
                <a>
                    <img src={kw_2} alt="anh" />
                </a>
                <span>Sản phẩm của Laura Coffe</span>
            </div>
            <h4>3. Lợi Ích Sức Khỏe Từ Cà Phê Sạch.</h4>
            <p>Cà phê không chỉ giúp chúng ta cảm thấy tỉnh táo mà còn mang lại nhiều tác dụng tích cực cho sức khỏe khi được làm từ nguồn nguyên liệu sạch. Các chất dinh dưỡng tự nhiên có trong hạt cà phê có thể giúp cải thiện khả năng tập trung, nâng cao trí nhớ và hỗ trợ cơ thể trong việc chống chọi với căng thẳng. Hơn nữa, việc tiêu thụ cà phê từ nguồn nguyên liệu tự nhiên như Laura Coffee cũng góp phần bảo vệ hệ tiêu hóa, giảm thiểu nguy cơ mắc các bệnh tim mạch và nâng cao khả năng trao đổi chất của cơ thể. Với những lợi ích sức khỏe vượt trội, Laura Coffee thực sự là lựa chọn tuyệt vời cho những ai yêu thích uống cà phê mà vẫn muốn tốt cho sức khỏe. Hãy thêm Laura Coffee vào thói quen hàng ngày của bạn để trải nghiệm những lợi ích này!</p>
            <div className="keyword-image mb-3">
                <a>
                    <img src={kw_3} alt="anh" />
                </a>
                <span>Uống Laura Coffe giúp cơ thể tỉnh táo</span>
            </div>
        </div>
    )
}

export default Keyword4