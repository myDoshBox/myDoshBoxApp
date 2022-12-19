import {
  OpenConflictIcon,
  ClosedConflictIcon,
  OngoingConflictIcon,
} from "../IconComponent/NeutralsDashboardIcons";
import { Table, Card, Container, Nav, Tab, Dropdown } from "react-bootstrap";
import {
  FeedbackIcon,
  InitiateDisputeIcon,
  SettledTransactionIcon,
} from "../IconComponent/UserdashboardIcons";
import { CalendarButton } from "../ButtonsComponent/OtherButtons";

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie, Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);
// OpenConflictsCard

export const OpenConflictsCard = () => {
  return (
    <div className="card shadow  border-0 rounded-3" style={{ width: "18rem" }}>
      <div className="card-body d-flex align-items-center justify-content-center">
        <OpenConflictIcon width={"60"} height={"60"} className={"m-3"} />
        <div className="d-flex flex-column">
          <span className="conflicts-count">100</span>
          <span className="conflicts-type">Open Conflicts</span>
        </div>
      </div>
    </div>
  );
};

// OngoingConflictCard
export const OngoingConflictCard = () => {
  return (
    <div
      className="card shadow  border-0 rounded-3"
      style={{ width: "18rem", height: "8rem" }}
    >
      <div className="card-body d-flex align-items-center justify-content-center">
        <OngoingConflictIcon
          width={"55"}
          height={"55"}
          className={"ms-5 me-4"}
        />
        <div className="d-flex flex-column">
          <span className="conflicts-count">100</span>
          <span className="conflicts-type">Ongoing Conflicts</span>
        </div>
      </div>
    </div>
  );
};

// ClosedConflictsCard
export const ClosedConflictsCard = () => {
  return (
    <div
      className="card shadow  border-0 rounded-3"
      style={{ width: "18rem", height: "8rem" }}
    >
      <div className="card-body d-flex align-items-center justify-content-center">
        <ClosedConflictIcon
          width={"50"}
          height={"50"}
          className={"ms-5 me-4"}
        />
        <div className="d-flex flex-column">
          <span className="conflicts-count">100</span>
          <span className="conflicts-type">Closed Conflicts</span>
        </div>
      </div>
    </div>
  );
};
// AllConflictsCard
export const AllConflictsCard = () => {
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
// IssuesCard

// export const data = {
//   labels: ["Open", "Closed"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19],
//       backgroundColor: ["#B90E0ACC", "#37FD12CC"],
//     },
//   ],
// };

// export const IssuesCard = () => {
//   return (
//     <Card className="issues-card">
//       <div className="d-flex justify-content-between align-items-center px-3 mt-2">
//         <h6>Issues</h6>
//         <CalendarButton />
//       </div>
//       <div style={{ width: "200px" }} className="m-auto">
//         <Pie data={data} />
//       </div>
//     </Card>
//   );
// };

// ComplaintTypeCard
// export const data2 = {
//   labels: ["Other", "Failed ", "Wrong", "Incomplete"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5],
//       backgroundColor: ["#55DA47", "#55DA47CC", "#55DA4799", "#55DA4766"],
//     },
//   ],
// };

export const ComplaintTypeCard = () => {
  //   return (
  //     // <Card className="issues-card">
  //     //   <div className="d-flex justify-content-between align-items-center px-3 mt-2">
  //     //     <h6>Complaint Type</h6>
  //     //     <CalendarButton />
  //     //   </div>
  //     //   <div style={{ width: "200px" }} className="m-auto">
  //     //     <Doughnut data={data2} />
  //     //   </div>
  //     // </Card>
  //   );
};

// ReportDefectCard
export const ReportDefectCard = () => {
  return (
    <div
      className="shadow border-0 rounded-3 d-flex align-items-center p-3 mx-auto mx-md-0"
      style={{ width: "18rem", height: "8rem" }}
    >
      <FeedbackIcon width={"50"} height={"50"} className={"ms-3"} />
      <p className="ms-3 mt-3">Report App Defect</p>
    </div>
  );
};
// IntiateDisputeCard
export const InitiateDisputeCard = () => {
  return (
    <div
      className="shadow border-0 rounded d-flex align-items-center p-3 "
      style={{ width: "18rem", height: "8 rem" }}
    >
      <InitiateDisputeIcon width={"55"} height={"55"} className={"ms-3"} />

      <p className="me-3 mt-3 ms-3">Initiate Dispute</p>
    </div>
  );
};
// DisputesCard
export const MiniDisputesCard = () => {
  return (
    <div
      className="border-0 shadow rounded  mini-disputes-card"
      style={{ width: "24.4rem", height: "20rem" }}
    >
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="row">
          <div className="">
            <Nav variant="pills" className="">
              <Nav.Item>
                <Nav.Link eventKey="first">Disputes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">History</Nav.Link>
              </Nav.Item>
              <Dropdown className="mt-2 mt-lg-3 ms-lg-5">
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className="border-0 disputes-sort-btn  "
                >
                  Sort
                </Dropdown.Toggle>

                <Dropdown.Menu className="text-center">
                  <Dropdown.Item className="border-bottom">Name</Dropdown.Item>
                  <Dropdown.Item className="border-bottom">
                    Newest
                  </Dropdown.Item>
                  <Dropdown.Item>Oldest</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
          <div className="col-12">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="d-flex justify-content-between px-4">
                  <div className="d-flex">
                    <div className=" rounded-circle p-3 bg-primary"></div>
                    <div className="d-flex flex-column ms-3">
                      <span className=" mini-disputes-name">
                        Korode Okesanya
                      </span>
                      <span className=" mini-disputes-mail">
                        emmywears@gmail.com
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="btn rounded w-100 border-0 disputes-view-btn d-flex justify-content-center align-items-center">
                      View
                    </button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="d-flex justify-content-between px-4">
                  <div className="d-flex">
                    <div className=" rounded-circle p-3 bg-primary"></div>
                    <div className="d-flex flex-column ms-3">
                      <span className=" mini-disputes-name">
                        Olasukanmi Idris
                      </span>
                      <span className=" mini-disputes-mail">
                        emmywears@gmail.com
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="btn disputes-view-btn d-flex justify-content-center align-items-center">
                      View
                    </button>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export const ConflictIssuesCards = () => {
  return (
    <div
      className="card rounded-3 ConflictIssuesCard-body"
      style={{ width: "18rem" }}
    >
      <div className="p-3">
        <h5 className="card-title text-white">Card title</h5>
        <p className="card-text text-white">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};
