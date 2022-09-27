import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CompletedNotification,
  CanceledNotification,
  Refunded,
  PendingConfirmation,
  InDispute,
  AwaitingDelivery,
  PendingPayment,
  Resolved,
  Unresolved,
} from "./components/NotificationComponent/NotificationComponents";

function App() {
  return (
    <>
      <CompletedNotification />
      <CanceledNotification />
      <Refunded />
      <InDispute />
      <PendingConfirmation />
      <AwaitingDelivery />
      <PendingPayment />
      <Unresolved />
      <Resolved />
    </>
  );
}

export default App;
