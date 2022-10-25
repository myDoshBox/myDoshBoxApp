import { EditTicketButton } from "../ButtonsComponent/EditButtons";
import { ProceedButton } from "../ButtonsComponent/TransactionButtons";
import {
  ViewMoreButton,
  ViewDetailsButton,
  BackButton,
} from "../ButtonsComponent/NavigationAndViewButtons";
// import { ViewMoreButton } from "../ButtonsComponent/NavigationAndViewButtons";
import {
  ResendProductButton,
  ContestComplaintButton,
} from "../ButtonsComponent/EditButtons";
import { Table, Card, Container } from "react-bootstrap";
import { Unresolved } from "../NotificationComponent/NotificationComponents";

// TicketCard
export const TicketCard = () => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-10 col-md-10 col-lg-8 m-5">
        <div className="card shadow p-5">
          <h3 className="text-center mt-5">TICKET No.19234</h3>
          <div className="d-flex justify-content-evenly m-5 col-sm-12 col-md-12 ">
            <div className="smStyle">
              <h5 className="my-3">FULL NAME :</h5>
              <h5 className="my-3">E-MAIL ADDRESS : </h5>
              <h5 className="my-3">PHONE NUMBER : </h5>
              <h5 className="my-3">TRANSACTION ID : </h5>
              <h5 className="my-3">COMPLAINT TYPE : </h5>
            </div>

            <div className="me-5 my-3 ">
              <p className="">OPEYEMI ADNREWSON</p>
              <p className="">opeyemiandrewson@gmail.com</p>
              <p className=""> 08123456789</p>
              <p className="">4rsGDrb4rP3</p>
              <p className=""> Incomplete Items</p>
            </div>
          </div>

          <div className="col-md-10  ms-5">
            <h5 className="">FURTHER INFORMATION:</h5>
            <p className="pb-5">
              Auctor sem ut aliquam velit quis eu. Aliquam tortor euismod
              interdum sodales eget maecenas sem. Ultrices a donec urna semper
              ante. Eget aliquet enim elit lorem hac feugiat. Eu convallis at
              amet pretium vestibulum et ultr
            </p>
          </div>
          <div className="d-flex justify-content-between  ">
            <EditTicketButton />
            <ProceedButton />
          </div>
        </div>
      </div>
    </div>
  );
};

// SellerTicketSummaryCard
export const SellerTicketSummaryCard = () => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-10 col-md-10 col-lg-8 m-5">
        <div className="card shadow p-5">
          <h3 className="text-center mt-5">TICKET No.19234</h3>
          <div className="d-flex justify-content-evenly m-5 col-sm-12 col-md-12 ">
            <div className="smStyle">
              <h5 className="my-3">FULL NAME :</h5>
              <h5 className="my-3">TRANSACTION ID : </h5>
              <h5 className="my-3">COMPLAINT TYPE : </h5>
            </div>

            <div className="me-5 my-3 ">
              <p className="">OPEYEMI ADNREWSON</p>
              <p className="">4rsGDrb4rP3</p>
              <p className=""> Incomplete Items</p>
            </div>
          </div>

          <div className="col-md-10  ms-5 ">
            <h5 className="">FURTHER INFORMATION:</h5>
            <p className="pb-5">
              Auctor sem ut aliquam velit quis eu. Aliquam tortor euismod
              interdum sodales eget maecenas sem. Ultrices a donec urna semper
              ante. Eget aliquet enim elit lorem hac feugiat. Eu convallis at
              amet pretium vestibulum et ultr
            </p>
          </div>
          <div className="d-flex justify-content-between  ">
            <ResendProductButton />
            <ContestComplaintButton />
          </div>
        </div>
      </div>
    </div>
  );
};

// ContestTicketCard
export const ContestTicketCard = () => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-10 col-md-10 col-lg-8 m-5">
        <div className="card shadow p-5">
          <h3 className="text-center mt-5">CONTEST No.19234</h3>
          <div className="d-flex justify-content-evenly m-5 col-sm-12 col-md-12 ">
            <div className="smStyle">
              <h5 className="my-3">FULL NAME :</h5>
              <h5 className="my-3">TRANSACTION ID : </h5>
              <h5 className="my-3">COMPLAINT TYPE : </h5>
            </div>

            <div className="me-5 my-3 ">
              <p className="">OPEYEMI ADNREWSON</p>
              <p className="">4rsGDrb4rP3</p>
              <p className=""> Incomplete Items</p>
            </div>
          </div>

          <div className="col-md-10  ms-5 ticketInfoStyle">
            <h5 className="">FURTHER INFORMATION:</h5>
            <p className="pb-5">
              Auctor sem ut aliquam velit quis eu. Aliquam tortor euismod
              interdum sodales eget maecenas sem. Ultrices a donec urna semper
              ante. Eget aliquet enim elit lorem hac feugiat. Eu convallis at
              amet pretium vestibulum et ultr
            </p>
          </div>
          <div className="d-flex justify-content-between  ">
            <EditTicketButton />
            <ProceedButton />
          </div>
        </div>
      </div>
    </div>
  );
};

// AdminDashbordTicketHistoryCard
export const AdminDashbordTicketHistoryCard = () => {
  return (
    <Container className="row mt-5 pb-5 m-5">
      <div className="col-sm-12 col-md-4">
        <div className="card shadow ticketHistoryStyle pt-4">
          <Table className="ticketTableStyle transaction-table">
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
            <div className="d-flex justify-content-center align-items-center ms-5 ">
              <ViewMoreButton />
            </div>
          </Table>
        </div>
      </div>
    </Container>
  );
};

// AdminTicketHistoryCard
export const AdminTicketHistoryCard = () => {
  return (
    <Container className="mt-5">
      <Card className="transaction-card pt-4">
        <Table className="transaction-table">
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
              <td className="text-center small-hide">Wrong Item</td>
              <td className="text-center small-hide">Kristin Watson</td>
              <td className="text-center  small-hide">25138</td>
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
export const CustomerCareTicketHistory = () => {
  return (
    <Container className="mt-5">
      <Card className="transaction-card pt-4">
        <Table className="transaction-table">
          <thead className="text-center ">
            <tr>
              <th>Date Issued</th>
              <th>Ticket ID</th>
              <th>User ID</th>
              <th className="small-hide">Complaint Type</th>
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

// MiniDisputeCard
export const MiniDisputeCard = () => {
  return (
    <div className="row m-5 ">
      <div className="col-sm-12 col-md-8 disputeCardStyle pt-1">
        <div className="card shadow">
          <div className="d-flex justify-content-end  mb-5 me-5">
            <BackButton />
          </div>
          <div className="warningStyle pb-1 ms-5 ">
            <p className="">
              Notice: in the event of a dispute, the contract between the buyer
              and the seller is reviewed. MyDoshBox presents this case before a
              court of justice
            </p>
          </div>
          <div className="d-flex justify-content-between ">
            <div className="transaction-table ms-5">
              <h5 className="pb-5 mt-5">Disputes</h5>
              <p className="">Aug 3</p>
              <p className="colorTextStyle">
                TransactionID: <span className="textStyle">2376490</span>
              </p>
              <p className="colorTextStyle">
                Status: <span>Ongoing</span>{" "}
              </p>
            </div>

            <div className="d-flex align-items-end flex-column mt-auto mb-5 me-5 mt-5">
              <ViewDetailsButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
