import React from "react";
import { MiniProfileCard } from "../components/CardComponents/UsersCards";
import { UserDashboardCardsTwo } from "../components/CardComponents/UsersCards";
import {
  InitiateTransactionIcon,
  SettledTransactionIcon,
  CustomerCareIcon,
  InitiateDisputeIcon,
} from "../components/IconComponent/UserdashboardIcons";
import { LearnMoreCard } from "../components/CardComponents/InfoCards";
import UsersSideNav from "../components/NavbarComponents/UsersSideNav";

const UserDashboardPage = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-md-4">
          <UsersSideNav />
        </div>
        <div className="col-md-8">
          <UserDashboard />
        </div>
      </div>
    </div>
  );
};

const UserDashboard = () => {
  return (
    <div className="row pt-5">
      <div className="col-md-4">
        <MiniProfileCard />
      </div>
      <div className="col-md-4 col-sm-12">
        <UserDashboardCardsTwo
          text={`Initiate
Transaction`}
          icon={<InitiateTransactionIcon />}
        />
        <UserDashboardCardsTwo
          text={`Chat a customer care`}
          icon={<CustomerCareIcon />}
        />
      </div>
      <div className="col-md-4 col-sm-12">
        <UserDashboardCardsTwo
          text={`Settled Transactions`}
          icon={<SettledTransactionIcon />}
        />
        <UserDashboardCardsTwo
          text={`Initiate
Dispute`}
          icon={<InitiateDisputeIcon />}
        />
        {/* <LearnMoreCard /> */}
      </div>
    </div>
  );
};

export default UserDashboardPage;
