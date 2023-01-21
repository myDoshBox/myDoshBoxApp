import React from "react";
import AboutHero from "../../images/AboutUs Image/AboutHero.png";
import mission from "../../images/AboutUs Image/mission.png";
import Vision from "../../images/AboutUs Image/vision.png";
import {
  CoreValueCard,
  TeamsCard,
} from "../../components/CardComponents/AboutUsCards";
import aboutusData from "../../data/aboutusData.json";

const AboutUs = () => {
  return (
    <div>
      <HeroSection />
      <VisionMission />
      <CoreValueSection />
      <TeamsSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="container hero pt-5 mt-5 pb-5">
      <div className="row mb-5">
        <div className="col-md-6 col-sm-12 col-lg-7 align-self-center">
          <h2 className="text-success fw-bold ">
            We're a team of creators & innovators
          </h2>
          <p className="fw-light col-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            modi ratione dolor sit, amet consectetur
          </p>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-5">
          <img src={AboutHero} className="img-fluid" alt="" />
        </div>
      </div>
    </section>
  );
};

const VisionMission = () => {
  return (
    <section className="container pt-5 pb-5">
      <div className="text-center">
        <h3 className="fw-bold">Lorem ipsum dolor </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, Aliquam in hendrerit urna. Pellentesque sit
          amet sapien fringilla, mattis ligula consectetur,
        </p>
      </div>

      {/*  Mission section Starts */}
      <div className="row mt-5 pt-5 container pb-5">
        <div className="col-sm-12 col-md-6 col-lg-6 align-self-center text-sm-center text-xs-center text-md-start text-lg-start">
          <h4 className="fw-bold mb-2">Mission</h4>
          <p className=" fs-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            non, esse cum minus ab iure Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Explicabo non, esse cum minus ab iure.
          </p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5">
          <img src={mission} alt="" />
        </div>
      </div>
      {/* Mission section Ends */}
      {/* Vision section Starts */}
      <div className="row mt-3 mx-auto container">
        <div className="col-sm-12 col-md-6 col-lg-4 d-none d-md-block d-lg-block d-xl-block d-xxl-block text-xs-center">
          <img src={Vision} alt="" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 align-self-center text-sm-center text-md-start text-lg-start text-xs-center">
          <h4 className="fw-bold mb-2">Vision</h4>
          <p className=" fs-lighter">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            non, esse cum minus ab iure Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Explicabo non, esse cum minus ab iure.
          </p>
        </div>
        {/* Sm image Appear */}
        <div className="col-sm-12 col-md-6 col-lg-4 d-block d-sm-block d-md-none">
          <img src={Vision} alt="" />
        </div>
        {/* Sm image Appear */}
      </div>
      {/* Vision Card section Ends */}
    </section>
  );
};

const CoreValueSection = () => {
  return (
    <section className="container pt-5 pb-5">
      <div>
        <div>
          <h3 className="text-center fw-bold pb-3">Core Values</h3>
        </div>

        <div className="container d-flex justify-content-between">
          <div className="row gy-4">
            {aboutusData.corevalues.map((corevalue) => {
              return (
                <div className="col-md-4 col-sm-12" key={corevalue.id}>
                  <CoreValueCard {...corevalue} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamsSection = () => {
  return (
    <section className="mt-5 pt-5 container d-flex flex-column align-items-center pb-5">
      <div className="">
        <h2 className="text-center fw-bold">TEAMS</h2>
        <div className="mb-3 row">
          <h4 className="mb-3 fw-bold">Founder Team</h4>
          {aboutusData.businessteam.map((busteam) => {
            return (
              <div
                className="col-lg-6 mx-auto col-md-auto mb-5"
                key={busteam.id}
              >
                <TeamsCard {...busteam} />
              </div>
            );
          })}
        </div>

        <div className="pt-5 row ">
          <h4 className="mb-3 fw-bold">Brand and Content Team</h4>
          {aboutusData.marketing_team.map((busteam) => {
            return (
              <div
                className="col-lg-6 mx-auto col-md-auto mb-5"
                key={busteam.id}
              >
                <TeamsCard {...busteam} />
              </div>
            );
          })}
        </div>

        <div className="pt-5 row">
          <h4 className="mb-3 fw-bold">Developer Team</h4>
          {aboutusData.developers_team.map((busteam) => {
            return (
              <div className="col-lg-6 mx-auto mb-5 container" key={busteam.id}>
                <TeamsCard {...busteam} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
