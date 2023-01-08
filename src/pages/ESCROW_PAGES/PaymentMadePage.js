import React from "react";
import { TransactionDetails } from "../../components/CardComponents/TransactionDetails";
import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";
import {
  BackIcon,
  NextIcon,
} from "../../components/IconComponent/NavigationAndViewIcon";

const PaymentMadePage = () => {
  return (
    <div>
      <PaymentMade />
    </div>
  );
};

const PaymentMade = () => {
  return (
    <div className="row">
      <div className="">
        <TransactionDetails
          heading={`Payment Made`}
          sub_text={`Buyer Elland Aaronson has made payment into MyDoshBox account for this transaction`}
          email={`Opeyemi Andrewson`}
          id={`AXSQWEDSC`}
          description={`AXSQWEDSC`}
          quality={`30`}
          price={`N 120,000`}
          date={`14 Aug 2022`}
          total={`N3,600,000`}
          alert={` By clicking proceed you are hereby accepting the terms and conditions of the buyer as stated above`}
          leftBtn={
            <GeneralBtn
              text="Cancel Transaction"
              styles="CancelBtn btn all-btn text-white"
              icon={<BackIcon />}
            />
          }
          rightBtn={
            <GeneralBtn
              text="Delete  Product"
              styles="GeneralBtnStyle1 btn all-btn text-white"
              icon={<NextIcon />}
            />
          }
        />
      </div>
    </div>
  );
};

export default PaymentMadePage;
