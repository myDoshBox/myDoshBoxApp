import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { GeneralBtn } from "../ButtonsComponent/GenandAuthBtn";

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

      <div className="d-flex pb-3 flex-row ">
        <div className="signUpNavStyle">
          <GeneralBtn
            text={`Sign Up as an Individual`}
            styles={`GeneralBtnStyle1 btn all-btn text-white`}
          />
        </div>

        <div className="ms-3 signUpNavStyle">
          <GeneralBtn
            text={`Sign Up as an Organization`}
            styles={`GeneralBtnStyle1 btn all-btn text-white`}
          />
        </div>
      </div>

      <Form className>
        <Form.Group className="d-flex justify-content-inbetween flex-column flex-lg-row">
          <div className="">
            <div className=" ">
              <Form.Control
                type="text"
                placeholder="First Name"
                id="firstname"
                name="firstname"
                value={signUp.firstname}
                onChange={handleChange}
                className="signUpStyle rounded-3 mb-1"
                style={{ width: "15rem", height: "3.4rem" }}
              />
            </div>
          </div>
          <Form.Group>
            <div className="ms-3">
              <div className="">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  id="lastname"
                  name="lastname"
                  value={signUp.lastname}
                  onChange={handleChange}
                  className="rounded-3 border"
                  style={{ width: "15rem", height: "3.4rem" }}
                />
              </div>
            </div>
          </Form.Group>
        </Form.Group>
        <Form.Group className="my-3">
          <div className="">
            <div className="">
              <Form.Control
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={signUp.email}
                onChange={handleChange}
                className="rounded-3 mb-1"
                style={{ width: "31.25rem", height: "3.4rem" }}
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="my-3">
          <div className="">
            <div className="">
              <Form.Control
                type="input"
                placeholder="Phone Number"
                id="number"
                name="number"
                value={signUp.number}
                onChange={handleChange}
                className="rounded-3 mb-1"
                style={{ width: "31.25rem", height: "3.4rem" }}
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <div className="inputStyle pb-3">
            <div className="">
              <input
                className="rounded-3 border"
                style={{ width: "31.25rem", height: "3.4rem" }}
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
            <div className="">
              <input
                className="rounded-3 border"
                style={{ width: "31.25rem", height: "3.4rem" }}
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
            className="w-50"
            type="checkbox"
            label="By ticking this box you are indicating you have read and accept our terms and privacy policy."
          />
        </Form.Group>
        <div className="sign-up-section">
          <div className="d-flex mt-4 ">
            <GeneralBtn
              text={`sign in`}
              styles={`GeneralBtnStyle1 btn all-btn text-white`}
            />
          </div>
          <div className="d-flex pb-2 mt-3 ">
            <GeneralBtn
              text={`Sign Up with Google`}
              styles={`GoogleAuthBtn btn`}
            />
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
      <div className="d-flex  pb-3 flex-row ">
        <div className="signUpNavStyle">
          <GeneralBtn
            text={`Sign Up as an Individual`}
            styles={`GeneralBtnStyle1 btn all-btn text-white`}
          />
        </div>

        <div className="ms-3 signUpNavStyle">
          <GeneralBtn
            text={`Sign Up as an Organization`}
            styles={`GeneralBtnStyle1 btn all-btn text-white`}
          />
        </div>
      </div>

      <Form>
        <Form.Group className="">
          <div className="">
            <div className="">
              <Form.Control
                type="text"
                placeholder="Organization Name"
                id="organizationName"
                name="organizationName"
                value={signUp.email}
                onChange={handleChange}
                className="rounded-3  mb-1"
                style={{ width: "31.25rem", height: "3.4rem" }}
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="my-3">
          <div className="">
            <div className="">
              <Form.Control
                type="email"
                placeholder="Organization Email"
                id="organizationeEmail"
                name="organizationEmail"
                value={signUp.email}
                onChange={handleChange}
                className="rounded-3 mb-1"
                style={{ width: "31.25rem", height: "3.4rem" }}
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="my-3">
          <div className="">
            <div className="">
              <Form.Control
                type="text"
                placeholder="Contact person name"
                id="contactPersonName"
                name="contactPersonName"
                value={signUp.email}
                onChange={handleChange}
                className="rounded-3 mb-1"
                style={{ width: "31.25rem", height: "3.4rem" }}
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="my-3">
          <div className="">
            <div className="">
              <Form.Control
                type="email"
                placeholder="Contact person email"
                id="contactPersonEmail"
                name="contactPersonEmail"
                value={signUp.email}
                onChange={handleChange}
                className="rounded-3 mb-1"
                style={{ width: "31.25rem", height: "3.4rem" }}
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <div className="row inputStyle">
            <div className="">
              <input
                className="rounded-3 border"
                style={{ width: "31.25rem", height: "3.4rem" }}
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
            <div className="">
              <input
                className="rounded-3 border"
                style={{ width: "31.25rem", height: "3.4rem" }}
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
            className=" w-50"
            type="checkbox"
            label="By ticking this box you are indicating you have read and accept our terms and privacy policy."
          />
        </Form.Group>

        <div className="sign-up-section">
          <div className="pb-3 mt-4 ">
            <GeneralBtn
              text={`sign in`}
              styles={`GeneralBtnStyle1 btn all-btn text-white`}
            />
          </div>
          <div className=" pb-2 ">
            <GeneralBtn
              text={`Sign In with Google`}
              styles={`GoogleAuthBtn btn`}
            />
          </div>
          <p className="mb-5"> Already have an account? Sign in</p>
        </div>
      </Form>
    </Container>
  );
};
