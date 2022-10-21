// NotificationCard
// LearnMoreCard

import learningImg from "../../assets/images/Learning_illustration-removebg-preview.png"
import SampleUserImg from "../../assets/images/Sample User Image.png"

import { FilterButton, LearnMoreCardButton } from "../ButtonsComponent/OtherButtons"
import { PaginationBar } from "../PaginationComponent"
import { Icon } from "@iconify/react";

export const NotificationCard = () => {
  return (
    <table className="w-100 NotificationCardWrapper">
      <button aria-label="Leave Page" className="border-0 bg-transparent pt-2 d-lg-none">
        <span className="NotificationCardBackBtn">
        <Icon
          className=" mx-2"
          icon="ic:outline-arrow-back-ios"
          color="#006747"
          width="15"
        />
        Back
        </span>
      </button>
        <thead className="NotificationCardHeader d-flex justify-content-between align-items-center px-lg-5 px-2 pt-2 pb-2">
            <h1 className="">Notifications</h1>
            <FilterButton/>
        </thead>
        <tbody>
          <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
              <div className="d-flex justify-content-lg-between align-items-center d-inline">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
              </div>
              <div className="d-inline">
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
                <small className="d-block d-lg-none">20s ago</small>
              </div>
              <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
          </tr>
          <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
              <div className="d-flex justify-content-lg-between align-items-center d-inline">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
              </div>
              <div className="d-inline">
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
                <small className="d-block d-lg-none">20s ago</small>
              </div>
              <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
        </tr>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
              <div className="d-flex justify-content-lg-between align-items-center d-inline">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
              </div>
              <div className="d-inline">
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
                <small className="d-block d-lg-none">20s ago</small>
              </div>
              <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
        </tr>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
              <div className="d-flex justify-content-lg-between align-items-center d-inline">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
              </div>
              <div className="d-inline">
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
                <small className="d-block d-lg-none">20s ago</small>
              </div>
              <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
        </tr>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
              <div className="d-flex justify-content-lg-between align-items-center d-inline">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
              </div>
              <div className="d-inline">
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
                <small className="d-block d-lg-none">20s ago</small>
              </div>
              <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
        </tr>
        <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
              <div className="d-flex justify-content-lg-between align-items-center d-inline">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
              </div>
              <div className="d-inline">
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
                <small className="d-block d-lg-none">20s ago</small>
              </div>
              <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
          </tr>
          <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
              <div className="d-flex justify-content-lg-between align-items-center d-inline">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
              </div>
              <div className="d-inline">
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
                <small className="d-block d-lg-none">20s ago</small>
              </div>
              <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
          </tr>
          <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
              <div className="d-flex justify-content-lg-between align-items-center d-inline">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
              </div>
              <div className="d-inline">
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
                <small className="d-block d-lg-none">20s ago</small>
              </div>
              <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
          </tr>
          <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly align-items-center py-3">
              <div className="d-flex justify-content-lg-between align-items-center d-inline">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
              </div>
              <div className="d-inline">
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
                <small className="d-block d-lg-none">20s ago</small>
              </div>
              <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
          </tr>
          <tr className="NotificationCardDetails d-flex justify-content-between justify-content-sm-evenly  align-items-center py-3">
              <div className="d-flex justify-content-lg-between align-items-center d-inline">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
              </div>
              <div className="d-inline">
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
                <small className="d-block d-lg-none">20s ago</small>
              </div>
              <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
          </tr>
        </tbody>
        {/* Pagination Component Stays here */}
        <div className="py-3">
        <PaginationBar/>
        </div>
      </table>
    
  )
}
export const LearnMoreCard = () => {
  return (
    <div className="d-flex justify-content-around align-center py-3 py-md-0 LearnMoreCardWrapper">
      <div className="KnowMore d-flex align-center flex-column justify-content-center">
        <h5>Learn More</h5>
        <p className="m-0 mb-sm-2">About how we ensure maximum security for your transactions</p>
        <LearnMoreCardButton/>
      </div>
      <div className="KnowMoreImg">
        <img src={learningImg} alt="..." className="w-100" />
      </div>
    </div>
  )
}