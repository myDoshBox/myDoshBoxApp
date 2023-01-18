import NeutralsSideNav from "../../components/NavbarComponents/NeutralsSideNav";
import { UserSidenav } from "../../components/NavbarComponents/SideNavbar";
import { AllConflictsTable } from "../../components/TableComponents/ConflictsTable";

export const OpenConflicts = () => {
  return (
    <div className="d-flex w-100">
        <NeutralsSideNav />

      <AllConflictsTable conflictType="open" />
    </div>
  );
};

export const ClosedConflicts = () => {
  return (
    <div className="d-flex w-100">
        <NeutralsSideNav />

      <AllConflictsTable conflictType="closed" />
    </div>
  );
};

export const OngoingConflicts = () => {
  return (
    <div className="d-flex w-100">
        <NeutralsSideNav />

      <AllConflictsTable conflictType="ongoing" />
    </div>
  );
};
