import { GuestNavbar } from "./components/NavbarComponents/TopNavbars";
import {
  CreateTransactionButton,
  NewTransactionButton,
  ProceedButton,
  ConfirmDeliveryButton,
  IAgreeButton,
  ConfirmButton,
  DeliverProductButton,
} from "./components/ButtonsComponent/TransactionButtons";
function App() {
  return (
    <div>
      <GuestNavbar />
      <CreateTransactionButton />
      <NewTransactionButton />
      <ProceedButton />
      <ConfirmDeliveryButton />
      <IAgreeButton />
      <ConfirmButton />
      <DeliverProductButton />
    </div>
  );
}

export default App;
