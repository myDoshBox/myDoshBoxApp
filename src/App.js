import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ComplaintForm } from "./components/FormComponents.js/IssuesComplaintForms";

function App() {
  return (
    <>
      <ComplaintForm />
    </>
  );
}

export default App;
