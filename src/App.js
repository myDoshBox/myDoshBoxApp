import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,

	// Navigate,
} from "react-router-dom";

// General Pages
import { GuestNavbar } from "./components/NavbarComponents/TopNavbars";
import Homepage from "./pages/GENERAL_PAGES/Homepage";
import AboutUs from "./pages/GENERAL_PAGES/AboutUs";
import ContactUs from "./pages/GENERAL_PAGES/ContactUs";
import PricingPage from "./pages/GENERAL_PAGES/PricingPage";
import FAQs from "./pages/GENERAL_PAGES/FAQs";
import Error404 from "./pages/GENERAL_PAGES/Error404";
import Footer from "./components/FooterComponents";

// User Dashoard Pages
import UsersSideNav from "./components/NavbarComponents/UsersSideNav";
import UserDashboardPage from "./features/DASHBOARDS/USER_DASHBOARD/UserDashboardPage";
import NotifictionPage from "./features/DASHBOARDS/USER_DASHBOARD/NotifictionPage";
// import FAQs from "./pages/GENERAL_PAGES/FAQs";
import UserDisputeHistory from "./features/DASHBOARDS/USER_DASHBOARD/UserDisputesHistory";
import UserSettingsPage, {
	ReportIssuesformPage,
	UpdateBankDetailsPage,
	UpdateProfilePage,
} from "./features/DASHBOARDS/USER_DASHBOARD/UserSettingsPage";
import UserTransactionHistory from "./features/DASHBOARDS/USER_DASHBOARD/UserTransactionHistory";
import UserProfile from "./features/DASHBOARDS/USER_DASHBOARD/UserProfile";

// Neutral Dashboard Pages
import NeutralsSideNav from "./components/NavbarComponents/NeutralsSideNav";
// import AdminSideNav from "./components/NavbarComponents/AdminSideNav";
import CustomerCareSideNav from "./components/NavbarComponents/CustomerCareSideNav";
// import GeneralPagesRoutes from "./pages/ROUTES/GeneralPagesRoutes";
import { NeutralSetting } from "./pages/DASHBOARDS/NEUTRALS_PAGES/NeutralSetting";
import NeutralDashboard from "./pages/DASHBOARDS/NEUTRALS_PAGES/neutral_dashboard";

// Auth Pages
import SignInPage from "./pages/AUTHENTICATION_PAGES/SignUp";
import SignUpPage from "./pages/AUTHENTICATION_PAGES/SignIn";

// Transaction Pages
import InitiateEscrow from "./pages/TRANSACTION_PAGES/InitiateEscrowForm";
import TransactionSummaryPage from "./pages/TRANSACTION_PAGES/TransactionSummaryPage";
import EscrowAgreement from "./pages/TRANSACTION_PAGES/EscrowAgreement";

// Dispute Pages
import {
	ClosedConflicts,
	OngoingConflicts,
	OpenConflicts,
} from "./pages/DISPUTE_PAGES/Conflicts";
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
					<Route path="signin" element={<SignInPage />} />
					<Route path="signup" element={<SignUpPage />} />
				</Route>

				{/* User Dashboard */}
				<Route path="userdashboard" element={<UsersSideNav />}>
					<Route index element={<UserDashboardPage />} />
					<Route path="settings" element={<UserSettingsPage />} />
					<Route path="transaction" element={<UserTransactionHistory />} />
					<Route path="dispute" element={<UserDisputeHistory />} />
					<Route path="notification" element={<NotifictionPage />} />
					<Route path="updateprofile" element={<UpdateProfilePage />} />
					<Route path="updatebank" element={<UpdateBankDetailsPage />} />
					<Route path="reportissues" element={<ReportIssuesformPage />} />
					<Route path="initiate-escrow" element={<InitiateEscrow />} />
					<Route path="userspage" element={<UsersPage />} />

					<Route
						path="transactionsummary"
						element={<TransactionSummaryPage />}
					/>
					<Route path="agreement" element={<EscrowAgreement />} />
					<Route path="initiate-dispute" element={<InitiateDisputesForm />} />
					<Route path="ticket" element={<GeneratedTicket />} />
				</Route>

				{/* Neutral Dashboard */}
				<Route path="neutraldashboard" element={<NeutralsSideNav />}>
					<Route index element={<NeutralDashboard />} />
					<Route path="open-conflicts" element={<OpenConflicts />} />
					<Route path="closed-conflicts" element={<ClosedConflicts />} />
					<Route path="transactions" element={<CustomerCareTransaction />} />
					<Route path="ongoing-conflicts" element={<OngoingConflicts />} />
					<Route path="neutralsetting" element={<NeutralSetting />} />
					<Route path="notification" element={<NotifictionPage />} />
				</Route>

				{/* Customer Care Dashboard */}
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

				{/* Auth Routes */}
				{/* <Route path="*" element={<Navigate to={<Error404 />} />} /> */}
				{/* <Route path="signin" element={<SignInPage />} />
				<Route path="signup" element={<SignUpPage />} /> */}
				{/* <Route path="*" element={<Navigate to={<Error404 />} />} /> */}
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
