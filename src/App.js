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
			<Routes>
				{/* GENERAL PAGE ROUTE CAN BE FOUND AT GeneralPagesRoutes */}
				<Route path="/*" element={<GeneralPagesRoutes />} />
				<Route path="*" element={<Navigate to={<Error404 />} replace />} />
			</Routes>
		</Router>
	);
}

export default App;
