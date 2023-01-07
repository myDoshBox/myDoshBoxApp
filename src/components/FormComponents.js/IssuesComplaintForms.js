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
      <form action="" className="form bg-white" style={{ width: "30rem" }}>
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
            className="form-control 
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
            className="form-control border-success"
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

// ContestForm Section Starts

export const ContestForm = () => {
  const [firstName, setFirstName] = useState("");

  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [file, setFile] = useState("");

  const [commentSection, setCommentSection] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="w-75 mt-5">
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
              aria-describedby="firstNameHelp"
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

          <div className="d-grid col-6 mx-auto mt-4 ">
            <button
              className="btn btn-success"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
// ContestForm Section Ends

// ComplaintForm starts

export const ComplaintForm = () => {
  const [PhoneNumber, setPhoneNumber] = useState("");

  const [TransactionID, setTransactionID] = useState("");

  const [ComplaintType, setComplaintType] = useState("");

  const [File, setFile] = useState("");

  const [ProvideDetails, setProvideDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Container className="col-md-9">
        <div className="mt-5 text-center">
          <h4 className="fw-bold">COMPLAINT FORM</h4>
        </div>

        {/* Form Section Starts */}

        <form className="form mt-5">
          <div className="mb-4">
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={PhoneNumber}
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
          <div className="mb-4">
            <input
              onChange={(e) => setTransactionID(e.target.value)}
              value={TransactionID}
              placeholder="Transaction ID"
              type="text"
              className="form-control"
            />

            <span
              id="nameHelp"
              className="form-text text-danger fst-italic fw-lighter"
            >
              *This field is required
            </span>
          </div>

          <div>
            <select
              onChange={(e) => setComplaintType(e.target.value)}
              value={ComplaintType}
              className="form-select mb-4"
              aria-label="Default select example"
            >
              <option selected>Failed Transactions</option>
              <option value="1">Wrong Items</option>
              <option value="2">Incomplete Items</option>
              <option value="3">Incomplete Payment</option>
              <option value="4">Other</option>
            </select>

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
              value={File}
              type="file"
              className="form-control"
              id="inputGroupFile02"
              placeholder="Attach Image(s)"
            />
          </div>

          <div className="mb-3 mt-4">
            <textarea
              onChange={(e) => setProvideDetails(e.target.value)}
              value={ProvideDetails}
              placeholder="Reasons for contesting this complaint"
              className="form-control "
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div className="d-grid gap-2 col-2 mx-auto mt-4 ">
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
// ComplaintForm Ends
