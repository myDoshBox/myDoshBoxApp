import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,

  // Navigate,
} from "react-router-dom";
import { GuestNavbar } from "./components/NavbarComponents/TopNavbars";
import Homepage from "./pages/GENERAL_PAGES/Homepage";
import AboutUs from "./pages/GENERAL_PAGES/AboutUs";
import ContactUs from "./pages/GENERAL_PAGES/ContactUs";
import PricingPage from "./pages/GENERAL_PAGES/PricingPage";
import FAQs from "./pages/GENERAL_PAGES/FAQs";
import Error404 from "./pages/GENERAL_PAGES/Error404";
import Footer from "./components/FooterComponents";
import UsersSideNav from "./components/NavbarComponents/UsersSideNav";
import UserDashboardPage from "./pages/DASHBOARDS/USER_DASHBOARD/UserDashboardPage";
import NotifictionPage from "./pages/DASHBOARDS/USER_DASHBOARD/NotifictionPage";
// import FAQs from "./pages/GENERAL_PAGES/FAQs";
import UserDisputeHistory from "./pages/DASHBOARDS/USER_DASHBOARD/UserDisputesHistory";
import UserSettingsPage, {
  ReportIssuesformPage,
  UpdateBankDetailsPage,
  UpdateProfilePage,
} from "./pages/DASHBOARDS/USER_DASHBOARD/UserSettingsPage";
import UserTransactionHistory from "./pages/DASHBOARDS/USER_DASHBOARD/UserTransactionHistory";
import NeutralsSideNav from "./components/NavbarComponents/NeutralsSideNav";
// import AdminSideNav from "./components/NavbarComponents/AdminSideNav";
import CustomerCareSideNav from "./components/NavbarComponents/CustomerCareSideNav";
// import GeneralPagesRoutes from "./pages/ROUTES/GeneralPagesRoutes";

// Neutral Pages
import { NeutralSetting } from "./pages/NEUTRALS_PAGES/NeutralSetting";
import NeutralDashboard from "./pages/NEUTRALS_PAGES/neutral_dashboard";
import {
  ClosedConflicts,
  OngoingConflicts,
  OpenConflicts,
} from "./pages/DISPUTE_PAGES/Conflicts";
import SignInPage from "./pages/AUTHENTICATION_PAGES/SignIn";
import SignUpPage from "./pages/AUTHENTICATION_PAGES/SignUp";
import VerifyEmailForm from "./pages/AUTHENTICATION_PAGES/VerifyEmailForm";
import EmailVerificationMsg from "./pages/AUTHENTICATION_PAGES/EmailVerificationMsg";
import ResetPassword from "./pages/AUTHENTICATION_PAGES/resetPassword";
import InitiateEscrow from "./pages/TRANSACTION_PAGES/PRODUCT_TRANSACTION_PAGES/InitiateProductEscrowForm";
import TransactionSummaryPage from "./pages/TRANSACTION_PAGES/PRODUCT_TRANSACTION_PAGES/ProductTransactionSummaryPage";
import EscrowAgreement from "./pages/TRANSACTION_PAGES/EscrowAgreement";
import InitiateDisputesForm from "./pages/DISPUTE_PAGES/InitiateDisputesForm";
import { GeneratedTicket } from "./pages/DISPUTE_PAGES/GeneratedTicket";

// Customer Care Pages
import CustomerCareTransaction from "./pages/DASHBOARDS/CUSTOMER_CARE_DASHBOARD/CustomerCareTransaction";
import TicketHistoryPage from "./pages/DASHBOARDS/CUSTOMER_CARE_DASHBOARD/TicketHistory";
import UsersPage from "./pages/DASHBOARDS/CUSTOMER_CARE_DASHBOARD/UsersPage";
import CustomerCareDashboardPage from "./pages/DASHBOARDS/CUSTOMER_CARE_DASHBOARD/CustomerCareDashboard";

// Admin DashBoard Page
import AdminAnalytics from "./pages/DASHBOARDS/ADMIN_DASHBOARD/AdminAnalytics";
import AdminDashboard from "./pages/DASHBOARDS/ADMIN_DASHBOARD/AdminDashboard";
import AdminSideNav from "./components/NavbarComponents/AdminSideNav";
import UserProfile from "./pages/DASHBOARDS/USER_DASHBOARD/UserProfile";
import { RecentDispute } from "./components/CardComponents/TransactionDetails";
// import { ToastContainer } from "react-bootstrap";
// react_toastify starts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifyEmail from "./pages/AUTHENTICATION_PAGES/EmailVerification";
// react_toastify ends
import PrivateRoute from "./components/PrivateRoute";
import ShippingDetails from "./pages/TRANSACTION_PAGES/unused_pages/ConfirmEscrowProductDetails";
import InitiateProductEscrowForm from "./pages/TRANSACTION_PAGES/PRODUCT_TRANSACTION_PAGES/InitiateProductEscrowForm";
import ProductTransactionSummaryPage from "./pages/TRANSACTION_PAGES/PRODUCT_TRANSACTION_PAGES/ProductTransactionSummaryPage";
import ConfirmEscrowProductDetails from "./pages/TRANSACTION_PAGES/unused_pages/ConfirmEscrowProductDetails";
import SellerProductTransactionSummary from "./pages/TRANSACTION_PAGES/PRODUCT_TRANSACTION_PAGES/SellerProductTransactionSummary";
import ShippingDetailsForm from "./pages/TRANSACTION_PAGES/PRODUCT_TRANSACTION_PAGES/ShippingDetailsForm";
import ShippingDetailsSummary from "./pages/TRANSACTION_PAGES/PRODUCT_TRANSACTION_PAGES/ShippingDetailsSummary";
import SellerShippingHistory from "./pages/DASHBOARDS/USER_DASHBOARD/SellerShippingHistory";
import UserSettledTransaction from "./pages/DASHBOARDS/USER_DASHBOARD/UserSettledTransactions";
import UserSettledTransactions from "./pages/DASHBOARDS/USER_DASHBOARD/UserSettledTransactions";
import UserTransactionsInProgress from "./pages/DASHBOARDS/USER_DASHBOARD/UserTransactionsInProgress";

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
          {/* <Route path="/linkverification" element={<LinkVerificationMsg />} /> */}
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="userdashboard" element={<UsersSideNav />}>
            <Route index element={<UserDashboardPage />} />
            <Route path="settings" element={<UserSettingsPage />} />
            <Route
              path="transaction-history"
              element={<UserTransactionHistory />}
            />
            <Route
              path="transaction-history/transactions-in-progress"
              element={<UserTransactionsInProgress />}
            />
            <Route
              path="transaction-history/settled-transactions"
              element={<UserSettledTransactions />}
            />
            <Route
              path="transaction-history/confirm-escrow-product-transaction/:transaction_id"
              element={<SellerProductTransactionSummary />}
            />
            <Route
              path="transaction-history/confirm-escrow-product-transaction/shipping-details-form/:transaction_id"
              element={<ShippingDetailsForm />}
            />

            {/* http://localhost:3000/userdashboard/transaction-history/confirm-escrow-product-transaction/shipping-details-form/43a38896-a0a8-4334-8d0a-f7da90e8b43a */}
            <Route
              path="transaction-history/confirm-escrow-product-transaction/shipping-details-form/shipping-details-summary/:transaction_id"
              element={<ShippingDetailsSummary />}
            />
            <Route
              path="shipping-history"
              element={<SellerShippingHistory />}
            />
            {/* <Route
                path="confirm-escrow-product-transaction/:transaction_id"
                element={<ProductTransactionSummaryPage />}
              />
            </Route> */}
            <Route path="dispute" element={<UserDisputeHistory />} />
            <Route path="notification" element={<NotifictionPage />} />
            <Route path="updateprofile" element={<UpdateProfilePage />} />
            <Route path="updatebank" element={<UpdateBankDetailsPage />} />
            <Route path="reportissues" element={<ReportIssuesformPage />} />
            <Route
              path="initiate-escrow"
              element={<InitiateProductEscrowForm />}
            />
            <Route path="userspage" element={<UsersPage />} />
            {/* <Route
              path={`transactions-in-progress`}
              element={<ConfirmEscrowProductDetails />}
            /> */}
            <Route
              path={`transactionsummary`}
              element={<ProductTransactionSummaryPage />}
            />
            <Route path="agreement" element={<EscrowAgreement />} />
            <Route path="initiate-dispute" element={<InitiateDisputesForm />} />
            <Route path="ticket" element={<GeneratedTicket />} />
          </Route>
          <Route path="neutraldashboard" element={<NeutralsSideNav />}>
            <Route index element={<NeutralDashboard />} />
            <Route path="open-conflicts" element={<OpenConflicts />} />
            <Route path="closed-conflicts" element={<ClosedConflicts />} />
            <Route path="transactions" element={<CustomerCareTransaction />} />
            <Route path="ongoing-conflicts" element={<OngoingConflicts />} />
            <Route path="neutralsetting" element={<NeutralSetting />} />
            <Route path="notification" element={<NotifictionPage />} />
          </Route>
          <Route path="customer-care" element={<CustomerCareSideNav />}>
            <Route index element={<CustomerCareDashboardPage />} />
            <Route path="tickets-history" element={<TicketHistoryPage />} />
            <Route path="notification" element={<NotifictionPage />} />
            <Route path="settings" element={<NeutralSetting />} />
            <Route path="transactions" element={<CustomerCareTransaction />} />
            <Route path="users" element={<UsersPage />} />
          </Route>

          {/* Admin Routes */}
          <Route path="admin" element={<AdminSideNav />}>
            <Route index element={<AdminDashboard />} />
            <Route path="tickets-history" element={<TicketHistoryPage />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="AdminAnalytics" element={<AdminAnalytics />} />
            <Route path="notification" element={<NotifictionPage />} />
            <Route path="settings" element={<NeutralSetting />} />
            <Route path="transactions" element={<CustomerCareTransaction />} />
            <Route path="users" element={<UsersPage />} />
          </Route>
        </Route>
        {/* <Route path="*" element={<Navigate to={<Error404 />} />} /> */}
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="VerifyEmailForm" element={<VerifyEmailForm />} />
        <Route path="ResetPassword" element={<ResetPassword />} />
        <Route path="linkverification" element={<EmailVerificationMsg />} />
        <Route path={`auth/verify-email`} element={<VerifyEmail />} />
        {/* CHECCCCCCCCCCCCCCCCCCCCCCCCKKKKKKKKK */}
        {/* <Route
          path={`auth/verify-email?token={token}`}
          element={<VerifyEmail />}
        /> */}
        {/* <Route path="*" element={<Navigate to={<Error404 />} />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      <ToastContainer theme="light" />
    </Router>
  );
}

export default App;
