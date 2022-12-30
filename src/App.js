import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/GENERAL_PAGES/Homepage";
import AboutUs from "./pages/GENERAL_PAGES/AboutUs";
import ContactUs from "./pages/GENERAL_PAGES/ContactUs";
import PricingPage from "./pages/GENERAL_PAGES/PricingPage";
import FAQs from "./pages/GENERAL_PAGES/FAQs";
import { GuestNavbar } from "./components/NavbarComponents/TopNavbars";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        {/* GENERAL PAGES */}
        <Route path="/" element={<Homepage />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="pricingpage" element={<PricingPage />} />
        <Route path="faqs" element={<FAQs />} />
      </Routes>
    </Router>
=======
    <AboutUs />

    //     <Router>
    //
    //       <Routes>
    //         {/* GENERAL PAGES */}
    //         <Route path="/" element={<Homepage />} />
    //         <Route path="aboutus" element={<AboutUs />} />
    //         <Route path="contactus" element={<ContactUs />} />
    //         <Route path="pricingpage" element={<PricingPage />} />
    //         <Route path="faqs" element={<FAQs />} />
    //       </Routes>
    //     </Router>
>>>>>>> b0287d836a12853376bca533df566cb5c07ab2b3
  );
}

export default App;
