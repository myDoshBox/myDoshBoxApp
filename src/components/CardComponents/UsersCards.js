// AnalyticsNewUsersCard {Done}
// UserInflowCard {Postponed as it is a graph}
// MiniUsersCard {Done}
// AllUsersCard  {Done}
// UserProfileCard {Done}
// MiniProfileCard {Done}
// TotalUsersCard {Done}
// UserTransactionsCard {Done}
// ContactCustomerCareCard {Done}
// LogoutCard {Done}

import {
  ArrowDownIcon,
  ArrowUpIcon,
  CompletedTransactionIcon,
  TotalUsersIcon,
} from "../IconComponent/AdminDashboardIcons";
import {
  BigLogoutIcon,
  CameraIcon,
  CompletedDealsIcon,
  CustomerCareIcon,
  RatingIcon,
} from "../IconComponent/UserdashboardIcons";
import Avatar from "../../assets/images/Avatar.jpg";
import { EditProfileButton } from "../ButtonsComponent/EditButtons";
import { ViewMoreButton } from "../ButtonsComponent/NavigationAndViewButtons";
import Table from "react-bootstrap/Table";
import { PaginationBar } from "../PaginationComponent";
import { FilterButton } from "../ButtonsComponent/OtherButtons";

export const AnalyticsNewUsersCard = () => {
  return (
    <div className="AnalyticsNewUsersCard bg-white rounded-3 px-3">
      <div className="text-center">
        <TotalUsersIcon width="100" height="100" />
      </div>
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
};

export const TotalUsersCard = () => {
  return (
    <div className="d-flex align-items-center TotalUsersCard bg-white rounded-3">
      <div className="d-flex align-items-center ms-3">
        <div>
          <TotalUsersIcon width="60" height="60" className="mx-3" />
        </div>
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
};

export const UserTransactionsCard = () => {
  return (
    <div className="d-flex align-items-center TotalUsersCard bg-white rounded-3">
      <div className="d-flex align-items-center ms-3">
        <div>
          <CompletedTransactionIcon width="60" height="60" className="mx-3" />
        </div>
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
};

export const ContactCustomerCareCard = () => {
  return (
    <div className="initiate-transaction-card d-flex align-items-center p-3 ">
      <CustomerCareIcon width="60" height="60" className="ms-3" />

      <p className="ms-3">Chat a Customer Care</p>
    </div>
  );
};

export const LogoutCard = () => {
  return (
    <div className="LogoutCard initiate-transaction-card d-flex align-items-center p-3 ">
      <BigLogoutIcon width="60" height="60" className="ms-3" />

      <p className="ms-3 bg-red">Logout</p>
    </div>
  );
};

export const MiniProfileCard = () => {
  return (
    <div className="MiniProfileCard px-3 pt-2 pb-4 bg-white rounded-3">
      <div className="text-center">
        <img src={Avatar} alt="User Avatar" className="rounded-circle" />
        <CameraIcon
          width="20"
          height="18"
          className="position-absolute MiniProfileCardCameraIcon pe-auto"
        />
        <p>Olasunkanmi Idris</p>
        <p>+234 801 234 5678</p>
        <p>sunkanmiidris@gmail.com</p>
      </div>
      <div className="border-top border-bottom px-4 py-3 mt-4">
        <div>
          <CompletedDealsIcon width="30" height="30" /> 100 deals completed
        </div>
        <div className="mt-3">
          <RatingIcon width="17" height="18" className="RatingIcon mx-1" />
          <RatingIcon width="17" height="18" className="RatingIcon me-1" />
          <RatingIcon width="17" height="18" className="RatingIcon me-1" />
          <RatingIcon width="17" height="18" className="RatingIcon me-1" />
          <RatingIcon width="17" height="18" className="RatingIcon me-2" />
          0.0 rating
        </div>
      </div>
      <div className="text-end mt-5">
        <EditProfileButton />
      </div>
    </div>
  );
};

export const MiniUsersCard = () => {
  return (
    <div className="bg-white rounded-3 p-3 MiniUsersCard">
      <p className="border-bottom mb-2">All Users</p>
      <Table className="text-center">
        <thead>
          <tr>
            <th>Users ID</th>
            <th>Name</th>
            <th>Transactions Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>45453</td>
            <td>Guy Hawkins</td>
            <td>1245</td>
          </tr>
          <tr>
            <td>45453</td>
            <td>Guy Hawkins</td>
            <td>1245</td>
          </tr>
          <tr>
            <td>45453</td>
            <td>Guy Hawkins</td>
            <td>1245</td>
          </tr>
          <tr>
            <td>45453</td>
            <td>Guy Hawkins</td>
            <td>1245</td>
          </tr>
          <tr>
            <td>45453</td>
            <td>Guy Hawkins</td>
            <td>1245</td>
          </tr>
          <tr>
            <td>45453</td>
            <td>Guy Hawkins</td>
            <td>1245</td>
          </tr>
          <tr>
            <td>45453</td>
            <td>Guy Hawkins</td>
            <td>1245</td>
          </tr>
        </tbody>
      </Table>
      <div className="text-end mt-3">
        <ViewMoreButton />
      </div>
    </div>
  );
};

export const AllUsersCard = () => {
  return (
    <div
      aria-label="all users page"
      className="AllUsersCard px-3 bg-white rounded-3 w-100"
    >
      <nav
        aria-label="page filter"
        className="text-end NotificationCardHeader border-0 mb-2"
      >
        <FilterButton />
      </nav>
      <table className="w-100 text-center">
        {/* Table Header start */}
        <tr className="border-bottom">
          <th className="lg-view pb-3">User</th>
          <th className="pb-lg-3 pb-2">User ID</th>
          <th className="pb-lg-3 pb-2">Name</th>
          <th className="pb-lg-3 pb-2">Phone</th>
          <th className="pb-lg-3 pb-2">Email</th>
          <th className="pb-lg-3 pb-2 lg-view">Address</th>
          <th className="pb-lg-3 pb-2">Action</th>
        </tr>
        {/* Table Header end */}
        <tr className="border-bottom">
          <td className="py-3 lg-view">
            <img
              src={Avatar}
              alt="customer"
              className=""
              aria-label="customer"
            />
          </td>
          <td aria-label="customer id" className="py-md-3 py-2">
            75638
          </td>
          <td aria-label="customer name" className="py-md-3 py-2">
            Jacob Jones
          </td>
          <td aria-label="customer phone number" className="py-md-3 py-2">
            (239) 555-0108
          </td>
          <td aria-label="customer email" className="py-md-3 py-2">
            tim.jennings@example.com
          </td>
          <td
            aria-label="customer address"
            className="text-start py-md-3 py-2 lg-view"
          >
            2715 Ash Dr. San Jose, South Dakota 83475
          </td>
          <td className="py-md-3 py-2 lg-view">...</td>
          <td className="py-md-3 py-2 d-lg-none view">View</td>
        </tr>
        <tr className="border-bottom">
          <td className="py-3 lg-view">
            <img
              src={Avatar}
              alt="customer"
              className=""
              aria-label="customer"
            />
          </td>
          <td aria-label="customer id" className="py-md-3 py-2">
            75638
          </td>
          <td aria-label="customer name" className="py-md-3 py-2">
            Jacob Jones
          </td>
          <td aria-label="customer phone number" className="py-md-3 py-2">
            (239) 555-0108
          </td>
          <td aria-label="customer email" className="py-md-3 py-2">
            tim.jennings@example.com
          </td>
          <td
            aria-label="customer address"
            className="text-start py-md-3 py-2 lg-view"
          >
            2715 Ash Dr. San Jose, South Dakota 83475
          </td>
          <td className="py-md-3 py-2 lg-view">...</td>
          <td className="py-md-3 py-2 d-lg-none view">View</td>
        </tr>
        <tr className="border-bottom">
          <td className="py-3 lg-view">
            <img
              src={Avatar}
              alt="customer"
              className=""
              aria-label="customer"
            />
          </td>
          <td aria-label="customer id" className="py-md-3 py-2">
            75638
          </td>
          <td aria-label="customer name" className="py-md-3 py-2">
            Jacob Jones
          </td>
          <td aria-label="customer phone number" className="py-md-3 py-2">
            (239) 555-0108
          </td>
          <td aria-label="customer email" className="py-md-3 py-2">
            tim.jennings@example.com
          </td>
          <td
            aria-label="customer address"
            className="text-start py-md-3 py-2 lg-view"
          >
            2715 Ash Dr. San Jose, South Dakota 83475
          </td>
          <td className="py-md-3 py-2 lg-view">...</td>
          <td className="py-md-3 py-2 d-lg-none view">View</td>
        </tr>
        <tr className="border-bottom">
          <td className="py-3 lg-view">
            <img
              src={Avatar}
              alt="customer"
              className=""
              aria-label="customer"
            />
          </td>
          <td aria-label="customer id" className="py-md-3 py-2">
            75638
          </td>
          <td aria-label="customer name" className="py-md-3 py-2">
            Jacob Jones
          </td>
          <td aria-label="customer phone number" className="py-md-3 py-2">
            (239) 555-0108
          </td>
          <td aria-label="customer email" className="py-md-3 py-2">
            tim.jennings@example.com
          </td>
          <td
            aria-label="customer address"
            className="text-start py-md-3 py-2 lg-view"
          >
            2715 Ash Dr. San Jose, South Dakota 83475
          </td>
          <td className="py-md-3 py-2 lg-view">...</td>
          <td className="py-md-3 py-2 d-lg-none view">View</td>
        </tr>
        <tr className="border-bottom">
          <td className="py-3 lg-view">
            <img
              src={Avatar}
              alt="customer"
              className=""
              aria-label="customer"
            />
          </td>
          <td aria-label="customer id" className="py-md-3 py-2">
            75638
          </td>
          <td aria-label="customer name" className="py-md-3 py-2">
            Jacob Jones
          </td>
          <td aria-label="customer phone number" className="py-md-3 py-2">
            (239) 555-0108
          </td>
          <td aria-label="customer email" className="py-md-3 py-2">
            tim.jennings@example.com
          </td>
          <td
            aria-label="customer address"
            className="text-start py-md-3 py-2 lg-view"
          >
            2715 Ash Dr. San Jose, South Dakota 83475
          </td>
          <td className="py-md-3 py-2 lg-view">...</td>
          <td className="py-md-3 py-2 d-lg-none view">View</td>
        </tr>
        <tr className="border-bottom">
          <td className="py-3 lg-view">
            <img
              src={Avatar}
              alt="customer"
              className=""
              aria-label="customer"
            />
          </td>
          <td aria-label="customer id" className="py-md-3 py-2">
            75638
          </td>
          <td aria-label="customer name" className="py-md-3 py-2">
            Jacob Jones
          </td>
          <td aria-label="customer phone number" className="py-md-3 py-2">
            (239) 555-0108
          </td>
          <td aria-label="customer email" className="py-md-3 py-2">
            tim.jennings@example.com
          </td>
          <td
            aria-label="customer address"
            className="text-start py-md-3 py-2 lg-view"
          >
            2715 Ash Dr. San Jose, South Dakota 83475
          </td>
          <td className="py-md-3 py-2 lg-view">...</td>
          <td className="py-md-3 py-2 d-lg-none view">View</td>
        </tr>
        <tr className="border-bottom">
          <td className="py-3 lg-view">
            <img
              src={Avatar}
              alt="customer"
              className=""
              aria-label="customer"
            />
          </td>
          <td aria-label="customer id" className="py-md-3 py-2">
            75638
          </td>
          <td aria-label="customer name" className="py-md-3 py-2">
            Jacob Jones
          </td>
          <td aria-label="customer phone number" className="py-md-3 py-2">
            (239) 555-0108
          </td>
          <td aria-label="customer email" className="py-md-3 py-2">
            tim.jennings@example.com
          </td>
          <td
            aria-label="customer address"
            className="text-start py-md-3 py-2 lg-view"
          >
            2715 Ash Dr. San Jose, South Dakota 83475
          </td>
          <td className="py-md-3 py-2 lg-view">...</td>
          <td className="py-md-3 py-2 d-lg-none view">View</td>
        </tr>
        <tr className="border-bottom">
          <td className="py-3 lg-view">
            <img
              src={Avatar}
              alt="customer"
              className=""
              aria-label="customer"
            />
          </td>
          <td aria-label="customer id" className="py-md-3 py-2">
            75638
          </td>
          <td aria-label="customer name" className="py-md-3 py-2">
            Jacob Jones
          </td>
          <td aria-label="customer phone number" className="py-md-3 py-2">
            (239) 555-0108
          </td>
          <td aria-label="customer email" className="py-md-3 py-2">
            tim.jennings@example.com
          </td>
          <td
            aria-label="customer address"
            className="text-start py-md-3 py-2 lg-view"
          >
            2715 Ash Dr. San Jose, South Dakota 83475
          </td>
          <td className="py-md-3 py-2 lg-view">...</td>
          <td className="py-md-3 py-2 d-lg-none view">View</td>
        </tr>
      </table>
      {/* Pagination Component Stays here */}
      <footer className="py-3" aria-label="page control">
        <PaginationBar />
      </footer>
    </div>
  );
};

export const UserProfileCard = () => {
  return (
    <div className="d-lg-flex align-items-center justify-content-center bg-white rounded-3 UserProfileCard px-3 pb-5 pt-3">
      <img src={Avatar} alt="Avatar" className="d-block mx-auto rounded-circle pb-3" />
      <div className="mx-auto ms-lg-5">
        <div className="w-100">
          <p className="text-uppercase UserProfileDetail  my-2">
            Personal Information
          </p>
          <table className="w-100">
            <tr className="text-start ">
              <td className="text-capitalize UserProfileDetail w-50">User ID :</td>
              <td aria-label="user id" className="w-50">12425</td>
            </tr>
            <tr className="text-start ">
              <td className="text-capitalize UserProfileDetail w-50">Full Name :</td>
              <td aria-label="user id" className="w-50">Olasunkanmi Idris</td>
            </tr>
            <tr className="text-start ">
              <td className="text-capitalize UserProfileDetail w-50">phone number :</td>
              <td aria-label="user id" className="w-50">+234 801 234 5678</td>
            </tr>
            <tr className="text-start ">
              <td className="text-capitalize UserProfileDetail w-50">Email :</td>
              <td aria-label="user id" className="w-50">sunkanmiidris@gmail.com</td>
            </tr>
            <tr className="text-start ">
              <td className="text-capitalize UserProfileDetail w-50">Address :</td>
              <td aria-label="user id" className="w-50">1901 Thornridge Cir. Shiloh, Hawaii 81063</td>
            </tr>
          </table>
        </div>
        <div className="w-100">
          <p className="text-uppercase UserProfileDetail my-2">Bank Information</p>
          <table className="w-100">
            <tr className="text-start ">
              <td className="text-capitalize UserProfileDetail w-50">Account number :</td>
              <td aria-label="user id" className="w-50">0456536668</td>
            </tr>
            <tr className="text-start">
              <td className="text-capitalize UserProfileDetail w-50">Account Name :</td>
              <td aria-label="user id" className="w-50">Olasunkanmi Idris</td>
            </tr>
            <tr className="text-start ">
              <td className="text-capitalize UserProfileDetail w-50">Bank Name :</td>
              <td aria-label="user id" className="w-50">Guaranty Trust Bank</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
