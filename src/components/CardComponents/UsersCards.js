// AnalyticsNewUsersCard 
// UserInflowCard
// MiniUsersCard
// AllUsersCard
// UserProfileCard
// MiniProfileCard
// TotalUsersCard
// UserTransactionsCard
// ContactCustomerCareCard
// LogoutCard

import { AdminUsersIcon, ArrowDownIcon } from "../IconComponent/AdminDashboardIcons";

export const AnalyticsNewUsersCard = () => {
  return (
    <div className="AnalyticsNewUsersCard bg-white rounded-3 px-3">
      <div className="text-center"><AdminUsersIcon width="100" height="100"/></div>
      <h3 className="">New Users</h3>
      <p className="">This Month</p>
      <p className="ms-1 fw-light">150</p>
      <p className="small text-end">
        <span>
          <ArrowDownIcon width="11" height="12" />
        </span>
        3.5% Less than last month
      </p>
    </div>
  );
}

export const TotalUsersCard = () => {
  return (
    <div className="TotalUsersCard bg-white rounded-3 px-3 s">
      <div className="d-flex align-items-center py-4 mb-2">
      <div><AdminUsersIcon width="60" height="60" className="mx-3"/></div>
      <div>
        <p>10000</p>
        <p>TOTAL USERS</p>
      </div>
      </div>
      <p className="small text-end">
        <span>
          <ArrowDownIcon width="11" height="12" />
        </span>
        5% More than last month
      </p>
    </div>
  );
}