import { AnalyticsCard } from "../components/CardComponents/UsersCards";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  CompletedTransactionIcon,
  TotalUsersIcon,
  OpenTicketsIcon,
  ClosedTicketsIcon,
} from "../components/IconComponent/AdminDashboardIcons";
import { UserDashboardNavbar } from "../components/NavbarComponents/TopNavbars";

const AdminDashboard = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-sm-12 px-0"></div>

      <div className="col-lg-9 col-sm-12">
        <div className="mt-3 pe-lg-5">
          <UserDashboardNavbar />
        </div>
        <div className="mx-auto w-100 px-3 pe-lg-5 ps-lg-0 mt-5">
          <div className="row gx-lg-3 justify-content-between align-items-center mt-5 ps-sm-2">
            <AnalyticsCard
              value="1000"
              text="New Users"
              BigIcon={<TotalUsersIcon />}
              SmallIcon={<ArrowUpIcon />}
              change="15% More"
            />
            <AnalyticsCard
              value="300"
              text="Completed Transactions"
              BigIcon={<CompletedTransactionIcon />}
              SmallIcon={<ArrowUpIcon />}
              change="5% More"
            />
            <AnalyticsCard
              value="500,000"
              text="Total Profits"
              BigIcon={<CompletedTransactionIcon />}
              SmallIcon={<ArrowDownIcon />}
              change="5% Less"
            />
          </div>
          <div className="row gx-lg-3 justify-content-between align-items-center mt-5 ps-sm-2">
            <div>
            <AnalyticsCard
              value="100"
              text="Open Conflicts"
              BigIcon={<OpenTicketsIcon />}
            />
            <AnalyticsCard
              value="350"
              text="Closed Conflicts"
              BigIcon={<ClosedTicketsIcon />}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
