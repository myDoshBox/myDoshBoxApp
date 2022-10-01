import {
  SellersEscrowInitiationForm,
  BuyerEscrowInitiationForm,
} from "./components/FormComponents.js/TransactionForms";
function App() {
  return (
    <div>
      <SellersEscrowInitiationForm />
      <BuyerEscrowInitiationForm />
    </div>
  );
}

export default App;
