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
import { Footer } from "./components/FooterComponents";
import UsersSideNav from "./components/NavbarComponents/UsersSideNav";
import UserDashboardPage from "./pages/DASHBOARDS/UserDashboardPage";
// import FAQs from "./pages/GENERAL_PAGES/FAQs";
// import GeneralPagesRoutes from "./pages/ROUTES/GeneralPagesRoutes";

function App() {
  return (
    <Router>
      <UserDashboardPage />

      <Routes>
        {/* GENERAL PAGE ROUTE CAN BE FOUND AT GeneralPagesRoutes */}
        <Route element={<GuestNavbar />}>
          {/* <Route path="/" element={<Homepage />} /> */}
          {/* <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/pricingpage" element={<PricingPage />} />
          <Route path="/faqs" element={<FAQs />} /> */}
        </Route>

        <Route path="userdashboard" element={<UsersSideNav />}>
          <Route path="aboutus" element={<AboutUs />} />
        </Route>

        <Route path="neutraldashboard" element={<NeutralsSidenav />}>
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
        {/* <Route path="*" element={<Navigate to={<Error404 />} />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
