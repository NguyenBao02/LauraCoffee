import "../../assets/scss/contact.scss"

const Contact = () => {
    return (
        <div className="contact-container row">
            <div className="contact-desc col-lg-5">
                <h1 className="mb-3">Contact</h1>
                <span className="contact-desc-span-a">Please fill out the form below to send us an email</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
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