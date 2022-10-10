import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { SignInButton } from "../ButtonsComponent/AuthenticationButtons";
import { SignUpButton } from "../ButtonsComponent/AuthenticationButtons";
import { GoogleSignInButton } from "../ButtonsComponent/AuthenticationButtons";
import { GoogleSignUpButton } from "../ButtonsComponent/AuthenticationButtons";
import { GuestNavSignInButton } from "../ButtonsComponent/AuthenticationButtons";
import { SignUpIndividual } from "../ButtonsComponent/AuthenticationButtons";
import { SignUpOrganization } from "../ButtonsComponent/AuthenticationButtons";

//SignInForm
export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const [passwordToggle, setpasswordToggle] = useState(false);
  const handleShowHide = () => {
    setpasswordToggle(!passwordToggle);
  };

  return (
    <Container>
      <div className="pt-5">
        <h2>Sign In</h2>
        <p>Welcome back! Please enter your details</p>
      </div>
      <Form>
        <Form.Group className="my-3">
          <div className="row ">
            <div className="col-sm-12 col-md-8 col-lg-6 align-items-center">
              <Form.Control
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={handleChangeEmail}
                className=" inputFormStyle mb-1"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <div className="row inputStyle">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <input
                className=" inputFormStyle"
                id="password"
                type={passwordToggle ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
              />
              {passwordToggle ? (
                <Icon
                  className="toggleBtnStyle"
                  onClick={handleShowHide}
                  icon="bxs:show"
                  color="gray"
                  width="25"
                />
              ) : (
                <Icon
                  className="toggleBtnStyle"
                  onClick={handleShowHide}
                  icon="bxs:hide"
                  color="gray"
                  width="25"
                />
              )}
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mt-2 ms-2 " controlId="formBasicCheckbox">
          <Form.Check
            className="checkboxStyle"
            type="checkbox"
            label="Remember information"
          />
        </Form.Group>

        <div className="pb-3 mt- ">
          <SignInButton />
        </div>
        <div className="pb-2 ">
          <GoogleSignInButton />
        </div>
        <p className="mb-5 ms-5">Don’t have an account? Sign up</p>
      </Form>
    </Container>
  );
};

//SignUpIndividualForm
export const SignUpIndividualForm = () => {
  const [signUp, setSignUp] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUp({ ...signUp, [name]: value });
  };

  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setconfirmPassword(e.target.value);
  };

  const [passwordToggle, setpasswordToggle] = useState(false);
  const handleShowHide = () => {
    setpasswordToggle(!passwordToggle);
  };

  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);

  const handleConfirmPasswordShow = () => {
    setConfirmPasswordToggle(!confirmPasswordToggle);
  };

  return (
    <Container className="">
      <div className="pt-5">
        <h2>Set up your Dosh account</h2>
        <p>Lorem ipsum dolor sit amet </p>
      </div>

      <div className="d-flex  pb-5 flex-column flex-lg-row mx-0 mx-lg-5">
        <div className="signUpNavStyle">
          <SignUpIndividual />
        </div>

        <div className=" ms-sm-0 ms-lg-3 signUpNavStyle">
          <SignUpOrganization />
        </div>
      </div>

      <Form className>
        <Form.Group className="d-flex justify-content-inbetween flex-column flex-lg-row">
          <div className="row ">
            <div className="col-12 col-md-8 col-lg-6 align-items-center ">
              <Form.Control
                type="text"
                placeholder="First Name"
                id="firstname"
                name="firstname"
                value={signUp.firstname}
                onChange={handleChange}
                className="signUpStyle mb-1"
              />
            </div>
          </div>
          <Form.Group>
            <div className="row ms-sm-0 ms-lg-2 mt-3 mt-lg-0">
              <div className="col-12 col-md-8 col-lg-6 align-items-center">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  id="lastname"
                  name="lastname"
                  value={signUp.lastname}
                  onChange={handleChange}
                  className="signUpStyle"
                />
              </div>
            </div>
          </Form.Group>
        </Form.Group>
        <Form.Group className="my-3">
          <div className="row ">
            <div className="col-sm-12 col-md-8 col-lg-6 align-items-center">
              <Form.Control
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={signUp.email}
                onChange={handleChange}
                className="inputFormStyle mb-1"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="my-3">
          <div className="row ">
            <div className="col-sm-12 col-md-8 col-lg-6 align-items-center">
              <Form.Control
                type="number"
                placeholder="Phone Number"
                id="number"
                name="number"
                value={signUp.number}
                onChange={handleChange}
                className="inputFormStyle mb-1"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <div className="row inputStyle pb-3">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <input
                className=" inputFormStyle"
                id="password"
                type={passwordToggle ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
              />
              {passwordToggle ? (
                <Icon
                  className="toggleBtnStyle"
                  onClick={handleShowHide}
                  icon="bxs:show"
                  color="gray"
                  width="25"
                />
              ) : (
                <Icon
                  className="toggleBtnStyle"
                  onClick={handleShowHide}
                  icon="bxs:hide"
                  color="gray"
                  width="25"
                />
              )}
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <div className="row inputStyle">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <input
                className=" inputFormStyle"
                id="password"
                type={confirmPasswordToggle ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
              />
              {confirmPasswordToggle ? (
                <Icon
                  className="toggleBtnStyle"
                  onClick={handleConfirmPasswordShow}
                  icon="bxs:show"
                  color="gray"
                  width="25"
                />
              ) : (
                <Icon
                  className="toggleBtnStyle"
                  onClick={handleConfirmPasswordShow}
                  icon="bxs:hide"
                  color="gray"
                  width="25"
                />
              )}
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mt-2 ms-2 " controlId="formBasicCheckbox">
          <Form.Check
            className="w-75"
            type="checkbox"
            label="By ticking this box you are indicating you have read and accept our terms and privacy policy."
          />
        </Form.Group>
        <div className="sign-up-section">
          <div className="d-flex mt-4 ">
            <SignUpButton />
          </div>
          <div className="d-flex pb-2 mt-3 ">
            <GoogleSignUpButton />
          </div>
          <p className=""> Already have an account? Sign in</p>
        </div>
      </Form>
    </Container>
  );
};

//SignUpOrganization
export const SignUpOrganizationForm = () => {
  const [signUp, setSignUp] = useState({
    organizationName: "",
    organizationEmail: "",
    contactPersonName: "",
    contactPersonEmail: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUp({ ...signUp, [name]: value });
  };

  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setconfirmPassword(e.target.value);
  };

  const [passwordToggle, setPasswordToggle] = useState(false);
  const handleShowHide = () => {
    setPasswordToggle(!passwordToggle);
  };

  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);

  const handleOrganPasswordShow = () => {
    setConfirmPasswordToggle(!confirmPasswordToggle);
  };

  return (
    <Container>
      <div className="pt-5">
        <h2>Set up your Dosh account</h2>
        <p>Lorem ipsum dolor sit amet </p>
      </div>
      <div className="d-flex  pb-5 flex-column flex-lg-row mx-0 mx-lg-5">
        <div className="signUpNavStyle">
          <SignUpIndividual />
        </div>

        <div className=" ms-sm-0 ms-lg-3 signUpNavStyle">
          <SignUpOrganization />
        </div>
      </div>

      <Form>
        <Form.Group className="">
          <div className="row ">
            <div className="col-sm-12 col-md-8 col-lg-6 align-items-center">
              <Form.Control
                type="text"
                placeholder="Organization Name"
                id="organizationName"
                name="organizationName"
                value={signUp.email}
                onChange={handleChange}
                className="inputFormStyle mb-1"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="my-3">
          <div className="row ">
            <div className="col-sm-12 col-md-8 col-lg-6 align-items-center">
              <Form.Control
                type="email"
                placeholder="Organization Email"
                id="organizationeEmail"
                name="organizationEmail"
                value={signUp.email}
                onChange={handleChange}
                className="inputFormStyle mb-1"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="my-3">
          <div className="row ">
            <div className="col-sm-12 col-md-8 col-lg-6 align-items-center">
              <Form.Control
                type="text"
                placeholder="Contact person name"
                id="contactPersonName"
                name="contactPersonName"
                value={signUp.email}
                onChange={handleChange}
                className="inputFormStyle mb-1"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="my-3">
          <div className="row ">
            <div className="col-sm-12 col-md-8 col-lg-6 align-items-center">
              <Form.Control
                type="email"
                placeholder="Contact person email"
                id="contactPersonEmail"
                name="contactPersonEmail"
                value={signUp.email}
                onChange={handleChange}
                className="inputFormStyle mb-1"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <div className="row inputStyle">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <input
                className=" inputFormStyle"
                id="password"
                type={passwordToggle ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
              />
              {passwordToggle ? (
                <Icon
                  className="toggleBtnStyle"
                  onClick={handleShowHide}
                  icon="bxs:show"
                  color="gray"
                  width="25"
                />
              ) : (
                <Icon
                  className="toggleBtnStyle"
                  onClick={handleShowHide}
                  icon="bxs:hide"
                  color="gray"
                  width="25"
                />
              )}
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <div className="row inputStyle pt-3">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <input
                className=" inputFormStyle"
                id="confirmPassword"
                type={confirmPasswordToggle ? "text" : "Password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
              />
              {confirmPasswordToggle ? (
                <Icon
                  className="toggleBtnStyle"
                  onClick={handleOrganPasswordShow}
                  icon="bxs:show"
                  color="gray"
                  width="25"
                />
              ) : (
                <Icon
                  className="toggleBtnStyle"
                  onClick={handleOrganPasswordShow}
                  icon="bxs:hide"
                  color="gray"
                  width="25"
                />
              )}
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mt-2 ms-2 " controlId="formBasicCheckbox">
          <Form.Check
            className=" w-75"
            type="checkbox"
            label="By ticking this box you are indicating you have read and accept our terms and privacy policy."
          />
        </Form.Group>

        <div className="sign-up-section">
          <div className="pb-3 mt-4 ">
            <SignUpButton />
          </div>
          <div className=" pb-2 ">
            <GoogleSignUpButton />
          </div>
          <p className="mb-5"> Already have an account? Sign in</p>
        </div>
      </Form>
    </Container>
  );
};
