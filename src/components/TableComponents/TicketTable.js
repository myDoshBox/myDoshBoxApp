import { Table, Card, Container, Tab } from "react-bootstrap";

import { Unresolved } from "../NotificationComponent/NotificationComponents";

// AdminDashbordTicketHistoryCard
export const AdminDashbordTicketHistoryTable = () => {
  return (
    <Container>
      <div
        className="card shadow rounded-3 border-0  pt-4"
        style={{ width: "35rem" }}
      >
        <Table className="">
          <thead className="text-center ">
            <tr>
              <th>Ticket ID</th>
              <th>Date Issued</th>
              <th>Date Resolved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">2tsYFXb4rP3</td>
              <td className="text-center">16-08-22 </td>
              <td className="text-center small-hide">20-08-22</td>
            </tr>
            <tr>
              <td className="text-center">2tsYFXb4rP3</td>
              <td className="text-center">16-08-22 </td>
              <td className="text-center small-hide">20-08-22</td>
            </tr>
          </tbody>
          {/* <div className="">
              <ViewMoreButton />
            </div> */}
        </Table>
      </div>
    </Container>
  );
};

// AdminTicketHistoryCard
export const AdminTicketHistoryTable = () => {
  return (
    <Container>
      <Card className="shadow rounded-3 border-0 pt-4">
        <Table className="">
          <thead className="text-center ">
            <tr>
              <th>Date Issued</th>
              <th>Ticket ID</th>
              <th>Transaction ID</th>
              <th className="small-hide">Complaint Type</th>
              <th className="small-hide">Complainer </th>
              <th className="small-hide">Complainer ID</th>
              <th>Status</th>
              {/* <th className="small-hide">Status</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" text-center">16-08-22</td>
              <td className="text-center">2tsYFXb4rP3</td>
              <td className="text-center">4rsGDrb4rP3</td>
              <td className="text-center">Wrong Item</td>
              <td className="text-center">Kristin Watson</td>
              <td className="text-center  ">25138</td>
              <td className="d-flex justify-content-center align-items-center">
                <Unresolved />
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

// CustomerCareTicketHistory
export const CustomerCareTicketHistoryTable = () => {
  return (
    <Container className="mt-5">
      <Card className="shadow rounded-3 border-0 pt-4">
        <Table className="">
          <thead className="text-center ">
            <tr>
              <th>Date Issued</th>
              <th>Ticket ID</th>
              <th>User ID</th>
              <th className="">Complaint Type</th>
              <th>Status</th>
              {/* <th className="small-hide">Status</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" text-center">16-08-22</td>
              <td className="text-center">2tsYFXb4rP3</td>
              <td className="text-center">75638</td>
              <td className="text-center">Wrong Item</td>
              <td className="d-flex justify-content-center align-items-center">
                <Unresolved />
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};
