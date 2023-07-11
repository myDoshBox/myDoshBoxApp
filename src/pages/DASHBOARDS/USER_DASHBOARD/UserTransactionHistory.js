import { Notifications } from "../../../components/NotificationComponent/NotificationComponents";
import TransactionData from "../../../data/dummyData/transactionData.json";
import { Pagination } from "../../../components/PaginationComponent";
import { UserDashboardNavbar } from "../../../components/NavbarComponents/TopNavbars";
import { Link } from "react-router-dom";
import { NewTransaction } from "../../../components/ButtonsComponent/NavigationAndViewButtons";
import { useState } from "react";

const UserTransactionHistory = () => {
  return (
    <div className="contestPage">
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
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(5);
  const [limit, setLimit] = useState(10);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const end = currentPage * limit;
  const start = end - limit;
  return (
    <div className="border shadow p-3" style={{ width: "100%" }}>
      {/* <div className="col-lg-9 border shadow" style={{ width: "100%" }}> */}
      <div>
        <div className="px-4 mb-3">
          <Link to={"../initiate-escrow"}>
            <NewTransaction />
          </Link>
        </div>

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
            {TransactionData.user_recent_transaction
              .slice(start, end)
              .map((history) => {
                return (
                  <RecentTransactionTableData {...history} key={history.id} />
                );
              })}
          </tbody>
        </table>
        <div className="p-4">
          <Pagination
            total={total}
            limit={limit}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
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

export default UserTransactionHistory;
