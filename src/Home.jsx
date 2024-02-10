import React from "react";
// import Header from "./layouts/Header";
// import Footer from "./layouts/Footer";

const Home = () => {
  return (
    <>
      <div className="container">
        {/* <!-- header option start --> */}
        {/* <Header/> */}
         {/* <!-- header option end --> */}
         
        {/* <!-- developer details start  --> */}
        <section>
          <div className="container-fluid bg-light  ">
            <div className="row border">
              <div className="col-2"></div>
              <div className="col-4 ">
                <div className="developer_derails">
                  <h5 className="pb-3 text-capitalize">
                    greetings, it's Younus Faravi
                  </h5>
                  <h1 className="pb-3">
                    I'm a BI Consultent, Growth Marketing Analyst
                  </h1>
                  <p className="text-secondary fs-6">
                    In today's highly competitive digital landscape, leveraging
                    data science is the key to unlocking unparalleled insights
                    and optimizing your digital marketing strategies. Our
                    Data-Driven service combines the power of data analysis,
                    machine learning, and digital marketing expertise to help
                    businesses maximize their online impact, drive targeted
                    traffic, and achieve outstanding ROI
                  </p>
                  <button className="btn btn-danger ">
                    <a className="text-white text-decoration-none" href="#/">
                      HIRE ME NOW
                    </a>
                  </button>
                </div>
              </div>
              <div className="col-6">
                <div className="developer_img">
                  <img
                    className="img-fluid ps-5 pt-5"
                    src="./img/behaviour.PNG"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- developer details end  --> */}

        {/* <!-- personal details start  --> */}

        <section>
          <div className="container-fluid pb-5 mb-5">
            <div className="pt-5 pb-3 px-0">
              <h2 className="text-center fw-bold">
                About
                <div className="col-1 progress_bar_control">
                  <div className="progress text-center" style={{ height: 3 }}>
                    <div
                      className="progress-bar bg-dark opacity-25"
                      role="progressbar"
                      aria-label="Segment one"
                      style={{ width: "33%", height: 3 }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      aria-label="Segment two"
                      style={{ width: "34%", height: 3 }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-dark opacity-25"
                      role="progressbar"
                      aria-label="Segment three"
                      style={{ width: "33%", height: 3 }}
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </h2>
            </div>
            <div className="row justify-content-center aligns-items-center gap-5">
              <div className="col-6">
                <div className="personal-details">
                  <h3>Personal Details:</h3>
                  <p>
                    In today's highly competitive digital landscape, leveraging
                    data science is the key to unlocking unparalleled insights
                    and optimizing your digital marketing strategies. Our
                    Data-Driven service combines the power of data analysis,
                    machine learning, and digital marketing expertise to help
                    businesses maximize their online impact, drive targeted
                    traffic, and achieve outstanding ROI
                  </p>
                  <div className="row pb-3">
                    <div className="col-6 address_left_part m-0 p-0">
                      <address className="m-0 p-0">
                        <ul className="fs-6 text">
                          <li>Name: Md Younus's Services</li>
                          <li>JOB: freelancer</li>
                          <li>PHONE: 01568111119</li>
                        </ul>
                      </address>
                    </div>
                    <div className=" col-6 addressh_right_part m-0 p-0">
                      <address>
                        <ul>
                          <li>BIRTHDAY: 27 Feb 1998</li>
                          <li>EMAIL: Workspace.younusfaravi@gmail.com</li>
                          <li>LOCATION: Dhaka, Bangladesh</li>
                        </ul>
                      </address>
                    </div>
                  </div>
                  <ul className="list-group list-group-horizontal list-unstyled">
                    <li className="pe-3">
                      <a
                        className="border border-danger rounded-circle p-2 text-dark"
                        href="https://www.facebook.com/"
                      >
                        <i class="fa fa-facebook-f" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="pe-3">
                      <a
                        className="border border-danger rounded-circle p-2 text-dark"
                        href="https://twitter.com/"
                      >
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="pe-3">
                      <a
                        className="border border-danger rounded-circle p-2 text-dark"
                        href="https://www.instagram.com/"
                      >
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                   
                    <li className="pe-3">
                      <a
                        className="border border-danger rounded-circle p-2 text-dark"
                        href="https://www.linkedin.com/"
                      >
                       <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4 ">
                <div className="personal_img ">
                  <img
                    className="img-thumbnail "
                    src="./img/personal.PNG"
                    alt="Personal"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- personal details end  --> */}

        {/* <!-- steve jobs speech start  --> */}
        <section>
          <div className="container-fluid bg-secondary bg-opacity-25">
            <div className="col-12">
              <div className="text-center py-3 ">
                <h2 className="text-dark">
                  Design is not just waht it looks like and feels like.
                </h2>
                <h3 className="h3">Design is how it works</h3>
                <h5 className="text-secondary">-Steve Jobs</h5>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- steve jobs speech end  --> */}

        {/* <!-- what i do section start  --> */}
        <section>
          <div className="container-fluid p-5 mt-5 mb-5">
            <div className="what_i_do_heading ">
              <div className="col-12 pb-5 mb-3">
                <h2 className="text-center text-uppercase">what i do</h2>
                <div className="col-2 progress_bar_control">
                  <div className="progress text-center" style={{ height: 3 }}>
                    <div
                      className="progress-bar bg-dark opacity-25"
                      role="progressbar"
                      aria-label="Segment one"
                      style={{ width: "20%", height: 3 }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-dark opacity-25"
                      role="progressbar"
                      aria-label="Segment one"
                      style={{ width: "20%", height: 3 }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      aria-label="Segment two"
                      style={{ width: "20%", height: 3 }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-dark opacity-25"
                      role="progressbar"
                      aria-label="Segment three"
                      style={{ width: "20%", height: 3 }}
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-dark opacity-25"
                      role="progressbar"
                      aria-label="Segment three"
                      style={{ width: "20%", height: 3 }}
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                <div className="d-flex flex-wrap justify-content-around pb-5">
                  <div className="col-lg-3 card shadow web_design text-center p-3">
                    <div className="web_hover">
                      <i class="fa fa-tv fs-4 fw-bold" aria-hidden="true"></i>
                      <h3 className="text-capitalize pt-2">web design</h3>
                    </div>
                    <p className="text-secondary text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas autem ea quo omnis modi eligendi eaque ipsam
                      accusantium?
                    </p>
                  </div>
                  <div className="col-lg-3 card shadow web_development text-center p-3">
                    <div className="web_hover">
                     <i class="fa fa-code  fs-4 fw-bold" aria-hidden="true"></i>
                      <h3 className="text-capitalize pt-2">web development</h3>
                    </div>
                    <p className="text-secondary text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas autem ea quo omnis modi eligendi eaque ipsam
                      accusantium?
                    </p>
                  </div>
                  <div className="col-lg-3 card shadow graphics_design text-center p-3">
                    <div className="web_hover">
                    <i class="fa fa-gear fs-4 fw-bold"></i>
                      <h3 className="text-capitalize pt-2">graphics design</h3>
                    </div>
                    <p className="text-secondary text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas autem ea quo omnis modi eligendi eaque ipsam
                      accusantium?
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-around pt-5">
                  <div className="col-lg-3 card shadow photography text-center p-3">
                    <div className="web_hover">
                      <i class="fa fa-camera  fs-4 fw-bold" aria-hidden="true"></i>
                      <h3 className="text-capitalize pt-2">photography</h3>
                    </div>
                    <p className="text-secondary text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas autem ea quo omnis modi eligendi eaque ipsam
                      accusantium?.
                    </p>
                  </div>
                  <div className="col-lg-3 card shadow online_support text-center p-3">
                    <div className="web_hover">
                     <i class="fa fa-handshake-o  fs-4 fw-bold" aria-hidden="true"></i>
                      <h3 className="text-capitalize pt-2">online support</h3>
                    </div>
                    <p className="text-secondary text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas autem ea quo omnis modi eligendi eaque ipsam
                      accusantium?
                    </p>
                  </div>
                  <div className="col-lg-3 card shadow android_development text-center p-3">
                    <div className="web_hover">
                      <i class="fa fa-android fs-4 fw-bold" aria-hidden="true"></i>
                      <h3 className="text-capitalize pt-2">
                        android development
                      </h3>
                    </div>
                    <p className="text-secondary text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas autem ea quo omnis modi eligendi eaque ipsam
                      accusantium?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- what i do section end  --> */}

        {/* <!-- what is next part start  --> */}
        <section>
          <div className="container">
            <div className="col-12 pb-5 mb-3">
              <h2 className="text-center text-uppercase">what next</h2>
              <div className="col-2 progress_bar_control">
                <div className="progress text-center" style={{ height: 3 }}>
                  <div
                    className="progress-bar bg-dark opacity-25"
                    role="progressbar"
                    aria-label="Segment one"
                    style={{ width: "20%", height: 3 }}
                    aria-valuenow={15}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-dark opacity-25"
                    role="progressbar"
                    aria-label="Segment one"
                    style={{ width: "20%", height: 3 }}
                    aria-valuenow={15}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-label="Segment two"
                    style={{ width: "20%", height: 3 }}
                    aria-valuenow={30}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-dark opacity-25"
                    role="progressbar"
                    aria-label="Segment three"
                    style={{ width: "20%", height: 3 }}
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-dark opacity-25"
                    role="progressbar"
                    aria-label="Segment three"
                    style={{ width: "20%", height: 3 }}
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-10 col-sm-12 m-auto text-center pb-5 mb-5">
              <p className="text-secondary pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                quaerat culpa voluptatem accusamus aliquam quasi fuga quas sunt
                mollitia cumque, asperiores ipsam deleniti possimus, in iusto
                inventore! Quia, nulla impedit. Lorem ipsum dolor sit amet.
              </p>
              <div className="d-flex align-items-center justify-content-center gap-4">
                <button type="button" className="btn">
                  Services
                </button>
                <button type="button" className="btn">
                  let's work togather
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- what is next part end  --> */}

        {/* <!-- footer option start  --> */}
        {/* <Footer/> */}
        {/* <!-- footer option end  --> */}
      </div>
    </>
  );
};

export default Home;
