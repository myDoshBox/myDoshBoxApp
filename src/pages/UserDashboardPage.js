import React from "react";
import { MiniProfileCard } from "../components/CardComponents/UsersCards";
import { UserDashboardCards } from "../components/CardComponents/UsersCards";
import {
  InitiateTransactionIcon,
  SettledTransactionIcon,
  CustomerCareIcon,
  InitiateDisputeIcon,
} from "../components/IconComponent/UserdashboardIcons";
import { LearnMoreCard } from "../components/CardComponents/InfoCards";
import UsersSideNav from "../components/NavbarComponents/UsersSideNav";
import { MiniDisputesCard } from "../components/CardComponents/ConflictIssuesCards";
import { AllConflictsTable } from "../components/TableComponents/ConflictsTable";

const UserDashboardPage = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-md-3">
          <UsersSideNav />
        </div>
        <div className="col-md-9">
          <UserDashboard />
        </div>
      </div>
    </div>
  );
};

const UserDashboard = () => {
  return (
    <div className="row pt-5">
      <div className="col-md-4 d-none d-md-block">
        <MiniProfileCard />
      </div>
      <div className="col-md-8 col-sm-12">
        <div className="col-12 row">
          <div className="col-6">
            <UserDashboardCards
              text={`Initiate
Transaction`}
              icon={<InitiateTransactionIcon />}
            />
          </div>
          <div className="col-6">
            <UserDashboardCards
              text={`Settled Transactions`}
              icon={<SettledTransactionIcon />}
            />
          </div>
        </div>
        <div className="col-12 row">
          <div className="col-6">
            <UserDashboardCards
              text={`Initiate
Transaction`}
              icon={<InitiateTransactionIcon />}
            />
          </div>
          <div className="col-6">
            <UserDashboardCards
              text={`Settled Transactions`}
              icon={<SettledTransactionIcon />}
            />
          </div>
        </div>
        <div className="col-12">
          <LearnMoreCard />
        </div>
      </div>
      <div>
        <MiniTransaction />
      </div>
    </div>
  );
};

const MiniTransaction = () => {
  return (
    <div>
      <div className="row container">
        <div className="col-md-7 mt-5">
          <AllConflictsTable />
        </div>
        <div className="mt-5 pb-5 col-md-5">
          <div>
            <MiniDisputesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
