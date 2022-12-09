import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	ConflictIssuesCards,
	OngoingConflictCard,
	OpenConflictsCard,
} from "./components/CardComponents/ConflictIssuesCards";
import { ContactUsCard } from "./components/CardComponents/ContactAndInfoCards";
import About from "./pages/About";

function App() {
	return (
		<>
			<About />
		</>
	);
}

export default App;
