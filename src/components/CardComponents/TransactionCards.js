import { Table, Card, Container } from "react-bootstrap";
import { NewTransactionButton } from "../ButtonsComponent/TransactionButtons";
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

// RecentTransactionCard
export const RecentTransactionCard = () => {
  return (
    <Container>
      <Card>
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
// IndividualTransactionsCard
// BuyerTransactCard
// SellerTransactCard
// TransactionCompletedCard
// TransactionSummary
// EscrowInitiationsTerms&ConditionCard
// TransactionsAgreedCard
// PaymentMadeCard
// PaymentGatewayCard
// TransactionCompletionCard
// InitiateTransactionsCard
// SettledTransactionsCards
