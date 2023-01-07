import { CautionIcon } from "../IconComponent/UserdashboardIcons";
import product from "../../images/productimage.jpg";
import { GeneralBtn } from "../ButtonsComponent/GenandAuthBtn";

// DashboardConflictCards (Buying,Selling,InitiateTransactionCards,SettledTransactionsCard, ConflictCards)
export const DashboardConflictCards = ({ icon, text, value }) => {
  return (
    <div class="col-md-4 mb-4 mb-lg-0">
      <div class="d-flex justify-content-center align-items-center px-0 py-4 shadow-sm border-0 rounded-2 DashboardCard">
        {icon}
        <div>
        <p className="m-0 ms-2 opacity-50">{value}</p>
        <p className="m-0 ms-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

// heading /sub_text /email /id /description /quality /price /date /total /alert,
// HOW IT'S DONE WENT YOU INVOKE TRANSACTION DETAILs <TransactionDetails>//
{
  /* <TransactionDetails
  heading="Transaction Summary"
  sub_text="Please Confirm the following transaction initiated by user Eland Aaronson"
  email="christianugochukwugabriel@gmail.com"
  id="AeR3mM9Pw"
  description="Brown lightweight italian leather three seater sofa"
  quality="40"
  price="N 120,000"
  date="14 Aug 2023"
  total="N3,600,000"
  alert=" by carefully read through and confirm the details you put in because once you click on proceed, it can nolonger be changed"
/>; */
}

//These are the component you can use below//

//TransactionCompletedCard /TransactionSummaryCard /TransactionCompletionCard /IndividualTransactionsCard /TransactionAgreedCard /PaymentMadeCard
export const TransactionDetails = ({
  heading,
  sub_text,
  email,
  id,
  description,
  quality,
  price,
  date,
  total,
  alert,
  leftBtn,
  rightBtn,
}) => {
  return (
    <>
      <div class="" style={{ width: "50rem" }}>
        <header className="mt-3">
          <h4 className="text-center">{heading}</h4>
          <p className="text-center text-muted fw-light">{sub_text}</p>
        </header>
        <span className="mx-auto img-fluid w-75">
          <img src={product} className="w-100" alt="" />
        </span>

        <div class="card-body">
          <div className="p-4">
            <div className="d-flex justify-content-between">
              <h5>Sellers Email</h5>
              <p>{email}</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Transaction id</h5>
              <p>{id}</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Description</h5>
              <p>{description}</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Quality</h5>
              <p>{quality}</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Price</h5>
              <p>{price}</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Delivery compilation Date</h5>
              <p>{date}</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Total</h5>
              <p>{total}</p>
            </div>
          </div>
          <div className="d-flex align-items-center border-danger border-start border-5 mx-auto mt-4 alert alert-danger border-0 rounded-0">
            <CautionIcon />
            <p className="text-danger fs-6 fw-lighter mt-4 text-break">
              <span className="text-danger fw-bold">Note:</span>
              {alert}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="me-5">{leftBtn}</div>
          <div>{rightBtn}</div>
        </div>
      </div>
    </>
  );
};