import { DeliveryConfirmedPopUp } from "./components/ModalComponents/DeliveryConfirmedPopUp";
import { ThankYouPopup } from "./components/ModalComponents/ThankYouPopup";
import {
  BuyerTransactionStartedPopUp,
  SellerTransactionStartedPopUp,
} from "./components/ModalComponents/TransactionStartedPopup";
import { EscrowInitiationPopUp } from "./components/ModalComponents/EscrowInitiationPopUp";

function App() {
  return (
    <div>
      <BuyerTransactionStartedPopUp />
      <EscrowInitiationPopUp />
      <SellerTransactionStartedPopUp />
      <DeliveryConfirmedPopUp />
    </div>
  );
}

export default App;
