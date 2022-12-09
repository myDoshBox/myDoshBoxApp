import React from "react";
import atm from "../images/atm.jpg";

const About = () => {
	return (
		<div>
			<HeroSection />
			<MissionSection/>
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
						modi ratione obcaecati ullam harum ut repellat sit ex iste ipsam.
					</p>
				</div>
				<div className="col-md-6 col-sm-12">
					<img src={atm} alt="img" className="" />
				</div>
			</div>
		</section>
	);
};


const MissionSection = () => {
  return (
	  <div>
		  
	</div>
  )
}


export default About;
