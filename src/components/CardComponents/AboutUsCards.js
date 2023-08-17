import React from "react";

// CoreValueCard
export const CoreValueCard = (props) => {
	const { title, subtitle, description } = props;
	return (
		<div className="card">
			<div className="card-body GreenBackgroundColor rounded-1 p-4">
				<h5 className="card-title text-white fw-bold">{title}</h5>
				<h6 className="card-subtitle mb-2 text-white">{subtitle}</h6>
				<p className="card-text text-white">{description}</p>
			</div>
		</div>
	);
};

export const TeamsCard = (props) => {
	const { name, job_description, description, images } = props;
	return (
		<div className=" container-fluid">
			<div className="shadow-sm border-0 rounded-3 pt-1">
				<div className="col teamValueStyle p-3 rounded-2">
					<div className="card h-100 border-0 teamValueStyle">
						<img src={images} className="card-img-top 75" alt="..." />
						<div className="card-body">
							<p className="card-text text-center">{description}</p>
						</div>
					</div>
					<div className="align-self-end p-3 text-end">
						<h5 className="card-title">{name}</h5>
						<span className="text-muted text-end">{job_description}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

// export const TeamsCard = (props) => {
//   const { name, job_description, description, images } = props;
//   return (
//     <div className=" container-fluid">
//       <div className="shadow-sm border-0 rounded-3 pt-1" style={{ width: "85%" }}>
//         <div className="col teamValueStyle p-3 rounded-2">
//           <div className="card h-100 border-0 teamValueStyle">
//             <img src={images} className="card-img-top 75" alt="..." />
//             <div className="card-body">
//               <p className="card-text text-center">{description}</p>
//             </div>
//           </div>
//           <div className="align-self-end p-3 text-end">
//             <h5 className="card-title">{name}</h5>
//             <span className="text-muted text-end">{job_description}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
