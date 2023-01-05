import React from "react";
import transaction from "../data/dummyData/transactionData.json";
import { TransactionDetails } from "../components/CardComponents/TransactionDetails";
import { GeneralBtn } from "../components/ButtonsComponent/GenandAuthBtn";
import {
  BackIcon,
  NextIcon,
} from "../components/IconComponent/NavigationAndViewIcon";

const TransactionAgreedPage = () => {
  return (
    <div>
      <TransactionAgreed />
    </div>
  );
};

// const TransactionAgreed = () => {
//   return (
//     <div className="row">
//       <div className="card rounded-0 border-0 shadow rounded-1 col-md-12 col-sm-12 mt-4 p-4">
//         <div className="card-body mx-auto">
//           {transaction.transaction_agreed.map((transaction_agreed) => {
//             return (
//               <div className="" key={transaction_agreed.id}>
//                 <TransactionDetails {...transaction_agreed} />
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </div>
//   );
// };

const TransactionAgreed = () => {
  return (
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <TransactionDetails
          heading={`Transaction Agreed`}
          sub_text={`The details of this transaction has been viewed and agreed to buy the seller`}
          email={`Opeyemi Andrewson`}
          id={`AXSQWEDSC`}
          description={`AXSQWEDSC`}
          quality={`30`}
          price={`N 120,000`}
          date={`14 Aug 2022`}
          total={`N3,600,000`}
          alert={`By clicking proceed you are hereby accepting the terms and conditions of the buyer as stated above`}
          leftBtn={
            <GeneralBtn
              text="Back"
              styles="GeneralBtnStyle1 btn all-btn text-white"
              icon={<BackIcon />}
            />
          }
          rightBtn={
            <GeneralBtn
              text="Proceed"
              styles="GeneralBtnStyle1 btn all-btn text-white"
              icon={<NextIcon />}
            />
          }
        />
      </div>
    </div>
  );
};

export default TransactionAgreedPage;
