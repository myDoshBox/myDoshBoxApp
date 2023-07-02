import React from "react";
import {
  Notifications,
  Styling,
} from "../NotificationComponent/NotificationComponents";
import { ViewBtn } from "../ButtonsComponent/NavigationAndViewButtons";
import TransactionData from "../../data/dummyData/transactionData.json";

const TransactionHistory = (props) => {
  const { trans_id, buyer_name, seller_name, products, date, status } = props;
  return (
    <>
      <tr>
        <td className="d-none d-md-table-cell text-small">{trans_id}</td>
        <td className="d-none d-sm-table-cell text-small">{buyer_name}</td>
        <td className="d-none d-lg-table-cell text-small">{seller_name}</td>
        <td className="text-small">{products}</td>
        <td className="text-small">{date}</td>
        <td className="text-small">
          <Notifications
            text={status}
            styles={`text-center  rounded-pill ${status}`}
          />
        </td>
        <td className="d-none d-sm-table-cell">
          <ViewBtn />
        </td>
      </tr>
    </>
  );
};

export const UserdashboardTransaction = () => {
  return (
    <div className="shadow-sm p-2" style={{ width: "100%" }}>
      <div>
        <table className="table transaction-table">
          <thead className="text-center">
            <h5 className="text-nowrap mt-3">Recent Transaction</h5>
            <tr>
              <th>Name</th>
              <th className="d-none d-lg-table-cell">Email</th>
              <th>Paid Date</th>
              <th>Paid Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {TransactionData.recent_transaction.map((trans) => {
              return <MiniTransaction {...trans} key={trans.id} />;
            })}
          </tbody>
        </table>
        {/* <div className="p-4 text-md-end d-none d-md-block">
          <Link to={"./transaction"}>
            <ViewMoreButton />
          </Link>
        </div> */}
        {/* <div className="text-center d-lg-none .d-xl-block">
          <Link to={"./transaction"}>
            <ViewMoreButton />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

const MiniTransaction = (props) => {
  const { name, email, paidDate, paidAmount, status, status_style } = props;
  return (
    <>
      <tr className="text-center border-bottom">
        <td className="p-md-3  text-small">{name}</td>
        <td className="p-md-3 d-none d-lg-table-cell text-small">{email}</td>
        <td className="p-md-3 text-small">{paidDate}</td>
        <td className="p-md-3 text-small">${paidAmount}</td>
        <td className="p-md-3 d-flex justify-content-center align-items-center text-small">
          <Styling text={status} styles={status_style} />
        </td>
        {/* <td className="p-md-3">{status}</td> */}
      </tr>
    </>
  );
};

// const TransHis = (props) => {
//   const { trans_id, buyer_name, seller_name, products, date, status, view } =
//     props;
//   return (
//     <>
//       <tr>
//         {/* <th scope="row">1</th> */}
//         <td>{trans_id}</td>
//         {/* <td>Otto</td>
// 							<td>@mdo</td> */}
//       </tr>
//       <tr>
//         {/* <th scope="row">2</th> */}
//         <td>{buyer_name}</td>
//         {/* <td>Thornton</td>
// 							<td>@fat</td> */}
//       </tr>
//       <tr>
//         {/* <th scope="row">3</th> */}
//         {/* <td colspan="2">Larry the Bird</td> */}
//         <td>{seller_name}</td>
//       </tr>
//       <tr>
//         {/* <th scope="row">3</th> */}
//         {/* <td colspan="2">Larry the Bird</td> */}
//         <td>{products}</td>
//       </tr>
//       <tr>
//         {/* <th scope="row">3</th> */}
//         {/* <td colspan="2">Larry the Bird</td> */}
//         <td>{date}</td>
//       </tr>
//       <tr>
//         {/* <th scope="row">3</th> */}
//         {/* <td colspan="2">Larry the Bird</td> */}
//         <td>{status}</td>
//       </tr>
//       <tr>
//         {/* <th scope="row">3</th> */}
//         {/* <td colspan="2">Larry the Bird</td> */}
//         <td>{view}</td>
//       </tr>
//     </>
//   );
// };

export default TransactionHistory;
