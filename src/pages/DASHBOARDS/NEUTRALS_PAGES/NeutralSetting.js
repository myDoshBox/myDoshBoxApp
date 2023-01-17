import { GeneralBtn } from "../../../components/ButtonsComponent/GenandAuthBtn";
import { UpdateProfile } from "../../../components/FormComponents.js/UpdateForms";
import { UpdatePassword } from "../../../components/FormComponents.js/UpdateForms";

export const NeutralSetting = () => {
  return (
    <section className="row" style={{ width: "54rem" }}>
      {/* sideBar here */}
      <div></div>
      {/* sideBar here */}
      <div>
        <div className="row">
          <div className="col">
            <p className="fw-bold">UPDATE PROFILE</p>
            <p className="fw-bold">UPDATE PASSWORD</p>
          </div>
          <div className="col">
            {/* First Card Section Starts */}
            <div className="mb-4" style={{ width: "40rem" }}>
              <UpdateProfile />
            </div>
            {/* First Card Section Ends */}
            {/* Second Card Section Starts */}
            <div style={{ width: "40rem" }}>
              <UpdatePassword />
            </div>
            {/* Second Card Section Ends */}
          </div>
        </div>
      </div>
    </section>
  );
};
