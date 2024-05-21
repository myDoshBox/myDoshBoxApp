import { useState, useEffect } from "react";
// import { GoogleButton } from "../ButtonsComponent/Button";
import {
  SignUpButton,
  GoogleIndividualSignUpButton,
  GoogleOrganizationSignUpButton,
} from "../ButtonsComponent/AuthenticationButtons";
// import { GoogleIcon } from "../IconComponent/SocialMediaIcons";
import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../redux/slices/apiSlice";
import { useDispatch } from "react-redux";

// Sign Up For Individual
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
  const [createUser, { isLoading }] = useCreateUserMutation();
  const dispatch = useDispatch();

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

    if (Object.keys(errors).length === 0) {
      const postDataInfo = {
        email: person.email,
        password: person.password,
        phoneNumber: person.phoneNumber,
        confirmPassword: person.confirmPassword,
      };
      console.log(postDataInfo);
      try {
        createUser(postDataInfo)
          .then((res) => {
            console.log(res);
            if (res.data) {
              console.log(res.data);
              //dispatch(addUser(res.data.data));
              //alert("Account created successfully");
            } else {
              console.log("Invalid credential");
              return;
            }
          })
          .catch((error) => console.error(error));
      } catch (e) {
        console.error(e);
      }

      // navigate("/userdashboard");
    } else {
      alert("Invalid Form");
    }
  };

  // Creating A Responds Start

  // Creating A Responds Sends
  //

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
        <GoogleIndividualSignUpButton />
      </div>
    </>
  );
};

// Sign Up for Organization

export const SignUpOrganization = () => {
  const initialValues = {
    organization_name: "",
    organization_email: "",
    user_email: "",
    password: "",
    password_Confirmation: "",
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
      organization.password !== organization.password_Confirmation &&
      !organization.organization_name &&
      !organization.organization_email &&
      !organization.user_email &&
      !organization.password &&
      !organization.password_Confirmation &&
      !organization.checked
    ) {
      e.preventDefault();
    } else if (organization.password === organization.password_Confirmation) {
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
    if (!organization.organization_name) {
      errors.organization_name = "Organization Name is Required";
    }
    if (!organization.organization_email) {
      errors.organization_email = "Organization Email is Required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(
        organization.organization_email
      )
    ) {
      errors.organization_email = "Email is not valid";
    }

    if (!organization.contact_email) {
      errors.contact_email = "Contact person email is Required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        organization.organization_email
      )
    ) {
      errors.organization_email = "Email is not valid";
    }
    if (!organization.password) {
      errors.password = "Password is required";
    } else if (
      !/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
        organization.password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number or special character";
    }
    if (organization.password !== organization.password_Confirmation) {
      errors.password_confirmation = "Passwords do not match";
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
            // from Control
            // className="form-control"
            name="organization_name"
            value={organization.organization_name}
            onChange={handleChange}
            className="border rounded p-2 w-100 labelStyle mb-1"
            placeholder="Organization Name"
          />
          {errors.organization_name && (
            <div
              className="text-white bg-danger border-danger border rounded p-1"
              style={{ fontSize: "10px" }}
            >
              {errors.organization_name}
            </div>
          )}
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="organization_email"
            name="organization_email"
            value={organization.organization_email}
            onChange={handleChange}
            className="border rounded p-2 w-100 labelStyle mb-1"
            placeholder="Organization Email"
          />
          {errors.organization_email && (
            <div
              className="text-white bg-danger border-danger border rounded p-1"
              style={{ fontSize: "10px" }}
            >
              {errors.organization_email}
            </div>
          )}
        </div>

        <h6>Contact Person Information</h6>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="contact_email"
            name="contact_email"
            value={organization.contact_email}
            onChange={handleChange}
            className="border rounded p-2 w-100 labelStyle mb-1"
            placeholder="Email"
          />
          {errors.contact_email && (
            <div
              className="text-white bg-danger border-danger border rounded p-1"
              style={{ fontSize: "10px" }}
            >
              {errors.contact_email}
            </div>
          )}
        </div>
        <div className="form-outline d-flex">
          <input
            type={passwordToggle ? "text" : "password"}
            id="password"
            name="password"
            value={organization.password}
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
            id="password_confirmation"
            name="password_confirmation"
            value={organization.password_Confirmation}
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
        {errors.password_Confirmation && (
          <div
            className="text-white bg-danger border-danger border rounded p-1"
            style={{ fontSize: "10px" }}
          >
            {errors.password_Confirmation}
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
        <GoogleOrganizationSignUpButton />
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
