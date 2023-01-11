import React from "react";
import { ContactUsForm } from "../FormComponents.js/ContactForms";

// ContactUsCard

export const ContactUsCard = () => {
  return (
    <div className="ContactBorder border border-1 rounded col-lg-9">
      <div className="row p-3">
        <div className="col-md-6 col-sm-12 mb-sm-4">
          <h4 className="fw-bold">Get in touch</h4>
          <p className="mutedFont">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et mass
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur
            <hr />
          </p>
          <div className="mb-4">
            <h6 className="fw-bold">Our Office Location</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div>
            <h6 className="fw-bold">Phone</h6>
            <span>
              +234 9023468234
              <br />
              +234 8146733354
            </span>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-sm-3">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};