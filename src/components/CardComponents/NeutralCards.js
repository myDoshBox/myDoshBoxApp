import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";
import { BackIcon } from "../../components/IconComponent/NavigationAndViewIcon";
import { RatingIcon } from "../../components/IconComponent/UserdashboardIcons";
import { Notifications } from "../../components/NotificationComponent/NotificationComponents";
import productImgLg from "../../images/productImgLg.png";
import productImgSm from "../../images/productImgSm.png";

export const NeutralViewTransactionCard = () => {
  return (
    <section className="card border-0 shadow p-2" style={{ width: "45rem" }}>
      <div className="align-self-end mt-3">
        <GeneralBtn
          lefticon={<BackIcon />}
          text="Back"
          styles="GeneralBtnStyle1 btn all-btn text-white"
        />
      </div>
      <div class="card-body p-5 ">
        <div className="row mb-2 align-self-center">
          <div className="col-lg-5 col-sm-12 mb-5">
            <img src={productImgLg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-7 col-sm-12">
            {/* Frist Starts */}
            <div>
              <span className="bg-success text-nowrap p-2 text-white rounded shadow fw-bold">
                Clipdowsaw Furniture
              </span>
              <p className="fw-bold text-muted mt-3 mb-2">
                Transaction ID <span className="fs-6">234561</span>
              </p>
              <p className="fw-bolder mb-2">
                Brown lightweight italian leather three seater sofa
              </p>
              <div className="d-flex">
                <span>
                  <RatingIcon />
                  <RatingIcon />
                  <RatingIcon />
                  <RatingIcon />
                  <RatingIcon />
                </span>
                <p className="ms-2">0.0 rating</p>
              </div>
              <span className="d-flex">
                <p className="text-muted fw-bold me-2">Price</p>
                <p className="fw-bold fs-5">₦120,000</p>
              </span>
            </div>
            {/* Frist Ends */}
            {/* Seconds Starts */}
            <div className="">
              <span className="d-flex fw-bold">
                <p className="text-muted me-2">Quantity</p>30
              </span>
              <span className="d-flex text-muted">
                Date<p className="ms-2 fw-bold">14 Aug 2023</p>
              </span>
              <Notifications styles="completed" text="Completed" />.
              <span className="d-flex text-muted">
                Total<p className="ms-2 fw-bold">₦3,600,000</p>
              </span>
            </div>
            {/* Seconds Ends */}
          </div>
        </div>
        {/* Images Section starts */}
        <div className="row">
          <img src={productImgSm} className="col-2" alt="" />
          <img src={productImgSm} className="col-2" alt="" />
          <img src={productImgSm} className="col-2" alt="" />
        </div>
        {/* Images Section Ends */}
      </div>
    </section>
  );
};
