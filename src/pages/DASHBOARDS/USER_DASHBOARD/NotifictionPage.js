<<<<<<< HEAD
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
    <div className="row pe-lg-5">
      <div className="card mx-auto mt-4 p-4 shadow border-0">
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
        <div className="px-lg-5 py-4">
          <PaginationBar />
        </div>
      </div>
    </div>
  );
};

export default NotifictionPage;
=======
import React from "react";
import { NotificationCard } from "../../../components/TableComponents/TransactionTable";
import usersData from "../../../data/usersData.json";
import { FilterButton } from "../../../components/ButtonsComponent/GenandAuthBtn";
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
    <div className="row pe-lg-5">
      <div className="card mx-auto mt-4 p-4 shadow border-0">
        <div className="card-body d-flex justify-content-between pb-3">
          <h3 className="pb-1">Notifications</h3>
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
        <div className="px-lg-5 py-4">
          <PaginationBar />
        </div>
      </div>
    </div>
  );
};

export default NotifictionPage;
>>>>>>> 57570ddf3d7d1958b191034773c6d0fa98abffee
