import React from "react";
// import { ViewMoreButton } from "../components/ButtonsComponent/NavigationAndViewButtons";
import TransactionHistory from "../components/TableComponents/TransactionHistory";
import transactionData from "../data/dummyData/transactionData.json";

const Neutral_dashboard = () => {
  return (
    <div className="card w-75 mx-auto mt-4 p-4 shadow">
      <div className="card-body">
        <h3 className="pb-3">Recent Transactions</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="p-3">
                Transaction Id
              </th>
              <th scope="col" className="p-3">
                Buyer Name
              </th>
              <th scope="col" className="p-3">
                Seller Name
              </th>
              <th scope="col" className="p-3">
                Products
              </th>
              <th scope="col" className="p-3">
                Date
              </th>
              <th scope="col" className="p-3">
                Status
              </th>
              <th scope="col" className="p-3">
                view
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionData.recent_transactions.map((rec_trans) => {
              return <TransactionHistory {...rec_trans} />;
            })}
          </tbody>
        </table>

        <div className="d-flex justify-content-end pt-4">
          {/* <ViewMoreButton /> */}
          {/* <button className="btn btn-success">view more</button> */}
        </div>
      </div>
    </div>
  );
};

export default Neutral_dashboard;
