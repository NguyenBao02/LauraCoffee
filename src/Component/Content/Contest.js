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
            </div>

            <div className="contest-bottom d-flex flex-column justify-content-center align-items-center">
                <h4>Cách thức tham giam cuộc thi:</h4>
                <p> Quay Video: Người chơi quay video ngắn (từ 30 giây đến 1 phút) với sáng tạo cá nhân cùng Laura Coffee
                    Gửi Video: Người chơi đăng tải video lên nền tảng TikTokvà gắn thẻ trang của Laura Coffee, hoặc gửi video qua một nền tảng tải lên video mà bạn chỉ định.
                    Hashtag: Sử dụng hashtag chiến dịch #LauraCoffeeChallenge #CaféCreativity
                </p>
                <p>Phần Thưởng
                    1 giải nhất: 1 combo 10 hộp Cafe Laura + 5.000.000 tiền mặt
                    1 giải nhì:1 combo 10 hộp Cafe Laura + 3.000.000 tiền mặt
                    2 giải ba: 1 combo 10 hộp Cafe Laura + 1.000.000 tiền mặt mặt
                    10 giải khuyến khích: 1 combo 10 hộp cafe Laura
                </p>
                <p>:coffee:️:sparkles:Tham gia cuộc thi để có cơ hội nhận được giải thưởng lớn cùng Laura Coffee. :coffee:️:sparkles:
                    #lauracofffe #caffe #LauraCoffeeChallenge #CaféCreativity</p>
                <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02nXb7m5E52zgsusYNuHxzw3qp6Nw5JQhko5rwHvofee1WpXHhCZv9UqAiMWbyTZVtl&id=61566566663301"><button className="btn btn-outline-dark btn-lg mt-1 contest-bottom-btn">THAM GIA NGAY</button></a>
            </div>
        </div>
    )
}

export default Contest