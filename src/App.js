import {
  UserSidenav,
  AdminSidenav,
  CustomerCareSidenav,
  NeutralsSidenav,
} from "./components/NavbarComponents/SideNavbar";
function App() {
  return (
    <div>
      <UserSidenav />
      <br />
      <br />
      <br />
      <AdminSidenav />
      <br />
      <br />
      <br />

      <CustomerCareSidenav />
      <br />
      <br />
      <br />

      <NeutralsSidenav />
    </div>
  );
}

export default App;
