import {
  GeneralBtnStyle1,
  GeneralBtnStyle1Icon,
  ViewDetailsButton,
} from "../../components/ButtonsComponent/Button";
import UsersSideNav from "../../components/NavbarComponents/UsersSideNav";
import { Notifications } from "../../components/NotificationComponent/NotificationComponents";
import DisputesData from "../../data/dummyData/disputeshistorydata.json";

const UserDisputeHistory = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <UsersSideNav />
        </div>

        <div className="col-lg-9 col-sm-12 mt-5">
          <DisputeCard />
        </div>
      </div>
    </div>
  );
};

const DisputeCard = () => {
  return (
    <div>
      <div className="card shadow rounded-3 border-0 p-lg-5 p-3">
        <div className="row mb-4">
          <div className="col-6">
            <h5>Disputes</h5>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <GeneralBtnStyle1Icon text={"Back"} lefticon={<BackIcon />} />
          </div>
        </div>
        {DisputesData.disputes_data.map((history) => {
          return <DisputeData {...history} />;
        })}
      </div>
    </div>
  );
};

const DisputeData = (props) => {
  const { date, transaction_id, status } = props;
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom border-dark-subtle py-2">
      <div className="d-flex flex-column">
        <div className="">{date}</div>
        <div className="text-secondary-emphasis">
          TransactionID: <span className="text-dark">{transaction_id}</span>
        </div>
        <div className="text-secondary-emphasis">
          Status:
          <span className="text-dark">{status}</span>
        </div>
      </div>

      <div className="d-flex align-items-end flex-column">
        <GeneralBtnStyle1 text={"View Details"} />
      </div>
    </div>
  );
};

const BackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#fff"
      class="bi bi-arrow-left-short"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
      />
    </svg>
  );
};

export default UserDisputeHistory;
