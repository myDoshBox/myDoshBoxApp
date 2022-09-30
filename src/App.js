import { DeliveryConfirmedPopUp } from "./components/ModalComponents/DeliveryConfirmedPopUp";
import { ThankYouPopUp } from "./components/ModalComponents/ThankYouPopup";
import {
  BuyerTransactionStartedPopUp,
  SellerTransactionStartedPopUp,
} from "./components/ModalComponents/TransactionStartedPopup";
import { EscrowInitiationPopUp } from "./components/ModalComponents/EscrowInitiationPopUp";
import {
  GuestNavbar,
  UserDashboardNavbar,
} from "./components/NavbarComponents/TopNavbars";
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

import {
  DashboardIcon,
  SettingsIcon,
  TicketsIcon,
  AnalyticsIcon,
  NotificationIcon,
  UsersIcon,
  ChatIcon,
  NavTransactionIcon,
  LogoutIcon,
  DisputeIcon,
} from "./components/IconComponent/SideNavIcons";

function App() {
  return (
    <div>
      <BuyerTransactionStartedPopUp />
      <EscrowInitiationPopUp />
      <SellerTransactionStartedPopUp />
      <DeliveryConfirmedPopUp />
      <ThankYouPopUp />
      <GuestNavbar />
      <UserDashboardNavbar />
      <CompletedNotification />
      <AwaitingDelivery />
      <InDispute />
      <PendingConfirmation />
      <PendingPayment />
      <Unresolved />
      <Refunded />
      <Resolved />
      <AnalyticsIcon />
      <DashboardIcon />
      <SettingsIcon />
      <TicketsIcon />
      <NotificationIcon />
      <UsersIcon />
      <ChatIcon />
      <NavTransactionIcon />
      <LogoutIcon />
      <DisputeIcon />
    </div>
  );
}

export default App;
