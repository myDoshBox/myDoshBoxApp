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
    <Button className="border-0 GeneralBtnStyle1 btn all-btn text-white text-small">
      <span className="BtnPrevTexttStyle">Prev</span>
    </Button>
  );
};

// Next
export const NextButton = () => {
  return (
    <Button className="border-0 GeneralBtnStyle1 btn all-btn text-white text-small">
      <span className="BtnNextTextStyle">Next</span>
    </Button>
  );
};

// BackButton
export const BackButton = () => {
  return (
    <Button
      className="all-btn border-0 mt-3 GeneralBtnStyle1 btn all-btn text-white pale-red"
      style={{ width: "80px" }}
    >
      Back
    </Button>
  );
};
export const NewTransaction = () => {
  return (
    <Button
      className="all-btn border-0 mt-3 GeneralBtnStyle1 btn all-btn text-white"
      style={{ width: "170px" }}
    >
      New Transaction
    </Button>
  );
};

// LearnMore
export const LearnMoreButton = () => {
  return (
    <Button
      className="all-btn border-0 mt-3 GeneralBtnStyle1 btn all-btn text-white"
      style={{ width: "140px" }}
    >
      LEARN MORE
    </Button>
  );
};
export const GetStarted = () => {
  return (
    <Button
      className="all-btn border-0 mt-3 GeneralBtnStyle1 btn all-btn text-white"
      style={{ width: "140px" }}
    >
      Get Started
    </Button>
  );
};

// ViewMore
export const ViewMoreButton = () => {
  return (
    <Button
      className="all-btn border-0 mt-3 GeneralBtnStyle1 btn all-btn text-white"
      style={{ width: "120px" }}
    >
      View more
    </Button>
  );
};
// ConfirmDelivery;
export const ConfirmDelivery = () => {
  return (
    <Button
      className="all-btn border-0 mt-3 GeneralBtnStyle1 btn all-btn text-white"
      style={{ width: "120px" }}
    >
      Confirm Delivery
    </Button>
  );
};

// ViewComplaint
export const ViewComplaintButton = () => {
  return (
    <Button className="ViewComplaintBtnStyle border-0 mt-5 ms-3">
      View Complaint
    </Button>
  );
};
