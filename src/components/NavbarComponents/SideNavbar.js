//Neutrals Sidenav
//Admin Sidenav
//CustomerCareSidenav
//UserSidenav

import { Nav, Navbar, Button, Container, Form } from "react-bootstrap";
import logo from "../../assets/images/doshlogo.jpg";
import logo2 from "../../assets/images/doshlogolight.jpg";
import image from "../../assets/images/image.jpg";
import { Icon } from '@iconify/react';

export const NeutralsSidenav = () => {
  return (
    <aside className="SideNav d-flex align-center flex-column" >
      <div>
        <img className="SideNavLogo ps-3 mt-3" src={logo} alt="MyDoshBox Logo"/>
      </div>
      <div className="SideNavItems d-flex justify-content-between align-center flex-column mt-5 h-100">
        <ul className="ps-3">
          <li className="d-flex SideNavItem mt-3">
            <Icon icon="cil:home" width="30" height="30" className="me-3" />
            <span className="mt-2">Dashboard</span>
          </li>
          <li className="d-flex SideNavItem mt-3">
            <Icon icon="cil:home" width="30" height="30" className="me-3" />
            <span className="mt-2">Transactions</span>
          </li>
          <li className="d-flex SideNavItem mt-3">
            <Icon icon="cil:home" width="30" height="30" className="me-3" />
            <span className="mt-2">History</span>
          </li>
          <li className="d-flex SideNavItem mt-3">
            <Icon icon="cil:home" width="30" height="30" className="me-3" />
            <span className="mt-2">Chats</span>
          </li>
          <li className="d-flex SideNavItem mt-3">
            <Icon icon="cil:home" width="30" height="30" className="me-3" />
            <span className="mt-2">Notifications</span>
          </li>
          <li className="d-flex SideNavItem mt-3">
            <Icon icon="cil:home" width="30" height="30" className="me-3" />
            <span className="mt-2">Disputes</span>
          </li>
          <li className="d-flex SideNavItem mt-3">
            <Icon icon="cil:home" width="30" height="30" className="me-3" />
            <span className="mt-2">Settings</span>
          </li>
        </ul>
        <ul className="ps-3">
        <li className="d-flex SideNavItem "><Icon icon="cil:home" width="30" height="30" className="me-3" /><span className="mt-2">Logout</span></li>
        </ul>
      </div>
    </aside>
  );
};

