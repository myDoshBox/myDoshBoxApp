import { Notifications } from "../../../components/NotificationComponent/NotificationComponents";
import customercare_transaction from "../../../data/dummyData/transactionData.json";
import { Pagination } from "../../../components/PaginationComponent";
import { UserDashboardNavbar } from "../../../components/NavbarComponents/TopNavbars";
import { FilterButton } from "../../../components/ButtonsComponent/OtherButtons";
import { useState } from "react";

const CustomerCareTransaction = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-lg-3 col-sm-12"></div>

        <div className="col-lg-9 col-sm-12">
          <UserDashboardNavbar />
          <div className="mt-5 center-card">
            <CustomerCareTransactionTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CustomerCareTransactionTable = () => {
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
        <div className="d-flex justify-content-end pb-3">
          <FilterButton />
        </div>

        <table className="table transaction-table">
          <thead className="text-center">
            <tr>
              <th>Transaction ID</th>
              <th>Buyer Name</th>
              <th>Seller Name</th>
              <th className="small-hide">Products</th>
              <th className="small-hide">Date</th>
              <th>Status</th>
              <th className="small-hide">...</th>
            </tr>
          </thead>
          <tbody>
            {customercare_transaction.customercare_transaction
              .slice(start, end)
              .map((customercare) => {
                return (
                  <CustomerCareTransactionTableData
                    {...customercare}
                    key={customercare.id}
                  />
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

export const CustomerCareTransactionTableData = (props) => {
  const {
    transaction_id,
    buyer_name,
    seller_name,
    products,
    date,
    status_name,
    status_style,
    view,
  } = props;
  return (
    <>
      <tr className="text-center border-bottom">
        <td className="p-md-3">{transaction_id}</td>
        <td className="p-md-3">{buyer_name}</td>
        <td className="p-md-3">{seller_name}</td>
        <td className="p-md-3 small-hide">{products}</td>
        <td className="p-md-3 small-hide">{date}</td>
        <td className="p-md-3 d-flex justify-content-center align-items-center">
          <Notifications text={status_name} styles={status_style} />
        </td>
        <td className="p-md-3 small-hide">{view}</td>
      </tr>
    </>
  );
};

export default CustomerCareTransaction;
