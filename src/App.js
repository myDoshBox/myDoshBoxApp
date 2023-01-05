import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/GENERAL_PAGES/Homepage";
import AboutUs from "./pages/GENERAL_PAGES/AboutUs";
import ContactUs from "./pages/GENERAL_PAGES/ContactUs";
import PricingPage from "./pages/GENERAL_PAGES/PricingPage";
import FAQs from "./pages/GENERAL_PAGES/FAQs";
import { GuestNavbar } from "./components/NavbarComponents/TopNavbars";
import InitiateEscrow from "./pages/ESCROW_PAGES/InitiateEscrowForm";
import EscrowAgreement from "./pages/ESCROW_PAGES/EscrowAgreement";

function App() {
  return (
    

        <Router>
    <Routes>
           {/* GENERAL PAGES */}
            <Route path="/" element={<Homepage />} />
    {/* //         <Route path="aboutus" element={<AboutUs />} /> */}
    {/* //         <Route path="contactus" element={<ContactUs />} /> */}
    {/* //         <Route path="pricingpage" element={<PricingPage />} /> */}
        <Route path="escrow" element={<InitiateEscrow />} />
        		<Route path="agreement" element={<EscrowAgreement />} />


    {/* //         <Route path="faqs" element={<FAQs />} /> */}
          </Routes>
    </Router>
  );
}

export default App;
