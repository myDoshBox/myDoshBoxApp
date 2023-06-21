import React from "react";
import { Notifications } from "../NotificationComponent/NotificationComponents";
import { ViewBtn } from "../ButtonsComponent/NavigationAndViewButtons";

const TransactionHistory = (props) => {
  const { trans_id, buyer_name, seller_name, products, date, status } = props;
  return (
    <>
      <tr>
        <td className=" d-none d-md-table-cell text-small">{trans_id}</td>
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
