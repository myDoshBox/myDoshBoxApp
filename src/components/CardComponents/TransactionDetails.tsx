import { CautionIcon } from "../IconComponent/UserdashboardIcons";
import product from "../../images/productimage.jpg";
import { Link } from "react-router-dom";
import React from "react";
import {
  DashboardConflictCardsProps,
  TransactionDetailsProps,
} from "../ComponentInterfaces/CardInterface/TransactionDetailsInterface";
// import { GeneralBtn } from "../../components/ButtonsComponent/GenandAuthBtn";
// import { BackIcon } from "../../components/IconComponent/NavigationAndViewIcon";
// import { RatingIcon } from "../../components/IconComponent/UserdashboardIcons";
// import { Notifications } from "../../components/NotificationComponent/NotificationComponents";
// import productImgLg from "../../images/productImgLg.png";
// import productImgSm from "../../images/productImgSm.png";

// DashboardConflictCards (Buying,Selling,InitiateTransactionCards,SettledTransactionsCard, ConflictCards)
export const DashboardConflictCards = ({
  icon,
  text,
  value,
  link,
}: DashboardConflictCardsProps) => {
  return (
    <div className="col-md-4 mb-4 mb-lg-0">
      <Link to={link} className="text-decoration-none">
        <div className="d-flex justify-content-center align-items-center px-0 py-4 shadow border-0 rounded-2 DashboardCard">
          {icon}
          <div>
            <p className="m-0 ms-2 opacity-50">{value}</p>
            <p className="m-0 ms-2">{text}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

// heading /sub_text /email /id /description /quality /price /date /total /alert,
// HOW IT'S DONE WENT YOU INVOKE TRANSACTION DETAILs <TransactionDetails>//

/* <TransactionDetails
  heading="Transaction Summary"
  sub_text="Please Confirm the following transaction initiated by user Eland Aaronson"
  email="christianugochukwugabriel@gmail.com"
  id="AeR3mM9Pw"
  description="Brown lightweight italian leather three seater sofa"
  quality="40"
  price="N 120,000"
  date="14 Aug 2023"
  total="N3,600,000"
  alert=" by carefully read through and confirm the details you put in because once you click on proceed, it can nolonger be changed"
/>; */

//These are the component you can use below//

//TransactionCompletedCard /TransactionSummaryCard /TransactionCompletionCard /IndividualTransactionsCard /TransactionAgreedCard /PaymentMadeCard

export const TransactionDetails = ({
  heading,
  sub_text,
  email,
  id,
  description,
  quality,
  price,
  date,
  total,
  alert,
  leftBtn,
  rightBtn,
}: TransactionDetailsProps) => {
  return (
    <>
      <div className="container row mx-auto">
        <div className="col-md-12 col-sm-12">
          <header className="mt-3">
            <h4 className="text-center">{heading}</h4>
            <p className="text-center text-muted fw-light">{sub_text}</p>
          </header>
          <span className="mx-auto img-fluid">
            <img
              src={product}
              className="mx-auto"
              style={{ width: "100%" }}
              alt=""
            />
          </span>

          <div className="card-body">
            <div className="p-3 mt-3">
              <div className="d-flex justify-content-between">
                <h5>Sellers Email</h5>
                <p>{email}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h5>Transaction id</h5>
                <p>{id}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h5>Description</h5>
                <p>{description}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h5>Quality</h5>
                <p>{quality}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h5>Price</h5>
                <p>{price}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h5>Delivery compilation Date</h5>
                <p>{date}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h5>Total</h5>
                <p>{total}</p>
              </div>
            </div>
            <div className="d-flex align-items-center border-danger border-start border-5 mx-auto mt-4 alert alert-danger border-0 rounded-0">
              <CautionIcon />
              <p className="text-danger fs-6 fw-lighter mt-4 ms-3">
                <span className="text-danger fw-bold">Note:</span>
                {alert}
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center text-">
            <div className="me-5">{leftBtn}</div>
            <div>{rightBtn}</div>
          </div>
        </div>
      </div>
    </>
  );
};

// export const NeutralViewTransactionCard = () => {
//   return (
//     <section className="card border-0 shadow p-2" style={{ width: "45rem" }}>
//       <div className="align-self-end mt-3">
//         <GeneralBtn
//           lefticon={<BackIcon />}
//           text="Back"
//           styles="GeneralBtnStyle1 btn all-btn text-white"
//         />
//       </div>
//       <div className="card-body p-5 ">
//         <div className="row mb-2 align-self-center">
//           <div className="col-lg-5 col-sm-12 mb-5">
//             <img src={productImgLg} className="img-fluid" alt="" />
//           </div>
//           <div className="col-lg-7 col-sm-12">
//             {/* Frist Starts */}
//             <div>
//               <span className="bg-success text-nowrap p-2 text-white rounded shadow fw-bold">
//                 Clipdowsaw Furniture
//               </span>
//               <p className="fw-bold text-muted mt-3 mb-2">
//                 Transaction ID <span className="fs-6">234561</span>
//               </p>
//               <p className="fw-bolder mb-2">
//                 Brown lightweight italian leather three seater sofa
//               </p>
//               <div className="d-flex">
//                 <span>
//                   <RatingIcon />
//                   <RatingIcon />
//                   <RatingIcon />
//                   <RatingIcon />
//                   <RatingIcon />
//                 </span>
//                 <p className="ms-2">0.0 rating</p>
//               </div>
//               <span className="d-flex">
//                 <p className="text-muted fw-bold me-2">Price</p>
//                 <p className="fw-bold fs-5">₦120,000</p>
//               </span>
//             </div>
//             {/* Frist Ends */}
//             {/* Seconds Starts */}
//             <div className="">
//               <span className="d-flex fw-bold">
//                 <p className="text-muted me-2">Quantity</p>30
//               </span>
//               <span className="d-flex text-muted">
//                 Date<p className="ms-2 fw-bold">14 Aug 2023</p>
//               </span>
//               <Notifications styles="completed" text="Completed" />.
//               <span className="d-flex text-muted">
//                 Total<p className="ms-2 fw-bold">₦3,600,000</p>
//               </span>
//             </div>
//             {/* Seconds Ends */}
//           </div>
//         </div>
//         {/* Images Section starts */}
//         <div className="row">
//           <img src={productImgSm} className="col-2" alt="" />
//           <img src={productImgSm} className="col-2" alt="" />
//           <img src={productImgSm} className="col-2" alt="" />
//         </div>
//         {/* Images Section Ends */}
//       </div>
//     </section>
//   );
// };
