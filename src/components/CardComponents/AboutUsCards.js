import React from "react";
import aboutusPix from "../../images/aboutusPix.png";
// import { aboutusData } from "../../data/aboutusData.json";

// CoreValueCard
export const CoreValueCard = (props) => {
  const { title, subtitle, description } = props;
  return (
    <div class="card">
      <div class="card-body CoreValueCard rounded-1 p-4">
        <h5 class="card-title text-white fw-bold">{title}</h5>
        <h6 class="card-subtitle mb-2 text-white">{subtitle}</h6>
        <p class="card-text text-white">{description}</p>
      </div>
    </div>
  );
};

//TeamsCard;
export const TeamsCard = (props) => {
  const { name, job_description, description, images } = props;
  return (
    <div class="card mb-3 teamValueStyle p-4 shadow-sm border-1">
      <div class="row g-0">
        <div class="col-lg-5 col-md-4 col-sm-12">
          <img
            src={images}
            class="img-fluid w-75 rounded-start mx-auto"
            alt="..."
          />
        </div>
        <div class="col-lg-7 col-md-8 mt-2 col-sm-12">
          <div class="card-body d-flex flex-column align-item-center justify-content-center">
            {/* <h5 class="card-title">{name}</h5> */}
            <div className="mt-lg-4">
              <p class="card-text text-start">{description}</p>
              <div class="card-text text-end me-lg-5 mt-2 ">
                <h6 className="bold">{name}</h6>
                <p>{job_description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
