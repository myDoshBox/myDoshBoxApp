import { AllConflictsTable } from "../../components/TableComponents/ConflictsTable";
import { UserDashboardNavbar } from "../../components/NavbarComponents/TopNavbars";

export const OpenConflicts = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 col-sm-12 px-0"></div>

        <div className="col-lg-9 col-sm-12 px-0">
          <div className="mt-3 pe-lg-5">
            <UserDashboardNavbar />
          </div>
          <div className="center-card">
            <AllConflictsTable conflictType="open" />
          </div>
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

        <div className="col-lg-9 col-sm-12 px-0">
          <div className="mt-3 pe-lg-5">
            <UserDashboardNavbar />
          </div>
          <div className="center-card">
            <AllConflictsTable conflictType="closed" />
          </div>
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

        <div className="col-lg-9 col-sm-12 px-0">
          <div className="mt-3 pe-lg-5">
            <UserDashboardNavbar />
          </div>
          <div className="center-card">
            <AllConflictsTable conflictType="ongoing" />
          </div>
        </div>
      </div>
    </div>
  );
};
