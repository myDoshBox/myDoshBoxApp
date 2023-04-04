import { useState } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

// Reportissuesform Section Starts
export const Reportissuesform = () => {
  const initialState = {
    DefectName: "",
    DefectDescription: "",
    ExpectedSolution: "",
  };
  const [values, setValue] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("../../userdashboard");
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
      <form action="" className="form bg-white shadow card p-4">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label fw-bold"
          >
            Defect Name
          </label>
          <input
            onChange={handleDefectNameInputChange}
            value={values.DefectName}
            type="name"
            className="form-control w-100"
            id="exampleFormControlInput1"
            placeholder="Defect Name"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label fw-bold"
          >
            Defect Description
          </label>
          <textarea
            onChange={handleDefectDescriptionInputChange}
            value={values.DefectDescription}
            className="form-control w-100"
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
            className="form-control w-100"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder=" The Expected Solution"
            required
          ></textarea>
        </div>

        <div className="text-center mt-5">
          <button
            onClick={handleSubmit}
            className="btn btn-success"
            type="submit"
          >
            Send Report
          </button>
        </div>
      </form>
    </Container>
  );
};
