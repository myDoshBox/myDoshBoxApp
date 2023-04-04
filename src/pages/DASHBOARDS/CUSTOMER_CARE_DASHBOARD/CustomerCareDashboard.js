import {
  SmallAdminRecentTransactions,
  SmallAdminTicketHistory,
} from "../../../components/TableComponents/AdminTicketHistory";
import { TopCustomers } from "./UsersPage";

import { UserDashboardNavbar } from "../../../components/NavbarComponents/TopNavbars";

const CustomerCareDashboardPage = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-lg-3 col-sm-12"></div>

        <div className="col-lg-9 col-sm-12">
          <UserDashboardNavbar />
          <div className="mt-5 center-card">
            <CustomerCareDashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomerCareDashboard = () => {
  return <></>;
};

export default CustomerCareDashboardPage;
