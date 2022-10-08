import {
  RecentTransactionCard,
  AdminRecentTransactionsCard,
  EscrowInitiationsTermsAndConditionCard,
  PaymentGatewayCard,
  BuyerTransactCard,
  SellerTransactCard,
  TransactionSummaryCard,
  TransactionAgreedCard,
  TransactionCompletionCard,
  PaymentMadeCard,
} from "./components/CardComponents/TransactionCards";
import {
  CompletedNotification,
  Refunded,
  Resolved,
  AwaitingDelivery,
  Unresolved,
  PendingConfirmation,
  PendingPayment,
  InDispute,
} from "./components/NotificationComponent/NotificationComponents";
function App() {
  return (
    <div>
      <RecentTransactionCard />
      <AdminRecentTransactionsCard />
      <EscrowInitiationsTermsAndConditionCard />
      <PaymentGatewayCard />
      <BuyerTransactCard />
      <SellerTransactCard />
      <TransactionSummaryCard />
      <TransactionAgreedCard />
      <TransactionCompletionCard />
      <PaymentMadeCard />
      <CompletedNotification />
      <AwaitingDelivery />
      <InDispute />
      <PendingConfirmation />
      <PendingPayment />
      <Unresolved />
      <Refunded />
      <Resolved />
    </div>
  );
}

export default App;
