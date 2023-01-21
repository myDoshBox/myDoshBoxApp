import React from "react";
import aboutusPix from "../../images/aboutusPix2.png";

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

// TeamsCard;
// export const TeamsCard = (props) => {
//   const { name, job_description, description, images } = props;
//   return (
//     <div class="card mb-3 teamValueStyle p-4 shadow-sm border-1">
//       <div class="row g-0">
//         <div class="col-lg-5 col-md-4 col-sm-12">
//           <img
//             src={images}
//             class="img-fluid w-75 rounded-start mx-auto"
//             alt="..."
//           />
//         </div>
//         <div class="col-lg-7 col-md-8 mt-2 col-sm-12">
//           <div class="card-body d-flex flex-column align-item-center justify-content-center">
//             <div className="mt-lg-4">
//               <p class="card-text text-start">{description}</p>
//               <div class="card-text text-end me-lg-5 mt-2 ">
//                 <h6 className="bold">{name}</h6>
//                 <p>{job_description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const TeamsCard = (props) => {
//   const { name, job_description, description, images } = props;
//   return (
//     <div class="shadow" style={{ width: "40&" }}>
//       <div class="col">
//         <div class="card h-100">
//           <img
//             src={images}
//             class="card-img-top align-self-center teamValueStyle"
//             alt="..."
//           />
//           <div class="card-body teamValueStyle">
//             <p class="card-text text-center">{description}</p>
//             <span className="d-flex flex-column align-items-end p-2">
//               <h6 class="card-title">{name}</h6>
//               <small class="text-muted">{job_description}</small>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const TeamsCard = (props) => {
  const { name, job_description, description, images } = props;
  return (
    <div className=" container-fluid">
      <div class="shadow-sm border-0 rounded-3 pt-1" style={{ width: "85%" }}>
        <div class="col teamValueStyle p-3 rounded-2">
          <div class="card h-100 border-0 teamValueStyle">
            <img src={images} class="card-img-top 75" alt="..." />
            <div class="card-body">
              <p class="card-text text-center">{description}</p>
            </div>
          </div>
          <div class="align-self-end p-3 text-end">
            <h5 class="card-title">{name}</h5>
            <span class="text-muted text-end">{job_description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
