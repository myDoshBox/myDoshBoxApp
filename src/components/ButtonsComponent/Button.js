// GetStarted /SignUp /SignIn /ResolveConflict /SellersStatement /BuyersFault /SellersFault /DropConflict /InvolveNeutrals /Submit /EditProfile /EditTicket /ResendProduct /ContestComplaint /ViewMore /ViewComplaint /LearnMore /NewTransactionButton /ProceedButton /IAgreeButton
export const GeneralBtnStyle1 = ({ text, link, icon }) => {
  return (
    <a
      href={link}
      type="submit"
      className="GeneralBtnStyle1 btn all-btn text-white"
    >
      {text}
    </a>
  );
};

//BuyersStatement /InitiateDispute /ConfirmDeliveryButton /ConfirmButton /DeliverProductButton
export const GeneralBtnStyle2 = ({ text, link }) => {
  return (
    <a
      href={link}
      type="submit"
      className="GeneralBtnStyle2 btn all-btn text-white"
    >
      {text}
    </a>
  );
};

//PreviousButton /NextButton /BackButton /StartTransactionButton
export const GeneralBtnStyle1Icon = ({ text, link, lefticon, righticon }) => {
  return (
    <a
      href={link}
      type="submit"
      className="GeneralBtnStyle1 btn all-btn text-white"
    >
      {lefticon}
      {text}
      {righticon}
    </a>
  );
};

// GoogleSignUpButton / GoogleSignUpButton
export const GoogleButton = ({ text, link, icon }) => {
  return (
    <a href={link} type="submit" className="GoogleAuthBtn btn">
      {icon}
      <span className="ms-2">{text}</span>
    </a>
  );
};

// SignUpOrganization, SignUpIndividual
export const SignUpGroup = ({ text, link }) => {
  return (
    <a href={link} className="SignUpGroup">
      {text}
    </a>
  );
};

// ViewDetailsButton //ViewMoreButton
export const ViewDetailsButton = ({ link, text }) => {
  return (
    <a href={link} className="ViewComplaintBtnStyle border-0 mt-5 ms-3">
      {text}
    </a>
  );
};

//ScrollUpButton
export const ScrollUpButton = ({ icon, text, link }) => {
  return (
    <>
      <a href={link} className="ScrollUpBtnStyle border ">
        {icon}
        {text}
      </a>
    </>
  );
};
