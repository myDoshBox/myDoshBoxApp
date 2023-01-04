import Table from "react-bootstrap/Table";
import Sample_User from "../../images/SampleUserImage.png";
import { PaginationBar } from "../PaginationComponent";
import { FilterButton } from "../ButtonsComponent/MiscBtns";
import { GeneralBtnStyle1, GeneralBtnStyle2 } from "../ButtonsComponent/Button";
import { Notifications } from "../NotificationComponent/NotificationComponents";
import { Descripe } from "@mui/icons-material";

export const NotificationCard = (props) => {
  const { image, title, description, link } = props;
  return (
    <div className="d-flex justify-content-around align-items-center">
      <img src={image} alt="SampleUserImg" className="" />
      <h6 className="d-none d-lg-block mx-3">{title}</h6>
      <div className="d-inline">
        <p className="w-100">{description}</p>
      </div>
      <button className="p-4 btn text-primary">{link}</button>
    </div>
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
                <Notifications text={`Completed`} styles={`completed`} />
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
                <Notifications text={`Completed`} styles={`completed`} />
              </td>
              <td className="text-center small-hide text-muted">View</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
