import React from "react";
import { Notifications } from "../../../components/NotificationComponent/NotificationComponents";
import { GeneralBtnStyle1 } from "../../../components/ButtonsComponent/Button";
import TransactionData from "../../../data/dummyData/transactionData.json";
import { PaginationBar } from "../../../components/PaginationComponent";
import { UserDashboardNavbar } from "../../../components/NavbarComponents/TopNavbars";
import { Link } from "react-router-dom";

const AdminTransaction = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-lg-3 col-sm-12"></div>

        <div className="col-lg-9 col-sm-12 mt-4">
          <UserDashboardNavbar />
          <div className="mt-4 me-5">
            <RecentTransactionTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export const RecentTransactionTable = () => {
  return (
    <div className="border shadow p-3" style={{ width: "100%" }}>
      {/* <div className="col-lg-9 border shadow" style={{ width: "100%" }}> */}
      <div>
        {/* <div className="px-4 mb-3">
          <Link to={"../initiate-escrow"}>
            <GeneralBtnStyle1 text="New Transaction" />
          </Link>
        </div> */}

        <table className="table transaction-table">
          <thead className="text-center">
            <tr>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
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
  const { product, price, date, status_name, status_style } = props;
  return (
    <>
      <tr className="text-center border-bottom">
        <td className="p-md-3">{product}</td>
        <td className="p-md-3">N{price}</td>
        <td className="p-md-3">{date}</td>
        <td className="p-md-3 d-flex justify-content-center align-items-center">
          <Notifications text={status_name} styles={status_style} />
        </td>
      </tr>
    </>
  );
};

export default AdminTransaction;
