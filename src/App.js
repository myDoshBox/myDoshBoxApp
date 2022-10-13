import { ContactCustomerCareCard, LogoutCard } from "./components/CardComponents/UsersCards";
import { InitiateTransactionsCard } from "./components/CardComponents/TransactionCards";

function App() {
  return (
    <div>
      <ContactCustomerCareCard/>
      <InitiateTransactionsCard/>
      <LogoutCard/>
    </div>
  );
}

export default App;
