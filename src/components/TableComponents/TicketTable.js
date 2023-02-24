import { Table, Card, Container } from "react-bootstrap";
import { useState } from "react";
import ticketsData from "../../data/TicketData.json";
import { GeneralBtn } from "../ButtonsComponent/GenandAuthBtn";
import { Link } from "react-router-dom";

// AdminDashbordTicketHistoryCard
export const MiniTicketsHistory = ({ style }) => {
  const [max, setMax] = useState(5);
  return (
    <div className={`${style} mb-3 mb-md-0`}>
      <div className={`card p-3 shadow rounded border-0 h-100`}>
        <h6 className="pb-3 m-0">Tickets History</h6>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="opacity-50">
                Ticket Id
              </th>
              <th scope="col" className="opacity-50">
                Date Issued
              </th>
              <th scope="col" className="opacity-50">
                Date Resolved
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(ticketsData)
              .slice(0, max)
              .map(([key, value]) => {
                return (
                  <tr key={key}>
                    <td className="text-center">{value[0].id}</td>
                    <td className="text-center">{value[0].date_issued}</td>
                    <td className="text-center">{value[0].date_resolved}</td>
                  </tr>
                );
              })}
            <Link to={""} className="d-flex justify-content-center pe-2 py-3 text-decoration-none w-100" style={{whiteSpace: "nowrap"}}>
                <GeneralBtn
                  text="View More"
                  styles="GeneralBtnStyle1 btn all-btn text-white"
                />
              </Link>
          </tbody>
        </table>
      </div>
    </div>
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
                {/* <Unresolved /> */}
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
                {/* <Unresolved /> */}
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};
