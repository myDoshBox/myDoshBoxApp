import React from "react";
import { GuestNavbar } from "../../components/NavbarComponents/TopNavbars";
import CustomBtn from "../../components/ButtonsComponent/GenandAuthBtn";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="">
      <GuestNavbar />
      <Error />
    </div>
  );
};

const Error = () => {
  return (
    <div className="row">
      <div className="d-flex flex-column align-items-center col-md-12 col-sm-12 Style404">
        <h1>404</h1>
        <p>The page you are looking for does not exist</p>
      </div>
        <CustomBtn
          value={`Go Back Home`}
          className={`GeneralBtnStyle1 btn all-btn text-white text-center`}
          to="/" 
        />
    </div>
  );
};

export default Error404;
