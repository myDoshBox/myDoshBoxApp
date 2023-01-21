import NeutralsSideNav from "../../components/NavbarComponents/NeutralsSideNav";
import { UserSidenav } from "../../components/NavbarComponents/SideNavbar";
import { AllConflictsTable } from "../../components/TableComponents/ConflictsTable";

export const OpenConflicts = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 col-sm-12 px-0"></div>

        <div className="col-lg-9 col-sm-12 mt-5 px-0">
          <AllConflictsTable conflictType="open" />
        </div>
      </div>
    </div>
  );
};

export const ClosedConflicts = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 col-sm-12 px-0"></div>

        <div className="col-lg-9 col-sm-12 mt-5 px-0">
          <AllConflictsTable conflictType="closed" />
        </div>
      </div>
    </div>
  );
};

export const OngoingConflicts = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 col-sm-12 px-0"></div>

        <div className="col-lg-9 col-sm-12 mt-5 px-0">
          <AllConflictsTable conflictType="ongoing" />
        </div>
      </div>
    </div>
  );
};
