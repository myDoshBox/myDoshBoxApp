import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GuestNavbar } from "./components/NavbarComponents/TopNavbars";
import { ComplaintForm } from "./components/FormComponents.js/IssuesComplaintForms";
import { BuyerEscrowInitiationForm } from "./components/FormComponents.js/TransactionForms";
import InitiateDisputesForm from "./pages/DISPUTE_PAGES/InitiateDisputesForm";
import Homepage from "./pages/GENERAL_PAGES/Homepage";
import AboutUs from "./pages/GENERAL_PAGES/AboutUs";
import ContactUs from "./pages/GENERAL_PAGES/ContactUs";
import PricingPage from "./pages/GENERAL_PAGES/PricingPage";
import FAQs from "./pages/GENERAL_PAGES/FAQs";

function App() {
  return (
    <Router>
      <GuestNavbar />
      <InitiateDisputesForm />
      <Routes>
        {/* GENERAL PAGES */}
        <Route path="/" element={<Homepage />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="pricingpage" element={<PricingPage />} />
        <Route path="faqs" element={<FAQs />} />
      </Routes>
    </Router>
  );
}

export default App;
