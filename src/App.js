import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  NeutralsSidenav,
  UserSidenav,
} from "./components/NavbarComponents/SideNavbar";
import { GuestNavbar } from "./components/NavbarComponents/TopNavbars";
import Homepage from "./pages/GENERAL_PAGES/Homepage";
import AboutUs from "./pages/GENERAL_PAGES/AboutUs";
import ContactUs from "./pages/GENERAL_PAGES/ContactUs";
import PricingPage from "./pages/GENERAL_PAGES/PricingPage";
import FAQs from "./pages/GENERAL_PAGES/FAQs";
import Error404 from "./pages/GENERAL_PAGES/Error404";
import UserDisputeHistory from "./pages/DASHBOARDS/USER_DASHBOARD/UserDisputesHistory";
import UserSettingsPage from "./pages/DASHBOARDS/USER_DASHBOARD/UserSettingsPage";
import UserTransactionHistory from "./pages/DASHBOARDS/USER_DASHBOARD/UserTransactionHistory";
import { Footer } from "./components/FooterComponents";
import UsersSideNav from "./components/NavbarComponents/UsersSideNav";
import NeutralsSideNav from "./components/NavbarComponents/NeutralsSideNav";
// import GeneralPagesRoutes from "./pages/ROUTES/GeneralPagesRoutes";
// import UsersDashboardRoutes from "./pages/ROUTES/UsersDashboardRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {/* GENERAL PAGE ROUTE CAN BE FOUND AT GeneralPagesRoutes */}
        <Route element={<GuestNavbar />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/pricingpage" element={<PricingPage />} />
          <Route path="/faqs" element={<FAQs />} />
        </Route>

        <Route path="userdashboard" element={<UsersSideNav />}>
          <Route path="usersettings" element={<UserSettingsPage />} />
          <Route path="usertransaction" element={<UserTransactionHistory />} />
          <Route path="userdispute" element={<UserDisputeHistory />} />
        </Route>

        <Route path="neutraldashboard" element={<NeutralsSideNav />}>
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
        {/* <Route path="*" element={<Navigate to={<Error404 />} />} /> */}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
