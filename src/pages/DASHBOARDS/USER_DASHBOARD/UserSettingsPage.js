// import { MiniProfileCard } from "../../components/CardComponents/UsersCards";
import { UserDashboardCards } from "../../../components/CardComponents/UsersCards";
import { UpdateBankDetails } from "../../../components/FormComponents.js/UpdateForms";
import { UpdateProfile } from "../../../components/FormComponents.js/UpdateForms";
import { Reportissuesform } from "../../../components/FormComponents.js/IssuesComplaintForms";
import {
  BigLogoutIcon,
  ChangeBankIcon,
  ContactUsIcon,
  FaqIcon,
  FeedbackIcon,
  UpdateProfileIcon,
  CameraIcon,
} from "../../../components/IconComponent/UserdashboardIcons";
import Avatar from "../../../images/Avatar.jpg";
import { GeneralBtn } from "../../../components/ButtonsComponent/GenandAuthBtn";
import { Link, useNavigate } from "react-router-dom";
import {
  UserDashboardCard,
  MiniProfileCard,
} from "../../../components/CardComponents/UsersCards";

const UserSettingsPage = () => {
  return (
    <div className="contestPage">
      <div className="row">
        <div className="col-lg-3 col-sm-12"></div>

        <div className="col-lg-9 col-sm-12 mt-5">
          <SettingsPage />
        </div>
      </div>
    </div>
  );
};

const SettingsPage = () => {
  const navigate = useNavigate();

  const nav = () => {
    navigate("/");
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col-lg-5 col-sm-12">
          <MiniProfileCard />
        </div>
        <div className="col-lg-7 col-sm-12 row">
          <div className="col-12 row">
            <div className="col-sm-12 mb-3 mb-md-4 col-lg-6 mt-4 mt-lg-0">
              <UserDashboardCard
                icon={<UpdateProfileIcon />}
                text={"Update Profile"}
              />
            </div>
            <div className="col-sm-12 mb-3 mb-md-4 col-lg-6">
              <UserDashboardCard
                icon={<ChangeBankIcon />}
                text={"Update Bank Details"}
              />
            </div>
          </div>
          <div className="col-12 row">
            <div className="col-sm-12 mb-3 mb-md-4 col-lg-6">
              <UserDashboardCard
                icon={<FeedbackIcon />}
                text={"Report App Defect"}
              />
            </div>
            <div className="col-sm-12 mb-3 mb-md-4 col-lg-6">
              <UserDashboardCard
                icon={<ContactUsIcon />}
                text={"Contact Us"}
                link={"/contactus"}
              />
            </div>
          </div>
          <div className="col-12 row">
            <div className="col-sm-12 col-lg-6">
              <UserDashboardCard
                icon={<FaqIcon />}
                text={"FAQs"}
                link={"/faqs"}
              />
            </div>
            <div className="col-sm-12 col-lg-6" onClick={nav}>
              <UserDashboardCard icon={<BigLogoutIcon />} text={"Logout"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSettingsPage;
