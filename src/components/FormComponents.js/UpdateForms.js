<<<<<<< HEAD
=======
// This file contains these components
// UpdateProfile
// UpdatePassword
// UpdateBankDetails
// UserUpdateProfile

import Form from 'react-bootstrap/Form';

export const UpdateProfile = () => {
  return (
    <Form>
      <Form.Group className='Email mb-3'controlId="Email">
        <Form.Label >E-MAIL ADDRESS</Form.Label>
        <Form.Control type="email" placeholder="Someone@gmail.com" />
      </Form.Group>

      <Form.Group className="Password mb-3" controlId="Password">
        <Form.Label>PHONE NUMBER</Form.Label>
        <Form.Control type="tel" placeholder="Enter your phone number" 
        // pattern='[0-9]{4}-[0-9]{3}-[0-9]{4}'
        // required
        />
      </Form.Group>
    </Form>
  );
}

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
}

export const UpdateBankDetails = () => {
  return (
    <Form>
      <Form.Group className="mb-3 AccountNum" controlId="AccountNum">
        <Form.Label className='mb-0'>Account Number</Form.Label>
        <Form.Control type='number' placeholder="Enter your bank account number" />
      </Form.Group>

      <Form.Group className="mb-3 BankName" controlId="BankName">
        <Form.Label className='mb-0'>Bank Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your bank name" />
      </Form.Group>
      <Form.Group className="mb-3 AccountName" controlId="AccountName">
        <Form.Label className='mb-0'>Account Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your bank account name"/>
      </Form.Group>
    </Form>
  );
}

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
          <Form.Control type="password" placeholder="Confirm your new password" />
        </Form.Group>
      </div>
    </Form>
  );
}
>>>>>>> origin/FormComponents
