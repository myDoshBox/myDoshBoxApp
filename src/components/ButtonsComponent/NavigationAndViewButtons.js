import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react";

// ScrollUpButton
export const ScrollUpButton = () => {
  return (
    <>
      <Button className="ScrollUpBtnStyle mt-5 ms-4" variant="">
        <Icon icon="akar-icons:arrow-up" color="black" width="24" />
      </Button>
    </>
  );
};

// PreviousButton
export const PreviousButton = () => {
  return (
    <Button className="PrevioustBtnStyle border-0 mt-5 ms-3">
      <span className="BtnPrevTexttStyle">
        <Icon
          className=" mx-2"
          icon="ic:outline-arrow-back-ios"
          color="white"
          width="15"
        />
        Prev
      </span>
    </Button>
  );
};

// Next
export const NextButton = () => {
  return (
    <Button className="PrevioustBtnStyle border-0 mt-5 ms-3">
      <span className="BtnNextTextStyle">
        Next
        <Icon
          className="mx-2"
          icon="ic:outline-arrow-forward-ios"
          color="white"
          width="15"
        />
      </span>
    </Button>
  );
};

// BackButton
export const BackButton = () => {
  return (
    <Button className="PrevioustBtnStyle border-0 mt-5 ms-3">
      <span className="BackBtnStyle">
        <Icon
          className="mx-2"
          icon="eva:arrow-circle-left-outline"
          color="white"
          width="20"
        />
        Back
      </span>
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
export const ViewDetailsButton = () => {
  return (
    <Button className="ViewComplaintBtnStyle border-0 mt-5 ms-3">
      View Details
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
