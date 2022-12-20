import React from "react";
import { Container } from "react-bootstrap";
import aboutusPix from "../../images/aboutusPix.png";

// CoreValueCard
export const CoreValueCard = () => {
  return (
    <>
      <div className="  ">
        <div className="coreValueStyle card-body p-4  rounded-1">
          <h3 className=" text-white">Daily Hard Work</h3>
          <p className="text-white">Lorem ipsum dolor sit amet </p>
          <p className="col-lg-11 text-white">
            Lorem ipsum dolor sit amet conur adipiscing dolor sit amet dolor sit
            amet
          </p>
        </div>
      </div>
    </>
  );
};

// TeamsCard
export const TeamsCard = () => {
  return (
    <>
      <div className=" row teamValueStyle p-3 w-75">
        <div className=" col-lg-4  col-md-5  col-sm-8   ">
          <img src={aboutusPix} className="img-fluid Img_size" alt="Team-Img" />
        </div>
        <div className=" col-lg-6 col-md-7 mt-5 text-wrap ">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            corrupti iure accusamus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Obcaecati corrupti iure accusamus. corrupti iure
            accusamus.
          </p>
          <aside className="mt-3 text-end mt-2">
            <h6 className="bold">Christian Gabriel</h6>
            <p>CEO</p>
          </aside>
        </div>
      </div>
    </>
  );
};

// // TeamsCard
export const TeamsCardTwo = () => {
  return (
    <>
      <div className=" row teamValueStyle2 p-3 w-75">
        <div className=" col-lg-4  col-md-5  col-sm-8   ">
          <img src={aboutusPix} className="img-fluid Img_size" alt="Team-Img" />
        </div>
        <div className=" col-lg-6 col-md-7 mt-5 text-wrap  ">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            corrupti iure accusamus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Obcaecati corrupti iure accusamus. corrupti iure
            accusamus.
          </p>
          <aside className="mt-3 text-end mt-2">
            <h6 className="bold text-white">Christian Gabriel</h6>
            <p className="text-white text-muted">CEO</p>
          </aside>
        </div>
      </div>
    </>
  );
};
