import React from "react";
import atm from "../images/atm.jpg";
import aboutusData from "../data/aboutusData.json";
import {
	CoreValueCard,
	NewTeamCard,
	TeamsCard,
	TeamsCardTwo,
} from "../components/CardComponents/AboutUsCards";

const About = () => {
	return (
		<div>
			<HeroSection />
			<CoreValuesSection />
			<TeamsSection />
		</div>
	);
};

const HeroSection = () => {
	return (
		<section className="hero container d-flex justify-content-center">
			<div className="row">
				<div className="col-md-6 col-sm-12">
					<h1>We are a team of creators and innovators</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
						modi ratione obcaecati ullam harum ut repellat sit ex iste ipsamhh.
					</p>
				</div>
				<div className="col-md-6 col-sm-12">
					<img src={atm} alt="img" className="" />
				</div>
			</div>
		</section>
	);
};

const CoreValuesSection = () => {
	return (
		<div>
			<h2>Core Values</h2>

			<div className="container">
				<div className="row g-5">
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
	);
};

const TeamsSection = () => {
	return (
		<>
			<div className="mb-3">
				<h3>Business Team</h3>
				{aboutusData.businessteam.map((busteam) => {
					return (
						<div key={busteam.id}>
							<TeamsCard {...busteam} />
						</div>
					);
				})}
			</div>

			<div className="pt-5 container d-flex flex-column align-items-start">
				<h3>Marketing and Developer Team</h3>
				{aboutusData.marketing_dev_team.map((busteam) => {
					return (
						<div key={busteam.id}>
							<NewTeamCard {...busteam} />
						</div>
					);
				})}
			</div>

			<div className="pt-5">
				<h3>Founder</h3>
				{aboutusData.founder_team.map((busteam) => {
					return (
						<div key={busteam.id}>
							<TeamsCardTwo {...busteam} />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default About;
