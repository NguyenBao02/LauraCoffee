import "../../assets/scss/contest.scss"
import contest from "../../assets/image/contest.png"
import { useNavigate } from "react-router-dom"

const Contest = () => {
    const navigate = useNavigate();

    return (
        <div className="contest-container my-text-primary">
            <div className="contest-top">
                <img src={contest} alt="logo" />
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

                <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02nXb7m5E52zgsusYNuHxzw3qp6Nw5JQhko5rwHvofee1WpXHhCZv9UqAiMWbyTZVtl&id=61566566663301"><button className="btn btn-outline-dark btn-lg mt-1 contest-bottom-btn">THAM GIA NGAY</button></a>
            </div>

        </div>
    )
}

export default Contest