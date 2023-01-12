import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { GuestNavbar } from "./components/NavbarComponents/TopNavbars";
import Homepage from "./pages/GENERAL_PAGES/Homepage";
import AboutUs from "./pages/GENERAL_PAGES/AboutUs";
import ContactUs from "./pages/GENERAL_PAGES/ContactUs";
import PricingPage from "./pages/GENERAL_PAGES/PricingPage";
import FAQs from "./pages/GENERAL_PAGES/FAQs";
import Error404 from "./pages/GENERAL_PAGES/Error404";
// import GeneralPagesRoutes from "./pages/ROUTES/GeneralPagesRoutes";
import UserDashboardPage from "./pages/USER_DASHBOARD_PAGES/UserDashboardPage";
// import NotifictionPage from "./pages/USER_DASHBOARD_PAGES/NotifictionPage";
// import TransactionAgreedPage from "./pages/ESCROW_PAGES/transactionAgreedPage";
// import Homepage from "./pages/GENERAL_PAGES/Homepage";

function App() {
  return (
    <Router>
      <UserDashboardPage />
      {/* <NotifictionPage /> */}
      {/* <TransactionSummaryPage /> */}
      {/* <Homepage /> */}

      <Routes>
        {/* GENERAL PAGE ROUTE CAN BE FOUND AT GeneralPagesRoutes */}
        <Route element={<GuestNavbar />}>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="pricingpage" element={<PricingPage />} />
          <Route path="faqs" element={<FAQs />} />
        </Route>{" "}
        {/* <Route path="dashboard" element={<NeutralsSidenav />}>
          <Route path="aboutus" element={<AboutUs />} />
        </Route> */}
        {/* <Route path="*" element={<Navigate to={<Error404 />} />} /> */}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
