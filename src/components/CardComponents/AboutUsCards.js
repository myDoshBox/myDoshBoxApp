import React from "react";
import aboutusPix from "../../images/aboutusPix.png";

// CoreValueCard
export const CoreValueCard = () => {
	return (
		<div class="card" style={{ width: "20rem" }}>
			<div class="card-body coreValueStyle rounded-1 p-4">
				<h3 class="card-title text-white">Daily Hard Work</h3>
				<h6 class="card-subtitle mb-2 text-white">
					Lorem ipsum dolor sit amet
				</h6>
				<p class="card-text text-white">
					Lorem ipsum dolor sit amet conur adipiscing dolor sit amet dolor sit
					amet
				</p>
			</div>
		</div>
	);
};

//TeamsCard;
export const TeamsCard = () => {
	return (
		<div class="card mb-3 teamValueStyle p-3 teamsCard col-lg-6">
			<div class="row g-0">
				<div class=" col-lg-5 col-md-4 col-sm-12 ">
					<img
						src={aboutusPix}
						class="img-fluid  rounded-start mx-auto"
						alt="..."
					/>
				</div>
				<div class="col-lg-7 col-md-8 mt-2 col-sm-12">
					<div class="card-body d-flex flex-column align-item-center justify-content-center">
						<h5 class="card-title">Card title</h5>
						<div className="mt-lg-4">
							<p class="card-text text-start">
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
							<div class="card-text text-end me-lg-5 mt-2 ">
								<h6 className="bold">Christian Gabriel</h6>
								<p>CEO</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
