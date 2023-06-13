import React from "react";
import { TransactionDetails } from "../../components/CardComponents/TransactionDetails";
import {
  BackIcon,
  NextIcon,
} from "../../components/IconComponent/NavigationAndViewIcon";
import { Link } from "react-router-dom";
import { UserDashboardNavbar } from "../../components/NavbarComponents/TopNavbars";
import { BackButton } from "../../components/ButtonsComponent/NavigationAndViewButtons";
import { ProceedButton } from "../../components/ButtonsComponent/TransactionButtons";

const TransactionSummaryPage = () => {
  return (
    <>
      <div className="contestPage">
        <div className="row">
          <div className="col-lg-3 col-sm-12"></div>

          <div className="col-lg-9 col-sm-12">
            <UserDashboardNavbar />
            <div className="mt-5 mb-5">
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
          sub_text={`Please Confirm the following transaction initiated by user Eland Aaronson`}
          email={`Opeyemi Andrewson`}
          id={`AXSQWEDSC`}
          description={`AXSQWEDSC`}
          quality={`30`}
          price={`N 120,000`}
          date={`14 Aug 2022`}
          total={`N3,600,000`}
          alert={` By clicking proceed you are hereby accepting the terms and conditions of the buyer as stated above`}
          leftBtn={
            <Link to={"../initiate-escrow"}>
              <BackButton />
            </Link>
          }
          rightBtn={
            <Link to={"../agreement"}>
              <ProceedButton />
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default TransactionSummaryPage;
