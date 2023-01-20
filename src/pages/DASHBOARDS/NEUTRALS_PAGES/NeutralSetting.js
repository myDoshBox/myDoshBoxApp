import { GeneralBtn } from "../../../components/ButtonsComponent/GenandAuthBtn";
import { UpdateProfile } from "../../../components/FormComponents.js/UpdateForms";
import { UpdatePassword } from "../../../components/FormComponents.js/UpdateForms";

export const NeutralSetting = () => {
  return (
    <section className="row">
      {/* sideBar here */}
       <div className="col-lg-3 col-sm-12 px-0"></div>
      {/* sideBar here */}
      <div className="col-lg-9 col-sm-12">
        <div className="row mt-5">
          <div className="col-3 px-0">
            <p className="fw-bold">UPDATE PROFILE</p>
            <p className="fw-bold">UPDATE PASSWORD</p>
          </div>
          <div className="col-9 px-0">
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
