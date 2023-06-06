import { UserProfileCard } from "../../../components/CardComponents/UsersCards";
import { UserDashboardNavbar } from "../../../components/NavbarComponents/TopNavbars";

const UserProfile = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-sm-12 px-0"></div>

      <div className="col-lg-9 col-sm-12">
        <div className="mt-3 pe-lg-5">
          <UserDashboardNavbar />
        </div>
        <div className="mx-auto w-100 px-3 pe-lg-5 ps-lg-0 mt-5">
          <UserProfileCard />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
