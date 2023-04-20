import { Link } from "react-router-dom";


const BtnContent = (props) => {
  return (
    <>
      <span>{props.lefticon}</span>
      <span className="mx-2">{props.value}</span>
      <span>{props.righticon}</span>
    </>
  );
};

const CustomBtn = (props) => {
  const { value, lefticon, righticon, ...rest } = props;

  const btnContent = (
    <BtnContent value={value} lefticon={lefticon} righticon={righticon} />
  );

  if (props.to) {
    return (
      <Link to={props.to} {...rest}>
        {btnContent}
      </Link>
    );
  }
  else if (props.href) {
    return (
      <a href={props.href} {...rest}>
        {btnContent}
      </a>
    );
  }
  return <button {...rest}>{btnContent}</button>;
};

export default CustomBtn;
/*
 * To pass the tests for the CustomBtn component, make sure to include the following attributes:
 *
 * - aria-label or text content: A clear and descriptive label that communicates the button's function.
 * - type: Specify the type of button as "button", "submit", or "reset".
 * - form: If the button is used inside a form, include this attribute with the value set to the id of the parent form.
 *
 * Additionally, make sure that the button is designed to be responsive and work well on all devices,
 * has sufficient contrast between its text and background, and is accessible to people with disabilities.
 *
 * Here are some common button types and their associated class names:
 *
 * - GetStarted /SignUp /SignIn /ResolveConflict /SellersStatement /BuyersFault /SellersFault /DropConflict /InvolveNeutrals /Submit /EditProfile /EditTicket /ResendProduct /ContestComplaint /ViewMore /ViewComplaint /LearnMore /NewTransactionButton /ProceedButton /IAgreeButton
 * - BuyersStatement/InitiateDispute/ConfirmDeliveryButton/ConfirmButton/DeliverProductButton
 * - SignUpOrganization/SignUpIndividual|className(Sign Up as an Organization|SignUpGroup, btn)
 * - GoogleSignUpButton/GoogleSignUpButton(Sign Up with Google/Sign In with Google|GoogleAuthBtn, btn)
 * - PreviousButton/NextButton/BackButton/StartTransactionButton - className(GeneralBtnStyle1 btn all-btn text-white)
 * - ViewMoreButton - className(ViewComplaintBtnStyle border-0 mt-5 ms-3)
 * - ScrollUpButton - className(ScrollUpBtnStyle border )
 * - CancelButton - className(CancelBtn border-0)
 * - LearnMoreCardButton - className(d-none d-sm-block LearnMoreCardButton)
 */