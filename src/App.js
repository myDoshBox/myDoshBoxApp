import React from "react";
import {
  InitiateTransactionsCard,
  SettledTransactionsCard,
} from "./components/CardComponents/TransactionCards";
function App() {
  return (
    <div>
      <InitiateTransactionsCard />
      <SettledTransactionsCard />
    </div>
  );
}

export default App;
