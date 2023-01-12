// UserInflowCard {Postponed as it is a graph}

//All Buttons/Icon Import Starts
import {
  TotalUsersIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CompletedTransactionIcon,
} from "../IconComponent/AdminDashboardIcons";
import {
  CameraIcon,
  RatingIcon,
  CustomerCareIcon,
  BigLogoutIcon,
} from "../IconComponent/UserdashboardIcons";
import { FilterButton } from "../ButtonsComponent/MiscBtns";
import { GeneralBtnStyle1 } from "../ButtonsComponent/Button";
//All Buttons/icon Import Ends

//All Image Import Starts
import Avatar from "../../images/Avatar.jpg";
import Table from "react-bootstrap/Table";
//All Image Import Ends
import { PaginationBar } from "../PaginationComponent";

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
          <div className="d-flex ">
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
export const UserDashboardCards = ({ icon, text }) => {
  return (
    <div
      className="card shadow  border-0 rounded-2 mx-auto mb-5"
      style={{ width: "100%" }}
    >
      <div className="card-body d-flex align-items-center justify-content-center">
        <div className="col-3">{icon}</div>
        <span className="mt-4">
          <p className="col-9">{text}</p>
        </span>
      </div>
    </div>
  );
};

export const UserDashboardCardsTwo = ({ icon, text }) => {
  return (
    <div
      className="card shadow border-0 rounded-2 mx-auto mb-5"
      style={{ width: "100%" }}
    >
      <div className="card-body d-flex align-items-center justify-content-center">
        <div className="mx-3">{icon}</div>
        <span className="mt-3">
          <p className="">{text}</p>
        </span>
      </div>
    </div>
  );
};

// MiniProfileCard
export const MiniProfileCard = () => {
  return (
    <>
      <div class="card shadow" style={{ width: "100%" }}>
        <div class="card-body">
          <div className="d-flex flex-column ">
            <div className="d-flex justify-content-center">
              <img src={Avatar} className="img-fluid" alt=" User Image" />
              <span className="d-flex align-items-end">
                <CameraIcon />
              </span>
            </div>
            <span className="text-center">
              <h5 className="mt-2 fw-bold">Olasunkanmi Idris</h5>
              <p>+234 801 234 5678</p>
              <p>sunkanmidris@gmail.com</p>
            </span>
          </div>
          {/* The Line starts */}
          <hr></hr>
          {/* The Line Ends */}
          <div className="d-flex ">
            <div>{/* <CompletedDealsIcon width="30" /> */}</div>
            <p className="ms-lg-1">100 deals completed</p>
          </div>
          {/* Start Rating Starts */}
          <div className=" d-flex">
            <span>
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
              <RatingIcon />
            </span>
            <p> 0.0 rating </p>
          </div>
          {/* Start Rating Ends */}

          {/* The Line starts */}
          <hr></hr>
          {/* The Line Ends */}
          <div className="text-end ">{/* <EditProfileButton /> */}</div>
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
      <aside className="NotificationCardHeader d-flex justify-content-end">
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
    <>
      <div class="card shadow-sm" style={{ width: "56rem" }}>
        <div class="card-body d-flex mt-4">
          <div className="d-flex align-items-center col-4">
            <img src={Avatar} className="w-75 img-fluid" alt="Avatar" />
          </div>
          <div className="">
            <h4 className="text-muted">PERSONAL INFORMATION</h4>
            {/* Personal Info Section Starts */}
            <div>
              <table className="text-muted">
                <thead>
                  <tr>
                    <th className="fw-bold" scope="col ">
                      USER ID :
                    </th>
                    <th scope="col">34522</th>
                  </tr>
                  <tr>
                    <th className="fw-bold" scope="col">
                      FULL-NAME:
                    </th>
                    <th scope="col">Christian Gabriel Ugochukwu</th>
                  </tr>
                  <tr>
                    <th className="fw-bold" scope="col">
                      PHONE NUMBER:
                    </th>
                    <th scope="col">+234 9032166043</th>
                  </tr>
                  <tr>
                    <th className="fw-bold" scope="col">
                      E-MAIL:
                    </th>
                    <th scope="col">gabrielChristian@gmail.com</th>
                  </tr>
                  <tr>
                    <th className="fw-bold" scope="col">
                      ADDRESS:
                    </th>
                    <th scope="col">Royal Palm villa Estate, Sangotedo</th>
                  </tr>
                </thead>
              </table>
            </div>
            {/* Personal Info Section Ends */}
            {/* Bank Info Section Starts*/}
            <div className="mt-5">
              <h4 className="text-muted">BANK INFORMATION</h4>
              <table className="text-muted">
                <thead className="mt-3">
                  <tr>
                    <th className="fw-bold" scope="col ">
                      ACCOUNT NUMBER:
                    </th>
                    <th scope="col">2395289752</th>
                  </tr>
                  <tr>
                    <th className="fw-bold" scope="col">
                      ACCOUNT NAME:
                    </th>
                    <th scope="col">Christian Gabriel </th>
                  </tr>
                  <tr>
                    <th className="fw-bold" scope="col">
                      BANK:
                    </th>
                    <th scope="col">Zenith Bank</th>
                  </tr>
                </thead>
              </table>
            </div>
            {/* Bank Info Section Ends */}
          </div>
          <div className="col-2 ms-lg-5">
            <button type="button" className="btn btn-success fw-bold ">
              Primary
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
