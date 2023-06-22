import { memo, useState } from "react";
//All Buttons/Icon Import Starts
// import {
//   TotalUsersIcon,
//   ArrowDownIcon,
//   ArrowUpIcon,
//   CompletedTransactionIcon,
// } from "../IconComponent/AdminDashboardIcons";
import { RatingIcon } from "../IconComponent/UserdashboardIcons";
import { FilterButton } from "../ButtonsComponent/GenandAuthBtn";
import { GeneralBtn } from "../ButtonsComponent/GenandAuthBtn";
//All Buttons/icon Import Ends

//All Image Import Starts
import Avatar from "../../images/Avatar.jpg";
//All Image Import Ends

import { Link, useNavigate } from "react-router-dom";
import TransactionData from "../../data/dummyData/transactionData.json";
import { EditProfileButton } from "../ButtonsComponent/EditButtons";
import { ViewMoreButton } from "../ButtonsComponent/NavigationAndViewButtons";

// UserTransactionsCard, TotalUsersCard, AnalyticsNewUsersCard
export const AnalyticsCard = memo(
  ({ ResponsiveWidth, BigIcon, SmallIcon, text, value, link, change }) => {
    return (
      <div className={`${ResponsiveWidth} mb-4 mb-lg-0`}>
        <div className="px-3 shadow border-0 rounded-2 DashboardCard h-100">
          <Link to={link} className="text-decoration-none ">
            <div className="d-flex align-items-center py-3">
              {BigIcon}
              <div>
                <p className="m-0 ms-2 opacity-50">{value}</p>
                <p className="m-0 ms-2">{text}</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              {SmallIcon}
              <p className="text-small m-0">
                {change ? change + " than last week" : null}
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
);

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
          <Link to={"./updateprofile"}>
            <EditProfileButton />
          </Link>
        </div>
      </div>
    </>
  );
};
// MiniProfileCardSettind
export const MiniProfileCardSettings = () => {
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
          <span role="button" data-testid="rating-icons-container">
            <RatingIcon id={1} />
            <RatingIcon id={2} />
            <RatingIcon id={3} />
            <RatingIcon id={4} />
            <RatingIcon id={5} />
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
export const MiniUsersCard = memo(({ style }) => {
  console.count("MiniUsersCard: ");
  const [max, setMax] = useState(5);
  return (
    <div className={`${style} mb-3 mb-md-0`}>
      <div className={`card p-3 shadow rounded border-0 h-100`}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="m-0">All Users</h6>
          {/* <CustomBtn
            value="View More"
            className="btn border text-success text-small viewBtn"
            to="users"
            style={{ whiteSpace: "nowrap" }}
          /> */}
        </div>
        <table className="table m-0 h-100">
          <thead>
            <tr>
              <th scope="col" className="opacity-50 text-center">
                User Id
              </th>
              <th scope="col" className="opacity-50 text-center">
                Name
              </th>
              <th scope="col" className="opacity-50 text-center">
                Completed Transactions
              </th>
            </tr>
          </thead>
          <tbody className="h-100">
            {TransactionData.mini_transaction.map((mini) => {
              return (
                <>
                  <tr key={mini.id} className="text-center border-bottom">
                    <td className="p-md-3 text-small">{mini.id}</td>
                    <td className="p-md-3 text-small">Opeyemi</td>
                    <td className="p-md-3 text-small">2000</td>
                  </tr>
                </>
              );
            })}
            <Link
              to={""}
              className="d-flex justify-content-center pt-3 text-decoration-none w-100"
              style={{ whiteSpace: "nowrap" }}
            >
              <GeneralBtn
                text="View More"
                styles="GeneralBtnStyle1 btn all-btn text-white"
                link={"users"}
              />
            </Link>
          </tbody>
        </table>
      </div>
    </div>
  );
});

// UserProfileCard {Done}
export const UserProfileCard = () => {
  const history = useNavigate();

  return (
    <section>
      <div className="card shadow-sm" style={{ width: "56rem" }}>
        <div className="card-body d-flex mt-4">
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
    </section>
  );
};
