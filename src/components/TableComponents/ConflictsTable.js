import { Table, Card, Container, Nav, Tab, Dropdown } from "react-bootstrap";
import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";

// AllConflictsCard
import conflictsData from "../../data/dummyData/conflictsData.json";

export const AllConflictsTable = ({ conflictType }) => {
  const rows = conflictsData.conflicts.map((conflict) => {
    if (conflict.status_category === conflictType) {
      return (
        <tr key={conflict.ticket_id}>
          <td>{conflict.date_issued}</td>
          <td>{conflict.ticket_id}</td>
          <td className="">{conflict.user_id}</td>
          <td>{conflict.complaint_type}</td>
          <td
            className={
              conflict.status_category === "closed"
                ? "text-success"
                : conflict.status_category === "ongoing"
                ? "text-warning"
                : "text-primary"
            }
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
        <h6 className="pb-2 pt-3 ps-2 m-0 text-capitalize">
          {conflictType} Conflicts
        </h6>
        <Table>
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

export const CloseConflictTable = () => {
  return (
    <section>
      <div className="shadow-lg container" style={{ width: "55rem" }}>
        <div className="">
          <p className="fw-bold pt-4 ms-2 ">CLOSE CONFLICT</p>
        </div>
        <hr />
        <table class="table table-borderless table-hover ms-3">
          <thead>
            <tr>
              <th className="fw-bold" scope="col">
                Date Issued
              </th>
              <th className="fw-bold" scope="col">
                Ticket ID
              </th>
              <th className="fw-bold" scope="col">
                User ID
              </th>
              <th className="fw-bold" scope="col">
                Complaint Type
              </th>
              <th className="fw-bold" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">16-08-22</th>
              <td>2tsYFXb4rP3</td>
              <td>57638</td>
              <td>Wrong Item</td>
              <td className="text-success-emphasis">Ongoing</td>
            </tr>
            <tr>
              <th scope="row">16-08-22</th>
              <td>2tsYFXb4rP3</td>
              <td>57638</td>
              <td>Wrong Item</td>
              <td className="text-success-emphasis">Ongoing</td>
            </tr>
            <tr>
              <th scope="row">16-08-22</th>
              <td>2tsYFXb4rP3</td>
              <td>57638</td>
              <td>Wrong Item</td>
              <td className="text-success-emphasis">Ongoing</td>
            </tr>
            <tr>
              <th scope="row">16-08-22</th>
              <td>2tsYFXb4rP3</td>
              <td>57638</td>
              <td>Wrong Item</td>
              <td className="text-success-emphasis">Ongoing</td>
            </tr>
            <tr>
              <th scope="row">16-08-22</th>
              <td>2tsYFXb4rP3</td>
              <td>57638</td>
              <td>Wrong Item</td>
              <td className="text-success-emphasis">Ongoing</td>
            </tr>
            <tr>
              <th scope="row">16-08-22</th>
              <td>2tsYFXb4rP3</td>
              <td>57638</td>
              <td>Wrong Item</td>
              <td className="text-success-emphasis">Ongoing</td>
            </tr>
            <tr>
              <th scope="row">16-08-22</th>
              <td>2tsYFXb4rP3</td>
              <td>57638</td>
              <td>Wrong Item</td>
              <td className="text-success-emphasis">Ongoing</td>
            </tr>
            <tr>
              <th scope="row">16-08-22</th>
              <td>2tsYFXb4rP3</td>
              <td>57638</td>
              <td>Wrong Item</td>
              <td className="text-success-emphasis">Ongoing</td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-end me-5 pb-4 pt-3">
          <GeneralBtn
            styles="GeneralBtnStyle1 btn all-btn text-white"
            text="View More"
          />
        </div>
      </div>
    </section>
  );
};
