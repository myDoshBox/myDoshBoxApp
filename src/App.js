import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import GeneralPagesRoutes from "./pages/ROUTES/GeneralPagesRoutes";
import UsersDashboardRoutes from "./pages/ROUTES/UsersDashboardRoutes";
import {
	NeutralsSidenav,
	UserSidenav,
} from "./components/NavbarComponents/SideNavbar";
import Error404 from "./pages/GENERAL_PAGES/Error404";

function App() {
	return (
		<Router>
			<UserSidenav />
			{/* <UserSidenav /> */}
			<Routes>
				{/* GENERAL PAGE ROUTE CAN BE FOUND AT GeneralPagesRoutes */}
				{/* <Route path="/*" element={<GeneralPagesRoutes />} /> */}
				<Route path="dashboard/*" element={<UsersDashboardRoutes />} />
				{/* <Route path="*" element={<Error404 />} /> */}

				{/* USER DASHBOARD ROUTES */}
				{/* <Route path="dashboard/*" element={<NeutralsSidenav />}>
					<Route index element={<SignInForm />} />
					<Route path="goss" element={<SignUpOrganizationForm />} />
					<Route path="transactions" />
					<Route path="transaction_history" />
					<Route path="chats" />
					<Route path="notifications" />
					<Route path="disputes" />
					<Route path="settings" /> */}
				{/* <Route path="*" element={<Error404 />} /> */}
				{/* <Route path="logout" element={<Homepage />} />
				</Route> */}

				<Route path="*" element={<Navigate to={<Error404 />} replace />} />
			</Routes>
		</Router>
	);
}

export default App;
