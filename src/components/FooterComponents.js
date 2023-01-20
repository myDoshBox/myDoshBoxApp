import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ScrollUpIcon } from "./IconComponent/NavigationAndViewIcon";
import FooterLogo from "../images/FooterLogo.jpg";
import {
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "./IconComponent/SocialMediaIcons";

const Footer = () => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    const paths = [
      "/",
      "/aboutus",
      "/contactus",
      "/pricingpage",
      "/faqs",
      "/signin",
      "/signup",
    ];
    if (paths.includes(location.pathname)) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  }, [location.pathname]);
  return showFooter ? (
    <footer className="FooterBgColor mt-5 pb-5">
      {/* Back to Top Icon Section starts  */}
      <div className="d-flex justify-content-end pt-3 me-3">
        <a href="#BackTop">
          <ScrollUpIcon />
        </a>
      </div>
      {/* Back to Top Icon Section Ends */}
      {/* Footer Menu Section Starts  */}
      <nav className="ms-1 row text-white mx-auto mt-3">
        <div className="col-lg-2 col-sm-12 col-md-6 ">
          <img src={FooterLogo} className=" w-75" alt="" />
        </div>
        <div className="col-lg-4 col-sm-12 col-md-6 d-flex container pb-4">
          <div className="col-5 ms-5">
            <h6>The Project</h6>
            <ul className="fs-6 list-inline">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="">Services</Link>
              </li>
              <li>
                <Link to="/pricingpage">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <h6>Support</h6>
            <ul className="fs-6 list-inline text-white">
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
              <li>
                <Link to="/faqs">FAQ</Link>
              </li>
              <li>
                <Link to="">Terms Of Use</Link>
              </li>
              <li>
                <Link to="">Private Policy</Link>
              </li>
              <li>
                <Link to="">Customer Care</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 ">
          <div>
            <h6 className="text-center">ADDRESS</h6>
            <span className="text-break text-white fw-lighter fs-6 opacity-75">
              The 8thGear Space, 11b Colin Onabule Crescent, Diamond Estate Off
              CMD Road (beside Secretariat/Magodo gate) Lagos Nigeria
            </span>
          </div>
          {/* Subscribe Section starts */}
          <div className="row">
            <div class="input-group mb-3 mt-3">
              <input
                type="text"
                className="form-control placeholder "
                placeholder="Enter email to receive updates and newsletter"
                aria-label="Subscribe"
                aria-describedby="basic-addon2"
              />
              <span
                className="input-group-text btn border text-white "
                id="basic-addon2"
              >
                SUBSCRIBE
              </span>
            </div>
          </div>
          {/* Subscribe Section ends */}
          <div className="row">
            <h6>Connect With US</h6>
            {/* Social Medial Icon Sectin Starts */}
            <span className="mt-2 mb-5">
              <a
                href=""
                className="border border-white  rounded-circle p-2 me-2 "
              >
                <InstagramIcon />
              </a>
              <a
                href=""
                className="border border-white  rounded-circle p-2 me-2 "
              >
                <LinkedinIcon />
              </a>
              <a
                href=""
                className="border border-white  rounded-circle p-2 me-2"
              >
                <FacebookIcon />
              </a>
              <a
                href=""
                className="border border-white  rounded-circle p-2 me-2 "
              >
                <TwitterIcon />
              </a>
              <a
                href=""
                className="border border-white  rounded-circle p-2 me-2 "
              >
                <WhatsAppIcon />
              </a>
            </span>
            {/* Social Medial Icon Sectin Ends */}
          </div>
        </div>
      </nav>
      {/* Footer Menu Section Ends  */}
    </footer>
  ) : null;
};

export default Footer;
