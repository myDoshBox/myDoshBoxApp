import { Table, Card, Container, Nav, Tab, Dropdown } from "react-bootstrap";
import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";

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
