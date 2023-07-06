import React from "react";
// import { ViewMoreButton } from "../components/ButtonsComponent/NavigationAndViewButtons";
import TransactionHistory from "../../components/TableComponents/TransactionHistory";
import transactionData from "../../data/dummyData/transactionData.json";
import { DashboardConflictCards } from "../../components/CardComponents/TransactionDetails";
import {
  ClosedConflictIcon,
  OngoingConflictIcon,
  OpenConflictIcon,
} from "../../components/IconComponent/NeutralsDashboardIcons";
import { UserDashboardNavbar } from "../../components/NavbarComponents/TopNavbars";
import { Link } from "react-router-dom";
import { ViewMoreButton } from "../../components/ButtonsComponent/NavigationAndViewButtons";
import {
  ConflitCard,
  OpenConflictLineStyling,
  OngoingConflictLineStyling,
  CloseConflictLineStyling,
} from "../../components/CardComponents/UsersCards";
import { InitiateTransactionIcon } from "../../components/IconComponent/UserdashboardIcons";
import { RecentDispute } from "../../components/CardComponents/TransactionDetails";
import { UserdashboardTransaction } from "../../components/TableComponents/TransactionHistory";
import {
  TaskBoard,
  TaskCard,
} from "../../components/CardComponents/UsersCards";

const NeutralDashboard = () => {
  return (
    <div className="row" style={{ backgroundColor: "#F9F9FB" }}>
      <div className="col-lg-3 col-sm-12 px-0"></div>

      <div className="col-lg-9 col-sm-12">
        <div className="mt-3 pe-lg-5">
          <UserDashboardNavbar />
        </div>
        <div className="mx-auto w-100 px-3 pe-lg-5 ps-lg-0 mt-5">
          <div className="row gx-lg-3 justify-content-between align-items-center mt-5">
            <div className="col-lg-12 col-sm-12">
              <div className="row mb-3">
                <div className="col-lg-4 col-sm-12">
                  <ConflitCard
                    icon={<OpenConflictIcon />}
                    text={`Open Conflict`}
                    link={"open-conflicts"}
                    style={<OpenConflictLineStyling />}
                    styling={"openConflitBtnStyle"}
                    btnNumber={"19"}
                  />
                </div>
                <div className="col-lg-4 col-sm-12">
                  <ConflitCard
                    icon={<OngoingConflictIcon />}
                    text={`Ongoing Conflict`}
                    link={"ongoing-conflicts"}
                    style={<OngoingConflictLineStyling />}
                    styling={"ongoingConflitBtnStyle"}
                    btnNumber={"59"}
                  />
                </div>
                <div className="col-lg-4 col-sm-12">
                  <ConflitCard
                    icon={<ClosedConflictIcon />}
                    text={`Closed Conflict`}
                    link={"closed-conflicts"}
                    style={<CloseConflictLineStyling />}
                    styling={"closeConflitBtnStyle"}
                    btnNumber={"78"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <RecentDispute />
                </div>

                <div className="col-lg-8 col-sm-12">
                  <UserdashboardTransaction />
                </div>
              </div>
            </div>
          </div>
          <TaskBoard BoardName={"Recent Conflict Table"} itemsShown={6} />
        </div>
      </div>
    </div>
  );
};

export default NeutralDashboard;
