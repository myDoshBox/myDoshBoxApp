import { Table, Card, Container } from "react-bootstrap";
import {
  NewTransactionButton,
  IAgreeButton,
} from "../ButtonsComponent/TransactionButtons";
import {
  CompletedNotification,
  Refunded,
  Resolved,
  AwaitingDelivery,
  Unresolved,
  PendingConfirmation,
  PendingPayment,
  InDispute,
} from "../NotificationComponent/NotificationComponents";
import { BuyingIcon, SellingIcon } from "../IconComponent/UserdashboardIcons";
import bank from "../../assets/images/bank.jpg";
import atm from "../../assets/images/atm.jpg";
import product from "../../assets/images/productimage.jpg";
import {
  InitiateTransactionIcon,
  SettledTransactionIcon,
} from "../IconComponent/UserdashboardIcons";

// RecentTransactionCard
export const RecentTransactionCard = () => {
  return (
    <Container>
      <Card className="transaction-card">
        <div className="ms-md-5 ms-3">
          <NewTransactionButton />
        </div>
        <Table className="transaction-table">
          <thead className="text-center">
            <tr>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" text-center">35 cartorns of biscuits</td>
              <td className="text-center">N3,275.45</td>
              <td className="text-center">15/11/2022</td>
              <td className="d-flex justify-content-center align-items-center">
                <CompletedNotification />
              </td>
            </tr>
            <tr>
              <td className="text-center">Hair brushes and attachments</td>
              <td className="text-center">N3,275.45</td>
              <td className="text-center">15/11/2022</td>
              <td className="d-flex justify-content-center align-items-center">
                <AwaitingDelivery />
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};
// AdminRecentTransactionsCard
export const AdminRecentTransactionsCard = () => {
  return (
    <Container className="mt-5">
      <Card className="transaction-card pt-4">
        <Table className="transaction-table">
          <thead className="text-center ">
            <tr>
              <th>Transaction ID</th>
              <th>Buyer Name</th>
              <th>Seller Name</th>
              <th className="small-hide">Products</th>
              <th className="small-hide">Date</th>
              <th>Status</th>
              <th className="small-hide">...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" text-center">4rsGDrb4rP3</td>
              <td className="text-center">Jacob Jones</td>
              <td className="text-center">Guy Hawkins</td>
              <td className="text-center small-hide">35 cartons of biscuit</td>
              <td className="text-center small-hide">16-08-22</td>
              <td className="d-flex justify-content-center align-items-center">
                <CompletedNotification />
              </td>
              <td className="text-center  small-hide">View</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};
// IndividualTransactionsCard
export const IndividualTransactionsCard = () => {
  return (
    <Container>
      <Card className="individual-transaction-card">
        <div className="row p-0 p-lg-3">
          <div className="col-12 col-lg-4">
            <img
              src={product}
              alt=""
              className="individual-transaction-image mx-auto"
            />
          </div>
          <div className="col-12 col-lg-8 mt-5 mt-lg-0">
            <div className="d-flex justify-content-between px-3 p-lg-0">
              <p className="transaction-summary-info-title text-start px-md-3">
                Seller Email
              </p>
              <p className="transaction-summary-info-text px-md-3">
                ClidsawFurniture@gmail.com
              </p>
            </div>
            <div className="d-flex justify-content-between px-3 p-lg-0">
              <p className="transaction-summary-info-title text-start px-md-3">
                Transaction Id
              </p>
              <p className="transaction-summary-info-text px-md-3">AXSQWEDSC</p>
            </div>
            <div className="d-flex justify-content-between px-3 p-lg-0">
              <p className="transaction-summary-info-title text-start px-md-3">
                Product
              </p>
              <p className="transaction-summary-info-text px-md-3">
                Three Seat Sofa
              </p>
            </div>
            <div className="d-flex justify-content-between px-3 p-lg-0">
              <p className="transaction-summary-info-title text-start px-md-3">
                Description
              </p>
              <p className="transaction-summary-info-text px-md-3">
                Brown lightweight italian <br /> leather three seater sofa
              </p>
            </div>
            <div className="d-flex justify-content-between px-3 p-lg-0">
              <p className="transaction-summary-info-title text-start px-md-3">
                Quantity
              </p>
              <p className="transaction-summary-info-text px-md-3">30 </p>
            </div>
            <div className="d-flex justify-content-between px-3 p-lg-0">
              <p className="transaction-summary-info-title text-start px-md-3">
                Price
              </p>
              <p className="transaction-summary-info-text px-md-3">N 150,000</p>
            </div>
            <div className="d-flex justify-content-between px-3 p-lg-0">
              <p className="transaction-summary-info-title text-start px-md-3">
                Delivery / Completion Date
              </p>
              <p className="transaction-summary-info-text px-md-3">
                14 Aug 2022
              </p>
            </div>
            <div className="d-flex justify-content-between px-3 p-lg-0">
              <p className="transaction-summary-info-title text-start px-md-3">
                Status
              </p>
              <p className="transaction-summary-info-text px-md-3">
                <CompletedNotification />
              </p>
            </div>
            <div className="d-flex justify-content-between px-3 p-lg-0">
              <p className="transaction-summary-info-title text-start px-md-3">
                Total
              </p>
              <p className="transaction-summary-info-text px-md-3">
                N3,600,000
              </p>
            </div>
          </div>

          {/* <div className="mt-3">
            <img
              src={product}
              alt=""
              className="small-inidividual-transaction-image me-2"
            />
            <img
              src={product}
              alt=""
              className="small-inidividual-transaction-image mx-2"
            />
            <img
              src={product}
              alt=""
              className="small-inidividual-transaction-image mx-2"
            />
          </div> */}
        </div>
      </Card>
    </Container>
  );
};
// BuyerTransactCard
export const BuyerTransactCard = () => {
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center buying-selling-card mt-5">
        <BuyingIcon width={"65"} height={"65"} className={"me-3"} />
        <p className="mt-2">BUYING</p>
      </div>
    </Container>
  );
};
// SellerTransactCard
export const SellerTransactCard = () => {
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center buying-selling-card mt-5">
        <SellingIcon width={"65"} height={"65"} className={"me-3"} />
        <p className="mt-2">SELLING</p>
      </div>
    </Container>
  );
};
// TransactionCompletedCard

// TransactionSummary
export const TransactionSummaryCard = () => {
  return (
    <Container>
      <Card className="transaction-summary-card p-2 p-lg-4 d-flex flex-column">
        <div className=" d-flex flex-column align-items-center mb-5">
          <h2 className="text-center">Transaction Summary</h2>
          <p className="text-center header-text">
            Please Confirm the following transaction initiated by user Eland
            Aaronson
          </p>
          <img src={product} alt="" className="transaction-images" />
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Seller Email
          </p>
          <p className="transaction-summary-info-text px-md-3">
            ClidsawFurniture@gmail.com
          </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Transaction Id
          </p>
          <p className="transaction-summary-info-text px-md-3">AXSQWEDSC</p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Description
          </p>
          <p className="transaction-summary-info-text px-md-3">
            Brown lightweight italian <br /> leather three seater sofa
          </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Quantity
          </p>
          <p className="transaction-summary-info-text px-md-3">30 </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Price
          </p>
          <p className="transaction-summary-info-text px-md-3">N 150,000 </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Delivery / Completion Date
          </p>
          <p className="transaction-summary-info-text px-md-3">14 Aug 2022 </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Total
          </p>
          <p className="transaction-summary-info-text px-md-3">N3,600,000 </p>
        </div>
      </Card>
    </Container>
  );
};
// EscrowInitiationsTerms&ConditionCard
export const EscrowInitiationsTermsAndConditionCard = () => {
  return (
    <Container className="mt-5">
      <Card className="escrow-terms-condition">
        <div className="d-flex flex-column align-items-center p-4 p-md-5">
          <h2>Escrow Initiation Terms and Conditions</h2>
          <p className="text-md-start text-center"></p>
          <IAgreeButton />
        </div>
      </Card>
    </Container>
  );
};
// TransactionsAgreedCard
export const TransactionAgreedCard = () => {
  return (
    <Container>
      <Card className="transaction-summary-card p-2 p-lg-4 d-flex flex-column">
        <div className=" d-flex flex-column align-items-center mb-5">
          <h2 className="text-center">Transaction Agreed</h2>
          <p className="text-center header-text">
            Please Confirm the following transaction initiated by user Eland
            Aaronson
          </p>
          <img src={product} alt="" className="transaction-images" />
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Seller
          </p>
          <p className="transaction-summary-info-text px-md-3">
            ClidsawFurniture@gmail.com
          </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Transaction Id
          </p>
          <p className="transaction-summary-info-text px-md-3">AXSQWEDSC</p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Description
          </p>
          <p className="transaction-summary-info-text px-md-3">
            Brown lightweight italian <br /> leather three seater sofa
          </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Quantity
          </p>
          <p className="transaction-summary-info-text px-md-3">30 </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Price
          </p>
          <p className="transaction-summary-info-text px-md-3">N 150,000 </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Delivery / Completion Date
          </p>
          <p className="transaction-summary-info-text px-md-3">14 Aug 2022 </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Total
          </p>
          <p className="transaction-summary-info-text px-md-3">N3,600,000 </p>
        </div>
      </Card>
    </Container>
  );
};
// PaymentMadeCard
export const PaymentMadeCard = () => {
  return (
    <Container>
      <Card className="transaction-summary-card p-2 p-lg-4 d-flex flex-column">
        <div className=" d-flex flex-column align-items-center mb-5">
          <h2 className="text-center">Payment Made</h2>
          <p className="text-center header-text">
            Buyer Elland Aaronson has made payment into MyDoshBox account for
            this transaction
          </p>
          <img src={product} alt="" className="transaction-images" />
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Seller
          </p>
          <p className="transaction-summary-info-text px-md-3">
            ClidsawFurniture@gmail.com
          </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Transaction Id
          </p>
          <p className="transaction-summary-info-text px-md-3">AXSQWEDSC</p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Description
          </p>
          <p className="transaction-summary-info-text px-md-3">
            Brown lightweight italian <br /> leather three seater sofa
          </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Quantity
          </p>
          <p className="transaction-summary-info-text px-md-3">30 </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Price
          </p>
          <p className="transaction-summary-info-text px-md-3">N 150,000 </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Delivery / Completion Date
          </p>
          <p className="transaction-summary-info-text px-md-3">14 Aug 2022 </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Total
          </p>
          <p className="transaction-summary-info-text px-md-3">N3,600,000 </p>
        </div>
      </Card>
    </Container>
  );
};
// PaymentGatewayCard
export const PaymentGatewayCard = () => {
  return (
    <Container>
      <Card className="payment-gateway-card p-lg-5 p-3 mt-5">
        <Container>
          <div className="row p-lg-3 p-2">
            <h2 className="text-center">Payment Gateway</h2>
            <p className="text-center">
              Please choose your preferred mode of payment
            </p>
            <div className="col-12 col-lg-6 mt-3">
              <Card className="d-flex flex-row align-items-center p-3 p-md-4">
                <img
                  src={atm}
                  alt="bank image"
                  className="payment-gateway-image"
                />
                <div>
                  <h4>Paystack</h4>
                  <p>Proceed to pay using your atm card</p>
                </div>
              </Card>
            </div>
            <div className="col-12 col-lg-6 mt-3 mb-3">
              <Card className="d-flex flex-row align-items-center p-3 p-md-4">
                <img
                  src={bank}
                  alt="bank image"
                  className="payment-gateway-image"
                />
                <div>
                  <h4>Bank Transfer</h4>
                  <p>Proceed to pay by transferring to our account</p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Card>
    </Container>
  );
};
// TransactionCompletionCard
export const TransactionCompletionCard = () => {
  return (
    <Container>
      <Card className="transaction-summary-card p-2 p-lg-4 d-flex flex-column">
        <div className=" d-flex flex-column align-items-center mb-5">
          <h2 className="text-center">Transaction Completion</h2>
          <p className="text-center header-text">
            Please confirm the receipt of the goods purchased
          </p>
          <img src={product} alt="" className="transaction-images" />
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Seller Email
          </p>
          <p className="transaction-summary-info-text px-md-3">
            ClidsawFurniture@gmail.com
          </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Transaction Id
          </p>
          <p className="transaction-summary-info-text px-md-3">AXSQWEDSC</p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Description
          </p>
          <p className="transaction-summary-info-text px-md-3">
            Brown lightweight italian <br /> leather three seater sofa
          </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Quantity
          </p>
          <p className="transaction-summary-info-text px-md-3">30 </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Price
          </p>
          <p className="transaction-summary-info-text px-md-3">N 150,000 </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Delivery / Completion Date
          </p>
          <p className="transaction-summary-info-text px-md-3">14 Aug 2022 </p>
        </div>
        <div className="d-flex justify-content-between px-3 p-lg-0">
          <p className="transaction-summary-info-title text-start px-md-3">
            Total
          </p>
          <p className="transaction-summary-info-text px-md-3">N3,600,000 </p>
        </div>
      </Card>
    </Container>
  );
};
// InitiateTransactionsCard
export const InitiateTransactionsCard = () => {
  return (
    <div className="initiate-transaction-card d-flex align-items-center p-3 ">
      <InitiateTransactionIcon width={"60"} height={"60"} className={"ms-3"} />

      <p className="ms-3">Initiate Transaction</p>
    </div>
  );
};
// SettledTransactionsCards
export const SettledTransactionsCard = () => {
  return (
    <div className="initiate-transaction-card d-flex align-items-center p-3 ">
      <SettledTransactionIcon width={"60"} height={"60"} className={"ms-3"} />

      <p className="ms-3">Settled Transaction</p>
    </div>
  );
};
