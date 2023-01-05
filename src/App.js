import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/GENERAL_PAGES/Homepage";
import AboutUs from "./pages/GENERAL_PAGES/AboutUs";
import ContactUs from "./pages/GENERAL_PAGES/ContactUs";
import PricingPage from "./pages/GENERAL_PAGES/PricingPage";
import FAQs from "./pages/GENERAL_PAGES/FAQs";
// import NotifictionPage from "./pages/NotifictionPage";
import TransactionAgreedPage from "./pages/transactionAgreedPage";
import { GuestNavbar } from "./components/NavbarComponents/TopNavbars";
import InitiateEscrow from "./pages/ESCROW_PAGES/InitiateEscrowForm";
import EscrowAgreement from "./pages/ESCROW_PAGES/EscrowAgreement";
import {BuyerDeliveryForm, SellerDeliveryForm} from "./pages/ESCROW_PAGES/ConfirmDelivery";
import BankTransferForm from "./pages/ESCROW_PAGES/BankTransferForm";

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
        		<Route path="seller-delivery-form" element={<SellerDeliveryForm />} />
        <Route path="buyer-delivery-form" element={<BuyerDeliveryForm />} />
        <Route path="bank-transfer-form" element={<BankTransferForm />} />


    {/* //         <Route path="faqs" element={<FAQs />} /> */}
          </Routes>
    </Router>
  );
}

export default App;
