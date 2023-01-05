import { useState } from "react";
import Container from "react-bootstrap/Container";

const InitiateDisputesForm = () => {
  return (
    <div>
      <ComplaintForm />
    </div>
  );
};

const ComplaintForm = () => {
  const initialValues = {
    phoneNumber: "",
    transactionId: "",
    complaintType: "",
    file: "",
    provideDetails: "",
  };

  const [dispute, setDispute] = useState(initialValues);
  const [disputeDetails, setDisputeDetails] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDispute({ ...dispute, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      dispute.phoneNumber &&
      dispute.transactionId &&
      dispute.complaintType &&
      dispute.file &&
      dispute.provideDetails
    ) {
      setDisputeDetails([...disputeDetails, dispute]);
      setDispute(initialValues);
    }
  };

  return (
    <>
      <div className="w-75 mx-auto">
        <div className="mt-5 text-center">
          <h5 className="fw-bold">COMPLAINT FORM</h5>
        </div>

        {/* Form Section Starts */}

        <form className="form mt-5">
          <div className="mb-4">
            <input
              value={dispute.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
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
              value={dispute.transactionId}
              onChange={handleChange}
              placeholder="Transaction ID"
              type="text"
              className="form-control"
              id="transactionId"
              name="transactionId"
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
              value={dispute.complaintType}
              onChange={handleChange}
              className="form-select mb-4"
              aria-label="Default select example"
              id="complaintType"
              name="complaintType"
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
              value={dispute.file}
              onChange={handleChange}
              type="file"
              className="form-control"
              id="file"
              name="file"
              placeholder="Attach Image(s)"
            />
          </div>

          <div className="mb-3 mt-4">
            <textarea
              value={dispute.provideDetails}
              onChange={handleChange}
              placeholder="Reasons for contesting this complaint"
              className="form-control "
              id="provideDetails"
              name="provideDetails"
              rows="3"
            ></textarea>
          </div>

          <div className="d-grid gap-2 w-25 mx-auto mt-4">
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

export default InitiateDisputesForm;
