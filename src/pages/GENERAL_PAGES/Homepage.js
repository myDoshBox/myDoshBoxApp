import React from "react";
import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";
import { GuestNavbar } from "../../components/NavbarComponents/TopNavbars";
import HeroImage from "../../images/HeroImage.png";
import WhatWeDoImage from "../../images/WhatwedoImage.png";
import OurPartnerImg from "../../images/partners.png";
import {
  OurProcessFlow,
  WhyChooseUsCard,
} from "../../components/CardComponents/HomepageCards";
import homepageData from "../../data/homepageData.json";
import { Link, Outlet } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <HeroSection />
      <WhatWeDo />
      <ProcessFlow />
      <WhyChooseUs />
      <OurPartners />
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="container-fluid pb-2">
      <GuestNavbar />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="container d-flex justify-content-center pb-5">
      <div className="row" id="BackTop">
        <div className="col-md-12 col-sm-12 text-center">
          <h1>
            Lorem ipsum usumm <br /> hums ipsumsera
          </h1>
          <p>Lorem ipsum dolor sitamet dolor</p>
        </div>
        <div className="text-center">
          <Link to="/">
            <GeneralBtn
              text={`START A TRANSACTION`}
              styles={`GeneralBtnStyle1 btn all-btn text-white`}
            />
          </Link>
        </div>
        <div className="mt-4">
          <img src={HeroImage} alt={`Hero Section Image`} className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <div className="container pb-5 mt-5 pt-5">
      <h3 className="text-center pb-2">What we do</h3>
      <div className="row">
        <div className="col-sm-12 .d-none d-sm-block d-md-none">
          <img src={WhatWeDoImage} className="" alt="..." />
        </div>
        <div className="col-sm-12 col-md-8 pt-4">
          <h4>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipis.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
          <GeneralBtn
            text={`LEANRN MORE`}
            styles={`GeneralBtnStyle1 btn all-btn text-white`}
          />
        </div>
        <div className="col-md-4  d-none d-md-block">
          <img src={WhatWeDoImage} className="" alt="..." />
        </div>
      </div>
    </div>
  );
};

const ProcessFlow = () => {
  return (
    <div className="container pb-5 mt-5 pt-5">
      <div className="text-center pb-2">
        {/* <p>Process Flow</p> */}
        <h3>We Like To Make It Easy</h3>
      </div>
      <div className="row">
        {homepageData.ProcessFlow.map((processData) => {
          return (
            <div className="col-sm-12 col-md-3" key={processData.id}>
              <OurProcessFlow {...processData} />
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <GeneralBtn
          text={`Get Started`}
          styles={`GeneralBtnStyle1 btn all-btn text-white`}
        />
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="container pb-5 mt-5 pt-5">
      <div className="text-center pb-2">
        <h3>Why Choose Us</h3>
      </div>
      <div className="row">
        {homepageData.WhyChooseUs.map((chooseUs) => {
          return (
            <div className="col-sm-12 col-md-3" key={chooseUs.id}>
              <WhyChooseUsCard {...chooseUs} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const OurPartners = () => {
  return (
    <div className="PartnerStyle">
      <div className="container pb-5 mt-5 pt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 pt-4">
            <h3 className="d-none d-md-block">
              We work With the <br />
              Best Partners
            </h3>
            <h3 className="d-md-none .d-lg-block text-center">
              We work With the <br />
              Best Partners
            </h3>
            <p className="w-75 d-none d-md-block mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate. consectetur adipiscing elit ipsum dolor sit amet,
              consec
            </p>
            <p className="w-75 d-md-none .d-lg-block text-center ms-5 mt-2 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate. consectetur adipiscing elit ipsum dolor sit amet,
              consec
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={OurPartnerImg} className="" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
