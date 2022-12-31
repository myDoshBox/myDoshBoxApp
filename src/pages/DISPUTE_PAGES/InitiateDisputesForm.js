// import { ComplaintForm } from "../../components/FormComponents.js/IssuesComplaintForms";
import { UserSidenav } from "../../components/NavbarComponents/SideNavbar";
import { useState } from "react";
import Container from "react-bootstrap/Container";

const InitiateDisputesForm = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-lg-3">
        <UserSidenav />
      </div>
      <div className="col-sm-12 col-lg-9">
        <ComplaintForm />
      </div>
    </div>
  );
};

const ComplaintForm = () => {
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

export default InitiateDisputesForm;
