// This file contains these components
// UpdateProfile
// UpdatePassword
// UpdateBankDetails
// UserUpdateProfile

import Form from "react-bootstrap/Form";

export const UpdateProfile = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="email">E-MAIL ADDRESS</Form.Label>
        <Form.Control type="email" placeholder="Someone@gmail.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PHONE NUMBER</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter your phone number"
          // pattern='[0-9]{4}-[0-9]{3}-[0-9]{4}'
          // required
        />
      </Form.Group>
    </Form>
  );
};

export const UpdatePassword = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NEW PASSWORD</Form.Label>
        <Form.Control type="password" placeholder="Enter a New Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>CONFIRM NEW PASSWORD</Form.Label>
        <Form.Control type="password" placeholder="Confirm Your New Password" />
      </Form.Group>
    </Form>
  );
};

export const UpdateBankDetails = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Account Number</Form.Label>
        <Form.Control type="tel" placeholder="Enter your bank account number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Bank Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your bank name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Account Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your bank account name" />
      </Form.Group>
    </Form>
  );
};

export const UserUpdateProfile = () => {
  return (
    <Form>
      <div className="d-flex justify-content-between">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter " />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </div>
      <div className="d-flex justify-content-between">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="text" placeholder="Enter " />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </div>
    </Form>
  );
};
