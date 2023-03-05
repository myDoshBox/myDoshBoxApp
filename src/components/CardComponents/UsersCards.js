// UserInflowCard {Postponed as it is a graph}

//All Buttons/Icon Import Starts
import { BackIcon } from "../IconComponent/NavigationAndViewIcon";
import {
  TotalUsersIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CompletedTransactionIcon,
} from "../IconComponent/AdminDashboardIcons";
import { RatingIcon } from "../IconComponent/UserdashboardIcons";
import { FilterButton } from "../ButtonsComponent/MiscBtns";
import { GeneralBtnStyle1 } from "../ButtonsComponent/Button";
import { GeneralBtn } from "../ButtonsComponent/GenandAuthBtn";
//All Buttons/icon Import Ends

//All Image Import Starts
import Avatar from "../../images/Avatar.jpg";
//All Image Import Ends
import { Link } from "react-router-dom";

// AnalyticsNewUsersCard
export const AnalyticsNewUsersCard = () => {
  return (
    <div
      className="card shadow rounded-3 text-nowrap"
      style={{ width: "15rem" }}
    >
      <div class="card-body">
        <div className="d-flex justify-content-center">
          <TotalUsersIcon />
        </div>
        <div>
          <h4 className="text-center">New Users</h4>
          <p className="text-center">This Month : 150</p>
        </div>
        <div className="d-flex justify-content-center ">
          <span>
            <ArrowDownIcon />
          </span>
          <p className="ms-1 fw-lighter">3.5% less than last month</p>
        </div>
      </div>
    </div>
  );
};

//TotalUsersCard
export const TotalUsersCard = () => {
  return (
    <>
      <div class="card shadow border-0 rounded-1" style={{ width: "18rem" }}>
        <div class="card-body">
          <div className="d-flex">
            <div>
              <TotalUsersIcon width="24" />
            </div>
            <div className="ms-2">
              <span className="fs-5 fw-bold">234589</span>
              <p>TOTAL USERS</p>
            </div>
          </div>
          <div className="d-flex justify-content-end p-0">
            <span>
              <ArrowUpIcon />
            </span>
            <p className=""> 5% More than last month</p>
          </div>
        </div>
      </div>
    </>
  );
};

// UserTransactionsCard
export const UserTransactionsCard = () => {
  return (
    <div class="card shadow border-0 rounded-1" style={{ width: "20rem" }}>
      <div class="card-body mx-auto ">
        <div className="d-flex mx-auto">
          <div className="m-2">
            <CompletedTransactionIcon />
          </div>
          <div className="mx-auto">
            <span className="fs-5 fw-bold">10034</span>
            <p className="fs-6 ">TRANSACTIONS COMPLETED</p>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <span>
            <ArrowDownIcon />
          </span>
          <p className="ms-2">5% Less than last month</p>
        </div>
      </div>
    </div>
  );
};

//LogoutCard /ContactCustomerCareCard /IntiateDisputeCard /ClosedConflictsCard /OngoingConflictCard,   OpenConflictsCard /Logout /Contact Us /Report App Defect /Change Bank Details /Update Profile /FAQs
export const UserDashboardCard = (props) => {
  const { text, icon, link, relative } = props;
  return (
    <Link
      to={link}
      relative={relative}
      className="text-decoration-none text-dark"
    >
      <div
        className="card shadow mx-auto border-0 rounded-2 p-3 p-lg-none row justify-content-center"
        style={{ width: "100%", height: "80%" }}
      >
        <div className="row justify-content-center align-items-center mx-auto">
          <div className="col-2">{icon}</div>
          <div className="col-10" style={{ transform: "translateX(10px)" }}>
            {text}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const UserDashboardCard2 = (props) => {
  const { text, icon, link } = props;
  return (
    <Link to={link} className="text-decoration-none text-dark">
      <div
        className="card shadow mx-auto border-0 rounded-2  px-2 row justify-content-center"
        style={{ width: "100%", height: "9rem" }}
      >
        <div className="row justify-content-center align-items-center mx-auto">
          <div className="col-2">{icon}</div>
          <div className="col-10">{text}</div>
        </div>
      </div>
    </Link>
  );
};

// MiniProfileCard
export const MiniProfileCard = () => {
  return (
    <>
      <div
        className="card shadow border-0 rounded-2 p-3 mx-auto"
        style={{ width: "90%" }}
      >
        <div className="d-flex flex-column ">
          <div className="d-flex justify-content-center">
            <img src={Avatar} className="img-fluid mx-auto" alt="User" />
            <span className="d-flex align-items-end">
              {/* <CameraIcon /> */}
            </span>
          </div>
          <span className="text-center">
            <h5 className="mt-2 fw-lighter">Olasunkanmi Idris</h5>
            <p>+234 801 234 5678</p>
            <p>sunkanmidris@gmail.com</p>
          </span>
        </div>
        <hr></hr>
        <div className="d-flex px-3">
          <div>{/* <CompletedDealsIcon width="30" /> */}</div>
          <p className="ms-lg-1">100 deals completed</p>
        </div>
        <div className="d-flex px-3 ">
          <span>
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
          </span>
          <p className="mx-2"> 0.0 rating </p>
        </div>
        <hr></hr>
        <div className="text-end pe-2 py-3">
          <Link to={"../updateprofile"}>
            <GeneralBtn
              text="Edit Profile"
              styles="GeneralBtnStyle1 btn all-btn text-white"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

// MiniUsersCard
export const MiniUsersCard = () => {
  return (
    <div className="bg-white rounded-3 p-3 MiniUsersCard ">
      <p className="border-bottom mb-2">All Users</p>
      <table className=" table table-striped table-hover w-100 ">
        <thead>
          <tr>
            <th className="text-center">Users ID</th>
            <th className="text-end">Name</th>
            <th className="text-center">Transactions Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">45453</td>
            <td className="text-end">Guy Hawkins</td>
            <td className="text-center">1245</td>
          </tr>
          <tr>
            <td className="text-center">45453</td>
            <td className="text-end">Guy Hawkins</td>
            <td className="text-center">1245</td>
          </tr>
          <tr>
            <td className="text-center">45453</td>
            <td className="text-end">Guy Hawkins</td>
            <td className="text-center">1245</td>
          </tr>
          <tr>
            <td className="text-center">45453</td>
            <td className="text-end">Guy Hawkins</td>
            <td className="text-center">1245</td>
          </tr>
          <tr>
            <td className="text-center">45453</td>
            <td className="text-end">Guy Hawkins</td>
            <td className="text-center">1245</td>
          </tr>
          <tr>
            <td className="text-center">45453</td>
            <td className="text-end">Guy Hawkins</td>
            <td className="text-center">1245</td>
          </tr>
          <tr>
            <td className="text-center">45453</td>
            <td className="text-end">Guy Hawkins</td>
            <td className="text-center">1245</td>
          </tr>
        </tbody>
      </table>
      <div className="text-end mt-3">
        <GeneralBtnStyle1 text="View More" />
      </div>
    </div>
  );
};

export const AllUsersCard = () => {
  return (
    <div className="col-lg-9 shadow rounded-1">
      <aside className="d-flex justify-content-end">
        <FilterButton />
      </aside>
      <table class="table table-hover">
        <thead>
          <tr>
            <th className="text-muted text-center" scope="col">
              Image
            </th>
            <th className="text-muted text-center" scope="col">
              Id
            </th>
            <th className="text-muted text-center" scope="col">
              Name
            </th>
            <th className="text-muted text-center" scope="col">
              Tel
            </th>
            <th className="text-muted text-center" scope="col">
              Email
            </th>
            <th className="text-muted text-center" scope="col">
              Address
            </th>
            <th className="text-muted text-center" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              {/* <img src={Avatar} className="img-thumbnail col-2" alt="" /> */}
            </th>
            <td className="p-3">3345</td>
            <td className="p-3">Gabriel</td>
            <td className="p-3">09032455678</td>
            <td className="p-3">gabrielChristian@gmail.com</td>
            <td className="p-3">Lorem ipsum dolor sit.</td>
            <td>....</td>
          </tr>
          <tr>
            <th scope="row">
              {/* <img src={Avatar} className="img-thumbnail col-2 " alt="" /> */}
            </th>
            <td className="p-3">3345</td>
            <td className="p-3">Peter</td>
            <td className="p-3">07009033421</td>
            <td className="p-3">SupremePeter@gmail.com</td>
            <td className="p-3">Lorem ipsum dolor sit.</td>
            <td>....</td>
          </tr>
          <tr>
            <th scope="row">
              {/* <img src={Avatar} className="img-thumbnail col-2  " alt="" /> */}
            </th>
            <td className="p-3">6634</td>
            <td className="p-3">Andrew</td>
            <td className="p-3">0818790345</td>
            <td className="p-3">Andrewpaul@gmail.com</td>
            <td className="p-3">Lorem ipsum dolor sit.</td>
            <td className="p-3">....</td>
          </tr>
          <tr>
            <th scope="row">
              {/* <img src={Avatar} className="img-thumbnail col-2  " alt="" /> */}
            </th>
            <td className="p-3">4421</td>
            <td className="p-3">James</td>
            <td className="p-3">0818849302</td>
            <td className="p-3">Jamespaul@gmail.com</td>
            <td className="p-3">Lorem ipsum dolor sit.</td>
            <td className="p-3">....</td>
          </tr>
          <tr>
            <th scope="row">
              {/* <img src={Avatar} className="img-thumbnail" alt="" /> */}
            </th>
            <td className="p-3">3244</td>
            <td className="p-3">Mathew</td>
            <td className="p-3"> 0818790345</td>
            <td className="p-3">PhilipMathew@gmail.com</td>
            <td className="p-3">Lorem ipsum dolor sit.</td>
            <td className="p-3">....</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// UserProfileCard {Done}
export const UserProfileCard = () => {
  return (
    <section className="shadow border-0" style={{ width: "87%" }}>
      <div className="row p-5">
        <div className="col-lg-3 mb-5 d-flex justify-content-center align-items-center">
          <img src={Avatar} className="img-fluid" alt="Avatar" />
        </div>
        <div className="col-lg-7 mx-auto text-muted d-flex flex-column justify-content-center mx-auto">
          {/* Personal Info Section Starts */}
          <h5 className="text-muted">PERSONAL INFORMATION</h5>
          <table class="table table-borderless text-muted">
            <thead className="">
              <tr>
                <th scope="col">USER ID :</th>
                <th clasName="text-end" scope="col">
                  1234
                </th>
              </tr>
              <tr>
                <th scope="col">FullName :</th>
                <th clasName="text-end" scope="col">
                  Olasunkanmi Idris
                </th>
              </tr>
              <tr>
                <th scope="col"> Phone Number :</th>
                <th clasName="text-end" scope="col">
                  +234 801 234 5678
                </th>
              </tr>
              <tr>
                <th scope="col"> Email :</th>
                <th clasName="text-end" scope="col">
                  sunkanmidris@gmail.com
                </th>
              </tr>
              <tr>
                <th scope="col"> Address :</th>
                <th clasName="text-end" scope="col">
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </th>
              </tr>
            </thead>
            {/* <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
              </tr>
            </tbody> */}
          </table>
          {/* Personal Info Section Ends*/}
          {/* Bank Info Section Starts */}
          <h5 className="text-muted">BANK INFORMATION</h5>
          <ul className="mt-4">
            <li className="d-flex justify-content-between align-items-center">
              Account Number :<span className="text-end">1234567890</span>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              Account Name :<span className="text-end">Olasunkanmi Idris </span>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              Bank Name :<span className="text-end">United Bank of Africa</span>
            </li>
          </ul>
          {/* Bank Info Section Ends */}
        </div>
        <div className="col-lg-2 d-none d-lg-block d-md-none">
          <GeneralBtn
            lefticon={<BackIcon />}
            styles="GeneralBtnStyle1 btn all-btn text-white"
            text="Back"
          />
        </div>
        <div
          className="d-block d-lg-none d-flex
        justify-content-center mx-auto col-sm-12 mt-5"
        >
          <GeneralBtn
            lefticon={<BackIcon />}
            styles="GeneralBtnStyle1 btn all-btn text-white"
            text="Back"
          />
        </div>
      </div>
    </section>
  );
};
