import {
  OpenConflictsCard,
  OngoingConflictCard,
  ClosedConflictsCard,
  AllConflictsCard,
  ReportDefectCard,
  InitiateDisputeCard,
} from "./components/CardComponents/ConflictIssuesCards";

function App() {
  return (
    <div>
      <OpenConflictsCard />
      <OngoingConflictCard />
      <ClosedConflictsCard />
      <AllConflictsCard />
      <ReportDefectCard />
      <InitiateDisputeCard />
    </div>
  );
}

export default App;
