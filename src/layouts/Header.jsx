import React from "react";

const Header = () => {
  return (
    <>
      <div className="container">
        <section>
          <header>
            <div className="header_option my-3">
              <div className="nav_bar col-lg-8 text-center m-auto">
                <ul className="d-flex nav justify-content-center  align-items-center text-secondary">
                  <li className="">
                    <a className="nav-link fw-bold" href="/">
                      Home
                    </a>
                  </li>
                  <li className="">
                    <a className="nav-link  fw-bold " href="/">
                      About
                    </a>
                  </li>
                  <li className="">
                    <a className=" nav-link  fw-bold" href="/">
                      Service
                    </a>
                  </li>

                  <li className="">
                    <a className="nav-link  fw-bold" href="/">
                      Portfolio
                    </a>
                  </li>
                  <li className="">
                    <a className="nav-link fw-bold" href="/">
                      Blog
                    </a>
                  </li>
                  <li className="">
                    <a className="nav-link fw-bold" href="photo-frame">
                      Photo frame
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </section>
      </div>
    </>
  );
};

export default Header;
