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
import { MiniProfileCard } from "./components/CardComponents/UsersCards";
import { FeedbackIcon } from "./components/IconComponent/UserdashboardIcons";
import {
  BigLogoutIcon,
  ChangeBankIcon,
  ContactUsIcon,
  FaqIcon,
  UpdateProfileIcon,
} from "./components/IconComponent/UserdashboardIcons";
import UserSettingsPage from "./pages/USER_DASHBOARD_PAGES/UserSettingsPage";

// import GeneralPagesRoutes from "./pages/ROUTES/GeneralPagesRoutes";
// import UsersDashboardRoutes from "./pages/ROUTES/UsersDashboardRoutes";

function App() {
  return (
    <Router>
      <UserSettingsPage />
      <Routes>
        {/* GENERAL PAGE ROUTE CAN BE FOUND AT GeneralPagesRoutes */}
        {/* <Route element={<GuestNavbar />}>
          <Route path="/" element={<Homepage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="pricingpage" element={<PricingPage />} />
          <Route path="faqs" element={<FAQs />} />
        </Route> */}

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
