import "../../assets/scss/keyword.scss"
import kw_1 from "../../assets/image/kw_1-1.png"
import kw_2 from "../../assets/image/kw_1-2.png"
import kw_3 from "../../assets/image/kw_1-3.png"

const Keyword1 = () => {
    return (
        <div className="keyword-container">
            <h2 className="mb-4">Tham Gia Cuộc Thi Sáng Tạo Cà Phê Cùng Các Tiktoker Của Laura Coffee</h2>
            <p>Bạn có đam mê cà phê và yêu thích sáng tạo? Hãy cùng Laura Coffee khám phá hành trình pha chế đầy cảm hứng thông qua <b>cuộc thi sáng tạo cà phê</b> với sự góp mặt của các <b>influencer</b> hàng đầu! Đây là cơ hội tuyệt vời để bạn thể hiện tài năng pha chế và chia sẻ những công thức cà phê độc đáo, đậm chất cá nhân.</p>
            <h4>1. Cơ Hội Khẳng Định Đam Mê</h4>
            <p>Cuộc thi lần này không chỉ đơn thuần là một sân chơi về pha chế cà phê mà còn là nơi để bạn khẳng định đam mê của mình. Bạn sẽ có dịp tạo ra những ly cà phê kết hợp thảo dược quý hiếm như đông trùng hạ thảo, nấm linh chi – những nguyên liệu độc đáo trong các sản phẩm của <b>Laura Coffee</b>.</p>
            <div className="keyword-image">
                <a href="https://www.youtube.com/embed/ZKUTJ-VU7Es?feature=oembed">
                    <img src={kw_1} alt="anh" />
                </a>
                <span>Cà phê xoài</span>
            </div>
            <h4>2. Đồng Hành Cùng Các Influencer</h4>
            <p>Sự kiện quy tụ nhiều <b>tiktoker</b> nổi tiếng, cùng tham gia và chia sẻ kinh nghiệm, giúp bạn không chỉ học hỏi mà còn có cơ hội lan tỏa công thức sáng tạo của mình đến cộng đồng yêu cà phê.</p>
            <div className="keyword-image">
                <a href="https://www.youtube.com/embed/1boWnLefy0g?feature=oembed">
                    <img src={kw_2} alt="anh" />
                </a>
                <span>Bánh mỳ chấm cà phê</span>
            </div>
            <h4>3. Giải Thưởng Hấp Dẫn</h4>
            <p>Không chỉ dừng lại ở việc thể hiện tài năng, bạn còn có cơ hội nhận những giải thưởng hấp dẫn từ Laura Coffee, từ các sản phẩm cà phê cao cấp đến việc trở thành <b>đại sứ thương hiệu</b> trong các chiến dịch tương lai.</p>
            <div className="keyword-image">
                <a>
                    <img src={kw_3} alt="anh" />
                </a>
                <span>Bánh mỳ chấm cà phê</span>
            </div>
            <h4>4. Cách Thức Tham Gia:</h4>
            <p>- Quay Video: Người chơi quay video ngắn (từ 30 giây đến 1 phút) với sáng tạo cá nhân cùng Laura Coffee
                - Gửi Video:Người chơi đăng tải video lên nền tảng TikTokvà gắn thẻ trang của Laura Coffee, hoặc gửi video qua một nền tảng tải lên video mà bạn chỉ định.
                - Hashtag: Sử dụng hashtag chiến dịch #LauraCoffeeChallenge #CaféCreativity
            </p>
            <h4>5. Cùng Lan Tỏa Tinh Hoa Cà Phê</h4>
            <p>
                Cuộc thi không chỉ dừng lại ở những ly cà phê ngon mà còn mang thông điệp về sức khỏe và phong cách sống hiện đại. Hãy tham gia và để Laura Coffee giúp bạn lan tỏa đam mê sáng tạo!
                Đăng ký ngay để trở thành một phần của cộng đồng cà phê sáng tạo cùng Laura Coffee!
            </p>
        </div>
    )
}

export default Keyword1;