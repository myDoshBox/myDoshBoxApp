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
import { SubscribeForm } from "../components/FormComponents.js/ContactForms";
import { useRef } from "react";

const Footer = () => {
  const disappearEl = useRef(null);

  const handleDisappear = () => {
    disappearEl.style.display = "none";
  };
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    const paths = ["/", "/aboutus", "/contactus", "/pricingpage", "/faqs"];
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
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-12 col-md-6">
            <img src={FooterLogo} className=" w-75" alt="Logo" />
          </div>
          <div className="col-lg-4 col-sm-12 mx-auto d-flex col-md-6">
            <div className="mb-5">
              <h6 className="text-white">The Project</h6>
              <span class="nav flex-column">
                <Link
                  onClick={handleDisappear}
                  style={{ textDecoration: "none" }}
                  to="/"
                  className="text-white opacity-75 nav-item text-white"
                >
                  Home
                </Link>

                <Link
                  onClick={handleDisappear}
                  style={{ textDecoration: "none" }}
                  to="/aboutus"
                  className="text-white opacity-75 nav-item"
                >
                  About
                </Link>

                <Link
                  onClick={handleDisappear}
                  style={{ textDecoration: "none" }}
                  to=".."
                  className="text-white opacity-75 nav-item link"
                >
                  Service
                </Link>

                <Link
                  onClick={handleDisappear}
                  style={{ textDecoration: "none" }}
                  to="/pricingpage"
                  className="text-white opacity-75 nav-item"
                >
                  Pricing
                </Link>
              </span>
            </div>
            <div className="mb-5 mx-auto">
              <h6 className="text-white">Support</h6>
              <ul class="nav flex-column">
                <Link
                  onClick={handleDisappear}
                  style={{ textDecoration: "none" }}
                  to="/contactus"
                  className="text-white opacity-75 nav-item"
                >
                  Contact
                </Link>

                <Link
                  onClick={handleDisappear}
                  style={{ textDecoration: "none" }}
                  to="/faqs"
                  className="text-white opacity-75
                  nav-item"
                >
                  FAQ
                </Link>

                <Link
                  onClick={handleDisappear}
                  style={{ textDecoration: "none" }}
                  to=".."
                  className="text-white opacity-75 nav-item"
                >
                  Terms of Use
                </Link>

                <Link
                  onClick={handleDisappear}
                  style={{ textDecoration: "none" }}
                  to=".."
                  className="text-white opacity-75 nav-item"
                >
                  Private Policy
                </Link>

                <Link
                  onClick={handleDisappear}
                  style={{ textDecoration: "none" }}
                  to=".."
                  className="text-white opacity-75 nav-item"
                >
                  Customer Care
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <div className="row">
              <h6 className="text-center text-white">ADDRESS</h6>
              <span className="text-break text-white fw-lighter fs-6 opacity-75">
                The 8thGear Space, 11b Colin Onabule Crescent, Diamond Estate
                Off CMD Road (beside Secretariat/Magodo gate) Lagos Nigeria
              </span>
            </div>
            <div className="row">
              <span className="mt-3">
                <SubscribeForm />
              </span>
              <div className="mt-3">
                <h6 className="mb-3 text-white">Connect With US</h6>
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
          </div>
        </div>
      </div>
      {/* Footer Menu Section Ends  */}
    </footer>
  ) : null;
};

export default Footer;
