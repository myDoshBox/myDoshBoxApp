// import { BankTransferForm } from "./components/FormComponents.js/TransactionForms";
import {
  CoreValueCard,
  TeamsCard,
  TeamsCardTwo,
} from "./components/CardComponents/AboutUsCards";

import {
  TicketCard,
  SellerTicketSummaryCard,
  ContestTicketCard,
  AdminTicketHistoryCard,
  CustomerCareTicketHistory,
  AdminDashbordTicketHistoryCard,
  MiniDisputeCard,
} from "./components/CardComponents/TicketsCards";

function App() {
  return (
    <div>
      <CoreValueCard />
      <TeamsCard />
      <TeamsCardTwo />
      <TicketCard />
      <SellerTicketSummaryCard />
      <ContestTicketCard />
      <AdminTicketHistoryCard />
      <CustomerCareTicketHistory />
      <AdminDashbordTicketHistoryCard />
      <MiniDisputeCard />
    </div>
  );
}

export default App;
