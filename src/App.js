import {
  OpenConflictsCard,
  OngoingConflictCard,
  ClosedConflictsCard,
  AllConflictsCard,
  ReportDefectCard,
  InitiateDisputeCard,
  MiniDisputesCard,
} from "./components/CardComponents/ConflictIssuesCards";

import { IndividualTransactionsCard } from "./components/CardComponents/TransactionCards";

function App() {
  return (
    <div>
      {/* <OpenConflictsCard />
      <OngoingConflictCard />
      <ClosedConflictsCard />
      <AllConflictsCard />
      <ReportDefectCard />
      <InitiateDisputeCard />
      <MiniDisputesCard /> */}
      <IndividualTransactionsCard />
    </div>
  );
}

export default App;
