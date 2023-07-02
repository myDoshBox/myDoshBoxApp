import React from "react";
// import { MiniProfileCard } from "../../../components/CardComponents/UsersCards";
import {
  UserDashboardCard2,
  OpenConflitCard,
} from "../../../components/CardComponents/UsersCards";
import {
  InitiateTransactionIcon,
  SettledTransactionIcon,
  // CustomerCareIcon,
  InitiateDisputeIcon,
} from "../../../components/IconComponent/UserdashboardIcons";
import { UserDashboardNavbar } from "../../../components/NavbarComponents/TopNavbars";
<<<<<<< HEAD
import { MiniRecentTransactionTable } from "../../../components/TableComponents/TransactionTable";
=======
import { RecentNotification } from "../../../components/NotificationComponent/NotificationComponents";
import { UserdashboardTransaction } from "../../../components/TableComponents/TransactionHistory";
import { RecentDispute } from "../../../components/CardComponents/TransactionDetails";
>>>>>>> 1683cd92a4954a1348caaf4bf29a983b951d3694

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
<<<<<<< HEAD
      <div className="col-lg-5 d-none d-md-block">
        <MiniProfileCard />
      </div>
      <div className="col-lg-7 col-sm-12">
=======
      <div className="col-lg-12 col-sm-12">
>>>>>>> 1683cd92a4954a1348caaf4bf29a983b951d3694
        <div className="row mb-3">
          <div className="col-sm-12 mb-4 mb-md-2 col-lg-6 mt-4 mt-lg-0">
            <UserDashboardCard2
              icon={<InitiateTransactionIcon />}
              text={`Initiate Transaction`}
              link={"initiate-escrow"}
            />
          </div>
          <div className="col-sm-12 mb-4 mb-md-2 col-lg-6">
            <UserDashboardCard2
              text={`Settled Transactions`}
              icon={<SettledTransactionIcon />}
              link={"transaction"}
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
              link={"initiate-dispute"}
            />
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
      </div>

      <div className="mt-5 mb-5">
        <MiniRecentTransactionTable />
      </div>
    </div>
  );
};

export default UserDashboardPage;
