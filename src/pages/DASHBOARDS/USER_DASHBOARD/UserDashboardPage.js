import React from "react";
import { MiniProfileCard } from "../../../components/CardComponents/UsersCards";
import { UserDashboardCard2 } from "../../../components/CardComponents/UsersCards";
import {
  InitiateTransactionIcon,
  SettledTransactionIcon,
  // CustomerCareIcon,
  InitiateDisputeIcon,
} from "../../../components/IconComponent/UserdashboardIcons";
import { LearnMoreCard } from "../../../components/CardComponents/InfoCards";
import { UserDashboardNavbar } from "../../../components/NavbarComponents/TopNavbars";
import { MiniRecentTransactionTable } from "../../../components/TableComponents/TransactionTable";

const UserDashboardPage = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-9 col-sm-12">
          <UserDashboardNavbar />
          <div className="mt-5">
            <UserDashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

const UserDashboard = () => {
  return (
    <div className="row">
      <div className="col-lg-5 d-none d-md-block">
        <MiniProfileCard />
      </div>
      <div className="col-lg-7 col-sm-12">
        <div className="row mb-3">
          <div className="col-sm-12 mb-4 mb-md-2 col-lg-6 mt-4 mt-lg-0">
            <UserDashboardCard2
              icon={<InitiateTransactionIcon />}
              text={`Initiate Transaction`}
              link={"../initiate-escrow"}
            />
          </div>
          <div className="col-sm-12 mb-4 mb-md-2 col-lg-6">
            <UserDashboardCard2
              text={`Settled Transactions`}
              icon={<SettledTransactionIcon />}
              link={"../transaction"}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 mb-4 mb-md-2 col-lg-6">
            <UserDashboardCard2
              text={`Initiate Transaction`}
              icon={<InitiateTransactionIcon />}
            />
          </div>
          <div className="col-sm-12 mb-3 mb-md-2 col-lg-6">
            <UserDashboardCard2
              text={`Initiate Disputes`}
              icon={<InitiateDisputeIcon />}
              link={"../initiate-dispute"}
            />
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <MiniRecentTransactionTable />
      </div>
    </div>
  );
};

export default UserDashboardPage;
