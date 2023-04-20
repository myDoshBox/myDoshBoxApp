import React from "react";
import { TransactionDetails } from "../../components/CardComponents/TransactionDetails";
import CustomBtn from "../../components/ButtonsComponent/GenandAuthBtn";
import {
  BackIcon,
  NextIcon,
} from "../../components/IconComponent/NavigationAndViewIcon";
import { UserDashboardNavbar } from "../../components/NavbarComponents/TopNavbars";

const TransactionSummaryPage = () => {
  return (
    <>
      <div className="contestPage">
        <div className="row">
          <div className="col-lg-3 col-sm-12"></div>

          <div className="col-lg-9 col-sm-12">
            <UserDashboardNavbar />
            <div className="mt-5">
              <TransactionSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TransactionSummary = () => {
  return (
    <div className="row">
      <div>
        <TransactionDetails
          heading={`Transaction Summary
`}
          sub_value={`Please Confirm the following transaction initiated by user Eland Aaronson`}
          email={`Opeyemi Andrewson`}
          id={`AXSQWEDSC`}
          description={`AXSQWEDSC`}
          quality={`30`}
          price={`N 120,000`}
          date={`14 Aug 2022`}
          total={`N3,600,000`}
          alert={` By clicking proceed you are hereby accepting the terms and conditions of the buyer as stated above`}
          leftBtn={
              <CustomBtn
                value="Back"
                styles="CancelBtn btn all-btn text-white"
                icon={<BackIcon />}
                to={"../initiate-escrow"}
              />
          }
          rightBtn={
              <CustomBtn
                value="Proceed"
                styles="GeneralBtnStyle1 btn all-btn text-white"
                icon={<NextIcon />}
                to={"../agreement"}
              />
          }
        />
      </div>
    </div>
  );
};

export default TransactionSummaryPage;
