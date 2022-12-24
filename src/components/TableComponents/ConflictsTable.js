import { Table, Card, Container, Nav, Tab, Dropdown } from "react-bootstrap";

// AllConflictsCard
export const AllConflictsTable = () => {
  return (
    <Container>
      <Card className="border-0 shadow rounded-3">
        <div className="ms-5 mt-3">
          <h4 className="text-uppercase conflicts-type">Open Conflict</h4>
        </div>
        <Table className="">
          <thead className="text-center text-secondary">
            <tr>
              <th>Date Issued</th>
              <th>Ticket ID</th>
              <th className="">User ID</th>
              <th>Complaint Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>16-08-22</td>
              <td>2tsYFXb4rP3</td>
              <td className="">75638</td>
              <td>Wrong Item</td>
              <td className="text-primary">Open</td>
            </tr>
            <tr className="text-center">
              <td>16-08-22</td>
              <td>2tsYFXb4rP3</td>
              <td className="">75638</td>
              <td>Wrong Item</td>
              <td className="text-success">Closed</td>
            </tr>
            <tr className="text-center">
              <td>16-08-22</td>
              <td>2tsYFXb4rP3</td>
              <td className="">75638</td>
              <td>Wrong Item</td>
              <td className="text-warning">Ongoing</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};
