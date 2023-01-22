import Table from "react-bootstrap/Table";
// import { PaginationBar } from "../PaginationComponent";
// import { FilterButton } from "../ButtonsComponent/MiscBtns";
import { GeneralBtnStyle1, GeneralBtnStyle2 } from "../ButtonsComponent/Button";
import { Notifications } from "../NotificationComponent/NotificationComponents";
import { Descripe } from "@mui/icons-material";
import TransactionData from "../../data/dummyData/transactionData.json";
import { RecentTransactionTableData } from "../../pages/DASHBOARDS/USER_DASHBOARD/UserTransactionHistory";
import { Link } from "react-router-dom";
import { GeneralBtn } from "../ButtonsComponent/GenandAuthBtn";

export const NotificationCard = (props) => {
  const { image, title, description, link } = props;
  return (
    <div className="d-flex justify-content-around align-items-center border-bottom p-2">
      <img src={image} alt="SampleUserImg" className="" />
      <h6 className="d-none d-lg-block mx-3">{title}</h6>
      <div className="d-inline">
        <p className="w-100 ps-3">{description}</p>
      </div>
      <button className="btn text-primary border-0 d-none d-md-block">
        {link}
      </button>
    </div>
  );
};

//RecentTransactionTable

export const MiniRecentTransactionTable = () => {
  return (
    <div className="border shadow p-3" style={{ width: "100%" }}>
      {/* <div className="col-lg-9 border shadow" style={{ width: "100%" }}> */}
      <div>
        <div className="px-4 mb-3">
          <Link to={"../initiate-escrow"}>
            <GeneralBtnStyle1 text="New Transaction" />
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
            {TransactionData.mini_transaction.map((mini) => {
              return <RecentTransactionTableData {...mini} key={mini.id} />;
            })}
          </tbody>
        </table>
        <div className="p-4">
          <GeneralBtn
            text={[`View more`]}
            styles={`GeneralBtnStyle1 btn all-btn text-white`}
          />
        </div>
      </div>
    </div>
  );
};

// AdminRecentTransactionsCard
export const AdminRecentTransactionsCard = () => {
  return (
    <>
      <div className="pt-4 col-lg-9 col-md-6 col-sm-12 shadow-sm rounded-2">
        <Table className="">
          <thead className="text-center">
            <tr>
              <th>Transaction ID</th>
              <th>Buyer Name</th>
              <th>Seller Name</th>
              <th className="">Products</th>
              <th className="small-hide">Date</th>
              <th>Status</th>
              <th className="small-hide">...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" text-center">4rsGDrb4rP3</td>
              <td className="text-center">Jacob Jones</td>
              <td className="text-center">Guy Hawkins</td>
              <td className="text-center small-hide">35 cartons of biscuit</td>
              <td className="text-center small-hide">16-08-22</td>
              <td className="d-flex justify-content-center align-items-center">
                <Notifications text={`Completed`} styles={`completed`} />
              </td>
              <td className="text-center small-hide text-muted">View</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
