import React from "react";

export const PricingTable = () => {
  return (
    <>
      <div className="col-6">
        <h4>Low Fees</h4>
        <p className="text-wrap">
          The low cost of our secure auto escrow service is either paid by the
          Buyer, the Seller, or shared between them.
        </p>
      </div>
      {/* table Section starts */}
      <section className="col-8 ">
        <table className=" table table-bordered border-white  w-75 ">
          <thead className="">
            <tr className="BgColor ">
              <th className="text-white p-4 text-center">Transaction Amount</th>
              <th className="text-white col-7 p-4 text-center">Doshbox Fess</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 text-center">N1000-N10,000</td>
              <td className="p-3 text-center">N1000-N10,000</td>
            </tr>
            <tr className="TableRowColor">
              <td className="p-3 text-center">N1000-N10,000</td>
              <td className="p-3 text-center">N1000-N10,000</td>
            </tr>
            <tr>
              <td className="p-3 text-center">N1000-N10,000</td>
              <td className="p-3 text-center">N1000-N10,000</td>
            </tr>
            <tr className="TableRowColor">
              <td className="p-3 text-center">N1000-N10,000</td>
              <td className="p-3 text-center">N1000-N10,000</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};
