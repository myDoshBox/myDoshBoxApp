import React from "react";
import usersData from "../data/usersData.json";
import { UsersList } from "../components/TableComponents/UsersList";
import { UserDashboardNavbar } from "../components/NavbarComponents/TopNavbars";

const UsersPage = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-lg-3">
          <UserDashboardNavbar />
        </div>
        <div className="col-lg-9 col-sm-12">
          <div className="mt-5">
            <UsersTable />
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
          <h6 className="pb-3 m-0">Recent Transactions</h6>
          <table class="table">
            <thead>
              <tr>
                <th scope="col" className="opacity-50 d-none d-md-table-cell">
                  Transaction Id
                </th>
                <th scope="col" className="opacity-50 d-none d-sm-table-cell">
                  Buyer
                </th>
                <th scope="col" className="opacity-50 d-none d-lg-table-cell">
                  Seller
                </th>
                <th scope="col" className="opacity-50">
                  Products
                </th>
                <th scope="col" className="opacity-50">
                  Date
                </th>
                <th scope="col" className="opacity-50">
                  Status
                </th>
                <th scope="col" className="opacity-50 d-none d-sm-table-cell">
                  ...
                </th>
              </tr>
            </thead>
            <tbody>
              {usersData.users_table.map((user_table) => {
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
