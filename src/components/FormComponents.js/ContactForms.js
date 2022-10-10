import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Icon } from "@iconify/react";
import { SubmitButton } from "../ButtonsComponent/ConflictButtons";

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
    <Container className="d-flex contactStyle p-5 mb-5 ">
      <div className="row ms-5 textStyle">
        <div className="ms-5">
          <h2>Get in touch</h2>
          <p className="w-50">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et mass
            hendrerit
          </p>
          <p className="w-50 pb-5">Lorem ipsum dolor sit amet consectetur</p>
        </div>

        <div className="d-flex pb-5 ">
          <Icon icon="codicon:location" color="#006747" width="65" />

          <div className="ms-2">
            <h5>Our Office Location</h5>
            <p className="w-50 mt-1 ">
              Lorem ipsum dolor sit amet consectetur dolor sit amet
            </p>
          </div>
        </div>

        <div className="d-flex pb-5">
          <Icon icon="fluent:call-24-filled" color="#006747" width="50" />
          <div className="ms-3 colorStyle">
            <h5>Phone</h5>
            <p>
              +234 703 231 45 <br /> +234 703 231 45
            </p>
          </div>
        </div>
      </div>

      <Form className="formStyle">
        <div className="titleStyle">
          <div>
            <h2>Send us a message</h2>
          </div>
        </div>
        <Form.Group className="my-3">
          <div className="row ">
            <div className="col-sm-10 col-md-8 col-lg-6 align-items-center">
              <Form.Control
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={contactUs.name}
                onChange={handleChange}
                className="contactInputFormStyle labelStyle mb-1"
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="my-3 ">
          <div className="row ">
            <div className="col-sm-12 col-md-8 col-lg-6 align-items-center">
              <Form.Control
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={contactUs.email}
                onChange={handleChange}
                className="contactInputFormStyle labelStyle mb-1"
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
                  className="textAreaStyle contactInputFormStyle"
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

        <div className="mt-1">
          <SubmitButton />
        </div>
      </Form>
    </Container>
  );
};
