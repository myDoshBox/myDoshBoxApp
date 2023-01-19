import NeutralsSideNav from "../../components/NavbarComponents/NeutralsSideNav";
import { UserSidenav } from "../../components/NavbarComponents/SideNavbar";
import { AllConflictsTable } from "../../components/TableComponents/ConflictsTable";

export const OpenConflicts = () => {
  return (
    <div className="d-flex w-100">
      {/* <NeutralsSideNav /> */}

      <div className="col-lg-9 col-sm-12 mt-5 px-0">
        <AllConflictsTable conflictType="open" />
      </div>
    </div>
  );
};

export const ClosedConflicts = () => {
  return (
    <div className="d-flex w-100">
      {/* <NeutralsSideNav /> */}

      <div className="col-lg-9 col-sm-12 mt-5 px-0">
        <AllConflictsTable conflictType="closed" />
      </div>
    </div>
  );
};

export const OngoingConflicts = () => {
  return (
    <div className="d-flex w-100">
      {/* <NeutralsSideNav /> */}

      <div className="col-lg-9 col-sm-12 mt-5 px-0">
        <AllConflictsTable conflictType="ongoing" />
      </div>
    </div>
  );
};
