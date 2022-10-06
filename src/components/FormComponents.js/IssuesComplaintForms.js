import react, { useState } from "react";
import Container from "react-bootstrap/Container";

// Reportissuesform Section Starts
export const Reportissuesform = () => {
  const initialState = {
    DefectName: "",
    DefectDescription: "",
    ExpectedSolution: "",
  };
  const [values, setValue] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDefectNameInputChange = (e) => {
    setValue({ ...values, DefectName: e.target.value });
  };
  const handleDefectDescriptionInputChange = (e) => {
    setValue({ ...values, DefectDescription: e.target.value });
  };
  const handleExpectedSolutionInputChange = (e) => {
    setValue({ ...values, ExpectedSolution: e.target.value });
  };

  return (
    <Container>
      <form action="" className="col-8 form bg-white ">
        <div className="mb-3 mt-5">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label  fw-bold"
          >
            Defect Name
          </label>
          <input
            onChange={handleDefectNameInputChange}
            value={values.DefectName}
            type="name"
            className="form-control BorderLineColor
          border-success"
            id="exampleFormControlInput1"
            placeholder="Defect Name"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label  fw-bold"
          >
            Defect Description
          </label>
          <textarea
            onChange={handleDefectDescriptionInputChange}
            value={values.DefectDescription}
            className="form-control BorderLineColor border-success"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Describe exactly the problem"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label  fw-bold"
          >
            Expected Solution
          </label>
          <textarea
            onChange={handleExpectedSolutionInputChange}
            value={values.ExpectedSolution}
            className="form-control  border-success"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder=" The Expected Solution"
            required
          ></textarea>
        </div>

        <div className="text-center mt-5  ">
          <button
            onClick={handleSubmit}
            className="btn btn-success "
            type="submit"
          >
            Send Report
          </button>
        </div>
      </form>
    </Container>
  );
};
// Reportissuesform Section Starts

// ComplaintForm Section Starts

export const ComplaintForm = () => {
  const [firstName, setFirstName] = useState("");

  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [file, setFile] = useState("");

  const [commentSection, setCommentSection] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <Container className="col-7 mt-5">
        <div className="mb-5">
          <h4 className="fw-bold text-center">COMPLAINT CONTEST FORM</h4>
        </div>

        <form className="form">
          <div className="mb-3">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="First Name"
              type="FirstName"
              className="form-control fw-italic"
              aria-describedby="emailHelp"
            />

            <span
              id="nameHelp"
              className="form-text text-danger fst-italic fw-lighter"
            >
              *This field is required
            </span>
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />

            <span
              id="nameHelp"
              className="form-text text-danger fst-italic fw-lighter"
            >
              *This field is required
            </span>
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              placeholder="Phone Number"
              type="tel"
              className="form-control"
              id="exampleInputPassword1"
            />

            <span
              id="nameHelp"
              className="form-text text-danger fst-italic fw-lighter"
            >
              *This field is required
            </span>
          </div>

          <div className="input-group mb-3">
            <input
              onChange={(e) => setFile(e.target.value)}
              value={file}
              type="file"
              className="form-control"
              id="inputGroupFile02"
              placeholder="Attach Image(s)"
            />
          </div>

          <div className="mb-3 mt-4">
            <textarea
              onChange={(e) => setCommentSection(e.target.value)}
              value={commentSection}
              placeholder="Reasons for contesting this complaint"
              className="form-control "
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div className="d-grid gap-2 col-6 mx-auto mt-4 ">
            <button
              className="btn btn-success"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};
// ComplaintForm Section Ends

// ContestComplaintForm
