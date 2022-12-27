import { Nav, Navbar, Container, Form } from "react-bootstrap";
import logo from "../../images/doshlogo.jpg";
import logo2 from "../../images/doshlogolight.jpg";
import image from "../../images/Image.jpg";
// import { GuestNavSignInButton } from "../ButtonsComponent/AuthenticationButtons";
import { GeneralBtn } from "../ButtonsComponent/GenandAuthBtn";
import { Link } from "react-router-dom";

export const GuestNavbar = () => {
  return (
    <Navbar expand="lg" className="guest-nav">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburgerIcon">
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8.33333H22.5V11.6667H0V8.33333ZM0 0H30V3.33333H0V0ZM0 20H13.5656V16.6667H0V20Z"
            fill="#006747"
          />
        </svg>
      </Navbar.Toggle>

      <Navbar.Brand className="bigLogo">
        <Link to="/">
          <img src={logo} alt="logo" className="my-auto" />
        </Link>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto nav-text">
          <div className="d-flex">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="closeIcon me-auto px-4 mt-3"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0741 10.8984L20.3651 1.30028C20.504 1.14077 20.3872 0.898438 20.1724 0.898438H17.6519C17.5035 0.898438 17.3613 0.962855 17.2634 1.07328L10.4253 8.99046L3.58722 1.07328C3.49246 0.962855 3.35033 0.898438 3.19872 0.898438H0.678255C0.463478 0.898438 0.346614 1.14077 0.485588 1.30028L8.7766 10.8984L0.485588 20.4966C0.454456 20.5321 0.434484 20.5756 0.428042 20.6219C0.4216 20.6681 0.428958 20.7152 0.449244 20.7575C0.46953 20.7998 0.501891 20.8356 0.542485 20.8606C0.583078 20.8855 0.6302 20.8987 0.678255 20.8984H3.19872C3.34717 20.8984 3.4893 20.834 3.58722 20.7236L10.4253 12.8064L17.2634 20.7236C17.3582 20.834 17.5003 20.8984 17.6519 20.8984H20.1724C20.3872 20.8984 20.504 20.6561 20.3651 20.4966L12.0741 10.8984Z"
                  fill="white"
                />
              </svg>
            </Navbar.Toggle>
            <Navbar.Brand href="#home" className="ms-auto px-2 mt-3 smallLogo">
              <img src={logo2} alt="logo" />
            </Navbar.Brand>
          </div>
          <Nav.Link>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/aboutus" className="nav-links">
              About Us
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/pricingpage" className="nav-links">
              Pricing
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/faqs" className="nav-links">
              FAQs
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contactus" className="nav-links">
              Contact
            </Link>
          </Nav.Link>
          <Nav.Link href="#link" className="nav-links nav-btn pb-5">
            {/* <GuestNavSignInButton /> */}
            <GeneralBtn
              text={"Sign Up"}
              styles={"GeneralBtnStyle1 btn all-btn text-white"}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export const UserDashboardNavbar = () => {
  return (
    <Container>
      <Nav className="justify-content-end userDashboardNav" activeKey="/home">
        <Nav.Item className=" mx-md-5 mt-2">
          <Form className="searchField">
            <Form.Control
              type="text"
              placeholder="search"
              className="search border-1 rounded-4 "
            />
          </Form>
        </Nav.Item>
        <Nav.Item className="d-flex ms-md-5">
          <div>
            <span className="d-block text-end">John Doe</span>
            <span className="d-block text-end">Admin</span>
          </div>
          <div className="mt-1 ms-2">
            <img src={image} alt="" />
          </div>
        </Nav.Item>
      </Nav>
    </Container>
  );
};
