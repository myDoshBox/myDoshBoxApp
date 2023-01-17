import { CloseConflictTable } from "../../../components/TableComponents/ConflictsTable";
import { UsersSideNav } from "../../../components/NavbarComponents/UsersSideNav";

export const CloseConflict = () => {
  return (
    <section>
      <div>{/* <UsersSideNav /> */}</div>
      <div>
        <CloseConflictTable />
      </div>
    </section>
  );
};
