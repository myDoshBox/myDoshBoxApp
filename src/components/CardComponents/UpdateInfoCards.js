import {
  ChangeBankIcon,
  UpdateProfileIcon,
} from "../IconComponent/UserdashboardIcons";

// UpdateProfileCard
export const UpdateProfileCard = () => {
  return (
    <div className="d-flex align-items-center p-3 ">
      <UpdateProfileIcon width={"60"} height={"60"} className={"ms-3"} />
      <p className="ms-3 mt-2">Update Profile</p>
    </div>
  );
};
// UpdateBankDetailsCard
export const UpdateBankDetailsCard = () => {
  return (
    <div className="d-flex  p-3">
      <ChangeBankIcon width={"60"} height={"60"} />
      <p className="ms-3 mt-2">Change Bank Details</p>
    </div>
  );
};
