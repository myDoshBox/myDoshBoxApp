import React from "react";
import { NotificationCard } from "../../../components/TableComponents/TransactionTable";
import usersData from "../../../data/usersData.json";
import UsersSideNav from "../../../components/NavbarComponents/UsersSideNav";
import { FilterButton } from "../../../components/ButtonsComponent/MiscBtns";
import { PaginationBar } from "../../../components/PaginationComponent";

const NotifictionPage = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <Notification />
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
        <div className="">
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
