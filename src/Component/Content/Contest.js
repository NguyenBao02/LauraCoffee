import "../../assets/scss/contest.scss"
import contest from "../../assets/image/contest.png"

const Contest = () => {
    return (
        <div className="contest-container">
            <div className="contest-top">
                <img src={contest} />
            </div>
            <div className="contest-bottom d-flex flex-column justify-content-center align-items-center">
                <h4>“THỬ THÁCH SÁNG TẠO” CÙNG LAURA COFFEE</h4>
                <p> Chào các tín đồ cà phê! Bạn có đam mê sáng tạo và yêu thích cà phê? Hãy
                    tham gia ngay cuộc thi thử thách cà phê sáng tạo cùng Laura Coffee! Chúng
                    tôi tìm kiếm những ý tưởng độc đáo và phong cách pha chế mới lạ. Hãy để
                    tài năng của bạn tỏa sáng và có cơ hội nhận những phần quà hấp dẫn! Thời
                    gian tham gia từ [29/09/2024] đến [15/10/2024]. Đừng bỏ lỡ cơ hội này, hãy
                    chia sẻ và tham gia ngay hôm nay!
                </p>

                <button className="btn btn-outline-dark btn-lg mt-1 contest-bottom-btn">THAM GIA NGAY</button>
            </div>

        </div>
    )
}

export default Contest