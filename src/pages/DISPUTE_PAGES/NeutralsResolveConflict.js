import { UserSidenav } from "../../components/NavbarComponents/SideNavbar";
import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";
import { Cancel } from "../../components/IconComponent/NeutralsDashboardIcons";
import brokenScreen1 from "../../images/brokenScreen1.png";
import brokenScreen2 from "../../images/brokenScreen2.png";
import brokenScreen3 from "../../images/brokenScreen3.png";

export const NeutralsResolveConflict = () => {
  return (
    <section className="d-flex">
      {/* side Bar Section Starts */}
      <div>
        <UserSidenav />
      </div>
      {/* side Bar Section Ends*/}
      <div className="align-self-center mx-auto p-4">
        <div
          className="card border-0 shadow container mb-4"
          style={{ width: "45rem" }}
        >
          <div class="card-body p-4">
            <span className="d-flex justify-content-evenly mt-3 mb-4">
              <GeneralBtn
                text="Buyers Statement"
                styles="GeneralBtnStyle1 btn all-btn text-white"
              />
              <GeneralBtn
                text="Sellers Statement"
                styles="GeneralBtnStyle1 btn all-btn text-white"
              />
            </span>
            <div className="mb-3">
              <h5>PROBLEM STATEMENT : </h5>
              <p>
                Auctor sem ut aliquam velit quis eu. Aliquam tortor euismod
                interdum sodales eget maecenas sem. Ultrices a donec urna semper
                ante. Eget aliquet enim elit lorem hac feugiat. Eu convallis at
                amet pretium vestibulum et ultrices rutrum. Viverra vel congue
                laoreet cursus gravida morbi. A morbi nulla ut nisi, felis.
                Ultricies molestie pretium mauris, id amet vitae congue laoreet
                cursus gravida morbi. A morbi nulla ut nisi, felis. Ultricies
                molestie pretium mauris, id amet vitae congue laoreet cursus
                gravida morbi. A morbi nulla ut nisi, felis. Ultricies molestie
                pretium mauris, id amet vitae.
              </p>
            </div>
            <div>
              <h5>IMAGE EVIDENCE :</h5>
              <div className="d-flex w-25 ms-5">
                <img src={brokenScreen1} className="p-1" alt="" />
                <img src={brokenScreen2} className="p-1" alt="" />
                <img src={brokenScreen3} className="p-1" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="form-floating mb-4 mt-4">
            <textarea
              class="form-control"
              placeholder="Leave a Message here"
              id="floatingTextarea2"
              style={{ height: "10rem" }}
            ></textarea>
            <label className="text-muted fs-lighter" for="floatingTextarea2">
              Leave a Message here
            </label>
          </div>
          <span className="d-flex justify-content-evenly mt-3 mb-4">
            <GeneralBtn
              text="Sellers Fault"
              styles="GeneralBtnStyle1 btn all-btn text-white"
            />
            <GeneralBtn
              text="Buyers Fault"
              styles="GeneralBtnStyle1 btn all-btn text-white"
            />
          </span>
        </div>
      </div>
    </section>
  );
};
