import React from "react";
import { NotificationCard } from "../../../components/TableComponents/TransactionTable";
import usersData from "../../../data/usersData.json";
import { FilterButton } from "../../../components/ButtonsComponent/OtherButtons";
import { Pagination } from "../../../components/PaginationComponent";
import { UserDashboardNavbar } from "../../../components/NavbarComponents/TopNavbars";
import { useState } from "react";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(5);
  const [limit, setLimit] = useState(10);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const end = currentPage * limit;
  const start = end - limit;
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
          <Pagination
            total={total}
            limit={limit}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default NotifictionPage;
