// AnalyticsNewUsersCard {Done}
// UserInflowCard {Postponed as it is a graph}
// MiniUsersCard {Done}
// AllUsersCard 
// UserProfileCard {Done}
// MiniProfileCard
// TotalUsersCard {Done}
// UserTransactionsCard {Done}
// ContactCustomerCareCard {Done}
// LogoutCard {Done}

import { ArrowDownIcon, ArrowUpIcon, CompletedTransactionIcon, TotalUsersIcon } from "../IconComponent/AdminDashboardIcons";
import { BigLogoutIcon, CameraIcon, CompletedDealsIcon, CustomerCareIcon, RatingIcon } from "../IconComponent/UserdashboardIcons";
import Avatar from '../../assets/images/Avatar.jpg'
import { EditProfileButton } from "../ButtonsComponent/EditButtons";
import { ViewMoreButton } from "../ButtonsComponent/NavigationAndViewButtons";
import Table from 'react-bootstrap/Table';



export const AnalyticsNewUsersCard = () => {
  return (
    <div className="AnalyticsNewUsersCard bg-white rounded-3 px-3">
      <div className="text-center"><TotalUsersIcon width="100" height="100"/></div>
      <h3 className="">New Users</h3>
      <p className="">This Month</p>
      <p className="ms-1 fw-light">150</p>
      <p className="small text-end">
        <span>
          <ArrowDownIcon width="11" height="12" />
        </span>
        3.5% Less than last month
      </p>
    </div>
  );
}

export const  TotalUsersCard= () => {
  return (
    <div className="d-flex align-items-center TotalUsersCard bg-white rounded-3">
      <div className="d-flex align-items-center ms-3">
      <div><TotalUsersIcon width="60" height="60" className="mx-3"/></div>
      <div>
        <p>10000</p>
        <p className="TotalUsersCardText">TOTAL USERS</p>
      </div>
      </div>
      <p className="small text-end position-absolute">
        <span>
          <ArrowUpIcon width="11" height="12" />
        </span>
        5% More than last month
      </p>
    </div>
  );
}

export const UserTransactionsCard = () => {
  return (
    <div className="d-flex align-items-center TotalUsersCard bg-white rounded-3">
      <div className="d-flex align-items-center ms-3">
      <div><CompletedTransactionIcon width="60" height="60" className="mx-3"/></div>
      <div>
        <p>1000</p>
        <p className="TotalUsersCardText">TRANSACTIONS COMPLETED</p>
      </div>
      </div>
      <p className="small text-end position-absolute">
        <span>
          <ArrowDownIcon width="11" height="12" />
        </span>
        5% Less than last month
      </p>
    </div>
  );
}

export const ContactCustomerCareCard = () => {
  return (
    <div className="initiate-transaction-card d-flex align-items-center p-3 ">
    <CustomerCareIcon width="60" height="60" className="ms-3"/>

    <p className="ms-3">Chat a Customer Care</p>
  </div>
  );
}

export const LogoutCard = () => {
  return (
    <div className="LogoutCard initiate-transaction-card d-flex align-items-center p-3 ">
      <BigLogoutIcon width="60" height="60" className="ms-3" />

    <p className="ms-3 bg-red">Logout</p>
  </div>
  );
}

export const MiniProfileCard = () => {
  return (
    <div className="MiniProfileCard px-3 pt-2 pb-4 bg-white rounded-3">
      <div className="text-center">
      <img src={Avatar} alt="User Avatar" className=""/>
      <CameraIcon width="20" height="18" className="position-absolute MiniProfileCardCameraIcon pe-auto"/>
      <p>Olasunkanmi Idris</p>
      <p>+234 801 234 5678</p>
      <p>sunkanmiidris@gmail.com</p>
      </div>
      <div className="border-top border-bottom px-4 py-3 mt-4">
        <div><CompletedDealsIcon width="30" height="30"/> 100 deals completed</div>
        <div className="mt-3">
          <RatingIcon width="17" height="18"  className="RatingIcon mx-1"/>
          <RatingIcon width="17" height="18"  className="RatingIcon me-1"/>
          <RatingIcon width="17" height="18"  className="RatingIcon me-1"/>
          <RatingIcon width="17" height="18"  className="RatingIcon me-1"/>
          <RatingIcon width="17" height="18" className="RatingIcon me-2"/>
          0.0 rating</div>
      </div>
      <div className="text-end mt-5"><EditProfileButton/></div>
    </div>
  );
}

export const MiniUsersCard = () => {
  return (
    <div className="bg-white rounded-3 p-3 MiniUsersCard">
      <p className="border-bottom mb-2">All Users</p>
      <Table className="text-center">
      <thead>
        <tr>
          <th>Users ID</th>
          <th>Name</th>
          <th>Transactions Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>45453</td>
          <td>Guy Hawkins</td>
          <td>1245</td>
        </tr>
        <tr>
          <td>45453</td>
          <td>Guy Hawkins</td>
          <td>1245</td>
        </tr>
        <tr>
          <td>45453</td>
          <td>Guy Hawkins</td>
          <td>1245</td>
          </tr>
          <tr>
          <td>45453</td>
          <td>Guy Hawkins</td>
          <td>1245</td>
          </tr>
          <tr>
          <td>45453</td>
          <td>Guy Hawkins</td>
          <td>1245</td>
          </tr>
          <tr>
          <td>45453</td>
          <td>Guy Hawkins</td>
          <td>1245</td>
          </tr>
          <tr>
          <td>45453</td>
          <td>Guy Hawkins</td>
          <td>1245</td>
        </tr>
      </tbody>
    </Table>
      <div className="text-end mt-3">
      <ViewMoreButton/>
      </div>
    </div>
  );
}

// export const AllUsersCard = () => {
//   return (
//     <table className="w-100 NotificationCardWrapper">
//       <button aria-label="Leave Page" className="border-0 bg-transparent pt-2">
//         <span className="NotificationCardBackBtn">
//         <Icon
//           className=" mx-2"
//           icon="ic:outline-arrow-back-ios"
//           color="#006747"
//           width="15"
//         />
//         Back
//         </span>
//       </button>
//         <thead className="NotificationCardHeader d-flex justify-content-between align-items-center px-lg-5 px-2 pt-2 pb-2">
//             <h1 className="">Notifications</h1>
//             <FilterButton/>
//         </thead>
//         <tbody>
//           <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
//               <div className="d-flex justify-content-lg-between align-items-center d-inline">
//                 <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
//                 <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
//               </div>
//               <div className="d-inline">
//                 <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
//                 <small className="d-block d-lg-none">20s ago</small>
//               </div>
//               <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
//           </tr>
//           <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
//               <div className="d-flex justify-content-lg-between align-items-center d-inline">
//                 <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
//                 <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
//               </div>
//               <div className="d-inline">
//                 <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
//                 <small className="d-block d-lg-none">20s ago</small>
//               </div>
//               <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
//         </tr>
//         <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
//               <div className="d-flex justify-content-lg-between align-items-center d-inline">
//                 <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
//                 <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
//               </div>
//               <div className="d-inline">
//                 <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
//                 <small className="d-block d-lg-none">20s ago</small>
//               </div>
//               <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
//         </tr>
//         <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
//               <div className="d-flex justify-content-lg-between align-items-center d-inline">
//                 <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
//                 <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
//               </div>
//               <div className="d-inline">
//                 <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
//                 <small className="d-block d-lg-none">20s ago</small>
//               </div>
//               <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
//         </tr>
//         <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
//               <div className="d-flex justify-content-lg-between align-items-center d-inline">
//                 <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
//                 <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
//               </div>
//               <div className="d-inline">
//                 <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
//                 <small className="d-block d-lg-none">20s ago</small>
//               </div>
//               <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
//         </tr>
//         <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
//               <div className="d-flex justify-content-lg-between align-items-center d-inline">
//                 <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
//                 <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
//               </div>
//               <div className="d-inline">
//                 <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
//                 <small className="d-block d-lg-none">20s ago</small>
//               </div>
//               <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
//           </tr>
//           <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
//               <div className="d-flex justify-content-lg-between align-items-center d-inline">
//                 <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
//                 <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
//               </div>
//               <div className="d-inline">
//                 <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
//                 <small className="d-block d-lg-none">20s ago</small>
//               </div>
//               <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
//           </tr>
//           <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
//               <div className="d-flex justify-content-lg-between align-items-center d-inline">
//                 <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
//                 <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
//               </div>
//               <div className="d-inline">
//                 <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
//                 <small className="d-block d-lg-none">20s ago</small>
//               </div>
//               <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
//           </tr>
//           <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
//               <div className="d-flex justify-content-lg-between align-items-center d-inline">
//                 <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
//                 <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
//               </div>
//               <div className="d-inline">
//                 <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
//                 <small className="d-block d-lg-none">20s ago</small>
//               </div>
//               <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
//           </tr>
//           <tr className="NotificationCardDetails d-flex justify-content-between align-items-center py-3">
//               <div className="d-flex justify-content-lg-between align-items-center d-inline">
//                 <img src={SampleUserImg} alt="SampleUserImg" className="me-3"/>
//                 <h3 className="d-none d-lg-block">Opeyemi Andrewson</h3>
//               </div>
//               <div className="d-inline">
//                 <p>Hi, Buyer Opeyemi Andrewson has just confirmed delivery of the product 100Gb Laptop</p>
//                 <small className="d-block d-lg-none">20s ago</small>
//               </div>
//               <button className="border border-0 bg-transparent d-none d-lg-inline">View More...</button>
//           </tr>
//         </tbody>
//         {/* Pagination Component Stays here */}
//         <div className="d-none d-lg-block py-3">
//         <PaginationBar/>
//         </div>
//       </table>
    
//   )
// }