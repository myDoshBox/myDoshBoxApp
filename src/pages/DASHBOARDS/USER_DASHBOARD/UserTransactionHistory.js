import { useRef, useEffect, useState } from "react";
import { Notifications } from "../../../components/NotificationComponent/NotificationComponents";
import TransactionData from "../../../data/dummyData/transactionData.json";
import { PaginationBar } from "../../../components/PaginationComponent";
import { UserDashboardNavbar } from "../../../components/NavbarComponents/TopNavbars";
import { Link } from "react-router-dom";
import { NewTransaction } from "../../../components/ButtonsComponent/NavigationAndViewButtons";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import buyerImage from "../../../images/transact_person.png"

const UserTransactionHistory = () => {
  return (
    <div className="contestPage" style={{ "background-color": "#F9F9FB" }}>
      <div className="row">
        <div className="col-lg-3 col-sm-12"></div>

        <div className="col-lg-9 col-sm-12">
          <UserDashboardNavbar />
          <div className="mt-5 center-card">
            <RecentTransactionTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export const RecentTransactionTable = () => {
  const dropdownBtnValues = [
    { label: "All Data", value_1: "Last 7 days", value_2: "Over $1000" },
    { label: "2021", value_1: '2022', value_2: '2023' },
  ];

  return (
    <div className="bg-white rounded-1 p-3" style={{ width: "100%" }}>
      {/* <div className="col-lg-9 border shadow" style={{ width: "100%" }}> */}
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="fs-6 m-0" style={{}}>
            All Transactions
          </h3>
          <div className="d-flex">
              {dropdownBtnValues.map((item) => {
                return (
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="border-1 border-gray mt-3 rounded-1 btn bg-transparent text-black border-black me-3 fs-sm"
                      style={{
                        outline: "none",
                        borderColor: "#E7E7E7",
                      }}
                    >
                      {item.label}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ minWidth: "inherit" }}>
                      <div key={item.label}>
                        <Dropdown.Item className="fs-sm">
                          {item.value_1}
                        </Dropdown.Item>
                        <Dropdown.Item className="fs-sm">
                          {item.value_2}
                        </Dropdown.Item>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                );
                })}
            <Link to={"../initiate-escrow"}>
              <Button
                className="border-0 mt-3 rounded-1 btn all-btn text-white fs-sm"
                style={{
                  backgroundColor: "#006747EB",
                }}
              >
                Create Transaction
              </Button>
            </Link>
          </div>
        </div>

        <table className="table fs-sm">
          <thead>
            <tr>
              <th className="px-0">Item</th>
              <th className="text-center">Purchase From</th>
              <th className="text-center">Purchase Date</th>
              <th className="text-center">Purchase By</th>
              <th className="text-center">Amount</th>
              <th className="text-center">Slip</th>
              <th className="text-center">Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {TransactionData.user_recent_transaction.map((history) => {
              return (
                <RecentTransactionTableData {...history} key={history.id} />
              );
            })}
          </tbody>
        </table>
        <div className="p-4">
          <PaginationBar />
        </div>
      </div>
    </div>
  );
};

export const RecentTransactionTableData = (props) => {
  const { item, purchase_from, purchase_date, purchase_by, amount,status, status_color, buyer_image } = props;

  return (
    <>
      <tr className="border-bottom">
        <td className="py-md-3 px-0">{item}</td>
        <td className="py-md-3 text-center">{purchase_from}</td>
        <td className="py-md-3 text-center">{purchase_date}</td>
        <td className="py-md-3 text-center d-flex align-items-center border-0">
          <img
            src={buyerImage}
            alt={purchase_by}
            className="pe-2"
          />
          {purchase_by}
        </td>
        <td className="py-md-3 text-center">₦{amount}</td>
        <td className="py-md-3 text-center">
          <Button
            className="border-0 rounded-1 btn all-btn text-white fs-sm"
            style={{
              backgroundColor: "#006747EB",
            }}
          >
            Generate Slip
          </Button>
        </td>
        <td
          className="py-md-3 text-center"
          style={{ color: `${status_color}` }}
        >
          {status}
        </td>
        <td className="py-md-3 text-center">
          <Button variant="outline-primary" className="rounded-1 fs-sm">
            View More
          </Button>
        </td>
      </tr>
    </>
  );
};
export default UserTransactionHistory;
