import React from "react";
// import { ViewMoreButton } from "../components/ButtonsComponent/NavigationAndViewButtons";
import TransactionHistory from "../../components/TableComponents/TransactionHistory";
import transactionData from "../../data/dummyData/transactionData.json";
import { UserSidenav } from "../../components/NavbarComponents/SideNavbar";
import { DashboardConflictCards } from "../../components/CardComponents/TransactionDetails";
import {
  ClosedConflictIcon,
  OngoingConflictIcon,
  OpenConflictIcon,
} from "../../components/IconComponent/NeutralsDashboardIcons";
import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";
import NeutralsSideNav from "../../components/NavbarComponents/NeutralsSideNav";

const NeutralDashboard = () => {
  return (
    <div className="d-flex">
        <NeutralsSideNav />
      

      <div className="mx-auto w-100 px-3 px-lg-5">
        <div className="row gx-lg-3 justify-content-between align-items-center mt-5 ps-sm-2">
          <DashboardConflictCards
            value="100"
            text="Open Conflicts"
            icon={<OpenConflictIcon />}
          />
          <DashboardConflictCards
            value="75"
            text="Ongoing Conflicts"
            icon={<OngoingConflictIcon />}
          />
          <DashboardConflictCards
            value="250"
            text="Closed Conflicts"
            icon={<ClosedConflictIcon />}
          />
        </div>
        <div className="card mx-auto mt-4 p-3 shadow border-0">
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
                  <th scope="col" className="opacity-50">
                    ...
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactionData.recent_transactions.map((rec_trans) => {
                  return <TransactionHistory {...rec_trans} />;
                })}
              </tbody>
            </table>
            <div className="d-flex justify-content-end">
              <GeneralBtn
                text="View More"
                styles="GeneralBtnStyle1 btn all-btn text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeutralDashboard;
