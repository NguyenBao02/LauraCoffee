import news from "../../assets/image/news.png"
import "../../assets/scss/news.scss"

const News = () => {
    return (
        <div className="row news-container">
            <div className="col-lg-5">
                <img src={news} />
            </div>
            <div className="col-lg-7">
                <p className="news-container-header">CEO</p>
                <h2>Nhật Kim Anh</h2>
                <p className="news-container-title">
                    Laura Coffee vinh dự vào Top 10 Thương Hiệu Hàng
                    Đầu Việt Nam 2023
                </p>
                <p className="news-container-desc">
                    Lễ công bố Thương hiệu hàng đầu Việt Nam do
                    Trung tâm Nghiên cứu Phát triển Doanh nghiệp
                    Châu Á phối hợp với các cơ quan hữu quan tổ
                    chức. Top 10 Thương hiệu hàng đầu Việt Nam 2023
                    trao cho thương hiệu Laura Coffee và Doanh
                    nhân Trí thức tiêu biểu Việt Nam 2023 trao cho
                    Tổng Giám đốc Bùi Thị Thảo Trang.
                </p>

                <button className="btn btn-outline-dark btn-lg mt-2 news-container-btn">XEM THÊM</button>
            </div>
        </div>
    )
}

export default News