import { useState, useEffect } from "react";
// import { GoogleButton } from "../ButtonsComponent/Button";
import {
  SignUpButton,
  GoogleSignUpButton,
} from "../ButtonsComponent/AuthenticationButtons";
import { GoogleIcon } from "../IconComponent/SocialMediaIcons";
import { useNavigate } from "react-router-dom";


export const SignUpIndividual = () => {
  const initialValues = {
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    checked: false,
  };

  const [person, setPerson] = useState(initialValues);
  const [personDetails, setPersonDetails] = useState([]);
  const [passwordToggle, setpasswordToggle] = useState(false);
  const [passwordToggle1, setpasswordToggle1] = useState(false);
  const [errors, setErrors] = useState({});
  const [submission, setSubmission] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      person.password !== person.confirmPassword &&
      !person.email &&
      !person.phoneNumber &&
      !person.password &&
      !person.confirmPassword &&
      !person.checked
    ) {
      e.preventDefault();
    } else if (person.password === person.confirmPassword) {
      setPersonDetails([...personDetails, person]);
      setPerson(initialValues);
    }
    setErrors(validate(person));
    setSubmission(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submission) {
      console.log(personDetails);

      navigate("/userdashboard");
    } else {
      console.log("Invalid Form");
    }
  });
  const validate = () => {
    const errors = {};

    if (!person.email) {
      errors.email = "Email is required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(person.email)
    ) {
      errors.email = "Email is not valid";
    }
    if (!person.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (
      !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(person.phoneNumber)
    ) {
      errors.phoneNumber = "Phone Number is not valid";
    }
    if (!person.password) {
      errors.password = "Password is required";
    } else if (
      !/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
        person.password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number or special character";
    }
    if (person.password !== person.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!person.checked) {
      errors.checked =
        "You must agree to the terms and conditions before submitting";
    }
    return errors;
  };

  const handleShowHide = (e) => {
    setpasswordToggle(!passwordToggle);
    e.preventDefault();
  };
  const handleShowHide2 = (e) => {
    setpasswordToggle1(!passwordToggle1);
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container form">
        <div className="form-outline mb-2">
          <input
            type="email"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
            className="border rounded p-2 w-100 labelStyle mb-1"
            placeholder="Email"
          />
          {errors.email && (
            <div
              className="text-white bg-danger border-danger border rounded p-1"
              style={{ fontSize: "10px" }}
            >
              {errors.email}
            </div>
          )}
        </div>
        <div className="form-outline mb-2">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={person.phoneNumber}
            onChange={handleChange}
            className="border rounded p-2 w-100 labelStyle mb-1"
            placeholder="Phone Number"
          />
          {errors.phoneNumber && (
            <div
              className="text-white bg-danger border-danger border rounded p-1"
              style={{ fontSize: "10px" }}
            >
              {errors.phoneNumber}
            </div>
          )}
        </div>
        <div className="form-outline d-flex">
          <input
            type={passwordToggle ? "text" : "password"}
            id="password"
            name="password"
            value={person.password}
            onChange={handleChange}
            className="border border-end-0 rounded-start p-2 w-100 labelStyle mb-1"
            placeholder="Password"
          />
          <button
            className="border rounded-end border-start-0 px-2 bg-transparent mb-1"
            onClick={handleShowHide}
          >
            {passwordToggle ? <HidePassWordIcon /> : <ShowPassWordIcon />}
          </button>
        </div>
        {errors.password && (
          <div
            className="text-white bg-danger border-danger border rounded p-1"
            style={{ fontSize: "10px" }}
          >
            {errors.password}
          </div>
        )}
        <div className="form-outline d-flex">
          <input
            type={passwordToggle1 ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={person.confirmPassword}
            onChange={handleChange}
            className="border border-end-0 rounded-start p-2 w-100 labelStyle mt-2 mb-1"
            placeholder="Confirm Password"
          />

          <button
            className="border rounded-end border-start-0 px-2 bg-transparent mt-2 mb-1"
            onClick={handleShowHide2}
          >
            {passwordToggle1 ? <HidePassWordIcon /> : <ShowPassWordIcon />}
          </button>
        </div>
        {errors.confirmPassword && (
          <div
            className="text-white bg-danger border-danger border rounded p-1"
            style={{ fontSize: "10px" }}
          >
            {errors.confirmPassword}
          </div>
        )}
        <div className="form-check my-1">
          <input
            className="form-check-input"
            type="checkbox"
            value={person.checked}
            id="checked"
            name="checked"
            onChange={handleChange}
            checked={person.checked}
          />
          <label className="text-secondary fw-bold" htmlFor="checked">
            By ticking this box you are indicating you have read and accept our
            terms and privacy policy.
          </label>
        </div>
        {errors.checked && (
          <div
            className="text-white bg-danger border-danger border rounded p-1"
            style={{ fontSize: "10px" }}
          >
            {errors.checked}
          </div>
        )}
        <div className="d-flex flex-column mt-4">
          <div className="mx-auto mb-2">
            <SignUpButton />
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <GoogleSignUpButton />
      </div>
    </>
  );
};

export const SignUpOrganization = () => {
  const initialValues = {
    organizationName: "",
    organizationEmail: "",
    contactEmail: "",
    password2: "",
    confirmPassword2: "",
    checked: false,
  };
  const [organization, setOrganization] = useState(initialValues);
  const [organizationDetails, setOrganizationDetails] = useState([]);
  const [passwordToggle, setpasswordToggle] = useState(false);
  const [passwordToggle1, setpasswordToggle1] = useState(false);
  const [errors, setErrors] = useState({});
  const [submission, setSubmission] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOrganization({ ...organization, [name]: value });
    // setErrors(validate(organization));
  };
  const handleShowHide = (e) => {
    setpasswordToggle(!passwordToggle);
    e.preventDefault();
  };
  const handleShowHide2 = (e) => {
    setpasswordToggle1(!passwordToggle1);
    e.preventDefault();
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      organization.password2 !== organization.confirmPassword2 &&
      !organization.organizationName &&
      !organization.organizationEmail &&
      !organization.contactEmail &&
      !organization.password2 &&
      !organization.confirmPassword2 &&
      !organization.checked
    ) {
      e.preventDefault();
    } else if (organization.password2 === organization.confirmPassword2) {
      setOrganizationDetails([...organizationDetails, organization]);
      setOrganization(initialValues);
    }
    setErrors(validate(organization));
    setSubmission(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submission) {
      console.log(organizationDetails);
      navigate("/userdashboard");
    } else {
      console.log("Invalid Form");
    }
  });

  const validate = () => {
    const errors = {};
    if (!organization.organizationName) {
      errors.organizationName = "Organization Name is Required";
    }
    if (!organization.organizationEmail) {
      errors.organizationEmail = "Organization Email is Required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(
        organization.organizationEmail
      )
    ) {
      errors.organizationEmail = "Email is not valid";
    }

    if (!organization.contactEmail) {
      errors.contactEmail = "Contact person email is Required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        organization.organizationEmail
      )
    ) {
      errors.organizationEmail = "Email is not valid";
    }
    if (!organization.password2) {
      errors.password2 = "Password is required";
    } else if (
      !/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
        organization.password2
      )
    ) {
      errors.password2 =
        "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number or special character";
    }
    if (organization.password2 !== organization.confirmPassword2) {
      errors.confirmPassword2 = "Passwords do not match";
    }
    if (!organization.checked) {
      errors.checked =
        "You must agree to the terms and conditions before submitting";
    }
    return errors;
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
            className="border rounded p-2 w-100 labelStyle mb-1"
            placeholder="Organization Name"
          />
          {errors.organizationName && (
            <div
              className="text-white bg-danger border-danger border rounded p-1"
              style={{ fontSize: "10px" }}
            >
              {errors.organizationName}
            </div>
          )}
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="organizationEmail"
            name="organizationEmail"
            value={organization.organizationEmail}
            onChange={handleChange}
            className="border rounded p-2 w-100 labelStyle mb-1"
            placeholder="Organization Email"
          />
          {errors.organizationEmail && (
            <div
              className="text-white bg-danger border-danger border rounded p-1"
              style={{ fontSize: "10px" }}
            >
              {errors.organizationEmail}
            </div>
          )}
        </div>

        <h6>Contact Person Information</h6>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={organization.contactEmail}
            onChange={handleChange}
            className="border rounded p-2 w-100 labelStyle mb-1"
            placeholder="Email"
          />
          {errors.contactEmail && (
            <div
              className="text-white bg-danger border-danger border rounded p-1"
              style={{ fontSize: "10px" }}
            >
              {errors.contactEmail}
            </div>
          )}
        </div>
        <div className="form-outline d-flex">
          <input
            type={passwordToggle ? "text" : "password"}
            id="password2"
            name="password2"
            value={organization.password2}
            onChange={handleChange}
            className="border border-end-0 rounded-start p-2 w-100 labelStyle mb-1"
            placeholder="Password"
          />
          <button
            className="border rounded-end border-start-0 px-2 bg-transparent mb-1"
            onClick={handleShowHide}
          >
            {passwordToggle ? <HidePassWordIcon /> : <ShowPassWordIcon />}
          </button>
        </div>
        {errors.password2 && (
          <div
            className="text-white bg-danger border-danger border rounded p-1"
            style={{ fontSize: "10px" }}
          >
            {errors.password2}
          </div>
        )}
        <div className="form-outline d-flex">
          <input
            type={passwordToggle1 ? "text" : "password"}
            id="confirmPassword2"
            name="confirmPassword2"
            value={organization.confirmPassword2}
            onChange={handleChange}
            className="border border-end-0 rounded-start p-2 w-100 labelStyle mt-2 mb-1"
            placeholder="Confirm Password"
          />
          <button
            className="border rounded-end border-start-0 px-2 bg-transparent mt-2 mb-1"
            onClick={handleShowHide2}
          >
            {passwordToggle1 ? <HidePassWordIcon /> : <ShowPassWordIcon />}
          </button>
        </div>
        {errors.confirmPassword2 && (
          <div
            className="text-white bg-danger border-danger border rounded p-1"
            style={{ fontSize: "10px" }}
          >
            {errors.confirmPassword2}
          </div>
        )}
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="text-secondary fw-bold" htmlFor="flexCheckDefault">
            By ticking this box you are indicating you have read and accept our
            terms and privacy policy.
          </label>
        </div>
        {/* {errors.checked && (
          <div
            className="text-white bg-danger border-danger border rounded p-1"
            style={{ fontSize: "10px" }}
          >
            {errors.checked}
          </div>
        )} */}
        <div className="d-flex flex-column mt-4">
          <div className="mx-auto mb-2">
            <SignUpButton />
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <GoogleSignUpButton />
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
