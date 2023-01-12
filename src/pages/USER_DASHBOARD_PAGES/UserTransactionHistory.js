import UsersSideNav from "../../components/NavbarComponents/UsersSideNav";
import { Notifications } from "../../components/NotificationComponent/NotificationComponents";
import { GeneralBtnStyle1 } from "../../components/ButtonsComponent/Button";
import TransactionData from "../../data/dummyData/transactionData.json";
import { PaginationBar } from "../../components/PaginationComponent";

const UserTransactionHistory = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <UsersSideNav />
        </div>

        <div className="col-lg-9 col-sm-12 mt-5">
          <RecentTransactionTable />
        </div>
      </div>
    </div>
  );
};

const RecentTransactionTable = () => {
  return (
    <div className="border shadow p-3" style={{ width: "100%" }}>
      {/* <div className="col-lg-9 border shadow" style={{ width: "100%" }}> */}
      <div>
        <div className="px-4 mb-3">
          <GeneralBtnStyle1 text="New Transaction" />
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
            {TransactionData.user_recent_transaction.map((history) => {
              return (
                <RecentTransactionTableData {...history} key={history.id} />
              );
            })}
          </tbody>
        </table>
        <PaginationBar />
      </div>
    </div>
  );
};

const RecentTransactionTableData = (props) => {
  const { product, price, date, status_name, status_style } = props;
  return (
    <>
      <tr className="text-center border-bottom">
        <td className="p-3">{product}</td>
        <td className="p-3">N{price}</td>
        <td className="p-3">{date}</td>
        <td className="p-3 d-flex justify-content-center align-items-center">
          <Notifications text={status_name} styles={status_style} />
        </td>
      </tr>
    </>
  );
};

export default UserTransactionHistory;
