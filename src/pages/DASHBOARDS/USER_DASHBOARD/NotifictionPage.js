import React from "react";
import { NotificationCard } from "../../../components/TableComponents/TransactionTable";
import usersData from "../../../data/usersData.json";
import { FilterButton } from "../../../components/ButtonsComponent/MiscBtns";
import { PaginationBar } from "../../../components/PaginationComponent";
import { UserDashboardNavbar } from "../../../components/NavbarComponents/TopNavbars";

const NotifictionPage = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-9 col-sm-12">
          <UserDashboardNavbar />
          <div className="mt-3">
            <Notification />
          </div>
        </div>
      </div>
    </div>
  );
};

const Notification = () => {
  return (
    <div className="row">
      <div className="card col-md-10 col-sm-12 mx-auto mt-4 p-4 shadow border-0">
        <div className="card-body">
          <h3 className="pb-1">Notifications</h3>
        </div>
        <div className="d-flex justify-content-end pb-3">
          <FilterButton />
        </div>
        <div>
          {usersData.notificationData.map((notificationData) => {
            return (
              <div className="" key={notificationData.id}>
                <NotificationCard {...notificationData} />
              </div>
            );
          })}
        </div>
        <div className="p-5">
          <PaginationBar />
        </div>
      </div>
    </div>
  );
};

export default NotifictionPage;
