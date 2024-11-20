import { useNavigate } from "react-router-dom";
import { TransactionDetails } from "../../../components/CardComponents/TransactionDetails";
import {
  BackIcon,
  NextIcon,
} from "../../../components/IconComponent/NavigationAndViewIcon";
import { Link } from "react-router-dom";
import { UserDashboardNavbar } from "../../../components/NavbarComponents/TopNavbars";
import { useSelector } from "react-redux";

import { BackButton } from "../../../components/ButtonsComponent/NavigationAndViewButtons";
import { ProceedButton } from "../../../components/ButtonsComponent/TransactionButtons";
import { Button } from "react-bootstrap";
import { ShippingDetails } from "../../../components/CardComponents/ShippingDetails";

const ShippingDetailsSummary = () => {
  return (
    <>
      <div className="contestPage">
        <div className="row">
          <div className="col-lg-3 col-sm-12"></div>

          <div className="col-lg-9 col-sm-12">
            <UserDashboardNavbar />
            <div className="mt-5 mb-5">
              <TransactionSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TransactionSummary = () => {
  const { shippingInfo } = useSelector((state) => state.escrowProductInfo);

  // const loggedInUser = localStorage.getItem("userInfo");
  // const userInfo = JSON.parse(loggedInUser).user.email;

  // const { userInfo } = useSelector((state) => state.usersauth);

  // console.log("userEmail", userEmail);
  // const userEmail = userInfo?.user?.email;

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/userdashboard/agreement");
  };

  return (
    <div className="row">
      <div>
        <ShippingDetails
          heading={`Shipping Details Summary`}
          // buyer_email={`Please Confirm the following transaction initiated by user ${userEmail}`}
          transaction_id={shippingInfo?.transaction_id}
          shipping_company={shippingInfo?.shipping_company}
          delivery_person_name={shippingInfo?.delivery_person_name}
          delivery_person_number={shippingInfo?.delivery_person_number}
          delivery_person_email={shippingInfo?.delivery_person_email}
          delivery_date={shippingInfo?.delivery_date}
          pick_up_address={shippingInfo?.pick_up_address}
          alert={` By clicking proceed you are hereby accepting the terms and conditions of the buyer as stated above`}
          leftBtn={
            <Link to={"../initiate-escrow"}>
              <BackButton />
            </Link>
          }
          rightBtn={
            <Button
              className="all-btn border-0 mt-3 GeneralBtnStyle1 btn all-btn text-white"
              style={{ width: "120px" }}
              onClick={handleSubmit}
            >
              PROCEED
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default ShippingDetailsSummary;
