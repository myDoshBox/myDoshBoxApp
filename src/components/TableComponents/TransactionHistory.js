import React from "react";

const TransactionHistory = (props) => {
  const { trans_id, buyer_name, seller_name, products, date, status, view } =
    props;
  return (
    <>
      <tr>
        <td className="p-4">{trans_id}</td>
        <td className="p-4">{buyer_name}</td>
        <td className="p-4">{seller_name}</td>
        <td className="p-4">{products}</td>
        <td className="p-4">{date}</td>
        <td className="p-4">{status}</td>
        <td className="p-4">{view}</td>
      </tr>
    </>
  );
};

const TransHis = (props) => {
  const { trans_id, buyer_name, seller_name, products, date, status, view } =
    props;
  return (
    <>
      <tr>
        {/* <th scope="row">1</th> */}
        <td>{trans_id}</td>
        {/* <td>Otto</td>
							<td>@mdo</td> */}
      </tr>
      <tr>
        {/* <th scope="row">2</th> */}
        <td>{buyer_name}</td>
        {/* <td>Thornton</td>
							<td>@fat</td> */}
      </tr>
      <tr>
        {/* <th scope="row">3</th> */}
        {/* <td colspan="2">Larry the Bird</td> */}
        <td>{seller_name}</td>
      </tr>
      <tr>
        {/* <th scope="row">3</th> */}
        {/* <td colspan="2">Larry the Bird</td> */}
        <td>{products}</td>
      </tr>
      <tr>
        {/* <th scope="row">3</th> */}
        {/* <td colspan="2">Larry the Bird</td> */}
        <td>{date}</td>
      </tr>
      <tr>
        {/* <th scope="row">3</th> */}
        {/* <td colspan="2">Larry the Bird</td> */}
        <td>{status}</td>
      </tr>
      <tr>
        {/* <th scope="row">3</th> */}
        {/* <td colspan="2">Larry the Bird</td> */}
        <td>{view}</td>
      </tr>
    </>
  );
};

export default TransactionHistory;
