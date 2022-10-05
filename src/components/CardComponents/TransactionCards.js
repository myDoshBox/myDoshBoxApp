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
// BuyerTransactCard

// SellerTransactCard
// TransactionCompletedCard
// TransactionSummary
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
// PaymentMadeCard

// PaymentGatewayCard
export const PaymentGatewayCard = () => {
  return (
    <Container>
      <Card className="payment-gateway-card">
        <Container>
          <div className="row p-3">
            <h2 className="text-center">Payment Gateway</h2>
            <p className="text-center">
              Please choose your preferred mode of payment
            </p>
            <div className="col-12 col-md-6 mt-3">
              <Card className="d-flex flex-row align-items-center p-3 p-md-4">
                <img
                  src={atm}
                  alt="bank image"
                  className="payment-gateway-image"
                />
                <div>
                  <h5>Paystack</h5>
                  <p>Proceed to pay using your atm card</p>
                </div>
              </Card>
            </div>
            <div className="col-12 col-md-6 mt-3 mb-3">
              <Card className="d-flex flex-row align-items-center p-3 p-md-4">
                <img
                  src={bank}
                  alt="bank image"
                  className="payment-gateway-image"
                />
                <div>
                  <h5>Bank Transfer</h5>
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
// InitiateTransactionsCard
// SettledTransactionsCards
