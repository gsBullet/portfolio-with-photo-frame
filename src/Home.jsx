import React from "react";
// import Header from "./layouts/Header";
// import Footer from "./layouts/Footer";

const Home = () => {
  return (
    <>
      <div className="container">
        {/* <!-- developer details start  --> */}
        <section>
          <div className="container-fluid bg-light  ">
            <div className="row border backgroundImage">
              <div className="col-lg-2 col-md:d-none col-sm:d-none"></div>
              <div className="col-lg-4 col-md-4 col-sm-12 ">
                <div className="developer_derails">
                  <h5 className="pb-3 text-capitalize gratingsColor fw-bold">
                    greetings, it's Younus Faravi
                  </h5>
                  <h1 className="fs-1 fw-bold brandsColor">
                    I'm a BI Consultent, Growth Marketing Analyst
                  </h1>
                  <p className="text-black fs-6">
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
                      Meet & Greet
                    </a>
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12:d-none">
                <div className="developer_img">
                  {/* <img
                    className="img-fluid ps-5 pt-5"
                    src="./img/behaviour.PNG"
                    alt=""
                  /> */}
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
              <div className="col-lg-5 col-lg-4 col-md-12">
                <div className="personal-details">
                  <p>
                    I'm a seasoned BI Analyst with a profound passion for
                    business growth through data-driven strategies. With a
                    strong foundation in analytical skills I've honed my
                    expertise to deliver exceptional results.
                  </p>
                  <div className="row pb-3">
                    <div className="m-3">
                      <address className="m-0 p-0">
                        <ul className="fs-4 text list-unstyled">
                          <li className="fs-5">
                            <i
                              className="fa fa-user fs-4 text-secondary"
                              aria-hidden="true"
                            ></i>{" "}
                            &nbsp;&nbsp; Name: Md Younus's Services
                          </li>
                          <li className="fs-5">
                            <i
                              className="fa fa-phone fs-4 text-secondary"
                              aria-hidden="true"
                            ></i>
                            &nbsp;&nbsp; PHONE: 01568111119
                          </li>
                          <li className="fs-5">
                            <i
                              className="fa fa-envelope fs-4 text-secondary"
                              aria-hidden="true"
                            ></i>{" "}
                            &nbsp;&nbsp; EMAIL: younusfaravi@gmail.com
                          </li>
                        </ul>
                      </address>
                    </div>
                  </div>
                  <ul className="list-group list-group-horizontal list-unstyled">
                    <li className="pe-3">
                      <a
                        className="border border-secondary rounded-circle p-2 text-primary"
                        href=": https://www.facebook.com/biconsultent/
                        "
                      >
                        <i
                          class="fa-brands fa-facebook-f"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li className="pe-3">
                      <a
                        className="border border-secondary rounded-circle p-2 text-primary"
                        href=" https://www.youtube.com/@younusfaravi
                        "
                      >
                        <i class="fa-brands fa-youtube" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="pe-3">
                      <a
                        className="border border-secondary rounded-circle p-2 text-primary"
                        href=" https://www.instagram.com/younusfaravi/
                        "
                      >
                        <i
                          class="fa-brands fa-instagram"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>

                    <li className="pe-3">
                      <a
                        className="border border-secondary rounded-circle p-2 text-primary"
                        href="https://www.linkedin.com/in/bianalyst/"
                      >
                        <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="pe-3">
                      <a
                        className="border border-secondary rounded-circle p-2 text-primary"
                        href=" https://www.threads.net/@younusfaravi
                        "
                      >
                        <i class="fa-brands fa-square-threads"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="personal_img ">
                  <img
                    className="img-thumbnail "
                    src="./img/faravi.jpg"
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
                <div className="d-flex flex-wrap justify-content-around gap-3 pb-5">
                  <div className="col-lg-3 card shadow web_design text-center p-3">
                    <div className="web_hover">
                      <i className="fa-solid fa-chart-line fs-4 fw-bold"></i>
                      <h3 className="text-capitalize pt-2">Data Analytics</h3>
                    </div>
                    <p className="text-secondary text-center">
                      DA The process of analysing raw data to find trends and
                      insight. including extracting data to derive patterns,
                      relations, and connections
                    </p>
                  </div>
                  <div className="col-lg-3 card shadow web_development text-center p-3">
                    <div className="web_hover">
                      <i
                        className="fa fa-code  fs-4 fw-bold"
                        aria-hidden="true"
                      ></i>
                      <h3 className="text-capitalize pt-2">web development</h3>
                    </div>
                    <p className="text-secondary text-center">
                      Web development is the work involved in developing a
                      website for the Internet or an intranet.
                    </p>
                  </div>
                  <div className="col-lg-3 card shadow graphics_design text-center p-3">
                    <div className="web_hover">
                      <i className="fa-solid fa-chart-pie fs-4 fw-bold"></i>
                      <h3 className="text-capitalize pt-2">
                        Predictive Visualisation
                      </h3>
                    </div>
                    <p className="text-secondary text-center">
                      DV the process of creating visual representations of data.
                      It can use static, dynamic, or interactive visual trends.
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-around pt-5">
                  <div className="col-lg-3 card shadow photography text-center p-3">
                    <div className="web_hover">
                      <i
                        className="fa fa-dashboard fs-4 fw-bold"
                        aria-hidden="true"
                      ></i>
                      <h3 className="text-capitalize pt-2">BI Dashboard</h3>
                    </div>
                    <p className="text-secondary text-center">
                      - BI dashboard is a business intelligence tool which
                      allows users to track, analyse and report on key
                      performance indicators and other metrics
                    </p>
                  </div>
                  <div className="col-lg-3 card shadow online_support text-center p-3">
                    <div className="web_hover">
                      <i
                        className="fa-brands fa-android fs-4 fw-bold"
                        aria-hidden="true"
                      ></i>
                      <h3 className="text-capitalize pt-2">Apps Development</h3>
                    </div>
                    <p className="text-secondary text-center">
                      Android software development is the process by which
                      applications are created for devices running the Android
                      operating system.
                    </p>
                  </div>
                  <div className="col-lg-3 card shadow android_development text-center p-3">
                    <div className="web_hover">
                      <i className="fa-solid fa-magnifying-glass-chart fs-4 fw-bold"></i>
                      <h3 className="text-capitalize pt-2">Growth Marketing</h3>
                    </div>
                    <p className="text-secondary text-center">
                      DM the promotion of brands to connect with potential
                      customers using the internet and other forms of digital
                      communication.
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
            <div className="col-lg-12 col-md-12 col-sm-12 pb-5 mb-3">
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
      </div>
    </>
  );
};

export default Home;
