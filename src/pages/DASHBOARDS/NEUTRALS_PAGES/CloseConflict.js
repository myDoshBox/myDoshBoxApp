import { CloseConflictTable } from "../../../components/TableComponents/ConflictsTable";
import NeutralsSideNav from "../../../components/NavbarComponents/NeutralsSideNav";
export const CloseConflict = () => {
  return (
    <section className="row">
      {/* <div className="col-3">
        <NeutralsSideNav />
      </div> */}
      <div className="col-9">
        <CloseConflictTable />
      </div>
    </section>
  );
};
