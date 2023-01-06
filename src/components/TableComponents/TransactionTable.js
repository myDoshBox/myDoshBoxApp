import Sample_User from "../../images/Sample User Image.png";
import { PaginationBar } from "../PaginationComponent";
import { FilterButton } from "../ButtonsComponent/OtherButtons";
import { GeneralBtnStyle1, GeneralBtnStyle2 } from "../Button";
import { CompletedNotification } from "../NotificationComponent/NotificationComponents";

export const NotificationCard = () => {
  return (
    <table className=" NotificationCardWrapper">
      <button
        aria-label="Leave Page"
        className="border-0 bg-transparent pt-2 d-lg-none"
      >
        <span className="NotificationCardBackBtn">Back</span>
      </button>
      <thead className="NotificationCardHeader d-flex justify-content-between align-items-center px-lg-5 px-2 pt-2 pb-2">
        <h1 className="">Notifications</h1>
        <FilterButton />
      </thead>
      <tbody>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
          <div className="d-flex justify-content-lg-between align-items-center d-inline">
            <img src={Sample_User} alt="SampleUserImg" className="me-3" />
            <h6 className="d-none d-lg-block">Opeyemi Andrewson</h6>
          </div>
          <div className="d-inline">
            <p>
              Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the
              product 100Gb Laptop
            </p>
            <small className="d-block d-lg-none">20s ago</small>
          </div>
          <button className="border border-0 bg-transparent d-none d-lg-inline">
            View More...
          </button>
        </tr>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
          <div className="d-flex justify-content-lg-between align-items-center d-inline">
            <img src={Sample_User} alt="SampleUserImg" className="me-3" />
            <h6 className="d-none d-lg-block">Opeyemi Andrewson</h6>
          </div>
          <div className="d-inline">
            <p>
              Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the
              product 100Gb Laptop
            </p>
            <small className="d-block d-lg-none">20s ago</small>
          </div>
          <button className="border border-0 bg-transparent d-none d-lg-inline">
            View More...
          </button>
        </tr>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
          <div className="d-flex justify-content-lg-between align-items-center d-inline">
            <img src={Sample_User} alt="SampleUserImg" className="me-3" />
            <h6 className="d-none d-lg-block">Opeyemi Andrewson</h6>
          </div>
          <div className="d-inline">
            <p>
              Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the
              product 100Gb Laptop
            </p>
            <small className="d-block d-lg-none">20s ago</small>
          </div>
          <button className="border border-0 bg-transparent d-none d-lg-inline">
            View More...
          </button>
        </tr>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
          <div className="d-flex justify-content-lg-between align-items-center d-inline">
            <img src={Sample_User} alt="SampleUserImg" className="me-3" />
            <h6 className="d-none d-lg-block">Opeyemi Andrewson</h6>
          </div>
          <div className="d-inline">
            <p>
              Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the
              product 100Gb Laptop
            </p>
            <small className="d-block d-lg-none">20s ago</small>
          </div>
          <button className="border border-0 bg-transparent d-none d-lg-inline">
            View More...
          </button>
        </tr>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
          <div className="d-flex justify-content-lg-between align-items-center d-inline">
            <img src={Sample_User} alt="SampleUserImg" className="me-3" />
            <h6 className="d-none d-lg-block">Opeyemi Andrewson</h6>
          </div>
          <div className="d-inline">
            <p>
              Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the
              product 100Gb Laptop
            </p>
            <small className="d-block d-lg-none">20s ago</small>
          </div>
          <button className="border border-0 bg-transparent d-none d-lg-inline">
            View More...
          </button>
        </tr>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
          <div className="d-flex justify-content-lg-between align-items-center d-inline">
            <img src={Sample_User} alt="SampleUserImg" className="me-3" />
            <h6 className="d-none d-lg-block">Opeyemi Andrewson</h6>
          </div>
          <div className="d-inline">
            <p>
              Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the
              product 100Gb Laptop
            </p>
            <small className="d-block d-lg-none">20s ago</small>
          </div>
          <button className="border border-0 bg-transparent d-none d-lg-inline">
            View More...
          </button>
        </tr>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
          <div className="d-flex justify-content-lg-between align-items-center d-inline">
            <img src={Sample_User} alt="SampleUserImg" className="me-3" />
            <h6 className="d-none d-lg-block">Opeyemi Andrewson</h6>
          </div>
          <div className="d-inline">
            <p>
              Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the
              product 100Gb Laptop
            </p>
            <small className="d-block d-lg-none">20s ago</small>
          </div>
          <button className="border border-0 bg-transparent d-none d-lg-inline">
            View More...
          </button>
        </tr>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
          <div className="d-flex justify-content-lg-between align-items-center d-inline">
            <img src={Sample_User} alt="SampleUserImg" className="me-3" />
            <h6 className="d-none d-lg-block">Opeyemi Andrewson</h6>
          </div>
          <div className="d-inline">
            <p>
              Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the
              product 100Gb Laptop
            </p>
            <small className="d-block d-lg-none">20s ago</small>
          </div>
          <button className="border border-0 bg-transparent d-none d-lg-inline">
            View More...
          </button>
        </tr>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
          <div className="d-flex justify-content-lg-between align-items-center d-inline">
            <img src={Sample_User} alt="SampleUserImg" className="me-3" />
            <h6 className="d-none d-lg-block">Opeyemi Andrewson</h6>
          </div>
          <div className="d-inline">
            <p>
              Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the
              product 100Gb Laptop
            </p>
            <small className="d-block d-lg-none">20s ago</small>
          </div>
          <button className="border border-0 bg-transparent d-none d-lg-inline">
            View More...
          </button>
        </tr>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly  align-items-center py-3">
          <div className="d-flex justify-content-lg-between align-items-center d-inline">
            <img src={Sample_User} alt="SampleUserImg" className="me-3" />
            <h6 className="d-none d-lg-block">Opeyemi Andrewson</h6>
          </div>
          <div className="d-inline">
            <p>
              Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the
              product 100Gb Laptop
            </p>
            <small className="d-block d-lg-none">20s ago</small>
          </div>
          <button className="border border-0 bg-transparent d-none d-lg-inline">
            View More...
          </button>
        </tr>
      </tbody>
      {/* Pagination Component Stays here */}
      <div className="py-3">
        <PaginationBar />
      </div>
    </table>
  );
};

//RecentTransactionTable

export const RecentTransactionTable = () => {
  return (
    <div className="col-lg-9 border shadow" style={{ width: "58rem" }}>
      <div>
        <div className="ms-md-5 ms-3 mb-3 mt-2">
          <GeneralBtnStyle1 text="New Transaction" />
        </div>

        <table className="table">
          <thead className="text-center">
            <tr>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" text-center">35 cartorns of biscuits</td>
              <td className="text-center">N3,275.45</td>
              <td className="text-center">15/11/2022</td>
              <td className="d-flex justify-content-center align-items-center">
                <CompletedNotification />
              </td>
            </tr>
            <tr>
              <td className="text-center">Hair brushes and attachments</td>
              <td className="text-center">N3,275.45</td>
              <td className="text-center">15/11/2022</td>
              <td className="d-flex justify-content-center align-items-center">
                <GeneralBtnStyle2 text="Await Delivery" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// AdminRecentTransactionsCard
export const AdminRecentTransactionsCard = () => {
  return (
    <>
      <div className="pt-4 col-lg-9 col-md-6 col-sm-12 shadow-sm rounded-2">
        <Table className="">
          <thead className="text-center">
            <tr>
              <th>Transaction ID</th>
              <th>Buyer Name</th>
              <th>Seller Name</th>
              <th className="">Products</th>
              <th className="small-hide">Date</th>
              <th>Status</th>
              <th className="small-hide">...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" text-center">4rsGDrb4rP3</td>
              <td className="text-center">Jacob Jones</td>
              <td className="text-center">Guy Hawkins</td>
              <td className="text-center small-hide">35 cartons of biscuit</td>
              <td className="text-center small-hide">16-08-22</td>
              <td className="d-flex justify-content-center align-items-center">
                <CompletedNotification />
              </td>
              <td className="text-center small-hide text-muted">View</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
