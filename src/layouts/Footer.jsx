import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer>
          <div className="container-fluid bg-light">
            <div className="footer_top border-bottom pb-3 ps-5 ">
              <div className="row justify-content-center align-self-center p-5">
                <div className="col-3 about_me">
                  <h4 className="text-uppercase">about me</h4>
                  <p className="text-secondary">
                    Marketing Data Strategist | Web Analyst | Power BI
                    Specialist | Master Ad | SQL Expert | Corporate Athlete |
                    Team Leader ATN Bangla NDC-17 | NDFBD Spread of Youth of
                    Award Winner
                  </p>
                  <ul className="list-group list-group-horizontal list-unstyled">
                    <li className="pe-3">
                      <a className="border border-0 text-secondary" href="/">
                        <i className=" fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="pe-3">
                      <a className="border border-0 text-secondary" href="/">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="pe-3">
                      <a className="border border-0 text-secondary" href="/">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>

                    <li className="pe-3">
                      <a className="border border-0  text-secondary" href="/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-3 phone_mail">
                  <h4 className="text-uppercase">phone & email</h4>
                  <p className="text-secondary">
                    01568111119 <br />
                    Workspace.younusfaravi@gmail.com
                  </p>
                </div>
                <div className="col-3 address">
                  <h4 className="text-uppercase">address</h4>
                  <p className="text-secondary">Dhaka, Bangladesh</p>
                </div>
                <div className="col-3 newslater">
                  <h4 className="text-uppercase">newslatter</h4>
                  <form action="">
                    <input
                      className="p-2 mb-2 "
                      type="email"
                      name="email"
                      id="email"
                      placeholder="your email address"
                    />
                    <button
                      className="btn_footer text-uppercase p-1 border-0"
                      type="submit"
                    >
                      sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="footer_bottom pt-3">
              <div className="row justify-content-around align-items-center">
                <div className="col-4">
                  <p className="text-secondary pt-3">
                    Md Younus’s Services &copy; all right reserved
                  </p>
                </div>
                <div className="col-8">
                  <ul className="mx-5 d-flex nav justify-content-between">
                    <li>
                      <a
                        className="nav-link text-secondary text-capitalize"
                        href="#/"
                      >
                        home
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link text-secondary text-capitalize"
                        href="#/"
                      >
                        about
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link text-secondary text-capitalize"
                        href="#/"
                      >
                        service
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link text-secondary text-capitalize"
                        href="/"
                      >
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link text-secondary text-capitalize"
                        href="/"
                      >
                        blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link text-secondary text-capitalize"
                        href="./frame.html"
                      >
                        Photo Frame
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
