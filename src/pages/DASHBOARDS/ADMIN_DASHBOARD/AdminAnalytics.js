import { memo } from "react";
import {
  FinancialReport,
  ComplaintType,
  Target,
  UserInflow,
  Issues,
  LineSparkline,
} from "../../../components/CardComponents/Analytics";
// import { AnalyticsCard } from "../../../components/CardComponents/UsersCards";
import { AnalyticsCard } from "../../../components/CardComponents/UsersCards";

// import { UserDashboardNavbar } from "../components/NavbarComponents/TopNavbars";
import { UserDashboardNavbar } from "../../../components/NavbarComponents/TopNavbars";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TotalUsersIcon,
  CompletedTransactionIcon,
} from "../../../components/IconComponent/AdminDashboardIcons";

const AdminAnalytics = memo(() => {
  return (
    <section className="row">
      <div className="col-lg-3 col-sm-12 px-0"></div>
      <div className="col-lg-9 col-sm-12">
        <div className="me-3">
          <div className="mt-4 mb-0 mt-2">
            <UserDashboardNavbar />
          </div>
          <div className="row gx-lg-3 justify-content-between align-items-stretch mt-5 ps-sm-2">
            <AnalyticsCard
              value="1000"
              text="New Users"
              BigIcon={<TotalUsersIcon />}
              SmallIcon={<ArrowUpIcon />}
              change="15% More"
              ResponsiveWidth={`col-md-4`}
            />
            <AnalyticsCard
              value="300"
              text="Completed Transactions"
              BigIcon={<CompletedTransactionIcon />}
              SmallIcon={<ArrowUpIcon />}
              change="5% More"
              ResponsiveWidth={`col-md-4`}
            />
            <AnalyticsCard
              text="Total Profits"
              value="500,000"
              BigIcon={<LineSparkline />}
              SmallIcon={<ArrowDownIcon />}
              change="5% Less"
              ResponsiveWidth={`col-md-4`}
            />
          </div>
          <div className="gx-lg-3 mt-5 ps-sm-2">
            <FinancialReport />
          </div>
          <div className="row gx-lg-3 justify-content-between align-items-stretch mt-5 ps-sm-2">
            <Target />
          </div>
          <div className="row gx-lg-3 justify-content-between align-items-stretch mt-5 ps-sm-2">
            <AnalyticsCard
              text="Total Profits"
              value="N 2,456.789.45"
              BigIcon={<LineSparkline />}
              SmallIcon={<ArrowDownIcon />}
              change="5% Less"
              ResponsiveWidth={`col-md-4`}
            />
            <AnalyticsCard
              value="N 230,457"
              text="New Users"
              BigIcon={<TotalUsersIcon />}
              SmallIcon={<ArrowUpIcon />}
              change="15% More"
              ResponsiveWidth={`col-md-4`}
            />

            <AnalyticsCard
              text="Total Tribute"
              value="500,000"
              BigIcon={<LineSparkline />}
              SmallIcon={<ArrowDownIcon />}
              change="5% Less"
              ResponsiveWidth={`col-md-4`}
            />
          </div>
          <div className="row gx-lg-3 justify-content-between align-items-stretch mt-5 ps-sm-2">
            <ComplaintType style={`col-md-7`} />
            <Issues style={`col-md-5`} />
          </div>
          <div className="gx-lg-3 mt-5 ps-sm-2">
            <UserInflow />
          </div>
        </div>
      </div>
    </section>
  );
});

export default AdminAnalytics;
