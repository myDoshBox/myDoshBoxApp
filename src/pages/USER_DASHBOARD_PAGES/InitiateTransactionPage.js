import React from "react";
import { UserDashboardCardsTwo } from "../../components/CardComponents/UsersCards";
import {
  BuyingIcon,
  SellingIcon,
} from "../../components/IconComponent/UserdashboardIcons";

const InitiateTransactionPage = () => {
  return (
    <div>
      <InitiateCard />
    </div>
  );
};

const InitiateCard = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-6 col-sm-12">
        <UserDashboardCardsTwo text={`BUYING`} icon={<BuyingIcon />} />
      </div>
      <div className="col-md-6 col-sm-12">
        <UserDashboardCardsTwo text={`SELLING`} icon={<SellingIcon />} />
      </div>
    </div>
  );
};

export default InitiateTransactionPage;
