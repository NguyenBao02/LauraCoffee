import "../../assets/scss/contact.scss"

const Contact = () => {
    return (
        <div className="contact-container row my-text-primary">
            <div className="contact-desc col-lg-5">
                <h1 className="mb-3">Liên Hệ</h1>
                <span className="contact-desc-span-a">Vui lòng điền vào mẫu dưới đây để gửi email cho chúng tôi</span>
                <p>Chất lượng cà phê là quy chuẩn Laura Coffee đặt lên hàng đầu bởi chỉ khi có hương vị đắm say thì mới có thể khiến mọi người say đắm không lối thoát. Laura Coffee tự tin càng uống càng khỏe, càng khỏe lại càng trẻ.
                </p>
                <h4 className="mt-4">E-mail:</h4>
                <span className="contact-desc-span-b">hello@reallygreatsite.com</span>
            </div>

            <div className="contact-form col-lg-7">
                <form className="row g-3">
                    <div className="col-12">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Nguyen Quoc Bao" />
                    </div>
                    <div className="col-12">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" placeholder="nguyenbao@gmail.com" />
                    </div>
                    <div className="col-12">
                        <label className="form-label">Subject</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label className="form-label">Message</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-outline-dark contact-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact