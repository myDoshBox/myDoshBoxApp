import { Button } from "react-bootstrap";

// ScrollUpButton
// export const ScrollUpButton = () => {
//   return (
//     <>
//       <Button className="ScrollUpBtnStyle mt-5 ms-4" variant="">
//         <Icon icon="akar-icons:arrow-up" color="black" width="24" />
//       </Button>
//     </>
//   );
// };

// PreviousButton
export const PreviousButton = () => {
  return (
    <Button className="PrevioustBtnStyle border-0 mt-5 ms-3">
      <span className="BtnPrevTexttStyle">Prev</span>
    </Button>
  );
};

// Next
export const NextButton = () => {
  return (
    <Button className="PrevioustBtnStyle border-0 mt-5 ms-3">
      <span className="BtnNextTextStyle">Next</span>
    </Button>
  );
};

// BackButton
export const BackButton = () => {
  return (
    <Button className="PrevioustBtnStyle border-0 mt-5 ms-3">
      <span className="BackBtnStyle">Back</span>
    </Button>
  );
};

// LearnMore
export const LearnMoreButton = () => {
  return (
    <Button className="LearnMoreBtnStyle border-0 mt-5 ms-3">LEARN MORE</Button>
  );
};

// ViewMore
export const ViewMoreButton = () => {
  return (
    <Button className="ViewMoreBtnStyle border-0 mt-5 ms-3">View More</Button>
  );
};

// ViewDetailsButton

// ViewComplaint
export const ViewComplaintButton = () => {
  return (
    <Button className="ViewComplaintBtnStyle border-0 mt-5 ms-3">
      View Complaint
    </Button>
  );
};
