import {
  SellersEscrowInitiationForm,
  BuyerEscrowInitiationForm,
  SellerDeliverGoodsForm,
  BuyerConfirmProductDeliveryForm,
  BankTransferForm,
} from "./components/FormComponents.js/TransactionForms";
function App() {
  return (
    <div>
      <SellerDeliverGoodsForm />
      <BuyerConfirmProductDeliveryForm />
      <SellersEscrowInitiationForm />
      <BuyerEscrowInitiationForm />
      <BankTransferForm />
    </div>
  );
}

export default App;
