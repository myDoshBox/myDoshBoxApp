// AnalyticsNewUsersCard {Done}
// UserInflowCard {Postponed as it is a graph}
// MiniUsersCard
// AllUsersCard
// UserProfileCard {Done}
// MiniProfileCard
// TotalUsersCard {Done}
// UserTransactionsCard {Done}
// ContactCustomerCareCard {Done}
// LogoutCard {Done}

import { ArrowDownIcon, ArrowUpIcon, CompletedTransactionIcon, TotalUsersIcon } from "../IconComponent/AdminDashboardIcons";
import { BigLogoutIcon, CameraIcon, CompletedDealsIcon, CustomerCareIcon, RatingIcon } from "../IconComponent/UserdashboardIcons";
import Avatar from '../../assets/images/Avatar.jpg'
import { EditProfileButton } from "../ButtonsComponent/EditButtons";

export const AnalyticsNewUsersCard = () => {
  return (
    <div className="AnalyticsNewUsersCard bg-white rounded-3 px-3">
      <div className="text-center"><TotalUsersIcon width="100" height="100"/></div>
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

export const  TotalUsersCard= () => {
  return (
    <div className="d-flex align-items-center TotalUsersCard bg-white rounded-3">
      <div className="d-flex align-items-center ms-3">
      <div><TotalUsersIcon width="60" height="60" className="mx-3"/></div>
      <div>
        <p>10000</p>
        <p className="TotalUsersCardText">TOTAL USERS</p>
      </div>
      </div>
      <p className="small text-end position-absolute">
        <span>
          <ArrowUpIcon width="11" height="12" />
        </span>
        5% More than last month
      </p>
    </div>
  );
}

export const UserTransactionsCard = () => {
  return (
    <div className="d-flex align-items-center TotalUsersCard bg-white rounded-3">
      <div className="d-flex align-items-center ms-3">
      <div><CompletedTransactionIcon width="60" height="60" className="mx-3"/></div>
      <div>
        <p>1000</p>
        <p className="TotalUsersCardText">TRANSACTIONS COMPLETED</p>
      </div>
      </div>
      <p className="small text-end position-absolute">
        <span>
          <ArrowDownIcon width="11" height="12" />
        </span>
        5% Less than last month
      </p>
    </div>
  );
}

export const ContactCustomerCareCard = () => {
  return (
    <div className="initiate-transaction-card d-flex align-items-center p-3 ">
    <CustomerCareIcon width="60" height="60" className="ms-3"/>

    <p className="ms-3">Chat a Customer Care</p>
  </div>
  );
}

export const LogoutCard = () => {
  return (
    <div className="LogoutCard initiate-transaction-card d-flex align-items-center p-3 ">
      <BigLogoutIcon width="60" height="60" className="ms-3" />

    <p className="ms-3 bg-red">Logout</p>
  </div>
  );
}

export const UserProfileCard = () => {
  return (
    <div className="UserProfileCard px-3 pt-2 pb-4 bg-white rounded-3">
      <div className="text-center">
      <img src={Avatar} alt="User Avatar" className=""/>
      <CameraIcon width="20" height="18" className="position-absolute UserProfileCardCameraIcon pe-auto"/>
      <p>Olasunkanmi Idris</p>
      <p>+234 801 234 5678</p>
      <p>sunkanmiidris@gmail.com</p>
      </div>
      <div className="border-top border-bottom px-4 py-3 mt-4">
        <div><CompletedDealsIcon width="30" height="30"/> 100 deals completed</div>
        <div className="mt-3">
          <RatingIcon width="17" height="18"  className="RatingIcon mx-1"/>
          <RatingIcon width="17" height="18"  className="RatingIcon me-1"/>
          <RatingIcon width="17" height="18"  className="RatingIcon me-1"/>
          <RatingIcon width="17" height="18"  className="RatingIcon me-1"/>
          <RatingIcon width="17" height="18" className="RatingIcon me-2"/>
          0.0 rating</div>
      </div>
      <div className="text-end mt-5"><EditProfileButton/></div>
    </div>
  );
}