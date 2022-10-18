// This file contains these components
// UpdateProfile
// UpdatePassword
// UpdateBankDetails
// UserUpdateProfile
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const UpdateProfile = () => {
  const [UpdateProfile, setUpdateProfile] = useState({
    email: "",
    phone: "",
  });
  const [NewProfile, setNewProfile] = useState([]);
  const [ValidationError, setValidationError] = useState({});
  const [FormSubmission, setFormSubmission] = useState(false)


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdateProfile({ ...UpdateProfile, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (UpdateProfile.email && UpdateProfile.phone) {
      setNewProfile({ ...NewProfile, UpdateProfile })
      setUpdateProfile({
        email:"",
        phone:"",
      })
    }
    setValidationError(validate(UpdateProfile));
    setFormSubmission(true);
  }
  
  useEffect(() => {
    // console.log(ValidationError);
    if (Object.keys(ValidationError).length === 0 && FormSubmission) {
      // console.log(UpdateProfile);
    }
  }, [ValidationError]);


  const validate = (formValues) => {
    const errorValues = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/
    ;
    if (!formValues.email) {
      errorValues.email = "Email Address is Required";
    } else if (!emailRegex.test(formValues.email)) {
      errorValues.email = "Please Enter a Valid Email Address";
    }
    if (!formValues.phone) {
      errorValues.phone = "Phone Number is Required"
    } else if (!phoneRegex.test(formValues.phone)) {
      errorValues.phone = "Please Enter a Valid Nigerian Phone Number";
    }
    return errorValues;
  }



  return (
    <div className="bg-white rounded-3 UpdateProfileForm p-4" >
      <p className="text-uppercase">Update Profile</p>
    <Form className="ms-3 mt-4 mb-5" onSubmit={handleSubmit}>
      <Form.Group className="Email mb-3" controlId="Email">
        <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Example@email.com"
            name="email"
            value={UpdateProfile.email}
            onChange={handleChange}
          />
          <small className="text-danger fw-lighter">{ ValidationError.email}</small>
      </Form.Group>
      <Form.Group className="Password mb-3" controlId="Password">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter your phone number"
          name="phone"
            value={UpdateProfile.phone}
            onChange={handleChange}
          />
          <small className="text-danger fw-lighter">{ ValidationError.phone}</small>
      </Form.Group>
      <div className="text-end"><Button type="submit" className="border-0" onClick={handleSubmit} >Save Changes</Button></div>
      </Form>
    </div>
  );
};

export const UpdatePassword = () => {
  return (
    <Form>
      <Form.Group className="mb-3 Password" controlId="NewPassword">
        <Form.Label>NEW PASSWORD</Form.Label>
        <Form.Control type="password" placeholder="Enter a New Password" />
      </Form.Group>

      <Form.Group className="mb-3 Password" controlId="ConfirmPassword">
        <Form.Label>CONFIRM NEW PASSWORD</Form.Label>
        <Form.Control type="password" placeholder="Confirm Your New Password" />
      </Form.Group>
    </Form>
  );
};

export const UpdateBankDetails = () => {
  return (
    <Form>
      <Form.Group className="mb-3 AccountNum" controlId="AccountNum">
        <Form.Label className="mb-0">Account Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter your bank account number"
        />
      </Form.Group>

      <Form.Group className="mb-3 BankName" controlId="BankName">
        <Form.Label className="mb-0">Bank Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your bank name" />
      </Form.Group>
      <Form.Group className="mb-3 AccountName" controlId="AccountName">
        <Form.Label className="mb-0">Account Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your bank account name" />
      </Form.Group>
    </Form>
  );
};

export const UserUpdateProfile = () => {
  return (
    <Form>
      <div className="d-flex justify-content-between">
        <Form.Group className="mb-3 Name" controlId="FirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name first name" />
        </Form.Group>
        <Form.Group className="mb-3 Name" controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your last name" />
        </Form.Group>
      </div>
      <div className="d-flex justify-content-between">
        <Form.Group className="mb-3 UpdateEmail" controlId="Email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3 Phone" controlId="PhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter email" />
        </Form.Group>
      </div>
      <div className="d-flex justify-content-between">
        <Form.Group className="mb-3 Pass" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter a new password" />
        </Form.Group>
        <Form.Group className="mb-3 Pass" controlId="ConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your new password"
          />
        </Form.Group>
      </div>
    </Form>
  );
};
