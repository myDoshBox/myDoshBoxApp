import {
  OpenConflictIcon,
  ClosedConflictIcon,
  OngoingConflictIcon,
} from "../IconComponent/NeutralsDashboardIcons";
import { Table, Card, Container } from "react-bootstrap";
import {
  FeedbackIcon,
  InitiateDisputeIcon,
  SettledTransactionIcon,
} from "../IconComponent/UserdashboardIcons";

// OpenConflictsCard
export const OpenConflictsCard = () => {
  return (
    <div className="conflicts-card d-flex align-items-center mx-auto">
      <OpenConflictIcon width={"60"} height={"60"} className={"ms-5 me-4"} />
      <div className="d-flex flex-column">
        <span className="conflicts-count">100</span>
        <span className="conflicts-type">Open Conflicts</span>
      </div>
    </div>
  );
};
// OngoingConflictCard
export const OngoingConflictCard = () => {
  return (
    <div className="conflicts-card d-flex align-items-center mx-auto">
      <OngoingConflictIcon width={"44"} height={"44"} className={"ms-5 me-4"} />
      <div className="d-flex flex-column">
        <span className="conflicts-count">100</span>
        <span className="conflicts-type">Ongoing Conflicts</span>
      </div>
    </div>
  );
};
// ClosedConflictsCard
export const ClosedConflictsCard = () => {
  return (
    <div className="conflicts-card d-flex align-items-center mx-auto">
      <ClosedConflictIcon width={"50"} height={"50"} className={"ms-5 me-4"} />
      <div className="d-flex flex-column">
        <span className="conflicts-count">100</span>
        <span className="conflicts-type">Closed Conflicts</span>
      </div>
    </div>
  );
};
// AllConflictsCard
export const AllConflictsCard = () => {
  return (
    <Container>
      <Card className="all-conflicts-card">
        <div className="ms-md-5 ms-3 mt-3">
          <h4 className="text-uppercase conflicts-type">Open Conflict</h4>
        </div>
        <Table className="all-conflicts-table">
          <thead className="text-center text-secondary">
            <tr>
              <th>Date Issued</th>
              <th>Ticket ID</th>
              <th className="small-hide">User ID</th>
              <th>Complaint Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>16-08-22</td>
              <td>2tsYFXb4rP3</td>
              <td className="small-hide">75638</td>
              <td>Wrong Item</td>
              <td className="text-primary">Open</td>
            </tr>
            <tr className="text-center">
              <td>16-08-22</td>
              <td>2tsYFXb4rP3</td>
              <td className="small-hide">75638</td>
              <td>Wrong Item</td>
              <td className="text-success">Closed</td>
            </tr>
            <tr className="text-center">
              <td>16-08-22</td>
              <td>2tsYFXb4rP3</td>
              <td className="small-hide">75638</td>
              <td>Wrong Item</td>
              <td className="text-warning">Ongoing</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};
// IssuesCard

// ComplaintTypeCard

// ReportDefectCard
export const ReportDefectCard = () => {
  return (
    <div className="update-cards d-flex align-items-center p-3 mx-auto mx-md-0">
      <FeedbackIcon width={"60"} height={"60"} className={"ms-3"} />
      <p className="ms-3 mt-3">Report App Defect</p>
    </div>
  );
};
// IntiateDisputeCard
export const InitiateDisputeCard = () => {
  return (
    <div className="initiate-transaction-card d-flex align-items-center p-3 ">
      <InitiateDisputeIcon width={"50"} height={"50"} className={"ms-3"} />

      <p className="me-3 mt-3 ms-3">Initiate Dispute</p>
    </div>
  );
};
// DisputesCard
