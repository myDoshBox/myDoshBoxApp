import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FooterLogo from "../assets/images/FooterLogo.jpg";
import { HiArrowNarrowUp } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";

const FooterComponents = () => {
  return (
    <>
      <Container fluid className="BgColor p-3">
        {/* Back to top button Starts */}
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className=" border border-3 rounded-1 btn btn-lg  p-2 "
            id="GoTop"
          >
            <HiArrowNarrowUp color="white" size="30px" />
          </button>
        </div>
        {/* Back to top button Ends */}

        {/* Footer Menu Section Starts */}
        <div>
          <Row className="mt-2 ">
            <div className=" col mb-4  ">
              <img src={FooterLogo} className="img-fluid p-3 " alt="" />
            </div>
            {/* First Section */}
            <div className=" col mb-2  ms-3 ">
              <h5 className="text-white">The Projects</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="" className="text-white text-decoration-none">
                    Sevices
                  </a>
                </li>
                <li>
                  <a href="" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
              </ul>
            </div>
            {/* Second Section */}
            <div className="col mb-2">
              <h5 className="text-white">Support</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="" className="text-white text-decoration-none">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="" className="text-white text-decoration-none">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="" className="text-white text-decoration-none">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="" className="text-white text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="" className="text-white text-decoration-none">
                    Customer Care
                  </a>
                </li>
              </ul>
            </div>
            {/* Third Section */}
            <div className="col-md-5 mx-2">
              <Row className=" ">
                <h5 className="text-white">ADDRESS</h5>
                <p className="text-white  text-wrap">
                  The 8thGear Space, 11b Colin Onabule Crescent, Diamond Estate
                  Off CMD Road (beside Secretariat/Magodo gate) Lagos Nigeria
                </p>
              </Row>{" "}
              <Row className="mt-3 col-sm-12  ">
                {/* input section Start */}
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control text-wrap text-break "
                    placeholder="Enter email to receive updates and newsletter"
                    aria-label="Recipient's Email"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text " id="basic-addon2">
                    SUBSCRIBE
                  </span>
                  {/* input section End */}
                </div>
                <p className="text-white ">Connect With Us</p>
                <div className="p-3 ">
                  <a
                    href=""
                    className="   border border-white  rounded-circle p-2 mx-1"
                  >
                    <BsInstagram color="white" size="20px" />
                  </a>
                  <a
                    href=""
                    className=" border border-white  rounded-circle p-2 mx-1"
                  >
                    <GrLinkedinOption color="white" size="20px" />
                  </a>
                  <a
                    href=""
                    className=" border border-white  rounded-circle p-2 mx-1"
                  >
                    <ImFacebook color="white" size="20px" />
                  </a>
                  <a
                    href=""
                    className=" border border-white  rounded-circle p-2 mx-1"
                  >
                    <BsTwitter color="white" size="20px" />
                  </a>
                  <a
                    href=""
                    className=" border border-white  rounded-circle p-2 mx-1"
                  >
                    <SiWhatsapp color="white" size="20px" />
                  </a>
                </div>
              </Row>
            </div>
          </Row>
        </div>
        {/* Footer Menu Section Ends */}
      </Container>
    </>
  );
};

export default FooterComponents;
