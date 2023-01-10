// import { MiniProfileCard } from "../../components/CardComponents/UsersCards";
import { UserDashboardCards } from "../../components/CardComponents/UsersCards";
import { UpdateBankDetails } from "../../components/FormComponents.js/UpdateForms";
import { UpdateProfile } from "../../components/FormComponents.js/UpdateForms";
import { Reportissuesform } from "../../components/FormComponents.js/IssuesComplaintForms";
import {
  BigLogoutIcon,
  ChangeBankIcon,
  ContactUsIcon,
  FaqIcon,
  FeedbackIcon,
  UpdateProfileIcon,
  CameraIcon,
} from "../../components/IconComponent/UserdashboardIcons";
import UsersSideNav from "../../components/NavbarComponents/UsersSideNav";
import Avatar from "../../images/Avatar.jpg";
import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";

const UserSettingsPage = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <UsersSideNav />
        </div>

        <div className="col-lg-9 col-sm-12 mt-5">
          <SettingsPage />
        </div>
      </div>
    </div>
  );
};

const SettingsPage = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-lg-5 col-sm-12">
          <MiniProfileCard />
        </div>
        <div className="col-lg-7 col-sm-12 row">
          <div className="col-12 row">
            <div className="col-sm-12 mb-3 mb-md-4 col-lg-6 mt-4 mt-lg-0">
              <DashboardCard
                icon={<UpdateProfileIcon />}
                text={"Update Profile"}
              />
            </div>
            <div className="col-sm-12 mb-3 mb-md-4 col-lg-6">
              <DashboardCard
                icon={<ChangeBankIcon />}
                text={"Update Bank Details"}
              />
            </div>
          </div>
          <div className="col-12 row">
            <div className="col-sm-12 mb-3 mb-md--4 col-lg-6">
              <DashboardCard
                icon={<FeedbackIcon />}
                text={"Report App Defect"}
              />
            </div>
            <div className="col-sm-12 mb-3 mb-md--4 col-lg-6">
              <DashboardCard icon={<ContactUsIcon />} text={"Contact Us"} />
            </div>
          </div>
          <div className="col-12 row">
            <div className="col-sm-12 col-lg-6">
              <DashboardCard icon={<FaqIcon />} text={"FAQs"} />
            </div>
            <div className="col-sm-12 col-lg-6">
              <DashboardCard icon={<BigLogoutIcon />} text={"Logout"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DashboardCard = (props) => {
  const { text, icon } = props;
  return (
    <div
      className="card shadow mx-auto border-0 rounded-2 py-4 pt-lg-5"
      style={{ width: "100%", height: "80%" }}
    >
      <div className="row justify-content-center align-items-center mx-auto">
        <div className="col-2 mb-2">{icon}</div>
        <div className="col-10">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

const MiniProfileCard = () => {
  return (
    <>
      <div
        className="card shadow border-0 rounded-2 py-3 mx-auto"
        style={{ width: "90%" }}
      >
        <div className="d-flex flex-column ">
          <div className="d-flex justify-content-center">
            <img src={Avatar} className="img-fluid mx-auto" alt=" User Image" />
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
        <div className="d-flex px-3">
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
        <div className="text-end pe-2">
          <GeneralBtn
            text="Edit Profile"
            styles="GeneralBtnStyle1 btn all-btn text-white"
          />
        </div>
      </div>
    </>
  );
};

export const RatingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#127A12"
      class="bi bi-star"
      viewBox="0 0 16 16"
    >
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
    </svg>
  );
};

export default UserSettingsPage;
