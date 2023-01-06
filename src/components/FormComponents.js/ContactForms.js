import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";

//ContactUsForm
export const ContactUsForm = () => {
  const [contactUs, setcontactUs] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setcontactUs({ ...contactUs, [name]: value });
  };

  return (
    <>
      <h4 className="text-success">Send us a message</h4>
      <Form>
        <div>
          <Form.Group className="mb-3">
            <Form.Control
              className="labelStyle"
              type="text"
              placeholder="Enter Name"
              value={contactUs.name}
              onChange={handleChange}
              id="name"
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              className="labelStyle"
              placeholder="Email"
              value={contactUs.email}
              onChange={handleChange}
              id="email"
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <FloatingLabel
              className="labelStyle"
              controlId="floatingTextarea2"
              label="Enter your message"
            >
              <Form.Control as="textarea" placeholder="Enter your message" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mt-2 mb-3 fs-6">
            <Form.Check
              className="checkboxStyle"
              type="checkbox"
              label="I accept the Terms of Sevice"
            />
          </Form.Group>

          <div className="mt-1 d-flex justify-content-center">
            <GeneralBtn text="Submit" />
          </div>
        </div>
        {/* Form Here End */}
      </Form>
    </>
  );
};
