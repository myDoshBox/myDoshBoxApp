import { FAQsCard } from "./components/CardComponents/ContactAndInfoCards";
import {
  BuyerTransactCard,
  InitiateTransactionsCard,
  SellerTransactCard,
} from "./components/CardComponents/TransactionCards";
// import { GuestNavbar } from "./components/NavbarComponents/TopNavbars";

function App() {
  return (
    <div>
      <FAQsCard />
      <BuyerTransactCard />
      <SellerTransactCard />
      <InitiateTransactionsCard />
    </div>
  );
}

export default App;
