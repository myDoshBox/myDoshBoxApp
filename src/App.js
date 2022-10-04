import { RecentTransactionCard } from "./components/CardComponents/TransactionCards";
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
