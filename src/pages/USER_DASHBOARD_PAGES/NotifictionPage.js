import React from "react";
import { NotificationCard } from "../../components/TableComponents/TransactionTable";
import usersData from "../../data/usersData.json";

const NotifictionPage = () => {
  return (
    <div>
      <Notification />
    </div>
  );
};

const Notification = () => {
  return (
    <div className="row">
      <div className="card col-md-10 col-sm-12 mx-auto mt-4 p-4 shadow border-0">
        <div className="card-body">
          <h3 className="pb-3">Notifications</h3>
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
      </div>
    </div>
  );
};

export default NotifictionPage;
