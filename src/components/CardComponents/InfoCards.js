// NotificationCard
// LearnMoreCard

import learningImg from "../../assets/images/Learning_illustration-removebg-preview.png"
import SampleUserImg from "../../assets/images/Sample User Image.png"

import { FilterButton, LearnMoreCardButton } from "../ButtonsComponent/OtherButtons"
import { PaginationBar } from "../PaginationComponent"


export const NotificationCard = () => {
  return (
    <div className="NotificationCardWrapper">
      <table className="w-100">
        <thead className="NotificationCardHeader d-flex justify-content-between align-items-center px-5 pt-4 pb-2">
            <h1 className="">Notifications</h1>
            <FilterButton/>
        </thead>
        <tbody>
          <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
              <span className="d-flex justify-content-between align-items-center">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3>Opeyemi Andrewson</h3>
              </span>
              <span>
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
              </span>
              <button className="border border-0 bg-transparent">View More...</button>
          </tr>
          <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
              <span className="d-flex justify-content-between align-items-center">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3>Opeyemi Andrewson</h3>
              </span>
              <span>
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
              </span>
              <button className="border border-0 bg-transparent">View More...</button>
          </tr>
          <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
              <span className="d-flex justify-content-between align-items-center">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3>Opeyemi Andrewson</h3>
              </span>
              <span>
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
              </span>
              <button className="border border-0 bg-transparent">View More...</button>
          </tr> 
          <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
              <span className="d-flex justify-content-between align-items-center">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3>Opeyemi Andrewson</h3>
              </span>
              <span>
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
              </span>
              <button className="border border-0 bg-transparent">View More...</button>
          </tr>
          <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
              <span className="d-flex justify-content-between align-items-center">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3>Opeyemi Andrewson</h3>
              </span>
              <span>
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
              </span>
              <button className="border border-0 bg-transparent">View More...</button>
          </tr>
          <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
              <span className="d-flex justify-content-between align-items-center">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3>Opeyemi Andrewson</h3>
              </span>
              <span>
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
              </span>
              <button className="border border-0 bg-transparent">View More...</button>
          </tr>
          <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
              <span className="d-flex justify-content-between align-items-center">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3>Opeyemi Andrewson</h3>
              </span>
              <span>
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
              </span>
              <button className="border border-0 bg-transparent">View More...</button>
          </tr>
          <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
              <span className="d-flex justify-content-between align-items-center">
                <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
                <h3>Opeyemi Andrewson</h3>
              </span>
              <span>
                <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
              </span>
              <button className="border border-0 bg-transparent">View More...</button>
          </tr>
        </tbody>
        {/* Pagination Component Stays here */}
        <div className="py-3">
        <PaginationBar/>
        </div>
      </table>
    </div>
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