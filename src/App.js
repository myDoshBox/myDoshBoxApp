import {
  RecentTransactionCard,
  AdminRecentTransactionsCard,
  EscrowInitiationsTermsAndConditionCard,
  PaymentGatewayCard,
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
