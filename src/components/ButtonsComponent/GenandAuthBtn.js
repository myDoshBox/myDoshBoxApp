import { Button } from "react-bootstrap";
// import { Icon } from "@iconify/react";

// GetStarted /SignUp /SignIn /ResolveConflict /SellersStatement /BuyersFault /SellersFault /DropConflict /InvolveNeutrals /Submit /EditProfile /EditTicket /ResendProduct /ContestComplaint /ViewMore /ViewComplaint /LearnMore /NewTransactionButton /ProceedButton /IAgreeButton

//BuyersStatement/InitiateDispute/ConfirmDeliveryButton/ConfirmButton/DeliverProductButton

// SignUpOrganization/SignUpIndividual|className(Sign Up as an Organization|SignUpGroup, btn)
// GoogleSignUpButton/GoogleSignUpButton(Sign Up with Google/Sign In with Google|GoogleAuthBtn, btn)
//PreviousButton/NextButton/BackButton/StartTransactionButton - className(GeneralBtnStyle1 btn all-btn text-white)
//ViewMoreButton - className(ViewComplaintBtnStyle border-0 mt-5 ms-3)
//ScrollUpButton - className(ScrollUpBtnStyle border )
// CancelButton - className(CancelBtn border-0)
// LearnMoreCardButton - className(d-none d-sm-block LearnMoreCardButton)
// styles for GeneralBtnStyle1 - GeneralBtnStyle1 btn all-btn text-white
// styles for GeneralBtnStyle2 - GeneralBtnStyle2 btn all-btn text-white
export const GeneralBtn = ({ text, link, lefticon, righticon, styles }) => {
  return (
    <a href={link} type="submit" className={styles}>
      {lefticon}
      <span className="ms-1 me-2">{text}</span>
      {righticon}
    </a>
  );
};
