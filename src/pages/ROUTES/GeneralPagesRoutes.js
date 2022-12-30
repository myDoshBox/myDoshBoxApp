import React from "react";
import { Routes, Route } from "react-router-dom";
import { GuestNavbar } from "../../components/NavbarComponents/TopNavbars";
import Homepage from "../GENERAL_PAGES/Homepage";
import AboutUs from "../GENERAL_PAGES/AboutUs";
import ContactUs from "../GENERAL_PAGES/ContactUs";
import PricingPage from "../GENERAL_PAGES/PricingPage";
import FAQs from "../GENERAL_PAGES/FAQs";

const GeneralPagesRoutes = () => {
	return (
		<div>
			<Routes element={<GuestNavbar />}>
				<Route path="/" element={<Homepage />} />
				<Route path="aboutus" element={<AboutUs />} />
				<Route path="contactus" element={<ContactUs />} />
				<Route path="pricingpage" element={<PricingPage />} />
				<Route path="faqs" element={<FAQs />} />
			</Routes>
		</div>
	);
};

export default GeneralPagesRoutes;
