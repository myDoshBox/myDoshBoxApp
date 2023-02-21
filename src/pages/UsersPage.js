import React from "react";
import usersData from "../data/usersData.json";
import { UsersList } from "../components/TableComponents/UsersList";
import { UserDashboardNavbar } from "../components/NavbarComponents/TopNavbars";
import { PaginationBar } from "../components/PaginationComponent";

const UsersPage = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-9 col-sm-12">
          <UserDashboardNavbar />
          <div className="mt-5">
            <TopCustomers />
          </div>
        </div>
      </div>
    </div>
  );
};

const UsersTable = () => {
  return (
    <div>
      <div className="card mx-auto mt-5 p-3 shadow border-0">
        <div className="card-body p-0">
          {/* <h6 className="pb-3 m-0">Recent Transactions</h6> */}
          <table class="table">
            <thead>
              <tr>
                <th scope="col" className="opacity-50 d-none d-sm-table-cell">
                  Users
                </th>
                <th scope="col" className="opacity-50">
                  User Id
                </th>
                <th scope="col" className="opacity-50">
                  Name
                </th>
                <th scope="col" className="opacity-50">
                  Phone
                </th>
                <th scope="col" className="opacity-50 d-none d-sm-table-cell">
                  Email
                </th>
                <th scope="col" className="opacity-50  d-none d-sm-table-cell">
                  Address
                </th>
                <th scope="col" className="opacity-50">
                  View
                </th>
              </tr>
            </thead>
            <tbody>
              {usersData.UsersList.map((user_table) => {
                return <UsersList {...user_table} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="px-lg-5 py-4">
          <PaginationBar />
        </div>
      </div>
    </div>
  );
};

export const TopCustomers = () => {
  return (
    <div>
      <div className="card mx-auto mt-5 p-3 shadow border-0">
        <div className="card-body p-0">
          <h6 className="pb-3 m-0">Top Customer</h6>
          <table class="table">
            <thead>
              <tr>
                <th scope="col" className="opacity-50 d-none d-sm-table-cell">
                  Users
                </th>
                <th scope="col" className="opacity-50">
                  User Id
                </th>
                <th scope="col" className="opacity-50">
                  Name
                </th>
                <th scope="col" className="opacity-50">
                  Phone
                </th>
                <th scope="col" className="opacity-50 d-none d-sm-table-cell">
                  Email
                </th>
                <th scope="col" className="opacity-50  d-none d-sm-table-cell">
                  Address
                </th>
                <th scope="col" className="opacity-50">
                  View
                </th>
              </tr>
            </thead>
            <tbody>
              {usersData.TopCustomers.map((user_table) => {
                return <UsersList {...user_table} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
