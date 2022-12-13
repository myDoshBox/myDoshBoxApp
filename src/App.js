import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	ConflictIssuesCards,
	OngoingConflictCard,
	OpenConflictsCard,
} from "./components/CardComponents/ConflictIssuesCards";
import { ContactUsCard } from "./components/CardComponents/ContactAndInfoCards";
import TransactionHistory from "./components/TableComponents/TransactionHistory";
import About from "./pages/About";
import Neutral_dashboard from "./pages/neutral_dashboard";

function App() {
	return (
		<>
			<Neutral_dashboard />
		</>
	);
}

export default App;
