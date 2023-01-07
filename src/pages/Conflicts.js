import { UserSidenav } from "../components/NavbarComponents/SideNavbar";
import { AllConflictsTable } from "../components/TableComponents/ConflictsTable";

export const OpenConflicts = () => {
  return (
    <div className="d-flex w-100">
      <div className="d-none d-lg-block">
        <UserSidenav />
      </div>

      {/* <div className="mx-lg-5 mt-5 shadow InitiateEscrow w-100 p-3 p-lg-5 "> */}
      <AllConflictsTable
      conflictType="open"
      />
      {/* </div> */}
    </div>
  );
};

export const ClosedConflicts = () => {
  return (
    <div className="d-flex w-100">
      <div className="d-none d-lg-block">
        <UserSidenav />
      </div>

      {/* <div className="mx-lg-5 mt-5 shadow InitiateEscrow w-100 p-3 p-lg-5 "> */}
      <AllConflictsTable
      conflictType="closed"
      />
      {/* </div> */}
    </div>
  );
};

export const OngoingConflicts = () => {
  return (
    <div className="d-flex w-100">
      <div className="d-none d-lg-block">
        <UserSidenav />
      </div>

      {/* <div className="mx-lg-5 mt-5 shadow InitiateEscrow w-100 p-3 p-lg-5 "> */}
      <AllConflictsTable
      conflictType="ongoing"
      />
      {/* </div> */}
    </div>
  );
};
