import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Icon } from "@iconify/react";
import { GuestNavSignInButton } from "../ButtonsComponent/AuthenticationButtons";

//ContactUsForm
export const ContactUsForm = () => {
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    textArea: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUp({ ...signUp, [name]: value });
  };

  return (
    <Container>
      <div className="pt-5 titleStyle">
        <h2>Send us a message</h2>
      </div>
      <Form>
        <Form.Group className="my-3">
          <div className="row ">
            <div className="col-sm-12 col-md-8 col-lg-6 align-items-center">
              <Form.Control
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={signUp.name}
                onChange={handleChange}
                className="inputFormStyle labelStyle mb-1"
              />
            </div>
          </div>
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
                className="inputFormStyle labelStyle mb-1"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="my-3">
          <div className="row ">
            <div className="col-sm-12 col-md-8 col-lg-6 align-items-center">
              <FloatingLabel
                className="labelStyle"
                controlId="floatingTextarea2"
                label="Enter your message"
              >
                <Form.Control
                  className="textAreaStyle"
                  as="textarea"
                  placeholder="Enter your message"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mt-2 ms-2 " controlId="formBasicCheckbox">
          <Form.Check
            className="checkboxStyle w-50"
            type="checkbox"
            label="I accept the Terms of Sevice"
          />
        </Form.Group>

        <div className="pb-3 mt-4 ">
          <GuestNavSignInButton />
        </div>
      </Form>
    </Container>
  );
};
