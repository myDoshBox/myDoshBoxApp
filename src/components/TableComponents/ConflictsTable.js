import { Table, Card, Container } from "react-bootstrap";
import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";

// AllConflictsCard
import conflictsData from "../../data/dummyData/conflictsData.json";

export const AllConflictsTable = ({ conflictType }) => {
  const rows = conflictsData.conflicts.map((conflict) => {
    if (conflict.status_category === conflictType) {
      return (
        <tr key={conflict.ticket_id}>
          <td className="text-small">{conflict.date_issued}</td>
          <td className="text-small">{conflict.ticket_id}</td>
          <td className="text-small">{conflict.user_id}</td>
          <td className="text-small">{conflict.complaint_type}</td>
          <td
            className={`
              ${
                conflict.status_category === "closed"
                  ? "text-danger"
                  : conflict.status_category === "ongoing"
                  ? "text-grey"
                  : "text-success"
              } 
                  text-small
              `}
          >
            {conflict.status}
          </td>
        </tr>
      );
    }
  });

  return (
    <Container className="px-lg-5 mt-5 pb-5">
      <Card className="border-0 shadow rounded-3">
        <h6 className="pb-2 pt-5 ps-2 m-0 text-capitalize">
          {conflictType} Conflicts
        </h6>
        <Table className="mb-5">
          <thead className="opacity-50">
            <tr>
              <th>Date</th>
              <th>Ticket ID</th>
              <th>User ID</th>
              <th>Complaint</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Card>
    </Container>
  );
};
