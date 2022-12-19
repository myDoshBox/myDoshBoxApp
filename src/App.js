import React from "react";

import {
  OpenConflictsCard,
  OngoingConflictCard,
  ClosedConflictsCard,
  AllConflictsCard,
  ReportDefectCard,
  InitiateDisputeCard,
  MiniDisputesCard,
  ConflictIssuesCards,
} from "./components/CardComponents/ConflictIssuesCards";
import {
  TicketCard,
  SellerTicketSummaryCard,
  ContestTicketCard,
  AdminDashbordTicketHistoryCard,
  AdminTicketHistoryCard,
  CustomerCareTicketHistory,
  MiniDisputeCard,
} from "./components/CardComponents/TicketsCards";
import { WhyChooseUsCard } from "./components/CardComponents/HomepageCards";
import {
  UpdateProfileCard,
  UpdateBankDetailsCard,
} from "./components/CardComponents/UpdateInfoCards";
import {
  SignInForm,
  SignUpIndividualForm,
  SignUpOrganizationForm,
} from "./components/FormComponents.js/AuthenticationForms";
import {
  Reportissuesform,
  ContestForm,
  ComplaintForm,
} from "./components/FormComponents.js/IssuesComplaintForms";
import {
  UpdateProfile,
  UpdatePassword,
  UpdateBankDetails,
  UserUpdateProfile,
} from "./components/FormComponents.js/UpdateForms";
// import { ContactUsCard } from "./components/CardComponents/ContactAndInfoCards";
// import About from "./pages/About";

function App() {
  return (
    // ConflictissuesCard
    <>
      {/* <div className="mt-5">
        <OpenConflictsCard />
      </div>
      <div className="mt-5">
        <OngoingConflictCard />
      </div>
      <div className="mt-5">
        <ClosedConflictsCard />
      </div>
      <div className="mt-5">
        <AllConflictsCard />
      </div>
      <div className="mt-5">
        <ReportDefectCard />
      </div>
      <div className="mt-5">
        <InitiateDisputeCard />
      </div>
      <div className="mt-5">
        <MiniDisputesCard />
      </div>
      <div className="mt-5">
        <ConflictIssuesCards />
      </div> */}
      // TicketCards
      {/* <div className="mt-5">
        <div className="mt-5">
          <TicketCard />
        </div>
        <div className="mt-5">
          <ClosedConflictsCard />
        </div>
        <div className="mt-5">
          <SellerTicketSummaryCard />
        </div>
        <div className="mt-5">
          <ContestTicketCard />
        </div>
        <div className="mt-5">
          <AdminDashbordTicketHistoryCard />
        </div>
        <div className="mt-5">
          <AdminTicketHistoryCard />
        </div>
        <div className="mt-5">
          <CustomerCareTicketHistory />
        </div>
        <div className="mt-5">
          <MiniDisputeCard />
        </div>
      </div> */}
      // HomepageCards
      {/* <div className="mt-5">
        
        <WhyChooseUsCard />
      </div> */}
      // UpdateCards
      {/* <div>
        <UpdateProfileCard />
        <UpdateBankDetailsCard />
      </div> */}
      // AuthenticationsCard
      {/* <div className="mt-5">
        <SignInForm />
      </div>
      <div className="mt-5">
        <SignUpIndividualForm />
      </div>
      <div className="mt-5">
        <SignUpOrganizationForm />
      </div> */}
      // IssuesComplaintForm
      {/* <div className="mt-5">
        <Reportissuesform />
      </div>
      <div className="mt-5">
        <ContestForm />
      </div>
      <div className="mt-5">
        <ComplaintForm />
      </div> */}
      // UpdateForm
      <div className="mt-5">
        <UpdateProfile />
      </div>
      <div className="mt-5">
        <UpdatePassword />
      </div>
      <div className="mt-5">
        <UpdateBankDetails />
      </div>
      <div className="mt-5">
        <UserUpdateProfile />
      </div>
    </>
  );
}

export default App;
