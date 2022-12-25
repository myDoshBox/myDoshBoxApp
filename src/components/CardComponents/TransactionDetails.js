import { Card } from "react-bootstrap";
import {
  GeneralBtnStyle1,
  GeneralBtnStyle1Icon,
} from "../ButtonsComponent/Button";
import { NextIcon, BackIcon } from "../IconComponent/NavigationAndViewIcon";

import { CautionIcon } from "../IconComponent/UserdashboardIcons";
import bank from "../../images/bank.jpg";
import atm from "../../images/atm.jpg";
import product from "../../images/productimage.jpg";

// DashboardConflictCards (Buying,Selling,InitiateTransactionCards,SettledTransactionsCard, ConflictCards)
export const DashboardConflictCards = ({ icon, text }) => {
  return (
    <div class="card shadow border-0" style={{ width: "18rem" }}>
      <div class="card-body m-4 d-flex justify-content-center">
        {icon}
        <p className="ms-2">{text}</p>
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
}) => {
  return (
    <>
      <div
        class="card rounded-0 border-0 shadow rounded-1"
        style={{ width: "50rem" }}
      >
        <header className="mt-3 p-4">
          <h4 className="text-center">{heading}</h4>
          <p className="text-center text-muted fw-light">{sub_text}</p>
        </header>
        <span className="mx-auto img-fluid w-75">
          <img src={product} className="w-100" alt="" />
        </span>
        <div class="card-body d-flex flex-column ">
          <div className="mt-4 ">
            <table className="mx-auto ">
              <tbody>
                <tr>
                  <td>Sellers Email</td>
                  <td className="text-end text-muted fs-6 text-break">
                    {email}
                  </td>
                </tr>
                <tr>
                  <td>Transaction id</td>
                  <td className="text-end text-muted fs-6">{id}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td className="text-end text-muted fs-6">{description}</td>
                </tr>
                <tr>
                  <td>Quality</td>
                  <td className="text-end text-muted">{quality}</td>
                </tr>

                <tr>
                  <td>Price</td>
                  <td className="text-end text-muted">{price}</td>
                </tr>
                <tr>
                  <td>Delivery/complition Date</td>
                  <td className="text-end text-muted">{date}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td className="text-end text-muted">{total}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex align-items-center border-danger border-start border-5 mx-auto mt-4 alert alert-danger border-0 rounded-0">
            <CautionIcon />
            <p className="text-danger fs-6 fw-lighter mt-4 text-break">
              <span className="text-danger fw-bold">Note:</span>
              {alert}
            </p>
          </div>
          <div className="d-flex justify-content-between container mt-5">
            <GeneralBtnStyle1Icon lefticon={<BackIcon />} text="Back" />
            <GeneralBtnStyle1Icon text="Proceed" rightIcon={<NextIcon />} />
          </div>
        </div>
      </div>
    </>
  );
};

// EscrowInitiationsTerms&ConditionCard
export const EscrowInitiationsTermsAndConditionCard = () => {
  return (
    <>
      <div class="card border-0 shadow w-50">
        <div class="card-body ">
          <h4 className="text-center">
            Escrow Initiation Terms and Conditions
          </h4>
          <p className="text-muted">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut omnis,
            magnam rerum numquam minus commodi temporibus recusandae optio ipsum
            nam! Nesciunt aspernatur cupiditate aliquam, explicabo blanditiis,
            laborum corporis dicta laudantium quis eveniet vero ipsa? Aperiam
            mollitia id qui. Rerum soluta excepturi, aut eum blanditiis eligendi
            deserunt voluptatum fugit consequuntur adipisci, totam numquam
            reprehenderit accusantium sapiente nobis nam inventore odit maiores
            iste nostrum voluptatibus et. Nam, necessitatibus nobis vel, fugit
            nostrum omnis inventore voluptate ut, corrupti nesciunt ex
            distinctio repellat incidunt. Dolorum, ratione libero vel quaerat
            explicabo delectus optio, nihil unde quibusdam ipsam minima
            blanditiis exercitationem laborum? Esse incidunt qui, cum maxime
            laborum hic quis ipsam quae. Quasi magnam facere eos quo eligendi
            iure vel sint repellendus architecto hic. Inventore aliquam corporis
            ducimus officiis est accusamus consequatur et nulla quae. Ullam quos
            eaque fuga natus obcaecati consequatur, sint, reiciendis doloribus
            delectus qui laudantium corporis eveniet repellat aliquid minima
            exercitationem excepturi itaque iure iusto labore eum unde vitae
            quis dicta! Facere ipsa ad nulla maxime deleniti vitae optio?
            Consectetur porro aliquam architecto a consequuntur excepturi, neque
            rem vero quaerat! Doloremque asperiores eum ab ullam qui nobis
            consequatur minus veritatis quasi amet unde ratione enim dolore
            dolores, culpa incidunt error, delectus, ipsum iste?
          </p>
          <span className="d-flex justify-content-center mt-3">
            <GeneralBtnStyle1 text="I Agree" />
          </span>
        </div>
      </div>
    </>
  );
};

export const PaymentGatewayCard = () => {
  return (
    <>
      <Card className=" p-lg-5 p-3 mt-5 col-lg-8 border-0 shadow">
        <div>
          <div className="row p-lg-3 p-2">
            <h2 className="text-center">Payment Gateway</h2>
            <p className="text-center">
              Please choose your preferred mode of payment
            </p>
            <div className="col-12 col-lg-6 mt-3">
              <Card className="d-flex flex-row align-items-center p-3 p-md-3">
                <img src={atm} alt="bank image" className=" w-25" />
                <div className="ms-2">
                  <h4>Paystack</h4>
                  <p className="fw-lighter text-muted">
                    Proceed to pay using your atm card
                  </p>
                </div>
              </Card>
            </div>
            <div className="col-12 col-lg-6 mt-3 mb-3">
              <Card className="d-flex flex-row align-items-center p-3 p-md-3">
                <img src={bank} alt="bank image" className="w-25" />
                <div>
                  <h4>Bank Transfer</h4>
                  <p className="fw-lighter text-muted">
                    Proceed to pay by transferring to our account
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
