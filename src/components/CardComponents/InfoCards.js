// NotificationCard
// LearnMoreCard

import learningImg from "../../assets/images/Learning_illustration-removebg-preview.png"
import { SortIcon, arrowIcon } from "../IconComponent/UserdashboardIcons"

export const NotificationCard = () => {
  return (
    <div className="NotificationCardWrapper">
      <div className="NotificationCardHeader">
        <h1>Notifications</h1>
        <span className="d-flex align-center NotificationCardSortBtn">
          <SortIcon width="18" height="17"/>
          <div class="dropdown">
  <button class="btn dropdown-toggle p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <span>Sort By:</span> Newest 
    < arrowIcon width="12" height="8" />
            </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Newest</a></li>
    <li><a class="dropdown-item" href="#">Oldest</a></li>
  </ul>
</div>
        </span>
      </div>
    </div>
  )
}
export const LearnMoreCard = () => {
  return (
    <div className="d-flex justify-content-around align-center py-3 py-md-0 LearnMoreCardWrapper">
      <div className="KnowMore d-flex align-center flex-column justify-content-center">
        <h5>Learn More</h5>
        <p className="m-0 mb-sm-2">About how we ensure maximum security for your transactions</p>
        {/* Import the button  */}
        {/* <button className="d-none d-sm-block button">Get Started</button> */}
      </div>
      <div className="KnowMoreImg">
        <img src={learningImg} alt="..." className="w-100" />
      </div>
    </div>
  )
}