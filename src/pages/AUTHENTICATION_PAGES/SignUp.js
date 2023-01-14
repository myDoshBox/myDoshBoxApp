import { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { GoogleButton } from "../../components/ButtonsComponent/Button";
import { GoogleIcon } from "../../components/IconComponent/SocialMediaIcons";

const SignUpPage = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-sm-12"></div>
        <div className="col-lg-6 col-sm-12"></div>
      </div>
    </>
  );
};

export const SignUpForm = () => {
  return (
    <div className="container sign-up-form px-3 px-md-4 px-lg-5 py-2 py-md-3 py-lg-4">
      <h3 className="titleStyle mb-4 text-center">
        Set up your Doshbox account
      </h3>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={12}>
            <Nav className="justify-content-center mb-4" variant="pills">
              <Nav.Item className="mx-auto my-2">
                <Nav.Link eventKey="first">As an Individual</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-auto my-2">
                <Nav.Link eventKey="second">As a Company</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <SignUpIndividual />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <SignUpOrganization />
              </Tab.Pane>
            </Tab.Content>
            <div className="d-flex justify-content-center mt-2">
              <p>
                <span style={{ fontSize: "14px" }}>
                  Already have an account?
                </span>
                <a
                  href="#"
                  className="text-decoration-none ms-1 text-success"
                  style={{ fontSize: "14px" }}
                >
                  Sign In
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

const SignUpIndividual = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const [person, setPerson] = useState(initialValues);
  const [personDetails, setPersonDetails] = useState([]);
  const [passwordToggle, setpasswordToggle] = useState(false);
  const [passwordToggle1, setpasswordToggle1] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      person.firstName &&
      person.lastName &&
      person.email &&
      person.phoneNumber &&
      person.password &&
      person.confirmPassword
    ) {
      setPersonDetails([...personDetails, person]);
      setPerson(initialValues);
    }
  };
  const handleShowHide = () => {
    setpasswordToggle(!passwordToggle);
  };
  const handleShowHide2 = () => {
    setpasswordToggle1(!passwordToggle1);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container form">
        <div className="row mb-2">
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={person.firstName}
                onChange={handleChange}
                className="border rounded p-2 w-100 labelStyle"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={person.lastName}
                onChange={handleChange}
                className="border rounded p-2 w-100 labelStyle"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <div className="form-outline mb-2">
          <input
            type="email"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
            className="border rounded p-2 w-100 labelStyle"
            placeholder="Email"
          />
        </div>
        <div className="form-outline mb-2">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={person.phoneNumber}
            onChange={handleChange}
            className="border rounded p-2 w-100 labelStyle"
            placeholder="Phone Number"
          />
        </div>
        <div className="form-outline mb-2 d-flex">
          <input
            type={passwordToggle ? "text" : "password"}
            id="password"
            name="password"
            value={person.password}
            onChange={handleChange}
            className="border border-end-0 rounded-start p-2 w-100 labelStyle"
            placeholder="Password"
          />
          <button
            className="border rounded-end border-start-0 px-2 bg-transparent"
            onClick={handleShowHide}
          >
            {passwordToggle ? <HidePassWordIcon /> : <ShowPassWordIcon />}
          </button>
        </div>
        <div className="form-outline mb-2 d-flex">
          <input
            type={passwordToggle1 ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={person.confirmPassword}
            onChange={handleChange}
            className="border border-end-0 rounded-start p-2 w-100 labelStyle"
            placeholder="Confirm Password"
          />

          <button
            className="border rounded-end border-start-0 px-2 bg-transparent"
            onClick={handleShowHide2}
          >
            {passwordToggle1 ? <HidePassWordIcon /> : <ShowPassWordIcon />}
          </button>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="text-secondary fw-bold" for="flexCheckDefault">
            By ticking this box you are indicating you have read and accept our
            terms and privacy policy.
          </label>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="mx-auto mb-2">
            <button
              type="submit"
              className="GeneralBtnStyle1 btn all-btn text-white"
              style={{ width: "210px" }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <GoogleButton text="Sign Up With Google" icon={<GoogleIcon />} />
      </div>
    </>
  );
};

const SignUpOrganization = () => {
  const initialValues = {
    organizationName: "",
    organizationEmail: "",
    contactFirstName: "",
    contactLastName: "",
    contactEmail: "",
    password2: "",
    confirmPassword2: "",
  };
  const [organization, setOrganization] = useState(initialValues);
  const [organizationDetails, setOrganizationDetails] = useState([]);
  const [passwordToggle, setpasswordToggle] = useState(false);
  const [passwordToggle1, setpasswordToggle1] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOrganization({ ...organization, [name]: value });
  };

  const handleShowHide = () => {
    setpasswordToggle(!passwordToggle);
  };
  const handleShowHide2 = () => {
    setpasswordToggle1(!passwordToggle1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      organization.organizationName &&
      organization.organizationEmail &&
      organization.contactFirstName &&
      organization.contactLastName &&
      organization.contactEmail &&
      organization.password2 &&
      organization.confirmPassword2
    ) {
      setOrganizationDetails([...organizationDetails, organization]);
      setOrganization(initialValues);
    }
  };
  return (
    <>
      <form className="container form" onSubmit={handleSubmit}>
        <div className="form-outline mb-2">
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={organization.organizationName}
            onChange={handleChange}
            className="border rounded p-2 w-100 labelStyle"
            placeholder="Organization Name"
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="organizationEmail"
            name="organizationEmail"
            value={organization.organizationEmail}
            onChange={handleChange}
            className="border rounded p-2 w-100 labelStyle"
            placeholder="Organization Email"
          />
        </div>
        <div className="row mb-2">
          <h6>Contact Person Information</h6>
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="contactFirstName"
                name="contactFirstName"
                value={organization.contactFirstName}
                onChange={handleChange}
                className="border rounded p-2 w-100 labelStyle"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="contactLastName"
                name="contactLastName"
                value={organization.contactLastName}
                onChange={handleChange}
                className="border rounded p-2 w-100 labelStyle"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={organization.contactEmail}
            onChange={handleChange}
            className="border rounded p-2 w-100 labelStyle"
            placeholder="Email"
          />
        </div>
        <div className="form-outline mb-2 d-flex">
          <input
            type={passwordToggle ? "text" : "password"}
            id="password2"
            name="password2"
            value={organization.password2}
            onChange={handleChange}
            className="border border-end-0 rounded-start p-2 w-100 labelStyle"
            placeholder="Password"
          />
          <button
            className="border rounded-end border-start-0 px-2 bg-transparent"
            onClick={handleShowHide}
          >
            {passwordToggle ? <HidePassWordIcon /> : <ShowPassWordIcon />}
          </button>
        </div>
        <div className="form-outline mb-2 d-flex">
          <input
            type={passwordToggle1 ? "text" : "password"}
            id="confirmPassword2"
            name="confirmPassword2"
            value={organization.confirmPassword2}
            onChange={handleChange}
            className="border border-end-0 rounded-start p-2 w-100 labelStyle"
            placeholder="Confirm Password"
          />
          <button
            className="border rounded-end border-start-0 px-2 bg-transparent"
            onClick={handleShowHide2}
          >
            {passwordToggle1 ? <HidePassWordIcon /> : <ShowPassWordIcon />}
          </button>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="text-secondary fw-bold" for="flexCheckDefault">
            By ticking this box you are indicating you have read and accept our
            terms and privacy policy.
          </label>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="mx-auto mb-2">
            <button
              type="submit"
              className="GeneralBtnStyle1 btn all-btn text-white"
              style={{ width: "210px" }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <GoogleButton text="Sign Up With Google" icon={<GoogleIcon />} />
      </div>
    </>
  );
};

const ShowPassWordIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      fill="gray"
      className="bi bi-eye-slash-fill"
      viewBox="0 0 16 16"
    >
      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
    </svg>
  );
};
const HidePassWordIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      fill="gray"
      className="bi bi-eye-fill"
      viewBox="0 0 16 16"
    >
      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
    </svg>
  );
};
